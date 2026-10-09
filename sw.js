/* Service worker do Plantão do Dia.
   Guarda os arquivos no primeiro acesso para o app abrir sem internet.
   Ao publicar uma versão nova, troque o número do CACHE. */
var CACHE = "plantao-do-dia-v1";

var ARQUIVOS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable.png"
];

self.addEventListener("install", function (evento) {
  evento.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(ARQUIVOS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (evento) {
  evento.waitUntil(
    caches.keys().then(function (nomes) {
      return Promise.all(nomes.map(function (nome) {
        return nome === CACHE ? null : caches.delete(nome);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", function (evento) {
  if (evento.request.method !== "GET") return;

  evento.respondWith(
    caches.match(evento.request).then(function (guardado) {
      if (guardado) return guardado;
      return fetch(evento.request).then(function (resposta) {
        // Guarda o que vier do mesmo endereço, para a próxima vez funcionar offline.
        if (resposta && resposta.status === 200 && resposta.type === "basic") {
          var copia = resposta.clone();
          caches.open(CACHE).then(function (cache) {
            cache.put(evento.request, copia);
          });
        }
        return resposta;
      }).catch(function () {
        return caches.match("./index.html");
      });
    })
  );
});
