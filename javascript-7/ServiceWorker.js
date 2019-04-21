const VERSION = 'v1.00.2';

const cacheResources = async () => {
    const cacheFilesFirst = [
        './',
        './public/VIEWS/ATM.html',
        './public/CSS/Foundation.css',
        './public/CSS/ATM.css',
        './public/JAVASCRIPTS/ATM.js',
        './public/JAVASCRIPTS/EventHandler.js',
        './public/FAVICONS/huntington favicon 16.jpg',
    ];
    const cache = await caches.open(VERSION);
    return cache.addAll(cacheFilesFirst);
};

self.addEventListener('install', async (event) => {
    event.waitUntil(cacheResources());
    await self.skipWaiting();
});

const cachedResource = async (request) => {
    const cache = await caches.open(VERSION);
    return await cache.match(request);
};

self.addEventListener('activate', async (event) => {
    console.log(`SW activated:  ${event}`);
    await self.clients.claim();
});

self.addEventListener('fetch', async (event) => {
    console.log(`Fetch event: ${event.request.url}`);
    if (event.request.url.endsWith(`overrides.css`)) {
        await event.respondWith(fetch('/public/css/overrides2.css'));
    } else {
        await event.respondWith(cachedResource(event.request));
    }
});

self.addEventListener('push', async (event) => {

});

self.addEventListener('sync', async (event) => {

});