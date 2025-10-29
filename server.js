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

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
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

      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Файл не найден');
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
      const body = await parseBody(req);
      const { name, phone, email, productId, message } = body;

      if (!name || (!phone && !email) || !productId) {
        return sendJson(res, 400, {
          status: 'error',
          message: 'Заполните имя, выберите продукт и оставьте телефон или email.'
        });
      }

      await appendInquiry({
        name: String(name).trim(),
        phone: phone ? String(phone).trim() : '',
        email: email ? String(email).trim() : '',
        productId: String(productId).trim(),
        message: message ? String(message).trim() : ''
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
