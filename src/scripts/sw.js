import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './icons/favicon.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];


// event
self.addEventListener('install', event => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

// event
self.addEventListener('activate', event => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', event => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
