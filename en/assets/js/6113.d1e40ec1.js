"use strict";(self.webpackChunkmobit_docs=self.webpackChunkmobit_docs||[]).push([[924,6113],{80924:(e,o,t)=>{t.r(o),t.d(o,{a:()=>i,d:()=>u});var n=t(50090);function r(e,o){for(var t=0;t<o.length;t++){const n=o[t];if("string"!=typeof n&&!Array.isArray(n))for(const o in n)if("default"!==o&&!(o in e)){const t=Object.getOwnPropertyDescriptor(n,o);t&&Object.defineProperty(e,o,t.get?t:{enumerable:!0,get:()=>n[o]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}!function(e){function o(o,t,n){var r,i=o.getWrapperElement();return(r=i.appendChild(document.createElement("div"))).className=n?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top","string"==typeof t?r.innerHTML=t:r.appendChild(t),e.addClass(i,"dialog-opened"),r}function t(e,o){e.state.currentNotificationClose&&e.state.currentNotificationClose(),e.state.currentNotificationClose=o}e.defineExtension("openDialog",(function(n,r,i){i||(i={}),t(this,null);var u=o(this,n,i.bottom),s=!1,a=this;function l(o){if("string"==typeof o)f.value=o;else{if(s)return;s=!0,e.rmClass(u.parentNode,"dialog-opened"),u.parentNode.removeChild(u),a.focus(),i.onClose&&i.onClose(u)}}var c,f=u.getElementsByTagName("input")[0];return f?(f.focus(),i.value&&(f.value=i.value,!1!==i.selectValueOnOpen&&f.select()),i.onInput&&e.on(f,"input",(function(e){i.onInput(e,f.value,l)})),i.onKeyUp&&e.on(f,"keyup",(function(e){i.onKeyUp(e,f.value,l)})),e.on(f,"keydown",(function(o){i&&i.onKeyDown&&i.onKeyDown(o,f.value,l)||((27==o.keyCode||!1!==i.closeOnEnter&&13==o.keyCode)&&(f.blur(),e.e_stop(o),l()),13==o.keyCode&&r(f.value,o))})),!1!==i.closeOnBlur&&e.on(u,"focusout",(function(e){null!==e.relatedTarget&&l()}))):(c=u.getElementsByTagName("button")[0])&&(e.on(c,"click",(function(){l(),a.focus()})),!1!==i.closeOnBlur&&e.on(c,"blur",l),c.focus()),l})),e.defineExtension("openConfirm",(function(n,r,i){t(this,null);var u=o(this,n,i&&i.bottom),s=u.getElementsByTagName("button"),a=!1,l=this,c=1;function f(){a||(a=!0,e.rmClass(u.parentNode,"dialog-opened"),u.parentNode.removeChild(u),l.focus())}s[0].focus();for(var d=0;d<s.length;++d){var p=s[d];!function(o){e.on(p,"click",(function(t){e.e_preventDefault(t),f(),o&&o(l)}))}(r[d]),e.on(p,"blur",(function(){--c,setTimeout((function(){c<=0&&f()}),200)})),e.on(p,"focus",(function(){++c}))}})),e.defineExtension("openNotification",(function(n,r){t(this,l);var i,u=o(this,n,r&&r.bottom),s=!1,a=r&&void 0!==r.duration?r.duration:5e3;function l(){s||(s=!0,clearTimeout(i),e.rmClass(u.parentNode,"dialog-opened"),u.parentNode.removeChild(u))}return e.on(u,"click",(function(o){e.e_preventDefault(o),l()})),a&&(i=setTimeout(l,a)),l}))}((0,n.r)());var i={};const u=r({__proto__:null,default:(0,n.g)(i)},[i])},6113:(e,o,t)=>{t.r(o),t.d(o,{j:()=>s});var n=t(50090),r=t(80924);function i(e,o){for(var t=0;t<o.length;t++){const n=o[t];if("string"!=typeof n&&!Array.isArray(n))for(const o in n)if("default"!==o&&!(o in e)){const t=Object.getOwnPropertyDescriptor(n,o);t&&Object.defineProperty(e,o,t.get?t:{enumerable:!0,get:()=>n[o]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}!function(e){function o(e,o,t,n,r){e.openDialog?e.openDialog(o,r,{value:n,selectValueOnOpen:!0,bottom:e.options.search.bottom}):r(prompt(t,n))}function t(e){return e.phrase("Jump to line:")+' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">'+e.phrase("(Use line:column or scroll% syntax)")+"</span>"}function n(e,o){var t=Number(o);return/^[-+]/.test(o)?e.getCursor().line+t:t-1}e.defineOption("search",{bottom:!1}),e.commands.jumpToLine=function(e){var r=e.getCursor();o(e,t(e),e.phrase("Jump to line:"),r.line+1+":"+r.ch,(function(o){var t;if(o)if(t=/^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(o))e.setCursor(n(e,t[1]),Number(t[2]));else if(t=/^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(o)){var i=Math.round(e.lineCount()*Number(t[1])/100);/^[-+]/.test(t[1])&&(i=r.line+i+1),e.setCursor(i-1,r.ch)}else(t=/^\s*\:?\s*([\+\-]?\d+)\s*/.exec(o))&&e.setCursor(n(e,t[1]),r.ch)}))},e.keyMap.default["Alt-G"]="jumpToLine"}((0,n.r)(),r.a);var u={};const s=i({__proto__:null,default:(0,n.g)(u)},[u])}}]);