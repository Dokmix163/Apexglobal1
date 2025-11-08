const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const fsp = fs.promises;

// Маппинг ID продуктов на названия
const PRODUCT_NAMES = {
  'apexcore-320': 'ApexCore 320',
  'apexflex-210': 'ApexFlex 210',
  'apexmobile-160': 'ApexMobile 160',
  'apexcompact-120': 'ApexCompact 120',
  'apexpro-400': 'ApexPro 400'
};

// Простая in-memory защита: лимит запросов на IP
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 минут
const RATE_LIMIT_MAX = 20; // максимум 20 запросов за окно на IP
const rateStore = new Map(); // ip -> { count, windowStart }

function getClientIp(req) {
  const xfwd = req.headers['x-forwarded-for'];
  if (typeof xfwd === 'string' && xfwd.length > 0) {
    return xfwd.split(',')[0].trim();
  }
  return req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown';
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

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

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
    secure: smtpSecure,
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

// Vercel serverless function
module.exports = async (req, res) => {
  // Устанавливаем CORS заголовки
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Обработка preflight запросов
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Только POST запросы
  if (req.method !== 'POST') {
    return res.status(405).json({
      status: 'error',
      message: 'Метод не разрешен'
    });
  }

  try {
    const ip = getClientIp(req);
    
    if (isRateLimited(ip)) {
      return res.status(429).json({
        status: 'error',
        message: 'Слишком много запросов. Попробуйте позже.'
      });
    }

    const body = req.body || {};

    // Honeypot: если боты заполняют скрытое поле — отклоняем
    if (body && typeof body.website === 'string' && body.website.trim() !== '') {
      return res.status(200).json({ status: 'ok', message: 'Спасибо.' });
    }

    const { data, errors } = validateInquiry(body);
    
    if (errors.length) {
      return res.status(400).json({
        status: 'error',
        message: errors.join(' ')
      });
    }

    // Отправляем email (не блокируем ответ, если email не отправится)
    sendInquiryEmail(data).catch((emailError) => {
      console.error('Не удалось отправить email (заявка сохранена):', emailError);
    });

    return res.status(200).json({
      status: 'ok',
      message: 'Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.'
    });
  } catch (error) {
    console.error('Ошибка обработки заявки', error);
    return res.status(500).json({
      status: 'error',
      message: 'Не удалось обработать заявку. Попробуйте позже.'
    });
  }
};

