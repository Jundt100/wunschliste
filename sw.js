// Service Worker der Wunschliste
// Holt immer zuerst die neueste Version aus dem Netz und nimmt nur ohne Internet die gespeicherte Kopie.
// Daten (Firebase) laufen nicht hier durch.
const CACHE = "wunschliste-v1";
const DATEIEN = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(namen => Promise.all(namen.filter(n => n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const anfrage = e.request;
  if (anfrage.method !== "GET" || new URL(anfrage.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(anfrage)
      .then(antwort => {
        const kopie = antwort.clone();
        caches.open(CACHE).then(c => c.put(anfrage, kopie));
        return antwort;
      })
      .catch(() => caches.match(anfrage).then(t => t || caches.match("./index.html")))
  );
});
