(this["webpackJsonpsocial-react"]=this["webpackJsonpsocial-react"]||[]).push([[6],{544:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2sgjw",dialogsItems:"Dialogs_dialogsItems__PWwki",dialog:"Dialogs_dialog__11VTP",dialogName:"Dialogs_dialogName__13PH_",activeLink:"Dialogs_activeLink__30sOw",messages:"Dialogs_messages__1zSyE",message:"Dialogs_message__z1c6H"}},564:function(e,a,t){"use strict";t.r(a);var s=t(14),i=t(0),n=t.n(i),l=t(544),c=t.n(l),m=t(198),o=t(36),r=function(e){var a=e.id,t=e.imgLink,s=e.name,i=(Object(m.a)(e,["id","imgLink","name"]),"/dialogs/"+a);return n.a.createElement("div",{className:c.a.dialog},n.a.createElement("img",{alt:"",src:t}),n.a.createElement(o.c,{to:i,className:c.a.dialogName,activeClassName:c.a.activeLink},s))},g=function(e){var a=e.message;return n.a.createElement("div",{className:c.a.message},a)},d=t(267),u=t(92),_=t(195),b=Object(_.a)(100),v=Object(d.a)({form:"dialog-add-message-form"})((function(e){var a=e.handleSubmit;return n.a.createElement("form",{onSubmit:a},n.a.createElement("div",null,Object(u.c)("Enter your message","newMessageBody",[_.b,b],u.b)),n.a.createElement("div",null,n.a.createElement("button",null,"Send")))})),E=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return n.a.createElement(r,{name:e.name,key:e.id,id:e.id,imgLink:e.imgLink})})),s=a.messages.map((function(e){return n.a.createElement(g,{message:e.message,key:e.id})}));return n.a.createElement("div",{className:c.a.dialogs},n.a.createElement("div",{className:c.a.dialogsItems},t),n.a.createElement("div",{className:c.a.messages},n.a.createElement("div",null,s),n.a.createElement(v,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})))},f=t(266),k=t(25),j=t(35),N=function(e){return{isAuth:e.auth.isAuth}};var O=t(33);a.default=Object(O.d)(Object(k.b)((function(e){return{dialogsPage:e.dialogsPage}}),Object(s.a)({},f.a)),(function(e){return Object(k.b)(N,{})((function(a){var t=a.isAuth,s=Object(m.a)(a,["isAuth"]);return t?n.a.createElement(e,s):n.a.createElement(j.a,{to:"/login"})}))}))(E)}}]);
//# sourceMappingURL=6.43f56396.chunk.js.map