"use strict";(self.webpackChunkmobit_docs=self.webpackChunkmobit_docs||[]).push([[924],{80924:(e,o,n)=>{n.r(o),n.d(o,{a:()=>r,d:()=>u});var t=n(50090);function i(e,o){for(var n=0;n<o.length;n++){const t=o[n];if("string"!=typeof t&&!Array.isArray(t))for(const o in t)if("default"!==o&&!(o in e)){const n=Object.getOwnPropertyDescriptor(t,o);n&&Object.defineProperty(e,o,n.get?n:{enumerable:!0,get:()=>t[o]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}!function(e){function o(o,n,t){var i,r=o.getWrapperElement();return(i=r.appendChild(document.createElement("div"))).className=t?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top","string"==typeof n?i.innerHTML=n:i.appendChild(n),e.addClass(r,"dialog-opened"),i}function n(e,o){e.state.currentNotificationClose&&e.state.currentNotificationClose(),e.state.currentNotificationClose=o}e.defineExtension("openDialog",(function(t,i,r){r||(r={}),n(this,null);var u=o(this,t,r.bottom),a=!1,l=this;function c(o){if("string"==typeof o)f.value=o;else{if(a)return;a=!0,e.rmClass(u.parentNode,"dialog-opened"),u.parentNode.removeChild(u),l.focus(),r.onClose&&r.onClose(u)}}var s,f=u.getElementsByTagName("input")[0];return f?(f.focus(),r.value&&(f.value=r.value,!1!==r.selectValueOnOpen&&f.select()),r.onInput&&e.on(f,"input",(function(e){r.onInput(e,f.value,c)})),r.onKeyUp&&e.on(f,"keyup",(function(e){r.onKeyUp(e,f.value,c)})),e.on(f,"keydown",(function(o){r&&r.onKeyDown&&r.onKeyDown(o,f.value,c)||((27==o.keyCode||!1!==r.closeOnEnter&&13==o.keyCode)&&(f.blur(),e.e_stop(o),c()),13==o.keyCode&&i(f.value,o))})),!1!==r.closeOnBlur&&e.on(u,"focusout",(function(e){null!==e.relatedTarget&&c()}))):(s=u.getElementsByTagName("button")[0])&&(e.on(s,"click",(function(){c(),l.focus()})),!1!==r.closeOnBlur&&e.on(s,"blur",c),s.focus()),c})),e.defineExtension("openConfirm",(function(t,i,r){n(this,null);var u=o(this,t,r&&r.bottom),a=u.getElementsByTagName("button"),l=!1,c=this,s=1;function f(){l||(l=!0,e.rmClass(u.parentNode,"dialog-opened"),u.parentNode.removeChild(u),c.focus())}a[0].focus();for(var d=0;d<a.length;++d){var p=a[d];!function(o){e.on(p,"click",(function(n){e.e_preventDefault(n),f(),o&&o(c)}))}(i[d]),e.on(p,"blur",(function(){--s,setTimeout((function(){s<=0&&f()}),200)})),e.on(p,"focus",(function(){++s}))}})),e.defineExtension("openNotification",(function(t,i){n(this,c);var r,u=o(this,t,i&&i.bottom),a=!1,l=i&&void 0!==i.duration?i.duration:5e3;function c(){a||(a=!0,clearTimeout(r),e.rmClass(u.parentNode,"dialog-opened"),u.parentNode.removeChild(u))}return e.on(u,"click",(function(o){e.e_preventDefault(o),c()})),l&&(r=setTimeout(c,l)),c}))}((0,t.r)());var r={};const u=i({__proto__:null,default:(0,t.g)(r)},[r])}}]);