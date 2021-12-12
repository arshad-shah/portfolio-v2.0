(this["webpackJsonpportfolio-v2.0"]=this["webpackJsonpportfolio-v2.0"]||[]).push([[2],{104:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(26),c=a.n(o),i=(a(90),a(66)),r=a(79),s=a(141),b=a(137),l=a(140),d=a(38),j=a(5),m=a(10),u=a(42),O=a(135),p=a(142),h=a(143),f=a(69),x=a(127),g=a(144),k=a(128),v=a(132),y=a(3);function w(e){var t=e.children,a=Object(x.a)({disableHysteresis:!0,threshold:100});return Object(y.jsx)(k.a,{in:a,children:Object(y.jsx)(g.a,{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",sx:{position:"fixed",bottom:16,right:16},children:t})})}var M=function(e){var t=e.children,a=Object(x.a)({disableHysteresis:!0,threshold:300});return a?Object(y.jsx)(v.a,{out:a.toString(),timeout:1e3,children:Object(y.jsx)("div",{children:t})}):Object(y.jsx)(v.a,{in:!0,timeout:1e3,children:Object(y.jsx)("div",{children:t})})},z=a(145),N=a(146),S="Loading",I={root:"".concat(S,"-root"),name:"".concat(S,"-name"),progress:"".concat(S,"-progress")},P=Object(m.a)("div")((function(e){var t;e.theme;return t={},Object(j.a)(t,"&.".concat(I.root),{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",alignContent:"center",flexWrap:"nowrap",backgroundColor:"#ffffff",minHeight:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"fixed"}),Object(j.a)(t,"& .".concat(I.name),{padding:"1rem"}),Object(j.a)(t,"& .".concat(I.progress),{padding:"1rem"}),t}));function C(){return Object(y.jsxs)(P,{className:I.root,children:[Object(y.jsx)(z.a,{className:I.progress,color:"secondary",size:100,thickness:5}),Object(y.jsx)(N.a,{className:I.name,variant:"h3",children:"Loading..."})]})}var L=a(147),R=a(139),A=a(148),B=a(55),E=a(74),D="Mobile",H={button:"".concat(D,"-button"),mobileMenuList:"".concat(D,"-mobileMenuList"),mobileMenuItem:"".concat(D,"-mobileMenuItem")},J=Object(m.a)(g.a)((function(e){var t,a,n=e.theme;return a={},Object(j.a)(a,"& .".concat(H.button),(t={"&:hover":{backgroundColor:"transparent"},color:n.palette.text.primary,fontWeight:"bold",textDecoration:"none",cursor:"pointer",borderRadius:"0.5rem",transition:"all 0.5s ease"},Object(j.a)(t,n.breakpoints.down("sm"),{fontSize:"1rem"}),Object(j.a)(t,n.breakpoints.down("smxs"),{fontSize:"0.8rem"}),t)),Object(j.a)(a,"& .".concat(H.mobileMenuList),{display:"flex",flexDirection:"row",bottom:"0",position:"fixed",width:"100%",backgroundColor:n.palette.primary.main,zIndex:"100",padding:"10px"}),Object(j.a)(a,"& .".concat(H.mobileMenuItem),{justifyContent:"center",padding:"10px"}),a}));function T(){return Object(y.jsx)(J,{"aria-label":"mobileMenu","data-toggle":"mobileMenu",children:Object(y.jsxs)(L.a,{className:H.mobileMenuList,children:[Object(y.jsx)(R.a,{button:!0,className:H.mobileMenuItem,children:Object(y.jsx)(B.Link,{className:H.button,"data-block":"Aboutmemenuitemmobile",to:"aboutme","data-testid":"aboutmeOption",spy:!0,smooth:!0,"aria-label":"About Me",children:"ABOUT ME"})}),Object(y.jsx)(R.a,{button:!0,className:H.mobileMenuItem,children:Object(y.jsx)(B.Link,{className:H.button,"data-block":"Projectsmenuitemmobile",to:"projects","data-testid":"projectsOption",spy:!0,smooth:!0,"aria-label":"Projects",children:"PROJECTS"})}),Object(y.jsx)(R.a,{button:!0,className:H.mobileMenuItem,children:Object(y.jsx)(A.a,{className:H.button,"data-testid":"resumeOption",variant:"outlined",href:E.a,"data-block":"Resumemenuitemmobile","aria-label":"Resume",children:"RESUME"})})]})})}var U=a.p+"static/media/background.abc1dc3c.webp",W=a.p+"static/media/backgroundmobile.6ab1743c.webp",F="MainSite",q={root:"".concat(F,"-root"),fab:"".concat(F,"-fab")},V=Object(m.a)("div")((function(e){var t,a,n,o=e.theme;return n={},Object(j.a)(n,"&.".concat(q.root),(t={minHeight:"100vh",minWidth:"100%"},Object(j.a)(t,o.breakpoints.down("sm"),{backgroundImage:"url(".concat(W,")")}),Object(j.a)(t,"backgroundImage","url(".concat(U,")")),Object(j.a)(t,"backgroundRepeat","no-repeat"),Object(j.a)(t,"backgroundSize","cover"),Object(j.a)(t,"backgroundAttachment","fixed"),t)),Object(j.a)(n,"& .".concat(q.fab),(a={fontSize:"2rem"},Object(j.a)(a,o.breakpoints.down("sm"),{marginBottom:"4rem"}),Object(j.a)(a,o.breakpoints.down("md"),{marginBottom:"4rem"}),a)),n})),G=Object(n.lazy)((function(){return Promise.all([a.e(6),a.e(8)]).then(a.bind(null,175))})),K=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,176))})),Q=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(12),a.e(9)]).then(a.bind(null,177))})),X=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(5),a.e(11)]).then(a.bind(null,178))})),Y=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,171))}));var Z=function(e){var t=Object(u.a)(),a=Object(O.a)(t.breakpoints.down("md"));return Object(y.jsx)(V,{className:q.root,children:Object(y.jsxs)(n.Suspense,{fallback:Object(y.jsx)(C,{}),children:[Object(y.jsx)(p.a,{}),Object(y.jsx)(G,{isMobile:a,"data-testid":"header"}),a?Object(y.jsx)(T,{}):null,Object(y.jsx)(M,Object(d.a)(Object(d.a)({},e),{},{children:Object(y.jsx)(K,{isMobile:a})})),Object(y.jsx)(Q,{}),Object(y.jsx)(X,{"data-testid":"projectsSection"}),Object(y.jsx)(w,Object(d.a)(Object(d.a)({},e),{},{children:Object(y.jsx)(h.a,{color:"secondary","data-block":"backtotopbutton","data-testid":"backtoTopButton",size:"large",className:q.fab,"aria-label":"scroll back to top",children:Object(y.jsx)(f.b,{})})})),Object(y.jsx)(Y,{isMobile:a})]})})},$=Object(r.a)({palette:{mode:"light",primary:{main:"#fdff95"},secondary:{main:"#ffbf0d"},action:{hoverOpacity:.09}},breakpoints:{values:{xs:320,smxs:350,sm:460,md:786,lg:1024,xl:1440}},typography:{fontFamily:"Nunito",fontSize:18}});function _(){return Object(y.jsx)(b.a,{injectFirst:!0,children:Object(y.jsx)(l.a,{theme:$,children:Object(y.jsx)(Z,{})})})}$=Object(s.a)($),i.a.initialize("UA-205064366-1"),i.a.pageview(window.location.pathname+window.location.search),c.a.render(Object(y.jsx)(_,{}),document.getElementById("root"))},74:function(e,t,a){"use strict";t.a=a.p+"static/media/ArshadResume.e3e2046f.pdf"},90:function(e,t,a){}},[[104,3,4]]]);
//# sourceMappingURL=main.e9e25fb5.chunk.js.map