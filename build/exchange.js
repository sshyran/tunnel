!function(r,e){for(var t in e)r[t]=e[t]}(exports,function(r){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)t.d(n,o,function(e){return r[e]}.bind(null,o));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s=2)}([function(r,e){r.exports=require("crypto")},function(r,e,t){const n=t(3).Buffer;r.exports=function(r){if(r.length>=255)throw new TypeError("Alphabet too long");const e=new Uint8Array(256);e.fill(255);for(let t=0;t<r.length;t++){const n=r.charAt(t),o=n.charCodeAt(0);if(255!==e[o])throw new TypeError(n+" is ambiguous");e[o]=t}const t=r.length,o=r.charAt(0),f=Math.log(t)/Math.log(256),u=Math.log(256)/Math.log(t);function l(r){if("string"!=typeof r)throw new TypeError("Expected String");if(0===r.length)return n.alloc(0);let u=0;if(" "===r[u])return;let l=0,i=0;for(;r[u]===o;)l++,u++;const c=(r.length-u)*f+1>>>0,a=new Uint8Array(c);for(;r[u];){let n=e[r.charCodeAt(u)];if(255===n)return;let o=0;for(let r=c-1;(0!==n||o<i)&&-1!==r;r--,o++)n+=t*a[r]>>>0,a[r]=n%256>>>0,n=n/256>>>0;if(0!==n)throw new Error("Non-zero carry");i=o,u++}if(" "===r[u])return;let s=c-i;for(;s!==c&&0===a[s];)s++;const d=n.allocUnsafe(l+(c-s));d.fill(0,0,l);let p=l;for(;s!==c;)d[p++]=a[s++];return d}return{encode:function(e){if(!n.isBuffer(e))throw new TypeError("Expected Buffer");if(0===e.length)return"";let f=0,l=0,i=0;const c=e.length;for(;i!==c&&0===e[i];)i++,f++;const a=(c-i)*u+1>>>0,s=new Uint8Array(a);for(;i!==c;){let r=e[i],n=0;for(let e=a-1;(0!==r||n<l)&&-1!==e;e--,n++)r+=256*s[e]>>>0,s[e]=r%t>>>0,r=r/t>>>0;if(0!==r)throw new Error("Non-zero carry");l=n,i++}let d=a-l;for(;d!==a&&0===s[d];)d++;let p=o.repeat(f);for(;d<a;++d)p+=r.charAt(s[d]);return p},decodeUnsafe:l,decode:function(r){const e=l(r);if(e)return e;throw new Error("Non-base"+t+" character")}}}},function(r,e,t){"use strict";t.r(e);var n=t(0),o=t.n(n),f=t(1);const u=t.n(f)()("0123456789abcdefghijklmnopqrstuvwxyz"),l={},i=r=>({statusCode:200,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST"},body:conn_info});exports.handler=(r,e,t)=>{if("POST"===r.httpMethod){let e;for(;;){const t=o.a.randomBytes(4),n=u.encode(t);if(!(n in l)){l[n]=r.body,e=n;break}}t(null,i())}else{const e=r.queryStringParameters;if(e.wid&&l[e.wid]){l[e.wid];delete l[e.wid],t(null,i())}else t(new Error("invalid wid"))}}},function(r,e,t){var n=t(4),o=n.Buffer;function f(r,e){for(var t in r)e[t]=r[t]}function u(r,e,t){return o(r,e,t)}o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?r.exports=n:(f(n,e),e.Buffer=u),f(o,u),u.from=function(r,e,t){if("number"==typeof r)throw new TypeError("Argument must not be a number");return o(r,e,t)},u.alloc=function(r,e,t){if("number"!=typeof r)throw new TypeError("Argument must be a number");var n=o(r);return void 0!==e?"string"==typeof t?n.fill(e,t):n.fill(e):n.fill(0),n},u.allocUnsafe=function(r){if("number"!=typeof r)throw new TypeError("Argument must be a number");return o(r)},u.allocUnsafeSlow=function(r){if("number"!=typeof r)throw new TypeError("Argument must be a number");return n.SlowBuffer(r)}},function(r,e){r.exports=require("buffer")}]));