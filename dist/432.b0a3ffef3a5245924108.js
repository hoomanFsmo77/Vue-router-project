"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[432],{432:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var d=a(252),s=a(577),n={class:"container mt-4"},o={class:"row"},r={class:"col-6"},i={key:0,class:"spinner-border",style:{width:"3rem",height:"3rem"},role:"status"},l=[(0,d._)("span",{class:"visually-hidden"},"Loading...",-1)],c={key:1,class:"card"},u={class:"card-header"},p={class:"card-body"},m={class:"card-footer"},v={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"};var f=a(727),h=a(262),k=a(648),b=a(455),y=a.n(b);const w={name:"Edit",setup:function(){var e=function(){var e=(0,f.yj)(),t=(0,h.iH)(!1),a=(0,h.iH)(!1),s=(0,h.iH)([]);return(0,d.bv)((function(){k.Z.get("https://jsonplaceholder.typicode.com/posts/".concat(e.params.id)).then((function(e){s.value=e.data,t.value=!0}))})),{mode:t,data:s,route:e,deletePost:function(){a.value=!0,k.Z.delete("https://jsonplaceholder.typicode.com/posts/".concat(e.params.id)).then((function(t){a.value=!1,y().fire({title:"Thanks!",text:"Post(".concat(e.params.id,") deleted successfully"),confirmButtonText:"Ok"})}))},deleteMode:a}}(),t=e.data,a=e.deleteMode,s=e.deletePost;return{mode:e.mode,data:t,route:e.route,deletePost:s,deleteMode:a}}};const _=(0,a(744).Z)(w,[["render",function(e,t,a,f,h,k){var b=(0,d.up)("router-link");return(0,d.wg)(),(0,d.iD)("div",n,[(0,d._)("div",o,[(0,d._)("div",r,[f.mode?(0,d.kq)("v-if",!0):((0,d.wg)(),(0,d.iD)("div",i,l)),f.mode?((0,d.wg)(),(0,d.iD)("div",c,[(0,d._)("div",u,[(0,d._)("h6",null,(0,s.zw)(f.data.title),1)]),(0,d._)("div",p,[(0,d._)("p",null,(0,s.zw)(f.data.body),1)]),(0,d._)("div",m,[(0,d._)("button",{onClick:t[0]||(t[0]=function(){return f.deletePost&&f.deletePost.apply(f,arguments)}),class:"btn btn-danger"},[(0,d.Uk)(" Delete "),f.deleteMode?((0,d.wg)(),(0,d.iD)("span",v)):(0,d.kq)("v-if",!0)]),(0,d.Wm)(b,{class:"btn btn-dark mx-2",to:{name:"editPost",params:{id:f.route.params.id}}},{default:(0,d.w5)((function(){return[(0,d.Uk)("Edit")]})),_:1},8,["to"])])])):(0,d.kq)("v-if",!0)])])])}]])}}]);