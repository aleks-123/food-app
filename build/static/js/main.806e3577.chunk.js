(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,,,function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3LlDC","meals-appear":"AvailableMeals_meals-appear__3sIaT"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__xfUBB"}},,,,,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(3)),r=n(1),o=n.n(r),s=n(2),l=n(6),d=n.n(l),m=n(10),u=n.n(m),j=n(0),b=function(e){return Object(j.jsx)("div",{className:u.a.backdrop,onClick:e.onClose})},p=function(e){return Object(j.jsx)("div",{className:u.a.modal,children:Object(j.jsx)("div",{className:u.a.content,children:e.children})})},x=document.getElementById("overlays"),O=function(e){return Object(j.jsxs)(r.Fragment,{children:[d.a.createPortal(Object(j.jsx)(b,{onClose:e.onClose}),x),d.a.createPortal(Object(j.jsx)(p,{children:e.children}),x)]})},h=n(4),f=n.n(h),_=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:f.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:f.a.summary,children:[Object(j.jsx)("span",{className:f.a.price,children:t}),Object(j.jsxs)("span",{className:f.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:f.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},v=n(5),C=n.n(v),N=Object(r.createContext)({imtes:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),y=function(e){var t=Object(r.useContext)(N),n="$".concat(Math.max(t.totalAmount,0).toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){var n=Object(s.a)(Object(s.a)({},e),{},{amount:1});t.addItem(n)},o=Object(j.jsx)("ul",{className:C.a["cart-items"],children:t.items.map((function(e){return Object(j.jsx)(_,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(j.jsxs)(O,{onClose:e.onClose,children:[o,Object(j.jsxs)("div",{className:C.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:n})]}),Object(j.jsxs)("div",{className:C.a.actions,children:[Object(j.jsx)("button",{onClick:e.onClose,className:C.a["button--alt"],children:"Close"}),a&&Object(j.jsx)("button",{className:C.a.button,children:"Order"})]})]})},g=n.p+"static/media/meals.d8ec17ff.jpg",I=n(12),A=n.n(I),M=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},w=n(8),k=n.n(w),B=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useContext)(N).items,s=o.reduce((function(e,t){return e+t.amount}),0),l="".concat(k.a.button," ").concat(a?k.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(j.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(j.jsx)("span",{className:k.a.icon,children:Object(j.jsx)(M,{})}),Object(j.jsx)("span",{children:"Your Cart"}),Object(j.jsx)("span",{className:k.a.badge,children:s})]})},S=function(e){return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsxs)("header",{className:A.a.header,children:[Object(j.jsx)("h1",{children:"Macedonian traditional food"}),Object(j.jsx)(B,{onClick:e.onShowCart})]}),Object(j.jsx)("div",{className:A.a["main-image"],children:Object(j.jsx)("img",{src:g,alt:"table of meals"})})]})},D=n(16),F=n.n(D),H=function(e){return Object(j.jsx)("div",{className:F.a.card,children:e.children})},T=n(11),E=n.n(T),R=n(17),P=n.n(R),z=o.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:P.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(s.a)({ref:t},e.input))]})})),U=n(18),V=n.n(U),J=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useRef)();return Object(j.jsxs)("form",{className:V.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(j.jsx)(z,{ref:o,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(j.jsx)("button",{children:"+ Add"}),!a&&Object(j.jsx)("p",{children:"Please enter a valid amount"})]})},Q=function(e){var t=Object(r.useContext)(N),n="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:E.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("div",{className:E.a.description,children:e.description}),Object(j.jsx)("div",{className:E.a.price,children:n})]}),Object(j.jsx)("div",{children:Object(j.jsx)(J,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},Y=n(19),q=n.n(Y),L=[{id:"m1",name:"Tavche Gravche",description:"Boiled beans, seasoned with a roux that includes dry red pepper.",price:22.99},{id:"m2",name:"Sarma",description:"Stuffed Cabbage Rolls!",price:16.5},{id:"m3",name:"Pastrmajlija",description:"Macedonian Pizza",price:12.99},{id:"m4",name:"Ajvar",description:"Extraordinary taste and creamy texture.",price:18.99}],$=function(){var e=L.map((function(e){return Object(j.jsx)(Q,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(j.jsx)("section",{className:q.a.meals,children:Object(j.jsx)(H,{children:Object(j.jsx)("ul",{children:e})})})},G=n(20),K=n.n(G),W=function(){return Object(j.jsxs)("section",{className:K.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(j.jsx)("p",{children:"Macedonia, a hidden gem of a country, located in the center of the Balkan peninsula, is a small and colorful nation; definitely not your typical travel destination. If you visit Macedonia, you\u2019ll be captivated by the numerous archaic monastery landmarks, picturesque lakes, and the alluring cuisine."}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."})]})},X=function(e){return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(W,{}),Object(j.jsx)($,{})]})},Z=n(13),ee=(n(30),{items:[],totalAmount:0}),te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(s.a)(Object(s.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(Z.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var o,l=e.items.findIndex((function(e){return e.id===t.id})),d=e.items[l],m=e.totalAmount-d.price;if(1===d.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(s.a)(Object(s.a)({},d),{},{amount:d.amount-1});(o=Object(Z.a)(e.items))[l]=u}return{items:o,totalAmount:m}}return ee},ne=function(e){var t=Object(r.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],o={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(j.jsx)(N.Provider,{value:o,children:e.children})},ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)(ne,{children:[n&&Object(j.jsx)(y,{onClose:function(){a(!1)}}),Object(j.jsx)(S,{onShowCart:function(){a(!0)}}),Object(j.jsx)("main",{children:Object(j.jsx)(X,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(ae,{}))}],[[32,1,2]]]);
//# sourceMappingURL=main.806e3577.chunk.js.map