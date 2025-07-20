// service-worker.js
self.addEventListener("install", event => {
    event.waitUntil(
      caches.open("watchlist-cache").then(cache => {
        return cache.addAll([
          "index.html",
          "manifest.json",
          "icon-192.png",
          "icon-512.png"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  