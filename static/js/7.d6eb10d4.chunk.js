(this["webpackJsonpsocial-react"]=this["webpackJsonpsocial-react"]||[]).push([[7],{557:function(e,a,t){e.exports={dialogImage:"ChatPage_dialogImage__2HaKY",dialogName:"ChatPage_dialogName__2RLKE",dialogElement:"ChatPage_dialogElement__blpW-",dialogsBlock:"ChatPage_dialogsBlock__1OMVM"}},560:function(e,a,t){"use strict";t.r(a);var l=t(139),n=t(556),c=t(117),r=t(65),s=t(151),o=t(0),m=t.n(o),i=t(25),u=t(273),d=t(558),g=t.n(d),E=t(529),p=t(557),h=t.n(p),f=t(141),b=t.n(f),v=t(569),N=function(){return m.a.createElement("div",{className:h.a.dialogsBlock},m.a.createElement(c.a,{className:h.a.dialogElement},m.a.createElement(E.a,{src:"https://picsum.photos/400/400",className:h.a.dialogImage}),m.a.createElement("span",{className:h.a.dialogName},"\u041c\u0430\u043a\u0441\u0438\u043c")),m.a.createElement(c.a,{className:h.a.dialogElement},m.a.createElement(E.a,{src:"https://picsum.photos/200/200",className:h.a.dialogImage}),m.a.createElement("span",{className:h.a.dialogName},"\u0418\u043b\u044c\u044f")),m.a.createElement(c.a,{className:h.a.dialogElement},m.a.createElement(E.a,{src:"https://picsum.photos/300/300",className:h.a.dialogImage}),m.a.createElement("span",{className:h.a.dialogName},"\u0418\u0433\u043e\u0440\u044c")),m.a.createElement(c.a,{className:h.a.dialogElement},m.a.createElement(E.a,{src:"https://picsum.photos/100/100",className:h.a.dialogImage}),m.a.createElement("span",{className:h.a.dialogName},"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440")))},O=function(){var e=Object(i.c)(),a=Object(i.d)((function(e){return e.chat.status}));return Object(o.useEffect)((function(){return e(Object(u.c)()),function(){e(Object(u.d)())}}),[]),m.a.createElement("div",null,"error"===a&&m.a.createElement("div",null,"Some error occurred. Please refresh the page"),m.a.createElement(m.a.Fragment,null,m.a.createElement(j,null),m.a.createElement(x,null)))},j=m.a.memo((function(e){Object(n.a)(e);var a=Object(i.d)((function(e){return e.chat.messages})),t=Object(o.useRef)(null),c=Object(o.useState)(!1),r=Object(l.a)(c,2),s=r[0],u=r[1];return Object(o.useEffect)((function(){var e;s&&(null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[a]),m.a.createElement("div",{style:{height:"400px",width:"500px",overflowY:"auto"},onScroll:function(e){var a=e.currentTarget;Math.abs(a.scrollHeight-a.scrollTop-a.clientHeight)<300?!s&&u(!0):s&&u(!1)}},a.map((function(e,a){return m.a.createElement(_,{key:a,message:e})})),m.a.createElement("div",{ref:t}))})),_=m.a.memo((function(e){var a=e.message;return m.a.createElement("div",null,m.a.createElement("div",{style:{padding:"3px 0 0 10px",borderBottom:"1px #dadcdf solid"}},m.a.createElement("img",{alt:"User photo",src:null!==a.photo?a.photo:b.a,style:{width:"30px",borderRadius:15}}),m.a.createElement("b",{style:{width:"30px",paddingLeft:7}},a.userName),m.a.createElement("br",null),a.message))})),x=function(e){Object(n.a)(e);var a=Object(o.useState)(""),t=Object(l.a)(a,2),d=t[0],E=t[1],p=Object(i.c)(),h=Object(i.d)((function(e){return e.chat.status}));return m.a.createElement(c.a,null,m.a.createElement(r.a,{style:{padding:"20px 0 0 0"}},m.a.createElement(g.a,{autoSize:!0,style:{width:420,height:30},onChange:function(e){return E(e.currentTarget.value)},value:d})),m.a.createElement(r.a,{style:{padding:"20px 0 0 0"}},m.a.createElement(s.a,{disabled:"ready"!==h,onClick:function(){d&&(p(Object(u.b)(d)),E(""))}},m.a.createElement(v.a,null))))};a.default=function(){return m.a.createElement("div",null,m.a.createElement(c.a,null,m.a.createElement(r.a,null,m.a.createElement(N,null)),m.a.createElement(r.a,null,m.a.createElement(O,null))))}}}]);
//# sourceMappingURL=7.d6eb10d4.chunk.js.map