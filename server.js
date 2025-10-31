const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

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

      await appendInquiry(data);

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
