(this.webpackJsonpshoushou92410=this.webpackJsonpshoushou92410||[]).push([[0],{75:function(e,a,t){e.exports=t(93)},80:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(35),m=t.n(r),c=(t(80),t(81),t(22)),s=t(15),o=l.a.createContext({currentUser:null}),u=t(38),E=t.n(u);t(82),t(85);E.a.initializeApp({apiKey:"AIzaSyBrr0niR6AFOjdOndkpuIRIsJbw3ia-d0s",authDomain:"shoushou-21e35.firebaseapp.com",databaseURL:"https://shoushou-21e35.firebaseio.com",projectId:"shoushou-21e35",storageBucket:"shoushou-21e35.appspot.com",appId:"1:927287651691:web:b3463aaebbd9c7074c702e",measurementId:"G-8JHLFBZ2Y2"});var i=function(){E.a.auth().signOut()},h=E.a.database(),d=t(58),g=t(23),p=t(10);var b=function(e){var a=e.currentUser,t=e.handleSignOut,n=e.handleSignInModalOpen;return l.a.createElement("div",{className:"sticky-nav"},l.a.createElement(d.a,{bg:"dark",variant:"dark"},l.a.createElement(d.a.Brand,{as:s.b,to:"/"},"Home"),l.a.createElement(d.a.Collapse,{className:"justify-content-end"},l.a.createElement(g.a,null,l.a.createElement(g.a.Link,{as:s.b,to:"/about"},"About"),l.a.createElement(g.a.Link,{as:s.b,to:"/quiz"},"Quiz"),l.a.createElement(g.a.Link,{as:s.b,to:"/blog"},"Blog"),a?l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a.Link,{as:s.b,to:"/management"},"Management"),l.a.createElement(p.a,{variant:"secondary",size:"sm",className:"m-1",onClick:t},"Sign Out")):l.a.createElement(p.a,{variant:"secondary",size:"sm",className:"m-1",onClick:n},"Sign In")))))},v=t(37),N=t(51),f=t(40),y=t(4),k=t(17),C=t(73);var w=function(e){var a=e.show,t=e.handleClose,n=e.handleSignInInfoChange,r=e.handleSignIn,m=e.signingIn,c=e.signInError;return l.a.createElement(f.a,{show:a,onHide:t},l.a.createElement(f.a.Header,{closeButton:!0},l.a.createElement(f.a.Title,null,"Sign In")),c?l.a.createElement(k.a,{variant:"danger",className:"text-center"},l.a.createElement("h5",{className:"mb-0"},c)):"",l.a.createElement(y.a,{onSubmit:r},l.a.createElement(f.a.Body,null,l.a.createElement(y.a.Group,null,l.a.createElement(y.a.Label,null,"Email"),l.a.createElement(y.a.Control,{type:"email",name:"email",onChange:n})),l.a.createElement(y.a.Group,null,l.a.createElement(y.a.Label,null,"Password"),l.a.createElement(y.a.Control,{type:"password",name:"password",onChange:n}))),l.a.createElement(f.a.Footer,null,l.a.createElement(p.a,{variant:"primary",type:"submit",disabled:m},m?l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a,{as:"span",animation:"border",size:"sm"})," "):"","Sign In"))))};var x=function(e){var a=e.show,t=e.handleSignInModalClose,r=Object(n.useState)({}),m=Object(c.a)(r,2),s=m[0],o=m[1],u=Object(n.useState)(!1),i=Object(c.a)(u,2),h=i[0],d=i[1],g=Object(n.useState)(""),p=Object(c.a)(g,2),b=p[0],f=p[1],y=function(){t(),o({}),f("")},k=function(e,a){return e?!!a||(d(!1),f("Invalid password."),!1):(d(!1),f("Invalid email."),!1)};return l.a.createElement(w,{show:a,handleClose:y,handleSignInInfoChange:function(e){return o(Object(N.a)({},s,Object(v.a)({},e.target.name,e.target.value)))},handleSignIn:function(e){var a,t;e.preventDefault(),d(!0),k(s.email,s.password)&&(a=s.email,t=s.password,E.a.auth().signInWithEmailAndPassword(a,t).catch((function(e){throw e}))).then((function(){d(!1),y()})).catch((function(e){switch(d(!1),e.code){case"auth/user-not-found":f("User not found.");break;case"auth/wrong-password":f("Incorrect password.");break;default:f(e.message)}}))},signingIn:h,signInError:b})};var j=function(){var e=Object(n.useContext)(o).currentUser,a=Object(n.useState)(!1),t=Object(c.a)(a,2),r=t[0],m=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{show:r,handleSignInModalClose:function(){return m(!1)}}),l.a.createElement(b,{currentUser:e,handleSignOut:i,handleSignInModalOpen:function(){return m(!0)}}))},I=t(29),S=t(74),L=t(42),O=t(7),G=t(3);var F=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,null,l.a.createElement(G.a,{lg:2}),l.a.createElement(G.a,{lg:7},l.a.createElement("h1",null,"About"),l.a.createElement("h5",null,"Who?"),l.a.createElement("p",{className:"fs-18"},"My name is \u6587\u5ba5\u7fd4 or Yu-Hsiang Wen in English, you can also called me Sean Wen. I'm a Taiwanese that came to Canada at the age of 12, after I finished my elementary school. Currently I'm a University of Calgary student majoring in Computer Science.")),l.a.createElement(G.a,{lg:2},l.a.createElement(O.a,{className:"justify-content-md-center"},l.a.createElement(L.a,{src:"".concat("","/pp_200px.jpg"),roundedCircle:!0})),l.a.createElement(O.a,{className:"justify-content-md-center"},l.a.createElement("p",{className:"text-center"},"Hello, I'm Sean.",l.a.createElement("br",null),"Welcome to my website!")),l.a.createElement(O.a,{className:"justify-content-md-center"},l.a.createElement("a",{href:"https://github.com/ShouShou92410",target:"_blank"},l.a.createElement(L.a,{src:"".concat("","/github.png")})),l.a.createElement("a",{href:"https://www.linkedin.com/in/yu-hsiang-wen-b61745144/",target:"_blank"},l.a.createElement(L.a,{src:"".concat("","/linkedin.png")})),l.a.createElement("a",{href:"https://steamcommunity.com/id/Seavanas",target:"_blank"},l.a.createElement(L.a,{src:"".concat("","/steam.png")}))))))};var U=function(){return l.a.createElement(F,null)},B=t(57),H=t(31);var T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,null,l.a.createElement(G.a,null,l.a.createElement("h1",{className:"mb-4"},"Manage User"))),l.a.createElement(k.a,{variant:"warning",className:"text-center mt-2"},l.a.createElement(k.a.Heading,null,"Please use the Firebase console to manage the user."),"Will have the functionality on the back-end in the future."),l.a.createElement(B.a,{defaultActiveKey:"insert",className:"dark"},l.a.createElement(H.a,{eventKey:"insert",title:"Insert"},l.a.createElement(y.a,{className:"mt-4"},l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"Email")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"email",name:"email"}))),l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"Password")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"password",name:"password"}))),l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"User Name")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"text",name:"userName"})))),l.a.createElement(p.a,{variant:"primary",type:"submit",className:"float-right"},"Insert")),l.a.createElement(H.a,{eventKey:"update",title:"Update"},l.a.createElement(y.a,{className:"mt-4"},l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"Email")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"email",name:"email"}))),l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"Password")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"password",name:"password"}))),l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"User Name")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"text",name:"userName"}))),l.a.createElement(p.a,{variant:"warning",type:"submit",className:"float-right"},"Update"))),l.a.createElement(H.a,{eventKey:"delete",title:"Delete"},l.a.createElement(y.a,{className:"mt-4"},l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"ID")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"text",name:"id"}))),l.a.createElement(p.a,{variant:"danger",type:"submit",className:"float-right"},"Delete")))))};var K=function(){return l.a.createElement(T,null)};var M=function(e){var a=e.formInput,t=e.handleFormChange,n=e.handleSubmit;return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,null,l.a.createElement(G.a,null,l.a.createElement("h1",{className:"mb-4"},"Manage Vocabulary"))),l.a.createElement(B.a,{defaultActiveKey:"insert",className:"dark"},l.a.createElement(H.a,{eventKey:"insert",title:"Insert"},l.a.createElement(y.a,{className:"mt-4",onSubmit:n},l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"Chinese")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"text",name:"chinese",value:a.chinese||"",onChange:t}))),l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"English")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"text",name:"english",value:a.english||"",onChange:t}))),l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"Kanji")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"text",name:"kanji",value:a.kanji||"",onChange:t}))),l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"Gojuuon")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"text",name:"gojuuon",value:a.gojuuon||"",onChange:t}))),l.a.createElement(p.a,{variant:"primary",type:"submit",className:"float-right"},"Insert"))),l.a.createElement(H.a,{eventKey:"update",title:"Update"},l.a.createElement(k.a,{variant:"warning",className:"text-center mt-2"},l.a.createElement(k.a.Heading,null,"Not finish."),"Consider a table with rows of record to interact with."),l.a.createElement(y.a,{className:"mt-4"},l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"ID")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"text",name:"id"}))),l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"Chinese")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"text",name:"chinese"}))),l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"English")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"text",name:"english"}))),l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"Kanji")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"text",name:"kanji"}))),l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"Gojuuon")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"text",name:"gojuuon"}))),l.a.createElement(p.a,{variant:"warning",type:"submit",className:"float-right"},"Update"))),l.a.createElement(H.a,{eventKey:"delete",title:"Delete"},l.a.createElement(k.a,{variant:"warning",className:"text-center mt-2"},l.a.createElement(k.a.Heading,null,"Not finish."),"Consider a table with rows of record to interact with."),l.a.createElement(y.a,{className:"mt-4"},l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"ID")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{type:"text",name:"id"}))),l.a.createElement(p.a,{variant:"danger",type:"submit",className:"float-right"},"Delete")))))};var z=function(){var e=Object(n.useState)({}),a=Object(c.a)(e,2),t=a[0],r=a[1];return l.a.createElement(M,{formInput:t,handleFormChange:function(e){return r(Object(N.a)({},t,Object(v.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault(),function(e){var a=e.chinese,t=e.english,n=e.kanji,l=e.gojuuon;h.ref("/vocabulary").push().set({chinese:a,english:t,kanji:n,gojuuon:l})}(t),r({})}})};var A=function(e){var a=e.tableList;return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,null,l.a.createElement(G.a,{lg:2}),l.a.createElement(G.a,{lg:7},l.a.createElement(I.c,null,l.a.createElement(I.a,{path:"/management/user"},l.a.createElement(K,null)),l.a.createElement(I.a,{path:"/management/vocabulary"},l.a.createElement(z,null)),l.a.createElement(I.a,{path:"/management"},l.a.createElement(K,null)))),l.a.createElement(G.a,{lg:2},l.a.createElement(g.a,{className:"d-block"},a.map((function(e){return l.a.createElement(g.a.Link,{key:e,as:s.c,to:"/management/".concat(e),className:"dark",activeClassName:"active"},e)}))))))};var D=function(){return l.a.createElement(A,{tableList:["user","vocabulary"]})};var Q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Quick Mode"),l.a.createElement("p",null,"Quick mode description"),l.a.createElement(y.a,{className:"mt-4"},l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"Quiz Mode")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{as:"select",name:"mode"},l.a.createElement("option",null,"Quick"),l.a.createElement("option",null,"Manual"),l.a.createElement("option",null,"Survival")))),l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"Quiz Format")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{as:"select",name:"format"},l.a.createElement("option",null,"\ud83c\uddef\ud83c\uddf5 \u2192 \ud83c\uddfa\ud83c\uddf8"),l.a.createElement("option",null,"\ud83c\uddef\ud83c\uddf5 \u2192 \ud83c\uddf9\ud83c\uddfc"),l.a.createElement("option",null,"\ud83c\uddfa\ud83c\uddf8 \u2192 \ud83c\uddef\ud83c\uddf5"),l.a.createElement("option",null,"\ud83c\uddf9\ud83c\uddfc \u2192 \ud83c\uddef\ud83c\uddf5")))),l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"Total Question")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{as:"input"}))),l.a.createElement(y.a.Group,{as:O.a},l.a.createElement(G.a,{sm:2,className:"text-center"},l.a.createElement(y.a.Label,{className:"mt-2"},"Total Lives")),l.a.createElement(G.a,{sm:10},l.a.createElement(y.a.Control,{as:"input"}))),l.a.createElement(O.a,null,l.a.createElement(G.a,{sm:4}),l.a.createElement(G.a,{sm:4,className:"text-center"},l.a.createElement(p.a,{variant:"success",type:"submit",block:!0},"Start")),l.a.createElement(G.a,{sm:4}))))};var R=function(){return l.a.createElement(Q,null)},W=t(13);var P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{border:"danger"},l.a.createElement(W.a.Header,null,"Question 1"),l.a.createElement(W.a.Body,{className:"text-center"},l.a.createElement(W.a.Title,{className:"mt-3 mb-5"},l.a.createElement("h1",null,"\u3042\u304b")),l.a.createElement("div",{className:"mt-5 mb-3"},l.a.createElement(O.a,{className:"m-3"},l.a.createElement(G.a,{sm:3}),l.a.createElement(G.a,{sm:3},l.a.createElement(p.a,{variant:"outline-dark",block:!0},"Red")),l.a.createElement(G.a,{sm:3},l.a.createElement(p.a,{variant:"outline-dark",block:!0},"Blue")),l.a.createElement(G.a,{sm:3})),l.a.createElement(O.a,{className:"m-3"},l.a.createElement(G.a,{sm:3}),l.a.createElement(G.a,{sm:3},l.a.createElement(p.a,{variant:"outline-dark",block:!0},"Yellow")),l.a.createElement(G.a,{sm:3},l.a.createElement(p.a,{variant:"outline-dark",block:!0},"Green")),l.a.createElement(G.a,{sm:3}))),l.a.createElement(O.a,{className:"m-3"},l.a.createElement(G.a,{sm:3}),l.a.createElement(G.a,{sm:6},l.a.createElement(p.a,{variant:"secondary",block:!0},"Confirm")),l.a.createElement(G.a,{sm:3})),l.a.createElement(k.a,{variant:"danger"},l.a.createElement(O.a,null,l.a.createElement(G.a,null),l.a.createElement(G.a,null,l.a.createElement("h3",null,"WRONG")),l.a.createElement(G.a,null,l.a.createElement(p.a,{variant:"outline-danger",className:"float-right"},"Next")))),l.a.createElement(k.a,{variant:"success"},l.a.createElement(O.a,null,l.a.createElement(G.a,null),l.a.createElement(G.a,null,l.a.createElement("h3",null,"CORRECT")),l.a.createElement(G.a,null,l.a.createElement(p.a,{variant:"outline-success",className:"float-right"},"Next")))))))};var Y=function(){return l.a.createElement(P,null)};var _=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{border:"danger",className:"w-75 mt-2 mb-2"},l.a.createElement(W.a.Header,null,"Question 1"),l.a.createElement(W.a.Body,{className:"text-center pt-0"},l.a.createElement(W.a.Title,{className:"mt-2"},l.a.createElement("h2",null,"\u3042\u304b")),l.a.createElement(O.a,{className:"mt-3 mb-3"},l.a.createElement(G.a,{sm:6},l.a.createElement(p.a,{variant:"outline-dark",block:!0},"Red")),l.a.createElement(G.a,{sm:6},l.a.createElement(p.a,{variant:"outline-dark",block:!0},"Blue"))),l.a.createElement(O.a,{className:"mt-3"},l.a.createElement(G.a,{sm:6},l.a.createElement(p.a,{variant:"outline-dark",block:!0},"Yellow")),l.a.createElement(G.a,{sm:6},l.a.createElement(p.a,{variant:"outline-dark",block:!0},"Green"))))))};var J=function(){return l.a.createElement(_,null)};var q=function(e){return e.modeList,l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,null,l.a.createElement(G.a,{lg:2}),l.a.createElement(G.a,{lg:7},l.a.createElement(R,null),l.a.createElement(Y,null),l.a.createElement(J,null),l.a.createElement(J,null),l.a.createElement(J,null)),l.a.createElement(G.a,{lg:2},l.a.createElement("h4",null,"description"))))};var V=function(){return l.a.createElement(q,{modeList:["quick","manual","survival"]})};var Z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{className:"m-3"},l.a.createElement(W.a.Header,null,l.a.createElement(O.a,null,l.a.createElement(G.a,{sm:9},l.a.createElement(W.a.Title,{className:"m-0"},"Blog Post Title")),l.a.createElement(G.a,{sm:3},l.a.createElement(W.a.Subtitle,{className:"m-0 text-muted float-right"},"2020/01/31")))),l.a.createElement(W.a.Body,{className:"pb-1"},l.a.createElement(W.a.Text,{className:"mb-0 blog-post-preview"},"Limit the text to only 3 lines in preview. ",l.a.createElement("br",null),"line 2. ",l.a.createElement("br",null),"line 3. ",l.a.createElement("br",null),"line 4, which you shouldn't be able to see."),l.a.createElement(W.a.Link,{as:s.b,to:"/blog/".concat(123),className:"dark float-right text-sm"},"read more"))))};var X=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,null,l.a.createElement(G.a,{lg:2}),l.a.createElement(G.a,{lg:7},l.a.createElement("h1",null,"Blog"),l.a.createElement("hr",null),l.a.createElement(Z,null),l.a.createElement(Z,null))))};var $=function(){return l.a.createElement(X,null)};var ee=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,null,l.a.createElement(G.a,{lg:2}),l.a.createElement(G.a,{lg:7},l.a.createElement("h1",null,"Welcome!"),l.a.createElement("p",{className:"fs-18"},"This is my personal website, it hosts my personal projects and progress. You can see them by clicking the links in the navigation bar over on the top. The website is using React for its front-end, Firebase for its database, and it is hosting as a GitHub user page, you can check out the source code"," ",l.a.createElement("a",{href:"https://github.com/ShouShou92410/ShouShou92410.github.io/tree/Source-Code",target:"_blank"},"Here"),". In the future, I want to create a back-end server and have the front-end use the APIs to fetch data."))))};var ae=function(e){var a=e.currentUser;return l.a.createElement(S.a,{fluid:!0},l.a.createElement(I.c,null,l.a.createElement(I.a,{path:"/about"},l.a.createElement(U,null)),l.a.createElement(I.a,{path:"/quiz"},l.a.createElement(V,null)),l.a.createElement(I.a,{path:"/blog"},l.a.createElement($,null)),a&&l.a.createElement(I.a,{path:"/management"},l.a.createElement(D,null)),l.a.createElement(I.a,{path:"/"},l.a.createElement(ee,null))))};var te=function(){var e=Object(n.useContext)(o).currentUser;return l.a.createElement(ae,{currentUser:e})};var ne=function(){var e=Object(n.useState)(null),a=Object(c.a)(e,2),t=a[0],r=a[1],m=Object(n.useState)(!1),u=Object(c.a)(m,2),i=u[0],h=u[1];return Object(n.useEffect)((function(){E.a.auth().onAuthStateChanged((function(e){e?(r(e),h(!0)):(r(null),h(!0))}))}),[]),i?l.a.createElement(o.Provider,{value:{currentUser:t}},l.a.createElement(s.a,null,l.a.createElement(j,null),l.a.createElement(te,null))):l.a.createElement("div",null,"Waiting for auth...")};m.a.render(l.a.createElement(ne,null),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.2b0cc89e.chunk.js.map