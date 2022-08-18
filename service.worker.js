const version = 'v1';
const cacheName = `ahj-${version}`;
const files = ['/', '/main.css'];

async function putFilesToCache(files) {
  const cache = await caches.open(cacheName);
  await cache.addAll(files);
}

async function removeOldCache(retain) {
  const keys = await caches.keys();
  return Promise.all(keys.filter(key => !retain.includes(key)).map(key => caches.delete(key)));
}

self.addEventListener('install', (evt) => {
  console.log(evt);
  evt.waitUntil(( async() => {
    await putFilesToCache(files);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (evt) => {
  console.log(evt);
  evt.waitUntil(( async () => {
    await removeOldCache([cacheName])
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then( response => {
      return response || fetch(evt.request);
    }).catch(() => {
      return caches.match('/');
    })
  );
});
