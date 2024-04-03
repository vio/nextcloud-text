/*! For license information please see src_helpers_files_js.js.LICENSE.txt */
"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["src_helpers_files_js"],{94091:(e,n,o)=>{o.d(n,{registerFileActionFallback:()=>p});o(69183);var i=o(5656),s=o(11480),a=o(42397),c=o(74411),d=o(25030),r=(o(77958),o(64024),o(47845),o(43935));o(94975);const l="Edit with text app",p=()=>{const e=(0,a.a)(),n=document.querySelector("#preview table.files-filestable");if(!e||!n){const n=document.createElement("div");n.id="text-viewer-fallback",document.body.appendChild(n);const i=i=>OCA.Files.fileActions.register(i,l,OC.PERMISSION_UPDATE|OC.PERMISSION_READ,(0,s.hp)("core","actions/rename"),(t=>{const i=window.FileList.findFile(t);Promise.all([Promise.resolve().then(o.bind(o,20144)),Promise.all([o.e("vendors-node_modules_nextcloud_vue_dist_index_mjs"),o.e("files-modal")]).then(o.bind(o,21698))]).then((o=>{const s=window.FileList.getCurrentDirectory()+"/"+t,a=o[0].default;a.prototype.t=window.t,a.prototype.n=window.n,a.prototype.OCA=window.OCA;const c=o[1].default;new a({render:function(t){const n=this;return t(c,{props:{fileId:i?i.id:null,active:!0,shareToken:e,relativePath:s,mimeType:i.mimetype},on:{close:function(){n.$destroy()}}})}}).$mount(n)}))}),t("text","Edit"));for(let e=0;e<c.SP.length;e++)i(c.SP[e]),OCA.Files.fileActions.setDefault(c.SP[e],l)}};let u=!1;let m=null;new i.h4({id:"workspace",order:10,enabled:(e,t)=>"files"===t.id,async render(e,t,n){m&&(m.$destroy(),m=null);const i=!!t.attributes["rich-workspace-file"]||!!u,s=u?(0,r.dirname)(u.path):t.path,a=u?"":t.attributes["rich-workspace"];u=!1;const{default:c}=await Promise.all([o.e("mermaid"),o.e("vendors-node_modules_nextcloud_vue_dist_index_mjs"),o.e("vendors-node_modules_braintree_sanitize-url_dist_index_js-node_modules_quartzy_markdown-it-me-7a6f73"),o.e("src_extensions_index_js-src_components_Editor_EditorOutline_vue-data_image_svg_xml_3csvg_20xm-1ac8cb"),o.e("src_views_RichWorkspace_vue-node_modules_nextcloud_vue_dist_chunks_emoji-k4gWHxrE_mjs-node_mo-c8741d")]).then(o.bind(o,99157));Promise.resolve().then(o.bind(o,20144)).then((t=>{e.id="files-workspace-wrapper";const n=t.default;n.prototype.t=window.t,n.prototype.n=window.n,n.prototype.OCA=window.OCA;const o=n.extend(c);m=new o({propsData:{path:s,hasRichWorkspace:i,content:a},store:d.default}).$mount(e)}))},updated(e,t){u=!1;const n=!!e.attributes["rich-workspace-file"];m.path=e.path,m.hasRichWorkspace=n,m.content=e.attributes["rich-workspace"]}})},74411:(e,t,n)=>{var o,i;n.d(t,{SP:()=>a});const s=["text/plain","application/cmd","application/x-empty","application/x-msdos-program","application/javascript","application/json","application/x-perl","application/x-php","application/x-tex","application/xml","application/yaml","text/asciidoc","text/css","text/html","text/org","text/x-c","text/x-c++src","text/x-h","text/x-java-source","text/x-ldif","text/x-python","text/x-shellscript"];null!==(o=OC.appswebroots)&&void 0!==o&&o.richdocuments||null!==(i=OC.appswebroots)&&void 0!==i&&i.onlyoffice||s.push("text/csv");const a=["text/markdown",...s]},42397:(e,t,n)=>{n.d(t,{a:()=>o});const o=()=>document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null},25030:(e,t,n)=>{n.d(t,{default:()=>f,D:()=>w});var o=n(20144),i=n(20629),s=n(62556),a=n(11480),c=n(47845);const d="SET_VIEW_WIDTH",r="SET_SHOW_AUTHOR_ANNOTATIONS",l="SET_HEADINGS",p="SET_ATTACHMENT_LIST";var u=n(20296),m=n.n(u);const h=()=>document.documentElement.clientWidth,_=e=>{let{commit:t}=e;const n=m()((()=>{t("text/".concat(d),h())}),100);window.addEventListener("resize",n)},x=(0,s.Kc)("text").persist().build();o.default.use(i.ZP);const w={state:{showAuthorAnnotations:"true"===x.getItem("showAuthorAnnotations"),viewWidth:h(),headings:Object.freeze([]),attachmentList:[]},getters:{imageAttachments:e=>e.attachmentList.filter((e=>e.isImage)),findAttachment:e=>t=>e.attachmentList.find((e=>e.name===t))},mutations:{[d](e,t){e.viewWidth=t},[r](e,t){e.showAuthorAnnotations=t,x.setItem("showAuthorAnnotations",""+t)},[l](e,t){if(e.headings.length!==t.length)return void(e.headings=Object.freeze(t));const n=e.headings,o=t.map(((e,t)=>{const o=n[t].level;return Object.freeze({...e,previous:o})}));e.headings=Object.freeze(o)},[p](e,t){e.attachmentList=t}},actions:{setShowAuthorAnnotations(e,t){let{commit:n}=e;n(r,t)},setHeadings(e,t){let{commit:n}=e;n(l,t)},async setAttachmentList(e,t){var n;let{commit:o}=e,{documentId:i,session:s,shareToken:d}=t;const r=await c.Z.post((0,a.nu)("/apps/text/attachments"),{documentId:null!==(n=null==s?void 0:s.documentId)&&void 0!==n?n:i,sessionId:null==s?void 0:s.id,sessionToken:null==s?void 0:s.token,shareToken:d});o(p,r.data)}}},f=new i.yh({plugins:[_],modules:{text:{namespaced:!0,...w}}})}}]);
//# sourceMappingURL=src_helpers_files_js.js.map?v=36adc974a8357eb69f73