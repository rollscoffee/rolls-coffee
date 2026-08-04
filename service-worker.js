const CACHE_NAME = "rolls-coffee-v2";

const BASE = "/rolls-coffee/";

const FILES_TO_CACHE = [

    BASE,
BASE + "index.html",

BASE + "css/style.css",

BASE + "js/utils.js",
BASE + "js/database.js",
BASE + "js/product-card.js",
BASE + "js/favorite.js",
BASE + "js/script.js",
BASE + "js/modal.js",
BASE + "js/cart.js",
BASE + "js/checkout.js",
BASE + "js/navbar.js",
BASE + "js/animation.js",
BASE + "js/fly-cart.js",
BASE + "js/toast.js",
BASE + "js/app.js",

BASE + "images/logo.png",

BASE + "images/icons/icon-72.png",
BASE + "images/icons/icon-96.png",
BASE + "images/icons/icon-128.png",
BASE + "images/icons/icon-192.png",
BASE + "images/icons/icon-384.png",
BASE + "images/icons/icon-512.png"

];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(FILES_TO_CACHE))
        .then(() => self.skipWaiting())

    );

});

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys =>

        Promise.all(

            keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))

        )

        ).then(() => self.clients.claim())

    );

});

self.addEventListener("fetch", event => {

    if (event.request.method !== "GET") return;

    event.respondWith(

        caches.match(event.request)

        .then(response => {

            if (response) return response;

            return fetch(event.request)

            .then(networkResponse => {

                return networkResponse;

            });

        })

    );

});
