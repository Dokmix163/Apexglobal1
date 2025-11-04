#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

const fsp = fs.promises;

const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'src');
const DIST_DIR = path.join(ROOT, 'dist');

async function removeDir(target) {
  if (!fs.existsSync(target)) {
    return;
  }
  await fsp.rm(target, { recursive: true, force: true });
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
      await fsp.copyFile(srcPath, destPath);
    }
  }
}

async function processCSS(srcPath, destPath) {
  const css = await fsp.readFile(srcPath, 'utf8');
  const result = await postcss([autoprefixer]).process(css, {
    from: srcPath,
    to: destPath
  });
  await fsp.writeFile(destPath, result.css);
  if (result.map) {
    await fsp.writeFile(destPath + '.map', result.map.toString());
  }
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

async function build() {
  const start = Date.now();
  console.log('• Очистка каталога dist…');
  await removeDir(DIST_DIR);

  console.log('• Копирование и обработка файлов…');
  await copyDir(SRC_DIR, DIST_DIR);

  console.log('• CSS обработан с автопрефиксером');

  const duration = ((Date.now() - start) / 1000).toFixed(2);
  console.log(`Готово за ${duration} c. Сборка находится в папке dist.`);
}

build().catch((error) => {
  console.error('❌ Ошибка сборки:', error);
  process.exit(1);
});
