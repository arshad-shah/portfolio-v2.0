(this["webpackJsonpportfolio-v2.0"]=this["webpackJsonpportfolio-v2.0"]||[]).push([[12],{180:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return S}));var i=t(5),r=t(144),n=t(157),o=t(146),s=t(181),c=t(10),l=(t(1),t(184)),d=t(187),h=t(186),p=t(185),u=t(175),b=t(174),g=t(183),j=t(68),f=t(156),m=t(3),k="ProjectCard",x={root:"".concat(k,"-root"),githubLinksAnchor:"".concat(k,"-githubLinksAnchor"),LanguageChip:"".concat(k,"-LanguageChip")},L=Object(c.a)(l.a)((function(e){var a;e.theme;return a={},Object(i.a)(a,"&.".concat(x.root),{backgroundColor:"#ffffff",padding:"1rem"}),Object(i.a)(a,"& .".concat(x.githubLinksAnchor),{"&:visited":{color:"#000000"},"&:link":{color:"#000000"}}),Object(i.a)(a,"& .".concat(x.LanguageChip),{margin:"0.3rem",borderRadius:"5px",padding:"0.5rem",fontWeight:"bold"}),a}));function O(e){var a=e.heading,t=e.description,i=e.languages,r=e.linkAriaLabel,n=e.repoLink,s=e.siteLink,c=e.shopLink,l=function(e){switch(e){case"Kotlin":return Object(m.jsx)(f.g,{});case"React Native":case"ReactJS":return Object(m.jsx)(f.j,{});case"Redux toolkit":return Object(m.jsx)(f.k,{});case"Tailwind CSS":return Object(m.jsx)(f.n,{});case"NextJS":return Object(m.jsx)(f.i,{});case"Material UI":return Object(m.jsx)(f.h,{});case"Styled components":return Object(m.jsx)(f.m,{});case"HTML":return Object(m.jsx)(f.c,{});case"CSS":return Object(m.jsx)(f.a,{});case"Javascript":return Object(m.jsx)(f.e,{});case"JQuery":return Object(m.jsx)(f.f,{});case"Java":return Object(m.jsx)(f.d,{});case"SQLite":return Object(m.jsx)(f.l,{});default:return null}};return Object(m.jsxs)(L,{raised:!0,className:x.root,children:[Object(m.jsx)(p.a,{id:"heading",title:a,"data-testid":"projectHeading"}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(o.a,{variant:"body2",children:t}),Object(m.jsxs)(o.a,{variant:"overline",children:[Object(m.jsx)("br",{}),i.map((function(e){return Object(m.jsx)(u.a,{icon:l(e),color:"secondary",label:e,className:x.LanguageChip,"data-testid":"languageChip"},e)}))]})]}),Object(m.jsxs)(d.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",alignContents:"center",borderTop:"1px solid #e0e0e0"},children:[Object(m.jsx)(b.a,{title:"Github Repo",arrow:!0,children:Object(m.jsx)(g.a,{"data-testid":"githublink","data-block":"projectlink",role:"button",color:"secondary",sx:{transition:"all 0.3s ease-out","&:hover":{boxShadow:"0px 0px 10px #e0e0e0",transform:"scale(1.2)",transition:"all 0.13s ease-in"}},"aria-label":r,href:n,size:"large",children:Object(m.jsx)(j.d,{})})}),c&&Object(m.jsx)(b.a,{title:"Play Store Link",arrow:!0,children:Object(m.jsx)(g.a,{"data-testid":"shoplink","data-block":"shoplink",role:"button",color:"secondary",sx:{transition:"all 0.3s ease-out","&:hover":{boxShadow:"0px 0px 10px #e0e0e0",transform:"scale(1.2)",transition:"all 0.13s ease-in"}},"aria-label":r,href:c,size:"large",children:Object(m.jsx)(f.b,{})})}),s?Object(m.jsx)(b.a,{title:"Live Site Link",arrow:!0,children:Object(m.jsx)(g.a,{"data-testid":"externalSiteLink","data-block":"projectLinkToSite",role:"button",color:"secondary",sx:{transition:"all 0.3s ease-out","&:hover":{boxShadow:"0px 0px 10px #e0e0e0",transform:"scale(1.2)",transition:"all 0.13s ease-in"}},"aria-labelledby":a,href:s,size:"large",children:Object(m.jsx)(j.c,{})})}):null]})]})}var v=[{heading:"Android App | Nimaz",description:"An app that calculates Muslim Prayer times and displays it in a clean UI. Features are Alarms for each prayer, Tasbeeh counter, Qibla compass, Names of Allah with translation and transliterations",languages:["Kotlin"],linkAriaLabel:"link to Google play store for Nimaz App",shopLink:"https://play.google.com/store/apps/details?id=com.arshadshah.nimaz&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",repoLink:"https://github.com/arshad-shah/Nimaz"},{heading:"Uber Clone",description:"A clone app of uber in react native, for the purpose of learning redux state management. it uses google api's for autocomplete, distance measurement, and map for start and finish of journey.",languages:["React Native","Redux toolkit","Tailwind CSS"],linkAriaLabel:"link to Github for Uber Clone repo",repoLink:"https://github.com/arshad-shah/uber-clone"},{heading:"Android App | MedicineReminder",description:"A reminder designed for medicine doses, the primary focus of the app is to show a notification when it is time for a medicine dose, it uses sqlite for storage of the reminders, uses alarm manager for showing notifications.",languages:["Java","SQLite"],linkAriaLabel:"link to Github for MedicineReminder App",repoLink:"https://github.com/arshad-shah/medicineReminder"},{heading:"Chat App",description:"A chat app created in nextjs, styled components, and Material UI with firebase database for storage to learn server side rendering. it uses firebase authentication for login and signup, and firebase firestore for storage of messages. ",languages:["ReactJS","NextJS","Material UI","Styled components"],linkAriaLabel:"link to Github for Chat App repo",repoLink:"https://github.com/arshad-shah/chatty"},{heading:"Portfolio website version 1.0",description:"The version 1 of my Portfolio site that contains all the work i have done so far. Includes work from college such as exercises, projects and also from outside college such as the android app.This version is written in pure HTML, CSS and javascript with a pinch of jquery.",languages:["HTML","CSS","Javascript","JQuery"],linkAriaLabel:"link to Github for portfolio version 1",repoLink:"https://github.com/arshad-shah/portfoliov1",siteLink:"https://arshad-shah.github.io/portfoliov1/"},{heading:"Portfolio website version 2.0",description:"The current version of the Portfolio site that contains all the work i have done so far.Includes work from college such as exercises, projects and also from outside college such as the android app.This is the second version written in javascript using the React framework, and designed using Material UI. The site has google analytics implemented with google tag manager and collects data for click events and page views.",languages:["HTML","Javascript","ReactJS","Material UI"],linkAriaLabel:"link to Github for portfolio version 2",repoLink:"https://github.com/arshad-shah/portfolio-v2"}],A="Projects",w={root:"".concat(A,"-root"),projectsLink:"".concat(A,"-projectsLink"),projectsCard:"".concat(A,"-projectsCard"),githubLinksAnchor:"".concat(A,"-githubLinksAnchor")},y=Object(c.a)(r.a)((function(e){var a;e.theme;return a={},Object(i.a)(a,"&.".concat(w.root),{backgroundColor:"#ffffff",padding:"1rem"}),Object(i.a)(a,"& .".concat(w.projectsLink),{minHeight:0}),Object(i.a)(a,"& .".concat(w.projectsCard),{}),Object(i.a)(a,"& .".concat(w.githubLinksAnchor),{"&:visited":{color:"#000000"},"&:link":{color:"#000000"}}),a}));function S(){return Object(m.jsxs)(y,{className:w.root,children:[Object(m.jsx)(n.a,{className:w.projectsLink,id:"projects"}),Object(m.jsx)(o.a,{align:"center",gutterBottom:!0,variant:"h2",children:"Projects"}),Object(m.jsx)(s.a,{container:!0,spacing:4,alignItems:"center",alignContent:"center",justifyContent:"space-around",children:v.map((function(e,a){return Object(m.jsx)(s.a,{"aria-label":"ProjectCard",item:!0,lg:4,md:6,sm:10,xs:12,children:Object(m.jsx)(O,{heading:e.heading,description:e.description,languages:e.languages,linkAriaLabel:e.linkAriaLabel,repoLink:e.repoLink,siteLink:e.siteLink,shopLink:e.shopLink})},a)}))})]})}}}]);
//# sourceMappingURL=12.1218f5f3.chunk.js.map