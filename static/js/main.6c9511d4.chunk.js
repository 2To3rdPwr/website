(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{14:function(e,n,t){e.exports={container:"PDFViewer_container__mY2hT",pageSelection:"PDFViewer_pageSelection__2uL9z"}},26:function(e,n,t){e.exports={TopBar:"TopWrapper_TopBar__3lnJT",Resume:"TopWrapper_Resume__3I-5d"}},34:function(e,n,t){},35:function(e,n,t){},58:function(e,n){},59:function(e,n){},60:function(e,n){},61:function(e,n){},62:function(e,n){},65:function(e,n,t){"use strict";t.r(n);var c=t(3),i=t(1),o=t.n(i),r=t(22),s=t.n(r),a=(t(34),t(23)),u=t(24),j=t(28),b=t(27),l=(t(35),t(15)),d=t(7),f=t(14),p=t.n(f);function O(e){var n=Object(i.useState)(null),t=Object(l.a)(n,2),o=t[0],r=t[1],s=Object(i.useState)(1),a=Object(l.a)(s,2),u=a[0],j=a[1];function b(e){j((function(n){return n+e}))}return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:p.a.container,children:[Object(c.jsx)(d.a,{file:e.file,renderMode:"svg",onLoadSuccess:function(e){var n=e.numPages;r(n),j(1)},children:Object(c.jsx)(d.b,{pageNumber:u,scale:1.35})}),Object(c.jsxs)("div",{className:p.a.pageSelection,children:[Object(c.jsx)("button",{type:"button",disabled:u<=1,onClick:function(){b(-1)},children:"Previous"}),Object(c.jsxs)("p",{children:["Page ",u||(o?1:"--")," of ",o||"--"]}),Object(c.jsx)("button",{type:"button",disabled:u>=o,onClick:function(){b(1)},children:"Next"})]})]})})}d.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(d.c.version,"/pdf.worker.js");var x=t.p+"static/media/JakeSage.72cef3d0.pdf",h=function(e){return Object(c.jsx)(O,{file:x})},g=t(26),m=t.n(g),v=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:m.a.TopBar,children:[Object(c.jsx)("button",{children:"Resume"}),Object(c.jsx)("button",{children:"About Me"}),Object(c.jsx)("button",{children:"Langton's Ant"})]}),Object(c.jsx)(h,{})]})},_=function(e){Object(j.a)(t,e);var n=Object(b.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(c.jsx)(v,{})}}]),t}(i.Component),S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,66)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),o(e),r(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root")),S()}},[[65,1,2]]]);
//# sourceMappingURL=main.6c9511d4.chunk.js.map