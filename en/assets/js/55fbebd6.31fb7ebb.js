"use strict";(self.webpackChunkmobit_docs=self.webpackChunkmobit_docs||[]).push([[5746],{31559:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"intro","title":"Mobit Documentation Introduction","description":"Welcome to the Mobit documentation, where you will find comprehensive guides on querying blockchain data using GraphQL. This guide assumes that you have a foundational understanding of GraphQL concepts, including queries, mutations, and types. If you are new to GraphQL, we recommend starting with the official GraphQL documentation.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/intro.mdx","sourceDirName":".","slug":"/intro","permalink":"/mobit-docs/en/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/sociallayer-im/mobit-doc/tree/main/docs/intro.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docs","next":{"title":"Core Types","permalink":"/mobit-docs/en/core-types"}}');var t=i(74848),r=i(28453);const o={sidebar_position:1},c="Mobit Documentation Introduction",a={},l=[{value:"GraphQL Endpoints",id:"graphql-endpoints",level:2},{value:"Document Structure",id:"document-structure",level:2},{value:"Getting Started",id:"getting-started",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"mobit-documentation-introduction",children:"Mobit Documentation Introduction"})}),"\n",(0,t.jsxs)(n.p,{children:["Welcome to the Mobit documentation, where you will find comprehensive guides on querying blockchain data using GraphQL. This guide assumes that you have a foundational understanding of GraphQL concepts, including queries, mutations, and types. If you are new to GraphQL, we recommend starting with the ",(0,t.jsx)(n.a,{href:"https://graphql.org/learn/",children:"official GraphQL documentation"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"graphql-endpoints",children:"GraphQL Endpoints"}),"\n",(0,t.jsx)(n.p,{children:"Mobit provides two primary GraphQL endpoints for querying blockchain data:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Unistate CKB Testnet Endpoint"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"URL"}),": ",(0,t.jsx)(n.a,{href:"https://unistate-ckb-test.unistate.io/v1/graphql",children:"https://unistate-ckb-test.unistate.io/v1/graphql"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Usage"}),": Suitable for testing and development on the CKB test network."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CKB Graph Mainnet Endpoint"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"URL"}),": ",(0,t.jsx)(n.a,{href:"https://ckb-graph.unistate.io/v1/graphql",children:"https://ckb-graph.unistate.io/v1/graphql"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Usage"}),": Appropriate for production applications interacting with the mainnet CKB network."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These endpoints enable you to execute complex queries to retrieve various types of blockchain data, including addresses, blocks, transactions, tokens, NFTs, and more."}),"\n",(0,t.jsx)(n.h2,{id:"document-structure",children:"Document Structure"}),"\n",(0,t.jsx)(n.p,{children:"This document is organized into several sections, each focusing on different core types within the Mobit GraphQL schema and their respective fields. Below is a brief overview of the key sections:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Core Types"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Overview of basic types such as ",(0,t.jsx)(n.code,{children:"addresses"}),", ",(0,t.jsx)(n.code,{children:"block_height"}),", and ",(0,t.jsx)(n.code,{children:"transaction_outputs_status"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Common query examples for retrieving and analyzing these core types."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"RGBPP Types"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In-depth explanation of the RGB++ system, which facilitates cross-chain asset transfers between Bitcoin and CKB."}),"\n",(0,t.jsx)(n.li,{children:"Details on RGB++ locking scripts (Locks) and unlocking scripts (Unlocks), as well as managing asset states."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Spore Types"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Comprehensive introduction to the Spore NFT system, including ",(0,t.jsx)(n.code,{children:"spores"})," and ",(0,t.jsx)(n.code,{children:"clusters"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Examples of querying individual Spores, clusters, and related operations."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Token Types"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Introduction to the XUDT (User-Defined Token) system, including ",(0,t.jsx)(n.code,{children:"token_info"})," and ",(0,t.jsx)(n.code,{children:"xudt_cell"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Query examples for retrieving token information, balances, and transaction histories."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Each section includes detailed descriptions of GraphQL types, field specifications, and practical query examples using the ",(0,t.jsx)(n.code,{children:"LightGraphQLPlayground"})," component. These examples will assist you in constructing and executing queries against the Mobit GraphQL endpoints."]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(n.p,{children:"To begin querying data from the Mobit GraphQL endpoints, follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Access GraphQL Playground"}),": Navigate to one of the provided endpoints using your browser."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Write Your Queries"}),": Use the GraphQL Playground interface to write and execute your queries."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Explore Examples"}),": Refer to the examples in the documentation for inspiration and guidance."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By leveraging the powerful features of GraphQL, you can efficiently retrieve and analyze blockchain data to build robust applications and integrate with the Mobit ecosystem."}),"\n",(0,t.jsx)(n.p,{children:"If you encounter any issues or have questions, feel free to reach out to our support team or community forums for assistance. Enjoy your querying!"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Next Steps:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/core-types",children:"Core Types"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/rgbpp-types",children:"RGBPP Types"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/spore-types",children:"Spore Types"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/token-types",children:"Token Types"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);