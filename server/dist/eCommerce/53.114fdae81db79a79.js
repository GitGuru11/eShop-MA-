"use strict";(self.webpackChunkeCommerce=self.webpackChunkeCommerce||[]).push([[53],{2053:(y,a,r)=>{r.r(a),r.d(a,{MyCartModule:()=>g});var e=r(9808),i=r(4292),t=r(5e3),d=r(3962),s=r(1083);function p(n,c){if(1&n&&(t.ynx(0),t._UZ(1,"app-card",3),t.BQk()),2&n){const o=c.$implicit;t.xp6(1),t.Q6J("cartComponent",!0)("product",o)}}function m(n,c){1&n&&(t.ynx(0),t.TgZ(1,"h4",4),t._uU(2," Your cart is empty. Go to "),t.TgZ(3,"a",5),t._uU(4,"Buy Product"),t.qZA(),t.qZA(),t.BQk())}let l=(()=>{class n{constructor(o){this.cartService=o,this.subs=[],this.cartProduct=[]}ngOnInit(){this.subs.push(this.cartService.cartItems.subscribe(o=>{o&&(this.cartProduct=o)}))}ngOnDestroy(){this.subs.forEach(o=>o.unsubscribe())}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(i.N))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-my-cart"]],decls:3,vars:2,consts:[[1,"product-list"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"cartComponent","product"],[1,"no-data"],["routerLink","/dashboard"]],template:function(o,u){1&o&&(t.TgZ(0,"div",0),t.YNc(1,p,2,2,"ng-container",1),t.YNc(2,m,5,0,"ng-container",2),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",u.cartProduct),t.xp6(1),t.Q6J("ngIf",0==u.cartProduct.length))},directives:[e.sg,d.A,e.O5,s.yS],styles:[".product-list[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-flow:wrap;padding:30px}.no-data[_ngcontent-%COMP%]{font-weight:400}.no-data[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--add-cart-button-background)}"]}),n})();var C=r(3196);const f=[{path:"",component:l}];let g=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[e.ez,C.d,s.Bz.forChild(f)]]}),n})()}}]);