(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[196],{246:function(n,t,e){"use strict";e.r(t);var i=e(247),r=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t.default=r.a},247:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(i(391)),o=u(i(390)),s=u(i(198)),a=i(29);function u(n){return n&&n.__esModule?n:{default:n}}function l(n){return function(n){if(Array.isArray(n))return c(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return c(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}var d={name:"SessionList",components:{Avatar:r.default,PopoverMenu:o.default},directives:{tooltip:s.default},props:{sessions:{type:Object,default:function(){return{}}}},data:function(){return{popoverVisible:"",myName:""}},computed:{editorsTooltip:function(){if(this.sessionsPopover.length>0){var t=this.activeSessions.slice(0,3).map((function(n){return n.guestName?n.guestName:n.displayName})).join(", "),e=this.activeSessions.slice(3).length;return t+" "+n("text","and %n other editor","and %n other editors",e)}return this.activeSessions.slice(0,3).map((function(n){return n.guestName?n.guestName:n.displayName})).join(", ")},avatarUrl:function(){return function(n){var t=n.guestName?n.guestName:n.userId,e=!!n.guestName,i=(0,a.generateUrl)(e?"/avatar/guest/{user}/{size}":"/avatar/{user}/{size}",{user:t,size:32});return window.location.protocol+"//"+window.location.host+i}},activeSessions:function(){return Object.values(this.sessions).filter((function(n){return n.lastContact>Date.now()/1e3-90&&!n.isCurrent&&(null!==n.userId||null!==n.guestName)}))},currentSession:function(){return Object.values(this.sessions).find((function(n){return n.isCurrent}))},sessionStyle:function(){return function(n){return{opacity:n.lastContact>Date.now()/1e3-60?1:.5}}},sessionsVisible:function(){return this.activeSessions.slice(0,3)},sessionsPopover:function(){var n=this;return l(this.activeSessions.slice(3).map((function(t){return{href:"#",icon:n.avatarUrl(t),text:t.guestName?t.guestName:t.displayName}})))}},methods:{}};e.default=d},731:function(n,t,e){"use strict";e.r(t);var i=e(750),r=e(246);for(var o in r)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(o);e(751);var s=e(15),a=Object(s.a)(r.default,i.a,i.b,!1,null,"77055db6",null);t.default=a.exports},732:function(n,t,e){"use strict";var i=e(27),r=e.n(i),o=e(28),s=e.n(o)()(r.a);s.push([n.i,".session-list[data-v-77055db6]{position:relative}.session-list[data-v-77055db6] .popovermenu{margin-right:-4px}.session-list[data-v-77055db6] .popovermenu img{padding:0;width:32px !important;height:32px !important;margin:6px;border-radius:50%;filter:none !important}.avatar-list[data-v-77055db6]{display:inline-flex;flex-direction:row-reverse}.avatar-list .avatardiv[data-v-77055db6],.avatar-list[data-v-77055db6] .avatardiv{width:36px;height:36px;margin-right:-8px;border:2px solid var(--color-main-background);box-sizing:content-box !important}.avatar-list .avatardiv.icon-more[data-v-77055db6],.avatar-list[data-v-77055db6] .avatardiv.icon-more{width:32px;height:32px;opacity:.5;cursor:pointer}.popovermenu[data-v-77055db6]{display:block}\n","",{version:3,sources:["webpack://./src/components/SessionList.vue"],names:[],mappings:"AAoIA,+BACC,iBAAkB,CADnB,4CAIE,iBAAkB,CAJpB,gDAMG,SAAU,CACV,qBAAsB,CACtB,sBAAuB,CACvB,UAAW,CACX,iBAAkB,CAClB,sBAAuB,CACvB,8BAKF,mBAAoB,CACpB,0BAA2B,CAF5B,kFAME,UAAW,CACX,WAAY,CACZ,iBAAkB,CAClB,6CAA8C,CAC9C,iCAAkC,CAVpC,sGAYG,UAAW,CACX,WAAY,CACZ,UAAW,CACX,cAAe,CACf,8BAKF,aAAc",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.session-list {\n\tposition: relative;\n\n\t/deep/ .popovermenu {\n\t\tmargin-right: -4px;\n\t\timg {\n\t\t\tpadding: 0;\n\t\t\twidth: 32px !important;\n\t\t\theight: 32px !important;\n\t\t\tmargin: 6px;\n\t\t\tborder-radius: 50%;\n\t\t\tfilter: none !important;\n\t\t}\n\t}\n}\n\n.avatar-list {\n\tdisplay: inline-flex;\n\tflex-direction: row-reverse;\n\n\t.avatardiv,\n\t/deep/ .avatardiv {\n\t\twidth: 36px;\n\t\theight: 36px;\n\t\tmargin-right: -8px;\n\t\tborder: 2px solid var(--color-main-background);\n\t\tbox-sizing: content-box !important;\n\t\t&.icon-more {\n\t\t\twidth: 32px;\n\t\t\theight: 32px;\n\t\t\topacity: .5;\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n}\n\n.popovermenu {\n\tdisplay: block;\n}\n"],sourceRoot:""}]),t.a=s},750:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return r}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"session-list"},[e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:n.editorsTooltip,expression:"editorsTooltip",modifiers:{bottom:!0}}],staticClass:"avatar-list",on:{click:function(t){n.popoverVisible=!n.popoverVisible}}},[n.sessionsPopover.length>0?e("div",{staticClass:"avatardiv icon-more"}):n._e(),n._v(" "),n._l(n.sessionsVisible,(function(t){return e("Avatar",{key:t.id,style:n.sessionStyle(t),attrs:{user:t.userId?t.userId:t.guestName,"is-guest":null===t.userId,"disable-tooltip":!0,size:32}})}))],2),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:n.popoverVisible,expression:"popoverVisible"}],staticClass:"popovermenu menu-right"},[e("PopoverMenu",{attrs:{menu:n.sessionsPopover}}),n._v(" "),n._t("default")],2)])},r=[]},751:function(n,t,e){"use strict";var i=e(26),r=e.n(i),o=e(732),s={insert:"head",singleton:!1};r()(o.a,s),o.a.locals}}]);
//# sourceMappingURL=editor-collab.js.map?v=fbe2f40a217e0200bc2d