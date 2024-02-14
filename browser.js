// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,b=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,m=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,m,"e"),n=p.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,v,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function S(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function j(r,t,e){var n=t-r.length;return n<0?r:r=e?r+S(n):S(n)+r}var E=String.fromCharCode,T=isNaN,_=Array.isArray;function I(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function A(r){var t,e,n,i,a,f,l,s,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,T(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function V(r){var t,e,n,o;for(e=[],o=0,n=F.exec(r);n;)(t=r.slice(o,F.lastIndex-n[0].length)).length&&e.push(t),e.push(O(n)),o=F.lastIndex,n=F.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function N(r){return"string"==typeof r}function x(r){var t,e;if(!N(r))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[V(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return A.apply(null,t)}var k,P=Object.prototype,B=P.toString,C=P.__defineGetter__,$=P.__defineSetter__,L=P.__lookupGetter__,G=P.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===B.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(L.call(r,t)||G.call(r,t)?(n=r.__proto__,r.__proto__=P,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,t,e.get),a&&$&&$.call(r,t,e.set),r};var R=k;function Z(r,t,e){R(r,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var Y=M(),q=Object.prototype.toString,W=Object.prototype.hasOwnProperty;function X(r,t){return null!=r&&W.call(r,t)}var U="function"==typeof Symbol?Symbol:void 0,z="function"==typeof U?U.toStringTag:"",D=Y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return q.call(r);e=r[z],t=X(r,z);try{r[z]=void 0}catch(t){return q.call(r)}return n=q.call(r),t?r[z]=e:delete r[z],n}:function(r){return q.call(r)},H="function"==typeof Float64Array,J="function"==typeof Float64Array?Float64Array:null,K="function"==typeof Float64Array?Float64Array:void 0,Q=function(){var r,t,e;if("function"!=typeof J)return!1;try{t=new J([1,3.14,-3.14,NaN]),e=t,r=(H&&e instanceof Float64Array||"[object Float64Array]"===D(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?K:function(){throw new Error("not implemented")};function rr(r){var t=new Q(2);return t[0]=r.re,t[1]=r.im,t}var tr=M(),er=Object.prototype.toString,nr="function"==typeof Symbol?Symbol:void 0,or="function"==typeof nr?nr.toStringTag:"",ir=tr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return er.call(r);e=r[or],t=X(r,or);try{r[or]=void 0}catch(t){return er.call(r)}return n=er.call(r),t?r[or]=e:delete r[or],n}:function(r){return er.call(r)},ar="function"==typeof Float32Array,ur=Number.POSITIVE_INFINITY,cr="function"==typeof Float32Array?Float32Array:null,fr="function"==typeof Float32Array?Float32Array:void 0,lr=function(){var r,t,e;if("function"!=typeof cr)return!1;try{t=new cr([1,3.14,-3.14,5e40]),e=t,r=(ar&&e instanceof Float32Array||"[object Float32Array]"===ir(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===ur}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};function sr(r){var t=new lr(2);return t[0]=r.re,t[1]=r.im,t}function pr(r,t){return r===t?0!==r||1/r==1/t:r!=r&&t!=t}function yr(r,t){return r===t||r!=r&&t!=t}function gr(r,t){return r===t||r!=r&&t!=t}function br(r,t){return r===t?0!==r||1/r==1/t:r!=r&&t!=t}var vr={};Z(vr,"isEqual",(function(r,t){var e=rr(r),n=rr(t);return e[0]===n[0]&&e[1]===n[1]})),Z(vr,"isEqualf",(function(r,t){var e=sr(r),n=sr(t);return e[0]===n[0]&&e[1]===n[1]})),Z(vr,"isNotEqual",(function(r,t){var e=rr(r),n=rr(t);return e[0]!==n[0]||e[1]!==n[1]})),Z(vr,"isNotEqualf",(function(r,t){var e=sr(r),n=sr(t);return e[0]!==n[0]||e[1]!==n[1]})),Z(vr,"isSameValue",(function(r,t){var e=rr(r),n=rr(t);return pr(e[0],n[0])&&pr(e[1],n[1])})),Z(vr,"isSameValueZero",(function(r,t){var e=rr(r),n=rr(t);return yr(e[0],n[0])&&yr(e[1],n[1])})),Z(vr,"isSameValueZerof",(function(r,t){var e=sr(r),n=sr(t);return gr(e[0],n[0])&&gr(e[1],n[1])})),Z(vr,"isSameValuef",(function(r,t){var e=sr(r),n=sr(t);return br(e[0],n[0])&&br(e[1],n[1])}));var dr=/./;function mr(r,t,e){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function wr(r){return"boolean"==typeof r}var hr=M();function Sr(){return hr&&"symbol"==typeof Symbol.toStringTag}var jr=Object.prototype.toString,Er="function"==typeof Symbol?Symbol:void 0,Tr="function"==typeof Er?Er.toStringTag:"",_r=Sr()?function(r){var t,e,n;if(null==r)return jr.call(r);e=r[Tr],t=X(r,Tr);try{r[Tr]=void 0}catch(t){return jr.call(r)}return n=jr.call(r),t?r[Tr]=e:delete r[Tr],n}:function(r){return jr.call(r)},Ir=Boolean,Ar=Boolean.prototype.toString,Fr=Sr();function Or(r){return"object"==typeof r&&(r instanceof Ir||(Fr?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===_r(r)))}function Vr(r){return wr(r)||Or(r)}function Nr(){return new Function("return this;")()}mr(Vr,"isPrimitive",wr),mr(Vr,"isObject",Or);var xr="object"==typeof self?self:null,kr="object"==typeof window?window:null,Pr="object"==typeof globalThis?globalThis:null;function Br(r){if(arguments.length){if(!wr(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Nr()}if(Pr)return Pr;if(xr)return xr;if(kr)return kr;throw new Error("unexpected error. Unable to resolve global object.")}var Cr=Br(),$r=Cr.document&&Cr.document.childNodes,Lr=Int8Array,Gr=M();function Rr(){return Gr&&"symbol"==typeof Symbol.toStringTag}var Zr=Object.prototype.toString,Mr="function"==typeof Symbol?Symbol:void 0,Yr="function"==typeof Mr?Mr.toStringTag:"",qr=Rr()?function(r){var t,e,n;if(null==r)return Zr.call(r);e=r[Yr],t=X(r,Yr);try{r[Yr]=void 0}catch(t){return Zr.call(r)}return n=Zr.call(r),t?r[Yr]=e:delete r[Yr],n}:function(r){return Zr.call(r)};function Wr(r,t,e){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Xr(){return/^\s*function\s*([^(]*)/i}var Ur=/^\s*function\s*([^(]*)/i;Wr(Xr,"REGEXP",Ur);var zr=M(),Dr=Object.prototype.toString,Hr="function"==typeof Symbol?Symbol:void 0,Jr="function"==typeof Hr?Hr.toStringTag:"",Kr=zr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Dr.call(r);e=r[Jr],t=X(r,Jr);try{r[Jr]=void 0}catch(t){return Dr.call(r)}return n=Dr.call(r),t?r[Jr]=e:delete r[Jr],n}:function(r){return Dr.call(r)},Qr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Kr(r)};function rt(r){return null!==r&&"object"==typeof r}function tt(r){var t,e,n,o;if(("Object"===(e=qr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Ur.exec(n.toString()))return t[1]}return rt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Wr(rt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!Qr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(rt));var et="function"==typeof dr||"object"==typeof Lr||"function"==typeof $r?function(r){return tt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?tt(r).toLowerCase():t};function nt(r){return"function"===et(r)}function ot(r){return"number"==typeof r}var it=Number,at=it.prototype.toString,ut=Rr();function ct(r){return"object"==typeof r&&(r instanceof it||(ut?function(r){try{return at.call(r),!0}catch(r){return!1}}(r):"[object Number]"===qr(r)))}function ft(r){return ot(r)||ct(r)}Wr(ft,"isPrimitive",ot),Wr(ft,"isObject",ct);var lt=Number.POSITIVE_INFINITY,st=it.NEGATIVE_INFINITY,pt=Math.floor;function yt(r){return r<lt&&r>st&&pt(t=r)===t;var t}function gt(r){return ot(r)&&yt(r)}function bt(r){return ct(r)&&yt(r.valueOf())}function vt(r){return gt(r)||bt(r)}function dt(r){return gt(r)&&r>=0}function mt(r){return bt(r)&&r.valueOf()>=0}function wt(r){return dt(r)||mt(r)}Wr(vt,"isPrimitive",gt),Wr(vt,"isObject",bt),Wr(wt,"isPrimitive",dt),Wr(wt,"isObject",mt);var ht="number",St=/./,jt=Br(),Et=jt.document&&jt.document.childNodes,Tt=Int8Array,_t=M();function It(){return _t&&"symbol"==typeof Symbol.toStringTag}var At=Object.prototype.toString,Ft="function"==typeof Symbol?Symbol:void 0,Ot="function"==typeof Ft?Ft.toStringTag:"",Vt=It()?function(r){var t,e,n;if(null==r)return At.call(r);e=r[Ot],t=X(r,Ot);try{r[Ot]=void 0}catch(t){return At.call(r)}return n=At.call(r),t?r[Ot]=e:delete r[Ot],n}:function(r){return At.call(r)};function Nt(r,t,e){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function xt(){return/^\s*function\s*([^(]*)/i}var kt=/^\s*function\s*([^(]*)/i;function Pt(r){return null!==r&&"object"==typeof r}function Bt(r){var t,e,n,o;if(("Object"===(e=Vt(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=kt.exec(n.toString()))return t[1]}return Pt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Nt(xt,"REGEXP",kt),Nt(Pt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!Qr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Pt));var Ct="function"==typeof St||"object"==typeof Tt||"function"==typeof Et?function(r){return Bt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?Bt(r).toLowerCase():t};function $t(r){return"function"===Ct(r)}function Lt(r){return"number"==typeof r}var Gt=Number,Rt=Gt.prototype.toString,Zt=It();function Mt(r){return"object"==typeof r&&(r instanceof Gt||(Zt?function(r){try{return Rt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Vt(r)))}function Yt(r){return Lt(r)||Mt(r)}Nt(Yt,"isPrimitive",Lt),Nt(Yt,"isObject",Mt);var qt=Number.POSITIVE_INFINITY,Wt=Gt.NEGATIVE_INFINITY,Xt=Math.floor;function Ut(r){return r<qt&&r>Wt&&Xt(t=r)===t;var t}function zt(r){return Lt(r)&&Ut(r)}function Dt(r){return Mt(r)&&Ut(r.valueOf())}function Ht(r){return zt(r)||Dt(r)}function Jt(r){return zt(r)&&r>=0}function Kt(r){return Dt(r)&&r.valueOf()>=0}function Qt(r){return Jt(r)||Kt(r)}Nt(Ht,"isPrimitive",zt),Nt(Ht,"isObject",Dt),Nt(Qt,"isPrimitive",Jt),Nt(Qt,"isObject",Kt);var re="number",te={};return Z(te,"assert",vr),Z(te,"cast",(function(r,t,e){if(!nt(r))throw new TypeError(x("invalid argument. First argument must be a function. Value: `%s`.",r));if(!dt(t))throw new TypeError(x("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(!nt(e))throw new TypeError(x("invalid argument. Third argument must be a constructor function. Value: `%s`.",e));return t<=5?[function(){var t=r();return typeof t===ht?new e(t,0):t},function(t){var n=r(t);return typeof n===ht?new e(n,0):n},function(t,n){var o=r(t,n);return typeof o===ht?new e(o,0):o},function(t,n,o){var i=r(t,n,o);return typeof i===ht?new e(i,0):i},function(t,n,o,i){var a=r(t,n,o,i);return typeof a===ht?new e(a,0):a},function(t,n,o,i,a){var u=r(t,n,o,i,a);return typeof u===ht?new e(u,0):u}][t]:function(){var t,n,o;for(t=[],o=0;o<arguments.length;o++)t.push(arguments[o]);return typeof(n=r.apply(null,t))===ht?new e(n,0):n}})),Z(te,"wrap",(function(r,t,e){if(!$t(r))throw new TypeError(x("invalid argument. First argument must be a function. Value: `%s`.",r));if(!Jt(t))throw new TypeError(x("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(!$t(e))throw new TypeError(x("invalid argument. Third argument must be a constructor function. Value: `%s`.",e));return t<=5?[function(){return r()},function(t){return typeof t===re&&(t=new e(t,0)),r(t)},function(t,n){return typeof t===re&&(t=new e(t,0)),typeof n===re&&(n=new e(n,0)),r(t,n)},function(t,n,o){return typeof t===re&&(t=new e(t,0)),typeof n===re&&(n=new e(n,0)),typeof o===re&&(o=new e(o,0)),r(t,n,o)},function(t,n,o,i){return typeof t===re&&(t=new e(t,0)),typeof n===re&&(n=new e(n,0)),typeof o===re&&(o=new e(o,0)),typeof i===re&&(i=new e(i,0)),r(t,n,o,i)},function(t,n,o,i,a){return typeof t===re&&(t=new e(t,0)),typeof n===re&&(n=new e(n,0)),typeof o===re&&(o=new e(o,0)),typeof i===re&&(i=new e(i,0)),typeof a===re&&(a=new e(a,0)),r(t,n,o,i,a)}][t]:function(){var t,n,o;for(t=[],o=0;o<arguments.length;o++)typeof(n=arguments[o])===re&&(n=new e(n,0)),t.push(n);return r.apply(null,t)}})),te},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).complex=t();
//# sourceMappingURL=browser.js.map
