const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const nodemailer = require('nodemailer');

// Загружаем переменные окружения в development режиме
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const fsp = fs.promises;

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const ROOT = __dirname;
const STATIC_DIR = path.join(ROOT, NODE_ENV === 'production' ? 'dist' : 'src');
const DATA_DIR = path.join(ROOT, 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

// Простая in-memory защита: лимит запросов на IP
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 минут
const RATE_LIMIT_MAX = 20; // максимум 20 запросов за окно на IP
const rateStore = new Map(); // ip -> { count, windowStart }

function getClientIp(req) {
  const xfwd = req.headers['x-forwarded-for'];
  if (typeof xfwd === 'string' && xfwd.length > 0) {
    return xfwd.split(',')[0].trim();
  }
  return req.socket.remoteAddress || 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateStore.get(ip) || { count: 0, windowStart: now };
  if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    entry.count = 0;
    entry.windowStart = now;
  }
  entry.count += 1;
  rateStore.set(ip, entry);
  return entry.count > RATE_LIMIT_MAX;
}

function validateInquiry(body) {
  const errors = [];
  const data = {
    name: body?.name ? String(body.name).trim() : '',
    phone: body?.phone ? String(body.phone).trim() : '',
    email: body?.email ? String(body.email).trim() : '',
    productId: body?.productId ? String(body.productId).trim() : '',
    message: body?.message ? String(body.message).trim() : ''
  };

  if (!data.name || data.name.length < 2) {
    errors.push('Укажите имя (не менее 2 символов).');
  }
  if (!data.productId) {
    errors.push('Выберите продукт.');
  }
  if (!data.phone && !data.email) {
    errors.push('Укажите телефон или email.');
  }

  if (data.phone) {
    const digits = data.phone.replace(/\D+/g, '');
    if (!(digits.length >= 11 && (digits.startsWith('7') || digits.startsWith('8')))) {
      errors.push('Телефон указан в неверном формате.');
    }
  }

  if (data.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailRegex.test(data.email)) {
      errors.push('Email указан в неверном формате.');
    }
  }

  return { data, errors };
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.txt': 'text/plain; charset=utf-8'
};

function sendJson(res, status, data) {
  const payload = JSON.stringify(data);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  });
  res.end(payload);
}

// Маппинг ID продуктов на названия
const PRODUCT_NAMES = {
  'apexcore-320': 'ApexCore 320',
  'apexflex-210': 'ApexFlex 210',
  'apexmobile-160': 'ApexMobile 160',
  'apexcompact-120': 'ApexCompact 120',
  'apexpro-400': 'ApexPro 400'
};

// Настройка nodemailer
function createTransporter() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT || 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecure = process.env.SMTP_SECURE === 'true';

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn('⚠️  SMTP настройки не заданы. Email отправка отключена.');
    return null;
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(smtpPort, 10),
    secure: smtpSecure, // true для 465, false для других портов
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });
}

// Функция отправки email
async function sendInquiryEmail(inquiryData) {
  const transporter = createTransporter();
  if (!transporter) {
    console.warn('Email не отправлен: SMTP не настроен');
    return;
  }

  const emailTo = process.env.EMAIL_TO || 'sales@apexglobals.ru';
  const emailFrom = process.env.EMAIL_FROM || process.env.SMTP_USER;
  const productName = PRODUCT_NAMES[inquiryData.productId] || inquiryData.productId;

  const subject = `Новая заявка с сайта ApexGlobal: ${productName}`;

  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #c9a857; color: #070b10; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; color: #333; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Новая заявка с сайта ApexGlobal</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Имя и компания:</div>
            <div class="value">${escapeHtml(inquiryData.name)}</div>
          </div>
          <div class="field">
            <div class="label">Телефон:</div>
            <div class="value"><a href="tel:${escapeHtml(inquiryData.phone)}">${escapeHtml(inquiryData.phone)}</a></div>
          </div>
          ${inquiryData.email ? `
          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${escapeHtml(inquiryData.email)}">${escapeHtml(inquiryData.email)}</a></div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Выбранный комплекс:</div>
            <div class="value">${escapeHtml(productName)}</div>
          </div>
          ${inquiryData.message ? `
          <div class="field">
            <div class="label">Комментарий:</div>
            <div class="value">${escapeHtml(inquiryData.message).replace(/\n/g, '<br>')}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Дата и время:</div>
            <div class="value">${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}</div>
          </div>
        </div>
        <div class="footer">
          <p>Это автоматическое уведомление с сайта <a href="https://apexglobals.ru">apexglobals.ru</a></p>
        </div>
      </div>
    </body>
    </html>
  `;

  const textBody = `
Новая заявка с сайта ApexGlobal

Имя и компания: ${inquiryData.name}
Телефон: ${inquiryData.phone}
${inquiryData.email ? `Email: ${inquiryData.email}` : ''}
Выбранный комплекс: ${productName}
${inquiryData.message ? `Комментарий: ${inquiryData.message}` : ''}

Дата и время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
  `;

  try {
    const info = await transporter.sendMail({
      from: `"ApexGlobal Site" <${emailFrom}>`,
      to: emailTo,
      subject: subject,
      text: textBody,
      html: htmlBody
    });

    console.log('✅ Email отправлен:', info.messageId);
  } catch (error) {
    console.error('❌ Ошибка отправки email:', error);
    throw error;
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function appendInquiry(payload) {
  await fsp.mkdir(DATA_DIR, { recursive: true });

  let existing = [];

  try {
    const content = await fsp.readFile(INQUIRIES_FILE, 'utf-8');
    existing = JSON.parse(content);
    if (!Array.isArray(existing)) {
      existing = [];
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  existing.push({
    ...payload,
    createdAt: new Date().toISOString()
  });

  await fsp.writeFile(INQUIRIES_FILE, JSON.stringify(existing, null, 2), 'utf-8');
}

function serveStatic(req, res, urlPath) {
  const safePath = path.normalize(urlPath).replace(/^(\.\.[/\\])+/, '');
  const filePath = path.join(
    STATIC_DIR,
    safePath === '/' ? 'index.html' : safePath
  );

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      if (safePath !== '/' && !safePath.includes('.')) {
        // Для маршрутов без расширения отдаём index.html (SPA-навигация).
        return serveStatic(req, res, '/');
      }

      // Для 404 отдаём специальную страницу
      const notFoundPath = path.join(STATIC_DIR, '404.html');
      fs.stat(notFoundPath, (notFoundErr, notFoundStats) => {
        if (!notFoundErr && notFoundStats.isFile()) {
          const stream = fs.createReadStream(notFoundPath);
          res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
          stream.pipe(res);
        } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Файл не найден');
        }
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    const stream = fs.createReadStream(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    stream.pipe(res);
  });
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf-8');
        if (!raw) {
          resolve({});
          return;
        }
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const { pathname } = requestUrl;

  if (req.method === 'POST' && pathname === '/api/inquiry') {
    try {
      const ip = getClientIp(req);
      if (isRateLimited(ip)) {
        return sendJson(res, 429, {
          status: 'error',
          message: 'Слишком много запросов. Попробуйте позже.'
        });
      }

      const body = await parseBody(req);

      // Honeypot: если боты заполняют скрытое поле — отклоняем
      if (body && typeof body.website === 'string' && body.website.trim() !== '') {
        return sendJson(res, 200, { status: 'ok', message: 'Спасибо.' });
      }

      const { data, errors } = validateInquiry(body);
      if (errors.length) {
        return sendJson(res, 400, {
          status: 'error',
          message: errors.join(' ')
        });
      }

      // Сохраняем заявку в файл
      await appendInquiry(data);

      // Отправляем email (не блокируем ответ, если email не отправится)
      sendInquiryEmail(data).catch((emailError) => {
        console.error('Не удалось отправить email (заявка сохранена):', emailError);
      });

      return sendJson(res, 200, {
        status: 'ok',
        message: 'Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.'
      });
    } catch (error) {
      console.error('Ошибка обработки заявки', error);
      return sendJson(res, 500, {
        status: 'error',
        message: 'Не удалось обработать заявку. Попробуйте позже.'
      });
    }
  }

  if (req.method === 'GET' && pathname === '/api/health') {
    return sendJson(res, 200, { status: 'ok', env: NODE_ENV });
  }

  serveStatic(req, res, pathname);
});

server.listen(PORT, () => {
  console.log(`🚀 Сервер ApexGlobal запущен на порту ${PORT} (режим: ${NODE_ENV}).`);
});
