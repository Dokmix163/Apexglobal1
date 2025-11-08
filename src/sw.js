const CACHE_NAME = 'apexglobal-v3';
const urlsToCache = [
  '/',
  '/styles.css',
  '/app.js',
  '/logo.png',
  '/zavod_1.png',
  '/manifest.webmanifest'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  // Принудительно активируем новый service worker
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Берем контроль над всеми страницами
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Не кешируем HTML файлы - всегда получаем свежую версию
  if (event.request.url.endsWith('.html') || event.request.url.endsWith('/')) {
    event.respondWith(
      fetch(event.request).then((response) => {
        return response;
      }).catch(() => {
        return caches.match(event.request);
      })
    );
    return;
  }
  
  // Для остальных файлов используем кеш с fallback на сеть
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetchResponse) => {
        // Кешируем только успешные ответы
        if (fetchResponse && fetchResponse.status === 200) {
          const responseToCache = fetchResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return fetchResponse;
      });
    })
  );
});
