(this.webpackJsonpapp_ecommerce=this.webpackJsonpapp_ecommerce||[]).push([[0],{38:function(e,t,n){},45:function(e,t,n){e.exports=n(85)},57:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){e.exports=n.p+"static/media/crown.ed28accb.svg"},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),l=n.n(c),i=n(8),o=n(2),s=n(40),u=n(6),m=n(41),p=(n(54),n(34)),d=n(42),f=n.n(d),b=n(1),h="SET_CURRENT_USER",E={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ITEM_ADD:"ITEM_ADD",ITEM_SUBTRACT:"ITEM_SUBTRACT",ITEM_DROP:"ITEM_DROP"},v="FETCH_COLLECTIONS_START",g="FETCH_COLLECTIONS_SUCCESS",y="FETCH_COLLECTIONS_",O={currentUser:null},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(b.a)(Object(b.a)({},e),{},{currentUser:t.payload});default:return e}},N=n(44),C=function(e,t){var n=e.find((function(e){return e.id===t.id}));return n?e.map((function(e){return e.id===n.id?Object(b.a)(Object(b.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(N.a)(e),[Object(b.a)(Object(b.a)({},t),{},{quantity:1})])},w=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id===t.id})):e.map((function(e){return e.id===t.id?Object(b.a)(Object(b.a)({},e),{},{quantity:e.quantity-1}):e}))},k={cart_hidden:!0,cartItems:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.TOGGLE_CART_HIDDEN:return Object(b.a)(Object(b.a)({},e),{},{cart_hidden:!e.cart_hidden});case E.ITEM_ADD:return Object(b.a)(Object(b.a)({},e),{},{cartItems:C(e.cartItems,t.payload)});case E.ITEM_DROP:return Object(b.a)(Object(b.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case E.ITEM_SUBTRACT:return Object(b.a)(Object(b.a)({},e),{},{cartItems:w(e.cartItems,t.payload)});default:return e}},S={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,subtitle:"Shop Now",linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,subtitle:"Shop Now",linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,subtitle:"Shop Now",linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,subtitle:"Shop Now",linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,subtitle:"Shop Now",linkUrl:"shop/mens"}]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return t.type,e},T={collections:null,isFetching:!1,errorMessage:void 0},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(b.a)(Object(b.a)({},e),{},{isFetching:!0});case g:return Object(b.a)(Object(b.a)({},e),{},{isFetching:!1,collections:t.payload});case y:return Object(b.a)(Object(b.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},U=Object(u.c)({user:j,cart:I,directory:_,shop:x}),A=[m.a];var D=Object(u.e)(Object(p.a)(function(e){return{key:"root",storage:e,whitelist:["cart"]}}(f.a),U),u.a.apply(void 0,A)),P=Object(p.b)(D),R=(n(57),n(7)),M=n.n(R),q=n(13),H=n(14),L=n(15),G=n(17),B=n(16),F=n(5),z=n(3),W=(n(59),n(60),Object(z.a)([function(e){return e.directory}],(function(e){return e.sections}))),K=(n(61),n(62),Object(F.g)((function(e){var t=e.section,n=e.history,a=e.match,c=t.title,l=t.imageUrl,i=t.subtitle,o=t.size,s=t.linkUrl;return r.a.createElement("div",{className:"".concat(o," menu-item"),onClick:function(){return n.push("".concat(a.url).concat(s))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(l)}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},c.toUpperCase()),r.a.createElement("span",{className:"subtitle"},i)))}))),V=Object(z.b)({sections:W}),Y=Object(o.b)(V)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){return r.a.createElement(K,{section:e,key:e.id})})))})),Q=function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(Y,null))},Z=n(21),$=(n(64),function(e){return function(t){var n=t.isLoading,a=Object(Z.a)(t,["isLoading"]);return n?r.a.createElement("div",{className:"spinner-overlay"},r.a.createElement("div",{className:"spinner-container"})):r.a.createElement(e,a)}}),J=n(33),X=n.n(J),ee=function(e){return e.shop},te=Object(z.a)([ee],(function(e){return e.collections})),ne=X()(Object(z.a)([te],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]}))),ae=X()((function(e){return Object(z.a)([te],(function(t){return t?t[e]:null}))})),re=Object(z.a)([ee],(function(e){return e.isFetching})),ce=Object(z.a)([ee],(function(e){return!!e.collections})),le=(n(65),n(66),n(67),function(e){var t=e.children,n=e.isgooglesignin,a=e.isinverted,c=Object(Z.a)(e,["children","isgooglesignin","isinverted"]);return r.a.createElement("button",Object.assign({className:"".concat(a?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},c),t)}),ie=Object(o.b)(null,(function(e){return{addItemCart:function(t){return e(function(e){return{type:E.ITEM_ADD,payload:e}}(t))}}}))((function(e){var t=e.item,n=e.addItemCart,a=t.imageUrl,c=t.name,l=t.price;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},l)),r.a.createElement(le,{isinverted:!0,onClick:function(){n(t)}},"Add to Cart"))})),oe=function(e){var t=e.section,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement(i.b,{to:"/shop/".concat(n.toLowerCase())},r.a.createElement("h1",{className:"title"},n.toUpperCase())),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(ie,{key:e.id,item:e})}))))},se=(n(68),Object(z.b)({collections:ne})),ue=Object(o.b)(se)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collection-overview"},t.map((function(e){return r.a.createElement(oe,{key:e.id,section:e})})))})),me=Object(z.b)({isLoading:re});console.log("rendering container"),console.log(me);var pe=Object(u.d)(Object(o.b)(me),$)(ue),de=(n(69),Object(o.b)((function(e,t){return{collection:ae(t.match.params.collectionId)(e)}}))((function(e){var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"collection-page__title"},n.toUpperCase()),r.a.createElement("div",{className:"collection-page__items"},a.map((function(e){return r.a.createElement(ie,{key:e.id,item:e})}))))}))),fe=Object(z.b)({isLoading:function(e){return!ce(e)}}),be=Object(u.d)(Object(o.b)(fe),$)(de),he=n(23),Ee=n.n(he);n(70),n(74);Ee.a.initializeApp({apiKey:"AIzaSyDK1RjfOdv4u_lpfYjkre-YTRZxeaB2L2o",authDomain:"crowndb-7b394.firebaseapp.com",databaseURL:"https://crowndb-7b394.firebaseio.com",projectId:"crowndb-7b394",storageBucket:"crowndb-7b394.appspot.com",messagingSenderId:"780676103080",appId:"1:780676103080:web:b682285cf4aec0ba917b9d",measurementId:"G-YTNS793X1S"});var ve=Ee.a.firestore(),ge=Ee.a.auth(),ye=new Ee.a.auth.GoogleAuthProvider;ye.setCustomParameters({prompt:"select_account"});var Oe=function(){var e=Object(q.a)(M.a.mark((function e(t){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,ge.signInWithPopup(ye);case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(q.a)(M.a.mark((function e(t,n){var a,r,c,l;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=ve.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=20;break}return r=t.displayName,c=t.email,l=new Date,e.prev=9,e.next=12,a.set(Object(b.a)({displayName:r,email:c,createdAt:l},n));case 12:return e.abrupt("return",e.sent);case 15:e.prev=15,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 18:e.next=21;break;case 20:console.log("".concat(t.displayName," already exists!"));case 21:return e.abrupt("return",a);case 22:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(t,n){return e.apply(this,arguments)}}(),Ne=function(){return console.log("fetching"),function(e){var t,n=ve.collection("collections");try{e({type:v}),n.get().then((function(t){var n=t.docs.map((function(e){var t=e.data(),n=t.title,a=t.items;return{id:e.id,routeName:encodeURI(n),title:n,items:a}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{});e(function(e){return{type:g,payload:e}}(n))}))}catch(a){e((t=a.message,{type:y,payload:t}))}}},Ce=function(e){Object(G.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(H.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0},e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchCollectionStartAsync)()}},{key:"render",value:function(){var e=this.props.match;return r.a.createElement("div",null,r.a.createElement(i.b,{to:"/shop"},r.a.createElement("h1",null,"ShopPage")),r.a.createElement(F.b,{exact:!0,path:"".concat(e.url),component:pe}),r.a.createElement(F.b,{path:"".concat(e.url,"/:collectionId"),component:be}))}}]),n}(a.Component),we=Object(o.b)(null,(function(e){return{fetchCollectionStartAsync:function(){return e(Ne())}}}))(Ce),ke=n(20),Ie=(n(38),n(76),function(e){var t=e.onChange,n=e.label,a=Object(Z.a)(e,["onChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n," "):null)}),Se=function(e){Object(G.a)(n,e);var t=Object(B.a)(n);function n(e){var a;return Object(H.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(ke.a)({},r,n))},a.handleSubmit=function(){var e=Object(q.a)(M.a.mark((function e(t){var n,r,c;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,c=n.password,e.prev=2,e.next=5,ge.signInWithEmailAndPassword(r,c);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",password:""},a}return Object(L.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return r.a.createElement("div",{className:"form__sign"},r.a.createElement("h2",null,"I already have an acount"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(Ie,{type:"email",name:"email",value:t,label:"Email",required:!0,onChange:this.handleChange}),r.a.createElement(Ie,{type:"password",name:"password",label:"Password",value:n,required:!0,onChange:this.handleChange}),r.a.createElement("div",{className:"buttons"},r.a.createElement(le,{type:"submit",value:"Submit Form"},"Sign In"),r.a.createElement(le,{onClick:Oe,isgooglesignin:!0},"Sign In With Google"))))}}]),n}(a.Component),_e=function(e){Object(G.a)(n,e);var t=Object(B.a)(n);function n(){var e;return Object(H.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(q.a)(M.a.mark((function t(n){var a,r,c,l,i,o,s;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,c=a.email,l=a.password,i=a.confirmPassword,l===i){t.next=5;break}return alert("Passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,ge.createUserWithEmailAndPassword(c,l);case 8:return o=t.sent,s=o.user,t.next=12,je(s,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log(t.t0.message);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(ke.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(L.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"form__sign"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(Ie,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(Ie,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(Ie,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(Ie,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(le,{type:"submit"},"SIGN UP")))}}]),n}(r.a.Component),Te=(n(77),function(){return r.a.createElement("div",{className:"signin-and-signup"},r.a.createElement(Se,null),r.a.createElement(_e,null))}),xe=function(e){return e.cart},Ue=Object(z.a)([xe],(function(e){return e.cartItems})),Ae=Object(z.a)([xe],(function(e){return e.cart_hidden})),De=Object(z.a)([Ue],(function(e){return e.reduce((function(e,t){return e.quantity=e.quantity+t.quantity,e.total=e.total+t.quantity*t.price,e}),{quantity:0,total:0})})),Pe=(n(78),function(e){return{type:E.TOGGLE_CART_HIDDEN,payload:e}}),Re=Object(o.b)(null,(function(e){return{addItemCart:function(t){return e(function(e){return{type:E.ITEM_ADD,payload:e}}(t))},subtractItemCart:function(t){return e(function(e){return{type:E.ITEM_SUBTRACT,payload:e}}(t))},dropItemCart:function(t){return e(function(e){return{type:E.ITEM_DROP,payload:e}}(t))}}}))((function(e){var t=e.item,n=e.addItemCart,a=e.subtractItemCart,c=e.dropItemCart,l=t.name,i=t.quantity,o=t.price,s=t.imageUrl;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:s,alt:"item"})),r.a.createElement("span",{className:"name"},l),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276e"),r.a.createElement("span",{className:"value"},i),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},o),r.a.createElement("span",{className:"remove-button",onClick:function(){return c(t)}},"\u2715"))})),Me=n(43),qe=n.n(Me),He=function(e){var t=e.price,a=100*t;return r.a.createElement(qe.a,{label:"Pay Now",name:"My Sweet Knickers",billingAddress:!0,shippingAddress:!0,image:n(79),description:"Your total is $".concat(t),amount:a,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Success!")},stripeKey:"pk_test_51HU9rMK3fDZ9t3tTr61FBHCs47sESZcZNQ99z7aSO0EOUfAvCqDRrHCWSrt1k1uNsENqsK9bYb4cgTTS7chfC4pl00jfvQt1bu"})},Le=(n(80),Object(z.b)({cartItemCount:De,cartItems:Ue})),Ge=Object(o.b)(Le)((function(e){var t=e.cartItems,n=e.cartItemCount;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(Re,{key:e.id,item:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"total: $",n.total)),r.a.createElement("div",{className:"test-warning"},"*Use the following test credit card for payments",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/21 - CVV: 123"),r.a.createElement(He,{price:n.total}))}));function Be(){return(Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Fe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ze=r.a.createElement("title",null,"Group"),We=r.a.createElement("desc",null,"Created with Sketch."),Ke=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Ve=function(e){var t=e.svgRef,n=e.title,a=Fe(e,["svgRef","title"]);return r.a.createElement("svg",Be({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?ze:n?r.a.createElement("title",null,n):null,We,Ke)},Ye=r.a.forwardRef((function(e,t){return r.a.createElement(Ve,Be({svgRef:t},e))}));n.p,n(81);function Qe(){return(Qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Ze(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var $e=r.a.createElement("g",null),Je=r.a.createElement("g",null),Xe=r.a.createElement("g",null),et=r.a.createElement("g",null),tt=r.a.createElement("g",null),nt=r.a.createElement("g",null),at=r.a.createElement("g",null),rt=r.a.createElement("g",null),ct=r.a.createElement("g",null),lt=r.a.createElement("g",null),it=r.a.createElement("g",null),ot=r.a.createElement("g",null),st=r.a.createElement("g",null),ut=r.a.createElement("g",null),mt=r.a.createElement("g",null),pt=function(e){var t=e.svgRef,n=e.title,a=Ze(e,["svgRef","title"]);return r.a.createElement("svg",Qe({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),$e,Je,Xe,et,tt,nt,at,rt,ct,lt,it,ot,st,ut,mt)},dt=r.a.forwardRef((function(e,t){return r.a.createElement(pt,Qe({svgRef:t},e))})),ft=(n.p,n(82),Object(o.b)((function(e){return{cartItemCount:De(e)}}),(function(e){return{toggleCartHidden:function(){return e(Pe())}}}))((function(e){var t=e.cartItemCount,n=e.toggleCartHidden;return r.a.createElement("div",{className:"cart-icon",onClick:function(){n()}},r.a.createElement(dt,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},t.quantity))}))),bt=(n(83),n(84),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,l=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},l," x $",a)))}),ht=function(e){var t=e.cartItems,n=e.toggleCartHidden,a=e.history;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(bt,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(le,{onClick:function(){n(),a.push("/checkout")}},"Go To Checkout"))},Et=Object(u.d)(F.g,Object(o.b)((function(e){return{cartItems:Ue(e)}}),(function(e){return{toggleCartHidden:function(){return e(Pe())}}})))(ht),vt=Object(z.a)([function(e){return e.user}],(function(e){return e.currentUser})),gt=Object(z.b)({currentUser:vt,cart_hidden:Ae}),yt=Object(o.b)(gt)((function(e){var t=e.currentUser,n=e.cart_hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(i.b,{className:"logo-container",to:"/"},r.a.createElement(Ye,{className:"logo"})," "),r.a.createElement("div",{className:"options"},r.a.createElement(i.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(i.b,{className:"option",to:"/contact"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){ge.signOut()}},"Sign Out"):r.a.createElement(i.b,{className:"option",to:"/signin"},"Sign In"),r.a.createElement(ft,null)),n?null:r.a.createElement(Et,null))})),Ot=function(e){Object(G.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(H.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=ge.onAuthStateChanged(function(){var t=Object(q.a)(M.a.mark((function t(n){var a;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,je(n);case 3:return a=t.sent,t.abrupt("return",a.onSnapshot((function(t){e(Object(b.a)({id:t.id},t.data()))})));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this.props.currentUser;return r.a.createElement("div",{className:"App"},r.a.createElement(yt,null),r.a.createElement(F.d,null,r.a.createElement(F.b,{exact:!0,path:"/",component:Q}),r.a.createElement(F.b,{path:"/shop",component:we}),r.a.createElement(F.b,{exact:!0,path:"/signin",render:function(){return e?r.a.createElement(F.a,{to:"/"}):r.a.createElement(Te,null)}}),r.a.createElement(F.b,{exact:!0,path:"/checkout",component:Ge})))}}]),n}(a.Component),jt=Object(z.b)({currentUser:vt}),Nt=Object(o.b)(jt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:h,payload:e}}(t))}}}))(Ot);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:D},r.a.createElement(i.a,{basename:"/udemy_ecommerce"},r.a.createElement(s.a,{persistor:P},r.a.createElement(Nt,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.438c2338.chunk.js.map