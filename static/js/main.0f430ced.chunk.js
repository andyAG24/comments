(this.webpackJsonpcomments=this.webpackJsonpcomments||[]).push([[0],{19:function(n,t,e){},20:function(n,t,e){},27:function(n,t,e){"use strict";e.r(t);var c,i,r,a,s,o,d,u,j=e(0),l=e.n(j),f=e(11),b=e.n(f),h=(e(19),e(2)),p=(e(20),e(3)),x=e(4),O=e.n(x),m=e(6),v=e(9),g=e(1),w=p.a.div(c||(c=Object(h.a)(["\n  min-width: 250px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0px 0px 10px;\n"]))),y=p.a.div(i||(i=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n"]))),k=p.a.span(r||(r=Object(h.a)(["\n  font-size: 1.2em;  \n"]))),C=p.a.div(a||(a=Object(h.a)(["\n  align-self: flex-end;\n"])));function F(n){var t=n.comment;return Object(g.jsxs)(w,{children:[Object(g.jsxs)(y,{children:[Object(g.jsx)(k,{children:t.author}),Object(g.jsx)(C,{children:"12:22 23.01.2021"})]}),Object(g.jsx)("span",{children:t.message}),!!t.children&&t.children.map((function(n){return Object(g.jsx)(F,{comment:n},n.id)}))]})}var S,E,z,B,I=p.a.div(s||(s=Object(h.a)(["\n"]))),J=p.a.li(o||(o=Object(h.a)([""]))),L=p.a.ul(d||(d=Object(h.a)(["\n  margin-top: 0;\n"]))),P=p.a.span(u||(u=Object(h.a)(["\n  font-size: 1.2em;\n"])));function T(n){var t=n.authors;return Object(g.jsxs)(I,{children:[Object(g.jsx)(P,{children:"Commentators: "}),Object(g.jsx)(L,{children:t.map((function(n){return Object(g.jsx)(J,{children:n},n)}))})]})}var D,M=p.a.div(S||(S=Object(h.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),q=p.a.div(E||(E=Object(h.a)(["\n  width: 80%;\n"]))),A=p.a.div(z||(z=Object(h.a)(["\n  justify-self: flex-start;\n  padding-left: 5%;\n  width: 20%;\n  padding-top: 10px;\n"]))),G=p.a.div(B||(B=Object(h.a)(["\n  width: 100%;\n  min-width: 250px;\n  // border-bottom: 1px solid red;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n"])));function H(){var n=Object(j.useState)([]),t=Object(v.a)(n,2),e=t[0],c=t[1],i=Object(j.useState)([]),r=Object(v.a)(i,2),a=r[0],s=r[1];function o(){return(o=Object(m.a)(O.a.mark((function n(){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:fetch("data/comments.json").then((function(n){return n.json()})).then((function(n){return c(n)}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){var t=[];return n.forEach((function(n){t.push(n.author),0!==n.children.length&&(t=t.concat(d(n.children)))})),t.filter((function(n,e){return t.indexOf(n)===e}))}function u(){return(u=Object(m.a)(O.a.mark((function n(){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s(d(e));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(j.useEffect)((function(){0===e.length&&function(){o.apply(this,arguments)}(),0!==e.length&&0===a.length&&function(){u.apply(this,arguments)}()})),Object(g.jsxs)(M,{children:[Object(g.jsx)(q,{children:e.map((function(n){return Object(g.jsx)(G,{children:Object(g.jsx)(F,{comment:n})},n.id)}))}),Object(g.jsx)(A,{children:Object(g.jsx)(T,{authors:a})})]})}var K=p.a.div(D||(D=Object(h.a)(["\n  width: 65%;\n  margin: 150px auto 0 auto;\n"])));var N=function(){return Object(g.jsx)(K,{children:Object(g.jsx)(H,{})})},Q=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,28)).then((function(t){var e=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;e(n),c(n),i(n),r(n),a(n)}))};b.a.render(Object(g.jsx)(l.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root")),Q()}},[[27,1,2]]]);
//# sourceMappingURL=main.0f430ced.chunk.js.map