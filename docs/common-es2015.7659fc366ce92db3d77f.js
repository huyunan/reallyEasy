(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Dg8N:function(t,e,n){"use strict";var o=n("KAmQ"),r={"text/plain":"Text","text/html":"Url",default:"Text"};t.exports=function(t,e){var n,a,i,c,s,l,u=!1;e||(e={}),n=e.debug||!1;try{if(i=o(),c=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=t,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(o){o.stopPropagation(),e.format&&(o.preventDefault(),void 0===o.clipboardData?(n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData(),window.clipboardData.setData(r[e.format]||r.default,t)):(o.clipboardData.clearData(),o.clipboardData.setData(e.format,t))),e.onCopy&&(o.preventDefault(),e.onCopy(o.clipboardData))})),document.body.appendChild(l),c.selectNodeContents(l),s.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),a=function(t){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}("message"in e?e.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,t)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),l&&document.body.removeChild(l),i()}return u}},KAmQ:function(t,e){t.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],o=0;o<t.rangeCount;o++)n.push(t.getRangeAt(o));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||n.forEach((function(e){t.addRange(e)})),e&&e.focus()}}},"eG/G":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("XPyz"),r=n("ixH+"),a=n("yIWP");const i=(t,e)=>{let n,i;const c=(t,o,r)=>{if("undefined"==typeof document)return;const a=document.elementFromPoint(t,o);a&&e(a)?a!==n&&(l(),s(a,r)):l()},s=(t,e)=>{n=t,i||(i=n);const r=n;Object(o.g)(()=>r.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(o.g)(()=>e.classList.remove("ion-activated")),t&&i!==n&&n.click(),n=void 0};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,a.a),onMove:t=>c(t.currentX,t.currentY,a.b),onEnd:()=>{l(!0),Object(a.e)(),i=void 0}})}},eHGl:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));const o=async(t,e,n,o,r)=>{if(t)return t.attachViewToDom(e,n,r,o);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const a="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return o&&o.forEach(t=>a.classList.add(t)),r&&Object.assign(a,r),e.appendChild(a),a.componentOnReady&&await a.componentOnReady(),a},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},uSNA:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const o=t*e/n-t+"ms",r=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const o=e/n,r=t*o-t+"ms",a=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},xzIV:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c}));const o=(t,e)=>null!==e.closest(t),r=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,a=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},i=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,n,o)=>{if(null!=t&&"#"!==t[0]&&!i.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,o)}return!1}},yIWP:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return c}));const o={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{o.selection()},a=()=>{o.selectionStart()},i=()=>{o.selectionChanged()},c=()=>{o.selectionEnd()},s=t=>{o.impact(t)}}}]);