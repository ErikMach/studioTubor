const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "index.html",
      "css/index.css",
      "js/index.js",
      "js/classSchedule.js",
      "js/initSW.js",
      "res/img/bg/ballet_1.webp",
      "res/img/bg/polunin_2.webp",
      "res/fonts/barkelia/Barkelia.ttf",
      "res/fonts/lato/Lato.woff2",
      "res/fonts/cafeta/Cafeta.woff2",
      "res/fonts/english/English.woff2"
    ])
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes("js")) {
    // Network First
    event.respondWith(
      fetch(event.request).catch(error => {
        return caches.match(event.request) ;
      })
    )
  } else {
    // Cache First
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        // It can update the cache to serve updated content on the next request
        return cachedResponse || fetch(event.request);
      })
    )
  }
});