!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.FroalaEditorView=e(require("react")):t.FroalaEditorView=e(t.React)}(window,(function(t){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=13)}({0:function(e,r){e.exports=t},13:function(t,e,r){t.exports=r(14)},14:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return p}));var n=r(0),o=r.n(n);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,c(n.key),n)}}function c(t){var e=function(t,e){if("object"!=u(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==u(e)?e:e+""}function f(t,e,r){return e=a(e),function(t,e){if(e&&("object"==u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,function(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return function(){return!!t}()}()?Reflect.construct(e,r||[],a(t).constructor):e.apply(t,r))}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=f(this,e,[t])).defaultTag="div",r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(e,t),r=e,(n=[{key:"getTrustedHtml",value:function(){return{__html:this.props.model}}},{key:"render",value:function(){return this.tag=this.props.tag||this.defaultTag,o.a.createElement(this.tag,{className:"fr-view",dangerouslySetInnerHTML:this.getTrustedHtml()})}}])&&i(r.prototype,n),u&&i(r,u),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n,u}(o.a.Component)}})}));