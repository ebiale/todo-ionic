function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{D453:function(e,t,i){"use strict";i.r(t),i.d(t,"AddPageModule",(function(){return g}));var n=i("ofXK"),o=i("3Pt+"),s=i("TEn/"),l=i("tyNb"),c=function e(t){_classCallCheck(this,e),this.desc=t,this.completed=!1},a=i("fXoL"),r=i("LzXR");function b(e,t){if(1&e){var i=a.Nb();a.Mb(0,"ion-item-sliding",8),a.Mb(1,"ion-item",1),a.Mb(2,"ion-checkbox",9),a.Ub("ngModelChange",(function(e){return a.dc(i),t.$implicit.completed=e}))("ionChange",(function(){a.dc(i);var e=t.$implicit;return a.Wb(2).checkChange(e)})),a.Lb(),a.Mb(3,"ion-label"),a.hc(4),a.Lb(),a.Lb(),a.Mb(5,"ion-item-options",10),a.Mb(6,"ion-item-option",11),a.Ub("click",(function(){a.dc(i);var e=t.index;return a.Wb(2).delete(e)})),a.Kb(7,"ion-icon",12),a.Lb(),a.Lb(),a.Lb()}if(2&e){var n=t.$implicit;a.zb(2),a.bc("ngModel",n.completed),a.zb(2),a.ic(n.desc)}}function d(e,t){if(1&e&&(a.Mb(0,"ion-list",1),a.Mb(1,"ion-list-header",1),a.Mb(2,"ion-label"),a.hc(3,"TODO tasks"),a.Lb(),a.Lb(),a.gc(4,b,8,2,"ion-item-sliding",7),a.Lb()),2&e){var i=a.Wb();a.zb(4),a.bc("ngForOf",i.list.items)}}var h,u,f,m=[{path:"",component:(h=function(){function e(t,i){_classCallCheck(this,e),this.wishService=t,this.route=i,this.itemName="";var n=this.route.snapshot.paramMap.get("id");n&&(this.list=this.wishService.loadList(n))}return _createClass(e,[{key:"addItem",value:function(){if(0!==this.itemName.length){var e=new c(this.itemName);this.list.items.push(e),this.itemName="",this.wishService.saveStorage()}}},{key:"ngOnInit",value:function(){}},{key:"checkChange",value:function(e){0===this.list.items.filter((function(e){return!e.completed})).length?(this.list.ended=new Date,this.list.completed=!0):(this.list.ended=null,this.list.completed=!1),this.wishService.saveStorage()}},{key:"delete",value:function(e){this.list.items.splice(e,1),this.wishService.saveStorage()}}]),e}(),h.\u0275fac=function(e){return new(e||h)(a.Jb(r.a),a.Jb(l.a))},h.\u0275cmp=a.Db({type:h,selectors:[["app-add"]],decls:13,vars:3,consts:[[1,"ion-no-border"],["color","dark"],["slot","start"],["color","tertiary","defaultHref","/"],["position","floating"],["type","text",3,"ngModel","ngModelChange","keyup.enter"],["color","dark",4,"ngIf"],["class","animated fadeInDown",4,"ngFor","ngForOf"],[1,"animated","fadeInDown"],["slot","start","color","tertiary",3,"ngModel","ngModelChange","ionChange"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","close"]],template:function(e,t){1&e&&(a.Mb(0,"ion-header",0),a.Mb(1,"ion-toolbar",1),a.Mb(2,"ion-buttons",2),a.Kb(3,"ion-back-button",3),a.Lb(),a.Mb(4,"ion-title"),a.hc(5),a.Lb(),a.Lb(),a.Lb(),a.Mb(6,"ion-content",1),a.Mb(7,"ion-list",1),a.Mb(8,"ion-item",1),a.Mb(9,"ion-label",4),a.hc(10,"Add Item"),a.Lb(),a.Mb(11,"ion-input",5),a.Ub("ngModelChange",(function(e){return t.itemName=e}))("keyup.enter",(function(){return t.addItem()})),a.Lb(),a.Lb(),a.Lb(),a.gc(12,d,5,1,"ion-list",6),a.Lb()),2&e&&(a.zb(5),a.ic(null==t.list?null:t.list.title),a.zb(6),a.bc("ngModel",t.itemName),a.zb(1),a.bc("ngIf",t.list.items.length>0))},directives:[s.k,s.A,s.f,s.d,s.e,s.z,s.h,s.s,s.n,s.r,s.m,s.E,o.d,o.e,n.i,s.t,n.h,s.q,s.g,s.b,s.p,s.o,s.l],styles:[""]}),h)}],p=((f=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:f}),f.\u0275inj=a.Gb({factory:function(e){return new(e||f)},imports:[[l.i.forChild(m)],l.i]}),f),g=((u=function e(){_classCallCheck(this,e)}).\u0275mod=a.Hb({type:u}),u.\u0275inj=a.Gb({factory:function(e){return new(e||u)},imports:[[n.b,o.a,s.B,p]]}),u)}}]);