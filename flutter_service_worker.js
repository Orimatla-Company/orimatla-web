'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "345eeaa236b9b14582ddeb43358242dd",
"/": "345eeaa236b9b14582ddeb43358242dd",
"version.json": "ceac33676338664534854283f96f197e",
"manifest.json": "74a43e8114acc2340be2ccc41ca796dc",
"main.dart.js": "93712fcdfc1909d1361e104a12dbc575",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/FontManifest.json": "69bf597a618dd00a5986a0a438955d53",
"assets/AssetManifest.json": "476c1ba293d9ad8ee8b188c8165cc6fb",
"assets/packages/localization/test/assets/lang/pt_BR.json": "9ffc2c445faf9826e0674a1307556b81",
"assets/packages/localization/test/assets/lang/en_US.json": "f804772a0a14b39a256d2f8d55fee786",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "f0b929aed6b695e783c8ecc3c9cdbe05",
"assets/packages/localization/test/assets/lang2/en_US.json": "f2824790f4a447de0c6286f377feffa2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "1fba2f97cdc7d793098d17de72b4af88",
"assets/assets/lang/pt_BR.json": "b2a84deb872732fde835fef4feef726a",
"assets/assets/lang/es_ES.json": "d35f03419780f8cc47ce8d480dc435ed",
"assets/assets/lang/en_US.json": "09c43fd44c1fd4bb1f0b660c1dc6e840",
"assets/assets/images/logo_orimatla_color_h.svg": "ab7c7893bc67076764bd320abd66a8e5",
"assets/assets/fonts/rubik/Rubik-BlackItalic.ttf": "8cf69a68225e1e451dce1b020f6b5338",
"assets/assets/fonts/rubik/Rubik-Light.ttf": "a742834a58e74553d141450a7dddf5c0",
"assets/assets/fonts/rubik/Rubik-Black.ttf": "3aba47ab577eb14101eb03ac977e6523",
"assets/assets/fonts/rubik/Rubik-Medium.ttf": "11f22f212ab3e9b8e241cbd69d3c43e7",
"assets/assets/fonts/rubik/Rubik-SemiBoldItalic.ttf": "54dcba8bf2c662865ee2196d3b66cbfa",
"assets/assets/fonts/rubik/Rubik-ExtraBoldItalic.ttf": "fa59927d716d7c9ca34785107a9f83d5",
"assets/assets/fonts/rubik/Rubik-Regular.ttf": "cd619a4f068dc66cc6e58fe0a91a8a34",
"assets/assets/fonts/rubik/Rubik-BoldItalic.ttf": "8aa7fa4bac8320541a6a01b558c53879",
"assets/assets/fonts/rubik/Rubik-MediumItalic.ttf": "56ed0c74858b75d48c461069715efcd5",
"assets/assets/fonts/rubik/Rubik-ExtraBold.ttf": "4b77292b266f2231d56f432424a86df2",
"assets/assets/fonts/rubik/Rubik-SemiBold.ttf": "75852e6bdc48c05b3c39f4b3b94d2a9c",
"assets/assets/fonts/rubik/Rubik-Bold.ttf": "071fcca9ce48f336894f072bae4c2440",
"assets/assets/fonts/rubik/Rubik-LightItalic.ttf": "de021b8d7886b2a0e8c5783d95fb55d5",
"assets/assets/fonts/rubik/Rubik-Italic.ttf": "25387d7be6e19cdf09b5e8b627ddeaf5",
"assets/assets/icons/user_name_icon.svg": "851a1cf5b6c4a39e189b8e8443ecb068",
"assets/assets/icons/download.svg": "ae9312237812b48c837db0fcbffc80ae",
"assets/assets/icons/upload.svg": "57e7320ff29429ef6c44cc0d063da59e",
"assets/assets/icons/arrow_front_circle.svg": "20ee7e18de191b7c739795bb53a59360",
"assets/assets/icons/open_eye.svg": "93440ccc37a89fd68862a0aa07b64d1d",
"assets/assets/icons/email.svg": "a2658da8e18955d463ac816b024bc9cc",
"assets/assets/icons/fullscreen_exit.svg": "3a7e43a0b9d3915b99e60ef79d4b9602",
"assets/assets/icons/facebook.svg": "8c76b53130067a63c3f680ef66df7bb6",
"assets/assets/icons/lock.svg": "632992cf62b6ebf13f8fc467dbfb41f9",
"assets/assets/icons/global.svg": "e4486212dbfffddcadc36f1b414223ce",
"assets/assets/icons/google.png": "30fd7383f10343833798865ac65e8c55",
"assets/assets/icons/fullscreen.svg": "4ce44cbcf59c1f05751c3df638ffeaae",
"assets/assets/icons/apple.svg": "37dd6e9999eb376b8f903135c219fbe5",
"assets/assets/icons/profile.svg": "28a3e4b5e4156b21c928ba785d684c8a",
"assets/assets/icons/close_eye.svg": "a5b2d432a2c845a8182d9153d9e0c99c"
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
