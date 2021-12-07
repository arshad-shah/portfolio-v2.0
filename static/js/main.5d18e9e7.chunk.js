(this["webpackJsonpportfolio-v2.0"]=this["webpackJsonpportfolio-v2.0"]||[]).push([[1],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(9),c=n.n(i),r=(n(86),n(50)),s=n(26),b=n(70),l=n(130),d=n(126),j=n(118),u=n(127),m=n(128),p=n(69),h=n.n(p),O=n(117),x=n(32),f=n(119),g=n(120),k=n(121),v=n(2),y=Object(O.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},rootMobile:{position:"fixed",bottom:e.spacing(10),right:e.spacing(2)}}})),w=function(e){var t=Object(x.a)(),n=Object(j.a)(t.breakpoints.down("sm")),a=e.children,o=y(),i=Object(f.a)({disableHysteresis:!0,threshold:300});return Object(v.jsx)(g.a,{in:i,children:Object(v.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation","data-block":"backtotopbutton",className:n?o.rootMobile:o.root,children:a})})},M=function(e){var t=e.children,n=Object(f.a)({disableHysteresis:!0,threshold:300});return n?Object(v.jsx)(k.a,{out:n.toString(),timeout:1e3,children:Object(v.jsx)("div",{children:t})}):Object(v.jsx)(k.a,{in:!0,timeout:1e3,children:Object(v.jsx)("div",{children:t})})},z=n(14),N=n.p+"static/media/background.abc1dc3c.webp",I=n.p+"static/media/backgroundmobile.82063681.jpg",S=Object(O.a)((function(e){var t;return{root:(t={minHeight:"100vh",minWidth:"100%"},Object(z.a)(t,e.breakpoints.down("xs"),{backgroundImage:"url(".concat(I,")")}),Object(z.a)(t,"backgroundImage","url(".concat(N,")")),Object(z.a)(t,"backgroundRepeat","no-repeat"),Object(z.a)(t,"backgroundSize","cover"),Object(z.a)(t,"backgroundAttachment","fixed"),t)}}),{name:"App"}),A=n(122),C=n(123),P=Object(O.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",alignContent:"center",flexWrap:"nowrap",backgroundColor:"#ffffff",minHeight:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"fixed"},name:{padding:"1rem"},progress:{padding:"1rem"}}}),{name:"Loading"});function R(){var e=P();return Object(v.jsxs)("div",{className:e.root,children:[Object(v.jsx)(A.a,{className:e.progress,color:"secondary",size:100,thickness:5}),Object(v.jsx)(C.a,{className:e.name,variant:"h3",children:"Loading..."})]})}var L=n(129),D=n(124),H=n(125),W=n(45),B=n(64),J=Object(O.a)((function(e){return{button:{"&:hover":{backgroundColor:"transparent"},color:e.palette.text.primary,fontWeight:"bold",textDecoration:"none",cursor:"pointer",borderRadius:"0.5rem",transition:"all 0.5s ease"},mobileMenuList:{display:"flex",flexDirection:"row",bottom:"0",position:"fixed",width:"100%",backgroundColor:e.palette.primary.main,zIndex:"100",padding:"10px"},mobileMenuItem:{justifyContent:"center",padding:"10px"}}}));function q(){var e=J();return Object(v.jsx)(L.a,{"aria-label":"mobileMenu","data-toggle":"mobileMenu",children:Object(v.jsxs)(D.a,{className:e.mobileMenuList,children:[Object(v.jsx)(H.a,{button:!0,className:e.mobileMenuItem,children:Object(v.jsx)(W.Link,{className:e.button,"data-block":"Aboutmemenuitemmobile",to:"aboutme","data-testid":"aboutmeOption",spy:!0,smooth:!0,"aria-label":"About Me",children:Object(v.jsx)(C.a,{variant:"button",children:"About Me"})})}),Object(v.jsx)(H.a,{button:!0,className:e.mobileMenuItem,children:Object(v.jsx)(W.Link,{className:e.button,"data-block":"Projectsmenuitemmobile",to:"projects","data-testid":"projectsOption",spy:!0,smooth:!0,"aria-label":"Projects",children:Object(v.jsx)(C.a,{variant:"button",children:"Projects"})})}),Object(v.jsx)(H.a,{button:!0,className:e.mobileMenuItem,children:Object(v.jsx)("a",{className:e.button,"data-testid":"resumeOption",variant:"outlined",href:B.a,"data-block":"Resumemenuitemmobile","aria-label":"Resume",children:Object(v.jsx)(C.a,{variant:"button",children:"Resume"})})})]})})}var E=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,156))})),F=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,160))})),T=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,161))})),U=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,158))})),V=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(9)]).then(n.bind(null,157))})),G=Object(b.a)({palette:{type:"light",primary:{main:"#fdff95"},secondary:{main:"#ffbf0d"},action:{hoverOpacity:.09}},typography:{fontFamily:"Nunito",fontSize:16}});G=Object(l.a)(G);function K(e){var t=S(),n=Object(j.a)(G.breakpoints.down("sm"));return Object(v.jsx)(d.a,{theme:G,children:Object(v.jsx)("div",{className:t.root,children:Object(v.jsxs)(a.Suspense,{fallback:Object(v.jsx)(R,{}),children:[Object(v.jsx)(u.a,{}),Object(v.jsx)(E,{isMobile:n,"data-testid":"header"}),n?Object(v.jsx)(q,{}):null,Object(v.jsx)(M,Object(s.a)(Object(s.a)({},e),{},{children:Object(v.jsx)(F,{})})),Object(v.jsx)(U,{}),Object(v.jsx)(V,{"data-testid":"projectsSection"}),Object(v.jsx)(w,Object(s.a)(Object(s.a)({},e),{},{children:Object(v.jsx)(m.a,{color:"secondary","data-block":"backtotopbutton","data-testid":"backtoTopButton",size:"large","aria-label":"scroll back to top",children:Object(v.jsx)(h.a,{fontSize:"large"})})})),Object(v.jsx)(T,{isMobile:n})]})})})}r.a.initialize("UA-205064366-1"),r.a.pageview(window.location.pathname+window.location.search),c.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(K,{})}),document.getElementById("root"))},64:function(e,t,n){"use strict";t.a=n.p+"static/media/ArshadResume.e3e2046f.pdf"},86:function(e,t,n){}},[[100,2,3]]]);
//# sourceMappingURL=main.5d18e9e7.chunk.js.map