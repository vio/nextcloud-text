/*! For license information please see editor-rich.js.LICENSE.txt */
"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["editor-rich"],{18978:(n,e,r)=>{r.d(e,{h0:()=>P,Lz:()=>I,YZ:()=>S,tH:()=>F});var i=r(74411),o=r(4820),a=r(79753),c=r(27594);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(){s=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{c({},"")}catch(t){c=function(t,n,e){return t[n]=e}}function d(t,n,e,r){var i=n&&n.prototype instanceof h?n:h,o=Object.create(i.prototype),a=new _(r||[]);return o._invoke=function(t,n,e){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return L()}for(e.method=i,e.arg=o;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===A)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var l=u(t,n,e);if("normal"===l.type){if(r=e.done?"completed":"suspendedYield",l.arg===A)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(r="completed",e.method="throw",e.arg=l.arg)}}}(t,e,a),o}function u(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var A={};function h(){}function p(){}function f(){}var m={};c(m,i,(function(){return this}));var v=Object.getPrototypeOf,C=v&&v(v(E([])));C&&C!==n&&e.call(C,i)&&(m=C);var b=f.prototype=h.prototype=Object.create(m);function g(t){["next","throw","return"].forEach((function(n){c(t,n,(function(t){return this._invoke(n,t)}))}))}function w(t,n){function r(i,o,a,c){var s=u(t[i],t,o);if("throw"!==s.type){var d=s.arg,A=d.value;return A&&"object"==l(A)&&e.call(A,"__await")?n.resolve(A.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(A).then((function(t){d.value=t,a(d)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;this._invoke=function(t,e){function o(){return new n((function(n,i){r(t,e,n,i)}))}return i=i?i.then(o,o):o()}}function k(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,k(t,n),"throw"===n.method))return A;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return A}var r=u(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,A;var i=r.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,A):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,A)}function x(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function y(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function E(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=f,c(b,"constructor",f),c(f,"constructor",p),p.displayName=c(f,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,a,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,o,(function(){return this})),t.AsyncIterator=w,t.async=function(n,e,r,i,o){void 0===o&&(o=Promise);var a=new w(d(n,e,r,i),o);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(b),c(b,a,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=E,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(y),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=e.call(o,"catchLoc"),l=e.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,A):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),A},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),y(e),A}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;y(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:E(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),A}},t}function d(t,n,e,r,i,o,a){try{var c=t[o](a),l=c.value}catch(t){return void e(t)}c.done?n(l):Promise.resolve(l).then(r,i)}var u=!!document.getElementById("isPublic"),A=(0,a.generateOcsUrl)("apps/text"+(u?"/public":"")+"/workspace",2);const h={name:"RichWorkspace",components:{EditorWrapper:function(){return Promise.all([r.e("vendors"),r.e("editor")]).then(r.bind(r,66961))}},props:{path:{type:String,required:!0}},data:function(){return{focus:!1,folder:null,file:null,loaded:!1,ready:!1,autofocus:!1,darkTheme:OCA.Accessibility&&"dark"===OCA.Accessibility.theme,enabled:OCA.Text.RichWorkspaceEnabled}},computed:{shareToken:function(){var t;return null===(t=document.getElementById("sharingToken"))||void 0===t?void 0:t.value},canCreate:function(){return!!(this.folder&&this.folder.permissions&OC.PERMISSION_CREATE)},showEmptyWorkspace:function(){return(!this.file||this.autofocus&&!this.ready)&&this.canCreate}},watch:{path:function(){this.getFileInfo()},focus:function(t){t||document.querySelector("#editor").scrollTo(0,0)}},mounted:function(){var t,n=this;return(t=s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.enabled&&n.getFileInfo(),(0,c.subscribe)("Text::showRichWorkspace",(function(){n.enabled=!0,n.getFileInfo()})),(0,c.subscribe)("Text::hideRichWorkspace",(function(){n.enabled=!1}));case 3:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){d(o,r,i,a,c,"next",t)}function c(t){d(o,r,i,a,c,"throw",t)}a(void 0)}))})()},methods:{unfocus:function(){},reset:function(){var t=this;this.file=null,this.focus=!1,this.$nextTick((function(){t.creating=!1,t.getFileInfo()}))},getFileInfo:function(){var t=this;this.loaded=!1,this.autofocus=!1,this.ready=!1;var n={path:this.path};return u&&(n.shareToken=this.shareToken),o.default.get(A,{params:n}).then((function(n){var e=n.data.ocs.data;return t.folder=e.folder||null,t.file=e.file,t.editing=!0,t.loaded=!0,!0})).catch((function(n){return n.response.data.ocs&&n.response.data.ocs.data.folder?t.folder=n.response.data.ocs.data.folder:t.folder=null,t.file=null,t.loaded=!0,t.ready=!0,t.creating=!1,!1}))},createNew:function(){var t=this;this.creating||(this.creating=!0,this.getFileInfo().then((function(n){t.autofocus=!0,n||window.FileList.createFile("Readme.md",{scrollTo:!1,animate:!1}).then((function(n,e){t.getFileInfo()}))})))}}};var p=r(93379),f=r.n(p),m=r(7795),v=r.n(m),C=r(90569),b=r.n(C),g=r(3565),w=r.n(g),k=r(19216),x=r.n(k),y=r(44589),_=r.n(y),E=r(90559),L={};L.styleTagTransform=_(),L.setAttributes=w(),L.insert=b().bind(null,"head"),L.domAPI=v(),L.insertStyleElement=x();f()(E.Z,L);E.Z&&E.Z.locals&&E.Z.locals;const D=(0,r(51900).Z)(h,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.enabled?e("div",{class:{"icon-loading":!t.loaded||!t.ready,focus:t.focus,dark:t.darkTheme,creatable:t.canCreate},attrs:{id:"rich-workspace"}},[t.showEmptyWorkspace?e("div",{staticClass:"empty-workspace",on:{click:t.createNew}},[e("p",{staticClass:"placeholder"},[t._v("\n\t\t\t"+t._s(t.t("text","Add notes, lists or links …"))+"\n\t\t")])]):t._e(),t._v(" "),t.file?e("EditorWrapper",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],key:t.file.path,attrs:{"file-id":t.file.id,"relative-path":t.file.path,"share-token":t.shareToken,mime:t.file.mimetype,autofocus:t.autofocus,active:"",autohide:"","rich-workspace":""},on:{ready:function(n){t.ready=!0},focus:function(n){t.focus=!0},blur:t.unfocus,error:t.reset}}):t._e()],1):t._e()}),[],!1,null,"3a78d6a0",null).exports;var B=r(23895),O="Edit with text app",I=function(t,n){var e=t.split("/"),r=n.split("/");for(e.pop();e[0]===r[0];)e.shift(),r.shift();var i=e.fill("..").concat(r),o=n.split("/");return i.length<o.length?i.join("/"):n},F=function(){var n={attach:function(n){var e=n.fileList;"files"!==e.id&&"files.public"!==e.id||n.addMenuEntry({id:"file",displayName:t("text","New text file"),templateName:t("text","New text file")+".md",iconClass:"icon-filetype-text",fileType:"file",actionHandler:function(t){e.createFile(t).then((function(t,n){var r=new OCA.Files.FileInfoModel(n);void 0!==OCA.Viewer?OCA.Files.fileActions.triggerAction("view",r,e):void 0===OCA.Viewer&&OCA.Files.fileActions.triggerAction(O,r,e)}))}})}};OC.Plugins.register("OCA.Files.NewFileMenu",n)},S=function(){var n=document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null,e=document.getElementById("dir").value;if(!n||""!==e){var o=document.createElement("div");o.id="text-viewer-fallback",document.body.appendChild(o);for(var c=function(e){return OCA.Files.fileActions.register(e,O,OC.PERMISSION_UPDATE|OC.PERMISSION_READ,(0,a.imagePath)("core","actions/rename"),(function(t){var e=window.FileList.findFile(t);Promise.all([Promise.resolve().then(r.bind(r,20144)),Promise.all([r.e("vendors"),r.e("files-modal")]).then(r.bind(r,38002))]).then((function(r){var i=window.FileList.getCurrentDirectory()+"/"+t,a=r[0].default;a.prototype.t=window.t,a.prototype.n=window.n,a.prototype.OCA=window.OCA;var c=r[1].default;new a({render:function(t){var r=this;return t(c,{props:{fileId:e?e.id:null,active:!0,shareToken:n,relativePath:i,mimeType:e.mimetype},on:{close:function(){r.$destroy()}}})}}).$mount(o)}))}),t("text","Edit"))},l=0;l<i.SP.length;l++)c(i.SP[l]),OCA.Files.fileActions.setDefault(i.SP[l],O)}},P={el:null,attach:function(t){"files"!==t.id&&"files.public"!==t.id||(this.el=document.createElement("div"),t.registerHeader({id:"workspace",el:this.el,render:this.render.bind(this),priority:10}))},render:function(t){var n=this;"files"!==t.id&&"files.public"!==t.id||Promise.resolve().then(r.bind(r,20144)).then((function(e){var r=e.default;n.el.id="files-workspace-wrapper",r.prototype.t=window.t,r.prototype.n=window.n,r.prototype.OCA=window.OCA;var i=new(r.extend(D))({propsData:{path:t.getCurrentDirectory()},store:B.Z}).$mount(n.el);t.$el.on("urlChanged",(function(t){i.path=t.dir.toString()})),t.$el.on("changeDirectory",(function(t){i.path=t.dir.toString()}))}))}}},48926:(t,n,e)=>{e.d(n,{Z:()=>c});var r=e(87537),i=e.n(r),o=e(23645),a=e.n(o)()(i());a.push([t.id,".menububble[data-v-2716a5d6]{display:flex;z-index:10020;background:var(--color-main-background-translucent);box-shadow:0 1px 5px var(--color-box-shadow);border-radius:var(--border-radius-large);overflow:hidden;padding:0;margin-left:10px;height:44px}.menububble__button[data-v-2716a5d6]{flex-grow:1;border:0;padding:.9rem .7rem;margin:0;border-radius:0;cursor:pointer;background-color:var(--color-main-background);border-right:1px solid var(--color-border);display:flex;align-items:center}.menububble__button[data-v-2716a5d6]:focus,.menububble__button[data-v-2716a5d6]:hover{background-color:var(--color-background-hover);border:0;border-right:1px solid var(--color-border) !important}.menububble__button[data-v-2716a5d6]:last-child{border:0 !important}.menububble__buttontext[data-v-2716a5d6]{padding:.4rem;padding-right:0}.menububble__form[data-v-2716a5d6]{display:flex;align-items:center}.menububble__input[data-v-2716a5d6]{font:inherit;border:none;background:rgba(0,0,0,0);min-width:250px;margin:0 .5em 0 1em}","",{version:3,sources:["webpack://./src/components/MenuBubble.vue"],names:[],mappings:"AAqLA,6BACC,YAAA,CACA,aAAA,CACA,mDAAA,CACA,4CAAA,CACA,wCAAA,CACA,eAAA,CACA,SAAA,CACA,gBAAA,CACA,WAAA,CAEA,qCACC,WAAA,CACA,QAAA,CACA,mBAAA,CACA,QAAA,CACA,eAAA,CACA,cAAA,CACA,6CAAA,CACA,0CAAA,CACA,YAAA,CACA,kBAAA,CAEA,sFAEC,8CAAA,CACA,QAAA,CACA,qDAAA,CAGD,gDACC,mBAAA,CAIF,yCACC,aAAA,CACA,eAAA,CAGD,mCACC,YAAA,CACA,kBAAA,CAGD,oCACC,YAAA,CACA,WAAA,CACA,wBAAA,CACA,eAAA,CACA,mBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.menububble {\n\tdisplay: flex;\n\tz-index: 10020;\n\tbackground: var(--color-main-background-translucent);\n\tbox-shadow: 0 1px 5px var(--color-box-shadow);\n\tborder-radius: var(--border-radius-large);\n\toverflow: hidden;\n\tpadding: 0;\n\tmargin-left: 10px;\n\theight: 44px;\n\n\t&__button {\n\t\tflex-grow: 1;\n\t\tborder: 0;\n\t\tpadding: 0.9rem 0.7rem;\n\t\tmargin: 0;\n\t\tborder-radius: 0;\n\t\tcursor: pointer;\n\t\tbackground-color: var(--color-main-background);\n\t\tborder-right: 1px solid var(--color-border);\n\t\tdisplay: flex;\n\t\talign-items: center;\n\n\t\t&:focus,\n\t\t&:hover {\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t\tborder: 0;\n\t\t\tborder-right: 1px solid var(--color-border) !important;\n\t\t}\n\n\t\t&:last-child {\n\t\t\tborder: 0 !important;\n\t\t}\n\t}\n\n\t&__buttontext {\n\t\tpadding: 0.4rem;\n\t\tpadding-right: 0;\n\t}\n\n\t&__form {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t&__input {\n\t\tfont: inherit;\n\t\tborder: none;\n\t\tbackground: transparent;\n\t\tmin-width: 250px;\n\t\tmargin: 0 0.5em 0 1em;\n\t}\n}\n"],sourceRoot:""}]);const c=a},90559:(t,n,e)=>{e.d(n,{Z:()=>c});var r=e(87537),i=e.n(r),o=e(23645),a=e.n(o)()(i());a.push([t.id,'#rich-workspace[data-v-3a78d6a0]{padding:0 50px;margin-bottom:-24px;text-align:left;max-height:0;transition:max-height .5s cubic-bezier(0, 1, 0, 1);z-index:61;position:relative}#rich-workspace.creatable[data-v-3a78d6a0]{min-height:90px}#rich-workspace[data-v-3a78d6a0]:only-child{margin-bottom:0}.empty-workspace[data-v-3a78d6a0]{padding-top:43px;color:var(--color-text-maxcontrast);height:0}#rich-workspace[data-v-3a78d6a0] div[contenteditable=false]{width:100%;padding:0px;background-color:var(--color-main-background);opacity:1;border:none}#rich-workspace[data-v-3a78d6a0] .text-editor{height:100%;position:unset !important;top:auto !important}#rich-workspace[data-v-3a78d6a0] .text-editor__wrapper{position:unset !important;overflow:visible}#rich-workspace[data-v-3a78d6a0] .text-editor__main{overflow:visible !important}#rich-workspace[data-v-3a78d6a0] .content-wrapper{overflow:scroll !important;max-height:calc(40vh - 50px);padding-left:10px;padding-bottom:60px}#rich-workspace[data-v-3a78d6a0] .text-editor__wrapper .ProseMirror{padding:0px;margin:0}#rich-workspace[data-v-3a78d6a0] .editor__content{margin:0}#rich-workspace.focus[data-v-3a78d6a0]{max-height:50vh}#rich-workspace[data-v-3a78d6a0]:not(.focus){max-height:30vh;position:relative;overflow:hidden}#rich-workspace[data-v-3a78d6a0]:not(.focus):not(.icon-loading):after{content:"";position:absolute;z-index:1;bottom:0;left:0;pointer-events:none;background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-main-background));width:100%;height:4em}#rich-workspace.dark[data-v-3a78d6a0]:not(.focus):not(.icon-loading):after{background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-main-background))}@media only screen and (max-width: 1024px){#rich-workspace[data-v-3a78d6a0]:not(.focus){max-height:30vh}}html.ie #rich-workspace[data-v-3a78d6a0] .text-editor{position:initial}html.ie #rich-workspace[data-v-3a78d6a0] .text-editor__wrapper{position:relative !important;top:auto !important}html.ie #rich-workspace[data-v-3a78d6a0] .text-editor__main{display:flex;flex-direction:column;overflow:hidden !important}html.ie #rich-workspace[data-v-3a78d6a0] .menubar{position:relative;overflow:hidden;flex-shrink:0;height:44px;top:auto}html.ie #rich-workspace[data-v-3a78d6a0] .text-editor__main>div:nth-child(2){min-height:44px;overflow-x:hidden;overflow-y:auto;flex-shrink:1}',"",{version:3,sources:["webpack://./src/views/RichWorkspace.vue"],names:[],mappings:"AA2KA,iCACC,cAAA,CAEA,mBAAA,CACA,eAAA,CACA,YAAA,CACA,kDAAA,CACA,UAAA,CACA,iBAAA,CACA,2CACC,eAAA,CAKF,4CACC,eAAA,CAGD,kCACC,gBAAA,CACA,mCAAA,CACA,QAAA,CAGD,4DACC,UAAA,CACA,WAAA,CACA,6CAAA,CACA,SAAA,CACA,WAAA,CAGD,8CACC,WAAA,CACA,yBAAA,CACA,mBAAA,CAGD,uDACC,yBAAA,CACA,gBAAA,CAGD,oDACC,2BAAA,CAGD,kDACC,0BAAA,CACA,4BAAA,CACA,iBAAA,CACA,mBAAA,CAGD,oEACC,WAAA,CACA,QAAA,CAGD,kDACC,QAAA,CAGD,uCACC,eAAA,CAGD,6CACC,eAAA,CACA,iBAAA,CACA,eAAA,CAGD,sEACC,UAAA,CACA,iBAAA,CACA,SAAA,CACA,QAAA,CACA,MAAA,CACA,mBAAA,CACA,iGAAA,CACA,UAAA,CACA,UAAA,CAGD,2EACC,2FAAA,CAGD,2CACC,6CACC,eAAA,CAAA,CAMA,sDACC,gBAAA,CAGD,+DACC,4BAAA,CACA,mBAAA,CAGD,4DACC,YAAA,CACA,qBAAA,CACA,0BAAA,CAGD,kDACC,iBAAA,CACA,eAAA,CACA,aAAA,CACA,WAAA,CACA,QAAA,CAGD,6EACC,eAAA,CACA,iBAAA,CACA,eAAA,CACA,aAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#rich-workspace {\n\tpadding: 0 50px;\n\t/* Slightly reduce vertical space */\n\tmargin-bottom: -24px;\n\ttext-align: left;\n\tmax-height: 0;\n\ttransition: max-height 0.5s cubic-bezier(0, 1, 0, 1);\n\tz-index: 61;\n\tposition: relative;\n\t&.creatable {\n\t\tmin-height: 90px;\n\t}\n}\n\n/* For subfolders, where there are no Recommendations */\n#rich-workspace:only-child {\n\tmargin-bottom: 0;\n}\n\n.empty-workspace {\n\tpadding-top: 43px;\n\tcolor: var(--color-text-maxcontrast);\n\theight: 0;\n}\n\n#rich-workspace::v-deep div[contenteditable=false] {\n\twidth: 100%;\n\tpadding: 0px;\n\tbackground-color: var(--color-main-background);\n\topacity: 1;\n\tborder: none;\n}\n\n#rich-workspace::v-deep .text-editor {\n\theight: 100%;\n\tposition: unset !important;\n\ttop: auto !important;\n}\n\n#rich-workspace::v-deep .text-editor__wrapper {\n\tposition: unset !important;\n\toverflow: visible;\n}\n\n#rich-workspace::v-deep .text-editor__main {\n\toverflow: visible !important;\n}\n\n#rich-workspace::v-deep .content-wrapper {\n\toverflow: scroll !important;\n\tmax-height: calc(40vh - 50px);\n\tpadding-left: 10px;\n\tpadding-bottom: 60px; /* ensure menububble fits below */\n}\n\n#rich-workspace::v-deep .text-editor__wrapper .ProseMirror {\n\tpadding: 0px;\n\tmargin: 0;\n}\n\n#rich-workspace::v-deep .editor__content {\n\tmargin: 0;\n}\n\n#rich-workspace.focus {\n\tmax-height: 50vh;\n}\n\n#rich-workspace:not(.focus) {\n\tmax-height: 30vh;\n\tposition: relative;\n\toverflow: hidden;\n}\n\n#rich-workspace:not(.focus):not(.icon-loading):after {\n\tcontent: '';\n\tposition: absolute;\n\tz-index: 1;\n\tbottom: 0;\n\tleft: 0;\n\tpointer-events: none;\n\tbackground-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--color-main-background));\n\twidth: 100%;\n\theight: 4em;\n}\n\n#rich-workspace.dark:not(.focus):not(.icon-loading):after {\n\tbackground-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-main-background));\n}\n\n@media only screen and (max-width: 1024px) {\n\t#rich-workspace:not(.focus) {\n\t\tmax-height: 30vh;\n\t}\n}\n\nhtml.ie {\n\t#rich-workspace::v-deep {\n\t\t.text-editor {\n\t\t\tposition: initial;\n\t\t}\n\n\t\t.text-editor__wrapper {\n\t\t\tposition: relative !important;\n\t\t\ttop: auto !important;\n\t\t}\n\n\t\t.text-editor__main {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\toverflow: hidden !important;\n\t\t}\n\n\t\t.menubar {\n\t\t\tposition: relative;\n\t\t\toverflow: hidden;\n\t\t\tflex-shrink: 0;\n\t\t\theight: 44px;\n\t\t\ttop: auto;\n\t\t}\n\n\t\t.text-editor__main > div:nth-child(2) {\n\t\t\tmin-height: 44px;\n\t\t\toverflow-x: hidden;\n\t\t\toverflow-y: auto;\n\t\t\tflex-shrink: 1;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const c=a},89182:(n,e,r)=>{r.r(e),r.d(e,{default:()=>D});var i=r(7049),o=r(19958),a=r(22200),c=r(16453),l=r(15168),s=r.n(l),d=r(18978),u=r(13721),A=r(32318);const h={name:"MenuBubble",components:{BubbleMenu:i.NM,Link:A.BY,Document:A.BB,Delete:A.HG,Check:A.Jr},directives:{tooltip:s()},mixins:[u.Cy],props:{contentWrapper:{type:HTMLDivElement,required:!1,default:null},filePath:{type:String,required:!1,default:""}},data:function(){return{linkUrl:null,linkMenuIsActive:!1,isUsingDirectEditing:null!==(0,c.loadState)("text","directEditingToken",null)}},methods:{showLinkMenu:function(){var t=this,n=(0,o.Jo)(this.$editor.state,"link");this.linkUrl=n.href,this.linkMenuIsActive=!0,this.$nextTick((function(){t.$refs.linkInput.focus()}))},hideLinkMenu:function(){this.linkUrl=null,this.linkMenuIsActive=!1},selectFile:function(){var n=this;if((0,a.getCurrentUser)()){var e=this.filePath.split("/").slice(0,-1).join("/");OC.dialogs.filepicker(t("text","Select file to link to"),(function(t){OC.Files.getClient().getFileInfo(t).then((function(t,e){var r=(0,d.Lz)(n.filePath,"".concat(e.path,"/").concat(e.name)).split("/").map(encodeURIComponent).join("/"),i="".concat(r,"?fileId=").concat(e.id);n.$editor.chain().setLink({href:i}).focus().run(),n.hideLinkMenu()}))}),!1,[],!0,void 0,e)}},setLinkUrl:function(){var t=this.linkUrl;t&&![/^[a-zA-Z]+:/,/^\//,/\?fileId=/,/^\.\.?\//,/^[^.]*[/$]/,/^#/].find((function(n){return t.match(n)}))&&(t="https://"+t);var n=t.replaceAll(" ","%20");this.$editor.chain().setLink({href:n}).focus().run(),this.hideLinkMenu()},removeLinkUrl:function(){this.$editor.chain().unsetLink().focus().run()},isActive:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.$editor.isActive(t,n)}}};var p=r(93379),f=r.n(p),m=r(7795),v=r.n(m),C=r(90569),b=r.n(C),g=r(3565),w=r.n(g),k=r(19216),x=r.n(k),y=r(44589),_=r.n(y),E=r(48926),L={};L.styleTagTransform=_(),L.setAttributes=w(),L.insert=b().bind(null,"head"),L.domAPI=v(),L.insertStyleElement=x();f()(E.Z,L);E.Z&&E.Z.locals&&E.Z.locals;const D=(0,r(51900).Z)(h,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("BubbleMenu",{staticClass:"menububble",attrs:{editor:t.$editor,"tippy-options":{onHide:t.hideLinkMenu,duration:200,placement:"bottom"},"data-text-el":"menu-bubble"}},[t.linkMenuIsActive?e("form",{staticClass:"menububble__form",on:{submit:function(n){return n.preventDefault(),t.setLinkUrl()}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.linkUrl,expression:"linkUrl"}],ref:"linkInput",staticClass:"menububble__input",attrs:{type:"text",placeholder:"https://"},domProps:{value:t.linkUrl},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:t.hideLinkMenu.apply(null,arguments)},input:function(n){n.target.composing||(t.linkUrl=n.target.value)}}}),t._v(" "),e("button",{staticClass:"menububble__button",attrs:{"data-text-bubble-action":"confirm",type:"button",tabindex:"0"},on:{click:function(n){return t.setLinkUrl()}}},[e("Check")],1)]):[e("button",{staticClass:"menububble__button",class:{"is-active":t.isActive("link")},attrs:{"data-text-bubble-action":"add-link"},on:{click:function(n){return t.showLinkMenu()}}},[e("Link"),t._v(" "),e("span",{staticClass:"menububble__buttontext"},[t._v("\n\t\t\t\t"+t._s(t.isActive("link")?t.t("text","Update Link"):t.t("text","Add Link"))+"\n\t\t\t")])],1),t._v(" "),t.isUsingDirectEditing?t._e():e("button",{staticClass:"menububble__button",class:{"is-active":t.isActive("link")},attrs:{"data-text-bubble-action":"add-file"},on:{click:function(n){return t.selectFile()}}},[e("Document"),t._v(" "),e("span",{staticClass:"menububble__buttontext"},[t._v(t._s(t.t("text","Link file")))])],1),t._v(" "),t.isActive("link")?e("button",{staticClass:"menububble__button",class:{"is-active":t.isActive("link")},attrs:{"data-text-bubble-action":"remove-link"},on:{click:function(n){return t.removeLinkUrl()}}},[e("Delete"),t._v(" "),e("span",{staticClass:"menububble__buttontext"},[t._v("\n\t\t\t\t"+t._s(t.t("text","Remove Link"))+"\n\t\t\t")])],1):t._e()]],2)}),[],!1,null,"2716a5d6",null).exports}}]);
//# sourceMappingURL=editor-rich.js.map?v=71b514eabceb38f017ee