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

self.addEventListener('fetch', event=> {
    let response = fetch(event.request);
    event.respondWith(response);
});