(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[8],{101:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var i={hidden:{opacity:0,y:100},show:{opacity:1,y:0,transition:{duration:.75}},exit:{opacity:0,y:100,transition:{duration:.75}}}},140:function(n,e,t){"use strict";t.r(e);var i,c,r,a,o,s=t(11),d=t(2),l=t(16),j=t(17),h=t(12),b=t(18),m=t(42),p=t(39),x=t(102),O=t(36),u=t(101),g=t(30),f=t(62),w=t(3),y=Object(h.a)(O.a.div)(i||(i=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  grid-column-gap: 1rem;\n  grid-row-gap: 2rem;\n  justify-items: center;\n  min-height: 90vh;\n  padding-top: 10px;\n  .row {\n    width: 50%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid black;\n    select {\n      border: none;\n      outline: none;\n      padding: 0 0.5rem;\n    }\n  }\n"]))),v=h.a.div(c||(c=Object(s.a)(["\n  @media (min-width: 560px) {\n    height: 70%;\n    width: 70%;\n  }\n  height: 100%;\n  width: 100%;\n  margin-bottom: 1rem;\n  img {\n    height: 100%;\n    width: 100%;\n    padding: 0 2rem;\n    object-fit: cover;\n  }\n"]))),k=h.a.div(r||(r=Object(s.a)(["\n  /* max-height: 90vh; */\n  /* overflow-y: scroll; */\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]))),C=h.a.div(a||(a=Object(s.a)(["\n  position: sticky;\n  top: 5rem;\n  height: 60vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  h1 {\n    margin-bottom: 2rem;\n  }\n  h3 {\n    font-weight: lighter;\n    margin-bottom: 2rem;\n  }\n  .description {\n    width: 50%;\n    margin-bottom: 2rem;\n  }\n  button {\n    width: 10%;\n    margin-top: 2rem;\n  }\n"]))),N=h.a.div(o||(o=Object(s.a)(["\n  margin-top: 200px;\n  display: flex;\n  justify-content: center;\n  padding: 2rem 0;\n  a {\n    font-size: 2rem;\n  }\n"])));e.default=function(){var n=Object(l.i)(),e=Object(l.g)(),t=Object(b.d)((function(n){return n.shop.collections})),i=Object(b.c)();if(Object(d.useEffect)((function(){i({type:g.a.FETCH_COLLECTIONS_START})}),[i]),!t)return Object(w.jsx)(f.a,{});var c=t[n.params.collection],r=c.items.find((function(e){return e.id===Number(n.params.id)}));return r&&c?Object(w.jsxs)("div",{children:[Object(w.jsxs)(y,{exit:"exit",variants:u.a,initial:"hidden",animate:"show",children:[Object(w.jsx)(x.a,{children:Object(w.jsxs)("title",{children:["CRWN Apperal | ",r.name]})}),Object(w.jsxs)(k,{children:[Object(w.jsx)(v,{children:Object(w.jsx)("img",{src:r.imageUrl,alt:""})}),Object(w.jsx)(v,{children:Object(w.jsx)("img",{src:r.imageUrl2,alt:""})})]}),Object(w.jsxs)(C,{children:[Object(w.jsx)("h1",{children:r.name}),Object(w.jsxs)("h3",{children:["NOK ",r.price]}),Object(w.jsx)("p",{className:"description",children:r.description}),Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("p",{children:"Size: "}),Object(w.jsxs)("select",{required:!0,children:[Object(w.jsx)("option",{children:"S"}),Object(w.jsx)("option",{selected:!0,children:"M"}),Object(w.jsx)("option",{children:"L"})]})]}),Object(w.jsx)(m.a,{onClick:function(){i(Object(p.a)(r)),alert("".concat(r.name," has been added to your cart!"))},inverted:!0,children:"ADD TO CART"})]})]}),Object(w.jsx)(N,{children:Object(w.jsx)(j.b,{onClick:function(){return e.goBack()},children:"Go Back"})})]}):null}}}]);
//# sourceMappingURL=8.ee1a76b6.chunk.js.map