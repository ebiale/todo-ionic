(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{uMfO:function(t,e,n){"use strict";n.r(e),n.d(e,"Tab1PageModule",(function(){return f}));var r=n("TEn/"),i=n("ofXK"),o=n("3Pt+"),a=n("qtYk"),c=n("tyNb"),l=n("mrSG"),s=n("fXoL"),b=n("LzXR"),d=n("UC3L");const u=[{path:"",component:(()=>{class t{constructor(t,e,n){this.wishService=t,this.router=e,this.alertCtrl=n}addList(){return Object(l.a)(this,void 0,void 0,(function*(){(yield this.alertCtrl.create({header:"New List",inputs:[{name:"title",type:"text",placeholder:"List name"}],buttons:[{text:"Cancel",role:"cancel"},{text:"Create",handler:t=>{if(0===t.title.length)return;const e=this.wishService.createList(t.title);this.router.navigateByUrl("/tabs/tab1/add/"+e)}}]})).present()}))}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(b.a),s.Jb(c.g),s.Jb(r.a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-tab1"]],decls:9,vars:3,consts:[[1,"ion-no-border",3,"translucent"],["color","dark"],["color","dark",3,"fullscreen"],[3,"completed"],["vertical","bottom","horizontal","end","slot","fixed"],["color","tertiary",3,"click"],["name","add"]],template:function(t,e){1&t&&(s.Mb(0,"ion-header",0),s.Mb(1,"ion-toolbar",1),s.Mb(2,"ion-title"),s.hc(3," Pending "),s.Lb(),s.Lb(),s.Lb(),s.Mb(4,"ion-content",2),s.Kb(5,"app-lists",3),s.Mb(6,"ion-fab",4),s.Mb(7,"ion-fab-button",5),s.Ub("click",(function(){return e.addList()})),s.Kb(8,"ion-icon",6),s.Lb(),s.Lb(),s.Lb()),2&t&&(s.bc("translucent",!0),s.zb(4),s.bc("fullscreen",!0),s.zb(1),s.bc("completed",!1))},directives:[r.k,r.A,r.z,r.h,d.a,r.i,r.j,r.l],styles:[""]}),t})()},{path:"add/:id",loadChildren:()=>n.e(2).then(n.bind(null,"D453")).then(t=>t.AddPageModule)}];let p=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[c.i.forChild(u)],c.i]}),t})();var h=n("j1ZV");let f=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[r.B,i.b,o.a,a.a,p,h.a]]}),t})()}}]);