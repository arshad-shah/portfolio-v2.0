(this["webpackJsonpportfolio-v2.0"]=this["webpackJsonpportfolio-v2.0"]||[]).push([[1],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a(9),i=a.n(o),c=(a(86),a(50)),r=a(26),s=a(70),b=a(130),l=a(126),d=a(118),j=a(127),u=a(128),m=a(69),p=a.n(m),h=a(117),O=a(32),f=a(119),x=a(120),g=a(121),k=a(2),v=Object(h.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},rootMobile:{position:"fixed",bottom:e.spacing(10),right:e.spacing(2)}}})),y=function(e){var t=Object(O.a)(),a=Object(d.a)(t.breakpoints.down("sm")),n=e.children,o=v(),i=Object(f.a)({disableHysteresis:!0,threshold:300});return Object(k.jsx)(x.a,{in:i,children:Object(k.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation","data-block":"backtotopbutton",className:a?o.rootMobile:o.root,children:n})})},w=function(e){var t=e.children,a=Object(f.a)({disableHysteresis:!0,threshold:300});return a?Object(k.jsx)(g.a,{out:a.toString(),timeout:1e3,children:Object(k.jsx)("div",{children:t})}):Object(k.jsx)(g.a,{in:!0,timeout:1e3,children:Object(k.jsx)("div",{children:t})})},M=a(14),z=a.p+"static/media/background.abc1dc3c.webp",N=a.p+"static/media/backgroundmobile.6ab1743c.webp",I=Object(h.a)((function(e){var t;return{root:(t={minHeight:"100vh",minWidth:"100%"},Object(M.a)(t,e.breakpoints.down("xs"),{backgroundImage:"url(".concat(N,")")}),Object(M.a)(t,"backgroundImage","url(".concat(z,")")),Object(M.a)(t,"backgroundRepeat","no-repeat"),Object(M.a)(t,"backgroundSize","cover"),Object(M.a)(t,"backgroundAttachment","fixed"),t)}}),{name:"App"}),S=a(122),A=a(123),C=Object(h.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",alignContent:"center",flexWrap:"nowrap",backgroundColor:"#ffffff",minHeight:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"fixed"},name:{padding:"1rem"},progress:{padding:"1rem"}}}),{name:"Loading"});function P(){var e=C();return Object(k.jsxs)("div",{className:e.root,children:[Object(k.jsx)(S.a,{className:e.progress,color:"secondary",size:100,thickness:5}),Object(k.jsx)(A.a,{className:e.name,variant:"h3",children:"Loading..."})]})}var R=a(129),L=a(124),D=a(125),H=a(45),W=a(64),B=Object(h.a)((function(e){return{button:{"&:hover":{backgroundColor:"transparent"},color:e.palette.text.primary,fontWeight:"bold",textDecoration:"none",cursor:"pointer",borderRadius:"0.5rem",transition:"all 0.5s ease"},mobileMenuList:{display:"flex",flexDirection:"row",bottom:"0",position:"fixed",width:"100%",backgroundColor:e.palette.primary.main,zIndex:"100",padding:"10px"},mobileMenuItem:{justifyContent:"center",padding:"10px"}}}));function J(){var e=B();return Object(k.jsx)(R.a,{"aria-label":"mobileMenu","data-toggle":"mobileMenu",children:Object(k.jsxs)(L.a,{className:e.mobileMenuList,children:[Object(k.jsx)(D.a,{button:!0,className:e.mobileMenuItem,children:Object(k.jsx)(H.Link,{className:e.button,"data-block":"Aboutmemenuitemmobile",to:"aboutme","data-testid":"aboutmeOption",spy:!0,smooth:!0,"aria-label":"About Me",children:Object(k.jsx)(A.a,{variant:"button",children:"About Me"})})}),Object(k.jsx)(D.a,{button:!0,className:e.mobileMenuItem,children:Object(k.jsx)(H.Link,{className:e.button,"data-block":"Projectsmenuitemmobile",to:"projects","data-testid":"projectsOption",spy:!0,smooth:!0,"aria-label":"Projects",children:Object(k.jsx)(A.a,{variant:"button",children:"Projects"})})}),Object(k.jsx)(D.a,{button:!0,className:e.mobileMenuItem,children:Object(k.jsx)("a",{className:e.button,"data-testid":"resumeOption",variant:"outlined",href:W.a,"data-block":"Resumemenuitemmobile","aria-label":"Resume",children:Object(k.jsx)(A.a,{variant:"button",children:"Resume"})})})]})})}var q=Object(n.lazy)((function(){return a.e(7).then(a.bind(null,158))})),E=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,162))})),F=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,163))})),T=Object(n.lazy)((function(){return a.e(8).then(a.bind(null,160))})),U=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(4),a.e(9)]).then(a.bind(null,159))})),V=Object(s.a)({palette:{type:"light",primary:{main:"#fdff95"},secondary:{main:"#ffbf0d"},action:{hoverOpacity:.09}},typography:{fontFamily:"Nunito",fontSize:16}});V=Object(b.a)(V);function G(e){var t=I(),a=Object(d.a)(V.breakpoints.down("sm"));return Object(k.jsx)(l.a,{theme:V,children:Object(k.jsx)("div",{className:t.root,children:Object(k.jsxs)(n.Suspense,{fallback:Object(k.jsx)(P,{}),children:[Object(k.jsx)(j.a,{}),Object(k.jsx)(q,{isMobile:a,"data-testid":"header"}),a?Object(k.jsx)(J,{}):null,Object(k.jsx)(w,Object(r.a)(Object(r.a)({},e),{},{children:Object(k.jsx)(E,{isMobile:a})})),Object(k.jsx)(T,{}),Object(k.jsx)(U,{"data-testid":"projectsSection"}),Object(k.jsx)(y,Object(r.a)(Object(r.a)({},e),{},{children:Object(k.jsx)(u.a,{color:"secondary","data-block":"backtotopbutton","data-testid":"backtoTopButton",size:"large","aria-label":"scroll back to top",children:Object(k.jsx)(p.a,{fontSize:"large"})})})),Object(k.jsx)(F,{isMobile:a})]})})})}c.a.initialize("UA-205064366-1"),c.a.pageview(window.location.pathname+window.location.search),i.a.render(Object(k.jsx)(G,{}),document.getElementById("root"))},64:function(e,t,a){"use strict";t.a=a.p+"static/media/ArshadResume.e3e2046f.pdf"},86:function(e,t,a){}},[[100,2,3]]]);
//# sourceMappingURL=main.60e57923.chunk.js.map