!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){t.exports=n(7)},function(t,e,n){"use strict";var r=n(0);n.n(r).a},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"\n.fade-in-out[data-v-ca961d22] {\n  opacity: 1;\n  animation: fade-data-v-ca961d22 3s linear infinite;\n}\n@keyframes fade-data-v-ca961d22 {\n0%,100% { opacity: 0.5\n}\n50% { opacity: 1\n}\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(o).concat([i]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(t,e){return e?e.querySelector(t):document.querySelector(t)},c=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=a.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),l=null,u=0,f=[],d=n(6);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(b(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(b(r.parts[s],e));o[r.id]={id:r.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function m(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=c(t.insertAt.before,n);n.insertBefore(e,i)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),m(t,e),e}function y(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function b(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var s=u++;n=l||(l=g(e)),r=w.bind(null,n,s,!1),i=w.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),m(t,e),e}(e),r=S.bind(null,n,e),i=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=C.bind(null,n),i=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return p(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var s=n[i];(a=o[s.id]).refs--,r.push(a)}t&&p(h(t,e),e);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var _,x=(_=[],function(t,e){return _[t]=e,_.filter(Boolean).join("\n")});function w(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function C(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function S(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=d(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(t,e,n){"use strict";n.r(e);function r(t,e,n,r,i,o,s,a){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:l}}var i={components:{NetlifySite:r({name:"netlify-site",props:{site:{type:Object,default:function(){return[]}}},data:function(){return{site:{}}},computed:{screenshotUrl:function(){return this.site.published_deploy.screenshot_url?this.site.published_deploy.screenshot_url:"/vendor/davidsneal/netlify/img/default_screenshot.png"},siteUrl:function(){return this.site.ssl?this.site.ssl_url:this.site.url}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex items-center justify-between"},[n("div",{staticClass:"pr-4"},[n("h2",{staticClass:"font-bold"},[t._v(t._s(t.site.name))]),t._v(" "),n("a",{staticClass:"my-1 text-sm text-blue font-bold",attrs:{href:t.siteUrl,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.siteUrl)+"\n      ")])]),t._v(" "),n("a",{staticClass:"my-1 text-sm text-blue font-bold",attrs:{href:t.siteUrl,target:"_blank",rel:"noopener"}},[n("img",{staticClass:"w-24 h-auto max-w-full shadow",attrs:{src:t.screenshotUrl,alt:t.site.name}})])]),t._v(" "),t.confirming?n("confirmation-modal",{attrs:{title:t.lang.heading,bodyText:t.lang.confirmation,buttonText:t.lang.confirm,danger:"true"},on:{confirm:t.submit,cancel:function(e){t.confirming=!1}}}):t._e()],1)}),[],!1,null,null,null).exports},props:{hash:{type:String,default:""},lang:{type:Object,default:function(){}},routes:{type:Object,default:function(){}}},data:function(){return{confirming:!1,error:!1,firing:!1,loading:!0,site:{},timeout:null}},mounted:function(){this.getSite()},computed:{busy:function(){return"ready"!=this.site.state&&"current"!=this.site.state},deployable:function(){return this.site.published_deploy.commit_ref!=this.hash}},methods:{getSite:function(){var t=this;this.timeout&&clearTimeout(this.timeout),this.$axios.get(this.routes.site).then((function(e){t.site=e.data,t.loading=!1,"ready"!=t.site.state&&(t.timeout=setTimeout((function(){t.getSite()}),5e3))})).catch((function(e){t.$toast.error("Failed to retrieve the site"),t.error=!0}))},submit:function(){var t=this;this.confirming=!1,this.firing=!0,this.$axios.post(this.routes.build).then((function(e){t.$toast.success(t.lang.success),t.getSite()})).catch((function(e){t.$toast.error(t.lang.failed),console.log(e)})).finally((function(){t.firing=!1}))}}},o=(n(2),r(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("div",{staticClass:"loading"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 40 40",stroke:"#737f8c"}},[n("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{transform:"translate(2 2)","stroke-width":"4"}},[n("circle",{attrs:{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}}),t._v(" "),n("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(52.8934 18 18)"}},[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])]),t._v(" "),n("div",{staticClass:"mt-1"},[t._v("Loading")])]):n("div",[t.deployable?n("div",{staticClass:"flex items-center justify-between"},[n("div",{staticClass:"pr-4"},[n("h2",{staticClass:"font-bold"},[t._v(t._s(t.lang.heading))]),t._v(" "),t.busy?n("p",{staticClass:"my-1 text-sm text-grey"},[t._v("\n          Your site is building, please be patient. You can safely navigate away from\n          this page, it shall refresh automatically once complete.\n        ")]):n("p",{staticClass:"my-1 text-sm text-grey"},[t._v(t._s(t.lang.text))])]),t._v(" "),t.busy?n("span",{staticClass:"fade-in-out inline-flex items-center px-3 py-1 rounded-full text-sm font-medium leading-5 bg-blue-100 text-blue-800"},[t._v("\n        Busy\n      ")]):n("button",{staticClass:"btn",on:{click:function(e){e.preventDefault(),t.confirming=!0}}},[t.firing?n("span",[t._v(t._s(t.lang.firing))]):n("span",[t._v(t._s(t.lang.action))])])]):n("div",{staticClass:"flex items-center justify-between"},[n("div",{staticClass:"pr-4"},[n("h2",{staticClass:"font-bold"},[t._v(t._s(t.lang.heading))]),t._v(" "),n("p",{staticClass:"my-1 text-sm text-grey"},[t._v("\n          Your site is up-to-date, there's nothing to deploy at this time.\n        ")])]),t._v(" "),n("span",{staticClass:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium leading-5 bg-green text-white"},[t._v("\n        Live\n      ")])]),t._v(" "),t.site.id?n("netlify-site",{attrs:{site:t.site}}):t._e(),t._v(" "),t.confirming?n("confirmation-modal",{attrs:{title:t.lang.heading,bodyText:t.lang.confirmation,buttonText:t.lang.confirm,danger:"true"},on:{confirm:t.submit,cancel:function(e){t.confirming=!1}}}):t._e()],1)])}),[],!1,null,"ca961d22",null).exports);Statamic.booting((function(){Statamic.$components.register("netlify-addon",o)}))}]);