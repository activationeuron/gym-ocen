(function(e){function t(t){for(var r,o,l=t[0],i=t[1],u=t[2],p=0,m=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);c&&c(t);while(m.length)m.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,l=1;l<a.length;l++){var i=a[l];0!==s[i]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},s={app:0},n=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=i;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"364e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("5db0"),a("949c"),a("1759"),a("bfff");var r=a("ed16"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},n=[],o={},l=o,i=a("366f"),u=Object(i["a"])(l,s,n,!1,null,null,null),c=u.exports,p=a("355c");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var m,d=a("b1b9"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",[e._v("Home View")]),a("li",[a("router-link",{attrs:{to:"/admin"}},[e._v("admin")])],1),a("li",[a("router-link",{attrs:{to:"/club"}},[e._v("club")])],1),a("li",[a("router-link",{attrs:{to:"/judge"}},[e._v("Judge")])],1),a("li",[a("router-link",{attrs:{to:"/player"}},[e._v("player")])],1),a("li",[a("router-link",{attrs:{to:"/payment"}},[e._v("paymrnt")])],1),a("li",[a("router-link",{attrs:{to:"/auth"}},[e._v("Auth")])],1)])},v=[],f={name:"Home"},h=f,x=Object(i["a"])(h,g,v,!1,null,null,null),b=x.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex h-screen bg-gray-200"},[a("div",{staticClass:"bg-gray-800 w-64"}),a("div",[e._v("as")])])}],_={},C=_,O=Object(i["a"])(C,w,y,!1,null,null,null),E=O.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("Clubs view")])},S=[],j={},k=j,R=Object(i["a"])(k,D,S,!1,null,null,null),T=R.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("Judge View")])},$=[],N={},P=N,L=Object(i["a"])(P,A,$,!1,null,null,null),M=L.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("playerView")])},q=[],z={},H=z,I=Object(i["a"])(H,V,q,!1,null,null,null),U=I.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("Payment Vuew")])},G=[],B={},F=B,K=Object(i["a"])(F,J,G,!1,null,null,null),Z=K.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"h-screen w-screen bg-gray-100 px-3"},[a("ErrorComponent",{attrs:{status:e.getErrorStatus}}),a("div",{staticClass:"flex flex-col items-center py-16"},[e._m(0),a("div",{staticClass:"p-5 pb-10"},[e.data.showRegister?[a("Register",{on:{toggleRegister:function(t){e.data.showRegister=!e.data.showRegister}}})]:[a("Login",{on:{toggleRegister:function(t){e.data.showRegister=!e.data.showRegister}}})]],2)])],1)},W=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"h-24 w-screen flex text-gray-900 text-center justify-center items-center"},[a("div",{staticClass:"items-center text-3xl font-medium"},[e._v(" Welcome To "),a("span",{staticClass:"font-semibold"},[e._v("PTKS")]),a("p",{staticClass:"text-xl font-sans font-medium"},[e._v("Prabodhankar Thackeray Krida Sankul")])])])}],X=a("d78c"),Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col w-64"},[a("div",{staticClass:"text-2xl text-gray-800 font-medium"},[e._v("Register As")]),a("div",{staticClass:"flex justify-center items-center mx-2 px-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.role,expression:"userData.role"}],attrs:{type:"radio",id:"one",value:"player"},domProps:{checked:e._q(e.userData.role,"player")},on:{change:function(t){return e.$set(e.userData,"role","player")}}}),a("label",{staticClass:"px-2 py-2 text-1xl font-medium text-gray-800",attrs:{for:"one"}},[e._v("PLAYER")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.role,expression:"userData.role"}],attrs:{type:"radio",id:"two",value:"judge"},domProps:{checked:e._q(e.userData.role,"judge")},on:{change:function(t){return e.$set(e.userData,"role","judge")}}}),a("label",{staticClass:"px-2 py-2 text-1xl font-medium text-gray-800",attrs:{for:"two"}},[e._v("JUDGE")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.role,expression:"userData.role"}],attrs:{type:"radio",id:"three",value:"club"},domProps:{checked:e._q(e.userData.role,"club")},on:{change:function(t){return e.$set(e.userData,"role","club")}}}),a("label",{staticClass:"px-2 py-2 text-1xl font-medium text-gray-800",attrs:{for:"three"}},[e._v("CLUB")])]),"club"!==e.userData.role?[a("div",{staticClass:"flex flex-col mb-5"},[a("label",{staticClass:"text-gray-800 pb-2 text-base font-medium",attrs:{for:"club"}},[e._v("Your Club")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.userData.club,expression:"userData.club"}],staticClass:"block appearance-none w-full bg-gray-400 border border-gray-500 text-gray-700 py-2 px-3 pr-8 rounded-sm leading-tight focus:outline-none focus:border-gray-500",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.userData,"club",t.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),a("option",[e._v("A")]),a("option",[e._v("B")]),a("option",[e._v("C")])])])]:e._e(),"club"==e.userData.role?[a("div",{staticClass:"flex flex-col mb-5"},[a("label",{staticClass:"text-gray-800 pb-2 text-base font-medium",attrs:{for:"clubname"}},[e._v("Club Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.club,expression:"userData.club"}],staticClass:"py-2 bg-gray-400 text-gray-800 px-2",attrs:{type:"text",placeholder:"Enter Club Name"},domProps:{value:e.userData.club},on:{input:function(t){t.target.composing||e.$set(e.userData,"club",t.target.value)}}})])]:e._e(),a("div",{staticClass:"flex flex-col mb-5"},[a("label",{staticClass:"text-gray-800 pb-2 text-base font-medium",attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.name,expression:"userData.name"}],staticClass:"py-2 bg-gray-400 text-gray-800 px-2",attrs:{type:"name",placeholder:"Mike Tison"},domProps:{value:e.userData.name},on:{input:function(t){t.target.composing||e.$set(e.userData,"name",t.target.value)}}})]),a("div",{staticClass:"flex flex-col mb-5"},[a("label",{staticClass:"text-gray-800 pb-2 text-base font-medium",attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.email,expression:"userData.email"}],staticClass:"py-2 bg-gray-400 text-gray-800 px-2",attrs:{type:"email",placeholder:"you@gmail.com"},domProps:{value:e.userData.email},on:{input:function(t){t.target.composing||e.$set(e.userData,"email",t.target.value)}}})]),a("div",{staticClass:"flex flex-col"},[a("label",{staticClass:"text-gray-800 pb-2 text-base font-medium",attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.password,expression:"userData.password"}],staticClass:"py-2 bg-gray-400 text-gray-800 px-2",attrs:{type:"password",placeholder:"secrate password"},domProps:{value:e.userData.password},on:{input:function(t){t.target.composing||e.$set(e.userData,"password",t.target.value)}}})]),a("kick",{staticClass:"bg-blue-600 mt-4",nativeOn:{click:function(t){return e.register(e.userData)}}},[a("template",{slot:"icon"},[a("svg",{staticClass:"h-6 w-6 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z",fill:"currentColor"}})])]),a("template",{slot:"title"},[a("p",{staticClass:"text-gray-100 px-16"},[e._v("REGISTER")])])],2),a("div",{staticClass:"text-center p-3"},[e._v("OR")]),a("kick",{staticClass:"bg-gray-600",nativeOn:{click:function(t){return e.toggleAuth(t)}}},[a("template",{slot:"icon"},[a("svg",{staticClass:"h-6 w-6 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M12.65 10A5.99 5.99 0 007 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 005.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",fill:"currentColor"}})])]),a("template",{slot:"title"},[a("p",{staticClass:"text-gray-100 px-16"},[e._v("LOGIN")])])],2)],2)},ee=[],te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("label",{staticClass:"text-gray-900",attrs:{for:"textInput"}},[e._v(e._s(e.label))])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"py-2 px-2 rounded-sm text-gray-700",attrs:{type:"text",placeholder:e.placeHolder},domProps:{value:e.inputValue},on:{keypress:e.passToParent,input:function(t){t.target.composing||(e.inputValue=t.target.value)}}})])])},ae=[],re={name:"inputFormComponent",props:{label:String,placeHolder:String},data:function(){return{inputValue:""}},methods:{passToParent:function(){console.log("pressed"),this.$emit("input",this.inputValue)}}},se=re,ne=Object(i["a"])(se,te,ae,!1,null,null,null),oe=(ne.exports,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-row"},[a("button",{staticClass:"px-2 py-2 rounded-sm w-screen flex"},[e._t("icon"),a("div",{staticClass:"w-auto"},[a("div",{staticClass:"flex text-center"},[e._t("title")],2)])],2)])}),le=[],ie={name:"kickas",props:["look","btnlook"]},ue=ie,ce=Object(i["a"])(ue,oe,le,!1,null,null,null),pe=ce.exports,me=a("f8e7"),de={name:"registerComponent",components:{Kick:pe},data:function(){return{userData:{email:"",name:"",password:"",role:null,club:""}}},methods:Object(X["a"])({},Object(me["b"])(["register"]),{toggleAuth:function(){console.log("toggle in loginvue"),this.$emit("toggleRegister")}})},ge=de,ve=Object(i["a"])(ge,Q,ee,!1,null,null,null),fe=ve.exports,he=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col w-64"},[a("div",{staticClass:"flex flex-col mb-5"},[a("label",{staticClass:"text-gray-800 pb-2 text-base font-medium",attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.email,expression:"userData.email"}],staticClass:"py-2 bg-gray-400 text-gray-800 px-2",attrs:{type:"email",placeholder:"you@gmail.com"},domProps:{value:e.userData.email},on:{input:function(t){t.target.composing||e.$set(e.userData,"email",t.target.value)}}})]),a("div",{staticClass:"flex flex-col"},[a("label",{staticClass:"text-gray-800 pb-2 text-base font-medium",attrs:{for:"email"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.password,expression:"userData.password"}],staticClass:"py-2 bg-gray-400 text-gray-800 px-2",attrs:{type:"email",placeholder:"secrate password"},domProps:{value:e.userData.password},on:{input:function(t){t.target.composing||e.$set(e.userData,"password",t.target.value)}}})]),a("kick",{staticClass:"bg-blue-600 mt-5 rounded-sm",nativeOn:{click:function(t){return e.handleLogin(t)}}},[a("template",{slot:"icon"},[e.loading?[a("svg",{staticClass:"spinner h-6 w-10 text-gray-900"},[a("circle",{staticClass:"path",attrs:{cx:"18",cy:"12",r:"10",fill:"none","stroke-width":"3"}})])]:[a("svg",{staticClass:"h-6 w-6 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M12.65 10A5.99 5.99 0 007 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 005.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",fill:"currentColor"}})])]],2),a("template",{slot:"title"},[a("p",{staticClass:"text-gray-200 w-full px-16"},[e._v("LOGIN")])])],2),a("div",{staticClass:"text-center p-3"},[e._v("OR")]),a("kick",{staticClass:"bg-gray-600 rounded-sm",nativeOn:{click:function(t){return e.toggleAuth(t)}}},[a("template",{slot:"icon"},[a("svg",{staticClass:"h-6 w-6 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z",fill:"currentColor"}})])]),a("template",{slot:"title"},[a("p",{staticClass:"text-gray-200 px-16"},[e._v("REGISTER")])])],2)],1)},xe=[],be={name:"loginComponent",components:{kick:pe},data:function(){return{userData:{email:"",password:""},loading:!1}},methods:Object(X["a"])({},Object(me["b"])(["login"]),{handleLogin:function(){this.login(this.userData)},toggleAuth:function(){console.log("toggle in loginvue"),this.$emit("toggleRegister")}})},we=be,ye=(a("c752"),Object(i["a"])(we,he,xe,!1,null,null,null)),_e=ye.exports,Ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"status"}],staticClass:"relative w-screen justify-end items-center"},[a("div",{staticClass:"bg-red-200 z-10 absolute top-0 right-0 max-w-sm p-3 m-3 text-center rounded-sm text-red-700 flex mr-10"},[a("div",{staticClass:"mr-3"},[a("svg",{staticClass:"h-6 w-6 text-red-600",attrs:{fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8ZM12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z",fill:"currentColor"}})])]),a("div",{staticClass:"text-red-600 text-1xl font-medium"},[e._v(e._s(e.status.error))])])])},Oe=[],Ee={name:"ErrorComponent",props:["status"]},De=Ee,Se=Object(i["a"])(De,Ce,Oe,!1,null,null,null),je=Se.exports,ke={name:"AuthVuew",data:function(){return{data:{showRegister:!0}}},components:{Register:fe,ErrorComponent:je,Login:_e},computed:Object(X["a"])({},Object(me["c"])(["getErrorStatus"]))},Re=ke,Te=Object(i["a"])(Re,Y,W,!1,null,null,null),Ae=Te.exports,$e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-gray-600"},[a("button",{on:{click:e.getMe}},[e._v("getme")])])},Ne=[],Pe={name:"me",methods:Object(X["a"])({},Object(me["b"])(["getMe"]))},Le=Pe,Me=Object(i["a"])(Le,$e,Ne,!1,null,null,null),Ve=Me.exports,qe=a("8c82"),ze=a("b0f0"),He=a.n(ze),Ie=He.a.create({baseURL:"http:/api/v1/"}),Ue=Ie,Je=JSON.parse(window.localStorage.getItem("user"));console.log(Je);var Ge={me:JSON.parse(window.localStorage.getItem("user"))||null,userData:null,status:!1},Be={getErrorStatus:function(){return console.log("get error Status execurted"),Ge.status}},Fe={getMe:function(e){var t=e.commit;Ue.get("auth/me",{params:{},headers:{Authorization:"Bearer ".concat(JSON.parse(window.localStorage.getItem("user")).token)}}).then((function(e){t("SET_USER_DATA",e.data)})).catch((function(e){console.log(e)}))},login:function(e,t){var a=e.commit;Ue.post("/auth/login",t).then((function(e){a("SET_LOGIN_DATA",e.data),window.localStorage.setItem("user",JSON.stringify(e.data)),a("SET_ERROR_STATUS",null),Qe.push("/".concat(e.data.role))})).catch((function(e){console.error(e),a("SET_ERROR_STATUS",e.response.data)}))},register:function(e,t){var a=e.commit;Ue.post("/auth/register",t).then((function(e){a("SET_LOGIN_DATA",e.data),window.localStorage.setItem("user",JSON.stringify(e.data)),a("SET_ERROR_STATUS",null),Qe.push("/".concat(e.data.role))})).catch((function(e){console.log(e),a("SET_ERROR_STATUS",e.response.data)}))}},Ke=(m={},Object(qe["a"])(m,"SET_LOGIN_DATA",(function(e,t){e.me=t})),Object(qe["a"])(m,"SET_USER_DATA",(function(e,t){console.log(t),e.userData=t})),Object(qe["a"])(m,"SET_ERROR_STATUS",(function(e,t){console.log("SET ERROR STTATUS EXECUTED"),e.status=t})),m),Ze={state:Ge,getters:Be,actions:Fe,mutations:Ke};r["a"].use(me["a"]);var Ye=new me["a"].Store({modules:{auth:Ze}});r["a"].use(d["a"]);var We=[{path:"/",name:"Home",component:b},{path:"/admin",name:"admin",component:E,meta:{requireAuth:!0,requireRole:["admin"]}},{path:"/club",name:"club",component:T,meta:{requireAuth:!0,requireRole:["club"]}},{path:"/judge",name:"judge",component:M,meta:{requireAuth:!0,requireRole:["judge"]}},{path:"/player",name:"player",component:U,meta:{requireAuth:!0,requireRole:["player"]}},{path:"/auth",name:"auth",component:Ae},{path:"/payment",name:"payment",component:Z},{path:"/about",name:"About"},{path:"/me",name:"me",component:Ve}],Xe=new d["a"]({mode:"history",base:"/",routes:We});Xe.beforeEach((function(e,t,a){console.log(e.meta);var r=e.meta,s=r.requireAuth,n=r.requireRole;s&&n&&(Ye.state.auth.me||(console.log("authcheck exec"),a({name:"auth"}))),n&&Ye.state.auth.me.role!=n[0]&&(console.log("role missmtached fom index router "),a({name:"auth"})),a()}));var Qe=Xe;a("d940");r["a"].config.productionTip=!1,new r["a"]({router:Qe,store:Ye,render:function(e){return e(c)}}).$mount("#app")},c752:function(e,t,a){"use strict";var r=a("364e"),s=a.n(r);s.a},d940:function(e,t,a){}});
//# sourceMappingURL=app.2abb69c4.js.map