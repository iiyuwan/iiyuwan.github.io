/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5951ed7cc9ce1e5667b9b08837cba1bf"
  },
  {
    "url": "a.png",
    "revision": "d0fdfc52c4b27ac2b9da3afa13590bb0"
  },
  {
    "url": "assets/css/0.styles.800e8056.css",
    "revision": "5960c151411687e3ec480de9bb9d7b7d"
  },
  {
    "url": "assets/img/avatar.18324963.jpg",
    "revision": "18324963c18c7aa5951ac12e5d91f4a1"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.888421ed.js",
    "revision": "de3de074a05101340a1c3855048fb674"
  },
  {
    "url": "assets/js/10.2ebf5ec1.js",
    "revision": "7f125ca33b648d833bbcf7b30341e90a"
  },
  {
    "url": "assets/js/11.cc8c06d0.js",
    "revision": "ee489be3a9e2cc5c9527efbbf3e31eb1"
  },
  {
    "url": "assets/js/12.4e49b7e3.js",
    "revision": "60329529dc18d7cb3c5e2c7a87534c55"
  },
  {
    "url": "assets/js/13.2a94106a.js",
    "revision": "8b6dae726a41c02da9ab54dcd16d738b"
  },
  {
    "url": "assets/js/14.72d4f7d2.js",
    "revision": "2565f0f7ee217875401aaa25eaf8fd75"
  },
  {
    "url": "assets/js/15.00455c69.js",
    "revision": "149295912cf41a27a1ad70630ea60fd7"
  },
  {
    "url": "assets/js/16.f1163fdc.js",
    "revision": "6f4e654571f2cb010fa32102e51c3f9d"
  },
  {
    "url": "assets/js/17.fb2a183a.js",
    "revision": "2a37184b4eb695fd9cc70bb55efb44e1"
  },
  {
    "url": "assets/js/18.8d2efd56.js",
    "revision": "07b5c0698da9d0c992362e55acacd45c"
  },
  {
    "url": "assets/js/19.924cfb63.js",
    "revision": "13b3f082d8d0ee70e007b977d4d8ce61"
  },
  {
    "url": "assets/js/20.501dff39.js",
    "revision": "4a2f8bb155ffa804aca72f6bf72a09b8"
  },
  {
    "url": "assets/js/3.b7716030.js",
    "revision": "de16e7da9f052a51912a78a2d95a5c4f"
  },
  {
    "url": "assets/js/4.a7933602.js",
    "revision": "bc6187c8664c3a9c02a2e8e11bac19d2"
  },
  {
    "url": "assets/js/5.359e9e42.js",
    "revision": "da3239b8f9eb0d16072118f9cc9b9838"
  },
  {
    "url": "assets/js/6.2651bbcc.js",
    "revision": "cd069dd184d97fa6065f024d3880d37c"
  },
  {
    "url": "assets/js/7.c62f8047.js",
    "revision": "3d98331dc49868cd6acbada6a58515df"
  },
  {
    "url": "assets/js/8.9c26733f.js",
    "revision": "087236419e0efab37bc9604eec05de0f"
  },
  {
    "url": "assets/js/9.45f8ca57.js",
    "revision": "9640c189a380b3aac7a6087155bb9019"
  },
  {
    "url": "assets/js/app.af8cac2b.js",
    "revision": "71623de134e374b12a59b95746745d85"
  },
  {
    "url": "avatar.jpg",
    "revision": "18324963c18c7aa5951ac12e5d91f4a1"
  },
  {
    "url": "b.jpg",
    "revision": "09668990b12c4e1737a24f4a6b718eeb"
  },
  {
    "url": "blogs/CSS/flex.html",
    "revision": "ba7c9e4473ab2d8ca35cfbd133a114a2"
  },
  {
    "url": "blogs/Other/build.html",
    "revision": "d321d541c6305b2c6bdeb328c869a1e1"
  },
  {
    "url": "blogs/Other/collection.html",
    "revision": "55a134105e10d9d04907ca2a704d258f"
  },
  {
    "url": "blogs/Vue/2021/052101.html",
    "revision": "a3765e85b5bd7f513fce5cd1bd552bfc"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "54df74e3b1b3fbc3527b3671de042b98"
  },
  {
    "url": "categories/index.html",
    "revision": "428867067ad7e40d882f42cc4b1428d6"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "8b6a94f4764f59468df1e02fa1d064b8"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "c2d47d2344352e190fb221322818b19d"
  },
  {
    "url": "docs/design-pattern/index.html",
    "revision": "6ae1c2f198e1fd4c5cd772ed475ddff4"
  },
  {
    "url": "docs/design-pattern/singleten-pattern.html",
    "revision": "8f2e42dbe64f9864c3fc163b71df4706"
  },
  {
    "url": "docs/ES6/for-in.html",
    "revision": "2afc0171d428eb3a3de3bf71af761fa8"
  },
  {
    "url": "docs/ES6/index.html",
    "revision": "3fd223bd9a57413dfb681895acc80285"
  },
  {
    "url": "home_bg.jpg",
    "revision": "58988fae26a46ed2ed3366e61fc7632a"
  },
  {
    "url": "index.html",
    "revision": "e001b2f10662d81ccd5b8dbfb20997ec"
  },
  {
    "url": "tag/index.html",
    "revision": "c7f13c9c22722462e10505fc5f0a0033"
  },
  {
    "url": "tag/前端框架/index.html",
    "revision": "0e049b9b34d4f26fbc85a2f355fa72a1"
  },
  {
    "url": "timeline/index.html",
    "revision": "ab8a6f8209a64bb28e98df32ff1d08e8"
  },
  {
    "url": "w.jpg",
    "revision": "2955a6555d30f89cf0bd8a5eafa9c348"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
