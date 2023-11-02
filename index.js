// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).complex=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(e){return"string"==typeof e}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":f(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,v,"$1e"),n=p.call(n,h,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,y,"e-0$1"),e.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,w,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):l.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function j(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var _=String.fromCharCode,T=isNaN,S=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,n,o,a,f,l,s,p;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(f="",l=1,s=0;s<e.length;s++)if(c(n=e[s]))f+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,T(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function O(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(I(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function A(e){return"string"==typeof e}function F(e){var r,t,n;if(!A(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=O(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var P,N=Object.prototype,$=N.toString,C=N.__defineGetter__,B=N.__defineSetter__,R=N.__lookupGetter__,G=N.__lookupSetter__;P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(e,r,t.get),a&&B&&B.call(e,r,t.set),e};var L=P;function Z(e,r,t){L(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var M=/./;function W(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=Y()?function(e){var r,t,n,i,o;if(null==e)return z.call(e);t=e[H],o=H,r=null!=(i=e)&&q.call(i,o);try{e[H]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[H]=t:delete e[H],n}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString;var ee=Y();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function te(e){return U(e)||re(e)}function ne(){return new Function("return this;")()}W(te,"isPrimitive",U),W(te,"isObject",re);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="object"==typeof global?global:null,ue="object"==typeof globalThis?globalThis:null;var ce=function(e){if(arguments.length){if(!U(e))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ue)return ue;if(ie)return ie;if(oe)return oe;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=ce.document&&ce.document.childNodes,le=Int8Array;function se(){return/^\s*function\s*([^(]*)/i}var pe=/^\s*function\s*([^(]*)/i;W(se,"REGEXP",pe);var ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function ye(e){return null!==e&&"object"==typeof e}function de(e){var r,t,n,i;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=pe.exec(n.toString()))return r[1]}return ye(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(ye,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ge(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ye));var we="function"==typeof M||"object"==typeof le||"function"==typeof fe?function(e){return de(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?de(e).toLowerCase():r};function be(e){return"function"===we(e)}function he(e){return"number"==typeof e}var ve=Number,me=ve.prototype.toString;var Ee=Y();function je(e){return"object"==typeof e&&(e instanceof ve||(Ee?function(e){try{return me.call(e),!0}catch(e){return!1}}(e):"[object Number]"===J(e)))}function _e(e){return he(e)||je(e)}W(_e,"isPrimitive",he),W(_e,"isObject",je);var Te=Number.POSITIVE_INFINITY,Se=ve.NEGATIVE_INFINITY,xe=Math.floor;function Ve(e){return e<Te&&e>Se&&xe(r=e)===r;var r}function ke(e){return he(e)&&Ve(e)}function Ie(e){return je(e)&&Ve(e.valueOf())}function Oe(e){return ke(e)||Ie(e)}function Ae(e){return ke(e)&&e>=0}function Fe(e){return Ie(e)&&e.valueOf()>=0}function Pe(e){return Ae(e)||Fe(e)}W(Oe,"isPrimitive",ke),W(Oe,"isObject",Ie),W(Pe,"isPrimitive",Ae),W(Pe,"isObject",Fe);var Ne="number";var $e="number";var Ce={};return Z(Ce,"cast",(function(e,r,t){if(!be(e))throw new TypeError(F("invalid argument. First argument must be a function. Value: `%s`.",e));if(!Ae(r))throw new TypeError(F("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!be(t))throw new TypeError(F("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return r<=5?[function(){var r=e();if(typeof r===Ne)return new t(r,0);return r},function(r){var n=e(r);if(typeof n===Ne)return new t(n,0);return n},function(r,n){var i=e(r,n);if(typeof i===Ne)return new t(i,0);return i},function(r,n,i){var o=e(r,n,i);if(typeof o===Ne)return new t(o,0);return o},function(r,n,i,o){var a=e(r,n,i,o);if(typeof a===Ne)return new t(a,0);return a},function(r,n,i,o,a){var u=e(r,n,i,o,a);if(typeof u===Ne)return new t(u,0);return u}][r]:function(){var r,n,i;for(r=[],i=0;i<arguments.length;i++)r.push(arguments[i]);if(typeof(n=e.apply(null,r))===Ne)return new t(n,0);return n}})),Z(Ce,"wrap",(function(e,r,t){if(!be(e))throw new TypeError(F("invalid argument. First argument must be a function. Value: `%s`.",e));if(!Ae(r))throw new TypeError(F("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!be(t))throw new TypeError(F("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return r<=5?[function(){return e()},function(r){typeof r===$e&&(r=new t(r,0));return e(r)},function(r,n){typeof r===$e&&(r=new t(r,0));typeof n===$e&&(n=new t(n,0));return e(r,n)},function(r,n,i){typeof r===$e&&(r=new t(r,0));typeof n===$e&&(n=new t(n,0));typeof i===$e&&(i=new t(i,0));return e(r,n,i)},function(r,n,i,o){typeof r===$e&&(r=new t(r,0));typeof n===$e&&(n=new t(n,0));typeof i===$e&&(i=new t(i,0));typeof o===$e&&(o=new t(o,0));return e(r,n,i,o)},function(r,n,i,o,a){typeof r===$e&&(r=new t(r,0));typeof n===$e&&(n=new t(n,0));typeof i===$e&&(i=new t(i,0));typeof o===$e&&(o=new t(o,0));typeof a===$e&&(a=new t(a,0));return e(r,n,i,o,a)}][r]:function(){var r,n,i;for(r=[],i=0;i<arguments.length;i++)typeof(n=arguments[i])===$e&&(n=new t(n,0)),r.push(n);return e.apply(null,r)}})),Ce}));
//# sourceMappingURL=index.js.map
