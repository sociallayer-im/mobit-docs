"use strict";(self.webpackChunkmobit_docs=self.webpackChunkmobit_docs||[]).push([[1260],{89654:(e,t,n)=>{n.d(t,{a:()=>l,b:()=>p,c:()=>c,d:()=>f,e:()=>s,g:()=>r});var i=n(98368),u=n(9488),a=n(27437);function r(e,t){const n={schema:e,type:null,parentType:null,inputType:null,directiveDef:null,fieldDef:null,argDef:null,argDefs:null,objectFieldDefs:null};return(0,a.f)(t,(t=>{var u,a;switch(t.kind){case"Query":case"ShortQuery":n.type=e.getQueryType();break;case"Mutation":n.type=e.getMutationType();break;case"Subscription":n.type=e.getSubscriptionType();break;case"InlineFragment":case"FragmentDefinition":t.type&&(n.type=e.getType(t.type));break;case"Field":case"AliasedField":n.fieldDef=n.type&&t.name?o(e,n.parentType,t.name):null,n.type=null===(u=n.fieldDef)||void 0===u?void 0:u.type;break;case"SelectionSet":n.parentType=n.type?(0,i.MR)(n.type):null;break;case"Directive":n.directiveDef=t.name?e.getDirective(t.name):null;break;case"Arguments":const r=t.prevState?"Field"===t.prevState.kind?n.fieldDef:"Directive"===t.prevState.kind?n.directiveDef:"AliasedField"===t.prevState.kind?t.prevState.name&&o(e,n.parentType,t.prevState.name):null:null;n.argDefs=r?r.args:null;break;case"Argument":if(n.argDef=null,n.argDefs)for(let e=0;e<n.argDefs.length;e++)if(n.argDefs[e].name===t.name){n.argDef=n.argDefs[e];break}n.inputType=null===(a=n.argDef)||void 0===a?void 0:a.type;break;case"EnumValue":const l=n.inputType?(0,i.MR)(n.inputType):null;n.enumValue=l instanceof i.Zb?function(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return e[n]}(l.getValues(),(e=>e.value===t.name)):null;break;case"ListValue":const s=n.inputType?(0,i.yl)(n.inputType):null;n.inputType=s instanceof i.KT?s.ofType:null;break;case"ObjectValue":const p=n.inputType?(0,i.MR)(n.inputType):null;n.objectFieldDefs=p instanceof i.zP?p.getFields():null;break;case"ObjectField":const c=t.name&&n.objectFieldDefs?n.objectFieldDefs[t.name]:null;n.inputType=null==c?void 0:c.type,n.fieldDef=c;break;case"NamedType":n.type=t.name?e.getType(t.name):null}})),n}function o(e,t,n){return n===u.S0.name&&e.getQueryType()===t?u.S0:n===u.Xe.name&&e.getQueryType()===t?u.Xe:n===u.of.name&&(0,i.ML)(t)?u.of:t&&t.getFields?t.getFields()[n]:void 0}function l(e){return{kind:"Field",schema:e.schema,field:e.fieldDef,type:d(e.fieldDef)?null:e.parentType}}function s(e){return{kind:"Directive",schema:e.schema,directive:e.directiveDef}}function p(e){return e.directiveDef?{kind:"Argument",schema:e.schema,argument:e.argDef,directive:e.directiveDef}:{kind:"Argument",schema:e.schema,argument:e.argDef,field:e.fieldDef,type:d(e.fieldDef)?null:e.parentType}}function c(e){return{kind:"EnumValue",value:e.enumValue||void 0,type:e.inputType?(0,i.MR)(e.inputType):void 0}}function f(e,t){return{kind:"Type",schema:e.schema,type:t||e.type}}function d(e){return"__"===e.name.slice(0,2)}},27437:(e,t,n)=>{function i(e,t){const n=[];let i=e;for(;null==i?void 0:i.kind;)n.push(i),i=i.prevState;for(let u=n.length-1;u>=0;u--)t(n[u])}n.d(t,{f:()=>i})},71260:(e,t,n)=>{n.r(t);var i=n(43338),u=n(89654);function a(e,t){const n=t.target||t.srcElement;if(!(n instanceof HTMLElement))return;if("SPAN"!==(null==n?void 0:n.nodeName))return;const i=n.getBoundingClientRect(),u={left:(i.left+i.right)/2,top:(i.top+i.bottom)/2};e.state.jump.cursor=u,e.state.jump.isHoldingModifier&&s(e)}function r(e){e.state.jump.isHoldingModifier||!e.state.jump.cursor?e.state.jump.isHoldingModifier&&e.state.jump.marker&&p(e):e.state.jump.cursor=null}function o(e,t){if(e.state.jump.isHoldingModifier||t.key!==(l?"Meta":"Control"))return;e.state.jump.isHoldingModifier=!0,e.state.jump.cursor&&s(e);const n=r=>{r.code===t.code&&(e.state.jump.isHoldingModifier=!1,e.state.jump.marker&&p(e),i.C.off(document,"keyup",n),i.C.off(document,"click",u),e.off("mousedown",a))},u=t=>{const{destination:n,options:i}=e.state.jump;n&&i.onClick(n,t)},a=(t,n)=>{e.state.jump.destination&&(n.codemirrorIgnore=!0)};i.C.on(document,"keyup",n),i.C.on(document,"click",u),e.on("mousedown",a)}i.C.defineOption("jump",!1,((e,t,n)=>{if(n&&n!==i.C.Init){const t=e.state.jump.onMouseOver;i.C.off(e.getWrapperElement(),"mouseover",t);const n=e.state.jump.onMouseOut;i.C.off(e.getWrapperElement(),"mouseout",n),i.C.off(document,"keydown",e.state.jump.onKeyDown),delete e.state.jump}if(t){const n=e.state.jump={options:t,onMouseOver:a.bind(null,e),onMouseOut:r.bind(null,e),onKeyDown:o.bind(null,e)};i.C.on(e.getWrapperElement(),"mouseover",n.onMouseOver),i.C.on(e.getWrapperElement(),"mouseout",n.onMouseOut),i.C.on(document,"keydown",n.onKeyDown)}}));const l="undefined"!=typeof navigator&&navigator.userAgent.includes("Mac");function s(e){if(e.state.jump.marker)return;const{cursor:t,options:n}=e.state.jump,i=e.coordsChar(t),u=e.getTokenAt(i,!0),a=n.getDestination||e.getHelper(i,"jump");if(a){const t=a(u,n,e);if(t){const n=e.markText({line:i.line,ch:u.start},{line:i.line,ch:u.end},{className:"CodeMirror-jump-token"});e.state.jump.marker=n,e.state.jump.destination=t}}}function p(e){const{marker:t}=e.state.jump;e.state.jump.marker=null,e.state.jump.destination=null,t.clear()}i.C.registerHelper("jump","graphql",((e,t)=>{if(!t.schema||!t.onClick||!e.state)return;const{state:n}=e,{kind:i,step:a}=n,r=(0,u.g)(t.schema,n);return"Field"===i&&0===a&&r.fieldDef||"AliasedField"===i&&2===a&&r.fieldDef?(0,u.a)(r):"Directive"===i&&1===a&&r.directiveDef?(0,u.e)(r):"Argument"===i&&0===a&&r.argDef?(0,u.b)(r):"EnumValue"===i&&r.enumValue?(0,u.c)(r):"NamedType"===i&&r.type?(0,u.d)(r):void 0}))}}]);