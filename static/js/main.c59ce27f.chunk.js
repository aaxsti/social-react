(this["webpackJsonpsocial-react"]=this["webpackJsonpsocial-react"]||[]).push([[0],{106:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__3Bbc9",users:"Users_users__2JqzX"}},117:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__2p4Lg",pageNumbers:"Paginator_pageNumbers__nScyD",paginator:"Paginator_paginator__1u4Wr",pageNumber:"Paginator_pageNumber__3RwdL"}},132:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return S})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return v}));var r=n(12),a=n.n(r),c=n(27),u=n(70),o=n(7),i=n(61),s=n(18),l=function(e){return s.c.get("profile/".concat(e)).then((function(e){return e.data}))},f=function(e){return s.c.get("profile/status/".concat(e)).then((function(e){return e.data}))},m=function(e){return s.c.put("profile/status",{status:e}).then((function(e){return e.data}))},d=function(e){var t=new FormData;return t.append("image",e),s.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},p=function(e){return s.c.put("profile",e).then((function(e){return e.data}))},E={posts:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043a\u0430\u043a \u0434\u0435\u043b\u0430?",likesCount:25},{id:2,message:"\u042d\u0442\u043e \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442",likesCount:15}],profile:null,status:""},b={addPostActionCreator:function(e){return{type:"SN/PROFILE/ADD_POST",newPostText:e}},setUserProfile:function(e){return{type:"SN/PROFILE/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"SN/PROFILE/SET_STATUS",status:e}},deletePost:function(e){return{type:"SN/PROFILE/DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"SN/PROFILE/SAVE_PHOTO_SUCCESS",photos:e}}},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(b.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:r=t.sent,n(b.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(e);case 3:t.sent.resultCode===s.b.Success&&n(b.setStatus(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:(r=t.sent).resultCode===s.b.Success&&n(b.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,p(e);case 3:if((u=t.sent).resultCode!==s.b.Success){t.next=16;break}if(null==c){t.next=13;break}return t.t0=n,t.next=9,h(c);case 9:t.t1=t.sent,(0,t.t0)(t.t1),t.next=14;break;case 13:throw new Error("userIf can`t be null");case 14:t.next=18;break;case 16:return n(Object(i.a)("edit-profile",{_error:u.messages[0]})),t.abrupt("return",Promise.reject(u.messages[0]));case 18:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD_POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n])});case"SN/PROFILE/SET_USER_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"SN/PROFILE/SET_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"SN/PROFILE/DELETE_POST":return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SN/PROFILE/SAVE_PHOTO_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}},151:function(e,t,n){e.exports=n.p+"static/media/user.57b075ed.png"},18:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r,a,c=n(191),u=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"31c269a2-4de2-4018-98f9-0e5ea8f600fd"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}))},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(70),a=n(7),c={messages:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"qq"}],dialogs:[{id:1,name:"Maxim",imgLink:"https://picsum.photos/400/400"},{id:2,name:"Ilya",imgLink:"https://picsum.photos/100/100"},{id:3,name:"Ivan",imgLink:"https://picsum.photos/200/200"},{id:4,name:"Stas",imgLink:"https://picsum.photos/80/80"},{id:5,name:"Sasha",imgLink:"https://picsum.photos/90/90"}]},u={sendMessage:function(e){return{type:"SN/DIALOGS/SEND_MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGS/SEND_MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},187:function(e,t,n){e.exports=n.p+"static/media/preloader.b159c782.svg"},235:function(e,t,n){e.exports=n(365)},240:function(e,t,n){},241:function(e,t,n){},365:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),c=n(31),u=n.n(c),o=(n(240),n(149)),i=n(150),s=n(185),l=n(183),f=(n(241),n(242),n(368)),m=n(369),d=n(145),p=n(32),E=n(23),b=function(){return a.a.createElement("div",null,"News")},h=function(){return a.a.createElement("div",null,"Settings")},S=n(19),g=n(69),O=n(188),v=Object(O.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),j=function(e){return e.usersPage.pageSize},w=function(e){return e.usersPage.totalUsersCount},y=function(e){return e.usersPage.currentPage},_=function(e){return e.usersPage.isFetching},P=function(e){return e.usersPage.followingInProgress},I=function(e){return e.usersPage.filter},N=n(7),U=n(106),C=n.n(U),T=n(105),k=n(146),L=n(117),R=n.n(L),x=n(5),A=n.n(x),F=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,u=e.onPageChanged,o=void 0===u?function(e){return e}:u,i=e.portionSize,s=void 0===i?10:i,l=Math.ceil(t/n),f=[],m=1;m<=l;m++)f.push(m);var d=Object(r.useState)(1),p=Object(k.a)(d,2),E=p[0],b=p[1],h=Math.ceil(l/s),S=(E-1)*s+1,g=E*s;return a.a.createElement("div",{className:R.a.paginator},E>1&&a.a.createElement("button",{onClick:function(){b(E-1)}},"PREV"),f.filter((function(e){return e>=S&&e<=g})).map((function(e){return a.a.createElement("span",{className:A()(Object(T.a)({},R.a.selectedPage,c===e),R.a.pageNumber),key:e,onClick:function(t){o(e)}},e)})),h>E&&a.a.createElement("button",{onClick:function(){b(E+1)}},"NEXT"))},D=n(151),G=n.n(D),z=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,c=e.follow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(p.c,{to:"/profile/"+t.id},a.a.createElement("img",{alt:"User picture",src:null!=t.photos.small?t.photos.small:G.a,className:C.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},M=n(95),H=function(e){return{}},W=a.a.memo((function(e){var t=e.onFilterChanged,n=Object(S.d)(I);return a.a.createElement("div",null,a.a.createElement(M.c,{enableReinitialize:!0,initialValues:{term:n.term,friend:String(n.friend)},validate:H,onSubmit:function(e,n){var r=n.setSubmitting,a={term:e.term,friend:"null"===e.friend?null:"true"===e.friend};t(a),r(!1)}},(function(e){var t=e.isSubmitting;return a.a.createElement(M.b,null,a.a.createElement(M.a,{type:"text",name:"term"}),a.a.createElement(M.a,{name:"friend",as:"select"},a.a.createElement("option",{value:"null"},"All"),a.a.createElement("option",{value:"true"},"Only followed"),a.a.createElement("option",{value:"false"},"Only unfollowed")),a.a.createElement("button",{type:"submit",disabled:t},"Find"))})))})),q=n(12),B=n.n(q),V=n(27),X=n(70),Z=n(18),J=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(N.a)(Object(N.a)({},e),r):e}))},K={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return Z.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},userFollow:function(e){return Z.c.post("follow/".concat(e)).then((function(e){return e.data}))},userUnfollow:function(e){return Z.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},Y={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},$=function(e){return{type:"SN/USERS/FOLLOW",userId:e}},Q=function(e){return{type:"SN/USERS/UNFOLLOW",userId:e}},ee=function(e){return{type:"SN/USERS/SET_USERS",users:e}},te=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},ne=function(e){return{type:"SN/USERS/SET_FILTER",payload:e}},re=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},ae=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},ce=function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},ue=function(e,t,n){return function(){var r=Object(V.a)(B.a.mark((function r(a){var c;return B.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(ae(!0)),a(te(e)),a(ne(n)),r.next=5,K.getUsers(e,t,n.term,n.friend);case 5:c=r.sent,a(ae(!1)),a(ee(c.items)),a(re(c.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},oe=function(){var e=Object(V.a)(B.a.mark((function e(t,n,r,a){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ce(!0,n)),e.next=3,r(n);case 3:e.sent.resultCode===Z.b.Success&&t(a(n)),t(ce(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(N.a)(Object(N.a)({},e),{},{users:J(e.users,t.userId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(N.a)(Object(N.a)({},e),{},{users:J(e.users,t.userId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(N.a)(Object(N.a)({},e),{},{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(N.a)(Object(N.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(N.a)(Object(N.a)({},e),{},{totalUsersCount:t.count});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(N.a)(Object(N.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/SET_FILTER":return Object(N.a)(Object(N.a)({},e),{},{filter:t.payload});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(N.a)(Object(N.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(X.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},se=n(140),le=function(e){var t=Object(S.d)(v),n=Object(S.d)(w),c=Object(S.d)(y),u=Object(S.d)(j),o=Object(S.d)(I),i=Object(S.d)(P),s=Object(S.c)(),l=Object(E.g)();Object(r.useEffect)((function(){var e=se.parse(l.location.search.substr(1)),t=c,n=o;switch(e.page&&(t=Number(e.page)),e.term&&(n=Object(N.a)(Object(N.a)({},n),{},{term:e.term})),e.friend){case"null":n=Object(N.a)(Object(N.a)({},n),{},{friend:null});break;case"true":n=Object(N.a)(Object(N.a)({},n),{},{friend:!0});break;case"false":n=Object(N.a)(Object(N.a)({},n),{},{friend:!1})}s(ue(t,u,n))}),[]),Object(r.useEffect)((function(){var e={};o.term&&(e.term=o.term),null!==o.friend&&(e.friend=String(o.friend)),1!==c&&(e.page=String(c)),l.push({pathname:"/users",search:se.stringify(e)})}),[o,c]);var f=function(e){s(function(e){return function(){var t=Object(V.a)(B.a.mark((function t(n){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe(n,e,K.userFollow.bind(K),$);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},m=function(e){s(function(e){return function(){var t=Object(V.a)(B.a.mark((function t(n){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe(n,e,K.userUnfollow.bind(K),Q);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return a.a.createElement("div",{className:C.a.users},a.a.createElement(W,{onFilterChanged:function(e){s(ue(1,u,e))}}),a.a.createElement(F,{currentPage:c,onPageChanged:function(e){s(ue(e,u,o))},totalItemsCount:n,pageSize:u}),a.a.createElement("div",null,t.map((function(e){return a.a.createElement(z,{user:e,key:e.id,followingInProgress:i,unfollow:m,follow:f})}))))},fe=function(e){var t=Object(S.d)(_);return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,e.pageTitle),t?a.a.createElement(g.a,null):null,a.a.createElement(le,null))},me=n(182),de=n(85),pe=n.n(de),Ee=n(64),be=n(132),he=Object(me.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(Ee.c)("Email","email",[be.b],Ee.a),Object(Ee.c)("Password","password",[be.b],Ee.a,{type:"password"}),Object(Ee.c)(void 0,"rememberMe",[],Ee.a,{type:"checkbox"},"Remember me"),n&&a.a.createElement("div",{className:pe.a.formSummeryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),Se=n(61),ge=function(){return Z.c.get("security/get-captcha-url").then((function(e){return e.data}))},Oe=function(){return Z.c.get("auth/me").then((function(e){return e.data}))},ve=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return Z.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},je=function(){return Z.c.delete("auth/login")},we={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},ye=function(e,t,n,r){return{type:"SN/AUTH/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},_e=function(e){return{type:"SN/AUTH/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},Pe=function(){return function(){var e=Object(V.a)(B.a.mark((function e(t){var n,r,a,c,u;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe();case 2:(n=e.sent).resultCode===Z.b.Success&&(r=n.data,a=r.id,c=r.login,u=r.email,t(ye(a,u,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ie=function(){return function(){var e=Object(V.a)(B.a.mark((function e(t){var n,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge();case 2:n=e.sent,r=n.url,t(_e(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/AUTH/SET_USER_DATA":case"SN/AUTH/GET_CAPTCHA_URL_SUCCESS":return Object(N.a)(Object(N.a)({},e),t.payload);default:return e}},Ue=function(){var e=Object(S.d)((function(e){return e.auth.isAuth})),t=Object(S.c)();return e?a.a.createElement(E.a,{to:"profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(he,{onSubmit:function(e){var n,r,a;t((n=e.email,r=e.password,a=e.rememberMe,function(){var e=Object(V.a)(B.a.mark((function e(t,c){var u,o;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve(n,r,a);case 2:(u=e.sent).resultCode===Z.b.Success?t(Pe()):(u.resultCode===Z.a.CaptchaIsRequired&&t(Ie()),o=u.messages.length>0?u.messages[0]:"Some error",t(Object(Se.a)("login",{_error:o})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()))}}))},Ce=n(21),Te={initialized:!1},ke=function(){return{type:"SN/APP/INITIALIZED_SUCCESS"}},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/APP/INITIALIZED_SUCCESS":return Object(N.a)(Object(N.a)({},e),{},{initialized:!0});default:return e}},Re=n(147),xe=n(181),Ae={friends:[{id:1,name:"Maxim",imgLink:"https://picsum.photos/400/400"},{id:2,name:"Ilya",imgLink:"https://picsum.photos/100/100"},{id:3,name:"Ivan",imgLink:"https://picsum.photos/200/200"}]},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/SIDEBAR/SET_FRIENDS":return Object(N.a)(Object(N.a)({},e),{},{friends:t.friends});default:return e}},De=n(193),Ge=n(184),ze=Object(Ce.c)({profilePage:Re.b,dialogsPage:xe.b,sidebar:Fe,usersPage:ie,auth:Ne,app:Le,form:Ge.a}),Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ce.d,He=Object(Ce.e)(ze,Me(Object(Ce.a)(De.a)));var We=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(g.a,null)},a.a.createElement(e,t))}},qe=n(371),Be=n(372),Ve=n(370),Xe=n(119),Ze=n(373),Je=function(e){return e.auth.isAuth},Ke=function(e){return e.auth.login},Ye=function(e){var t=Object(S.d)(Je),n=(Object(S.d)(Ke),Object(S.c)()),r=f.a.Header;return a.a.createElement(r,{className:"header"},a.a.createElement(qe.a,null,a.a.createElement(Be.a,{span:18},a.a.createElement(d.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},a.a.createElement(d.a.Item,{key:"1"},a.a.createElement(p.b,{to:"/users"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")))),t?a.a.createElement(a.a.Fragment,null,a.a.createElement(Be.a,{span:1},a.a.createElement(Ve.a,{style:{backgroundColor:"#87d068"},icon:a.a.createElement(Ze.a,null)})),a.a.createElement(Be.a,{span:5},a.a.createElement(Xe.a,{onClick:function(){n(function(){var e=Object(V.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je();case 2:0===e.sent.data.resultCode&&t(ye(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Log out"))):a.a.createElement(Be.a,{span:6},a.a.createElement(Xe.a,null,a.a.createElement(p.b,{to:"/login"},"Login")))))},$e=a.a.lazy((function(){return n.e(4).then(n.bind(null,380))})),Qe=a.a.lazy((function(){return n.e(3).then(n.bind(null,379))})),et=a.a.lazy((function(){return n.e(5).then(n.bind(null,378))})),tt=We($e),nt=We(Qe),rt=We(et),at=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){alert("Some error occurred")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){if(!this.props.initialized)return a.a.createElement(g.a,null);var e=f.a.Content,t=f.a.Footer,n=f.a.Sider;return a.a.createElement(f.a,null,a.a.createElement(Ye,null),a.a.createElement(e,{style:{padding:"0 50px"}},a.a.createElement(m.a,{style:{margin:"16px 0"}},a.a.createElement(m.a.Item,null,"Home"),a.a.createElement(m.a.Item,null,"List"),a.a.createElement(m.a.Item,null,"App")),a.a.createElement(f.a,{className:"site-layout-background",style:{padding:"24px 0"}},a.a.createElement(n,{className:"site-layout-background",width:200},a.a.createElement(d.a,{mode:"inline",style:{height:"100%"}},a.a.createElement(d.a.Item,{key:"1"},a.a.createElement(p.b,{to:"/profile"},"\u041c\u043e\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430")),a.a.createElement(d.a.Item,{key:"2"},a.a.createElement(p.b,{to:"/dialogs"},"\u041c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440")),a.a.createElement(d.a.Item,{key:"3"},a.a.createElement(p.b,{to:"/news"},"\u041d\u043e\u0432\u043e\u043e\u0441\u0442\u0438")),a.a.createElement(d.a.Item,{key:"4"},a.a.createElement(p.b,{to:"/users"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")),a.a.createElement(d.a.Item,{key:"5"},a.a.createElement(p.b,{to:"/settings"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")),a.a.createElement(d.a.Item,{key:"6"},a.a.createElement(p.b,{to:"/chat"},"\u041c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440 (\u0427\u0430\u0442)")))),a.a.createElement(e,{style:{padding:"0 24px",minHeight:280}},a.a.createElement(E.d,null,a.a.createElement(E.b,{exact:!0,path:"/",render:function(){return a.a.createElement(E.a,{to:"/profile"})}}),a.a.createElement(E.b,{path:"/profile/:userId?",render:function(){return a.a.createElement(nt,null)}}),a.a.createElement(E.b,{path:"/dialogs",render:function(){return a.a.createElement(tt,null)}}),a.a.createElement(E.b,{path:"/news",render:function(){return a.a.createElement(b,null)}}),a.a.createElement(E.b,{path:"/settings",render:function(){return a.a.createElement(h,null)}}),a.a.createElement(E.b,{path:"/users",render:function(){return a.a.createElement(fe,{pageTitle:"Users"})}}),a.a.createElement(E.b,{path:"/login",render:function(){return a.a.createElement(Ue,null)}}),a.a.createElement(E.b,{path:"/chat",render:function(){return a.a.createElement(rt,null)}}),a.a.createElement(E.b,{path:"*",render:function(){return a.a.createElement("div",null,"404 NOT FOUND")}}))))),a.a.createElement(t,{style:{textAlign:"center"}},"Social Network \xa92021 Created by Maxim Astapenko"))}}]),n}(a.a.Component),ct=Object(Ce.d)(E.h,Object(S.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Pe());Promise.all([t]).then((function(){e(ke())}))}}}))(at),ut=function(){return a.a.createElement(p.a,{basename:"/social-react"},a.a.createElement(S.a,{store:He},a.a.createElement(ct,null)))};u.a.render(a.a.createElement(ut,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m}));var r=n(135),a=n(0),c=n.n(a),u=n(85),o=n.n(u),i=n(136),s=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,u=n&&r;return c.a.createElement("div",{className:o.a.formControl+" "+(u?o.a.error:"")},c.a.createElement("div",null,a),u&&c.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(s,e,c.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(s,e,c.a.createElement("input",Object.assign({},t,n)))};function m(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,Object.assign({placeholder:e,name:t,component:r,validate:n},a))," ",u)}},69:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(187),u=n.n(c);t.a=function(){return a.a.createElement("div",{style:{backgroundColor:"#e7f0ff",position:"absolute"}},a.a.createElement("img",{src:u.a,alt:"Preloader picture"}))}},85:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3FZxU",error:"FormsControls_error__2wZcU",formSummeryError:"FormsControls_formSummeryError__1a8XU"}}},[[235,1,2]]]);
//# sourceMappingURL=main.c59ce27f.chunk.js.map