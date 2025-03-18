// 빈 서비스 워커 패치 -> 기존 캐시를 무력화
self.addEventListener('install', function (event) {
    console.log('Empty Service Worker installed!');
    self.skipWaiting(); // 기존 Service Worker 무효화
  });
  
  self.addEventListener('activate', function (event) {
    console.log('Empty Service Worker activated!');
    return self.clients.claim(); // 새로운 서비스 워커 강제 활성화
  });
  
  self.addEventListener('fetch', function (event) {
    console.log('Empty Service Worker fetch intercepted!');
    // 모든 요청을 기본 네트워크에서 직접 가져옴
  });