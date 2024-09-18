(()=>{var e,n,t={365:(e,n,t)=>{"use strict";t.d(n,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,":root {\n  --background-color: #F3F1E8;\n  --text-color: #191919;\n  --accent-color: #9B4819;\n}\n\nbody {\n  background-color: var(--background-color);\n  color: var(--text-color);\n  font-family: 'Roboto', sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n}\n\n.welcome {\n  height: 100%;\n  padding: 0 3em;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.welcome > div {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5em;\n}\n\n.welcome > div > h1 {\n  margin: 0;\n}\n\n.welcome > p {\n  width: 70vw;\n}\n\nform {\n  display: flex;\n  gap: 0.5em;\n  padding: 1em;\n}\n\ninput, button {\n  font-size: 1em;\n}\n\n.input-div {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 0.5em;\n}\n\ninput {\n  height: 25px;\n  padding: 0.5em;\n  border: 1px solid var(--accent-color);\n  border-radius: 0.25em;\n}\n\n.message {\n  display: none;\n  margin: 0;\n}\n\nbutton {\n  height: 40px;\n  border: none;\n  border-radius: 0.25em;\n  background-color: var(--accent-color);\n  color: white;\n  cursor: pointer;\n}\n\n#loading-page {\n  transition: background-color 1s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\n.card {\n  display: flex;\n  flex-direction: row;\n  padding: 1em;\n  justify-content: center;\n  width: 100%;\n}\n\n.greeting-card {\n  height: max-content;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5em;\n  padding: 1em;\n}\n\n/* Mobile Styles */\n@media (max-width: 768px) {\n  .welcome {\n    padding: 0 1em;\n  }\n\n  .welcome > div {\n    gap: 0;\n    flex-direction: column;\n  }\n\n  .welcome > p {\n    width: 90vw;\n  }\n\n  .card {\n    padding: 0;\n  }\n\n  .greeting-card {\n    width: 100%;\n  }\n}",""]);const c=i},314:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:e=>{"use strict";e.exports=function(e){return e[1]}},72:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);t.update(e);return function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},659:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},538:(e,n,t)=>{var r={"./apphia2024.js":[79,916]};function o(e){if(!t.o(r,e))return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((()=>t(o)))}o.keys=()=>Object.keys(r),o.id=538,e.exports=o}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={id:e,exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((n,t)=>(o.f[t](e,n),n)),[])),o.u=e=>e+".main.js",o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e={},n="happy-birthday-webpack:",o.l=(t,r,a,i)=>{if(e[t])e[t].push(r);else{var c,s;if(void 0!==a)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==n+a){c=u;break}}c||(s=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",n+a),c.src=t),e[t]=[r];var p=(n,r)=>{c.onerror=c.onload=null,clearTimeout(m);var o=e[t];if(delete e[t],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),n)return n(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),s&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="",(()=>{var e={792:0};o.f.j=(n,t)=>{var r=o.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(((t,o)=>r=e[n]=[t,o]));t.push(r[2]=a);var i=o.p+o.u(n),c=new Error;o.l(i,(t=>{if(o.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}}),"chunk-"+n,n)}};var n=(n,t)=>{var r,a,[i,c,s]=t,d=0;if(i.some((n=>0!==e[n]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(s)s(o)}for(n&&n(t);d<i.length;d++)a=i[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkhappy_birthday_webpack=self.webpackChunkhappy_birthday_webpack||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),o.nc=void 0,(()=>{"use strict";var e=o(72),n=o.n(e),t=o(825),r=o.n(t),a=o(659),i=o.n(a),c=o(56),s=o.n(c),d=o(540),l=o.n(d),u=o(113),p=o.n(u),m=o(365),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l();n()(m.A,f);m.A&&m.A.locals&&m.A.locals;const v={AF09202024:"apphia2024"};const h=document.createElement("div");h.setAttribute("id","loading-page");const g=document.createElement("p");g.textContent="Loading...",h.appendChild(g);const y=document.createElement("div");y.className="welcome";const b=document.createElement("form");b.className="form",b.onsubmit=e=>{e.preventDefault()};const x=document.createElement("div");x.className="input-div";const w=document.createElement("input");w.type="text",w.placeholder="Enter code here",w.addEventListener("input",(()=>{document.querySelector("p").style.display="none"}));const E=document.createElement("p");E.className="message",E.textContent="Code not found.";const k=document.createElement("button");k.textContent="Submit",k.onclick=()=>{Object.keys(v).includes(w.value)?(y.style.display="none",document.body.appendChild(h),setTimeout((()=>{h.style.display="none",function(e){const n=v[e];o(538)(`./${n}.js`).then((e=>{const{renderGreetingCard:n}=e.default(),t=document.createElement("div");t.className="card";const r=n();t.appendChild(r),document.body.appendChild(t)})).catch((e=>{console.error("Error importing module:",e)}))}(w.value)}),3e3)):E.style.display="block"},x.append(w,E),b.append(x,k),y.append(b),document.body.appendChild(y)})()})();