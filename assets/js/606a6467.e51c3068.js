"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[69984],{2276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});n(67294);var s=n(85893),o=n(11151);const a={title:"Contract Upgrades with Incompatible Changes",sidebar_position:4},c=void 0,r={unversionedId:"build/best-practices/contract-upgrades",id:"build/best-practices/contract-upgrades",title:"Contract Upgrades with Incompatible Changes",description:"Problem",source:"@site/docs/build/best-practices/contract-upgrades.md",sourceDirName:"build/best-practices",slug:"/build/best-practices/contract-upgrades",permalink:"/docs/next/build/best-practices/contract-upgrades",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/build/best-practices/contract-upgrades.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1695045362,formattedLastUpdatedAt:"Sep 18, 2023",sidebarPosition:4,frontMatter:{title:"Contract Upgrades with Incompatible Changes",sidebar_position:4},sidebar:"build",previous:{title:"Security Best Practices",permalink:"/docs/next/build/best-practices/security-best-practices"},next:{title:"Development Standards",permalink:"/docs/next/build/best-practices/project-development-tips"}},i={},d=[{value:"Problem",id:"problem",level:3},{value:"Solution",id:"solution",level:3}];function l(e){const t=Object.assign({h3:"h3",p:"p",a:"a",code:"code",em:"em",ol:"ol",li:"li",strong:"strong"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"problem",children:"Problem"}),"\n",(0,s.jsx)(t.p,{children:"I have an incompatible upgrade for a contract. How can I deploy this?"}),"\n",(0,s.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(t.p,{children:"Please don't perform incompatible upgrades between contract versions in the same account.\nThere is too much that can go wrong."}),"\n",(0,s.jsxs)(t.p,{children:["You can make ",(0,s.jsx)(t.a,{href:"/docs/next/cadence/language/contract-updatability",children:"compatible upgrades"})," and then run a post-upgrade function on the new contract code if needed."]}),"\n",(0,s.jsxs)(t.p,{children:["If you must replace your contract rather than update it,\nthe simplest solution is to add or increase a suffix on any named paths in the contract code\n(e.g. ",(0,s.jsx)(t.code,{children:"/public/MyProjectVault"})," becomes ",(0,s.jsx)(t.code,{children:"/public/MyProjectVault002"}),") in addition to making the incompatible changes,\nthen create a new account and deploy the updated contract there."]}),"\n",(0,s.jsxs)(t.p,{children:["\u26a0\ufe0f Flow identifies types relative to addresses, so you will also need to provide ",(0,s.jsx)(t.em,{children:"upgrade transactions"})," to exchange the old contract's resources for the new contract's ones. Make sure to inform users as soon as possible when and how they will need to perform this task."]}),"\n",(0,s.jsx)(t.p,{children:"If you absolutely must keep the old address when making an incompatible upgrade, then you do so at your own risk. Make sure you perform the following actions in this exact order:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Delete any resources used in the contract account, e.g. an Admin resource."}),"\n",(0,s.jsx)(t.li,{children:"Delete the contract from the account."}),"\n",(0,s.jsx)(t.li,{children:"Deploy the new contract to the account."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u26a0\ufe0f Note that if any user accounts contain ",(0,s.jsx)(t.code,{children:"structs"})," or ",(0,s.jsx)(t.code,{children:"resources"})," from the ",(0,s.jsx)(t.em,{children:"old"})," version of the contract that have been replaced with incompatible versions in the new one, ",(0,s.jsx)(t.strong,{children:"they will not load and will cause transactions that attempt to access them to crash"}),". For this reason, once any users have received ",(0,s.jsx)(t.code,{children:"structs"})," or ",(0,s.jsx)(t.code,{children:"resources"})," from the contract, this method of making an incompatible upgrade should not be attempted!"]})]})}const u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);