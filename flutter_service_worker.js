'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aaafa928a4f8616604eca12d830fe765",
"index.html": "b240095f968f98f01715c1d1f50e5a75",
"/": "b240095f968f98f01715c1d1f50e5a75",
"main.dart.js": "13291fd581d88afb8833f0d7e1e5bca9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"assets/AssetManifest.json": "82d3fc4f1bf89f71d4c03284b09935ca",
"assets/NOTICES": "8ea4d9927b342da9667d6605b981d165",
"assets/FontManifest.json": "5d0405f8315654dabfa69ad1b263993e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/email.png": "775dfe7f630b37076c29d0e16e21ffcf",
"assets/assets/images/flutter_logo.png": "5cd7cc66c0c9b116450c65de57f628f9",
"assets/assets/images/laptop.gif": "e0f5c8495f417b5c1a2424a8db393c08",
"assets/assets/images/app_development.gif": "16dac65b8eb9cd8da3e189ab0fc75393",
"assets/assets/images/android-logo.png": "1cc3b38fd2d51c91fb49e2acae16e96c",
"assets/assets/images/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/images/hust.png": "d8b10ed402e913e09e59f2b3644faefb",
"assets/assets/images/background.jpg": "63444049e6886dc55ec2a97cd5507b12",
"assets/assets/images/avatar.png": "acf785271f1dd0ac994fe850bb944a89",
"assets/assets/images/skype.png": "b60c47eca061c4eb588735f1d7cfe880",
"assets/assets/images/b13.jpg": "9955d1f3544f51b64d4e55841ed68af9",
"assets/assets/images/linkedin.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/assets/images/phone.png": "34d66e54e782337f82f8cbaf51ad3fa0",
"assets/assets/images/pyco.png": "5c9bf27dba4ee9ad6548c1ad78317c0e",
"assets/assets/images/acazia.png": "67c17394cbf84bfdc174a1b47901946d",
"assets/assets/images/react_native_logo.png": "ad2e6dded24d936dd676df6667ec6e51",
"assets/assets/images/digital.jpeg": "92eb192cfc489dcabee712916e3c629f",
"assets/assets/langs/en.json": "8090e3d3be0930ecf1025ec7d4570872",
"assets/assets/icons/contact.svg": "9e9f400834011bddd47df80455a8d255",
"assets/assets/icons/like.svg": "f57cbe518979f300b3092da54a4ca4b5",
"assets/assets/icons/working.svg": "b5c8499af0ce6a815eca14eff36a2837",
"assets/assets/icons/group.svg": "d14b7daa2b296dc6b454e3f8cd3d476c",
"assets/assets/icons/projects.svg": "22c634f8982f7889c879450600e2b0c7",
"assets/assets/icons/code.svg": "f5e2820f5ee5500523d2655a41daacf4",
"assets/assets/icons/client.svg": "3cb12629429186e143317c4c424d6694",
"assets/assets/icons/skills.svg": "335ecf24a0b7691768b8855ba4d80a63",
"assets/assets/icons/summary.svg": "51927df151815b830dadb46a8be8583e",
"assets/assets/icons/sun.svg": "75822d50f25d32dcdce330d7a42eb54e",
"assets/assets/icons/education.svg": "fd68934f1d3dde604cfd1d9dfe330b61",
"assets/assets/icons/language.svg": "a6f374860a5adcecfdeb5dd94ea2ad75",
"assets/assets/icons/timeline.svg": "b5c8499af0ce6a815eca14eff36a2837",
"assets/assets/icons/moon.svg": "c8fdf72a817fc2d465857f11cdda4059",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/data/summary.json": "9d282a149c33cccbfa28245d2eac601f",
"assets/assets/data/education.json": "a6de3ee1cffd469242da7a0b2620e3df",
"assets/assets/data/experience.json": "1ad4d3ab838df1adf020ab91311af128",
"assets/assets/data/projects.json": "378975d8beeb3d91c52cb1f1b9756b63",
"assets/assets/data/skills.json": "8e8db53393591cf2dd8fcd821add650b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
