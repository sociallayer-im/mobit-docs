"use strict";(self.webpackChunkmobit_docs=self.webpackChunkmobit_docs||[]).push([[4389],{53499:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"core-types","title":"Core","description":"Addresses","source":"@site/docs/core-types.mdx","sourceDirName":".","slug":"/core-types","permalink":"/mobit-docs/core-types","draft":false,"unlisted":false,"editUrl":"https://github.com/sociallayer-im/mobit-doc/tree/main/docs/core-types.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docs","previous":{"title":"Introduction","permalink":"/mobit-docs/intro"},"next":{"title":"Spore Types","permalink":"/mobit-docs/spore-types"}}');var r=n(74848),i=n(28453),a=n(40964),o=n(87210);const c={sidebar_position:2},l="Core",d={},p=[{value:"<code>Addresses</code>",id:"addresses",level:2},{value:"<code>BlockHeight</code>",id:"blockheight",level:2},{value:"<code>TransactionOutputsStatus</code>",id:"transactionoutputsstatus",level:2},{value:"\u5b9e\u9645\u5e94\u7528\u573a\u666f",id:"\u5b9e\u9645\u5e94\u7528\u573a\u666f",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"core",children:"Core"})}),"\n",(0,r.jsx)(s.h2,{id:"addresses",children:(0,r.jsx)(s.code,{children:"Addresses"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"addresses"})," \u662f Mobit \u7d22\u5f15\u7cfb\u7edf\u4e2d\u7684\u6838\u5fc3\u6982\u5ff5\u4e4b\u4e00\uff0c\u51e0\u4e4e\u6240\u6709\u7684 ",(0,r.jsx)(s.code,{children:"script"})," \u6570\u636e\u90fd\u4f1a\u88ab\u6620\u5c04\u5230 ",(0,r.jsx)(s.code,{children:"addresses"})," \u4e2d\u3002"]}),"\n",(0,r.jsx)(o.A,{typeName:"addresses",typeDescription:"Addresses \u7c7b\u578b\u4ee3\u8868\u533a\u5757\u94fe\u4e2d\u7684\u5730\u5740\u4fe1\u606f\u3002",fields:[{name:"id",type:"String!",description:"\u5730\u5740\u7684\u5b57\u7b26\u4e32\u8868\u793a\u5f62\u5f0f\uff0c\u9075\u5faa CKB \u5730\u5740\u683c\u5f0f\uff08\u4f8b\u5982\uff1ackt1qqju98wrz7q35mm08xz6020tcjpch5ug6xwslmhv7z7dvrmvp96mkqdw3fgja6ckhv229jh6skfkymtxgmz0yxssqueg7mtyknc05xezlur24eys\uff09\u3002\u7528\u9014\uff1a\u552f\u4e00\u6807\u8bc6\u533a\u5757\u94fe\u7f51\u7edc\u4e2d\u7684\u4e00\u4e2a\u5730\u5740\u3002"},{name:"script_args",type:"bytea!",description:"\u811a\u672c\u53c2\u6570\uff0c\u683c\u5f0f\u4e3a\u4ee5 \\x \u5f00\u5934\u7684\u5341\u516d\u8fdb\u5236\u5b57\u8282\u6570\u7ec4\u3002\u7528\u9014\uff1a\u5305\u542b\u811a\u672c\u6240\u9700\u7684\u53c2\u6570\uff0c\u4f8b\u5982 SECP256K1 \u811a\u672c\u7684\u516c\u94a5\u54c8\u5e0c\u3002\u793a\u4f8b\u503c\uff1a\\xae8a512eeb16bb14a2cafa8593626d6646c4f21a1007328f6d64b4f0fa1b22ff\u3002"},{name:"script_code_hash",type:"bytea!",description:"\u811a\u672c\u4ee3\u7801\u54c8\u5e0c\uff0c\u683c\u5f0f\u4e3a 32 \u5b57\u8282\u54c8\u5e0c\u503c\u3002\u7528\u9014\uff1a\u552f\u4e00\u6807\u8bc6\u4f7f\u7528\u7684\u9501\u5b9a/\u89e3\u9501\u811a\u672c\u3002\u793a\u4f8b\u503c\uff1a\\x25c29dc317811a6f6f3985a7a9ebc4838bd388d19d0feeecf0bcd60f6c0975bb\u3002"},{name:"script_hash_type",type:"smallint!",description:"\u811a\u672c\u54c8\u5e0c\u7c7b\u578b\uff0c\u53d6\u503c\u4e3a 0\uff08Data \u54c8\u5e0c\uff09\u6216 1\uff08Type \u54c8\u5e0c\uff09\u3002\u7528\u9014\uff1a\u786e\u5b9a script_code_hash \u7684\u89e3\u91ca\u65b9\u5f0f\u3002\u793a\u4f8b\u503c\uff1a1\u3002"}]}),"\n",(0,r.jsx)(s.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u67e5\u8be2\u793a\u4f8b\u83b7\u53d6\u5b9e\u65f6\u7ed3\u679c\uff1a"}),"\n",(0,r.jsx)(a.A,{defaultQuery:"query QueryAddresses {\n  addresses(limit: 1) {\n    id\n    script_args\n    script_code_hash\n    script_hash_type\n  }\n}\n"}),"\n",(0,r.jsxs)(s.p,{children:["\u5c3d\u7ba1\u8fd9\u4e9b\u662f ",(0,r.jsx)(s.code,{children:"addresses"})," \u7684\u57fa\u672c\u5b57\u6bb5\uff0c\u4f46\u5b83\u4eec\u771f\u6b63\u5f3a\u5927\u7684\u5730\u65b9\u5728\u4e8e\u6240\u652f\u6301\u7684\u4e30\u5bcc\u7d22\u5f15\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u67e5\u8be2\u4e0e\u7279\u5b9a\u5730\u5740\u5173\u8054\u7684 ",(0,r.jsx)(s.code,{children:"token_info"}),"\uff1a"]}),"\n",(0,r.jsx)(a.A,{defaultQuery:'query QueryTokenInfo {\naddresses(limit: 1, where: {script_args: {_eq: "\\xb73b6ab39d79390c6de90a09c96b290c331baf1798ed6f97aed02590929734e800000080"}, script_code_hash: {_eq: "\\x50bd8d6680b8b9cf98b73f3c08faf8b2a21914311954118ad6609be6e78a1b95"}}) {\n  id\n  script_args\n  script_code_hash\n  script_hash_type\n  token_info {\n    decimal\n    expected_supply\n    inscription_id\n    mint_limit\n    mint_status\n    name\n    symbol\n    transaction_hash\n    transaction_index\n    type_id\n    udt_hash\n  }\n}\n}\n'}),"\n",(0,r.jsx)(s.p,{children:"\u5f53\u7136\uff0c\u60a8\u4e5f\u53ef\u4ee5\u5b9a\u4e49\u53d8\u91cf\u6765\u589e\u5f3a\u67e5\u8be2\u7684\u7075\u6d3b\u6027\uff1a"}),"\n",(0,r.jsx)(a.A,{defaultQuery:"\n  query QueryTokenInfo($limit: Int, $scriptArgs: String, $scriptCodeHash: String) {\n    addresses(limit: $limit, where: {script_args: {_eq: $scriptArgs}, script_code_hash: {_eq: $scriptCodeHash}}) {\n      id\n      script_args\n      script_code_hash\n      script_hash_type\n      token_info {\n        decimal\n        expected_supply\n        inscription_id\n        mint_limit\n        mint_status\n        name\n        symbol\n        transaction_hash\n        transaction_index\n        type_id\n        udt_hash\n      }\n    }\n  }\n",defaultVariables:'{\n  limit: 1,\n  scriptArgs: "\\xb73b6ab39d79390c6de90a09c96b290c331baf1798ed6f97aed02590929734e800000080",\n  scriptCodeHash: "\\x50bd8d6680b8b9cf98b73f3c08faf8b2a21914311954118ad6609be6e78a1b95"\n}'}),"\n",(0,r.jsx)(s.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,r.jsxs)(s.p,{children:["\u5728\u67e5\u8be2\u4e2d\uff0c\u8bf7\u52a1\u5fc5\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"\\\\x"})," \u524d\u7f00\u8868\u793a\u5341\u516d\u8fdb\u5236\u5b57\u8282\u5b57\u7b26\u4e32\uff0c\u800c\u975e ",(0,r.jsx)(s.code,{children:"0x"}),"\u3002\u4f8b\u5982\uff0c",(0,r.jsx)(s.code,{children:"0x1a2b3c"})," \u5e94\u88ab\u5199\u4f5c ",(0,r.jsx)(s.code,{children:"\\\\x1a2b3c"}),"\u3002"]})}),"\n",(0,r.jsxs)(s.p,{children:["\u9664\u4e86 ",(0,r.jsx)(s.code,{children:"token_infos"}),"\uff0c\u60a8\u8fd8\u53ef\u4ee5\u67e5\u8be2\u5176\u4ed6\u5b9e\u4f53\uff0c\u5982 ",(0,r.jsx)(s.code,{children:"spores"}),"\u3001",(0,r.jsx)(s.code,{children:"xudt_cells"})," \u7b49\u3002\u5177\u4f53\u652f\u6301\u7684\u67e5\u8be2\u7c7b\u578b\uff0c\u8bf7\u53c2\u8003 ",(0,r.jsx)(s.a,{href:"/playground",children:"GraphQL Playground"})," \u6587\u6863\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"blockheight",children:(0,r.jsx)(s.code,{children:"BlockHeight"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"block_height"}),"\u53cd\u6620\u4e86\u7d22\u5f15\u5668\u5df2\u540c\u6b65\u81f3\u7684\u6700\u65b0\u533a\u5757\u3002\u8fd9\u4e00\u4fe1\u606f\u5bf9\u4e8e\u9a8c\u8bc1\u67d0\u4e9b\u4ea4\u6613\u662f\u5426\u5df2\u88ab\u7d22\u5f15\u5c24\u4e3a\u91cd\u8981\u3002"]}),"\n",(0,r.jsx)(o.A,{typeName:"block_height",typeDescription:"BlockHeight \u7c7b\u578b\u4ee3\u8868\u5f53\u524d\u533a\u5757\u9ad8\u5ea6\u4fe1\u606f\u3002",fields:[{name:"height",type:"bigint!",description:"\u5f53\u524d\u5df2\u7d22\u5f15\u7684\u533a\u5757\u9ad8\u5ea6\u3002\u7c7b\u578b\uff1abigint\u3002\u7528\u9014\uff1a\u6307\u793a\u7d22\u5f15\u5668\u5df2\u5904\u7406\u7684\u533a\u5757\u9ad8\u5ea6\u3002\u5e94\u7528\u573a\u666f\uff1a\u68c0\u67e5\u540c\u6b65\u72b6\u6001\u548c\u6570\u636e\u65b0\u9c9c\u5ea6\u3002"},{name:"id",type:"Int!",description:"\u8bb0\u5f55\u6807\u8bc6\u7b26\u3002\u56fa\u5b9a\u503c\uff1a1\u3002\u7528\u9014\uff1a\u9274\u4e8e\u4ec5\u5b58\u5728\u4e00\u6761\u8bb0\u5f55\uff0c\u5176\u503c\u59cb\u7ec8\u4e3a 1\u3002"}]}),"\n",(0,r.jsx)(s.p,{children:"\u83b7\u53d6\u5f53\u524d\u533a\u5757\u9ad8\u5ea6\u7684\u67e5\u8be2\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(a.A,{defaultQuery:"query GetSyncStatus {\nblock_height {\n  height\n}\n}"}),"\n",(0,r.jsx)(s.h2,{id:"transactionoutputsstatus",children:(0,r.jsx)(s.code,{children:"TransactionOutputsStatus"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"transaction_outputs_status"})," \u7528\u4e8e\u8bb0\u5f55\u4ea4\u6613\u8f93\u51fa\u7684\u5f53\u524d\u72b6\u6001\u3002\u6784\u5efa\u65b0\u4ea4\u6613\u65f6\uff0c\u9700\u9009\u7528\u5c1a\u672a\u88ab\u6d88\u8d39\u7684 ",(0,r.jsx)(s.code,{children:"outputs"})," \u4f5c\u4e3a\u65b0\u7684 ",(0,r.jsx)(s.code,{children:"inputs"}),"\u3002"]}),"\n",(0,r.jsx)(o.A,{typeName:"transaction_outputs_status",typeDescription:"TransactionOutputsStatus \u7c7b\u578b\u4ee3\u8868\u4ea4\u6613\u8f93\u51fa\u7684\u72b6\u6001\u3002",fields:[{name:"consumed_input_transaction_hash",type:"bytea",description:"\u6d88\u8d39\u6b64\u8f93\u51fa\u7684\u4ea4\u6613\u54c8\u5e0c\u3002\u683c\u5f0f\uff1a32 \u5b57\u8282\u54c8\u5e0c\u503c\u3002\u53ef\u4e3a\u7a7a\uff1a\u82e5\u672a\u88ab\u6d88\u8d39\uff0c\u5219\u4e3a\u7a7a\u3002\u7528\u9014\uff1a\u8ffd\u8e2a UTXO \u7684\u6d88\u8d39\u72b6\u6001\u3002"},{name:"consumed_input_transaction_index",type:"Int",description:"\u6d88\u8d39\u8f93\u5165\u7684\u7d22\u5f15\u3002\u7c7b\u578b\uff1a\u6574\u6570\u3002\u53ef\u4e3a\u7a7a\uff1a\u82e5\u672a\u88ab\u6d88\u8d39\uff0c\u5219\u4e3a\u7a7a\u3002\u7528\u9014\uff1a\u6307\u793a\u6d88\u8d39\u4ea4\u6613\u7684\u8f93\u5165\u5217\u8868\u4e2d\u7684\u4f4d\u7f6e\u3002"},{name:"output_transaction_hash",type:"bytea!",description:"\u521b\u5efa\u8be5\u8f93\u51fa\u7684\u4ea4\u6613\u54c8\u5e0c\u3002\u683c\u5f0f\uff1a32 \u5b57\u8282\u54c8\u5e0c\u503c\u3002\u7528\u9014\uff1a\u6807\u8bc6\u521b\u5efa\u6b64 UTXO \u7684\u4ea4\u6613\u3002"},{name:"output_transaction_index",type:"Int!",description:"\u8f93\u51fa\u7684\u7d22\u5f15\u3002\u7c7b\u578b\uff1a\u6574\u6570\u3002\u7528\u9014\uff1a\u6307\u793a\u4ea4\u6613\u8f93\u51fa\u5217\u8868\u4e2d\u7684\u4f4d\u7f6e\u3002\u8303\u56f4\uff1a\u4ece 0 \u5f00\u59cb\u3002"}]}),"\n",(0,r.jsxs)(s.p,{children:["\u67e5\u8be2\u90e8\u5206",(0,r.jsx)(s.code,{children:"transaction_outputs_status"}),"\uff1a"]}),"\n",(0,r.jsx)(a.A,{defaultQuery:"query QueryOutputsStatus {\ntransaction_outputs_status(limit: 10) {\n  consumed_input_transaction_hash\n  consumed_input_transaction_index\n  output_transaction_hash\n  output_transaction_index\n}\n}"}),"\n",(0,r.jsxs)(s.p,{children:["\u67e5\u8be2\u7279\u5b9a",(0,r.jsx)(s.code,{children:"transaction_outputs_status"}),"\uff1a"]}),"\n",(0,r.jsx)(a.A,{defaultQuery:"query GetUtxoStatus($txHash: bytea!) {\ntransaction_outputs_status(\n  where: { output_transaction_hash: { _eq: $txHash } }\n) {\n  output_transaction_index\n  consumed_input_transaction_hash\n}\n}",defaultVariables:'{\n"txHash": "\\xc30a1a6e264b7f21aa69ecea9159f60b54ec4c81a00630e21e4a77842b5c69e1"\n}'}),"\n",(0,r.jsx)(s.h2,{id:"\u5b9e\u9645\u5e94\u7528\u573a\u666f",children:"\u5b9e\u9645\u5e94\u7528\u573a\u666f"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"UTXO \u8ffd\u8e2a"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u68c0\u67e5\u7279\u5b9a\u8f93\u51fa\u662f\u5426\u5df2\u88ab\u6d88\u8d39"}),"\n",(0,r.jsx)(s.li,{children:"\u8ffd\u8e2a\u8d44\u4ea7\u8f6c\u79fb\u8def\u5f84"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u5730\u5740\u9a8c\u8bc1"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u9a8c\u8bc1\u5730\u5740\u7684\u811a\u672c\u7c7b\u578b"}),"\n",(0,r.jsx)(s.li,{children:"\u68c0\u67e5\u5730\u5740\u7684\u9501\u5b9a\u811a\u672c\u53c2\u6570"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u540c\u6b65\u72b6\u6001\u76d1\u63a7"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u76d1\u63a7\u7d22\u5f15\u5668\u540c\u6b65\u72b6\u6001"}),"\n",(0,r.jsx)(s.li,{children:"\u786e\u4fdd\u6570\u636e\u65f6\u6548\u6027"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,r.jsxs)(s.p,{children:["\u6240\u6709\u8fd4\u56de ",(0,r.jsx)(s.code,{children:"bytea"})," \u7c7b\u578b\u7684\u5b57\u6bb5\u5728\u67e5\u8be2\u65f6\u9700\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"\\x"})," \u524d\u7f00\u7684\u5341\u516d\u8fdb\u5236\u683c\u5f0f\u3002"]})}),"\n",(0,r.jsx)(s.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,r.jsx)(s.p,{children:"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\u65f6\uff0c\u8bf7\u786e\u4fdd\u59a5\u5584\u5904\u7406\u9519\u8bef\u60c5\u51b5\uff0c\u5e76\u9a8c\u8bc1\u8fd4\u56de\u7684\u6570\u636e\u3002"})}),"\n",(0,r.jsx)(s.p,{children:"\u901a\u8fc7\u6df1\u5165\u7406\u89e3\u8fd9\u4e9b\u6838\u5fc3\u5b57\u6bb5\u7684\u542b\u4e49\u548c\u7528\u9014\uff0c\u60a8\u53ef\u4ee5\u66f4\u6709\u6548\u5730\u8bbe\u8ba1\u67e5\u8be2\u548c\u5904\u7406\u6570\u636e\u3002\u8fd9\u4e9b\u5b57\u6bb5\u6784\u6210\u4e86 Mobit \u7cfb\u7edf\u4e2d\u8d44\u4ea7\u8ffd\u8e2a\u548c\u7ba1\u7406\u7684\u57fa\u7840\u3002"})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},87210:(e,s,n)=>{n.d(s,{A:()=>c});n(96540);var t=n(34164),r=n(92303),i=n(95293);const a={graphqlContainer:"graphqlContainer_txj9",light:"light_tjNd",dark:"dark_xDko",typeDescription:"typeDescription_l4MU",keyword:"keyword_CRfX",typeName:"typeName_VxqW",fields:"fields_Dmof",field:"field_mRXJ",fieldName:"fieldName_fK8b",colon:"colon_zlWV",fieldType:"fieldType_bW41",braces:"braces_l5fT"};var o=n(74848);function c(e){let{typeName:s,typeDescription:n,fields:c}=e;const{colorMode:l}=(0,i.G)();(0,r.A)();return(0,o.jsx)("div",{className:(0,t.A)(a.graphqlContainer,a[l],"theme-code-block"),children:(0,o.jsxs)("div",{className:a.typeHeader,children:[n&&(0,o.jsx)("div",{className:a.typeDescription,children:(0,o.jsxs)("span",{children:["# ",n]})}),(0,o.jsxs)("div",{className:a.codeBlock,children:[(0,o.jsx)("span",{className:a.keyword,children:"type"})," ",(0,o.jsx)("span",{className:a.typeName,children:s})," ",(0,o.jsx)("span",{className:a.braces,children:"{"}),(0,o.jsx)("div",{className:a.fields,children:c.map((e=>{let{name:s,type:n,description:t}=e;return(0,o.jsxs)("div",{className:a.field,"data-tooltip":t,children:[(0,o.jsx)("span",{className:a.fieldName,children:s}),(0,o.jsx)("span",{className:a.colon,children:":"})," ",(0,o.jsx)("span",{className:a.fieldType,children:n})]},s)}))}),(0,o.jsx)("span",{className:a.braces,children:"}"})]})]})})}},40964:(e,s,n)=>{n.d(s,{A:()=>_});var t=n(96540),r=n(86105),i=n(5e3),a=n(44939),o=n(72011),c=n(4671),l=n(61545),d=n(34066),p=n(30222),h=n(19337),u=n(54676),x=n(55629),m=n(36694),f=n(64198),b=n(92303),y=n(95293),j=n(74848);function _(e){let{defaultQuery:s,defaultVariables:n="{}",endpoint:_="https://unistate-ckb-test.unistate.io/v1/graphql"}=e;const g=(0,b.A)(),{colorMode:v}=(0,y.G)(),k="dark"===v,A=e=>e.replace(/\\/g,"\\\\");s=A(s);const C=s.includes("$")||s.includes("variables"),[N,S]=(0,t.useState)(_),[q,T]=(0,t.useState)(s),[w,z]=(0,t.useState)((()=>{if("string"==typeof n)return A(n);const e=_.includes("test")?"test":"main",s=n[e];return"string"==typeof s?A(s):JSON.stringify(s,null,2)})),[M,Q]=(0,t.useState)(null),[D,O]=(0,t.useState)(!1);(0,t.useEffect)((()=>{try{const e=(0,f.G)(s);T(e)}catch(e){console.error("Failed to format initial query:",e)}}),[s]);const I=k?p.A:h.A;if(!g)return null;const H={color:"var(--ifm-color-emphasis-700)","&:hover":{color:"var(--ifm-color-primary)",backgroundColor:"var(--ifm-color-emphasis-200)"}},G={color:"var(--ifm-color-emphasis-700)",borderColor:"var(--ifm-color-emphasis-300)",fontSize:"0.75rem",minWidth:"auto",px:1,"&.Mui-selected, &:hover":{color:"var(--ifm-color-primary)",borderColor:"var(--ifm-color-primary)",backgroundColor:"var(--ifm-color-emphasis-200)"}},$={...G,backgroundColor:"var(--ifm-color-primary-lighter)",color:"var(--ifm-color-primary-darker)","&:hover":{backgroundColor:"var(--ifm-color-primary-lighter)",color:"var(--ifm-color-primary-darker)"}};return(0,j.jsxs)(r.A,{sx:{my:2},children:[(0,j.jsxs)(r.A,{sx:{display:"flex",flexDirection:"column",gap:2,mb:2},children:[(0,j.jsxs)(r.A,{sx:{flexGrow:1,border:1,borderColor:"var(--ifm-color-emphasis-300)",borderRadius:1,position:"relative","&:hover .toolbar":{opacity:1},maxWidth:"100%"},children:[(0,j.jsxs)(r.A,{className:"toolbar",sx:{position:"absolute",top:8,right:8,zIndex:1,display:"flex",gap:1,backgroundColor:"rgba(var(--ifm-background-surface-color-rgb), 0.95)",backdropFilter:"blur(8px)",padding:"4px",borderRadius:1,boxShadow:"0 2px 8px rgba(0,0,0,0.1)",opacity:0,transition:"opacity 0.2s ease"},children:[(0,j.jsxs)(i.A,{size:"small",sx:{"& .MuiButtonGroup-grouped":{borderColor:"var(--ifm-color-emphasis-300)"}},children:[(0,j.jsx)(a.A,{sx:N.includes("test")?$:G,onClick:()=>S("https://unistate-ckb-test.unistate.io/v1/graphql"),children:"Test"}),(0,j.jsx)(a.A,{sx:N.includes("test")?G:$,onClick:()=>S("https://ckb-graph.unistate.io/v1/graphql"),children:"Main"})]}),(0,j.jsxs)(i.A,{size:"small",sx:{"& .MuiButtonGroup-grouped":{borderColor:"var(--ifm-color-emphasis-300)"}},children:[(0,j.jsx)(o.A,{title:"Format Query",children:(0,j.jsx)(c.A,{size:"small",onClick:()=>{try{T((0,f.G)(q))}catch(e){console.error("Failed to format query:",e)}},sx:H,children:(0,j.jsx)(u.A,{fontSize:"small"})})}),(0,j.jsx)(o.A,{title:"Copy Query",children:(0,j.jsx)(c.A,{size:"small",onClick:()=>navigator.clipboard.writeText(q),sx:H,children:(0,j.jsx)(x.A,{fontSize:"small"})})}),(0,j.jsx)(o.A,{title:"Execute Query",children:(0,j.jsx)(c.A,{size:"small",onClick:async()=>{try{O(!0);const e=await fetch(N,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:q,variables:JSON.parse(w)})}),s=await e.json();Q(s)}catch(e){Q({error:e.message})}finally{O(!1)}},disabled:D,sx:{...H,"&:hover":{color:"var(--ifm-color-primary)",backgroundColor:"var(--ifm-color-emphasis-200)"},"&.Mui-disabled":{color:"var(--ifm-color-emphasis-300)"}},children:(0,j.jsx)(m.A,{fontSize:"small"})})})]})]}),(0,j.jsx)(d.A,{language:"graphql",style:I,customStyle:{margin:0,padding:"16px",backgroundColor:"var(--ifm-background-surface-color)"},contentEditable:!0,onKeyDown:e=>{if("Tab"===e.key){e.preventDefault();const s=window.getSelection(),n=s?.getRangeAt(0),t=document.createTextNode("  ");n?.insertNode(t),n?.setStartAfter(t),n?.setEndAfter(t)}},onInput:e=>{const s=e.target.innerText;T(s);s.includes("$")||s.includes("variables")||z("{}")},children:q})]}),C&&(0,j.jsx)(l.A,{label:"Variables",multiline:!0,value:w,onChange:e=>z(e.target.value),sx:{flex:1,"& .MuiOutlinedInput-root":{bgcolor:"var(--ifm-background-surface-color)","& fieldset":{borderColor:"var(--ifm-color-emphasis-300)"}},"& .MuiInputLabel-root":{color:"var(--ifm-color-emphasis-700)"},"& .MuiInputBase-input":{color:"var(--ifm-font-color-base)",fontFamily:"var(--ifm-font-family-monospace)"}}})]}),M&&(0,j.jsx)(r.A,{sx:{border:1,borderColor:"var(--ifm-color-emphasis-300)",borderRadius:1,overflow:"auto",maxHeight:"300px"},children:(0,j.jsx)(d.A,{language:"json",style:I,customStyle:{margin:0,padding:16,backgroundColor:"var(--ifm-background-surface-color)"},children:JSON.stringify(M,null,2)})})]})}}}]);