(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7MAe":function(e,t,n){var o,r;void 0===(r="function"==typeof(o=function(){"use strict";function t(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype?function(e,c,a){var i=r.URL||r.webkitURL,s=document.createElement("a");s.download=c=c||e.name||"download",s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?o(s):n(s.href)?t(e,c,a):o(s,s.target="_blank")):(s.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(s.href)}),4e4),setTimeout((function(){o(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,r,c){if(r=r||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,c),r);else if(n(e))t(e,r,c);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout((function(){o(a)}))}}:function(e,n,o,c){if((c=c||open("","_blank"))&&(c.document.title=c.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,o);var a="application/octet-stream"===e.type,i=/constructor/i.test(r.HTMLElement)||r.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||a&&i)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=e:location=e,c=null},l.readAsDataURL(e)}else{var u=r.URL||r.webkitURL,d=u.createObjectURL(e);c?c.location=d:location.href=d,c=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});r.saveAs=c.saveAs=c,e.exports=c})?o.apply(t,[]):o)||(e.exports=r)},Dg8N:function(e,t,n){"use strict";var o=n("KAmQ"),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,c,a,i,s,l,u=!1;t||(t={}),n=t.debug||!1;try{if(a=o(),i=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(o){o.stopPropagation(),t.format&&(o.preventDefault(),void 0===o.clipboardData?(n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData(),window.clipboardData.setData(r[t.format]||r.default,e)):(o.clipboardData.clearData(),o.clipboardData.setData(t.format,e))),t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(l),i.selectNodeContents(l),s.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),c=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(c,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(i):s.removeAllRanges()),l&&document.body.removeChild(l),a()}return u}},Jydr:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("uXPZ"),r=n("ktuP"),c=n("ebt1"),a=n("5FJu");let i=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(t){return new(t||e)},imports:[[o.b,c.a,r.r]]}),e})()},KAmQ:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},VkKV:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("5FJu"),r=n("ktuP");let c=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Bb({type:e,selectors:[["app-header"]],decls:8,vars:1,consts:[[3,"translucent"]],template:function(e,t){1&e&&(o.Kb(0,"ion-header",0),o.Kb(1,"ion-toolbar"),o.Kb(2,"ion-title"),o.cc(3," \u771f\u65b9\u4fbf"),o.Kb(4,"span"),o.cc(5,"\xa0\xa0"),o.Kb(6,"i"),o.cc(7,"\u65b9\u4fbf\u7a0b\u5e8f\u5458\u5f00\u53d1\u5c0f\u5de5\u5177"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&e&&o.Wb("translucent",!0)},directives:[r.j,r.q,r.p],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.easy-ion-item[_ngcontent-%COMP%]{border:1px solid #ccc}.easy-title-center[_ngcontent-%COMP%]{text-align:center}.easy-error-block[_ngcontent-%COMP%]{background:#fbe3e4;color:#d12f19;border:2px solid #fbc2c4;border-radius:4px}.easy-error-block[_ngcontent-%COMP%], .easy-success-block[_ngcontent-%COMP%]{display:block;margin-bottom:1em;padding:.8em;word-break:break-all;word-wrap:break-word;white-space:pre-wrap}.easy-success-block[_ngcontent-%COMP%]{background:#e6efc2;color:#529214;border:2px solid #c6d880;border-radius:4px}"]}),e})()},"eG/G":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("XPyz"),r=n("ixH+"),c=n("yIWP");const a=(e,t)=>{let n,a;const i=(e,o,r)=>{if("undefined"==typeof document)return;const c=document.elementFromPoint(e,o);c&&t(c)?c!==n&&(l(),s(c,r)):l()},s=(e,t)=>{n=e,a||(a=n);const r=n;Object(o.g)(()=>r.classList.add("ion-activated")),t()},l=(e=!1)=>{if(!n)return;const t=n;Object(o.g)(()=>t.classList.remove("ion-activated")),e&&a!==n&&n.click(),n=void 0};return Object(r.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>i(e.currentX,e.currentY,c.a),onMove:e=>i(e.currentX,e.currentY,c.b),onEnd:()=>{l(!0),Object(c.e)(),a=void 0}})}},eHGl:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));const o=async(e,t,n,o,r)=>{if(e)return e.attachViewToDom(t,n,r,o);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const c="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return o&&o.forEach(e=>c.classList.add(e)),r&&Object.assign(c,r),t.appendChild(c),c.componentOnReady&&await c.componentOnReady(),c},r=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},"eN+A":function(e,t){var n=[],o={tab:{char:"\t",size:1},space:{char:" ",size:4}},r={type:"tab"},c=function(e){return"\\"+n.push(e)+"\\"},a=function(e,t){return n[t-1]},i=function(e,t){return new Array(e+1).join(t)};e.exports=function(e,t){var s=o[(t=t||r).type];if(null==s)throw new Error('Unrecognized indent type: "'+t.type+'"');var l=new Array((t.size||s.size)+1).join(s.char);return function(e,t){n=[];var o="",r=0;e=e.replace(/\\./g,c).replace(/(".*?"|'.*?')/g,c).replace(/\s+/,"");for(var s=0;s<e.length;s++){var l=e.charAt(s);switch(l){case"{":case"[":o+=l+"\n"+i(++r,t);break;case"}":case"]":o+="\n"+i(--r,t)+l;break;case",":o+=",\n"+i(r,t);break;case":":o+=": ";break;default:o+=l}}return o.replace(/\[[\d,\s]+?\]/g,(function(e){return e.replace(/\s/g,"")})).replace(/\\(\d+)\\/g,a).replace(/\\(\d+)\\/g,a)}(JSON.stringify(e),l)}},gxxc:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("uXPZ"),r=n("ktuP"),c=n("ebt1"),a=n("5FJu");let i=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(t){return new(t||e)},imports:[[o.b,c.a,r.r]]}),e})()},"t+Jc":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("5FJu"),r=n("ktuP");let c=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Bb({type:e,selectors:[["app-footer"]],decls:9,vars:1,consts:[[3,"translucent"],["size","small",1,"easy-title-center"],["href","//www.runoob.com/"],["target","_blank","rel","nofollow","href","https://beian.miit.gov.cn/"]],template:function(e,t){1&e&&(o.Kb(0,"ion-footer",0),o.Kb(1,"ion-toolbar"),o.Kb(2,"ion-title",1),o.cc(3," Copyright \xa9 "),o.Kb(4,"a",2),o.cc(5,"\u83dc\u9e1f\u6559\u7a0b"),o.Jb(),o.cc(6," 2020 \u5907\u6848\u53f7\uff1a"),o.Kb(7,"a",3),o.cc(8,"\u95fdICP\u590715012807\u53f7-1"),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&e&&o.Wb("translucent",!0)},directives:[r.h,r.q,r.p],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.easy-ion-item[_ngcontent-%COMP%]{border:1px solid #ccc}.easy-title-center[_ngcontent-%COMP%]{text-align:center}.easy-error-block[_ngcontent-%COMP%]{background:#fbe3e4;color:#d12f19;border:2px solid #fbc2c4;border-radius:4px}.easy-error-block[_ngcontent-%COMP%], .easy-success-block[_ngcontent-%COMP%]{display:block;margin-bottom:1em;padding:.8em;word-break:break-all;word-wrap:break-word;white-space:pre-wrap}.easy-success-block[_ngcontent-%COMP%]{background:#e6efc2;color:#529214;border:2px solid #c6d880;border-radius:4px}"]}),e})()},uSNA:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o={bubbles:{dur:1e3,circles:9,fn:(e,t,n)=>{const o=e*t/n-e+"ms",r=2*Math.PI*t/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(e,t,n)=>{const o=t/n,r=e*o-e+"ms",c=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(c)+"px",left:9*Math.cos(c)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})}}},xzIV:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return i}));const o=(e,t)=>null!==t.closest(e),r=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,["ion-color-"+e]:!0},t):t,c=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},a=/^[a-z][a-z0-9+\-.]*:/,i=async(e,t,n,o)=>{if(null!=e&&"#"!==e[0]&&!a.test(e)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(e,n,o)}return!1}},yIWP:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return i}));const o={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})},notification(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},r=()=>{o.selection()},c=()=>{o.selectionStart()},a=()=>{o.selectionChanged()},i=()=>{o.selectionEnd()},s=e=>{o.impact(e)}}}]);