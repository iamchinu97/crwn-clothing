(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{50:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},58:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(32),i=n.n(r),a=(n(50),n(16)),s=n.n(a),l=n(4),o=n(20),u=n(25),d=n(26),b=n(28),m=n(27),p=(n(52),n(53),n(9)),h=n(6),j=Object(h.a)([function(e){return e.directory}],(function(e){return e.sections})),g=(n(58),n(8)),f=n(2),O=Object(g.g)((function(e){var t=e.title,n=e.imageUrl,c=e.size,r=e.linkUrl,i=e.history,a=e.match;return Object(f.jsxs)("div",{className:"".concat(c," menu-item"),onClick:function(){return i.push("".concat(a.url).concat(r))},children:[Object(f.jsx)("div",{style:{backgroundImage:"url(".concat(n,")")},className:"background-image"}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(f.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),v=(n(61),Object(h.b)({sections:j})),x=Object(p.b)(v)((function(e){var t=e.sections;return Object(f.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.title,n=e.imageUrl,c=e.size,r=e.id,i=e.linkUrl;return Object(f.jsx)(O,{title:t,imageUrl:n,size:c,linkUrl:i},r)}))})})),w=function(){return Object(f.jsx)("div",{className:"homepage",children:Object(f.jsx)(x,{})})},y=(n(62),function(e){return e.cart}),k=Object(h.a)([y],(function(e){return e.cartItems})),N=Object(h.a)([y],(function(e){return e.hidden})),U=Object(h.a)([k],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),C=Object(h.a)([k],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),E=(n(63),"TOGGLE_CARD_HIDDEN"),I="ADD_ITEM",S="REMOVE_ITEM",B="CLEAR_ITEM",P=function(){return{type:E}},T=function(e){return{type:I,payload:e}},A=Object(p.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:B,payload:e}}(t))},addItem:function(t){return e(T(t))},removeItem:function(t){return e(function(e){return{type:S,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.addItem,r=e.removeItem,i=t.name,a=t.imageUrl,s=t.price,l=t.quantity;return Object(f.jsxs)("div",{className:"checkout-item",children:[Object(f.jsx)("div",{className:"image-container",children:Object(f.jsx)("img",{src:a,alt:"item"})}),Object(f.jsx)("span",{className:"name",children:i}),Object(f.jsxs)("span",{className:"quantity",children:[Object(f.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276e"}),Object(f.jsx)("span",{className:"value",children:l}),Object(f.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276f"})]}),Object(f.jsx)("span",{className:"price",children:s}),Object(f.jsx)("div",{className:"remove-button",onClick:function(){n(t)},children:"\u2715"})]})})),W=n(41),R=n.n(W),D=function(e){var t=e.price,n=100*t;return Object(f.jsx)(R.a,{label:"Pay Now",name:"CROWN Clothing Ltd.",amount:n,billingAddress:!0,shippingAddress:!0,currency:"INR",image:"https://svgshare.com/i/CUz.svg",description:"Your Total is Rs. ".concat(t),panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successfull !! Thank you for shopping with Us!")},stripeKey:"pk_test_51IZgKfSCIXvQNBxv5n3eZ4PufaBgJkLKUY0kii5nX3nBcF0i7cgkTHHJeiwHmtj405Ysc1enopfgnwLjKBWQuNQW00o8GxatUy"})},H=Object(h.b)({cartItems:k,total:C}),M=Object(p.b)(H)((function(e){var t=e.cartItems,n=e.total;return Object(f.jsxs)("div",{className:"checkout-page",children:[Object(f.jsxs)("div",{className:"checkout-header",children:[Object(f.jsx)("div",{className:"header-block",children:Object(f.jsx)("span",{children:"Product"})}),Object(f.jsx)("div",{className:"header-block",children:Object(f.jsx)("span",{children:"Description"})}),Object(f.jsx)("div",{className:"header-block",children:Object(f.jsx)("span",{children:"Quantity"})}),Object(f.jsx)("div",{className:"header-block",children:Object(f.jsx)("span",{children:"Price"})}),Object(f.jsx)("div",{className:"header-block",children:Object(f.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(f.jsx)(A,{cartItem:e},e.id)})),Object(f.jsxs)("div",{className:"total",children:["TOTAL : \u20b9 ",n]}),Object(f.jsx)(D,{price:n}),Object(f.jsx)("div",{className:"test-card",children:"Test CARD : 4242 4242 4242 4242 | EXP: 01/22 | CVV: 123"})]})})),G=n(29),J=Object(h.a)([function(e){return e.shop}],(function(e){return e.collections})),z=Object(h.a)([J],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),q=(n(64),n(65),function(e){var t=e.children,n=e.isGoogleSigIn,c=e.inverted,r=Object(G.a)(e,["children","isGoogleSigIn","inverted"]);return Object(f.jsx)("div",Object(l.a)(Object(l.a)({className:"".concat(c?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},r),{},{children:t}))}),L=Object(p.b)(null,(function(e){return{addItem:function(t){return e(T(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,r=t.imageUrl,i=t.price;return Object(f.jsxs)("div",{className:"collection-item",children:[Object(f.jsx)("div",{style:{backgroundImage:"url(".concat(r,")")},className:"image"}),Object(f.jsxs)("div",{className:"collection-footer",children:[Object(f.jsx)("span",{className:"name",children:c}),Object(f.jsx)("span",{className:"price",children:i})]}),Object(f.jsx)(q,{inverted:!0,onClick:function(){return n(t)},children:"ADD TO CART"})]})})),V=(n(66),function(e){var t=e.title,n=e.items;return Object(f.jsxs)("div",{className:"collection-preview",children:[Object(f.jsx)("h1",{className:"title",children:t}),Object(f.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(f.jsx)(L,{item:e},e.id)}))})]})}),_=(n(67),Object(h.b)({collections:z})),K=Object(p.b)(_)((function(e){var t=e.collections;return Object(f.jsx)("div",{className:"collection-overview",children:t.map((function(e){var t=e.id,n=Object(G.a)(e,["id"]);return Object(f.jsx)(V,Object(l.a)({},n),t)}))})})),F=(n(68),Object(p.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(h.a)([J],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,c=t.items;return Object(f.jsxs)("div",{className:"collection-page",children:[Object(f.jsx)("h2",{className:"title",children:n}),Object(f.jsx)("div",{className:"items",children:c.map((function(e){return Object(f.jsx)(L,{item:e},e.id)}))})]})}))),X=(n(69),function(e){var t=e.match;return Object(f.jsxs)("div",{className:"shop-page",children:[Object(f.jsx)(g.b,{exact:!0,path:"".concat(t.path),component:K}),Object(f.jsx)(g.b,{path:"".concat(t.path,"/:collectionId"),component:F})]})}),Y=n(19);function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var $=c.createElement("desc",null,"Created with Sketch."),ee=c.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function te(e,t){var n=e.title,r=e.titleId,i=Z(e,["title","titleId"]);return c.createElement("svg",Q({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},i),void 0===n?c.createElement("title",{id:r},"Group"):n?c.createElement("title",{id:r},n):null,$,ee)}var ne=c.forwardRef(te),ce=(n.p,n(70),n(30)),re=(n(84),n(72),function(){var e=Object(o.a)(s.a.mark((function e(t,n){var c,r,i,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=ae.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(r=e.sent,console.log(r),r.exists){e.next=18;break}return i=t.displayName,a=t.email,o=new Date,e.prev=10,e.next=13,c.set(Object(l.a)({displayName:i,email:a,createdAt:o},n));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),console.log("error creating new user",e.t0.message);case 18:return e.abrupt("return",c);case 19:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t,n){return e.apply(this,arguments)}}());ce.a.initializeApp({apiKey:"AIzaSyA_qZuKrovw9M_obSs6YKobX_kwnWXmW7g",authDomain:"crown-db-9aabe.firebaseapp.com",databaseURL:"https://crown-db-9aabe.firebaseio.com",projectId:"crown-db-9aabe",storageBucket:"crown-db-9aabe.appspot.com",messagingSenderId:"429091880748",appId:"1:429091880748:web:07a73bcbd3f47188607689"});var ie=ce.a.auth(),ae=ce.a.firestore(),se=new ce.a.auth.GoogleAuthProvider;se.setCustomParameters({prompt:"select_account"});var le=function(){return ie.signInWithPopup(se)};ce.a;function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var de=c.createElement("g",null),be=c.createElement("g",null),me=c.createElement("g",null),pe=c.createElement("g",null),he=c.createElement("g",null),je=c.createElement("g",null),ge=c.createElement("g",null),fe=c.createElement("g",null),Oe=c.createElement("g",null),ve=c.createElement("g",null),xe=c.createElement("g",null),we=c.createElement("g",null),ye=c.createElement("g",null),ke=c.createElement("g",null),Ne=c.createElement("g",null);function Ue(e,t){var n=e.title,r=e.titleId,i=ue(e,["title","titleId"]);return c.createElement("svg",oe({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},i),n?c.createElement("title",{id:r},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),de,be,me,pe,he,je,ge,fe,Oe,ve,xe,we,ye,ke,Ne)}var Ce=c.forwardRef(Ue),Ee=(n.p,n(74),Object(p.b)((function(e){return Object(h.b)({itemCount:U})}),(function(e){return{toggleCartHidden:function(){return e(P())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(f.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(f.jsx)(Ce,{className:"shopping-icon"}),Object(f.jsx)("span",{className:"item-count",children:n})]})}))),Ie=(n(75),n(76),function(e){var t=e.item,n=t.imageUrl,c=t.price,r=t.name,i=t.quantity;return Object(f.jsxs)("div",{className:"cart-item",children:[Object(f.jsx)("img",{src:n,alt:"item"}),Object(f.jsxs)("div",{className:"item-details",children:[Object(f.jsx)("span",{className:"name",children:r}),Object(f.jsxs)("span",{className:"price",children:[i," x ",c]})]})]})}),Se=Object(g.g)(Object(p.b)((function(e){return Object(h.b)({cartItems:k})}))((function(e){var t=e.cartItems,n=e.history,c=e.dispatch;return Object(f.jsxs)("div",{className:"cart-dropdown",children:[Object(f.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(f.jsx)(Ie,{item:e},e.id)})):Object(f.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(f.jsx)(q,{onClick:function(){n.push("/crwn-clothing/checkout"),c(P())},children:" GO TO CHECKOUT "})]})}))),Be=Object(h.a)([function(e){return e.user}],(function(e){return e.currentUser})),Pe=Object(p.b)((function(e){return Object(h.b)({currentUser:Be,hidden:N})}))((function(e){var t=e.currentUser,n=e.hidden;return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)(Y.b,{className:"logo-container",to:"/crwn-clothing/",children:Object(f.jsx)(ne,{className:"logo"})}),Object(f.jsxs)("div",{className:"options",children:[Object(f.jsx)(Y.b,{className:"option",to:"/crwn-clothing/shop/",children:"SHOP"}),Object(f.jsx)(Y.b,{className:"option",to:"/crwn-clothing/contact/",children:"CONTACT"}),console.log("inside header:",t),t?Object(f.jsx)("div",{className:"option",onClick:function(){return ie.signOut()},children:"SIGN OUT"}):Object(f.jsx)(Y.b,{className:"option",to:"/crwn-clothing/signin",children:"SIGN IN"}),Object(f.jsx)(Ee,{})]}),n?null:Object(f.jsx)(Se,{})]})})),Te=(n(77),n(24)),Ae=(n(78),n(79),function(e){var t=e.handleChange,n=e.label,c=Object(G.a)(e,["handleChange","label"]);return Object(f.jsxs)("div",{className:"group",children:[Object(f.jsx)("input",Object(l.a)({className:"form-input",onChange:t},c)),n?Object(f.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:n}):null]})}),We=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).onChangeHandler=function(e){var t=e.target,n=t.name,r=t.value;c.setState(Object(Te.a)({},n,r))},c.handleSubmit=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=c.state,r=n.email,i=n.password,e.prev=2,e.next=5,ie.signInWithEmailAndPassword(r,i);case 5:c.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:console.log(c.state.email+" "+c.state.password);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),c.state={email:"",password:""},c}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"sign-in",children:[Object(f.jsx)("h2",{children:"I already have an accounnt"}),Object(f.jsx)("span",{children:"Sign in with your email and password"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)(Ae,{type:"email",name:"email",value:this.state.email,handleChange:this.onChangeHandler,label:"email",required:!0}),Object(f.jsx)(Ae,{type:"password",name:"password",label:"password",value:this.state.password,handleChange:this.onChangeHandler,required:!0}),Object(f.jsxs)("div",{className:"buttons",children:[Object(f.jsx)(q,{type:"submit",onClick:this.handleSubmit,children:"Sign IN"}),Object(f.jsx)(q,{onClick:le,isGoogleSigIn:!0,children:"Sign IN with Google"})]})]})]})}}]),n}(c.Component),Re=(n(80),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).handleSubmit=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,r,i,a,l,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=c.state,r=n.displayName,i=n.email,a=n.password,l=n.confirmPassword,a===l){e.next=5;break}return alert("Password doesn't match"),e.abrupt("return");case 5:return e.prev=5,e.next=8,ie.createUserWithEmailAndPassword(i,a);case 8:return o=e.sent,u=o.user,e.next=12,re(u,{displayName:r});case 12:c.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0.message());case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}(),c.handleChange=function(e){var t=e.target,n=t.name,r=t.value;c.setState(Object(Te.a)({},n,r))},c.state={displayName:"",email:"",password:"",confirmPassword:""},c}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,c=e.password,r=e.confirmPassword;return Object(f.jsxs)("div",{className:"sign-up",children:[Object(f.jsx)("h2",{className:"title",children:"I do not have a acount"}),Object(f.jsx)("span",{children:"Sign up with your Email and Password"}),Object(f.jsxs)("form",{className:"sign-up-form",children:[Object(f.jsx)(Ae,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name"}),Object(f.jsx)(Ae,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email ID"}),Object(f.jsx)(Ae,{type:"password",name:"password",value:c,onChange:this.handleChange,label:"Password"}),Object(f.jsx)(Ae,{type:"password",name:"confirmPassword",value:r,onChange:this.handleChange,label:"Confirm Password"}),Object(f.jsx)(q,{type:"submit",onClick:this.handleSubmit,children:"SIGN UP"})]})]})}}]),n}(c.Component)),De=function(){return Object(f.jsxs)("div",{className:"sign-in-sign-up",children:[Object(f.jsx)(We,{}),Object(f.jsx)(Re,{})]})},He="SET_CURRENT_USER",Me=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.setCurrentUser;this.unsubscribeFromAuth=ie.onAuthStateChanged(function(){var n=Object(o.a)(s.a.mark((function n(c){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!c){n.next=5;break}return n.next=3,re(c);case 3:n.sent.onSnapshot((function(n){t({currentUser:Object(l.a)({id:n.id},n.data())},(function(){console.log(e.state)}))}));case 5:t(c);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)(Pe,{}),Object(f.jsxs)(g.d,{children:[Object(f.jsx)(g.b,{exact:!0,path:"/crwn-clothing",component:w}),Object(f.jsx)(g.b,{path:"/crwn-clothing/shop",component:X}),Object(f.jsx)(g.b,{path:"/crwn-clothing/checkout",component:M}),Object(f.jsx)(g.b,{exact:!0,path:"/crwn-clothing/signin",render:function(){return e.props.currentUser?Object(f.jsx)(g.a,{to:"/crwn-clothing"}):Object(f.jsx)(De,{})}})]})]})}}]),n}(c.Component),Ge=Object(p.b)((function(e){return{currentUser:e.user.currentUser}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:He,payload:e}}(t))}}}))(Me),Je=n(42),ze=n(18),qe=n(43),Le=n.n(qe),Ve=n(34),_e={currentUser:null},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case He:return Object(l.a)(Object(l.a)({},e),{},{currentUser:t.payload});default:return e}},Fe=n(45),Xe=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Fe.a)(e),[Object(l.a)(Object(l.a)({},t),{},{quantity:1})])},Ye=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{quantity:e.quantity-1}):e}))},Qe={hidden:!0,cartItems:[]},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(l.a)(Object(l.a)({},e),{},{hidden:!e.hidden});case I:return Object(l.a)(Object(l.a)({},e),{},{cartItems:Xe(e.cartItems,t.payload)});case S:return Object(l.a)(Object(l.a)({},e),{},{cartItems:Ye(e.cartItems,t.payload)});case B:return Object(l.a)(Object(l.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},$e={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"women",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/women"},{title:"men",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/men"}]},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;return t.type,e},tt={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ct=n(44),rt={key:"root",storage:n.n(ct).a,whitelist:["cart"]},it=Object(ze.c)({user:Ke,cart:Ze,directory:et,shop:nt}),at=Object(Ve.a)(rt,it),st=[Le.a],lt=Object(ze.d)(at,ze.a.apply(void 0,st)),ot=Object(Ve.b)(lt);i.a.render(Object(f.jsx)(p.a,{store:lt,children:Object(f.jsx)(Y.a,{children:Object(f.jsx)(Je.a,{persistor:ot,children:Object(f.jsx)(Ge,{})})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.0bb07149.chunk.js.map