(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{i.selection()},o=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},c=()=>{i.selectionEnd()},a=t=>{i.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",r=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,r=t*i-t+"ms",o=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},LzXR:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));class i{constructor(t){this.title=t,this.created=new Date,this.completed=!1,this.items=[],this.id=(new Date).getTime()}}var r=n("fXoL");let o=(()=>{class t{constructor(){this.lists=[],this.loadStorage()}createList(t){const e=new i(t);return this.lists.push(e),this.saveStorage(),e.id}deleteList(t){this.lists=this.lists.filter(e=>e.id!==t),this.saveStorage()}loadList(t){return t=Number(t),this.lists.find(e=>e.id===t)}saveStorage(){localStorage.setItem("data",JSON.stringify(this.lists))}loadStorage(){localStorage.getItem("data")&&(this.lists=JSON.parse(localStorage.getItem("data")))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));const i=async(t,e,n,i,r)=>{if(t)return t.attachViewToDom(e,n,r,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>o.classList.add(t)),r&&Object.assign(o,r),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},PYW1:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("ePDZ"),r=n("ItpF"),o=n("2c9M");const s=(t,e)=>{let n,s;const c=(t,i,r)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,i);o&&e(o)?o!==n&&(l(),a(o,r)):l()},a=(t,e)=>{n=t,s||(s=n);const r=n;Object(i.g)(()=>r.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(i.g)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,o.a),onMove:t=>c(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),Object(o.e)(),s=void 0}})}},UC3L:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n("mrSG"),r=n("TEn/"),o=n("fXoL"),s=n("LzXR"),c=n("tyNb"),a=n("ofXK");let l=(()=>{class t{transform(t,e=!0){return t.filter(t=>t.completed===e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Ib({name:"completedFilter",type:t,pure:!1}),t})();function u(t,e){if(1&t){const t=o.Nb();o.Mb(0,"ion-item-sliding",2),o.Mb(1,"ion-item",3),o.Ub("click",(function(){o.dc(t);const n=e.$implicit;return o.Wb().selectList(n.id)})),o.Mb(2,"ion-label"),o.hc(3),o.Lb(),o.Mb(4,"ion-note",4),o.hc(5),o.Lb(),o.Lb(),o.Mb(6,"ion-item-options",5),o.Mb(7,"ion-item-option",6),o.Ub("click",(function(){o.dc(t);const n=e.$implicit;return o.Wb().update(n)})),o.Kb(8,"ion-icon",7),o.Lb(),o.Lb(),o.Mb(9,"ion-item-options",8),o.Mb(10,"ion-item-option",9),o.Ub("click",(function(){o.dc(t);const n=e.$implicit;return o.Wb().delete(n)})),o.Kb(11,"ion-icon",10),o.Lb(),o.Lb(),o.Lb()}if(2&t){const t=e.$implicit;o.zb(3),o.ic(t.title),o.zb(2),o.jc("",t.items.length," items")}}let d=(()=>{class t{constructor(t,e,n){this.wishService=t,this.router=e,this.alertCtrl=n,this.completed=!0}ngOnInit(){}selectList(t){this.router.navigateByUrl(`/tabs/${this.completed?"tab2":"tab1"}/add/${t}`)}delete(t){this.wishService.deleteList(t.id)}update(t){return Object(i.a)(this,void 0,void 0,(function*(){(yield this.alertCtrl.create({header:"Edit List",inputs:[{name:"title",type:"text",value:t.title,placeholder:"List name"}],buttons:[{text:"Cancel",role:"cancel"},{text:"Save",handler:e=>{0!==e.title.length&&(t.title=e.title,this.wishService.saveStorage())}}]})).present()}))}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(s.a),o.Jb(c.g),o.Jb(r.a))},t.\u0275cmp=o.Db({type:t,selectors:[["app-lists"]],viewQuery:function(t,e){var n;1&t&&o.kc(r.s,!0),2&t&&o.cc(n=o.Vb())&&(e.list=n.first)},inputs:{completed:"completed"},decls:3,vars:4,consts:[["color","dark"],["class","animated fadeInDown",4,"ngFor","ngForOf"],[1,"animated","fadeInDown"],["detail","","color","dark",3,"click"],["color","tertiary","slot","end"],["side","start"],["color","tertiary",3,"click"],["slot","icon-only","name","pencil-outline"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","close"]],template:function(t,e){1&t&&(o.Mb(0,"ion-list",0),o.gc(1,u,12,2,"ion-item-sliding",1),o.Xb(2,"completedFilter"),o.Lb()),2&t&&(o.zb(1),o.bc("ngForOf",o.Yb(2,1,e.wishService.lists,e.completed)))},directives:[r.s,a.h,r.q,r.n,r.r,r.u,r.p,r.o,r.l],pipes:[l],styles:[""]}),t})()},hcCc:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return c}));const i=(t,e)=>null!==e.closest(t),r=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,i)}return!1}},j1ZV:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("ofXK"),r=n("TEn/"),o=n("fXoL");let s=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)}}),t})(),c=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[r.B,i.b,s]]}),t})()},qtYk:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),s=n("fXoL");let c=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[i.b,r.a,o.B]]}),t})()}}]);