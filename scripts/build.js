#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

const fsp = fs.promises;

const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'src');
const DIST_DIR = path.join(ROOT, 'dist');

// Генерируем хэш для файла
function getFileHash(content) {
  return crypto.createHash('md5').update(content).digest('hex').substring(0, 8);
}

async function removeDir(target) {
  if (!fs.existsSync(target)) {
    return;
  }
  await fsp.rm(target, { recursive: true, force: true });
}

async function processCSS(srcPath, destPath) {
  const css = await fsp.readFile(srcPath, 'utf8');
  const result = await postcss([autoprefixer]).process(css, {
    from: srcPath,
    to: destPath,
    map: false
  });
  await fsp.writeFile(destPath, result.css, 'utf8');
}

async function copyFileWithProcessing(srcPath, destPath) {
  // Обрабатываем CSS файлы через autoprefixer
  if (srcPath.endsWith('.css')) {
    await processCSS(srcPath, destPath);
  } else {
    await fsp.copyFile(srcPath, destPath);
  }
}

async function copyDir(src, dest) {
  await fsp.mkdir(dest, { recursive: true });
  const entries = await fsp.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      await copyFileWithProcessing(srcPath, destPath);
    }
  }
}

async function updateHTMLWithVersions() {
  const htmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    return;
  }

  let html = await fsp.readFile(htmlPath, 'utf8');
  
  // Читаем файлы и генерируем хэши
  const cssPath = path.join(DIST_DIR, 'styles.css');
  const jsPath = path.join(DIST_DIR, 'app.js');
  
  let cssHash = '';
  let jsHash = '';
  
  if (fs.existsSync(cssPath)) {
    const cssContent = await fsp.readFile(cssPath, 'utf8');
    cssHash = getFileHash(cssContent);
  }
  
  if (fs.existsSync(jsPath)) {
    const jsContent = await fsp.readFile(jsPath, 'utf8');
    jsHash = getFileHash(jsContent);
  }
  
  // Обновляем ссылки в HTML
  if (cssHash) {
    html = html.replace(/styles\.css(\?v=[^"']*)?/g, `styles.css?v=${cssHash}`);
  }
  
  if (jsHash) {
    html = html.replace(/app\.js(\?v=[^"']*)?/g, `app.js?v=${jsHash}`);
  }
  
  await fsp.writeFile(htmlPath, html, 'utf8');
  
  if (cssHash || jsHash) {
    console.log(`• Версии файлов обновлены: CSS=${cssHash}, JS=${jsHash}`);
  }
}

async function build() {
  const start = Date.now();
  console.log('• Очистка каталога dist…');
  await removeDir(DIST_DIR);

  console.log('• Копирование и обработка файлов…');
  await copyDir(SRC_DIR, DIST_DIR);

  console.log('• CSS обработан с автопрефиксером');
  
  console.log('• Обновление версий в HTML…');
  await updateHTMLWithVersions();

  const duration = ((Date.now() - start) / 1000).toFixed(2);
  console.log(`Готово за ${duration} c. Сборка находится в папке dist.`);
}

build().catch((error) => {
  console.error('❌ Ошибка сборки:', error);
  process.exit(1);
});
