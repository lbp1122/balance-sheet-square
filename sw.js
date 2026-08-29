const CACHE_NAME = "balance-sheet-square-github-v1";
const BASE = new URL("./", self.location.href).pathname;
const CORE_FILES = [
  BASE,
  `${BASE}index.html`,
  `${BASE}manifest.webmanifest`,
  `${BASE}favicon.svg`,
  `${BASE}assets/index-oqU_5FqV.js`,
  `${BASE}assets/index-Cu4wlAZi.css`
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin || !requestUrl.pathname.startsWith(BASE)) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          if (response.ok) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, response.clone()));
          }
          return response;
        })
        .catch(() => cached || (event.request.mode === "navigate" ? caches.match(`${BASE}index.html`) : undefined));

      return cached || network;
    })
  );
});
