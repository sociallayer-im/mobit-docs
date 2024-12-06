"use strict";(self.webpackChunkmobit_docs=self.webpackChunkmobit_docs||[]).push([[4674],{46102:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>x,default:()=>f,frontMatter:()=>p,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"rgbpp-types","title":"RGBPP","description":"RGBPP\uff08RGB++\uff09\u662f\u4e00\u4e2a\u8de8\u94fe\u8d44\u4ea7\u7cfb\u7edf\uff0c\u901a\u8fc7\u9501\u5b9a\u811a\u672c\uff08Locks\uff09\u548c\u89e3\u9501\u811a\u672c\uff08Unlocks\uff09\u5b9e\u73b0\u8d44\u4ea7\u5728\u6bd4\u7279\u5e01\u7f51\u7edc\u548c CKB \u7f51\u7edc\u95f4\u7684\u5b89\u5168\u8f6c\u79fb\u3002\u4efb\u4f55\u4e0e RGBPP Lock \u5173\u8054\u7684 XUDT\uff08\u540c\u8d28\u5316\u4ee3\u5e01\uff09\u6216 Spore\uff08\u975e\u540c\u8d28\u5316\u4ee3\u5e01\uff09\u90fd\u53ef\u4ee5\u88ab\u89c6\u4e3a RGBPP \u8d44\u4ea7\u3002","source":"@site/docs/rgbpp-types.mdx","sourceDirName":".","slug":"/rgbpp-types","permalink":"/mobit-docs/rgbpp-types","draft":false,"unlisted":false,"editUrl":"https://github.com/sociallayer-im/mobit-docs/tree/main/docs/rgbpp-types.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docs","previous":{"title":"Token Types","permalink":"/mobit-docs/token-types"}}');var s=n(74848),l=n(28453),o=n(40964),t=n(87210),c=n(96540),a=n(43083);const d=e=>{let{code:r}=e;const n=(0,c.useRef)(null);return(0,c.useEffect)((()=>{(async()=>{if(n.current)try{const e=(await a.A.render("mermaid-diagram",r)).svg;n.current.innerHTML=e}catch(e){console.error("Error rendering Mermaid diagram:",e)}})()}),[r]),(0,s.jsx)("div",{ref:n})},p={sidebar_position:5},x="RGBPP",h={},u=[{value:"\u7cfb\u7edf\u67b6\u6784",id:"\u7cfb\u7edf\u67b6\u6784",level:2},{value:"1. RGBPP \u9501\u5b9a\u811a\u672c (Locks)",id:"1-rgbpp-\u9501\u5b9a\u811a\u672c-locks",level:2},{value:"2. RGBPP \u89e3\u9501\u811a\u672c (Unlocks)",id:"2-rgbpp-\u89e3\u9501\u811a\u672c-unlocks",level:3},{value:"\u91cd\u8981\u8bf4\u660e",id:"\u91cd\u8981\u8bf4\u660e",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u67e5\u8be2\u4f18\u5316",id:"\u67e5\u8be2\u4f18\u5316",level:3},{value:"\u6027\u80fd\u4f18\u5316",id:"\u6027\u80fd\u4f18\u5316",level:3}];function m(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"rgbpp",children:"RGBPP"})}),"\n",(0,s.jsx)(r.p,{children:"RGBPP\uff08RGB++\uff09\u662f\u4e00\u4e2a\u8de8\u94fe\u8d44\u4ea7\u7cfb\u7edf\uff0c\u901a\u8fc7\u9501\u5b9a\u811a\u672c\uff08Locks\uff09\u548c\u89e3\u9501\u811a\u672c\uff08Unlocks\uff09\u5b9e\u73b0\u8d44\u4ea7\u5728\u6bd4\u7279\u5e01\u7f51\u7edc\u548c CKB \u7f51\u7edc\u95f4\u7684\u5b89\u5168\u8f6c\u79fb\u3002\u4efb\u4f55\u4e0e RGBPP Lock \u5173\u8054\u7684 XUDT\uff08\u540c\u8d28\u5316\u4ee3\u5e01\uff09\u6216 Spore\uff08\u975e\u540c\u8d28\u5316\u4ee3\u5e01\uff09\u90fd\u53ef\u4ee5\u88ab\u89c6\u4e3a RGBPP \u8d44\u4ea7\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"\u7cfb\u7edf\u67b6\u6784",children:"\u7cfb\u7edf\u67b6\u6784"}),"\n",(0,s.jsx)(d,{code:"\ngraph TD\n  A[RGBPP Asset] --\x3e B[XUDT]\n  A --\x3e C[Spore]\n  B --\x3e D[Associated RGBPP Lock]\n  C --\x3e E[Associated RGBPP Lock]\n  D --\x3e F[Bitcoin Network]\n  E --\x3e F\n"}),"\n",(0,s.jsx)(r.h2,{id:"1-rgbpp-\u9501\u5b9a\u811a\u672c-locks",children:"1. RGBPP \u9501\u5b9a\u811a\u672c (Locks)"}),"\n",(0,s.jsx)(r.p,{children:"RGBPP \u9501\u5b9a\u811a\u672c\uff08Locks\uff09\u662f\u7cfb\u7edf\u7684\u6838\u5fc3\u7ec4\u6210\u90e8\u5206\u4e4b\u4e00\uff0c\u8d1f\u8d23\u5728\u6bd4\u7279\u5e01\u7f51\u7edc\u548c CKB \u7f51\u7edc\u4e4b\u95f4\u5b89\u5168\u5730\u9501\u5b9a\u548c\u8f6c\u79fb\u8d44\u4ea7\u3002\u6bcf\u4e2a\u9501\u5b9a\u811a\u672c\u90fd\u6709\u552f\u4e00\u7684\u6807\u8bc6\u7b26\uff0c\u5e76\u4e14\u5173\u8054\u5230\u7279\u5b9a\u7684\u6bd4\u7279\u5e01\u4ea4\u6613\u548c CKB \u4ea4\u6613\u3002\u901a\u8fc7\u8fd9\u4e9b\u811a\u672c\uff0c\u7cfb\u7edf\u80fd\u591f\u786e\u4fdd\u8d44\u4ea7\u7684\u5b89\u5168\u6027\u548c\u4e0d\u53ef\u7be1\u6539\u6027\u3002"}),"\n",(0,s.jsx)(t.A,{typeName:"rgbpp_locks",typeDescription:"RGBPPLocks \u7c7b\u578b\u8868\u793a\u4e0e RGBPP \u8d44\u4ea7\u76f8\u5173\u7684\u9501\u5b9a\u811a\u672c\u3002",fields:[{name:"lock_id",type:"bytea!",description:"\u9501\u5b9a\u811a\u672c\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002\u683c\u5f0f\uff1a\u5b57\u8282\u6570\u7ec4\uff08\u4ee5 \\\\x \u524d\u7f00\u7684\u5341\u516d\u8fdb\u5236\uff09\u3002\u4f8b\u5982\uff1a\\\\x430e98dc1272960a30f7cbd4bcbb4c6343021aff942c36fa1561e90129b2a9b5\u3002"},{name:"btc_txid",type:"bytea!",description:"\u4e0e\u9501\u5b9a\u811a\u672c\u5173\u8054\u7684\u6bd4\u7279\u5e01\u4ea4\u6613 ID\u3002\u683c\u5f0f\uff1a\u5b57\u8282\u6570\u7ec4\uff08\u4ee5 \\\\x \u524d\u7f00\u7684\u5341\u516d\u8fdb\u5236\uff09\u3002\u4f8b\u5982\uff1a\\\\xb5a9b22901e96115fa362c94ff1a0243634cbbbcd4cbf7300a967212dc980e43\u3002"},{name:"out_index",type:"Int!",description:"\u6bd4\u7279\u5e01\u4ea4\u6613\u4e2d\u7684\u8f93\u51fa\u7d22\u5f15\u3002\u7c7b\u578b\uff1a\u6574\u6570\u3002\u4f8b\u5982\uff1a1\u3002"},{name:"tx",type:"bytea!",description:"\u4e0e\u9501\u5b9a\u811a\u672c\u5173\u8054\u7684 CKB \u4ea4\u6613\u54c8\u5e0c\u3002\u683c\u5f0f\uff1a\u5b57\u8282\u6570\u7ec4\uff08\u4ee5 \\\\x \u524d\u7f00\u7684\u5341\u516d\u8fdb\u5236\uff09\u3002\u4f8b\u5982\uff1a\\\\xabb260b6312831bc484656f3b2d4bf48e7a59d3ff35f21c4453fc46e0a13f484\u3002"}]}),"\n",(0,s.jsx)(r.p,{children:"\u901a\u8fc7\u4ee5\u4e0b GraphQL \u67e5\u8be2\uff0c\u60a8\u53ef\u4ee5\u83b7\u53d6\u6700\u65b0\u7684 RGBPP \u9501\u5b9a\u811a\u672c\u5217\u8868\uff1a"}),"\n",(0,s.jsx)(r.p,{children:"\u67e5\u8be2 RGBPP Locks\uff1a"}),"\n",(0,s.jsx)(o.A,{defaultQuery:"query GetRgbppLocks {\n  rgbpp_locks(limit: 5) {\n    tx\n    btc_txid\n    lock_id\n    out_index\n  }\n}"}),"\n",(0,s.jsx)(r.h3,{id:"2-rgbpp-\u89e3\u9501\u811a\u672c-unlocks",children:"2. RGBPP \u89e3\u9501\u811a\u672c (Unlocks)"}),"\n",(0,s.jsx)(r.p,{children:"\u89e3\u9501\u811a\u672c\uff08Unlock Scripts\uff09\u5728 RGBPP \u4e2d\u626e\u6f14\u7740\u5173\u952e\u89d2\u8272\uff0c\u8d1f\u8d23\u9a8c\u8bc1\u9501\u5b9a\u811a\u672c\u4ee5\u5141\u8bb8\u8d44\u4ea7\u5728\u6bd4\u7279\u5e01\u7f51\u7edc\u548c CKB \u7f51\u7edc\u4e4b\u95f4\u7684\u8f6c\u79fb\u3002\u6bcf\u4e2a\u89e3\u9501\u811a\u672c\u90fd\u4e0e\u7279\u5b9a\u7684\u9501\u5b9a\u811a\u672c\u76f8\u5173\u8054\uff0c\u786e\u4fdd\u8d44\u4ea7\u7684\u5b89\u5168\u6027\u548c\u53ef\u8ffd\u6eaf\u6027\u3002"}),"\n",(0,s.jsx)(t.A,{typeName:"rgbpp_unlocks",typeDescription:"RGBPPUnlocks \u7c7b\u578b\u8868\u793a\u4e0e RGBPP \u8d44\u4ea7\u76f8\u5173\u7684\u89e3\u9501\u811a\u672c\u3002",fields:[{name:"unlock_id",type:"bytea!",description:"\u89e3\u9501\u811a\u672c\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002\u683c\u5f0f\uff1a\u5b57\u8282\u6570\u7ec4\uff08\u4ee5 \\\\x \u524d\u7f00\u7684\u5341\u516d\u8fdb\u5236\uff09\u3002"},{name:"version",type:"smallint!",description:"\u89e3\u9501\u811a\u672c\u7684\u7248\u672c\u53f7\u3002\u7c7b\u578b\uff1a\u5c0f\u6574\u6570\u3002"},{name:"input_len",type:"smallint!",description:"\u4ea4\u6613\u4e2d\u7684\u8f93\u5165\u6570\u91cf\u3002\u7c7b\u578b\uff1a\u5c0f\u6574\u6570\u3002"},{name:"output_len",type:"smallint!",description:"\u4ea4\u6613\u4e2d\u7684\u8f93\u51fa\u6570\u91cf\u3002\u7c7b\u578b\uff1a\u5c0f\u6574\u6570\u3002"},{name:"btc_tx",type:"bytea!",description:"\u5b8c\u6574\u7684\u6bd4\u7279\u5e01\u4ea4\u6613\u6570\u636e\u3002\u683c\u5f0f\uff1a\u5b57\u8282\u6570\u7ec4\uff08\u4ee5 \\\\x \u524d\u7f00\u7684\u5341\u516d\u8fdb\u5236\uff09\u3002"},{name:"btc_tx_proof",type:"bytea!",description:"\u6bd4\u7279\u5e01\u4ea4\u6613\u6709\u6548\u6027\u7684\u8bc1\u660e\u3002\u683c\u5f0f\uff1a\u5b57\u8282\u6570\u7ec4\uff08\u4ee5 \\\\x \u524d\u7f00\u7684\u5341\u516d\u8fdb\u5236\uff09\u3002"},{name:"tx",type:"bytea!",description:"\u4e0e\u89e3\u9501\u811a\u672c\u5173\u8054\u7684 CKB \u4ea4\u6613\u54c8\u5e0c\u3002\u683c\u5f0f\uff1a\u5b57\u8282\u6570\u7ec4\uff08\u4ee5 \\\\x \u524d\u7f00\u7684\u5341\u516d\u8fdb\u5236\uff09\u3002"}]}),"\n",(0,s.jsx)(r.p,{children:"\u67e5\u8be2 RGBPP Unlocks\uff1a"}),"\n",(0,s.jsx)(o.A,{defaultQuery:"query GetRgbppUnlocks {\n  rgbpp_unlocks(limit: 5) {\n    unlock_id\n    version\n    input_len\n    output_len\n    btc_tx\n    btc_tx_proof\n    tx\n  }\n}"}),"\n",(0,s.jsx)(r.h2,{id:"\u91cd\u8981\u8bf4\u660e",children:"\u91cd\u8981\u8bf4\u660e"}),"\n",(0,s.jsx)(r.admonition,{title:"\u8d44\u4ea7\u8bc6\u522b",type:"info",children:(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u4efb\u4f55\u5177\u6709\u5173\u8054 RGBPP Lock \u7684 XUDT \u6216 Spore \u90fd\u662f RGBPP \u8d44\u4ea7"}),"\n",(0,s.jsxs)(r.li,{children:["\u901a\u8fc7 ",(0,s.jsx)(r.code,{children:"rgbpp_locks"})," \u8868\u7684\u8bb0\u5f55\u6765\u786e\u8ba4\u8d44\u4ea7\u7684 RGBPP \u72b6\u6001"]}),"\n"]})}),"\n",(0,s.jsx)(r.admonition,{title:"\u6240\u6709\u6743\u67e5\u8be2",type:"caution",children:(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"GraphQL API \u4ec5\u63d0\u4f9b\u94fe\u4e0a\u6570\u636e\u67e5\u8be2"}),"\n",(0,s.jsx)(r.li,{children:"\u786e\u5b9a\u8d44\u4ea7\u5b9e\u9645\u6240\u6709\u8005\u9700\u8981\u4f7f\u7528 RGBPP SDK"}),"\n",(0,s.jsx)(r.li,{children:"SDK \u4f1a\u5904\u7406\u6bd4\u7279\u5e01\u4ea4\u6613\u9a8c\u8bc1\u548c\u6240\u6709\u6743\u8ffd\u8e2a"}),"\n"]})}),"\n",(0,s.jsx)(r.admonition,{title:"\u6570\u636e\u5173\u8054",type:"warning",children:(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"XUDT \u548c Spore \u901a\u8fc7\u5173\u8054\u7684 RGBPP Lock \u5b9e\u73b0\u8de8\u94fe\u80fd\u529b"}),"\n",(0,s.jsx)(r.li,{children:"\u4e00\u4e2a RGBPP Lock \u53ef\u4ee5\u540c\u65f6\u5173\u8054 XUDT \u6216 Spore"}),"\n"]})}),"\n",(0,s.jsx)(r.admonition,{title:"\u67e5\u8be2\u9650\u5236",type:"danger",children:(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u94fe\u4e0a\u6570\u636e\u53ea\u53cd\u6620\u8d44\u4ea7\u7684\u9501\u5b9a\u72b6\u6001"}),"\n",(0,s.jsx)(r.li,{children:"\u5b8c\u6574\u7684\u6240\u6709\u6743\u4fe1\u606f\u9700\u8981\u7ed3\u5408\u6bd4\u7279\u5e01\u7f51\u7edc\u6570\u636e"}),"\n",(0,s.jsx)(r.li,{children:"\u5efa\u8bae\u4f7f\u7528 SDK \u8fdb\u884c\u5b8c\u6574\u7684\u8d44\u4ea7\u67e5\u8be2\u548c\u9a8c\u8bc1"}),"\n"]})}),"\n",(0,s.jsx)(r.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,s.jsx)(r.h3,{id:"\u67e5\u8be2\u4f18\u5316",children:"\u67e5\u8be2\u4f18\u5316"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u8d44\u4ea7\u67e5\u8be2"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u4f7f\u7528\u5408\u9002\u7684\u7d22\u5f15\u5b57\u6bb5"}),"\n",(0,s.jsx)(r.li,{children:"\u53ea\u8bf7\u6c42\u5fc5\u8981\u7684\u5b57\u6bb5"}),"\n",(0,s.jsx)(r.li,{children:"\u5bf9\u5927\u91cf\u6570\u636e\u4f7f\u7528\u5206\u9875"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u72b6\u6001\u68c0\u67e5"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u9a8c\u8bc1 Lock \u662f\u5426\u6709\u6548"}),"\n",(0,s.jsx)(r.li,{children:"\u786e\u8ba4\u8d44\u4ea7\u662f\u5426\u88ab\u6d88\u8d39"}),"\n",(0,s.jsx)(r.li,{children:"\u786e\u8ba4\u8de8\u94fe\u72b6\u6001"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"\u6027\u80fd\u4f18\u5316",children:"\u6027\u80fd\u4f18\u5316"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u6279\u91cf\u67e5\u8be2"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u4f7f\u7528 GraphQL \u6279\u5904\u7406"}),"\n",(0,s.jsx)(r.li,{children:"\u5408\u5e76\u76f8\u5173\u67e5\u8be2"}),"\n",(0,s.jsx)(r.li,{children:"\u7f13\u5b58\u5e38\u7528\u6570\u636e"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u6570\u636e\u9a8c\u8bc1"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u672c\u5730\u7f13\u5b58\u9a8c\u8bc1\u7ed3\u679c"}),"\n",(0,s.jsx)(r.li,{children:"\u5f02\u6b65\u5904\u7406\u6bd4\u7279\u5e01\u786e\u8ba4"}),"\n",(0,s.jsx)(r.li,{children:"\u589e\u91cf\u66f4\u65b0\u72b6\u6001"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u901a\u8fc7\u7406\u89e3\u8fd9\u4e9b\u7ec4\u4ef6\u548c\u5b83\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6b63\u786e\u8bc6\u522b\u548c\u67e5\u8be2 RGBPP \u8d44\u4ea7\uff0c\u5e76\u5728\u9700\u8981\u8fdb\u884c\u6240\u6709\u6743\u9a8c\u8bc1\u65f6\u4f7f\u7528 SDK \u8fdb\u884c\u66f4\u6df1\u5165\u7684\u5206\u6790\u3002"}),"\n",(0,s.jsxs)(r.admonition,{title:"\u5f00\u53d1\u5efa\u8bae",type:"tip",children:[(0,s.jsx)(r.p,{children:"\u5728\u5f00\u53d1 RGBPP \u5e94\u7528\u65f6\uff0c\u5efa\u8bae\uff1a"}),(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u5148\u901a\u8fc7 GraphQL API \u83b7\u53d6\u57fa\u7840\u6570\u636e"}),"\n",(0,s.jsx)(r.li,{children:"\u4f7f\u7528 SDK \u9a8c\u8bc1\u5173\u952e\u4fe1\u606f"}),"\n",(0,s.jsx)(r.li,{children:"\u5b9e\u73b0\u9002\u5f53\u7684\u7f13\u5b58\u7b56\u7565"}),"\n",(0,s.jsx)(r.li,{children:"\u505a\u597d\u9519\u8bef\u5904\u7406\u548c\u91cd\u8bd5\u673a\u5236"}),"\n"]})]})]})}function f(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},87210:(e,r,n)=>{n.d(r,{A:()=>c});n(96540);var i=n(34164),s=n(92303),l=n(95293);const o={graphqlContainer:"graphqlContainer_txj9",light:"light_tjNd",dark:"dark_xDko",typeDescription:"typeDescription_l4MU",keyword:"keyword_CRfX",typeName:"typeName_VxqW",fields:"fields_Dmof",field:"field_mRXJ",fieldName:"fieldName_fK8b",colon:"colon_zlWV",fieldType:"fieldType_bW41",braces:"braces_l5fT"};var t=n(74848);function c(e){let{typeName:r,typeDescription:n,fields:c}=e;const{colorMode:a}=(0,l.G)();(0,s.A)();return(0,t.jsx)("div",{className:(0,i.A)(o.graphqlContainer,o[a],"theme-code-block"),children:(0,t.jsxs)("div",{className:o.typeHeader,children:[n&&(0,t.jsx)("div",{className:o.typeDescription,children:(0,t.jsxs)("span",{children:["# ",n]})}),(0,t.jsxs)("div",{className:o.codeBlock,children:[(0,t.jsx)("span",{className:o.keyword,children:"type"})," ",(0,t.jsx)("span",{className:o.typeName,children:r})," ",(0,t.jsx)("span",{className:o.braces,children:"{"}),(0,t.jsx)("div",{className:o.fields,children:c.map((e=>{let{name:r,type:n,description:i}=e;return(0,t.jsxs)("div",{className:o.field,"data-tooltip":i,children:[(0,t.jsx)("span",{className:o.fieldName,children:r}),(0,t.jsx)("span",{className:o.colon,children:":"})," ",(0,t.jsx)("span",{className:o.fieldType,children:n})]},r)}))}),(0,t.jsx)("span",{className:o.braces,children:"}"})]})]})})}},40964:(e,r,n)=>{n.d(r,{A:()=>g});var i=n(96540),s=n(86105),l=n(5e3),o=n(44939),t=n(72011),c=n(4671),a=n(61545),d=n(34066),p=n(30222),x=n(19337),h=n(54676),u=n(55629),m=n(36694),f=n(64198),j=n(92303),b=n(95293),y=n(74848);function g(e){let{defaultQuery:r,defaultVariables:n="{}",endpoint:g="https://unistate-ckb-test.unistate.io/v1/graphql"}=e;const k=(0,j.A)(),{colorMode:v}=(0,b.G)(),P="dark"===v,B=e=>e.replace(/\\/g,"\\\\");r=B(r);const G=r.includes("$")||r.includes("variables"),[R,A]=(0,i.useState)(g),[_,C]=(0,i.useState)(r),[N,S]=(0,i.useState)((()=>{if("string"==typeof n)return B(n);const e=g.includes("test")?"test":"main",r=n[e];return"string"==typeof r?B(r):JSON.stringify(r,null,2)})),[D,L]=(0,i.useState)(null),[T,w]=(0,i.useState)(!1);(0,i.useEffect)((()=>{try{const e=(0,f.G)(r);C(e)}catch(e){console.error("Failed to format initial query:",e)}}),[r]);const U=P?p.A:x.A;if(!k)return null;const M={color:"var(--ifm-color-emphasis-700)","&:hover":{color:"var(--ifm-color-primary)",backgroundColor:"var(--ifm-color-emphasis-200)"}},K={color:"var(--ifm-color-emphasis-700)",borderColor:"var(--ifm-color-emphasis-300)",fontSize:"0.75rem",minWidth:"auto",px:1,"&.Mui-selected, &:hover":{color:"var(--ifm-color-primary)",borderColor:"var(--ifm-color-primary)",backgroundColor:"var(--ifm-color-emphasis-200)"}},q={...K,backgroundColor:"var(--ifm-color-primary-lighter)",color:"var(--ifm-color-primary-darker)","&:hover":{backgroundColor:"var(--ifm-color-primary-lighter)",color:"var(--ifm-color-primary-darker)"}};return(0,y.jsxs)(s.A,{sx:{my:2},children:[(0,y.jsxs)(s.A,{sx:{display:"flex",flexDirection:"column",gap:2,mb:2},children:[(0,y.jsxs)(s.A,{sx:{flexGrow:1,border:1,borderColor:"var(--ifm-color-emphasis-300)",borderRadius:1,position:"relative","&:hover .toolbar":{opacity:1},maxWidth:"100%"},children:[(0,y.jsxs)(s.A,{className:"toolbar",sx:{position:"absolute",top:8,right:8,zIndex:1,display:"flex",gap:1,backgroundColor:"rgba(var(--ifm-background-surface-color-rgb), 0.95)",backdropFilter:"blur(8px)",padding:"4px",borderRadius:1,boxShadow:"0 2px 8px rgba(0,0,0,0.1)",opacity:0,transition:"opacity 0.2s ease"},children:[(0,y.jsxs)(l.A,{size:"small",sx:{"& .MuiButtonGroup-grouped":{borderColor:"var(--ifm-color-emphasis-300)"}},children:[(0,y.jsx)(o.A,{sx:R.includes("test")?q:K,onClick:()=>A("https://unistate-ckb-test.unistate.io/v1/graphql"),children:"Test"}),(0,y.jsx)(o.A,{sx:R.includes("test")?K:q,onClick:()=>A("https://ckb-graph.unistate.io/v1/graphql"),children:"Main"})]}),(0,y.jsxs)(l.A,{size:"small",sx:{"& .MuiButtonGroup-grouped":{borderColor:"var(--ifm-color-emphasis-300)"}},children:[(0,y.jsx)(t.A,{title:"Format Query",children:(0,y.jsx)(c.A,{size:"small",onClick:()=>{try{C((0,f.G)(_))}catch(e){console.error("Failed to format query:",e)}},sx:M,children:(0,y.jsx)(h.A,{fontSize:"small"})})}),(0,y.jsx)(t.A,{title:"Copy Query",children:(0,y.jsx)(c.A,{size:"small",onClick:()=>navigator.clipboard.writeText(_),sx:M,children:(0,y.jsx)(u.A,{fontSize:"small"})})}),(0,y.jsx)(t.A,{title:"Execute Query",children:(0,y.jsx)(c.A,{size:"small",onClick:async()=>{try{w(!0);const e=await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:_,variables:JSON.parse(N)})}),r=await e.json();L(r)}catch(e){L({error:e.message})}finally{w(!1)}},disabled:T,sx:{...M,"&:hover":{color:"var(--ifm-color-primary)",backgroundColor:"var(--ifm-color-emphasis-200)"},"&.Mui-disabled":{color:"var(--ifm-color-emphasis-300)"}},children:(0,y.jsx)(m.A,{fontSize:"small"})})})]})]}),(0,y.jsx)(d.A,{language:"graphql",style:U,customStyle:{margin:0,padding:"16px",backgroundColor:"var(--ifm-background-surface-color)"},contentEditable:!0,onKeyDown:e=>{if("Tab"===e.key){e.preventDefault();const r=window.getSelection(),n=r?.getRangeAt(0),i=document.createTextNode("  ");n?.insertNode(i),n?.setStartAfter(i),n?.setEndAfter(i)}},onInput:e=>{const r=e.target.innerText;C(r);r.includes("$")||r.includes("variables")||S("{}")},children:_})]}),G&&(0,y.jsx)(a.A,{label:"Variables",multiline:!0,value:N,onChange:e=>S(e.target.value),sx:{flex:1,"& .MuiOutlinedInput-root":{bgcolor:"var(--ifm-background-surface-color)","& fieldset":{borderColor:"var(--ifm-color-emphasis-300)"}},"& .MuiInputLabel-root":{color:"var(--ifm-color-emphasis-700)"},"& .MuiInputBase-input":{color:"var(--ifm-font-color-base)",fontFamily:"var(--ifm-font-family-monospace)"}}})]}),D&&(0,y.jsx)(s.A,{sx:{border:1,borderColor:"var(--ifm-color-emphasis-300)",borderRadius:1,overflow:"auto",maxHeight:"300px"},children:(0,y.jsx)(d.A,{language:"json",style:U,customStyle:{margin:0,padding:16,backgroundColor:"var(--ifm-background-surface-color)"},children:JSON.stringify(D,null,2)})})]})}}}]);