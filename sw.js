if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let d={};const o=e=>n(e,t),l={module:{uri:t},exports:d,require:o};i[t]=Promise.all(s.map((e=>l[e]||o(e)))).then((e=>(r(...e),d)))}}define(["https://braininavat06.github.io/workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"https://braininavat06.github.io/assets/index-B4TuESxw.js",revision:null},{url:"https://braininavat06.github.io/assets/index-e0Sn5uAO.css",revision:null},{url:"https://braininavat06.github.io/index.html",revision:"a69bd97a719bdde35187620d9f930f7e"},{url:"https://braininavat06.github.io/registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"https://braininavat06.github.io/medimory-favicon.png",revision:"693be190db8e6dc5799290daf0d6d979"},{url:"https://braininavat06.github.io/manifest.webmanifest",revision:"da755f4d42b2193cc279cbcb86a868de"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("https://braininavat06.github.io/index.html")))}));
