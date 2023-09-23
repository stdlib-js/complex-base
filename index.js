// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).complex=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function s(e){return"string"==typeof e}var u=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,y,"$1e"),n=f.call(n,v,"e"),n=f.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,d,"e-0$1"),e.alternate&&(n=f.call(n,h,"$1."),n=f.call(n,w,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):l.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var _=String.fromCharCode,k=isNaN,S=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,a,o,u,l,p,f;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,p=0;p<e.length;p++)if(s(n=e[p]))u+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,k(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=x(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(I(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){return"string"==typeof e}function $(e){var r,t,n;if(!F(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var O,C=Object.prototype,R=C.toString,P=C.__defineGetter__,N=C.__defineSetter__,Z=C.__lookupGetter__,L=C.__lookupSetter__;O=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,t.get),o&&N&&N.call(e,r,t.set),e};var G=O;function W(e,r,t){G(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var B=/./,U="function"==typeof Object.defineProperty?Object.defineProperty:null;var X,M=Object.defineProperty,z=Object.prototype,Y=z.toString,q=z.__defineGetter__,D=z.__defineSetter__,H=z.__lookupGetter__,J=z.__lookupSetter__;X=function(){try{return U({},"x",{}),!0}catch(e){return!1}}()?M:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===Y.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===Y.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(H.call(e,r)||J.call(e,r)?(n=e.__proto__,e.__proto__=z,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&q&&q.call(e,r,t.get),o&&D&&D.call(e,r,t.set),e};var K=X;function Q(e,r,t){K(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ee(e){return"boolean"==typeof e}function re(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var te=re();function ne(){return te&&"symbol"==typeof Symbol.toStringTag}var ie=Object.prototype.toString;var ae=Object.prototype.hasOwnProperty;function oe(e,r){return null!=e&&ae.call(e,r)}var ce="function"==typeof Symbol?Symbol.toStringTag:"";var se=ne()?function(e){var r,t,n;if(null==e)return ie.call(e);t=e[ce],r=oe(e,ce);try{e[ce]=void 0}catch(r){return ie.call(e)}return n=ie.call(e),r?e[ce]=t:delete e[ce],n}:function(e){return ie.call(e)},ue=Boolean.prototype.toString;var le=ne();function pe(e){return"object"==typeof e&&(e instanceof Boolean||(le?function(e){try{return ue.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===se(e)))}function fe(e){return ee(e)||pe(e)}function ge(){return new Function("return this;")()}Q(fe,"isPrimitive",ee),Q(fe,"isObject",pe);var de="object"==typeof self?self:null,he="object"==typeof window?window:null,we="object"==typeof global?global:null;var be=function(e){if(arguments.length){if(!ee(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return ge()}if(de)return de;if(he)return he;if(we)return we;throw new Error("unexpected error. Unable to resolve global object.")}(),ve=be.document&&be.document.childNodes,ye=Int8Array;function me(){return/^\s*function\s*([^(]*)/i}var Ee=/^\s*function\s*([^(]*)/i;Q(me,"REGEXP",Ee);var xe="function"==typeof Object.defineProperty?Object.defineProperty:null;var _e,ke=Object.defineProperty,Se=Object.prototype,je=Se.toString,Te=Se.__defineGetter__,Ve=Se.__defineSetter__,Ie=Se.__lookupGetter__,Ae=Se.__lookupSetter__;_e=function(){try{return xe({},"x",{}),!0}catch(e){return!1}}()?ke:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===je.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===je.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(Ie.call(e,r)||Ae.call(e,r)?(n=e.__proto__,e.__proto__=Se,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Te&&Te.call(e,r,t.get),o&&Ve&&Ve.call(e,r,t.set),e};var Fe=_e;var $e=re();var Oe=Object.prototype.toString;var Ce="function"==typeof Symbol?Symbol.toStringTag:"";var Re=$e&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,n;if(null==e)return Oe.call(e);t=e[Ce],r=oe(e,Ce);try{e[Ce]=void 0}catch(r){return Oe.call(e)}return n=Oe.call(e),r?e[Ce]=t:delete e[Ce],n}:function(e){return Oe.call(e)};var Pe=Array.isArray?Array.isArray:function(e){return"[object Array]"===Re(e)};function Ne(e){return null!==e&&"object"==typeof e}function Ze(e){var r,t,n,i;if(("Object"===(t=se(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Ee.exec(n.toString()))return r[1]}return Ne(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}!function(e,r,t){Fe(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(Ne,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!Pe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ne));var Le="function"==typeof B||"object"==typeof ye||"function"==typeof ve?function(e){return Ze(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Ze(e).toLowerCase():r};function Ge(e){return"function"===Le(e)}function We(e){return"number"==typeof e}var Be=Number,Ue=Be.prototype.toString;var Xe=ne();function Me(e){return"object"==typeof e&&(e instanceof Be||(Xe?function(e){try{return Ue.call(e),!0}catch(e){return!1}}(e):"[object Number]"===se(e)))}function ze(e){return We(e)||Me(e)}Q(ze,"isPrimitive",We),Q(ze,"isObject",Me);var Ye=Number.POSITIVE_INFINITY,qe=Be.NEGATIVE_INFINITY,De=Math.floor;function He(e){return e<Ye&&e>qe&&De(r=e)===r;var r}function Je(e){return We(e)&&He(e)}function Ke(e){return Me(e)&&He(e.valueOf())}function Qe(e){return Je(e)||Ke(e)}function er(e){return Je(e)&&e>=0}function rr(e){return Ke(e)&&e.valueOf()>=0}function tr(e){return er(e)||rr(e)}function nr(e){return"number"==typeof e}function ir(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ar(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+ir(i):ir(i)+e,n&&(e="-"+e)),e}Q(Qe,"isPrimitive",Je),Q(Qe,"isObject",Ke),Q(tr,"isPrimitive",er),Q(tr,"isObject",rr);var or=String.prototype.toLowerCase,cr=String.prototype.toUpperCase;function sr(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!nr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=ar(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=ar(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===cr.call(e.specifier)?cr.call(t):or.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ur(e){return"string"==typeof e}var lr=Math.abs,pr=String.prototype.toLowerCase,fr=String.prototype.toUpperCase,gr=String.prototype.replace,dr=/e\+(\d)$/,hr=/e-(\d)$/,wr=/^(\d+)$/,br=/^(\d+)e/,vr=/\.0$/,yr=/\.0*e/,mr=/(\..*[^0])0*e/;function Er(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!nr(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":lr(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=gr.call(t,mr,"$1e"),t=gr.call(t,yr,"e"),t=gr.call(t,vr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=gr.call(t,dr,"e+0$1"),t=gr.call(t,hr,"e-0$1"),e.alternate&&(t=gr.call(t,wr,"$1."),t=gr.call(t,br,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===fr.call(e.specifier)?fr.call(t):pr.call(t)}function xr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _r(e,r,t){var n=r-e.length;return n<0?e:e=t?e+xr(n):xr(n)+e}var kr=String.fromCharCode,Sr=isNaN,jr=Array.isArray;function Tr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Vr(e){var r,t,n,i,a,o,c,s,u;if(!jr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(ur(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=Tr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Sr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Sr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=sr(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!Sr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Sr(a)?String(n.arg):kr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Er(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ar(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_r(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Ir=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ar(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Fr(e){var r,t,n,i;for(t=[],i=0,n=Ir.exec(e);n;)(r=e.slice(i,Ir.lastIndex-n[0].length)).length&&t.push(r),t.push(Ar(n)),i=Ir.lastIndex,n=Ir.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function $r(e){return"string"==typeof e}function Or(e){var r,t,n;if(!$r(e))throw new TypeError(Or("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Fr(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return Vr.apply(null,t)}var Cr="number";var Rr=/./;function Pr(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Nr(e){return"boolean"==typeof e}var Zr=re();function Lr(){return Zr&&"symbol"==typeof Symbol.toStringTag}var Gr=Object.prototype.toString;var Wr=Object.prototype.hasOwnProperty;var Br="function"==typeof Symbol?Symbol:void 0,Ur="function"==typeof Br?Br.toStringTag:"";var Xr=Lr()?function(e){var r,t,n,i,a;if(null==e)return Gr.call(e);t=e[Ur],a=Ur,r=null!=(i=e)&&Wr.call(i,a);try{e[Ur]=void 0}catch(r){return Gr.call(e)}return n=Gr.call(e),r?e[Ur]=t:delete e[Ur],n}:function(e){return Gr.call(e)},Mr=Boolean,zr=Boolean.prototype.toString;var Yr=Lr();function qr(e){return"object"==typeof e&&(e instanceof Mr||(Yr?function(e){try{return zr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Xr(e)))}function Dr(e){return Nr(e)||qr(e)}function Hr(e){return"number"==typeof e}function Jr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Kr(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+Jr(i):Jr(i)+e,n&&(e="-"+e)),e}Pr(Dr,"isPrimitive",Nr),Pr(Dr,"isObject",qr);var Qr=String.prototype.toLowerCase,et=String.prototype.toUpperCase;function rt(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!Hr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Kr(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Kr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===et.call(e.specifier)?et.call(t):Qr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function tt(e){return"string"==typeof e}var nt=Math.abs,it=String.prototype.toLowerCase,at=String.prototype.toUpperCase,ot=String.prototype.replace,ct=/e\+(\d)$/,st=/e-(\d)$/,ut=/^(\d+)$/,lt=/^(\d+)e/,pt=/\.0$/,ft=/\.0*e/,gt=/(\..*[^0])0*e/;function dt(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!Hr(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":nt(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=ot.call(t,gt,"$1e"),t=ot.call(t,ft,"e"),t=ot.call(t,pt,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ot.call(t,ct,"e+0$1"),t=ot.call(t,st,"e-0$1"),e.alternate&&(t=ot.call(t,ut,"$1."),t=ot.call(t,lt,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===at.call(e.specifier)?at.call(t):it.call(t)}function ht(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function wt(e,r,t){var n=r-e.length;return n<0?e:e=t?e+ht(n):ht(n)+e}var bt=String.fromCharCode,vt=isNaN,yt=Array.isArray;function mt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Et(e){var r,t,n,i,a,o,c,s,u;if(!yt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(tt(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=mt(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,vt(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,vt(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=rt(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!vt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=vt(a)?String(n.arg):bt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=dt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Kr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=wt(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var xt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _t(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function kt(e){var r,t,n,i;for(t=[],i=0,n=xt.exec(e);n;)(r=e.slice(i,xt.lastIndex-n[0].length)).length&&t.push(r),t.push(_t(n)),i=xt.lastIndex,n=xt.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function St(e){return"string"==typeof e}function jt(e){var r,t,n;if(!St(e))throw new TypeError(jt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=kt(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return Et.apply(null,t)}function Tt(){return new Function("return this;")()}var Vt="object"==typeof self?self:null,It="object"==typeof window?window:null,At="object"==typeof global?global:null,Ft="object"==typeof globalThis?globalThis:null;var $t=function(e){if(arguments.length){if(!Nr(e))throw new TypeError(jt("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Tt()}if(Ft)return Ft;if(Vt)return Vt;if(It)return It;if(At)return At;throw new Error("unexpected error. Unable to resolve global object.")}(),Ot=$t.document&&$t.document.childNodes,Ct=Int8Array;function Rt(){return/^\s*function\s*([^(]*)/i}var Pt=/^\s*function\s*([^(]*)/i;Pr(Rt,"REGEXP",Pt);var Nt=Array.isArray?Array.isArray:function(e){return"[object Array]"===Xr(e)};function Zt(e){return"number"==typeof e}function Lt(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Gt(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+Lt(i):Lt(i)+e,n&&(e="-"+e)),e}var Wt=String.prototype.toLowerCase,Bt=String.prototype.toUpperCase;function Ut(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!Zt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Gt(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Gt(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Bt.call(e.specifier)?Bt.call(t):Wt.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Xt(e){return"string"==typeof e}var Mt=Math.abs,zt=String.prototype.toLowerCase,Yt=String.prototype.toUpperCase,qt=String.prototype.replace,Dt=/e\+(\d)$/,Ht=/e-(\d)$/,Jt=/^(\d+)$/,Kt=/^(\d+)e/,Qt=/\.0$/,en=/\.0*e/,rn=/(\..*[^0])0*e/;function tn(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!Zt(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":Mt(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=qt.call(t,rn,"$1e"),t=qt.call(t,en,"e"),t=qt.call(t,Qt,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=qt.call(t,Dt,"e+0$1"),t=qt.call(t,Ht,"e-0$1"),e.alternate&&(t=qt.call(t,Jt,"$1."),t=qt.call(t,Kt,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Yt.call(e.specifier)?Yt.call(t):zt.call(t)}function nn(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function an(e,r,t){var n=r-e.length;return n<0?e:e=t?e+nn(n):nn(n)+e}var on=String.fromCharCode,cn=isNaN,sn=Array.isArray;function un(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ln(e){var r,t,n,i,a,o,c,s,u;if(!sn(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Xt(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=un(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,cn(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,cn(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Ut(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!cn(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=cn(a)?String(n.arg):on(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=tn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Gt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=an(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var pn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function fn(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function gn(e){var r,t,n,i;for(t=[],i=0,n=pn.exec(e);n;)(r=e.slice(i,pn.lastIndex-n[0].length)).length&&t.push(r),t.push(fn(n)),i=pn.lastIndex,n=pn.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function dn(e){return"string"==typeof e}function hn(e){var r,t,n;if(!dn(e))throw new TypeError(hn("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=gn(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return ln.apply(null,t)}function wn(e){return null!==e&&"object"==typeof e}function bn(e){var r,t,n,i;if(("Object"===(t=Xr(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Pt.exec(n.toString()))return r[1]}return wn(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Pr(wn,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(hn("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Nt(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(wn));var vn="function"==typeof Rr||"object"==typeof Ct||"function"==typeof Ot?function(e){return bn(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?bn(e).toLowerCase():r};function yn(e){return"function"===vn(e)}function mn(e){return"number"==typeof e}var En=Number,xn=En.prototype.toString;var _n=Lr();function kn(e){return"object"==typeof e&&(e instanceof En||(_n?function(e){try{return xn.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Xr(e)))}function Sn(e){return mn(e)||kn(e)}Pr(Sn,"isPrimitive",mn),Pr(Sn,"isObject",kn);var jn=Number.POSITIVE_INFINITY,Tn=En.NEGATIVE_INFINITY,Vn=Math.floor;function In(e){return e<jn&&e>Tn&&Vn(r=e)===r;var r}function An(e){return mn(e)&&In(e)}function Fn(e){return kn(e)&&In(e.valueOf())}function $n(e){return An(e)||Fn(e)}function On(e){return An(e)&&e>=0}function Cn(e){return Fn(e)&&e.valueOf()>=0}function Rn(e){return On(e)||Cn(e)}function Pn(e){return"number"==typeof e}function Nn(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Zn(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+Nn(i):Nn(i)+e,n&&(e="-"+e)),e}Pr($n,"isPrimitive",An),Pr($n,"isObject",Fn),Pr(Rn,"isPrimitive",On),Pr(Rn,"isObject",Cn);var Ln=String.prototype.toLowerCase,Gn=String.prototype.toUpperCase;function Wn(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!Pn(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Zn(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Zn(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Gn.call(e.specifier)?Gn.call(t):Ln.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Bn(e){return"string"==typeof e}var Un=Math.abs,Xn=String.prototype.toLowerCase,Mn=String.prototype.toUpperCase,zn=String.prototype.replace,Yn=/e\+(\d)$/,qn=/e-(\d)$/,Dn=/^(\d+)$/,Hn=/^(\d+)e/,Jn=/\.0$/,Kn=/\.0*e/,Qn=/(\..*[^0])0*e/;function ei(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!Pn(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":Un(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=zn.call(t,Qn,"$1e"),t=zn.call(t,Kn,"e"),t=zn.call(t,Jn,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=zn.call(t,Yn,"e+0$1"),t=zn.call(t,qn,"e-0$1"),e.alternate&&(t=zn.call(t,Dn,"$1."),t=zn.call(t,Hn,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Mn.call(e.specifier)?Mn.call(t):Xn.call(t)}function ri(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ti(e,r,t){var n=r-e.length;return n<0?e:e=t?e+ri(n):ri(n)+e}var ni=String.fromCharCode,ii=isNaN,ai=Array.isArray;function oi(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ci(e){var r,t,n,i,a,o,c,s,u;if(!ai(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Bn(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=oi(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,ii(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,ii(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Wn(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!ii(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ii(a)?String(n.arg):ni(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=ei(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Zn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ti(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var si=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ui(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function li(e){var r,t,n,i;for(t=[],i=0,n=si.exec(e);n;)(r=e.slice(i,si.lastIndex-n[0].length)).length&&t.push(r),t.push(ui(n)),i=si.lastIndex,n=si.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function pi(e){return"string"==typeof e}function fi(e){var r,t,n;if(!pi(e))throw new TypeError(fi("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=li(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return ci.apply(null,t)}var gi="number";var di={};return W(di,"cast",(function(e,r,t){if(!Ge(e))throw new TypeError(Or("invalid argument. First argument must be a function. Value: `%s`.",e));if(!er(r))throw new TypeError(Or("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!Ge(t))throw new TypeError(Or("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return r<=5?[function(){var r=e();if(typeof r===Cr)return new t(r,0);return r},function(r){var n=e(r);if(typeof n===Cr)return new t(n,0);return n},function(r,n){var i=e(r,n);if(typeof i===Cr)return new t(i,0);return i},function(r,n,i){var a=e(r,n,i);if(typeof a===Cr)return new t(a,0);return a},function(r,n,i,a){var o=e(r,n,i,a);if(typeof o===Cr)return new t(o,0);return o},function(r,n,i,a,o){var c=e(r,n,i,a,o);if(typeof c===Cr)return new t(c,0);return c}][r]:function(){var r,n,i;for(r=[],i=0;i<arguments.length;i++)r.push(arguments[i]);if(typeof(n=e.apply(null,r))===Cr)return new t(n,0);return n}})),W(di,"wrap",(function(e,r,t){if(!yn(e))throw new TypeError(fi("invalid argument. First argument must be a function. Value: `%s`.",e));if(!On(r))throw new TypeError(fi("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!yn(t))throw new TypeError(fi("invalid argument. Third argument must be a constructor function. Value: `%s`.",t));return r<=5?[function(){return e()},function(r){typeof r===gi&&(r=new t(r,0));return e(r)},function(r,n){typeof r===gi&&(r=new t(r,0));typeof n===gi&&(n=new t(n,0));return e(r,n)},function(r,n,i){typeof r===gi&&(r=new t(r,0));typeof n===gi&&(n=new t(n,0));typeof i===gi&&(i=new t(i,0));return e(r,n,i)},function(r,n,i,a){typeof r===gi&&(r=new t(r,0));typeof n===gi&&(n=new t(n,0));typeof i===gi&&(i=new t(i,0));typeof a===gi&&(a=new t(a,0));return e(r,n,i,a)},function(r,n,i,a,o){typeof r===gi&&(r=new t(r,0));typeof n===gi&&(n=new t(n,0));typeof i===gi&&(i=new t(i,0));typeof a===gi&&(a=new t(a,0));typeof o===gi&&(o=new t(o,0));return e(r,n,i,a,o)}][r]:function(){var r,n,i;for(r=[],i=0;i<arguments.length;i++)typeof(n=arguments[i])===gi&&(n=new t(n,0)),r.push(n);return e.apply(null,r)}})),di}));
//# sourceMappingURL=index.js.map
