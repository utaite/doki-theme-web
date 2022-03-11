const CURRENT_THEME_ID="62a4f26f-34b2-46f8-a10c-798e48c1ce9d";(()=>{"use strict";var e={518:(e,t)=>{var n,o;Object.defineProperty(t,"__esModule",{value:!0}),t.ThemePools=t.PluginEventTypes=void 0,(o=t.PluginEventTypes||(t.PluginEventTypes={}))[o.THEME_SET=0]="THEME_SET",o[o.FEATURE_SET=1]="FEATURE_SET",o[o.MODE_SET=2]="MODE_SET",o[o.TAB_ATTACHED=3]="TAB_ATTACHED",o[o.MIXED_MODE_SETTINGS_CHANGED=4]="MIXED_MODE_SETTINGS_CHANGED",o[o.DEVICE_MATCH_SETTINGS_CHANGED=5]="DEVICE_MATCH_SETTINGS_CHANGED",o[o.CURRENT_THEME_UPDATED=6]="CURRENT_THEME_UPDATED",o[o.CONTENT_SCRIPT_INJECTED=7]="CONTENT_SCRIPT_INJECTED",o[o.BROWSER_SETTINGS_GRANTED=8]="BROWSER_SETTINGS_GRANTED",(n=t.ThemePools||(t.ThemePools={}))[n.DEFAULT=0]="DEFAULT",n[n.LIGHT=1]="LIGHT",n[n.DARK=2]="DARK",n[n.MATCH_DEVICE=3]="MATCH_DEVICE"},172:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ContentInjector=void 0;var o=n(518),r=function(){function e(e){this.styleId=e}return e.prototype.initialize=function(){chrome.runtime.onMessage.addListener(this.handleMessage.bind(this));var e={type:o.PluginEventTypes.CONTENT_SCRIPT_INJECTED,payload:{}};chrome.runtime.sendMessage(e)},e.prototype.handleMessage=function(e){e.type===o.PluginEventTypes.CURRENT_THEME_UPDATED&&this.injectContent(e)},e.prototype.injectContent=function(e){var t=this.createStyles(e.payload.themeDefinition),n=document.head.querySelector("style[id='".concat(this.styleId,"']"));n&&document.head.removeChild(n);var o=document.createTextNode(t),r=document.createElement("style");r.id=this.styleId,r.append(o),document.head.append(r)},e}();t.ContentInjector=r},186:function(e,t,n){var o,r=this&&this.__extends||(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),(new(function(e){function t(){return e.call(this,"doki_themed_scrollbar")||this}return r(t,e),t.prototype.createStyles=function(e){var t=e.colors.accentColor;return"*::-webkit-scrollbar {\n        width: 0.5em;\n      }\n      *::-webkit-scrollbar-track {\n        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.00);\n      }\n      *::-webkit-scrollbar-thumb {\n        background-color: ".concat(t,";\n     } \n")},t}(n(172).ContentInjector))).initialize()}},t={};!function n(o){var r=t[o];if(void 0!==r)return r.exports;var E=t[o]={exports:{}};return e[o].call(E.exports,E,E.exports,n),E.exports}(186)})();