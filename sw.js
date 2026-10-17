const CACHE='sopralluoghi-v1.0.0';
const FILES=['./','index.html','style.css','app.js','exports.js','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png','vendor/jspdf.min.js','vendor/autotable.min.js','vendor/exceljs.min.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('sopralluoghi-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request)));});
