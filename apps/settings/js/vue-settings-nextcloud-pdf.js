!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/js/",r(r.s=581)}({0:function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r(7))},1:function(t,n){var r=Function.prototype,e=r.bind,o=r.call,i=e&&e.bind(o);t.exports=e?function(t){return t&&i(o,t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},100:function(t,n,r){var e=r(41);t.exports=Array.isArray||function(t){return"Array"==e(t)}},104:function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},105:function(t,n,r){var e=r(106);t.exports=function(t,n){var r=t[n];return null==r?void 0:e(r)}},106:function(t,n,r){var e=r(0),o=r(4),i=r(169),u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},107:function(t,n,r){var e=r(1),o=r(13),i=r(35),u=r(175).indexOf,c=r(62),f=e([].push);t.exports=function(t,n){var r,e=i(t),a=0,s=[];for(r in e)!o(c,r)&&o(e,r)&&f(s,r);for(;n.length>a;)o(e,r=n[a++])&&(~u(s,r)||f(s,r));return s}},108:function(t,n,r){var e=r(43),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},109:function(t,n){n.f=Object.getOwnPropertySymbols},110:function(t,n,r){var e=r(1);t.exports=e({}.isPrototypeOf)},111:function(t,n,r){var e=r(178);t.exports=function(t,n){return new(e(t))(0===n?0:n)}},13:function(t,n,r){var e=r(1),o=r(28),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},15:function(t,n,r){var e=r(0),o=r(18),i=e.String,u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},16:function(t,n){var r=Function.prototype.call;t.exports=r.bind?r.bind(r):function(){return r.apply(r,arguments)}},167:function(t,n,r){var e=r(0),o=r(16),i=r(18),u=r(92),c=r(105),f=r(170),a=r(6),s=e.TypeError,p=a("toPrimitive");t.exports=function(t,n){if(!i(t)||u(t))return t;var r,e=c(t,p);if(e){if(void 0===n&&(n="default"),r=o(e,t,n),!i(r)||u(r))return r;throw s("Can't convert object to primitive value")}return void 0===n&&(n="number"),f(t,n)}},168:function(t,n,r){var e=r(32);t.exports=e("navigator","userAgent")||""},169:function(t,n,r){var e=r(0).String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},170:function(t,n,r){var e=r(0),o=r(16),i=r(4),u=r(18),c=e.TypeError;t.exports=function(t,n){var r,e;if("string"===n&&i(r=t.toString)&&!u(e=o(r,t)))return e;if(i(r=t.valueOf)&&!u(e=o(r,t)))return e;if("string"!==n&&i(r=t.toString)&&!u(e=o(r,t)))return e;throw c("Can't convert object to primitive value")}},171:function(t,n,r){var e=r(0),o=r(4),i=r(57),u=e.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},172:function(t,n,r){var e=r(13),o=r(173),i=r(91),u=r(30);t.exports=function(t,n){for(var r=o(n),c=u.f,f=i.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},173:function(t,n,r){var e=r(32),o=r(1),i=r(174),u=r(109),c=r(15),f=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var n=i.f(c(t)),r=u.f;return r?f(n,r(t)):n}},174:function(t,n,r){var e=r(107),o=r(66).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},175:function(t,n,r){var e=r(35),o=r(176),i=r(64),u=function(t){return function(n,r,u){var c,f=e(n),a=i(f),s=o(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},176:function(t,n,r){var e=r(43),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},177:function(t,n,r){var e=r(3),o=r(4),i=/#|\.prototype\./,u=function(t,n){var r=f[c(t)];return r==s||r!=a&&(o(n)?e(n):!!n)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},f=u.data={},a=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},178:function(t,n,r){var e=r(0),o=r(100),i=r(179),u=r(18),c=r(6)("species"),f=e.Array;t.exports=function(t){var n;return o(t)&&(n=t.constructor,(i(n)&&(n===f||o(n.prototype))||u(n)&&null===(n=n[c]))&&(n=void 0)),void 0===n?f:n}},179:function(t,n,r){var e=r(1),o=r(3),i=r(4),u=r(68),c=r(32),f=r(57),a=function(){},s=[],p=c("Reflect","construct"),l=/^\s*(?:class|function)\b/,v=e(l.exec),d=!l.exec(a),y=function(t){if(!i(t))return!1;try{return p(a,s,t),!0}catch(t){return!1}};t.exports=!p||o((function(){var t;return y(y.call)||!y(Object)||!y((function(){t=!0}))||t}))?function(t){if(!i(t))return!1;switch(u(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!v(l,f(t))}:y},18:function(t,n,r){var e=r(4);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},19:function(t,n,r){var e=r(3);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},228:function(t,n,r){"use strict";var e=r(40),o=r(0),i=r(3),u=r(100),c=r(18),f=r(28),a=r(64),s=r(229),p=r(111),l=r(230),v=r(6),d=r(63),y=v("isConcatSpreadable"),b=o.TypeError,x=d>=51||!i((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),g=l("concat"),h=function(t){if(!c(t))return!1;var n=t[y];return void 0!==n?!!n:u(t)};e({target:"Array",proto:!0,forced:!x||!g},{concat:function(t){var n,r,e,o,i,u=f(this),c=p(u,0),l=0;for(n=-1,e=arguments.length;n<e;n++)if(h(i=-1===n?u:arguments[n])){if(l+(o=a(i))>9007199254740991)throw b("Maximum allowed index exceeded");for(r=0;r<o;r++,l++)r in i&&s(c,l,i[r])}else{if(l>=9007199254740991)throw b("Maximum allowed index exceeded");s(c,l++,i)}return c.length=l,c}})},229:function(t,n,r){"use strict";var e=r(59),o=r(30),i=r(47);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},230:function(t,n,r){var e=r(3),o=r(6),i=r(63),u=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},24:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.loadState=function(t,n,r){var e=document.querySelector("#initial-state-".concat(t,"-").concat(n));if(null===e){if(void 0!==r)return r;throw new Error("Could not find initial state ".concat(n," of ").concat(t))}try{return JSON.parse(atob(e.value))}catch(r){throw new Error("Could not parse initial state ".concat(n," of ").concat(t))}},r(228)},28:function(t,n,r){var e=r(0),o=r(42),i=e.Object;t.exports=function(t){return i(o(t))}},29:function(t,n,r){var e=r(19),o=r(30),i=r(47);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},3:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},30:function(t,n,r){var e=r(0),o=r(19),i=r(96),u=r(15),c=r(59),f=e.TypeError,a=Object.defineProperty;n.f=o?a:function(t,n,r){if(u(t),n=c(n),u(r),i)try{return a(t,n,r)}catch(t){}if("get"in r||"set"in r)throw f("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},32:function(t,n,r){var e=r(0),o=r(4),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t]):e[t]&&e[t][n]}},34:function(t,n,r){var e=r(0),o=r(4),i=r(13),u=r(29),c=r(56),f=r(57),a=r(77),s=r(85).CONFIGURABLE,p=a.get,l=a.enforce,v=String(String).split("String");(t.exports=function(t,n,r,f){var a,p=!!f&&!!f.unsafe,d=!!f&&!!f.enumerable,y=!!f&&!!f.noTargetGet,b=f&&void 0!==f.name?f.name:n;o(r)&&("Symbol("===String(b).slice(0,7)&&(b="["+String(b).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||s&&r.name!==b)&&u(r,"name",b),(a=l(r)).source||(a.source=v.join("string"==typeof b?b:""))),t!==e?(p?!y&&t[n]&&(d=!0):delete t[n],d?t[n]=r:u(t,n,r)):d?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||f(this)}))},35:function(t,n,r){var e=r(65),o=r(42);t.exports=function(t){return e(o(t))}},4:function(t,n){t.exports=function(t){return"function"==typeof t}},40:function(t,n,r){var e=r(0),o=r(91).f,i=r(29),u=r(34),c=r(56),f=r(172),a=r(177);t.exports=function(t,n){var r,s,p,l,v,d=t.target,y=t.global,b=t.stat;if(r=y?e:b?e[d]||c(d,{}):(e[d]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(y?s:d+(b?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(r,s,l,t)}}},41:function(t,n,r){var e=r(1),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},42:function(t,n,r){var e=r(0).TypeError;t.exports=function(t){if(null==t)throw e("Can't call method on "+t);return t}},43:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?e:r)(n)}},47:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},55:function(t,n,r){var e=r(0),o=r(56),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},56:function(t,n,r){var e=r(0),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},57:function(t,n,r){var e=r(1),o=r(4),i=r(55),u=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},581:function(t,n,r){"use strict";r.r(n);var e=r(24),o=!0===Object(e.loadState)("settings","has-reasons-use-nextcloud-pdf");window.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("open-reasons-use-nextcloud-pdf");t&&o&&t.addEventListener("click",(function(t){t.preventDefault(),OCA.Viewer.open({path:"/Reasons to use Nextcloud.pdf"})}))}))},59:function(t,n,r){var e=r(167),o=r(92);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},6:function(t,n,r){var e=r(0),o=r(61),i=r(13),u=r(95),c=r(94),f=r(93),a=o("wks"),s=e.Symbol,p=s&&s.for,l=f?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(a,t)||!c&&"string"!=typeof a[t]){var n="Symbol."+t;c&&i(s,t)?a[t]=s[t]:a[t]=f&&p?p(n):l(n)}return a[t]}},61:function(t,n,r){var e=r(88),o=r(55);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.19.2",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},62:function(t,n){t.exports={}},63:function(t,n,r){var e,o,i=r(0),u=r(168),c=i.process,f=i.Deno,a=c&&c.versions||f&&f.version,s=a&&a.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},64:function(t,n,r){var e=r(108);t.exports=function(t){return e(t.length)}},65:function(t,n,r){var e=r(0),o=r(1),i=r(3),u=r(41),c=e.Object,f=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==u(t)?f(t,""):c(t)}:c},66:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},68:function(t,n,r){var e=r(0),o=r(75),i=r(4),u=r(41),c=r(6)("toStringTag"),f=e.Object,a="Arguments"==u(function(){return arguments}());t.exports=o?u:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=f(t),c))?r:a?u(n):"Object"==(e=u(n))&&i(n.callee)?"Arguments":e}},7:function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},75:function(t,n,r){var e={};e[r(6)("toStringTag")]="z",t.exports="[object z]"===String(e)},76:function(t,n,r){var e=r(0),o=r(18),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},77:function(t,n,r){var e,o,i,u=r(171),c=r(0),f=r(1),a=r(18),s=r(29),p=r(13),l=r(55),v=r(78),d=r(62),y=c.TypeError,b=c.WeakMap;if(u||l.state){var x=l.state||(l.state=new b),g=f(x.get),h=f(x.has),m=f(x.set);e=function(t,n){if(h(x,t))throw new y("Object already initialized");return n.facade=t,m(x,t,n),n},o=function(t){return g(x,t)||{}},i=function(t){return h(x,t)}}else{var O=v("state");d[O]=!0,e=function(t,n){if(p(t,O))throw new y("Object already initialized");return n.facade=t,s(t,O,n),n},o=function(t){return p(t,O)?t[O]:{}},i=function(t){return p(t,O)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw y("Incompatible receiver, "+t+" required");return r}}}},78:function(t,n,r){var e=r(61),o=r(95),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},85:function(t,n,r){var e=r(19),o=r(13),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,c=o(i,"name"),f=c&&"something"===function(){}.name,a=c&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:f,CONFIGURABLE:a}},88:function(t,n){t.exports=!1},91:function(t,n,r){var e=r(19),o=r(16),i=r(104),u=r(47),c=r(35),f=r(59),a=r(13),s=r(96),p=Object.getOwnPropertyDescriptor;n.f=e?p:function(t,n){if(t=c(t),n=f(n),s)try{return p(t,n)}catch(t){}if(a(t,n))return u(!o(i.f,t,n),t[n])}},92:function(t,n,r){var e=r(0),o=r(32),i=r(4),u=r(110),c=r(93),f=e.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&u(n.prototype,f(t))}},93:function(t,n,r){var e=r(94);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},94:function(t,n,r){var e=r(63),o=r(3);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},95:function(t,n,r){var e=r(1),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},96:function(t,n,r){var e=r(19),o=r(3),i=r(76);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))}});
//# sourceMappingURL=vue-settings-nextcloud-pdf.js.map?v=e164c5cad1bc021ce611