(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{314:function(t,n,e){"use strict";var c,u=e(0),r=e(97);e.d(n,"a",(function(){return r.a})),e.d(n,"b",(function(){return r.b})),e.d(n,"c",(function(){return r.d})),e.d(n,"d",(function(){return r.e})),e.d(n,"e",(function(){return r.f})),e.d(n,"f",(function(){return r.g})),e.d(n,"g",(function(){return r.h})),e.d(n,"h",(function(){return r.i})),e.d(n,"i",(function(){return r.j})),e.d(n,"j",(function(){return r.k})),e.d(n,"k",(function(){return r.l})),(c=(c=u.default)||u.default)&&!c.__composition_api_installed__&&u.default.use(r.c);u.default.version},317:function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"a",(function(){return u}));const c="undefined"!=typeof window;function u(){let t={};return{getItem:n=>t[n],setItem:(n,e)=>t[n]=e,removeItem:n=>delete t[n],clear:()=>t={},length:Object.keys(t).length,key:n=>Object.keys(t)[n]}}},318:function(t,n,e){"use strict";function c(t,n=0){let e=null;return{run:function(...c){e||(e=setTimeout(()=>{t(...c),e=null},n))},cancel:function(){e&&clearTimeout(e)}}}e.d(n,"a",(function(){return c}))},419:function(t,n,e){"use strict";e.r(n);var c=e(96),u=e(314),r=e(318),o=e(317);var i={name:"use-scroll",setup:function(){var t=function(t=(o.b?document:void 0)){const n=Object(u.g)({x:0,y:0}),e=Object(u.h)(null);function c(t){void 0!==t&&(t===document?t.scrollingElement&&(n.x=t.scrollingElement.scrollLeft,n.x=t.scrollingElement.scrollTop):(n.x=t.scrollLeft,n.y=t.scrollTop))}const{run:i}=Object(r.a)(t=>{t.target&&c(t.target)},100);return Object(u.c)()&&(Object(u.e)(()=>{const n=("function"==typeof t?t():t)||e.value;n&&(c(n),n.addEventListener("scroll",i))}),Object(u.f)(()=>{})),[Object(u.a)(()=>n),e]}();return{pos:Object(c.a)(t,1)[0]}}},l=e(26),s=Object(l.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"block"},[this._v("scroll X: "+this._s(this.pos.x))]),this._v(" "),n("div",{staticClass:"block"},[this._v("scroll Y: "+this._s(this.pos.y))])])}),[],!1,null,null,null);n.default=s.exports}}]);