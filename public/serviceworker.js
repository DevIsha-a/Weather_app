const CACHE_NAME= "version-1"
const urlstocache= ['index.html', 'offline.html'];

//installing the serviceworker
self. addEventListener('install', (event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then ((cache)=>
        {
        console.log("Cache opened: ");
        return cache.addAll(urlstocache)
        
    }
        
        )
        

    )

})
self. addEventListener('fetch', (event)=>{
    event.respondWith(
        caches.match(event.request)
        .then(()=>{
            return fetch (event.request)
            .catch(()=> catches.match('offline.html'))
        })

    )
})
self. addEventListener('activate', (event)=>{
    const catchWhitelist= []
    catchWhitelist.push(CACHE_NAME)

    event.waitUntil(
        caches.keys().then((cacheNames)=> Promise.all(
            cacheNames.map((cacheName)=>{
                if(!catchWhitelist.includes(cacheName))
                return caches.delete(cacheName)
            })

        ))
    )
    
})