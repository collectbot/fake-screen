parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"DVPT":[function(require,module,exports) {

},{}],"/tAd":[function(require,module,exports) {
module.exports="/clock.dbf9090f.svg";
},{}],"EvGO":[function(require,module,exports) {
module.exports="/clock-b.1f2d557b.svg";
},{}],"vBYv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=void 0;var e=o(require("./mcdonalds.pug"));require("./mcdonalds.scss");var t=o(require("./clock.svg")),r=o(require("./clock-b.svg")),c=o(require("../assets/CountDowner.js"));function o(e){return e&&e.__esModule?e:{default:e}}var n=function(){return setTimeout(a),e.default};function a(){var e,o=document.querySelector(".mcdonalds-wrapper"),n=o.querySelector(".coupon-page"),a=o.querySelector(".coupons"),s=o.querySelector("header"),l=s.querySelector(".hamburger img"),u=s.querySelector(".next-hamburger"),i=s.querySelector(".title-text"),y=s.querySelector(".next-title-text"),p=s.querySelector(".how-text"),f=s.querySelector(".next-how-text"),d=s.querySelector(".hamburger"),x=a.querySelector(".status"),m=a.querySelector(".exp"),g=n.querySelector("footer"),q=g.querySelector(".exchange");function S(){n.style.transform="translateX(100%)",l.style.opacity="100",u.style.opacity="0",i.style.transform="translateX(0%)",i.style.opacity="100",y.style.transform="translateX(200%)",y.style.opacity="0",p.style.opacity="100",f.style.opacity="0",d.onclick=function(){}}x.onclick=function(e){e.preventDefault(),l.style.opacity="0",u.style.opacity="100",i.style.transform="translateX(-200%)",i.style.opacity="0",y.style.transform="translateX(0%)",y.style.opacity="100",p.style.opacity="0",f.style.opacity="100",n.style.transform="translateX(0%)",d.onclick=S},m.textContent=(e=new Date,"期限：".concat(e.getFullYear()," 年 ").concat(e.getMonth()+1," 月 ").concat(e.getDate()+3," 日")),g.onclick=function(){g.onclick=function(){},function(){g.style.height="13.5%",q.innerHTML='<img class="clock" src='.concat(t.default,' alt="clock"/>優惠倒數<span class="exchanged-exp">2:00</span>'),x.className="status exchange no-letter-spacing",x.innerHTML='<img class="clock" src='.concat(r.default,' alt="clock"/>優惠倒數<span class="exchanged-exp">2:00</span>');var e=new Date;e.setMinutes(e.getMinutes()+2);var n=new c.default(e),a=n.formatFromCB(function(e){return"".concat(e[2],":").concat(n.toFixStr(e[3]))});n.on("second",function(){try{var e=o.querySelectorAll(".exchanged-exp");Array.from(e).forEach(function(e){return e.textContent=a()})}catch(t){n.stop()}}),n.on("stop",function(){S(),x.onclick=function(){},x.className="status",x.textContent="已兌換"})}()}}exports.render=n;
},{"./mcdonalds.pug":"Kzqw","./mcdonalds.scss":"DVPT","./clock.svg":"/tAd","./clock-b.svg":"EvGO","../assets/CountDowner.js":"g5Oo"}]},{},[], null)
//# sourceMappingURL=/mcdonalds.504dae2c.map