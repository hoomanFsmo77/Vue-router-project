"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[590],{323:(e,s,r)=>{r.d(s,{Z:()=>c});var n=r(252),a=r(577),i={class:"card"},t={class:"card-header"},o={class:"list-group list-group-flush"},u={class:"list-group-item"},l={class:"list-group-item"},m={class:"list-group-item"};const d={name:"UserCard",props:["name","username","email","phone","id"]};const c=(0,r(744).Z)(d,[["render",function(e,s,r,d,c,p){var h=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",t,[(0,n.Wm)(h,{to:{path:"/users/".concat(r.id)}},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,a.zw)(r.name),1)]})),_:1},8,["to"])]),(0,n._)("ul",o,[(0,n._)("li",u,"Username: "+(0,a.zw)(r.username),1),(0,n._)("li",l,"Email: "+(0,a.zw)(r.email),1),(0,n._)("li",m,"Phone: "+(0,a.zw)(r.phone),1)])])}]])},590:(e,s,r)=>{r.r(s),r.d(s,{default:()=>c});var n=r(252),a={class:"container mt-4"},i={class:"row"},t={key:0,class:"spinner-border",style:{width:"3rem",height:"3rem"},role:"status"},o=[(0,n._)("span",{class:"visually-hidden"},"Loading...",-1)];var u=r(323),l=r(262),m=r(648);const d={name:"showUser",components:{UserCard:u.Z},setup:function(){var e=function(){var e=(0,l.iH)([]),s=(0,l.iH)(!1);return(0,n.bv)((function(){m.Z.get("https://jsonplaceholder.typicode.com/users").then((function(r){e.value=r.data,s.value=!0}))})),{usersList:e,mode:s}}(),s=e.mode;return{usersList:e.usersList,mode:s}}};const c=(0,r(744).Z)(d,[["render",function(e,s,r,u,l,m){var d=(0,n.up)("UserCard");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",i,[u.mode?(0,n.kq)("v-if",!0):((0,n.wg)(),(0,n.iD)("div",t,o)),u.mode?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:1},(0,n.Ko)(u.usersList,(function(e,s){return(0,n.wg)(),(0,n.iD)("div",{key:s,class:"col-md-4 my-4"},[(0,n.Wm)(d,{email:e.email,id:e.id,name:e.name,phone:e.phone,username:e.username},null,8,["email","id","name","phone","username"])])})),128)):(0,n.kq)("v-if",!0)])])}]])}}]);