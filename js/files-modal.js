/*! For license information please see files-modal.js.LICENSE.txt */
"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["files-modal","data_image_svg_xml_3csvg_20xmlns_27http_www_w3_org_2000_svg_27_20width_2724_27_20height_2724_-b2e651"],{21698:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const s={name:"PublicFilesEditor",components:{NcModal:n(76640).Jc,Editor:()=>Promise.all([n.e("mermaid"),n.e("vendors-node_modules_nextcloud_vue_dist_index_mjs"),n.e("vendors-node_modules_braintree_sanitize-url_dist_index_js-node_modules_quartzy_markdown-it-me-b0a421"),n.e("vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_nextcloud_l10n_dist_gett-c555be"),n.e("vendors-node_modules_nextcloud_dialogs_dist_index_mjs-node_modules_nextcloud_l10n_dist_index_mjs"),n.e("vendors-node_modules_nextcloud_logger_dist_index_js-node_modules_path-normalize_lib_index_js--e0e4bb"),n.e("src_extensions_index_js-src_components_Editor_EditorOutline_vue-data_image_svg_xml_3csvg_20xm-1ac8cb"),n.e("editor")]).then(n.bind(n,51724))},props:{fileId:{type:Number,default:null},relativePath:{type:String,default:null},active:{type:Boolean,default:!1},shareToken:{type:String,default:null},mimeType:{type:String,default:null}},computed:{fileName(){return this.relativePath.substring(this.relativePath.lastIndexOf("/")+1)}},methods:{close(){this.$emit("close")}}};const o=(0,n(51900).Z)(s,(function(){var e=this,t=e._self._c;return e.active?t("NcModal",{attrs:{name:e.fileName},on:{close:e.close}},[t("Editor",{attrs:{"file-id":e.fileId,"relative-path":e.relativePath,active:e.active,"share-token":e.shareToken,mime:e.mimeType}})],1):e._e()}),[],!1,null,null,null).exports},51900:(e,t,n)=>{function s(e,t,n,s,o,i,l,d){var a,r="function"==typeof e?e.options:e;if(t&&(r.render=t,r.staticRenderFns=n,r._compiled=!0),s&&(r.functional=!0),i&&(r._scopeId="data-v-"+i),l?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},r._ssrRegister=a):o&&(a=d?function(){o.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(r.functional){r._injectStyles=a;var _=r.render;r.render=function(e,t){return a.call(t),_(e,t)}}else{var c=r.beforeCreate;r.beforeCreate=c?[].concat(c,a):[a]}return{exports:e,options:r}}n.d(t,{Z:()=>s})},81488:e=>{e.exports="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e"},34868:e=>{e.exports="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e"},37059:e=>{e.exports="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e"},75701:e=>{e.exports="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e"},31443:(e,t,n)=>{n.d(t,{a:()=>a,e:()=>d,g:()=>r,s:()=>_});var s=n(62556),o=n(59673),i=n(32859);const l=(0,s.Kc)("nextcloud-vue").persist(!0).build();const d=(e,t=10)=>{const n=new o.EmojiIndex(i),s=r();let l;return e?(l=n.search(`:${e}`,t),l.length<t&&(l=l.concat(n.search(e,t-l.length)))):l=o.frequently.get(t).map((e=>n.emoji(e)))||[],l.map((e=>e.getSkin(s)))},a=function(e){o.frequently.add(e)},r=()=>{const e=Number.parseInt(l.getItem("NcEmojiPicker::currentSkinTone")??"1");return Math.min(Math.max(e,1),6)},_=e=>{e=Math.min(Math.max(e,1),6),l.setItem("NcEmojiPicker::currentSkinTone",e.toString())}}}]);
//# sourceMappingURL=files-modal.js.map?v=140c5c25b2e5bbe60b85