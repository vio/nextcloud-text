"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["files-modal"],{7827:(e,t,l)=>{l.r(t),l.d(t,{default:()=>n});const i={name:"PublicFilesEditor",components:{NcModal:l(15961).Jc,Editor:function(){return Promise.all([l.e("vendors"),l.e("editor")]).then(l.bind(l,97997))}},props:{fileId:{type:Number,default:null},relativePath:{type:String,default:null},active:{type:Boolean,default:!1},shareToken:{type:String,default:null},mimeType:{type:String,default:null}},computed:{fileName:function(){return this.relativePath.substring(this.relativePath.lastIndexOf("/")+1)}},methods:{close:function(){this.$emit("close")}}};const n=(0,l(51900).Z)(i,(function(){var e=this,t=e._self._c;return e.active?t("NcModal",{attrs:{title:e.fileName},on:{close:e.close}},[t("Editor",{attrs:{"file-id":e.fileId,"relative-path":e.relativePath,active:e.active,"share-token":e.shareToken,mime:e.mimeType}})],1):e._e()}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=files-modal.js.map?v=7754d24ff46fb30516fe