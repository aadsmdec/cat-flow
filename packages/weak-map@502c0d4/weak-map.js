(function(){"use strict";function e(t){t.permitHostObjects___&&t.permitHostObjects___(e)}function t(e){return!(e.substr(0,l.length)==l&&"___"===e.substr(e.length-3))}function n(e){if(e!==Object(e))throw new TypeError("Not an object: "+e);var t=e[u];if(t&&t.key===e)return t;if(!s(e))return void 0;var n=[],r=[];return t={key:e,gets:n,vals:r},a(e,u,{value:t,writable:!1,enumerable:!1,configurable:!1}),t}function r(e){return e.prototype=null,Object.freeze(e)}if("undefined"==typeof ses||!ses.ok||ses.ok()){if("undefined"!=typeof ses&&(ses.weakMapPermitHostObjects=e),"function"==typeof WeakMap){var i=WeakMap;if("undefined"==typeof navigator||!/Firefox/.test(navigator.userAgent))return module.exports=WeakMap,void 0}Object.prototype.hasOwnProperty;var o=Object.getOwnPropertyNames,a=Object.defineProperty,s=Object.isExtensible,l="weakmap:",u=l+"ident:"+Math.random()+"___";if("undefined"!=typeof crypto&&"function"==typeof crypto.getRandomValues&&"function"==typeof ArrayBuffer&&"function"==typeof Uint8Array){var c=new ArrayBuffer(25),h=new Uint8Array(c);crypto.getRandomValues(h),u=l+"rand:"+Array.prototype.map.call(h,function(e){return(e%36).toString(36)}).join("")+"___"}if(a(Object,"getOwnPropertyNames",{value:function(e){return o(e).filter(t)}}),"getPropertyNames"in Object){var d=Object.getPropertyNames;a(Object,"getPropertyNames",{value:function(e){return d(e).filter(t)}})}(function(){var e=Object.freeze;a(Object,"freeze",{value:function(t){return n(t),e(t)}});var t=Object.seal;a(Object,"seal",{value:function(e){return n(e),t(e)}});var r=Object.preventExtensions;a(Object,"preventExtensions",{value:function(e){return n(e),r(e)}})})();var p=function(){function e(t,r){var i,o,l=n(t);return l?(i=l.gets.indexOf(e),o=l.vals):(i=a.indexOf(t),o=s),i>=0?o[i]:r}function t(t){var r,i=n(t);return r=i?i.gets.indexOf(e):a.indexOf(t),r>=0}function i(t,r){var i,o=n(t);o?(i=o.gets.indexOf(e),i>=0?o.vals[i]=r:(o.gets.push(e),o.vals.push(r))):(i=a.indexOf(t),i>=0?s[i]=r:(a.push(t),s.push(r)))}function o(t){var r,i=n(t);return i?(r=i.gets.indexOf(e),r>=0&&(i.gets.splice(r,1),i.vals.splice(r,1))):(r=a.indexOf(t),r>=0&&(a.splice(r,1),s.splice(r,1))),!0}var a=[],s=[];return Object.create(p.prototype,{get___:{value:r(e)},has___:{value:r(t)},set___:{value:r(i)},delete___:{value:r(o)}})};p.prototype=Object.create(Object.prototype,{get:{value:function(e,t){return this.get___(e,t)},writable:!0,configurable:!0},has:{value:function(e){return this.has___(e)},writable:!0,configurable:!0},set:{value:function(e,t){this.set___(e,t)},writable:!0,configurable:!0},"delete":{value:function(e){return this.delete___(e)},writable:!0,configurable:!0}}),"function"==typeof i?function(){function t(){function t(e,t){return l?s.has(e)?s.get(e):l.get___(e,t):s.get(e,t)}function n(e){return s.has(e)||(l?l.has___(e):!1)}function o(e,t){if(u)try{s.set(e,t)}catch(n){l||(l=new p),l.set___(e,t)}else s.set(e,t)}function a(e){s["delete"](e),l&&l.delete___(e)}var s=new i,l=void 0,u=!1;return Object.create(p.prototype,{get___:{value:r(t)},has___:{value:r(n)},set___:{value:r(o)},delete___:{value:r(a)},permitHostObjects___:{value:r(function(t){if(t!==e)throw Error("bogus call to permitHostObjects___");u=!0})}})}t.prototype=p.prototype,module.exports=t,Object.defineProperty(WeakMap.prototype,"constructor",{value:WeakMap,enumerable:!1,configurable:!0,writable:!0})}():("undefined"!=typeof Proxy&&(Proxy=void 0),module.exports=p)}})();