(this["webpackJsonpportfolio-v2.0"]=this["webpackJsonpportfolio-v2.0"]||[]).push([[10],{158:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var i=t(131),r=t(135),n=t(104),o=t(156),s=(t(0),t(119)),c=Object(s.a)((function(){return{root:{backgroundColor:"#ffffff",padding:"1rem"},projectsLink:{minHeight:0},projectsCard:{},githubLinksAnchor:{"&:visited":{color:"#000000"},"&:link":{color:"#000000"}}}}),{name:"Projects"}),l=t(152),d=t(155),h=t(154),p=t(153),u=t(143),b=t(160),j=t(151),g=t(134),f=t(142),k=Object(s.a)((function(e){return{root:{backgroundColor:"#ffffff",padding:"1rem"},githubLinksAnchor:{"&:visited":{color:"#000000"},"&:link":{color:"#000000"}},LanguageChip:{margin:"0.3rem",borderRadius:"5px",padding:"0.5rem",fontWeight:"bold"}}}),{name:"ProjectCard"}),m=t(3);function x(e){var a=e.heading,t=e.description,i=e.languages,r=e.linkAriaLabel,o=e.repoLink,s=e.siteLink,c=e.shopLink,x=k(),L=function(e){switch(e){case"Kotlin":return Object(m.jsx)(f.g,{});case"React Native":case"ReactJS":return Object(m.jsx)(f.j,{});case"Redux toolkit":return Object(m.jsx)(f.k,{});case"Tailwind CSS":return Object(m.jsx)(f.n,{});case"NextJS":return Object(m.jsx)(f.i,{});case"Material UI":return Object(m.jsx)(f.h,{});case"Styled components":return Object(m.jsx)(f.m,{});case"HTML":return Object(m.jsx)(f.c,{});case"CSS":return Object(m.jsx)(f.a,{});case"Javascript":return Object(m.jsx)(f.e,{});case"JQuery":return Object(m.jsx)(f.f,{});case"Java":return Object(m.jsx)(f.d,{});case"SQLite":return Object(m.jsx)(f.l,{});default:return null}};return Object(m.jsxs)(l.a,{raised:!0,className:x.root,children:[Object(m.jsx)(p.a,{id:"heading",title:a,"data-testid":"projectHeading"}),Object(m.jsxs)(h.a,{children:[Object(m.jsx)(n.a,{variant:"body2",children:t}),Object(m.jsxs)(n.a,{variant:"overline",children:[Object(m.jsx)("br",{}),i.map((function(e){return Object(m.jsx)(u.a,{icon:L(e),color:"secondary",label:e,className:x.LanguageChip,"data-testid":"languageChip"},e)}))]})]}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)(b.a,{title:"Github Repo",arrow:!0,children:Object(m.jsx)(j.a,{"data-testid":"githublink","data-block":"projectlink",role:"button",color:"secondary","aria-label":r,href:o,children:Object(m.jsx)(g.b,{})})}),c&&Object(m.jsx)(b.a,{title:"Play Store Link",arrow:!0,children:Object(m.jsx)(j.a,{"data-testid":"shoplink","data-block":"shoplink",role:"button",color:"secondary","aria-label":r,href:c,children:Object(m.jsx)(f.b,{})})}),s?Object(m.jsx)(b.a,{title:"Live Site Link",arrow:!0,children:Object(m.jsx)(j.a,{"data-testid":"externalSiteLink","data-block":"projectLinkToSite",role:"button",color:"secondary","aria-labelledby":a,href:s,children:Object(m.jsx)(g.a,{})})}):null]})]})}var L=[{heading:"Android App | Nimaz",description:"An app that calculates Muslim Prayer times and displays it in a clean UI. Features are Alarms for each prayer, Tasbeeh counter, Qibla compass, Names of Allah with translation and transliterations",languages:["Kotlin"],linkAriaLabel:"link to Google play store for Nimaz App",shopLink:"https://play.google.com/store/apps/details?id=com.arshadshah.nimaz&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",repoLink:"https://github.com/arshad-shah/Nimaz"},{heading:"Uber Clone",description:"A clone app of uber in react native, for the purpose of learning redux state management.",languages:["React Native","Redux toolkit","Tailwind CSS"],linkAriaLabel:"link to Github for Uber Clone repo",repoLink:"https://github.com/arshad-shah/uber-clone"},{heading:"Android App | MedicineReminder",description:"A reminder designed for medicine doses, the primary focus of the app is to show a notification when it is time for a medicine dose, it uses sqlite for storage of the reminders, uses alarm manager for showing notifications.",languages:["Java","SQLite"],linkAriaLabel:"link to Github for MedicineReminder App",repoLink:"https://github.com/arshad-shah/medicineReminder"},{heading:"Chat App",description:"A chat app created in nextjs, styled components, and Material UI with firebase database for storage to learn server side rendering",languages:["ReactJS","NextJS","Material UI","Styled components"],linkAriaLabel:"link to Github for Chat App repo",repoLink:"https://github.com/arshad-shah/chatty"},{heading:"Portfolio website version 1.0",description:"A Portfolio site that contains all the work i have done so far. Includes work from college such as exercises, projects and also from outside college such as the android app.This is the first version written in pure HTML, CSS and javascript with a pinch of jquery.",languages:["HTML","CSS","Javascript","JQuery"],linkAriaLabel:"link to Github for portfolio version 1",repoLink:"https://github.com/arshad-shah/portfoliov1",siteLink:"https://arshad-shah.github.io/portfoliov1/"},{heading:"Portfolio website version 2.0",description:"The current version of the Portfolio site that contains all the work i have done so far. Includes work from college such as exercises, projects and also from outside college such as the android app.This is the second version written in javascript using the React framework, and designed using Material UI.",languages:["HTML","Javascript","ReactJS","Material UI"],linkAriaLabel:"link to Github for portfolio version 2",repoLink:"https://github.com/arshad-shah/portfolio-v2"}];function O(){var e=c();return Object(m.jsxs)(i.a,{className:e.root,children:[Object(m.jsx)(r.a,{className:e.projectsLink,id:"projects"}),Object(m.jsx)(n.a,{align:"center",gutterBottom:!0,variant:"h2",children:"Projects"}),Object(m.jsx)(o.a,{container:!0,spacing:4,justifyContent:"space-around",alignContent:"center",alignItems:"center",children:L.map((function(e,a){return Object(m.jsx)(o.a,{"aria-label":"ProjectCard",item:!0,lg:4,xs:12,sm:6,children:Object(m.jsx)(x,{heading:e.heading,description:e.description,languages:e.languages,linkAriaLabel:e.linkAriaLabel,repoLink:e.repoLink,siteLink:e.siteLink,shopLink:e.shopLink})},a)}))})]})}}}]);
//# sourceMappingURL=10.448ea4aa.chunk.js.map