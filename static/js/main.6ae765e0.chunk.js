(this["webpackJsonpcreate-txt-files"]=this["webpackJsonpcreate-txt-files"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(10),c=n.n(r),s=n(45),l=n(11),o=n(39),j=n(28),b=n(152),d=240,u=window.innerWidth,h=u>900?"space-between":"center",x=u>900?"60%":"100%",p=Object(b.a)((function(e){return{app:{height:"100vh"},mainSeq:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:h},seqtext:{display:"flex",flexDirection:"row",justifyContent:h,margin:"20px 50px"},seqInputs:{display:"flex",flexDirection:"column",padding:"20px 10px",justifyContent:"space-between","& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}},previewField:{width:x,textAlign:"center"},preview:{textAlign:"center",display:"flex",flexDirection:"column",margin:"40px 0px",justifyContent:h},previewString:{wordWrap:"initial",overflow:"auto",maxHeight:"20vh"},root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",paddingRight:"20px"},appBarShift:{width:"calc(100% - ".concat(d,"px)"),marginLeft:d,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:d,flexShrink:0},drawerPaper:{width:d},drawerHeader:Object(j.a)(Object(j.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},homepage:{textAlign:"center",paddingTop:"50px"},homepageMessage:{fontSize:"20px"}}})),O=n(4);function m(){var e=p();return Object(O.jsxs)("div",{className:e.homepage,children:[Object(O.jsx)(o.a,{variant:"h1",children:"Hello!"}),Object(O.jsx)("p",{className:e.homepageMessage,children:"This is quick project I made create quick text files whenever I need them. Hopefully, you can use this too!"})]})}var g=n(36),f=n(29),v=n(163),w=n(162),y=n(165),N=n(166),S=n(176),C=n(175),T=n(161),k=n(156),q=n(160),I=n(158),F=n(159),P=n(157);function B(e){var t=e.open,n=e.handleClose,a=e.incrementor,i=e.inc;return Object(O.jsx)("div",{children:i?Object(O.jsxs)(k.a,{open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(O.jsx)(P.a,{id:"alert-dialog-title",children:"Uh Oh :O"}),Object(O.jsx)(I.a,{children:Object(O.jsx)(F.a,{id:"alert-dialog-description",children:"You can't increment by ".concat(a)})}),Object(O.jsx)(q.a,{children:Object(O.jsx)(T.a,{onClick:n,color:"primary",autoFocus:!0,children:"Sounds Good!"})})]}):Object(O.jsxs)(k.a,{open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(O.jsx)(P.a,{id:"alert-dialog-title",children:"Uh Oh :O"}),Object(O.jsx)(I.a,{children:Object(O.jsx)(F.a,{id:"alert-dialog-description",children:"The initial number ".concat(a," is too big! As in it has to be larger than the final number")})}),Object(O.jsx)(q.a,{children:Object(O.jsx)(T.a,{onClick:n,color:"primary",autoFocus:!0,children:"Sounds Good!"})})]})})}var A=n(78);function D(e){var t=e.arrayToString,n=p();return Object(O.jsxs)("div",{className:n.preview,children:[Object(O.jsx)("p",{className:n.previewString,children:t}),Object(O.jsx)(T.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault();var n=new Blob([t],{type:"text/plain;charset=utf-8"});Object(A.saveAs)(n,"sequence.txt")},children:"Generate .txt File"})]})}function H(){var e=Object(a.useState)({initialNumber:0,finalNumber:0,incrementor:1,separatorText:", "}),t=Object(f.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(!0),c=Object(f.a)(r,2),s=c[0],l=c[1],b=Object(a.useState)(!1),d=Object(f.a)(b,2),u=d[0],h=d[1],x=Object(a.useState)(""),m=Object(f.a)(x,2),k=m[0],q=m[1],I=Object(a.useState)(!1),F=Object(f.a)(I,2),P=F[0],A=F[1],H=Object(a.useState)(!1),L=Object(f.a)(H,2),G=L[0],M=L[1],R=Object(a.useState)(!1),W=Object(f.a)(R,2),J=W[0],U=W[1],X=function(){A(!1),i(Object(j.a)(Object(j.a)({},n),{},{incrementor:1}))},z=p(),E=function(e){i(Object(j.a)(Object(j.a)({},n),{},Object(g.a)({},e.target.name,e.target.value)))},Y=window.innerWidth;return Object(O.jsxs)("div",{className:z.mainSeq,children:[Object(O.jsx)(B,{open:P,handleClose:X,incrementor:n.incrementor,inc:!0}),Object(O.jsx)(B,{open:J,handleClose:function(){U(!1),i(Object(j.a)(Object(j.a)({},n),{},{initialNumber:0}))},incrementor:n.initialNumber,inc:!1}),Object(O.jsx)(o.a,{variant:Y>900?"h2":"h6",children:"Create a list of Numbers in a .TXT File"}),Object(O.jsx)(B,{open:P,handleClose:X}),Object(O.jsxs)("div",{className:z.seqtext,children:[Object(O.jsxs)(w.a,{component:"fieldset",className:z.seqInputs,children:[Object(O.jsx)(v.a,{component:"legend",children:"Parameters for the .txt file"}),Object(O.jsx)(C.a,{id:"outlined-number",name:"initialNumber",value:n.initialNumber,onChange:E,label:"Initial Number",type:"number",InputLabelProps:{shrink:!0},variant:"outlined"}),Object(O.jsx)(C.a,{id:"outlined-number",name:"finalNumber",value:n.finalNumber,onChange:E,label:"Final Number",type:"number",InputLabelProps:{shrink:!0},variant:"outlined"}),Object(O.jsx)(C.a,{id:"outlined-number",name:"incrementor",value:n.incrementor,onChange:E,label:"Increment by",type:"number",InputLabelProps:{shrink:!0},variant:"outlined"}),Object(O.jsx)(C.a,{id:"outlined-helperText",name:"separatorText",value:n.separatorText,onChange:E,label:"Separator Text",type:"Helper text",InputLabelProps:{shrink:!0},variant:"outlined"}),Object(O.jsxs)(y.a,{children:[Object(O.jsx)(N.a,{control:Object(O.jsx)(S.a,{checked:s,onChange:function(){return l((function(e){return!e}))},name:"separatorSwitch"}),label:"Number Separator"}),Object(O.jsx)(N.a,{control:Object(O.jsx)(S.a,{checked:u,onChange:function(){return h((function(e){return!e}))},name:"reverseOrder"}),label:"Reverse Order"})]}),Object(O.jsx)(T.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault();var t=Number(n.initialNumber),a=Number(n.finalNumber),i=Number(n.incrementor);if(i>0&&t<a){M(!0);var r=[];if(u)for(var c=t;c<=a;c+=i)r.unshift(c);else for(var l=t;l<=a;l+=i)r.push(l);q(s?r.join(n.separatorText):r.join(""))}else U(!0);i<=0&&A(!0)},children:"Generate Preview"})]}),Y<900?null:Object(O.jsxs)("div",{className:z.previewField,children:[Object(O.jsx)(o.a,{variant:"h3",children:"Preview"}),G?Object(O.jsx)(D,{arrayToString:k}):null]})]}),Y>900?null:Object(O.jsxs)("div",{className:z.previewField,children:[Object(O.jsx)(o.a,{variant:"h3",children:"Preview"}),G?Object(O.jsx)(D,{arrayToString:k}):null]})]})}var L=n(168),G=n(3),M=n(20),R=n(177),W=n(169),J=n(170),U=n(164),X=n(171),z=n(167),E=n(79),Y=n.n(E),K=n(81),Q=n.n(K),V=n(82),Z=n.n(V),$=n(172),_=n(173),ee=n(174),te=n(83),ne=n.n(te),ae=n(84),ie=n.n(ae),re=n(80),ce=n.n(re);function se(){var e=p(),t=Object(M.a)(),n=i.a.useState(!1),a=Object(f.a)(n,2),r=a[0],c=a[1];return Object(O.jsxs)("div",{className:e.root,children:[Object(O.jsx)(L.a,{}),Object(O.jsxs)(W.a,{position:"fixed",className:Object(G.a)(e.appBar,Object(g.a)({},e.appBarShift,r)),children:[Object(O.jsxs)(J.a,{children:[Object(O.jsx)(z.a,{color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},edge:"start",className:Object(G.a)(e.menuButton,r&&e.hide),children:Object(O.jsx)(Y.a,{})}),Object(O.jsx)(o.a,{variant:"h6",noWrap:!0,children:"Create A TXT File :3"})]}),Object(O.jsx)(z.a,{className:e.toTheRight,"aria-label":"home button","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",component:s.b,to:"/",children:Object(O.jsx)(ce.a,{})})]}),Object(O.jsxs)(R.a,{className:e.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:e.drawerPaper},children:[Object(O.jsx)("div",{className:e.drawerHeader,children:Object(O.jsx)(z.a,{onClick:function(){c(!1)},children:"ltr"===t.direction?Object(O.jsx)(Q.a,{}):Object(O.jsx)(Z.a,{})})}),Object(O.jsx)(X.a,{}),Object(O.jsx)(U.a,{children:Object(O.jsxs)($.a,{button:!0,component:s.b,to:"/seqtext",children:[Object(O.jsx)(_.a,{children:Object(O.jsx)(ne.a,{})}),Object(O.jsx)(ee.a,{primary:"Sequence of Numbers"})]},1)}),Object(O.jsx)(X.a,{}),Object(O.jsx)(U.a,{children:Object(O.jsxs)($.a,{button:!0,children:[Object(O.jsx)(_.a,{children:Object(O.jsx)(ie.a,{})}),Object(O.jsx)(ee.a,{primary:"Contact Me"})]},1)})]}),Object(O.jsx)("main",{className:Object(G.a)(e.content,Object(g.a)({},e.contentShift,r)),children:Object(O.jsx)("div",{className:e.drawerHeader})})]})}var le=function(){var e=p();return Object(O.jsx)(a.Fragment,{children:Object(O.jsxs)("div",{className:e.app,children:[Object(O.jsx)(L.a,{}),Object(O.jsx)(se,{}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/seqtext/",children:Object(O.jsx)(H,{})}),Object(O.jsx)(l.a,{path:"/",children:Object(O.jsx)(m,{})})]})]})})};c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(s.a,{children:Object(O.jsx)(le,{})})}),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.6ae765e0.chunk.js.map