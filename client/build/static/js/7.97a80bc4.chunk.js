(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[7],{101:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var a={hidden:{opacity:0,y:100},show:{opacity:1,y:0,transition:{duration:.75}},exit:{opacity:0,y:100,transition:{duration:.75}}}},104:function(n,e,t){"use strict";var a,i,r=t(11),c=t(9),o=t(61),s=(t(2),t(12)),l=t(3),d=s.a.div(a||(a=Object(r.a)(['\n  position: relative;\n  margin: 45px 0;\n\n  input[type="password"] {\n    letter-spacing: 0.3em;\n  }\n\n  .form-input-label {\n    color: grey;\n    font-size: 16px;\n    font-weight: normal;\n    position: absolute;\n    pointer-events: none;\n    left: 5px;\n    top: 10px;\n    transition: 300ms ease all;\n\n    &.shrink {\n      top: -14px;\n      font-size: 12px;\n      color: black;\n    }\n  }\n']))),p=s.a.input(i||(i=Object(r.a)(["\n  background: none;\n  background-color: white;\n  color: grey;\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid grey;\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ .form-input-label {\n    top: -14px;\n    font-size: 12px;\n    color: black;\n  }\n"])));e.a=function(n){var e=n.handleChange,t=n.label,a=Object(o.a)(n,["handleChange","label"]);return Object(l.jsxs)(d,{children:[Object(l.jsx)(p,Object(c.a)({onChange:e},a)),t?Object(l.jsx)("label",{className:"".concat(a.value.length?"shrink":""," form-input-label"),children:t}):null]})}},143:function(n,e,t){"use strict";t.r(e);var a,i,r,c,o,s,l=t(11),d=t(2),p=t.n(d),u=t(102),b=t(12),j=t(63),m=t(9),x=t(6),h=t.n(x),f=t(55),O=t(43),w=t(18),g=t(20),y=t(42),v=t(104),k=t(3),C=function(){var n=Object(w.c)(),e=function(e,t){n(Object(g.b)({email:e,password:t}))},t=Object(d.useState)({email:"",password:""}),a=Object(O.a)(t,2),i=a[0],r=a[1],c=i.email,o=i.password,s=function(){var n=Object(f.a)(h.a.mark((function n(t){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),e(c,o);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(n){var e=n.target,t=e.value,a=e.name;r(Object(m.a)(Object(m.a)({},i),{},Object(j.a)({},a,t)))};return Object(k.jsxs)(S,{children:[Object(k.jsx)(N,{children:"I already have an account"}),Object(k.jsx)("span",{children:"Sign in with your email and password"}),Object(k.jsxs)("form",{onSubmit:s,children:[Object(k.jsx)(v.a,{type:"email",name:"email",value:c,onChange:l,label:"Email",required:!0}),Object(k.jsx)(v.a,{type:"password",name:"password",value:o,onChange:l,label:"Password",required:!0}),Object(k.jsxs)(P,{children:[Object(k.jsx)(y.a,{type:"submit",children:"sign in"}),Object(k.jsx)(y.a,{type:"button",onClick:function(){n(Object(g.c)())},isGoogleSignIn:!0,children:"google"})]})]})]})},S=b.a.div(a||(a=Object(l.a)(["\n  @media (min-width: 560px) {\n    width: 380px;\n  }\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n"]))),N=b.a.h2(i||(i=Object(l.a)(["\n  margin: 10px 0;\n"]))),P=b.a.div(r||(r=Object(l.a)(["\n  @media (min-width: 911px) {\n    flex-direction: row;\n    button {\n      width: 100%;\n    }\n  }\n  flex-direction: column;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  button {\n    margin: 1rem 0;\n    width: 50%;\n  }\n"]))),q=p.a.memo(C),I=function(){var n=Object(w.c)(),e=function(e){n(Object(g.j)(e))},t=Object(d.useState)({displayName:"",email:"",password:"",confirmPassword:""}),a=Object(O.a)(t,2),i=a[0],r=a[1],c=i.displayName,o=i.email,s=i.password,l=i.confirmPassword,p=function(){var n=Object(f.a)(h.a.mark((function n(t){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),s===l){n.next=4;break}return alert("Password don't match"),n.abrupt("return");case 4:e({displayName:c,email:o,password:s});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(n){var e=n.target,t=e.name,a=e.value;r(Object(m.a)(Object(m.a)({},i),{},Object(j.a)({},t,a)))};return Object(k.jsxs)(z,{children:[Object(k.jsx)(D,{children:"I do not have a account"}),Object(k.jsx)("span",{children:"Sign Up with your email and password"}),Object(k.jsxs)("form",{onSubmit:p,children:[Object(k.jsx)(v.a,{type:"text",name:"displayName",value:c,onChange:u,label:"Name",required:!0}),Object(k.jsx)(v.a,{type:"email",name:"email",value:o,onChange:u,label:"Email",required:!0}),Object(k.jsx)(v.a,{type:"password",name:"password",value:s,onChange:u,label:"Password",required:!0}),Object(k.jsx)(v.a,{type:"password",name:"confirmPassword",value:l,onChange:u,label:"Confirm Password",required:!0}),Object(k.jsx)("center",{children:Object(k.jsx)(y.a,{type:"submit",children:"SIGN UP"})})]})]})},z=b.a.div(c||(c=Object(l.a)(["\n  @media (min-width: 560px) {\n    width: 380px;\n  }\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n"]))),D=b.a.h2(o||(o=Object(l.a)(["\n  margin: 10px 0;\n"]))),E=p.a.memo(I),G=t(36),J=t(101),U=Object(b.a)(G.a.div)(s||(s=Object(l.a)(["\n  /*width: 850px;\n  display: flex;\n  flex-direction: column !important;\n  justify-content: space-between;\n  margin: 30px auto;\n\n  @media (min-width: 1000px) {\n    flex-direction: row !important;\n  }*/\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  grid-column-gap: 2rem;\n  grid-row-gap: 5rem;\n  justify-items: center;\n  padding-top: 10px;\n"])));e.default=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(u.a,{children:Object(k.jsx)("title",{children:"CRWN Apperal | Sign In"})}),Object(k.jsxs)(U,{exit:"exit",variants:J.a,initial:"hidden",animate:"show",children:[Object(k.jsx)(q,{}),Object(k.jsx)(E,{})]})]})}}}]);
//# sourceMappingURL=7.97a80bc4.chunk.js.map