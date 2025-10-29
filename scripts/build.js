#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

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

async function build() {
  const start = Date.now();
  console.log('• Очистка каталога dist…');
  await removeDir(DIST_DIR);

  console.log('• Копирование статических файлов…');
  await copyDir(SRC_DIR, DIST_DIR);

  const duration = ((Date.now() - start) / 1000).toFixed(2);
  console.log(`Готово за ${duration} c. Сборка находится в папке dist.`);
}

build().catch((error) => {
  console.error('❌ Ошибка сборки:', error);
  process.exit(1);
});
