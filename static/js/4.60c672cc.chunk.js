(this["webpackJsonpsocial-react"]=this["webpackJsonpsocial-react"]||[]).push([[4],{545:function(e,t,a){e.exports={profileInfo:"ProfileInfo_profileInfo__1OXGY",infoList:"ProfileInfo_infoList__2awl3",profileInfoFull:"ProfileInfo_profileInfoFull__3FpHA",profileFriends:"ProfileInfo_profileFriends__3ge7L",profileInfoRow:"ProfileInfo_profileInfoRow__2_LTv",profileInfoRowAfter:"ProfileInfo_profileInfoRowAfter__3K8t3",countryFlag:"ProfileInfo_countryFlag__1euVb",workingImage:"ProfileInfo_workingImage__373HE",mainPhoto:"ProfileInfo_mainPhoto__3j-IZ",backgroundPicture:"ProfileInfo_backgroundPicture__1sS0a",profileImage:"ProfileInfo_profileImage__S-3K4",profileName:"ProfileInfo_profileName__3In5k",profileLocation:"ProfileInfo_profileLocation__3xODq",inputPhotoButton:"ProfileInfo_inputPhotoButton__37gIn",contact:"ProfileInfo_contact__elJLR"}},548:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3koDc",posts:"MyPosts_posts__2jhSQ"}},549:function(e,t,a){e.exports={item:"Post_item__27q3Q"}},555:function(e,t,a){e.exports={profileBlock:"Profile_profileBlock__eVG3y"}},563:function(e,t,a){"use strict";a.r(t);var n=a(215),l=a(216),r=a(272),o=a(268),c=a(0),i=a.n(c),s=a(139),u=a(545),m=a.n(u),f=a(102),p=a(141),d=a.n(p),E=a(180),b=function(e){var t=Object(c.useState)(!1),a=Object(s.a)(t,2),n=a[0],l=a[1],r=Object(c.useState)(e.status),o=Object(s.a)(r,2),u=o[0],m=o[1];Object(c.useEffect)((function(){m(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",{style:{float:"right"}},i.a.createElement("span",{style:{fontSize:"17px",color:"#ffffff"},onDoubleClick:function(){l(!0)}},e.status||"----")),n&&i.a.createElement("div",null,i.a.createElement(E.a,{style:{width:"150px",float:"right"},onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){l(!1),e.updateStatus(u)},value:u})))},h=a(92),g=a(267),v=a(125),_=a.n(v),P=a(151),I=a(117),O=a(65),k=Object(g.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",{style:{width:"1000px",padding:"23px 0 0 30px"}},i.a.createElement("div",null,i.a.createElement(P.a,{htmlType:"submit",onClick:function(){}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),n&&i.a.createElement("div",{className:_.a.formSummeryError},n),i.a.createElement("div",null,i.a.createElement(I.a,null,i.a.createElement("b",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"),i.a.createElement(O.a,{style:{paddingRight:20}},i.a.createElement("div",null,Object.keys(a.contacts).map((function(e){return i.a.createElement("div",{key:e,className:m.a.contact},i.a.createElement("b",null,e,": ",Object(h.c)(e,"contacts."+e,[],h.a)))})))),i.a.createElement(O.a,null,i.a.createElement("div",null,i.a.createElement("b",null,"\u0418\u043c\u044f"),Object(h.c)("Full name","fullName",[],h.a)),i.a.createElement("div",null,i.a.createElement("b",null,"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),Object(h.c)("My professional skills","lookingForAJobDescription",[],h.b)),i.a.createElement("div",null,i.a.createElement("b",null,"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),Object(h.c)("About me","aboutMe",[],h.a)))))))})),y=a(531),j=a(529),S=a(561),x=a(218),w=a.n(x),N=a(565),F=a(566),C=a(542),T=a(36),B=a(25),A=a(152),L=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",null,i.a.createElement(I.a,{className:m.a.profileInfoFull},i.a.createElement(O.a,null,i.a.createElement(I.a,null,i.a.createElement("span",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:")),i.a.createElement(I.a,{className:m.a.contact},i.a.createElement("span",null,"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d:\xa0")," +375 (33) 355-29-71"),i.a.createElement(O.a,null,Object.keys(t.contacts).map((function(e){return t.contacts&&i.a.createElement(M,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))),i.a.createElement(O.a,{style:{paddingLeft:50}},i.a.createElement(I.a,null,i.a.createElement("span",null,"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:\xa0")," 21.06.2000"),i.a.createElement(I.a,null,i.a.createElement("span",null,"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: "),i.a.createElement("span",null,t.lookingForAJob?"\u0414\u0430":"\u041d\u0435\u0442")),t.lookingForAJob&&i.a.createElement(O.a,null,i.a.createElement("span",null,"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f:")," ",t.lookingForAJobDescription),i.a.createElement(O.a,null,i.a.createElement("span",null,"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435:")," ",t.aboutMe),a?i.a.createElement(I.a,{style:{padding:"20px 0 0 15px"}},i.a.createElement(P.a,{onClick:n},i.a.createElement(F.a,null)," \u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c")):null,a?null:i.a.createElement(I.a,{style:{padding:"20px 0 0 15px"}},i.a.createElement(P.a,null,i.a.createElement(T.c,{to:"/chat"},i.a.createElement(C.a,null)," \u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"))))))},M=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement(I.a,{className:m.a.contact},i.a.createElement(O.a,null,t,": \xa0",i.a.createElement("a",{style:{float:"right"},href:a},a)))},z=function(e){var t=e.profile,a=e.status,n=e.updateStatus,l=e.isOwner,r=(e.savePhoto,e.saveProfile);Object(c.useEffect)((function(){o(Object(A.b)())}),[]);var o=Object(B.c)(),u=Object(B.d)((function(e){return e.friendsPage.friends})).length,p=Object(c.useState)(!1),E=Object(s.a)(p,2),h=E[0],g=E[1];if(!t)return i.a.createElement(f.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:m.a.descriptionBlock},i.a.createElement("div",{className:m.a.backgroundPicture},i.a.createElement(I.a,null,i.a.createElement(O.a,{md:{span:5,offset:2}},i.a.createElement(y.a,{className:m.a.profileImage,size:{xs:24,sm:32,md:40,lg:64,xl:80,xxl:150},src:i.a.createElement(j.a,{src:t.photos.large||d.a})}),","),i.a.createElement(O.a,{md:{span:7}},i.a.createElement("div",{className:m.a.profileName},t.fullName),i.a.createElement("div",{className:m.a.profileLocation},"\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c \xa0",i.a.createElement("img",{className:m.a.countryFlag,src:w.a,alt:"country flag"})),i.a.createElement("div",{className:m.a.profileLocation},"\u0413\u043e\u043c\u0435\u043b\u044c"),i.a.createElement("div",{className:m.a.profileFriends},u," \u0434\u0440\u0443\u0437\u0435\u0439"),i.a.createElement(b,{status:a,updateStatus:n})))),i.a.createElement("div",{style:{paddingTop:"15px"}},l&&i.a.createElement(S.a,{onChange:function(){},accept:"image/*",className:m.a.inputPhotoButton},i.a.createElement(P.a,{icon:i.a.createElement(N.a,null)},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e"))),i.a.createElement("br",null),i.a.createElement("div",{className:m.a.profileInfo},h?i.a.createElement(k,{initialValues:t,profile:t,onSubmit:function(e){r(e).then((function(){g(!1)}))}}):i.a.createElement(L,{profile:t,isOwner:l,goToEditMode:function(){g(!0)}}))))},D=a(209),J=a(548),R=a.n(J),U=a(549),V=a.n(U),q=a(562),G=a(567),H=a(568),K=function(e){var t=e.message,a=e.likesCount,n=e.date,l=e.id,r=Object(B.d)((function(e){var t;return null===(t=e.profilePage.profile)||void 0===t?void 0:t.photos.large})),o=Object(c.useState)(a),u=Object(s.a)(o,2),m=u[0],f=u[1],p=Object(B.c)();return i.a.createElement("div",{className:V.a.posts},i.a.createElement(q.b,{size:"large"},i.a.createElement(q.b.Item,{style:{width:700,backgroundColor:"#e3e5e9"}},i.a.createElement(q.b.Item.Meta,{avatar:i.a.createElement(y.a,{src:r,size:{xs:24,sm:32,md:40,lg:64,xl:80,xxl:80}}),title:t,description:i.a.createElement("span",null,n.toISOString().substring(0,10)+" "+n.toISOString().substr(11,5)," ",i.a.createElement("div",{style:{paddingTop:3}},i.a.createElement(G.a,{onClick:function(){return f((function(e){return e+1}))},twoToneColor:"#1890ff"})," ",m))}),i.a.createElement(H.a,{style:{float:"right",fontSize:18},onClick:function(){p(D.a.deletePost(l))}}))),i.a.createElement("br",null))},Q=a(195),Y=Object(Q.a)(400),W=Object(g.a)({form:"profile-add-new-post-form"})((function(e){return i.a.createElement("div",{style:{width:"400px",maxWidth:"400px",overflowY:"auto"}},i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,Object(h.c)("\u0427\u0442\u043e \u0443 \u0432\u0430\u0441 \u043d\u043e\u0432\u043e\u0433\u043e?","newPostText",[Q.b,Y],h.b)),i.a.createElement("br",null),i.a.createElement("div",{style:{paddingBottom:11}},i.a.createElement(P.a,{htmlType:"submit"},"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"))))})),X=i.a.memo((function(e){var t=e.posts,a=e.addPost,n=t.reverse().map((function(e){return i.a.createElement(K,{message:e.message,key:e.id,id:e.id,likesCount:e.likesCount,date:e.date})}));return i.a.createElement("div",{className:R.a.postsBlock},i.a.createElement("h3",null,"\u041c\u043e\u0438 \u0437\u0430\u043f\u0438\u0441\u0438"),i.a.createElement("br",null),i.a.createElement(W,{onSubmit:function(e){a(e.newPostText)}}),i.a.createElement("div",{className:R.a.posts},n))})),Z=Object(B.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:D.a.addPostActionCreator})(X),$=a(555),ee=a.n($),te=function(e){var t=e.savePhoto,a=e.isOwner,n=e.profile,l=e.status,r=e.saveProfile,o=e.updateStatus;return i.a.createElement("div",{className:ee.a.profileBlock},i.a.createElement(z,{savePhoto:t,isOwner:a,profile:n,status:l,saveProfile:r,updateStatus:o}),i.a.createElement(Z,null))},ae=a(35),ne=a(33),le=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"refreshProfile",value:function(){var e=+this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),e?(this.props.getUserProfile(e),this.props.getStatus(e)):console.error("Id should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(te,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(i.a.Component);t.default=Object(ne.d)(Object(B.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:D.d,getStatus:D.c,updateStatus:D.g,savePhoto:D.e,saveProfile:D.f}),ae.h)(le)}}]);
//# sourceMappingURL=4.60c672cc.chunk.js.map