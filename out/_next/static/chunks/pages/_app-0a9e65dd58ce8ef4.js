(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9711:function(e,r,i){"use strict";i.d(r,{BH:function(){return Deferred},LL:function(){return ErrorFactory},ZR:function(){return FirebaseError},gQ:function(){return Sha1},hu:function(){return assert},g5:function(){return assertionError},US:function(){return l},tV:function(){return base64Decode},h$:function(){return base64Encode},L:function(){return base64urlEncodeWithoutPadding},r3:function(){return contains},Sg:function(){return createMockUserToken},ne:function(){return createSubscribe},p$:function(){return deepCopy},vZ:function(){return function deepEqual(e,r){if(e===r)return!0;let i=Object.keys(e),s=Object.keys(r);for(let o of i){if(!s.includes(o))return!1;let i=e[o],l=r[o];if(isObject(i)&&isObject(l)){if(!deepEqual(i,l))return!1}else if(i!==l)return!1}for(let e of s)if(!i.includes(e))return!1;return!0}},gK:function(){return errorPrefix},pd:function(){return extractQuerystring},aH:function(){return getDefaultAppConfig},q4:function(){return getDefaultEmulatorHost},P0:function(){return getDefaultEmulatorHostnameAndPort},Pz:function(){return getExperimentalSetting},m9:function(){return getModularInstance},z$:function(){return getUA},GJ:function(){return isAdmin},ru:function(){return isBrowserExtension},Xx:function(){return isCloudWorkstation},L_:function(){return isCloudflareWorker},xb:function(){return isEmpty},w1:function(){return isIE},hl:function(){return isIndexedDBAvailable},uI:function(){return isMobileCordova},Yr:function(){return isNodeSdk},b$:function(){return isReactNative},G6:function(){return isSafari},w9:function(){return isValidFormat},cI:function(){return jsonEval},UI:function(){return map},Uo:function(){return pingServer},xO:function(){return querystring},zd:function(){return querystringDecode},DV:function(){return safeGet},ug:function(){return stringLength},dS:function(){return stringToByteArray},Wl:function(){return stringify},dp:function(){return updateEmulatorBanner},eu:function(){return validateIndexedDBOpenable}});let getDefaultsFromPostinstall=()=>void 0;var s=i(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},assert=function(e,r){if(!e)throw assertionError(r)},assertionError=function(e){return Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},stringToByteArray$1=function(e){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e.charCodeAt(s);o<128?r[i++]=o:(o<2048?r[i++]=o>>6|192:((64512&o)==55296&&s+1<e.length&&(64512&e.charCodeAt(s+1))==56320?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++s)),r[i++]=o>>18|240,r[i++]=o>>12&63|128):r[i++]=o>>12|224,r[i++]=o>>6&63|128),r[i++]=63&o|128)}return r},byteArrayToString=function(e){let r=[],i=0,s=0;for(;i<e.length;){let o=e[i++];if(o<128)r[s++]=String.fromCharCode(o);else if(o>191&&o<224){let l=e[i++];r[s++]=String.fromCharCode((31&o)<<6|63&l)}else if(o>239&&o<365){let l=e[i++],h=e[i++],d=e[i++],f=((7&o)<<18|(63&l)<<12|(63&h)<<6|63&d)-65536;r[s++]=String.fromCharCode(55296+(f>>10)),r[s++]=String.fromCharCode(56320+(1023&f))}else{let l=e[i++],h=e[i++];r[s++]=String.fromCharCode((15&o)<<12|(63&l)<<6|63&h)}}return r.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,r){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let i=r?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){let o=e[r],l=r+1<e.length,h=l?e[r+1]:0,d=r+2<e.length,f=d?e[r+2]:0,_=o>>2,g=(3&o)<<4|h>>4,A=(15&h)<<2|f>>6,b=63&f;d||(b=64,l||(A=64)),s.push(i[_],i[g],i[A],i[b])}return s.join("")},encodeString(e,r){return this.HAS_NATIVE_SUPPORT&&!r?btoa(e):this.encodeByteArray(stringToByteArray$1(e),r)},decodeString(e,r){return this.HAS_NATIVE_SUPPORT&&!r?atob(e):byteArrayToString(this.decodeStringToByteArray(e,r))},decodeStringToByteArray(e,r){this.init_();let i=r?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){let o=i[e.charAt(r++)],l=r<e.length,h=l?i[e.charAt(r)]:0;++r;let d=r<e.length,f=d?i[e.charAt(r)]:64;++r;let _=r<e.length,g=_?i[e.charAt(r)]:64;if(++r,null==o||null==h||null==f||null==g)throw new DecodeBase64StringError;let A=o<<2|h>>4;if(s.push(A),64!==f){let e=h<<4&240|f>>2;if(s.push(e),64!==g){let e=f<<6&192|g;s.push(e)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};let DecodeBase64StringError=class DecodeBase64StringError extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};let base64Encode=function(e){let r=stringToByteArray$1(e);return l.encodeByteArray(r,!0)},base64urlEncodeWithoutPadding=function(e){return base64Encode(e).replace(/\./g,"")},base64Decode=function(e){try{return l.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function deepCopy(e){return function deepExtend(e,r){if(!(r instanceof Object))return r;switch(r.constructor){case Date:return new Date(r.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return r}for(let i in r)r.hasOwnProperty(i)&&"__proto__"!==i&&(e[i]=deepExtend(e[i],r[i]));return e}(void 0,e)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let getDefaultsFromGlobal=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i.g)return i.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,getDefaultsFromEnvVariable=()=>{if(void 0===s||void 0===s.env)return;let e=s.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},getDefaultsFromCookie=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let r=e&&base64Decode(e[1]);return r&&JSON.parse(r)},getDefaults=()=>{try{return getDefaultsFromPostinstall()||getDefaultsFromGlobal()||getDefaultsFromEnvVariable()||getDefaultsFromCookie()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},getDefaultEmulatorHost=e=>getDefaults()?.emulatorHosts?.[e],getDefaultEmulatorHostnameAndPort=e=>{let r=getDefaultEmulatorHost(e);if(!r)return;let i=r.lastIndexOf(":");if(i<=0||i+1===r.length)throw Error(`Invalid host ${r} with no separate hostname and port!`);let s=parseInt(r.substring(i+1),10);return"["===r[0]?[r.substring(1,i-1),s]:[r.substring(0,i),s]},getDefaultAppConfig=()=>getDefaults()?.config,getExperimentalSetting=e=>getDefaults()?.[`_${e}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Deferred=class Deferred{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,i)=>{r?this.reject(r):this.resolve(i),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(r):e(r,i))}}};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function isCloudWorkstation(e){try{let r=e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e;return r.endsWith(".cloudworkstations.dev")}catch{return!1}}async function pingServer(e){let r=await fetch(e,{credentials:"include"});return r.ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function createMockUserToken(e,r){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let i=r||"demo-project",s=e.iat||0,o=e.sub||e.user_id;if(!o)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let l={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...e};return[base64urlEncodeWithoutPadding(JSON.stringify({alg:"none",type:"JWT"})),base64urlEncodeWithoutPadding(JSON.stringify(l)),""].join(".")}let h={},d=!1;function updateEmulatorBanner(e,r){if("undefined"==typeof window||"undefined"==typeof document||!isCloudWorkstation(window.location.host)||h[e]===r||h[e]||d)return;function prefixedId(e){return`__firebase__banner__${e}`}h[e]=r;let i="__firebase__banner",s=function(){let e={prod:[],emulator:[]};for(let r of Object.keys(h))h[r]?e.emulator.push(r):e.prod.push(r);return e}(),o=s.prod.length>0;function setupDom(){let e,r;let s=(e=document.getElementById(i),r=!1,e||((e=document.createElement("div")).setAttribute("id",i),r=!0),{created:r,element:e}),l=prefixedId("text"),h=document.getElementById(l)||document.createElement("span"),f=prefixedId("learnmore"),_=document.getElementById(f)||document.createElement("a"),g=prefixedId("preprendIcon"),A=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(s.created){let e=s.element;e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center",_.setAttribute("id",f),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline";let r=function(){let e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{d=!0,function(){let e=document.getElementById(i);e&&e.remove()}()},e}();A.setAttribute("width","24"),A.setAttribute("id",g),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px",e.append(A,h,_,r),document.body.appendChild(e)}o?(h.innerText="Preview backend disconnected.",A.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(A.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,h.innerText="Preview backend running in this workspace."),h.setAttribute("id",l)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",setupDom):setupDom()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getUA(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function isMobileCordova(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())}function isCloudflareWorker(){return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function isBrowserExtension(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function isReactNative(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function isIE(){let e=getUA();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function isNodeSdk(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN}function isSafari(){return!function(){let e=getDefaults()?.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(i.g.process)}catch(e){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function isIndexedDBAvailable(){try{return"object"==typeof indexedDB}catch(e){return!1}}function validateIndexedDBOpenable(){return new Promise((e,r)=>{try{let i=!0,s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(s),e(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{r(o.error?.message||"")}}catch(e){r(e)}})}let FirebaseError=class FirebaseError extends Error{constructor(e,r,i){super(r),this.code=e,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,FirebaseError.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ErrorFactory.prototype.create)}};let ErrorFactory=class ErrorFactory{constructor(e,r,i){this.service=e,this.serviceName=r,this.errors=i}create(e,...r){let i=r[0]||{},s=`${this.service}/${e}`,o=this.errors[e],l=o?o.replace(f,(e,r)=>{let s=i[r];return null!=s?String(s):`<${r}?>`}):"Error",h=`${this.serviceName}: ${l} (${s}).`,d=new FirebaseError(s,h,i);return d}};let f=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jsonEval(e){return JSON.parse(e)}function stringify(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let decode=function(e){let r={},i={},s={},o="";try{let l=e.split(".");r=jsonEval(base64Decode(l[0])||""),i=jsonEval(base64Decode(l[1])||""),o=l[2],s=i.d||{},delete i.d}catch(e){}return{header:r,claims:i,data:s,signature:o}},isValidFormat=function(e){let r=decode(e),i=r.claims;return!!i&&"object"==typeof i&&i.hasOwnProperty("iat")},isAdmin=function(e){let r=decode(e).claims;return"object"==typeof r&&!0===r.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function contains(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function safeGet(e,r){return Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0}function isEmpty(e){for(let r in e)if(Object.prototype.hasOwnProperty.call(e,r))return!1;return!0}function map(e,r,i){let s={};for(let o in e)Object.prototype.hasOwnProperty.call(e,o)&&(s[o]=r.call(i,e[o],o,e));return s}function isObject(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function querystring(e){let r=[];for(let[i,s]of Object.entries(e))Array.isArray(s)?s.forEach(e=>{r.push(encodeURIComponent(i)+"="+encodeURIComponent(e))}):r.push(encodeURIComponent(i)+"="+encodeURIComponent(s));return r.length?"&"+r.join("&"):""}function querystringDecode(e){let r={},i=e.replace(/^\?/,"").split("&");return i.forEach(e=>{if(e){let[i,s]=e.split("=");r[decodeURIComponent(i)]=decodeURIComponent(s)}}),r}function extractQuerystring(e){let r=e.indexOf("?");if(!r)return"";let i=e.indexOf("#",r);return e.substring(r,i>0?i:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sha1=class Sha1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,r){let i,s;r||(r=0);let o=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)o[i]=e.charCodeAt(r)<<24|e.charCodeAt(r+1)<<16|e.charCodeAt(r+2)<<8|e.charCodeAt(r+3),r+=4;else for(let i=0;i<16;i++)o[i]=e[r]<<24|e[r+1]<<16|e[r+2]<<8|e[r+3],r+=4;for(let e=16;e<80;e++){let r=o[e-3]^o[e-8]^o[e-14]^o[e-16];o[e]=(r<<1|r>>>31)&4294967295}let l=this.chain_[0],h=this.chain_[1],d=this.chain_[2],f=this.chain_[3],_=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=f^h&(d^f),s=1518500249):(i=h^d^f,s=1859775393):e<60?(i=h&d|f&(h|d),s=2400959708):(i=h^d^f,s=3395469782);let r=(l<<5|l>>>27)+i+_+s+o[e]&4294967295;_=f,f=d,d=(h<<30|h>>>2)&4294967295,h=l,l=r}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+h&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(e,r){if(null==e)return;void 0===r&&(r=e.length);let i=r-this.blockSize,s=0,o=this.buf_,l=this.inbuf_;for(;s<r;){if(0===l)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if("string"==typeof e){for(;s<r;)if(o[l]=e.charCodeAt(s),++l,++s,l===this.blockSize){this.compress_(o),l=0;break}}else for(;s<r;)if(o[l]=e[s],++l,++s,l===this.blockSize){this.compress_(o),l=0;break}}this.inbuf_=l,this.total_+=r}digest(){let e=[],r=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&r,r/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}};function createSubscribe(e,r){let i=new ObserverProxy(e,r);return i.subscribe.bind(i)}let ObserverProxy=class ObserverProxy{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,i){let s;if(void 0===e&&void 0===r&&void 0===i)throw Error("Missing Observer.");void 0===(s=!function(e,r){if("object"!=typeof e||null===e)return!1;for(let i of r)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?{next:e,error:r,complete:i}:e).next&&(s.next=noop),void 0===s.error&&(s.error=noop),void 0===s.complete&&(s.complete=noop);let o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(e){}}),this.observers.push(s),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{r(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function noop(){}function errorPrefix(e,r){return`${e} failed: ${r} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let stringToByteArray=function(e){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e.charCodeAt(s);if(o>=55296&&o<=56319){let r=o-55296;assert(++s<e.length,"Surrogate pair missing trail surrogate.");let i=e.charCodeAt(s)-56320;o=65536+(r<<10)+i}o<128?r[i++]=o:(o<2048?r[i++]=o>>6|192:(o<65536?r[i++]=o>>12|224:(r[i++]=o>>18|240,r[i++]=o>>12&63|128),r[i++]=o>>6&63|128),r[i++]=63&o|128)}return r},stringLength=function(e){let r=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?r++:s<2048?r+=2:s>=55296&&s<=56319?(r+=4,i++):r+=3}return r};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getModularInstance(e){return e&&e._delegate?e._delegate:e}},3454:function(e,r,i){"use strict";var s,o;e.exports=(null==(s=i.g.process)?void 0:s.env)&&"object"==typeof(null==(o=i.g.process)?void 0:o.env)?i.g.process:i(7663)},6840:function(e,r,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return i(3496)}])},6549:function(e,r,i){"use strict";i.d(r,{Z:function(){return components_AI_Interaction}});var s=i(5893),o=i(7294),l=i(6771),h=i(9711),d=i(75);function mapValues(e,r){let i={};for(let s in e)e.hasOwnProperty(s)&&(i[s]=r(e[s]));return i}function encode(e){if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"==typeof e&&isFinite(e)||!0===e||!1===e||"[object String]"===Object.prototype.toString.call(e))return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(e=>encode(e));if("function"==typeof e||"object"==typeof e)return mapValues(e,e=>encode(e));throw Error("Data cannot be encoded in JSON: "+e)}function decode(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{let r=Number(e.value);if(isNaN(r))throw Error("Data cannot be decoded from JSON: "+e);return r}default:throw Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(e=>decode(e)):"function"==typeof e||"object"==typeof e?mapValues(e,e=>decode(e)):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f="functions",_={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let FunctionsError=class FunctionsError extends h.ZR{constructor(e,r,i){super(`${f}/${e}`,r||""),this.details=i,Object.setPrototypeOf(this,FunctionsError.prototype)}};function _errorForResponse(e,r){let i,s=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:case 500:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),o=s;try{let e=r&&r.error;if(e){let r=e.status;if("string"==typeof r){if(!_[r])return new FunctionsError("internal","internal");s=_[r],o=r}let l=e.message;"string"==typeof l&&(o=l),i=e.details,void 0!==i&&(i=decode(i))}}catch(e){}return"ok"===s?null:new FunctionsError(s,o,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ContextProvider=class ContextProvider{constructor(e,r,i,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,(0,l.rh)(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=r.getImmediate({optional:!0}),this.messaging=i.getImmediate({optional:!0}),this.auth||r.get().then(e=>this.auth=e,()=>{}),this.messaging||i.get().then(e=>this.messaging=e,()=>{}),this.appCheck||s?.get().then(e=>this.appCheck=e,()=>{})}async getAuthToken(){if(this.auth)try{let e=await this.auth.getToken();return e?.accessToken}catch(e){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(e){return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){let r=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return r.error?null:r.token}return null}async getContext(e){let r=await this.getAuthToken(),i=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:r,messagingToken:i,appCheckToken:s}}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g="us-central1",A=/^data: (.*?)(?:\n|$)/;let FunctionsService=class FunctionsService{constructor(e,r,i,s,o=g,l=(...e)=>fetch(...e)){this.app=e,this.fetchImpl=l,this.emulatorOrigin=null,this.contextProvider=new ContextProvider(e,r,i,s),this.cancelAllRequests=new Promise(e=>{this.deleteService=()=>Promise.resolve(e())});try{let e=new URL(o);this.customDomain=e.origin+("/"===e.pathname?"":e.pathname),this.region=g}catch(e){this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(e){let r=this.app.options.projectId;if(null!==this.emulatorOrigin){let i=this.emulatorOrigin;return`${i}/${r}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${r}.cloudfunctions.net/${e}`}};function getCredentials(e){return e.emulatorOrigin&&(0,h.Xx)(e.emulatorOrigin)?"include":void 0}async function postJSON(e,r,i,s,o){let l;i["Content-Type"]="application/json";try{l=await s(e,{method:"POST",body:JSON.stringify(r),headers:i,credentials:getCredentials(o)})}catch(e){return{status:0,json:null}}let h=null;try{h=await l.json()}catch(e){}return{status:l.status,json:h}}async function makeAuthHeaders(e,r){let i={},s=await e.contextProvider.getContext(r.limitedUseAppCheckTokens);return s.authToken&&(i.Authorization="Bearer "+s.authToken),s.messagingToken&&(i["Firebase-Instance-ID-Token"]=s.messagingToken),null!==s.appCheckToken&&(i["X-Firebase-AppCheck"]=s.appCheckToken),i}async function callAtURL(e,r,i,s){let o;i=encode(i);let l={data:i},h=await makeAuthHeaders(e,s),d=s.timeout||7e4,f=(o=null,{promise:new Promise((e,r)=>{o=setTimeout(()=>{r(new FunctionsError("deadline-exceeded","deadline-exceeded"))},d)}),cancel:()=>{o&&clearTimeout(o)}}),_=await Promise.race([postJSON(r,l,h,e.fetchImpl,e),f.promise,e.cancelAllRequests]);if(f.cancel(),!_)throw new FunctionsError("cancelled","Firebase Functions instance was deleted.");let g=_errorForResponse(_.status,_.json);if(g)throw g;if(!_.json)throw new FunctionsError("internal","Response is not valid JSON object.");let A=_.json.data;if(void 0===A&&(A=_.json.result),void 0===A)throw new FunctionsError("internal","Response is missing data field.");let b=decode(A);return{data:b}}async function streamAtURL(e,r,i,s){let o,l,h;i=encode(i);let d={data:i},f=await makeAuthHeaders(e,s);f["Content-Type"]="application/json",f.Accept="text/event-stream";try{o=await e.fetchImpl(r,{method:"POST",body:JSON.stringify(d),headers:f,signal:s?.signal,credentials:getCredentials(e)})}catch(r){if(r instanceof Error&&"AbortError"===r.name){let e=new FunctionsError("cancelled","Request was cancelled.");return{data:Promise.reject(e),stream:{[Symbol.asyncIterator]:()=>({next:()=>Promise.reject(e)})}}}let e=_errorForResponse(0,null);return{data:Promise.reject(e),stream:{[Symbol.asyncIterator]:()=>({next:()=>Promise.reject(e)})}}}let _=new Promise((e,r)=>{l=e,h=r});s?.signal?.addEventListener("abort",()=>{let e=new FunctionsError("cancelled","Request was cancelled.");h(e)});let g=o.body.getReader(),b=function(e,r,i,s){let processLine=(e,s)=>{let o=e.match(A);if(!o)return;let l=o[1];try{let e=JSON.parse(l);if("result"in e){r(decode(e.result));return}if("message"in e){s.enqueue(decode(e.message));return}if("error"in e){let r=_errorForResponse(0,e);s.error(r),i(r);return}}catch(e){if(e instanceof FunctionsError){s.error(e),i(e);return}}},o=new TextDecoder;return new ReadableStream({start(r){let l="";return pump();async function pump(){if(s?.aborted){let e=new FunctionsError("cancelled","Request was cancelled");return r.error(e),i(e),Promise.resolve()}try{let{value:h,done:d}=await e.read();if(d){l.trim()&&processLine(l.trim(),r),r.close();return}if(s?.aborted){let s=new FunctionsError("cancelled","Request was cancelled");r.error(s),i(s),await e.cancel();return}l+=o.decode(h,{stream:!0});let f=l.split("\n");for(let e of(l=f.pop()||"",f))e.trim()&&processLine(e.trim(),r);return pump()}catch(s){let e=s instanceof FunctionsError?s:_errorForResponse(0,null);r.error(e),i(e)}}},cancel:()=>e.cancel()})}(g,l,h,s?.signal);return{stream:{[Symbol.asyncIterator](){let e=b.getReader();return{async next(){let{value:r,done:i}=await e.read();return{value:r,done:i}},return:async()=>(await e.cancel(),{done:!0,value:void 0})}}},data:_}}let b="@firebase/functions",k="0.13.1";(0,l.Xd)(new d.wA(f,(e,{instanceIdentifier:r})=>{let i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("messaging-internal"),l=e.getProvider("app-check-internal");return new FunctionsService(i,s,o,l,r)},"PUBLIC").setMultipleInstances(!0)),(0,l.KN)(b,k,void 0),(0,l.KN)(b,k,"esm2020");var components_AI_Interaction=()=>{let[e,r]=(0,o.useState)(""),[i,d]=(0,o.useState)(""),[_,A]=(0,o.useState)(!1),handleGenerate=async()=>{if(!e){alert("Please enter a prompt.");return}A(!0),d("");try{let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e=(0,l.Mq)(),r=g){let i=(0,l.qX)((0,h.m9)(e),f),s=i.getImmediate({identifier:r}),o=(0,h.P0)("functions");return o&&function(e,r,i){!function(e,r,i){let s=(0,h.Xx)(r);e.emulatorOrigin=`http${s?"s":""}://${r}:${i}`,s&&((0,h.Uo)(e.emulatorOrigin+"/backends"),(0,h.dp)("Functions",!0))}((0,h.m9)(e),r,i)}(s,...o),s}(),i=function(e,r,i){let callable=s=>(function(e,r,i,s){let o=e._url(r);return callAtURL(e,o,i,s)})(e,r,s,i||{});return callable.stream=(i,s)=>(function(e,r,i,s){let o=e._url(r);return streamAtURL(e,o,i,s||{})})(e,r,i,s),callable}((0,h.m9)(r),"generateCode",void 0),s=await i({prompt:e}),o=s.data;d(o.code)}catch(e){console.error("Error generating code:",e),alert("Failed to generate code. Please try again.")}finally{A(!1)}};return(0,s.jsxs)("div",{className:"w-full max-w-4xl mx-auto bg-white shadow-2xl rounded-lg p-8 mt-4",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold text-center text-gray-800 mb-6",children:"AI Code Generator"}),(0,s.jsx)("div",{className:"mb-6",children:(0,s.jsx)("textarea",{value:e,onChange:e=>r(e.target.value),placeholder:"Enter your prompt here, e.g., 'Create a semantic HTML structure for a hero section...'",className:"w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"})}),(0,s.jsx)("div",{className:"text-center mb-6",children:(0,s.jsx)("button",{onClick:handleGenerate,disabled:_,className:"bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300 ease-in-out",children:_?"Generating...":"Generate Code"})}),i&&(0,s.jsxs)("div",{className:"bg-gray-900 text-white p-6 rounded-lg",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-4",children:"Generated Code:"}),(0,s.jsx)("pre",{className:"whitespace-pre-wrap",children:(0,s.jsx)("code",{children:i})})]})]})}},3496:function(e,r,i){"use strict";let s,o,l,h,d,f,_,g,A,b,k;i.r(r),i.d(r,{default:function(){return _app}});var M,q,j,$,ee,et,er,en,ei,es,eo,ea,el,eu,eh,ed,ep,ef,e_,em,eg,ey,eE,eI,eT,ev=i(5893);i(415);var eP=i(6771);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,eP.KN)("firebase","12.4.0","app");var eA=i(9711),eR=i(75);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ew="firebasestorage.googleapis.com";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let StorageError=class StorageError extends eA.ZR{constructor(e,r,i=0){super(prependCode(e),`Firebase Storage: ${r} (${prependCode(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,StorageError.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return prependCode(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}};function prependCode(e){return"storage/"+e}function invalidArgument(e){return new StorageError(er.INVALID_ARGUMENT,e)}function appDeleted(){return new StorageError(er.APP_DELETED,"The Firebase app was deleted.")}(M=er||(er={})).UNKNOWN="unknown",M.OBJECT_NOT_FOUND="object-not-found",M.BUCKET_NOT_FOUND="bucket-not-found",M.PROJECT_NOT_FOUND="project-not-found",M.QUOTA_EXCEEDED="quota-exceeded",M.UNAUTHENTICATED="unauthenticated",M.UNAUTHORIZED="unauthorized",M.UNAUTHORIZED_APP="unauthorized-app",M.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",M.INVALID_CHECKSUM="invalid-checksum",M.CANCELED="canceled",M.INVALID_EVENT_NAME="invalid-event-name",M.INVALID_URL="invalid-url",M.INVALID_DEFAULT_BUCKET="invalid-default-bucket",M.NO_DEFAULT_BUCKET="no-default-bucket",M.CANNOT_SLICE_BLOB="cannot-slice-blob",M.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",M.NO_DOWNLOAD_URL="no-download-url",M.INVALID_ARGUMENT="invalid-argument",M.INVALID_ARGUMENT_COUNT="invalid-argument-count",M.APP_DELETED="app-deleted",M.INVALID_ROOT_OPERATION="invalid-root-operation",M.INVALID_FORMAT="invalid-format",M.INTERNAL_ERROR="internal-error",M.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Location=class Location{constructor(e,r){this.bucket=e,this.path_=r}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,r){let i;try{i=Location.makeFromUrl(e,r)}catch(r){return new Location(e,"")}if(""===i.path)return i;throw new StorageError(er.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,r){let i=null,s="([A-Za-z0-9.\\-_]+)",o=RegExp("^gs://"+s+"(/(.*))?$","i");function httpModify(e){e.path_=decodeURIComponent(e.path)}let l=r.replace(/[.]/g,"\\."),h=RegExp(`^https?://${l}/v[A-Za-z0-9_]+/b/${s}/o(/([^?#]*).*)?$`,"i"),d=RegExp(`^https?://${r===ew?"(?:storage.googleapis.com|storage.cloud.google.com)":r}/${s}/([^?#]*)`,"i"),f=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:h,indices:{bucket:1,path:3},postModify:httpModify},{regex:d,indices:{bucket:1,path:2},postModify:httpModify}];for(let r=0;r<f.length;r++){let s=f[r],o=s.regex.exec(e);if(o){let e=o[s.indices.bucket],r=o[s.indices.path];r||(r=""),i=new Location(e,r),s.postModify(i);break}}if(null==i)throw new StorageError(er.INVALID_URL,"Invalid URL '"+e+"'.");return i}};let FailRequest=class FailRequest{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}};function validateNumber(e,r,i,s){if(s<r)throw invalidArgument(`Invalid value for '${e}'. Expected ${r} or greater.`);if(s>i)throw invalidArgument(`Invalid value for '${e}'. Expected ${i} or less.`)}(q=en||(en={}))[q.NO_ERROR=0]="NO_ERROR",q[q.NETWORK_ERROR=1]="NETWORK_ERROR",q[q.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NetworkRequest=class NetworkRequest{constructor(e,r,i,s,o,l,h,d,f,_,g,A=!0,b=!1){this.url_=e,this.method_=r,this.headers_=i,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=h,this.errorCallback_=d,this.timeout_=f,this.progressCallback_=_,this.connectionFactory_=g,this.retry=A,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,r)=>{this.resolve_=e,this.reject_=r,this.start_()})}start_(){let backoffDone=(e,r)=>{let i=this.resolve_,s=this.reject_,o=r.connection;if(r.wasSuccessCode)try{let e=this.callback_(o,o.getResponse());void 0!==e?i(e):i()}catch(e){s(e)}else if(null!==o){let e=new StorageError(er.UNKNOWN,"An unknown error occurred, please check the error payload for server response.");e.serverResponse=o.getErrorText(),s(this.errorCallback_?this.errorCallback_(o,e):e)}else if(r.canceled){let e=this.appDelete_?appDeleted():new StorageError(er.CANCELED,"User canceled the upload/download.");s(e)}else{let e=new StorageError(er.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.");s(e)}};this.canceled_?backoffDone(!1,new RequestEndStatus(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,r,i){let s=1,o=null,l=null,h=!1,d=0,f=!1;function triggerCallback(...e){f||(f=!0,r.apply(null,e))}function callWithDelay(r){o=setTimeout(()=>{o=null,e(responseHandler,2===d)},r)}function clearGlobalTimeout(){l&&clearTimeout(l)}function responseHandler(e,...r){let i;if(f){clearGlobalTimeout();return}if(e){clearGlobalTimeout(),triggerCallback.call(null,e,...r);return}let o=2===d||h;if(o){clearGlobalTimeout(),triggerCallback.call(null,e,...r);return}s<64&&(s*=2),1===d?(d=2,i=0):i=(s+Math.random())*1e3,callWithDelay(i)}let _=!1;function stop(e){!_&&(_=!0,clearGlobalTimeout(),!f&&(null!==o?(e||(d=2),clearTimeout(o),callWithDelay(0)):e||(d=1)))}return callWithDelay(0),l=setTimeout(()=>{h=!0,stop(!0)},i),stop}((e,r)=>{if(r){e(!1,new RequestEndStatus(!1,null,!0));return}let i=this.connectionFactory_();this.pendingConnection_=i;let progressListener=e=>{let r=e.loaded,i=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(r,i)};null!==this.progressCallback_&&i.addUploadProgressListener(progressListener),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&i.removeUploadProgressListener(progressListener),this.pendingConnection_=null;let r=i.getErrorCode()===en.NO_ERROR,s=i.getStatus();if(!r||/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,r){let i=e>=500&&e<600,s=-1!==[408,429].indexOf(e),o=-1!==r.indexOf(e);return i||s||o}(s,this.additionalRetryCodes_)&&this.retry){let r=i.getErrorCode()===en.ABORT;e(!1,new RequestEndStatus(!1,null,r));return}let o=-1!==this.successCodes_.indexOf(s);e(!0,new RequestEndStatus(o,i))})},backoffDone,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}};let RequestEndStatus=class RequestEndStatus{constructor(e,r,i){this.wasSuccessCode=e,this.connection=r,this.canceled=!!i}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Reference=class Reference{constructor(e,r){this._service=e,r instanceof Location?this._location=r:this._location=Location.makeFromUrl(r,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,r){return new Reference(e,r)}get root(){let e=new Location(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function(e){let r=e.lastIndexOf("/",e.length-2);return -1===r?e:e.slice(r+1)}(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(0===e.length)return null;let r=e.lastIndexOf("/");if(-1===r)return"";let i=e.slice(0,r);return i}(this._location.path);if(null===e)return null;let r=new Location(this._location.bucket,e);return new Reference(this._service,r)}_throwIfRoot(e){if(""===this._location.path)throw new StorageError(er.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}};function extractBucket(e,r){let i=r?.storageBucket;return null==i?null:Location.makeFromBucketSpec(i,e)}let FirebaseStorageImpl=class FirebaseStorageImpl{constructor(e,r,i,s,o,l=!1){this.app=e,this._authProvider=r,this._appCheckProvider=i,this._url=s,this._firebaseVersion=o,this._isUsingEmulator=l,this._bucket=null,this._host=ew,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=s?this._bucket=Location.makeFromBucketSpec(s,this._host):this._bucket=extractBucket(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Location.makeFromBucketSpec(this._url,e):this._bucket=extractBucket(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){validateNumber("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){validateNumber("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let r=await e.getToken();if(null!==r)return r.accessToken}return null}async _getAppCheckToken(){if((0,eP.rh)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let r=await e.getToken();return r.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Reference(this,e)}_makeRequest(e,r,i,s,o=!0){if(this._deleted)return new FailRequest(appDeleted());{let l=function(e,r,i,s,o,l,h=!0,d=!1){let f=function(e){let r=encodeURIComponent,i="?";for(let s in e)if(e.hasOwnProperty(s)){let o=r(s)+"="+r(e[s]);i=i+o+"&"}return i.slice(0,-1)}(e.urlParams),_=e.url+f,g=Object.assign({},e.headers);return r&&(g["X-Firebase-GMPID"]=r),null!==i&&i.length>0&&(g.Authorization="Firebase "+i),g["X-Firebase-Storage-Version"]="webjs/"+(l??"AppManager"),null!==s&&(g["X-Firebase-AppCheck"]=s),new NetworkRequest(_,e.method,g,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,h,d)}(e,this._appId,i,s,r,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,r){let[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,r,i,s).getPromise()}};let eC="@firebase/storage",eS="0.14.0",eV="storage";(0,eP.Xd)(new eR.wA(eV,function(e,{instanceIdentifier:r}){let i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new FirebaseStorageImpl(i,s,o,r,eP.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,eP.KN)(eC,eS,""),(0,eP.KN)(eC,eS,"esm2020");var eN=i(4645),ek="@firebase/ai",eD="2.4.0";let eO="us-central1";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AIError=class AIError extends eA.ZR{constructor(e,r,i){let s=`AI/${e}`,o=`AI: ${r} (${s})`;super(e,o),this.code=e,this.customErrorData=i,Error.captureStackTrace&&Error.captureStackTrace(this,AIError),Object.setPrototypeOf(this,AIError.prototype),this.toString=()=>o}};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eL=["user","model","function","system"],ex={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},eM={SAFETY:"SAFETY",RECITATION:"RECITATION"},eF={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"},eU={ERROR:"error",REQUEST_ERROR:"request-error",RESPONSE_ERROR:"response-error",FETCH_ERROR:"fetch-error",INVALID_CONTENT:"invalid-content",API_NOT_ENABLED:"api-not-enabled",NO_API_KEY:"no-api-key",NO_APP_ID:"no-app-id",NO_MODEL:"no-model",NO_PROJECT_ID:"no-project-id",PARSE_FAILED:"parse-failed",UNSUPPORTED:"unsupported"},eB={VERTEX_AI:"VERTEX_AI",GOOGLE_AI:"GOOGLE_AI"};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Backend=class Backend{constructor(e){this.backendType=e}};let GoogleAIBackend=class GoogleAIBackend extends Backend{constructor(){super(eB.GOOGLE_AI)}};let VertexAIBackend=class VertexAIBackend extends Backend{constructor(e=eO){super(eB.VERTEX_AI),e?this.location=e:this.location=eO}};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eq=new eN.Yd("@firebase/vertexai");(j=ei||(ei={})).UNAVAILABLE="unavailable",j.DOWNLOADABLE="downloadable",j.DOWNLOADING="downloading",j.AVAILABLE="available";/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ChromeAdapterImpl=class ChromeAdapterImpl{constructor(e,r,i={createOptions:{expectedInputs:[{type:"image"}]}}){this.languageModelProvider=e,this.mode=r,this.onDeviceParams=i,this.isDownloading=!1}async isAvailable(e){if(!this.mode)return eq.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===eF.ONLY_IN_CLOUD)return eq.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;let r=await this.downloadIfAvailable();if(this.mode===eF.ONLY_ON_DEVICE){if(r===ei.UNAVAILABLE)throw new AIError(eU.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");return(r===ei.DOWNLOADABLE||r===ei.DOWNLOADING)&&(eq.debug("Waiting for download of LanguageModel to complete."),await this.downloadPromise),!0}return r!==ei.AVAILABLE?(eq.debug(`On-device inference unavailable because availability is "${r}".`),!1):!!ChromeAdapterImpl.isOnDeviceRequest(e)||(eq.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){let r=await this.createSession(),i=await Promise.all(e.contents.map(ChromeAdapterImpl.toLanguageModelMessage)),s=await r.prompt(i,this.onDeviceParams.promptOptions);return ChromeAdapterImpl.toResponse(s)}async generateContentStream(e){let r=await this.createSession(),i=await Promise.all(e.contents.map(ChromeAdapterImpl.toLanguageModelMessage)),s=r.promptStreaming(i,this.onDeviceParams.promptOptions);return ChromeAdapterImpl.toStreamResponse(s)}async countTokens(e){throw new AIError(eU.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(0===e.contents.length)return eq.debug("Empty prompt rejected for on-device inference."),!1;for(let r of e.contents){if("function"===r.role)return eq.debug('"Function" role rejected for on-device inference.'),!1;for(let e of r.parts)if(e.inlineData&&-1===ChromeAdapterImpl.SUPPORTED_MIME_TYPES.indexOf(e.inlineData.mimeType))return eq.debug(`Unsupported mime type "${e.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(){let e=await this.languageModelProvider?.availability(this.onDeviceParams.createOptions);return e===ei.DOWNLOADABLE&&this.download(),e}download(){this.isDownloading||(this.isDownloading=!0,this.downloadPromise=this.languageModelProvider?.create(this.onDeviceParams.createOptions).finally(()=>{this.isDownloading=!1}))}static async toLanguageModelMessage(e){let r=await Promise.all(e.parts.map(ChromeAdapterImpl.toLanguageModelMessageContent));return{role:ChromeAdapterImpl.toLanguageModelMessageRole(e.role),content:r}}static async toLanguageModelMessageContent(e){if(e.text)return{type:"text",value:e.text};if(e.inlineData){let r=await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`),i=await r.blob(),s=await createImageBitmap(i);return{type:"image",value:s}}throw new AIError(eU.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return"model"===e?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new AIError(eU.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");let e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){let r=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(e,i){let s=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:e}]}}]});i.enqueue(r.encode(`data: ${s}

`))}}))}}};function chromeAdapterFactory(e,r,i){if(void 0!==r&&e)return new ChromeAdapterImpl(r.LanguageModel,e,i)}ChromeAdapterImpl.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AIService=class AIService{constructor(e,r,i,s,o){this.app=e,this.backend=r,this.chromeAdapterFactory=o;let l=s?.getImmediate({optional:!0}),h=i?.getImmediate({optional:!0});this.auth=h||null,this.appCheck=l||null,r instanceof VertexAIBackend?this.location=r.location:this.location=""}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AIModel=class AIModel{constructor(e,r){if(e.app?.options?.apiKey){if(e.app?.options?.projectId){if(e.app?.options?.appId){if(this._apiSettings={apiKey:e.app.options.apiKey,project:e.app.options.projectId,appId:e.app.options.appId,automaticDataCollectionEnabled:e.app.automaticDataCollectionEnabled,location:e.location,backend:e.backend},(0,eP.rh)(e.app)&&e.app.settings.appCheckToken){let r=e.app.settings.appCheckToken;this._apiSettings.getAppCheckToken=()=>Promise.resolve({token:r})}else e.appCheck&&(e.options?.useLimitedUseAppCheckTokens?this._apiSettings.getAppCheckToken=()=>e.appCheck.getLimitedUseToken():this._apiSettings.getAppCheckToken=()=>e.appCheck.getToken());e.auth&&(this._apiSettings.getAuthToken=()=>e.auth.getToken()),this.model=AIModel.normalizeModelName(r,this._apiSettings.backend.backendType)}else throw new AIError(eU.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.')}else throw new AIError(eU.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.')}else throw new AIError(eU.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.')}static normalizeModelName(e,r){return r===eB.GOOGLE_AI?AIModel.normalizeGoogleAIModelName(e):AIModel.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){return e.includes("/")?e.startsWith("models/")?`publishers/google/${e}`:e:`publishers/google/models/${e}`}};($=es||(es={})).GENERATE_CONTENT="generateContent",$.STREAM_GENERATE_CONTENT="streamGenerateContent",$.COUNT_TOKENS="countTokens",$.PREDICT="predict";let RequestUrl=class RequestUrl{constructor(e,r,i,s,o){this.model=e,this.task=r,this.apiSettings=i,this.stream=s,this.requestOptions=o}toString(){let e=new URL(this.baseUrl);return e.pathname=`/${this.apiVersion}/${this.modelPath}:${this.task}`,e.search=this.queryParams.toString(),e.toString()}get baseUrl(){return this.requestOptions?.baseUrl||"https://firebasevertexai.googleapis.com"}get apiVersion(){return"v1beta"}get modelPath(){if(this.apiSettings.backend instanceof GoogleAIBackend)return`projects/${this.apiSettings.project}/${this.model}`;if(this.apiSettings.backend instanceof VertexAIBackend)return`projects/${this.apiSettings.project}/locations/${this.apiSettings.backend.location}/${this.model}`;throw new AIError(eU.ERROR,`Invalid backend: ${JSON.stringify(this.apiSettings.backend)}`)}get queryParams(){let e=new URLSearchParams;return this.stream&&e.set("alt","sse"),e}};async function getHeaders(e){let r=new Headers;if(r.append("Content-Type","application/json"),r.append("x-goog-api-client",function(){let e=[];return e.push(`gl-js/${eD}`),e.push(`fire/${eD}`),e.join(" ")}()),r.append("x-goog-api-key",e.apiSettings.apiKey),e.apiSettings.automaticDataCollectionEnabled&&r.append("X-Firebase-Appid",e.apiSettings.appId),e.apiSettings.getAppCheckToken){let i=await e.apiSettings.getAppCheckToken();i&&(r.append("X-Firebase-AppCheck",i.token),i.error&&eq.warn(`Unable to obtain a valid App Check token: ${i.error.message}`))}if(e.apiSettings.getAuthToken){let i=await e.apiSettings.getAuthToken();i&&r.append("Authorization",`Firebase ${i.accessToken}`)}return r}async function constructRequest(e,r,i,s,o,l){let h=new RequestUrl(e,r,i,s,l);return{url:h.toString(),fetchOptions:{method:"POST",headers:await getHeaders(h),body:o}}}async function index_esm_makeRequest(e,r,i,s,o,l){let h,d;let f=new RequestUrl(e,r,i,s,l);try{let _=await constructRequest(e,r,i,s,o,l),g=l?.timeout!=null&&l.timeout>=0?l.timeout:18e4,A=new AbortController;if(d=setTimeout(()=>A.abort(),g),_.fetchOptions.signal=A.signal,!(h=await fetch(_.url,_.fetchOptions)).ok){let e,r="";try{let i=await h.json();r=i.error.message,i.error.details&&(r+=` ${JSON.stringify(i.error.details)}`,e=i.error.details)}catch(e){}if(403===h.status&&e&&e.some(e=>"SERVICE_DISABLED"===e.reason)&&e.some(e=>e.links?.[0]?.description.includes("Google developers console API activation")))throw new AIError(eU.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${f.apiSettings.project}/genai/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:h.status,statusText:h.statusText,errorDetails:e});throw new AIError(eU.FETCH_ERROR,`Error fetching from ${f}: [${h.status} ${h.statusText}] ${r}`,{status:h.status,statusText:h.statusText,errorDetails:e})}}catch(r){let e=r;throw r.code!==eU.FETCH_ERROR&&r.code!==eU.API_NOT_ENABLED&&r instanceof Error&&((e=new AIError(eU.ERROR,`Error fetching from ${f.toString()}: ${r.message}`)).stack=r.stack),e}finally{d&&clearTimeout(d)}return h}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hasValidCandidates(e){if(!e.candidates||!(e.candidates.length>0))return!1;if(e.candidates.length>1&&eq.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),hadBadFinishReason(e.candidates[0]))throw new AIError(eU.RESPONSE_ERROR,`Response error: ${formatBlockErrorMessage(e)}. Response body stored in error.response`,{response:e});return!0}function createEnhancedContentResponse(e){e.candidates&&!e.candidates[0].hasOwnProperty("index")&&(e.candidates[0].index=0);let r=(e.text=()=>{if(hasValidCandidates(e))return getText(e,e=>!e.thought);if(e.promptFeedback)throw new AIError(eU.RESPONSE_ERROR,`Text not available. ${formatBlockErrorMessage(e)}`,{response:e});return""},e.thoughtSummary=()=>{if(hasValidCandidates(e)){let r=getText(e,e=>!!e.thought);return""===r?void 0:r}if(e.promptFeedback)throw new AIError(eU.RESPONSE_ERROR,`Thought summary not available. ${formatBlockErrorMessage(e)}`,{response:e})},e.inlineDataParts=()=>{if(hasValidCandidates(e))return function(e){let r=[];if(e.candidates?.[0].content?.parts)for(let i of e.candidates?.[0].content?.parts)i.inlineData&&r.push(i);return r.length>0?r:void 0}(e);if(e.promptFeedback)throw new AIError(eU.RESPONSE_ERROR,`Data not available. ${formatBlockErrorMessage(e)}`,{response:e})},e.functionCalls=()=>{if(hasValidCandidates(e))return function(e){let r=[];if(e.candidates?.[0].content?.parts)for(let i of e.candidates?.[0].content?.parts)i.functionCall&&r.push(i.functionCall);return r.length>0?r:void 0}(e);if(e.promptFeedback)throw new AIError(eU.RESPONSE_ERROR,`Function call not available. ${formatBlockErrorMessage(e)}`,{response:e})},e);return r}function getText(e,r){let i=[];if(e.candidates?.[0].content?.parts)for(let s of e.candidates?.[0].content?.parts)s.text&&r(s)&&i.push(s.text);return i.length>0?i.join(""):""}let ej=[eM.RECITATION,eM.SAFETY];function hadBadFinishReason(e){return!!e.finishReason&&ej.some(r=>r===e.finishReason)}function formatBlockErrorMessage(e){let r="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)r+="Response was blocked",e.promptFeedback?.blockReason&&(r+=` due to ${e.promptFeedback.blockReason}`),e.promptFeedback?.blockReasonMessage&&(r+=`: ${e.promptFeedback.blockReasonMessage}`);else if(e.candidates?.[0]){let i=e.candidates[0];hadBadFinishReason(i)&&(r+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(r+=`: ${i.finishMessage}`))}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mapGenerateContentRequest(e){if(e.safetySettings?.forEach(e=>{if(e.method)throw new AIError(eU.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),e.generationConfig?.topK){let r=Math.round(e.generationConfig.topK);r!==e.generationConfig.topK&&(eq.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),e.generationConfig.topK=r)}return e}function mapGenerateContentResponse(e){let r={candidates:e.candidates?function(e){let r;let i=[];return i&&e.forEach(e=>{let s;if(e.citationMetadata&&(s={citations:e.citationMetadata.citationSources}),e.safetyRatings&&(r=e.safetyRatings.map(e=>({...e,severity:e.severity??ex.HARM_SEVERITY_UNSUPPORTED,probabilityScore:e.probabilityScore??0,severityScore:e.severityScore??0}))),e.content?.parts?.some(e=>e?.videoMetadata))throw new AIError(eU.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");let o={index:e.index,content:e.content,finishReason:e.finishReason,finishMessage:e.finishMessage,safetyRatings:r,citationMetadata:s,groundingMetadata:e.groundingMetadata,urlContextMetadata:e.urlContextMetadata};i.push(o)}),i}(e.candidates):void 0,prompt:e.promptFeedback?function(e){let r=[];e.safetyRatings.forEach(e=>{r.push({category:e.category,probability:e.probability,severity:e.severity??ex.HARM_SEVERITY_UNSUPPORTED,probabilityScore:e.probabilityScore??0,severityScore:e.severityScore??0,blocked:e.blocked})});let i={blockReason:e.blockReason,safetyRatings:r,blockReasonMessage:e.blockReasonMessage};return i}(e.promptFeedback):void 0,usageMetadata:e.usageMetadata};return r}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eW=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function getResponsePromise(e,r){let i=[],s=e.getReader();for(;;){let{done:e,value:o}=await s.read();if(e){let e=function(e){let r=e[e.length-1],i={promptFeedback:r?.promptFeedback};for(let r of e)if(r.candidates)for(let e of r.candidates){let r=e.index||0;i.candidates||(i.candidates=[]),i.candidates[r]||(i.candidates[r]={index:e.index}),i.candidates[r].citationMetadata=e.citationMetadata,i.candidates[r].finishReason=e.finishReason,i.candidates[r].finishMessage=e.finishMessage,i.candidates[r].safetyRatings=e.safetyRatings,i.candidates[r].groundingMetadata=e.groundingMetadata;let s=e.urlContextMetadata;if("object"==typeof s&&null!==s&&Object.keys(s).length>0&&(i.candidates[r].urlContextMetadata=s),e.content){if(!e.content.parts)continue;for(let s of(i.candidates[r].content||(i.candidates[r].content={role:e.content.role||"user",parts:[]}),e.content.parts)){let e={...s};""!==s.text&&Object.keys(e).length>0&&i.candidates[r].content.parts.push(e)}}}return i}(i);return r.backend.backendType===eB.GOOGLE_AI&&(e=mapGenerateContentResponse(e)),createEnhancedContentResponse(e)}i.push(o)}}async function*generateResponseSequence(e,r){let i=e.getReader();for(;;){let e;let{value:s,done:o}=await i.read();if(o)break;e=r.backend.backendType===eB.GOOGLE_AI?createEnhancedContentResponse(mapGenerateContentResponse(s)):createEnhancedContentResponse(s);let l=e.candidates?.[0];(l?.content?.parts||l?.finishReason||l?.citationMetadata||l?.urlContextMetadata)&&(yield e)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eG=[eU.FETCH_ERROR,eU.ERROR,eU.API_NOT_ENABLED];async function callCloudOrDevice(e,r,i,s){if(!r)return s();switch(r.mode){case eF.ONLY_ON_DEVICE:if(await r.isAvailable(e))return i();throw new AIError(eU.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case eF.ONLY_IN_CLOUD:return s();case eF.PREFER_IN_CLOUD:try{return await s()}catch(e){if(e instanceof AIError&&eG.includes(e.code))return i();throw e}case eF.PREFER_ON_DEVICE:if(await r.isAvailable(e))return i();return s();default:throw new AIError(eU.ERROR,`Unexpected infererence mode: ${r.mode}`)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function generateContentStreamOnCloud(e,r,i,s){return e.backend.backendType===eB.GOOGLE_AI&&(i=mapGenerateContentRequest(i)),index_esm_makeRequest(r,es.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(i),s)}async function generateContentStream(e,r,i,s,o){let l=await callCloudOrDevice(i,s,()=>s.generateContentStream(i),()=>generateContentStreamOnCloud(e,r,i,o));return function(e,r){let i=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),s=function(e){let r=e.getReader(),i=new ReadableStream({start(e){let i="";return function pump(){return r.read().then(({value:r,done:s})=>{let o;if(s){if(i.trim()){e.error(new AIError(eU.PARSE_FAILED,"Failed to parse stream"));return}e.close();return}let l=(i+=r).match(eW);for(;l;){try{o=JSON.parse(l[1])}catch(r){e.error(new AIError(eU.PARSE_FAILED,`Error parsing JSON response: "${l[1]}`));return}e.enqueue(o),l=(i=i.substring(l[0].length)).match(eW)}return pump()})}()}});return i}(i),[o,l]=s.tee();return{stream:generateResponseSequence(o,r),response:getResponsePromise(l,r)}}(l,e)}async function generateContentOnCloud(e,r,i,s){return e.backend.backendType===eB.GOOGLE_AI&&(i=mapGenerateContentRequest(i)),index_esm_makeRequest(r,es.GENERATE_CONTENT,e,!1,JSON.stringify(i),s)}async function generateContent(e,r,i,s,o){let l=await callCloudOrDevice(i,s,()=>s.generateContent(i),()=>generateContentOnCloud(e,r,i,o)),h=await processGenerateContentResponse(l,e),d=createEnhancedContentResponse(h);return{response:d}}async function processGenerateContentResponse(e,r){let i=await e.json();return r.backend.backendType===eB.GOOGLE_AI?mapGenerateContentResponse(i):i}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function formatSystemInstruction(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function formatNewContent(e){let r=[];if("string"==typeof e)r=[{text:e}];else for(let i of e)"string"==typeof i?r.push({text:i}):r.push(i);return function(e){let r={role:"user",parts:[]},i={role:"function",parts:[]},s=!1,o=!1;for(let l of e)"functionResponse"in l?(i.parts.push(l),o=!0):(r.parts.push(l),s=!0);if(s&&o)throw new AIError(eU.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!s&&!o)throw new AIError(eU.INVALID_CONTENT,"No Content is provided for sending chat message.");return s?r:i}(r)}function formatGenerateContentInput(e){let r;if(e.contents)r=e;else{let i=formatNewContent(e);r={contents:[i]}}return e.systemInstruction&&(r.systemInstruction=formatSystemInstruction(e.systemInstruction)),r}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ez=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],e$={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},eK={user:["model"],function:["model"],model:["user","function"],system:[]},eH="SILENT_ERROR";let ChatSession=class ChatSession{constructor(e,r,i,s,o){this.model=r,this.chromeAdapter=i,this.params=s,this.requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e,s?.history&&(function(e){let r=null;for(let i of e){let{role:e,parts:s}=i;if(!r&&"user"!==e)throw new AIError(eU.INVALID_CONTENT,`First Content should be with role 'user', got ${e}`);if(!eL.includes(e))throw new AIError(eU.INVALID_CONTENT,`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(eL)}`);if(!Array.isArray(s))throw new AIError(eU.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(0===s.length)throw new AIError(eU.INVALID_CONTENT,"Each Content should have at least one part");let o={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,executableCode:0,codeExecutionResult:0};for(let e of s)for(let r of ez)r in e&&(o[r]+=1);let l=e$[e];for(let r of ez)if(!l.includes(r)&&o[r]>0)throw new AIError(eU.INVALID_CONTENT,`Content with role '${e}' can't contain '${r}' part`);if(r){let i=eK[e];if(!i.includes(r.role))throw new AIError(eU.INVALID_CONTENT,`Content with role '${e}' can't follow '${r.role}'. Valid previous roles: ${JSON.stringify(eK)}`)}r=i}}(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){await this._sendPromise;let r=formatNewContent(e),i={safetySettings:this.params?.safetySettings,generationConfig:this.params?.generationConfig,tools:this.params?.tools,toolConfig:this.params?.toolConfig,systemInstruction:this.params?.systemInstruction,contents:[...this._history,r]},s={};return this._sendPromise=this._sendPromise.then(()=>generateContent(this._apiSettings,this.model,i,this.chromeAdapter,this.requestOptions)).then(e=>{if(e.response.candidates&&e.response.candidates.length>0){this._history.push(r);let i={parts:e.response.candidates?.[0].content.parts||[],role:e.response.candidates?.[0].content.role||"model"};this._history.push(i)}else{let r=formatBlockErrorMessage(e.response);r&&eq.warn(`sendMessage() was unsuccessful. ${r}. Inspect response object for details.`)}s=e}),await this._sendPromise,s}async sendMessageStream(e){await this._sendPromise;let r=formatNewContent(e),i={safetySettings:this.params?.safetySettings,generationConfig:this.params?.generationConfig,tools:this.params?.tools,toolConfig:this.params?.toolConfig,systemInstruction:this.params?.systemInstruction,contents:[...this._history,r]},s=generateContentStream(this._apiSettings,this.model,i,this.chromeAdapter,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>s).catch(e=>{throw Error(eH)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(r);let i={...e.candidates[0].content};i.role||(i.role="model"),this._history.push(i)}else{let r=formatBlockErrorMessage(e);r&&eq.warn(`sendMessageStream() was unsuccessful. ${r}. Inspect response object for details.`)}}).catch(e=>{e.message!==eH&&eq.error(e)}),s}};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function countTokensOnCloud(e,r,i,s){let o="";if(e.backend.backendType===eB.GOOGLE_AI){let e=function(e,r){let i={generateContentRequest:{model:r,...e}};return i}(i,r);o=JSON.stringify(e)}else o=JSON.stringify(i);let l=await index_esm_makeRequest(r,es.COUNT_TOKENS,e,!1,o,s);return l.json()}async function countTokens(e,r,i,s,o){if(s?.mode===eF.ONLY_ON_DEVICE)throw new AIError(eU.UNSUPPORTED,"countTokens() is not supported for on-device models.");return countTokensOnCloud(e,r,i,o)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GenerativeModel=class GenerativeModel extends AIModel{constructor(e,r,i,s){super(e,r.model),this.chromeAdapter=s,this.generationConfig=r.generationConfig||{},this.safetySettings=r.safetySettings||[],this.tools=r.tools,this.toolConfig=r.toolConfig,this.systemInstruction=formatSystemInstruction(r.systemInstruction),this.requestOptions=i||{}}async generateContent(e){let r=formatGenerateContentInput(e);return generateContent(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...r},this.chromeAdapter,this.requestOptions)}async generateContentStream(e){let r=formatGenerateContentInput(e);return generateContentStream(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...r},this.chromeAdapter,this.requestOptions)}startChat(e){return new ChatSession(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e){let r=formatGenerateContentInput(e);return countTokens(this._apiSettings,this.model,r,this.chromeAdapter)}};function _prodErrorMap(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}(0,eP.Xd)(new eR.wA("AI",/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,{instanceIdentifier:r}){if(!r)throw new AIError(eU.ERROR,"AIService instance identifier is undefined.");let i=function(e){let r=e.split("/");if("AI"!==r[0])throw new AIError(eU.ERROR,`Invalid instance identifier, unknown prefix '${r[0]}'`);let i=r[1];switch(i){case"vertexai":let s=r[2];if(!s)throw new AIError(eU.ERROR,`Invalid instance identifier, unknown location '${e}'`);return new VertexAIBackend(s);case"googleai":return new GoogleAIBackend;default:throw new AIError(eU.ERROR,`Invalid instance identifier string: '${e}'`)}}(r),s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return new AIService(s,i,o,l,chromeAdapterFactory)},"PUBLIC").setMultipleInstances(!0)),(0,eP.KN)(ek,eD),(0,eP.KN)(ek,eD,"esm2020");let eQ=new eA.LL("auth","Firebase",_prodErrorMap()),eY=new eN.Yd("@firebase/auth");function _logError(e,...r){eY.logLevel<=eN.in.ERROR&&eY.error(`Auth (${eP.Jn}): ${e}`,...r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _fail(e,...r){throw createErrorInternal(e,...r)}function _createError(e,...r){return createErrorInternal(e,...r)}function _errorWithCustomMessage(e,r,i){let s={..._prodErrorMap(),[r]:i},o=new eA.LL("auth","Firebase",s);return o.create(r,{appName:e.name})}function _serverAppCurrentUserOperationNotSupportedError(e){return _errorWithCustomMessage(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function createErrorInternal(e,...r){if("string"!=typeof e){let i=r[0],s=[...r.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(i,...s)}return eQ.create(e,...r)}function _assert(e,r,...i){if(!e)throw createErrorInternal(r,...i)}function debugFail(e){let r="INTERNAL ASSERTION FAILED: "+e;throw _logError(r),Error(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getCurrentUrl(){return"undefined"!=typeof self&&self.location?.href||""}function _getCurrentScheme(){return"undefined"!=typeof self&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Delay=class Delay{constructor(e,r){this.shortDelay=e,this.longDelay=r,r>e||debugFail("Short delay should be less than long delay!"),this.isMobile=(0,eA.uI)()||(0,eA.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===_getCurrentScheme()||"https:"===_getCurrentScheme()||(0,eA.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _emulatorUrl(e,r){e.emulator||debugFail("Emulator should always be set here");let{url:i}=e.emulator;return r?`${i}${r.startsWith("/")?r.slice(1):r}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FetchProvider=class FetchProvider{static initialize(e,r,i){this.fetchImpl=e,r&&(this.headersImpl=r),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eJ={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},eX=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],eZ=new Delay(3e4,6e4);function _addTidIfNecessary(e,r){return e.tenantId&&!r.tenantId?{...r,tenantId:e.tenantId}:r}async function _performApiRequest(e,r,i,s,o={}){return _performFetchWithErrorHandling(e,o,async()=>{let o={},l={};s&&("GET"===r?l=s:o={body:JSON.stringify(s)});let h=(0,eA.xO)({key:e.config.apiKey,...l}).slice(1),d=await e._getAdditionalHeaders();d["Content-Type"]="application/json",e.languageCode&&(d["X-Firebase-Locale"]=e.languageCode);let f={method:r,headers:d,...o};return(0,eA.L_)()||(f.referrerPolicy="no-referrer"),e.emulatorConfig&&(0,eA.Xx)(e.emulatorConfig.host)&&(f.credentials="include"),FetchProvider.fetch()(await _getFinalTarget(e,e.config.apiHost,i,h),f)})}async function _performFetchWithErrorHandling(e,r,i){e._canInitEmulator=!1;let s={...eJ,...r};try{let r=new NetworkTimeout(e),o=await Promise.race([i(),r.promise]);r.clearNetworkTimeout();let l=await o.json();if("needConfirmation"in l)throw _makeTaggedError(e,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{let r=o.ok?l.errorMessage:l.error.message,[i,h]=r.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw _makeTaggedError(e,"credential-already-in-use",l);if("EMAIL_EXISTS"===i)throw _makeTaggedError(e,"email-already-in-use",l);if("USER_DISABLED"===i)throw _makeTaggedError(e,"user-disabled",l);let d=s[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw _errorWithCustomMessage(e,d,h);_fail(e,d)}}catch(r){if(r instanceof eA.ZR)throw r;_fail(e,"network-request-failed",{message:String(r)})}}async function _performSignInRequest(e,r,i,s,o={}){let l=await _performApiRequest(e,r,i,s,o);return"mfaPendingCredential"in l&&_fail(e,"multi-factor-auth-required",{_serverResponse:l}),l}async function _getFinalTarget(e,r,i,s){let o=`${r}${i}?${s}`,l=e.config.emulator?_emulatorUrl(e.config,o):`${e.config.apiScheme}://${o}`;if(eX.includes(i)&&(await e._persistenceManagerAvailable,"COOKIE"===e._getPersistenceType())){let r=e._getPersistence();return r._getFinalTarget(l).toString()}return l}let NetworkTimeout=class NetworkTimeout{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(_createError(this.auth,"network-request-failed")),eZ.get())})}};function _makeTaggedError(e,r,i){let s={appName:e.name};i.email&&(s.email=i.email),i.phoneNumber&&(s.phoneNumber=i.phoneNumber);let o=_createError(e,r,s);return o.customData._tokenResponse=i,o}function isEnterprise(e){return void 0!==e&&void 0!==e.enterprise}let RecaptchaConfig=class RecaptchaConfig{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let r of this.recaptchaEnforcementState)if(r.provider&&r.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(r.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function getRecaptchaConfig(e,r){return _performApiRequest(e,"GET","/v2/recaptchaConfig",_addTidIfNecessary(e,r))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function deleteAccount(e,r){return _performApiRequest(e,"POST","/v1/accounts:delete",r)}async function getAccountInfo(e,r){return _performApiRequest(e,"POST","/v1/accounts:lookup",r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function utcTimestampToDateString(e){if(e)try{let r=new Date(Number(e));if(!isNaN(r.getTime()))return r.toUTCString()}catch(e){}}async function getIdTokenResult(e,r=!1){let i=(0,eA.m9)(e),s=await i.getIdToken(r),o=_parseToken(s);_assert(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");let l="object"==typeof o.firebase?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:s,authTime:utcTimestampToDateString(secondsStringToMilliseconds(o.auth_time)),issuedAtTime:utcTimestampToDateString(secondsStringToMilliseconds(o.iat)),expirationTime:utcTimestampToDateString(secondsStringToMilliseconds(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function secondsStringToMilliseconds(e){return 1e3*Number(e)}function _parseToken(e){let[r,i,s]=e.split(".");if(void 0===r||void 0===i||void 0===s)return _logError("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,eA.tV)(i);if(!e)return _logError("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return _logError("Caught error parsing JWT payload as JSON",e?.toString()),null}}function _tokenExpiresIn(e){let r=_parseToken(e);return _assert(r,"internal-error"),_assert(void 0!==r.exp,"internal-error"),_assert(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _logoutIfInvalidated(e,r,i=!1){if(i)return r;try{return await r}catch(r){throw r instanceof eA.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ProactiveRefresh=class ProactiveRefresh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;let e=this.user.stsTokenManager.expirationTime??0,r=e-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let UserMetadata=class UserMetadata{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=utcTimestampToDateString(this.lastLoginAt),this.creationTime=utcTimestampToDateString(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _reloadWithoutSaving(e){let r=e.auth,i=await e.getIdToken(),s=await _logoutIfInvalidated(e,getAccountInfo(r,{idToken:i}));_assert(s?.users.length,r,"internal-error");let o=s.users[0];e._notifyReloadListener(o);let l=o.providerUserInfo?.length?extractProviderData(o.providerUserInfo):[],h=function(e,r){let i=e.filter(e=>!r.some(r=>r.providerId===e.providerId));return[...i,...r]}(e.providerData,l),d=e.isAnonymous,f=!(e.email&&o.passwordHash)&&!h?.length,_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new UserMetadata(o.createdAt,o.lastLoginAt),isAnonymous:!!d&&f};Object.assign(e,_)}async function reload(e){let r=(0,eA.m9)(e);await _reloadWithoutSaving(r),await r.auth._persistUserIfCurrent(r),r.auth._notifyListenersIfCurrent(r)}function extractProviderData(e){return e.map(({providerId:e,...r})=>({providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function requestStsToken(e,r){let i=await _performFetchWithErrorHandling(e,{},async()=>{let i=(0,eA.xO)({grant_type:"refresh_token",refresh_token:r}).slice(1),{tokenApiHost:s,apiKey:o}=e.config,l=await _getFinalTarget(e,s,"/v1/token",`key=${o}`),h=await e._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";let d={method:"POST",headers:h,body:i};return e.emulatorConfig&&(0,eA.Xx)(e.emulatorConfig.host)&&(d.credentials="include"),FetchProvider.fetch()(l,d)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function revokeToken(e,r){return _performApiRequest(e,"POST","/v2/accounts:revokeToken",_addTidIfNecessary(e,r))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let StsTokenManager=class StsTokenManager{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_assert(e.idToken,"internal-error"),_assert(void 0!==e.idToken,"internal-error"),_assert(void 0!==e.refreshToken,"internal-error");let r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):_tokenExpiresIn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){_assert(0!==e.length,"internal-error");let r=_tokenExpiresIn(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return r||!this.accessToken||this.isExpired?(_assert(this.refreshToken,e,"user-token-expired"),this.refreshToken)?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){let{accessToken:i,refreshToken:s,expiresIn:o}=await requestStsToken(e,r);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,r,i){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,r){let{refreshToken:i,accessToken:s,expirationTime:o}=r,l=new StsTokenManager;return i&&(_assert("string"==typeof i,"internal-error",{appName:e}),l.refreshToken=i),s&&(_assert("string"==typeof s,"internal-error",{appName:e}),l.accessToken=s),o&&(_assert("number"==typeof o,"internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new StsTokenManager,this.toJSON())}_performRefresh(){return debugFail("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function assertStringOrUndefined(e,r){_assert("string"==typeof e||void 0===e,"internal-error",{appName:r})}let UserImpl=class UserImpl{constructor({uid:e,auth:r,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new ProactiveRefresh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new UserMetadata(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let r=await _logoutIfInvalidated(this,this.stsTokenManager.getToken(this.auth,e));return _assert(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return getIdTokenResult(this,e)}reload(){return reload(this)}_assign(e){this!==e&&(_assert(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let r=new UserImpl({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(e){_assert(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),r&&await _reloadWithoutSaving(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,eP.rh)(this.auth.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this.auth));let e=await this.getIdToken();return await _logoutIfInvalidated(this,deleteAccount(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){let i=r.displayName??void 0,s=r.email??void 0,o=r.phoneNumber??void 0,l=r.photoURL??void 0,h=r.tenantId??void 0,d=r._redirectEventId??void 0,f=r.createdAt??void 0,_=r.lastLoginAt??void 0,{uid:g,emailVerified:A,isAnonymous:b,providerData:k,stsTokenManager:M}=r;_assert(g&&M,e,"internal-error");let q=StsTokenManager.fromJSON(this.name,M);_assert("string"==typeof g,e,"internal-error"),assertStringOrUndefined(i,e.name),assertStringOrUndefined(s,e.name),_assert("boolean"==typeof A,e,"internal-error"),_assert("boolean"==typeof b,e,"internal-error"),assertStringOrUndefined(o,e.name),assertStringOrUndefined(l,e.name),assertStringOrUndefined(h,e.name),assertStringOrUndefined(d,e.name),assertStringOrUndefined(f,e.name),assertStringOrUndefined(_,e.name);let j=new UserImpl({uid:g,auth:e,email:s,emailVerified:A,displayName:i,isAnonymous:b,photoURL:l,phoneNumber:o,tenantId:h,stsTokenManager:q,createdAt:f,lastLoginAt:_});return k&&Array.isArray(k)&&(j.providerData=k.map(e=>({...e}))),d&&(j._redirectEventId=d),j}static async _fromIdTokenResponse(e,r,i=!1){let s=new StsTokenManager;s.updateFromServerResponse(r);let o=new UserImpl({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await _reloadWithoutSaving(o),o}static async _fromGetAccountInfoResponse(e,r,i){let s=r.users[0];_assert(void 0!==s.localId,"internal-error");let o=void 0!==s.providerUserInfo?extractProviderData(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!o?.length,h=new StsTokenManager;h.updateFromIdToken(i);let d=new UserImpl({uid:s.localId,auth:e,stsTokenManager:h,isAnonymous:l}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new UserMetadata(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!o?.length};return Object.assign(d,f),d}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e0=new Map;function _getInstance(e){e instanceof Function||debugFail("Expected a class definition");let r=e0.get(e);return r?r instanceof e||debugFail("Instance stored in cache mismatched with class"):(r=new e,e0.set(e,r)),r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let InMemoryPersistence=class InMemoryPersistence{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){let r=this.storage[e];return void 0===r?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _persistenceKeyName(e,r,i){return`firebase:${e}:${r}:${i}`}InMemoryPersistence.type="NONE";let PersistenceUserManager=class PersistenceUserManager{constructor(e,r,i){this.persistence=e,this.auth=r,this.userKey=i;let{config:s,name:o}=this.auth;this.fullUserKey=_persistenceKeyName(this.userKey,s.apiKey,o),this.fullPersistenceKey=_persistenceKeyName("persistence",s.apiKey,o),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){let r=await getAccountInfo(this.auth,{idToken:e}).catch(()=>void 0);return r?UserImpl._fromGetAccountInfoResponse(this.auth,r,e):null}return UserImpl._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,i="authUser"){if(!r.length)return new PersistenceUserManager(_getInstance(InMemoryPersistence),e,i);let s=(await Promise.all(r.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),o=s[0]||_getInstance(InMemoryPersistence),l=_persistenceKeyName(i,e.config.apiKey,e.name),h=null;for(let i of r)try{let r=await i._get(l);if(r){let s;if("string"==typeof r){let i=await getAccountInfo(e,{idToken:r}).catch(()=>void 0);if(!i)break;s=await UserImpl._fromGetAccountInfoResponse(e,i,r)}else s=UserImpl._fromJSON(e,r);i!==o&&(h=s),o=i;break}}catch{}let d=s.filter(e=>e._shouldAllowMigration);return o._shouldAllowMigration&&d.length&&(o=d[0],h&&await o._set(l,h.toJSON()),await Promise.all(r.map(async e=>{if(e!==o)try{await e._remove(l)}catch{}}))),new PersistenceUserManager(o,e,i)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getBrowserName(e){let r=e.toLowerCase();if(r.includes("opera/")||r.includes("opr/")||r.includes("opios/"))return"Opera";if(_isIEMobile(r))return"IEMobile";if(r.includes("msie")||r.includes("trident/"))return"IE";{if(r.includes("edge/"))return"Edge";if(_isFirefox(r))return"Firefox";if(r.includes("silk/"))return"Silk";if(_isBlackBerry(r))return"Blackberry";if(_isWebOS(r))return"Webos";if(_isSafari(r))return"Safari";if((r.includes("chrome/")||_isChromeIOS(r))&&!r.includes("edge/"))return"Chrome";if(_isAndroid(r))return"Android";let i=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if(i?.length===2)return i[1]}return"Other"}function _isFirefox(e=(0,eA.z$)()){return/firefox\//i.test(e)}function _isSafari(e=(0,eA.z$)()){let r=e.toLowerCase();return r.includes("safari/")&&!r.includes("chrome/")&&!r.includes("crios/")&&!r.includes("android")}function _isChromeIOS(e=(0,eA.z$)()){return/crios\//i.test(e)}function _isIEMobile(e=(0,eA.z$)()){return/iemobile/i.test(e)}function _isAndroid(e=(0,eA.z$)()){return/android/i.test(e)}function _isBlackBerry(e=(0,eA.z$)()){return/blackberry/i.test(e)}function _isWebOS(e=(0,eA.z$)()){return/webos/i.test(e)}function _isIOS(e=(0,eA.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function _isMobileBrowser(e=(0,eA.z$)()){return _isIOS(e)||_isAndroid(e)||_isWebOS(e)||_isBlackBerry(e)||/windows phone/i.test(e)||_isIEMobile(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getClientVersion(e,r=[]){let i;switch(e){case"Browser":i=_getBrowserName((0,eA.z$)());break;case"Worker":i=`${_getBrowserName((0,eA.z$)())}-${e}`;break;default:i=e}let s=r.length?r.join(","):"FirebaseCore-web";return`${i}/JsCore/${eP.Jn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AuthMiddlewareQueue=class AuthMiddlewareQueue{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){let wrappedCallback=r=>new Promise((i,s)=>{try{let s=e(r);i(s)}catch(e){s(e)}});wrappedCallback.onAbort=r,this.queue.push(wrappedCallback);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let r=[];try{for(let i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(e){for(let e of(r.reverse(),r))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e?.message})}}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _getPasswordPolicy(e,r={}){return _performApiRequest(e,"GET","/v2/passwordPolicy",_addTidIfNecessary(e,r))}let PasswordPolicyImpl=class PasswordPolicyImpl{constructor(e){let r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??6,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),void 0!==r.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),void 0!==r.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),void 0!==r.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),void 0!==r.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){let r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,r),this.validatePasswordCharacterOptions(e,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(e,r){let i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(r.meetsMinPasswordLength=e.length>=i),s&&(r.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,r){let i;this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(r,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,r,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AuthImpl=class AuthImpl{constructor(e,r,i,s){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Subscription(this),this.idTokenSubscription=new Subscription(this),this.beforeStateQueue=new AuthMiddlewareQueue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eQ,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=_getInstance(r)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await PersistenceUserManager.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(r),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let r=await getAccountInfo(this,{idToken:e}),i=await UserImpl._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if((0,eP.rh)(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(r=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(r,r))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=this.redirectUser?._redirectEventId,o=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!r||r===o)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return(_assert(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId)?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await _reloadWithoutSaving(e)}catch(e){if(e?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,eP.rh)(this.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));let r=e?(0,eA.m9)(e):null;return r&&_assert(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&_assert(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(0,eP.rh)(this.app)?Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,eP.rh)(this.app)?Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_getInstance(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await _getPasswordPolicy(this),r=new PasswordPolicyImpl(e);null===this.tenantId?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new eA.LL("auth","Firebase",e())}onAuthStateChanged(e,r,i){return this.registerStateListener(this.authStateSubscription,e,r,i)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,i){return this.registerStateListener(this.idTokenSubscription,e,r,i)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{let i=this.onAuthStateChanged(()=>{i(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){let r=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};null!=this.tenantId&&(i.tenantId=this.tenantId),await revokeToken(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,r){let i=await this.getOrInitRedirectPersistenceManager(r);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let r=e&&_getInstance(e)||this._popupRedirectResolver;_assert(r,this,"argument-error"),this.redirectPersistenceManager=await PersistenceUserManager.create(this,[_getInstance(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return(this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e)?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,i,s){if(this._deleted)return()=>{};let o="function"==typeof r?r:r.next.bind(r),l=!1,h=this._isInitialized?Promise.resolve():this._initializationPromise;if(_assert(h,this,"internal-error"),h.then(()=>{l||o(this.currentUser)}),"function"==typeof r){let o=e.addObserver(r,i,s);return()=>{l=!0,o()}}{let i=e.addObserver(r);return()=>{l=!0,i()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _assert(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_getClientVersion(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){let e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);let r=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();r&&(e["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if((0,eP.rh)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&function(e,...r){eY.logLevel<=eN.in.WARN&&eY.warn(`Auth (${eP.Jn}): ${e}`,...r)}(`Error while retrieving App Check token: ${e.error}`),e?.token}};function _castAuth(e){return(0,eA.m9)(e)}let Subscription=class Subscription{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,eA.ne)(e=>this.observer=e)}get next(){return _assert(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e1={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _generateCallbackName(e){return`__${e}${Math.floor(1e6*Math.random())}`}let MockGreCAPTCHATopLevel=class MockGreCAPTCHATopLevel{constructor(){this.enterprise=new MockGreCAPTCHA}ready(e){e()}execute(e,r){return Promise.resolve("token")}render(e,r){return""}};let MockGreCAPTCHA=class MockGreCAPTCHA{ready(e){e()}execute(e,r){return Promise.resolve("token")}render(e,r){return""}};let e2="NO_RECAPTCHA";let RecaptchaEnterpriseVerifier=class RecaptchaEnterpriseVerifier{constructor(e){this.type="recaptcha-enterprise",this.auth=_castAuth(e)}async verify(e="verify",r=!1){async function retrieveSiteKey(e){if(!r){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(r,i)=>{getRecaptchaConfig(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(s=>{if(void 0===s.recaptchaKey)i(Error("recaptcha Enterprise site key undefined"));else{let i=new RecaptchaConfig(s);return null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,r(i.siteKey)}}).catch(e=>{i(e)})})}function retrieveRecaptchaToken(r,i,s){let o=window.grecaptcha;isEnterprise(o)?o.enterprise.ready(()=>{o.enterprise.execute(r,{action:e}).then(e=>{i(e)}).catch(()=>{i(e2)})}):s(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){let e=new MockGreCAPTCHATopLevel;return e.execute("siteKey",{action:"verify"})}return new Promise((e,i)=>{retrieveSiteKey(this.auth).then(s=>{if(!r&&isEnterprise(window.grecaptcha))retrieveRecaptchaToken(s,e,i);else{var o;if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}let r=e1.recaptchaEnterpriseScript;0!==r.length&&(r+=s),(o=r,e1.loadJS(o)).then(()=>{retrieveRecaptchaToken(s,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}};async function injectRecaptchaFields(e,r,i,s=!1,o=!1){let l;let h=new RecaptchaEnterpriseVerifier(e);if(o)l=e2;else try{l=await h.verify(i)}catch(e){l=await h.verify(i,!0)}let d={...r};if("mfaSmsEnrollment"===i||"mfaSmsSignIn"===i){if("phoneEnrollmentInfo"in d){let e=d.phoneEnrollmentInfo.phoneNumber,r=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){let e=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:l}):Object.assign(d,{captchaResponse:l}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function handleRecaptchaFlow(e,r,i,s,o){if("EMAIL_PASSWORD_PROVIDER"===o){if(!e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return s(e,r).catch(async o=>{if("auth/missing-recaptcha-token"!==o.code)return Promise.reject(o);{console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let o=await injectRecaptchaFields(e,r,i,"getOobCode"===i);return s(e,o)}});{let o=await injectRecaptchaFields(e,r,i,"getOobCode"===i);return s(e,o)}}if("PHONE_PROVIDER"!==o)return Promise.reject(o+" provider is not supported.");if(e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){let o=await injectRecaptchaFields(e,r,i);return s(e,o).catch(async o=>{if(e._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&("auth/missing-recaptcha-token"===o.code||"auth/invalid-app-credential"===o.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${i} flow.`);let o=await injectRecaptchaFields(e,r,i,!1,!0);return s(e,o)}return Promise.reject(o)})}{let o=await injectRecaptchaFields(e,r,i,!1,!0);return s(e,o)}}async function _initializeRecaptchaConfig(e){let r=_castAuth(e),i=await getRecaptchaConfig(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new RecaptchaConfig(i);if(null==r.tenantId?r._agentRecaptchaConfig=s:r._tenantRecaptchaConfigs[r.tenantId]=s,s.isAnyProviderEnabled()){let e=new RecaptchaEnterpriseVerifier(r);e.verify()}}function extractProtocol(e){let r=e.indexOf(":");return r<0?"":e.substr(0,r+1)}function parsePort(e){if(!e)return null;let r=Number(e);return isNaN(r)?null:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AuthCredential=class AuthCredential{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return debugFail("not implemented")}_getIdTokenResponse(e){return debugFail("not implemented")}_linkToIdToken(e,r){return debugFail("not implemented")}_getReauthenticationResolver(e){return debugFail("not implemented")}};async function linkEmailPassword(e,r){return _performApiRequest(e,"POST","/v1/accounts:signUp",r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithPassword(e,r){return _performSignInRequest(e,"POST","/v1/accounts:signInWithPassword",_addTidIfNecessary(e,r))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithEmailLink$1(e,r){return _performSignInRequest(e,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(e,r))}async function signInWithEmailLinkForLinking(e,r){return _performSignInRequest(e,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(e,r))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EmailAuthCredential=class EmailAuthCredential extends AuthCredential{constructor(e,r,i,s=null){super("password",i),this._email=e,this._password=r,this._tenantId=s}static _fromEmailAndPassword(e,r){return new EmailAuthCredential(e,r,"password")}static _fromEmailAndCode(e,r,i=null){return new EmailAuthCredential(e,r,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let r="string"==typeof e?JSON.parse(e):e;if(r?.email&&r?.password){if("password"===r.signInMethod)return this._fromEmailAndPassword(r.email,r.password);if("emailLink"===r.signInMethod)return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return handleRecaptchaFlow(e,r,"signInWithPassword",signInWithPassword,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return signInWithEmailLink$1(e,{email:this._email,oobCode:this._password});default:_fail(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":let i={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return handleRecaptchaFlow(e,i,"signUpPassword",linkEmailPassword,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return signInWithEmailLinkForLinking(e,{idToken:r,email:this._email,oobCode:this._password});default:_fail(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithIdp(e,r){return _performSignInRequest(e,"POST","/v1/accounts:signInWithIdp",_addTidIfNecessary(e,r))}let OAuthCredential=class OAuthCredential extends AuthCredential{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let r=new OAuthCredential(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):_fail("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let r="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:s,...o}=r;if(!i||!s)return null;let l=new OAuthCredential(i,s);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){let r=this.buildRequest();return signInWithIdp(e,r)}_linkToIdToken(e,r){let i=this.buildRequest();return i.idToken=r,signInWithIdp(e,i)}_getReauthenticationResolver(e){let r=this.buildRequest();return r.autoCreate=!1,signInWithIdp(e,r)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=(0,eA.xO)(r)}return e}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sendPhoneVerificationCode(e,r){return _performApiRequest(e,"POST","/v1/accounts:sendVerificationCode",_addTidIfNecessary(e,r))}async function signInWithPhoneNumber$1(e,r){return _performSignInRequest(e,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(e,r))}async function linkWithPhoneNumber$1(e,r){let i=await _performSignInRequest(e,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(e,r));if(i.temporaryProof)throw _makeTaggedError(e,"account-exists-with-different-credential",i);return i}let e4={USER_NOT_FOUND:"user-not-found"};async function verifyPhoneNumberForExisting(e,r){let i={...r,operation:"REAUTH"};return _performSignInRequest(e,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(e,i),e4)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PhoneAuthCredential=class PhoneAuthCredential extends AuthCredential{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,r){return new PhoneAuthCredential({verificationId:e,verificationCode:r})}static _fromTokenResponse(e,r){return new PhoneAuthCredential({phoneNumber:e,temporaryProof:r})}_getIdTokenResponse(e){return signInWithPhoneNumber$1(e,this._makeVerificationRequest())}_linkToIdToken(e,r){return linkWithPhoneNumber$1(e,{idToken:r,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return verifyPhoneNumberForExisting(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:r,verificationId:i,verificationCode:s}=this.params;return e&&r?{temporaryProof:e,phoneNumber:r}:{sessionInfo:i,code:s}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:r,verificationCode:i,phoneNumber:s,temporaryProof:o}=e;return i||r||s||o?new PhoneAuthCredential({verificationId:r,verificationCode:i,phoneNumber:s,temporaryProof:o}):null}};let ActionCodeURL=class ActionCodeURL{constructor(e){let r=(0,eA.zd)((0,eA.pd)(e)),i=r.apiKey??null,s=r.oobCode??null,o=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(r.mode??null);_assert(i&&s&&o,"argument-error"),this.apiKey=i,this.operation=o,this.code=s,this.continueUrl=r.continueUrl??null,this.languageCode=r.lang??null,this.tenantId=r.tenantId??null}static parseLink(e){let r=function(e){let r=(0,eA.zd)((0,eA.pd)(e)).link,i=r?(0,eA.zd)((0,eA.pd)(r)).deep_link_id:null,s=(0,eA.zd)((0,eA.pd)(e)).deep_link_id,o=s?(0,eA.zd)((0,eA.pd)(s)).link:null;return o||s||i||r||e}(e);try{return new ActionCodeURL(r)}catch{return null}}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EmailAuthProvider=class EmailAuthProvider{constructor(){this.providerId=EmailAuthProvider.PROVIDER_ID}static credential(e,r){return EmailAuthCredential._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){let i=ActionCodeURL.parseLink(r);return _assert(i,"argument-error"),EmailAuthCredential._fromEmailAndCode(e,i.code,i.tenantId)}};EmailAuthProvider.PROVIDER_ID="password",EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD="password",EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FederatedAuthProvider=class FederatedAuthProvider{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BaseOAuthProvider=class BaseOAuthProvider extends FederatedAuthProvider{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FacebookAuthProvider=class FacebookAuthProvider extends BaseOAuthProvider{constructor(){super("facebook.com")}static credential(e){return OAuthCredential._fromParams({providerId:FacebookAuthProvider.PROVIDER_ID,signInMethod:FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return FacebookAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return FacebookAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return FacebookAuthProvider.credential(e.oauthAccessToken)}catch{return null}}};FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD="facebook.com",FacebookAuthProvider.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GoogleAuthProvider=class GoogleAuthProvider extends BaseOAuthProvider{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return OAuthCredential._fromParams({providerId:GoogleAuthProvider.PROVIDER_ID,signInMethod:GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return GoogleAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return GoogleAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:r,oauthAccessToken:i}=e;if(!r&&!i)return null;try{return GoogleAuthProvider.credential(r,i)}catch{return null}}};GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD="google.com",GoogleAuthProvider.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GithubAuthProvider=class GithubAuthProvider extends BaseOAuthProvider{constructor(){super("github.com")}static credential(e){return OAuthCredential._fromParams({providerId:GithubAuthProvider.PROVIDER_ID,signInMethod:GithubAuthProvider.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return GithubAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return GithubAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return GithubAuthProvider.credential(e.oauthAccessToken)}catch{return null}}};GithubAuthProvider.GITHUB_SIGN_IN_METHOD="github.com",GithubAuthProvider.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TwitterAuthProvider=class TwitterAuthProvider extends BaseOAuthProvider{constructor(){super("twitter.com")}static credential(e,r){return OAuthCredential._fromParams({providerId:TwitterAuthProvider.PROVIDER_ID,signInMethod:TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return TwitterAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return TwitterAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:r,oauthTokenSecret:i}=e;if(!r||!i)return null;try{return TwitterAuthProvider.credential(r,i)}catch{return null}}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signUp(e,r){return _performSignInRequest(e,"POST","/v1/accounts:signUp",_addTidIfNecessary(e,r))}TwitterAuthProvider.TWITTER_SIGN_IN_METHOD="twitter.com",TwitterAuthProvider.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let UserCredentialImpl=class UserCredentialImpl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,i,s=!1){let o=await UserImpl._fromIdTokenResponse(e,i,s),l=providerIdForResponse(i),h=new UserCredentialImpl({user:o,providerId:l,_tokenResponse:i,operationType:r});return h}static async _forOperation(e,r,i){await e._updateTokensIfNecessary(i,!0);let s=providerIdForResponse(i);return new UserCredentialImpl({user:e,providerId:s,_tokenResponse:i,operationType:r})}};function providerIdForResponse(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MultiFactorError=class MultiFactorError extends eA.ZR{constructor(e,r,i,s){super(r.code,r.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,MultiFactorError.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,r,i,s){return new MultiFactorError(e,r,i,s)}};function _processCredentialSavingMfaContextIfNecessary(e,r,i,s){let o="reauthenticate"===r?i._getReauthenticationResolver(e):i._getIdTokenResponse(e);return o.catch(i=>{if("auth/multi-factor-auth-required"===i.code)throw MultiFactorError._fromErrorAndOperation(e,i,r,s);throw i})}async function _link$1(e,r,i=!1){let s=await _logoutIfInvalidated(e,r._linkToIdToken(e.auth,await e.getIdToken()),i);return UserCredentialImpl._forOperation(e,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _reauthenticate(e,r,i=!1){let{auth:s}=e;if((0,eP.rh)(s.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(s));let o="reauthenticate";try{let l=await _logoutIfInvalidated(e,_processCredentialSavingMfaContextIfNecessary(s,o,r,e),i);_assert(l.idToken,s,"internal-error");let h=_parseToken(l.idToken);_assert(h,s,"internal-error");let{sub:d}=h;return _assert(e.uid===d,s,"user-mismatch"),UserCredentialImpl._forOperation(e,o,l)}catch(e){throw e?.code==="auth/user-not-found"&&_fail(s,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _signInWithCredential(e,r,i=!1){if((0,eP.rh)(e.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(e));let s="signIn",o=await _processCredentialSavingMfaContextIfNecessary(e,s,r),l=await UserCredentialImpl._fromIdTokenResponse(e,s,o);return i||await e._updateCurrentUser(l.user),l}async function signInWithCredential(e,r){return _signInWithCredential(_castAuth(e),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function recachePasswordPolicy(e){let r=_castAuth(e);r._getPasswordPolicyInternal()&&await r._updatePasswordPolicy()}async function createUserWithEmailAndPassword(e,r,i){if((0,eP.rh)(e.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(e));let s=_castAuth(e),o=handleRecaptchaFlow(s,{returnSecureToken:!0,email:r,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",signUp,"EMAIL_PASSWORD_PROVIDER"),l=await o.catch(r=>{throw"auth/password-does-not-meet-requirements"===r.code&&recachePasswordPolicy(e),r}),h=await UserCredentialImpl._fromIdTokenResponse(s,"signIn",l);return await s._updateCurrentUser(h.user),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function startEnrollPhoneMfa(e,r){return _performApiRequest(e,"POST","/v2/accounts/mfaEnrollment:start",_addTidIfNecessary(e,r))}new WeakMap;let e6="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BrowserPersistenceClass=class BrowserPersistenceClass{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(e6,"1"),this.storage.removeItem(e6),Promise.resolve(!0)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){let r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};let BrowserLocalPersistence=class BrowserLocalPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_isMobileBrowser(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let r of Object.keys(this.listeners)){let i=this.storage.getItem(r),s=this.localCache[r];i!==s&&e(r,s,i)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((e,r,i)=>{this.notifyListeners(e,i)});return}let i=e.key;r?this.detachListener():this.stopPolling();let triggerListeners=()=>{let e=this.storage.getItem(i);(r||this.localCache[i]!==e)&&this.notifyListeners(i,e)},s=this.storage.getItem(i);(0,eA.w1)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(triggerListeners,10):triggerListeners()}notifyListeners(e,r){this.localCache[e]=r;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(r?JSON.parse(r):r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:i}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){let r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}};BrowserLocalPersistence.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BrowserSessionPersistence=class BrowserSessionPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}};BrowserSessionPersistence.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Receiver=class Receiver{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let r=this.receivers.find(r=>r.isListeningto(e));if(r)return r;let i=new Receiver(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:r,eventType:i,data:s}=e.data,o=this.handlersMap[i];if(!o?.size)return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let l=Array.from(o).map(async r=>r(e.origin,s)),h=await Promise.all(l.map(async e=>{try{let r=await e;return{fulfilled:!0,value:r}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,r){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),r&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _generateEventId(e="",r=10){let i="";for(let e=0;e<r;e++)i+=Math.floor(10*Math.random());return e+i}Receiver.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sender=class Sender{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,i=50){let s,o;let l="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!l)throw Error("connection_unavailable");return new Promise((h,d)=>{let f=_generateEventId("",20);l.port1.start();let _=setTimeout(()=>{d(Error("unsupported_event"))},i);o={messageChannel:l,onMessage(e){if(e.data.eventId===f)switch(e.data.status){case"ack":clearTimeout(_),s=setTimeout(()=>{d(Error("timeout"))},3e3);break;case"done":clearTimeout(s),h(e.data.response);break;default:clearTimeout(_),clearTimeout(s),d(Error("invalid_response"))}}},this.handlers.add(o),l.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:r},[l.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _window(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _isWorker(){return void 0!==_window().WorkerGlobalScope&&"function"==typeof _window().importScripts}async function _getActiveServiceWorker(){if(!navigator?.serviceWorker)return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch{return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e9="firebaseLocalStorageDb",e3="firebaseLocalStorage",e5="fbase_key";let DBPromise=class DBPromise{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}};function getObjectStore(e,r){return e.transaction([e3],r?"readwrite":"readonly").objectStore(e3)}function _openDatabase(){let e=indexedDB.open(e9,1);return new Promise((r,i)=>{e.addEventListener("error",()=>{i(e.error)}),e.addEventListener("upgradeneeded",()=>{let r=e.result;try{r.createObjectStore(e3,{keyPath:e5})}catch(e){i(e)}}),e.addEventListener("success",async()=>{let i=e.result;i.objectStoreNames.contains(e3)?r(i):(i.close(),await function(){let e=indexedDB.deleteDatabase(e9);return new DBPromise(e).toPromise()}(),r(await _openDatabase()))})})}async function _putObject(e,r,i){let s=getObjectStore(e,!0).put({[e5]:r,value:i});return new DBPromise(s).toPromise()}async function getObject(e,r){let i=getObjectStore(e,!1).get(r),s=await new DBPromise(i).toPromise();return void 0===s?null:s.value}function _deleteObject(e,r){let i=getObjectStore(e,!0).delete(r);return new DBPromise(i).toPromise()}let IndexedDBLocalPersistence=class IndexedDBLocalPersistence{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await _openDatabase()),this.db}async _withRetries(e){let r=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(e){if(r++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _isWorker()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Receiver._getInstance(_isWorker()?self:null),this.receiver._subscribe("keyChanged",async(e,r)=>{let i=await this._poll();return{keyProcessed:i.includes(r.key)}}),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await _getActiveServiceWorker(),!this.activeServiceWorker)return;this.sender=new Sender(this.activeServiceWorker);let e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await _openDatabase();return await _putObject(e,e6,"1"),await _deleteObject(e,e6),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(i=>_putObject(i,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){let r=await this._withRetries(r=>getObject(r,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>_deleteObject(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let r=getObjectStore(e,!1).getAll();return new DBPromise(r).toPromise()});if(!e||0!==this.pendingWrites)return[];let r=[],i=new Set;if(0!==e.length)for(let{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),r.push(s));for(let e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(this.notifyListeners(e,null),r.push(e));return r}notifyListeners(e,r){this.localCache[e]=r;let i=this.listeners[e];if(i)for(let e of Array.from(i))e(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function startSignInPhoneMfa(e,r){return _performApiRequest(e,"POST","/v2/accounts/mfaSignIn:start",_addTidIfNecessary(e,r))}IndexedDBLocalPersistence.type="LOCAL",_generateCallbackName("rcb"),new Delay(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e8="recaptcha";async function _verifyPhoneNumber(e,r,i){if(!e._getRecaptchaConfig())try{await _initializeRecaptchaConfig(e)}catch(e){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(s="string"==typeof r?{phoneNumber:r}:r,"session"in s){let r=s.session;if("phoneNumber"in s){_assert("enroll"===r.type,e,"internal-error");let o={idToken:r.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},startEnrollPhoneMfaActionCallback=async(e,r)=>{if(r.phoneEnrollmentInfo.captchaResponse===e2){_assert(i?.type===e8,e,"argument-error");let s=await injectRecaptchaV2Token(e,r,i);return startEnrollPhoneMfa(e,s)}return startEnrollPhoneMfa(e,r)},l=handleRecaptchaFlow(e,o,"mfaSmsEnrollment",startEnrollPhoneMfaActionCallback,"PHONE_PROVIDER"),h=await l.catch(e=>Promise.reject(e));return h.phoneSessionInfo.sessionInfo}{_assert("signin"===r.type,e,"internal-error");let o=s.multiFactorHint?.uid||s.multiFactorUid;_assert(o,e,"missing-multi-factor-info");let l={mfaPendingCredential:r.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},startSignInPhoneMfaActionCallback=async(e,r)=>{if(r.phoneSignInInfo.captchaResponse===e2){_assert(i?.type===e8,e,"argument-error");let s=await injectRecaptchaV2Token(e,r,i);return startSignInPhoneMfa(e,s)}return startSignInPhoneMfa(e,r)},h=handleRecaptchaFlow(e,l,"mfaSmsSignIn",startSignInPhoneMfaActionCallback,"PHONE_PROVIDER"),d=await h.catch(e=>Promise.reject(e));return d.phoneResponseInfo.sessionInfo}}{let r={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"},sendPhoneVerificationCodeActionCallback=async(e,r)=>{if(r.captchaResponse===e2){_assert(i?.type===e8,e,"argument-error");let s=await injectRecaptchaV2Token(e,r,i);return sendPhoneVerificationCode(e,s)}return sendPhoneVerificationCode(e,r)},o=handleRecaptchaFlow(e,r,"sendVerificationCode",sendPhoneVerificationCodeActionCallback,"PHONE_PROVIDER"),l=await o.catch(e=>Promise.reject(e));return l.sessionInfo}}finally{i?._reset()}}async function injectRecaptchaV2Token(e,r,i){_assert(i.type===e8,e,"argument-error");let s=await i.verify();_assert("string"==typeof s,e,"argument-error");let o={...r};if("phoneEnrollmentInfo"in o){let e=o.phoneEnrollmentInfo.phoneNumber,r=o.phoneEnrollmentInfo.captchaResponse,i=o.phoneEnrollmentInfo.clientType,l=o.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:s,captchaResponse:r,clientType:i,recaptchaVersion:l}}),o}if(!("phoneSignInInfo"in o))return Object.assign(o,{recaptchaToken:s}),o;{let e=o.phoneSignInInfo.captchaResponse,r=o.phoneSignInInfo.clientType,i=o.phoneSignInInfo.recaptchaVersion;return Object.assign(o,{phoneSignInInfo:{recaptchaToken:s,captchaResponse:e,clientType:r,recaptchaVersion:i}}),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PhoneAuthProvider=class PhoneAuthProvider{constructor(e){this.providerId=PhoneAuthProvider.PROVIDER_ID,this.auth=_castAuth(e)}verifyPhoneNumber(e,r){return _verifyPhoneNumber(this.auth,e,(0,eA.m9)(r))}static credential(e,r){return PhoneAuthCredential._fromVerification(e,r)}static credentialFromResult(e){return PhoneAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return PhoneAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:r,temporaryProof:i}=e;return r&&i?PhoneAuthCredential._fromTokenResponse(r,i):null}};PhoneAuthProvider.PROVIDER_ID="phone",PhoneAuthProvider.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let IdpCredential=class IdpCredential extends AuthCredential{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return signInWithIdp(e,this._buildIdpRequest())}_linkToIdToken(e,r){return signInWithIdp(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return signInWithIdp(e,this._buildIdpRequest())}_buildIdpRequest(e){let r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}};function _signIn(e){return _signInWithCredential(e.auth,new IdpCredential(e),e.bypassAuthState)}function _reauth(e){let{auth:r,user:i}=e;return _assert(i,r,"internal-error"),_reauthenticate(i,new IdpCredential(e),e.bypassAuthState)}async function _link(e){let{auth:r,user:i}=e;return _assert(i,r,"internal-error"),_link$1(i,new IdpCredential(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AbstractPopupRedirectOperation=class AbstractPopupRedirectOperation{constructor(e,r,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:r,sessionId:i,postBody:s,tenantId:o,error:l,type:h}=e;if(l){this.reject(l);return}let d={auth:this.auth,requestUri:r,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(d))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _signIn;case"linkViaPopup":case"linkViaRedirect":return _link;case"reauthViaPopup":case"reauthViaRedirect":return _reauth;default:_fail(this.auth,"internal-error")}}resolve(e){this.pendingPromise||debugFail("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||debugFail("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e7=new Delay(2e3,1e4);let PopupOperation=class PopupOperation extends AbstractPopupRedirectOperation{constructor(e,r,i,s,o){super(e,r,s,o),this.provider=i,this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction&&PopupOperation.currentPopupAction.cancel(),PopupOperation.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return _assert(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||debugFail("Popup operations only handle one event");let e=_generateEventId();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(_createError(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(_createError(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction=null}pollUserCancellation(){let poll=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_createError(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(poll,e7.get())};poll()}};PopupOperation.currentPopupAction=null;let te=new Map;let RedirectAction=class RedirectAction extends AbstractPopupRedirectOperation{constructor(e,r,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,i),this.eventId=null}async execute(){let e=te.get(this.auth._key());if(!e){try{let r=await _getAndClearPendingRedirectStatus(this.resolver,this.auth),i=r?await super.execute():null;e=()=>Promise.resolve(i)}catch(r){e=()=>Promise.reject(r)}te.set(this.auth._key(),e)}return this.bypassAuthState||te.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function _getAndClearPendingRedirectStatus(e,r){let i=_persistenceKeyName("pendingRedirect",r.config.apiKey,r.name),s=_getInstance(e._redirectPersistence);if(!await s._isAvailable())return!1;let o=await s._get(i)==="true";return await s._remove(i),o}function _overrideRedirectResult(e,r){te.set(e._key(),r)}async function _getRedirectResult(e,r,i=!1){if((0,eP.rh)(e.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(e));let s=_castAuth(e),o=r?_getInstance(r):(_assert(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver),l=new RedirectAction(s,o,i),h=await l.execute();return h&&!i&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,r)),h}let AuthEventManager=class AuthEventManager{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(r=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return isNullRedirectEvent(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){if(e.error&&!isNullRedirectEvent(e)){let i=e.error.code?.split("auth/")[1]||"internal-error";r.onError(_createError(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){let i=null===r.eventId||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(eventUid(e))}saveEventToCache(e){this.cachedEventUids.add(eventUid(e)),this.lastProcessedEventTime=Date.now()}};function eventUid(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function isNullRedirectEvent({type:e,error:r}){return"unknown"===e&&r?.code==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _getProjectConfig(e,r={}){return _performApiRequest(e,"GET","/v1/projects",r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tr=/^https?/;async function _validateOrigin(e){if(e.config.emulator)return;let{authorizedDomains:r}=await _getProjectConfig(e);for(let e of r)try{if(function(e){let r=_getCurrentUrl(),{protocol:i,hostname:s}=new URL(r);if(e.startsWith("chrome-extension://")){let o=new URL(e);return""===o.hostname&&""===s?"chrome-extension:"===i&&e.replace("chrome-extension://","")===r.replace("chrome-extension://",""):"chrome-extension:"===i&&o.hostname===s}if(!tr.test(i))return!1;if(tt.test(e))return s===e;let o=e.replace(/\./g,"\\."),l=RegExp("^(.+\\."+o+"|"+o+")$","i");return l.test(s)}(e))return}catch{}_fail(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn=new Delay(3e4,6e4);function resetUnloadedGapiModules(){let e=_window().___jsl;if(e?.H){for(let r of Object.keys(e.H))if(e.H[r].r=e.H[r].r||[],e.H[r].L=e.H[r].L||[],e.H[r].r=[...e.H[r].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}let ti=null,ts=new Delay(5e3,15e3),to={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function _openIframe(e){let r=await (ti=ti||new Promise((r,i)=>{function loadGapiIframe(){resetUnloadedGapiModules(),gapi.load("gapi.iframes",{callback:()=>{r(gapi.iframes.getContext())},ontimeout:()=>{resetUnloadedGapiModules(),i(_createError(e,"network-request-failed"))},timeout:tn.get()})}if(_window().gapi?.iframes?.Iframe)r(gapi.iframes.getContext());else if(_window().gapi?.load)loadGapiIframe();else{var s;let r=_generateCallbackName("iframefcb");return _window()[r]=()=>{gapi.load?loadGapiIframe():i(_createError(e,"network-request-failed"))},(s=`${e1.gapiScript}?onload=${r}`,e1.loadJS(s)).catch(e=>i(e))}}).catch(e=>{throw ti=null,e})),i=_window().gapi;return _assert(i,e,"internal-error"),r.open({where:document.body,url:function(e){let r=e.config;_assert(r.authDomain,e,"auth-domain-config-required");let i=r.emulator?_emulatorUrl(r,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,s={apiKey:r.apiKey,appName:e.name,v:eP.Jn},o=tl.get(e.config.apiHost);o&&(s.eid=o);let l=e._getFrameworks();return l.length&&(s.fw=l.join(",")),`${i}?${(0,eA.xO)(s).slice(1)}`}(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:to,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let o=_createError(e,"network-request-failed"),l=_window().setTimeout(()=>{s(o)},ts.get());function clearTimerAndResolve(){_window().clearTimeout(l),i(r)}r.ping(clearTimerAndResolve).then(clearTimerAndResolve,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};let AuthPopup=class AuthPopup{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}};let th=encodeURIComponent("fac");async function _getRedirectUrl(e,r,i,s,o,l){_assert(e.config.authDomain,e,"auth-domain-config-required"),_assert(e.config.apiKey,e,"invalid-api-key");let h={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:s,v:eP.Jn,eventId:o};if(r instanceof FederatedAuthProvider)for(let[i,s]of(r.setDefaultLanguage(e.languageCode),h.providerId=r.providerId||"",(0,eA.xb)(r.getCustomParameters())||(h.customParameters=JSON.stringify(r.getCustomParameters())),Object.entries(l||{})))h[i]=s;if(r instanceof BaseOAuthProvider){let e=r.getScopes().filter(e=>""!==e);e.length>0&&(h.scopes=e.join(","))}for(let r of(e.tenantId&&(h.tid=e.tenantId),Object.keys(h)))void 0===h[r]&&delete h[r];let d=await e._getAppCheckToken(),f=d?`#${th}=${encodeURIComponent(d)}`:"";return`${function({config:e}){return e.emulator?_emulatorUrl(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,eA.xO)(h).slice(1)}${f}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc="webStorageSupport",td=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BrowserSessionPersistence,this._completeRedirectFn=_getRedirectResult,this._overrideRedirectResult=_overrideRedirectResult}async _openPopup(e,r,i,s){this.eventManagers[e._key()]?.manager||debugFail("_initialize() not called before _openPopup()");let o=await _getRedirectUrl(e,r,i,_getCurrentUrl(),s);return function(e,r,i,s=500,o=600){let l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString(),d="",f={...tu,width:s.toString(),height:o.toString(),top:l,left:h},_=(0,eA.z$)().toLowerCase();i&&(d=_isChromeIOS(_)?"_blank":i),_isFirefox(_)&&(r=r||"http://localhost",f.scrollbars="yes");let g=Object.entries(f).reduce((e,[r,i])=>`${e}${r}=${i},`,"");if(function(e=(0,eA.z$)()){return _isIOS(e)&&!!window.navigator?.standalone}(_)&&"_self"!==d)return function(e,r){let i=document.createElement("a");i.href=e,i.target=r;let s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(s)}(r||"",d),new AuthPopup(null);let A=window.open(r||"",d,g);_assert(A,e,"popup-blocked");try{A.focus()}catch(e){}return new AuthPopup(A)}(e,o,_generateEventId())}async _openRedirect(e,r,i,s){await this._originValidation(e);let o=await _getRedirectUrl(e,r,i,_getCurrentUrl(),s);return _window().location.href=o,new Promise(()=>{})}_initialize(e){let r=e._key();if(this.eventManagers[r]){let{manager:e,promise:i}=this.eventManagers[r];return e?Promise.resolve(e):(i||debugFail("If manager is not set, promise should be"),i)}let i=this.initAndGetManager(e);return this.eventManagers[r]={promise:i},i.catch(()=>{delete this.eventManagers[r]}),i}async initAndGetManager(e){let r=await _openIframe(e),i=new AuthEventManager(e);return r.register("authEvent",r=>{_assert(r?.authEvent,e,"invalid-auth-event");let s=i.onEvent(r.authEvent);return{status:s?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=r,i}_isIframeWebStorageSupported(e,r){let i=this.iframes[e._key()];i.send(tc,{type:tc},i=>{let s=i?.[0]?.[tc];void 0!==s&&r(!!s),_fail(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=_validateOrigin(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return _isMobileBrowser()||_isSafari()||_isIOS()}};let MultiFactorAssertionImpl=class MultiFactorAssertionImpl{constructor(e){this.factorId=e}_process(e,r,i){switch(r.type){case"enroll":return this._finalizeEnroll(e,r.credential,i);case"signin":return this._finalizeSignIn(e,r.credential);default:return debugFail("unexpected MultiFactorSessionType")}}};let PhoneMultiFactorAssertionImpl=class PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new PhoneMultiFactorAssertionImpl(e)}_finalizeEnroll(e,r,i){return _performApiRequest(e,"POST","/v2/accounts/mfaEnrollment:finalize",_addTidIfNecessary(e,{idToken:r,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,r){return _performApiRequest(e,"POST","/v2/accounts/mfaSignIn:finalize",_addTidIfNecessary(e,{mfaPendingCredential:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}};let TotpMultiFactorAssertionImpl=class TotpMultiFactorAssertionImpl extends MultiFactorAssertionImpl{constructor(e,r,i){super("totp"),this.otp=e,this.enrollmentId=r,this.secret=i}static _fromSecret(e,r){return new TotpMultiFactorAssertionImpl(r,void 0,e)}static _fromEnrollmentId(e,r){return new TotpMultiFactorAssertionImpl(r,e)}async _finalizeEnroll(e,r,i){return _assert(void 0!==this.secret,e,"argument-error"),_performApiRequest(e,"POST","/v2/accounts/mfaEnrollment:finalize",_addTidIfNecessary(e,{idToken:r,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,r){_assert(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let i={verificationCode:this.otp};return _performApiRequest(e,"POST","/v2/accounts/mfaSignIn:finalize",_addTidIfNecessary(e,{mfaPendingCredential:r,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i}))}};let TotpSecret=class TotpSecret{constructor(e,r,i,s,o,l,h){this.sessionInfo=l,this.auth=h,this.secretKey=e,this.hashingAlgorithm=r,this.codeLength=i,this.codeIntervalSeconds=s,this.enrollmentCompletionDeadline=o}static _fromStartTotpMfaEnrollmentResponse(e,r){return new TotpSecret(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,r)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,r){let i=!1;return(_isEmptyString(e)||_isEmptyString(r))&&(i=!0),i&&(_isEmptyString(e)&&(e=this.auth.currentUser?.email||"unknownuser"),_isEmptyString(r)&&(r=this.auth.name)),`otpauth://totp/${r}:${e}?secret=${this.secretKey}&issuer=${r}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function _isEmptyString(e){return void 0===e||e?.length===0}var tp="@firebase/auth",tf="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AuthInterop=class AuthInterop{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let r=await this.auth.currentUser.getIdToken(e);return{accessToken:r}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let r=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){_assert(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};let t_=(0,eA.Pz)("authIdTokenMaxAge")||300,tm=null,mintCookieFactory=e=>async r=>{let i=r&&await r.getIdTokenResult(),s=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(s&&s>t_)return;let o=i?.token;tm!==o&&(tm=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};e1={loadJS:e=>new Promise((r,i)=>{let s=document.createElement("script");s.setAttribute("src",e),s.onload=r,s.onerror=e=>{let r=_createError("internal-error");r.customData=e,i(r)},s.type="text/javascript",s.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(s)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},ee="Browser",(0,eP.Xd)(new eR.wA("auth",(e,{options:r})=>{let i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:h}=i.options;_assert(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});let d={apiKey:l,authDomain:h,clientPlatform:ee,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_getClientVersion(ee)},f=new AuthImpl(i,s,o,d);return function(e,r){let i=r?.persistence||[],s=(Array.isArray(i)?i:[i]).map(_getInstance);r?.errorMap&&e._updateErrorMap(r.errorMap),e._initializeWithPersistence(s,r?.popupRedirectResolver)}(f,r),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,i)=>{let s=e.getProvider("auth-internal");s.initialize()})),(0,eP.Xd)(new eR.wA("auth-internal",e=>{let r=_castAuth(e.getProvider("auth").getImmediate());return new AuthInterop(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,eP.KN)(tp,tf,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(ee)),(0,eP.KN)(tp,tf,"esm2020");var tg="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ty={};(function(){function m(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(e,r,i){i||(i=0);let s=Array(16);if("string"==typeof r)for(var o=0;o<16;++o)s[o]=r.charCodeAt(i++)|r.charCodeAt(i++)<<8|r.charCodeAt(i++)<<16|r.charCodeAt(i++)<<24;else for(o=0;o<16;++o)s[o]=r[i++]|r[i++]<<8|r[i++]<<16|r[i++]<<24;r=e.g[0],i=e.g[1],o=e.g[2];let l=e.g[3],h;h=r+(l^i&(o^l))+s[0]+3614090360&4294967295,h=l+(o^(r=i+(h<<7&4294967295|h>>>25))&(i^o))+s[1]+3905402710&4294967295,h=o+(i^(l=r+(h<<12&4294967295|h>>>20))&(r^i))+s[2]+606105819&4294967295,h=i+(r^(o=l+(h<<17&4294967295|h>>>15))&(l^r))+s[3]+3250441966&4294967295,h=r+(l^(i=o+(h<<22&4294967295|h>>>10))&(o^l))+s[4]+4118548399&4294967295,h=l+(o^(r=i+(h<<7&4294967295|h>>>25))&(i^o))+s[5]+1200080426&4294967295,h=o+(i^(l=r+(h<<12&4294967295|h>>>20))&(r^i))+s[6]+2821735955&4294967295,h=i+(r^(o=l+(h<<17&4294967295|h>>>15))&(l^r))+s[7]+4249261313&4294967295,h=r+(l^(i=o+(h<<22&4294967295|h>>>10))&(o^l))+s[8]+1770035416&4294967295,h=l+(o^(r=i+(h<<7&4294967295|h>>>25))&(i^o))+s[9]+2336552879&4294967295,h=o+(i^(l=r+(h<<12&4294967295|h>>>20))&(r^i))+s[10]+4294925233&4294967295,h=i+(r^(o=l+(h<<17&4294967295|h>>>15))&(l^r))+s[11]+2304563134&4294967295,h=r+(l^(i=o+(h<<22&4294967295|h>>>10))&(o^l))+s[12]+1804603682&4294967295,h=l+(o^(r=i+(h<<7&4294967295|h>>>25))&(i^o))+s[13]+4254626195&4294967295,h=o+(i^(l=r+(h<<12&4294967295|h>>>20))&(r^i))+s[14]+2792965006&4294967295,h=i+(r^(o=l+(h<<17&4294967295|h>>>15))&(l^r))+s[15]+1236535329&4294967295,i=o+(h<<22&4294967295|h>>>10),h=r+(o^l&(i^o))+s[1]+4129170786&4294967295,r=i+(h<<5&4294967295|h>>>27),h=l+(i^o&(r^i))+s[6]+3225465664&4294967295,l=r+(h<<9&4294967295|h>>>23),h=o+(r^i&(l^r))+s[11]+643717713&4294967295,o=l+(h<<14&4294967295|h>>>18),h=i+(l^r&(o^l))+s[0]+3921069994&4294967295,i=o+(h<<20&4294967295|h>>>12),h=r+(o^l&(i^o))+s[5]+3593408605&4294967295,r=i+(h<<5&4294967295|h>>>27),h=l+(i^o&(r^i))+s[10]+38016083&4294967295,l=r+(h<<9&4294967295|h>>>23),h=o+(r^i&(l^r))+s[15]+3634488961&4294967295,o=l+(h<<14&4294967295|h>>>18),h=i+(l^r&(o^l))+s[4]+3889429448&4294967295,i=o+(h<<20&4294967295|h>>>12),h=r+(o^l&(i^o))+s[9]+568446438&4294967295,r=i+(h<<5&4294967295|h>>>27),h=l+(i^o&(r^i))+s[14]+3275163606&4294967295,l=r+(h<<9&4294967295|h>>>23),h=o+(r^i&(l^r))+s[3]+4107603335&4294967295,o=l+(h<<14&4294967295|h>>>18),h=i+(l^r&(o^l))+s[8]+1163531501&4294967295,i=o+(h<<20&4294967295|h>>>12),h=r+(o^l&(i^o))+s[13]+2850285829&4294967295,r=i+(h<<5&4294967295|h>>>27),h=l+(i^o&(r^i))+s[2]+4243563512&4294967295,l=r+(h<<9&4294967295|h>>>23),h=o+(r^i&(l^r))+s[7]+1735328473&4294967295,o=l+(h<<14&4294967295|h>>>18),h=i+(l^r&(o^l))+s[12]+2368359562&4294967295,h=r+((i=o+(h<<20&4294967295|h>>>12))^o^l)+s[5]+4294588738&4294967295,h=l+((r=i+(h<<4&4294967295|h>>>28))^i^o)+s[8]+2272392833&4294967295,h=o+((l=r+(h<<11&4294967295|h>>>21))^r^i)+s[11]+1839030562&4294967295,h=i+((o=l+(h<<16&4294967295|h>>>16))^l^r)+s[14]+4259657740&4294967295,h=r+((i=o+(h<<23&4294967295|h>>>9))^o^l)+s[1]+2763975236&4294967295,h=l+((r=i+(h<<4&4294967295|h>>>28))^i^o)+s[4]+1272893353&4294967295,h=o+((l=r+(h<<11&4294967295|h>>>21))^r^i)+s[7]+4139469664&4294967295,h=i+((o=l+(h<<16&4294967295|h>>>16))^l^r)+s[10]+3200236656&4294967295,h=r+((i=o+(h<<23&4294967295|h>>>9))^o^l)+s[13]+681279174&4294967295,h=l+((r=i+(h<<4&4294967295|h>>>28))^i^o)+s[0]+3936430074&4294967295,h=o+((l=r+(h<<11&4294967295|h>>>21))^r^i)+s[3]+3572445317&4294967295,h=i+((o=l+(h<<16&4294967295|h>>>16))^l^r)+s[6]+76029189&4294967295,h=r+((i=o+(h<<23&4294967295|h>>>9))^o^l)+s[9]+3654602809&4294967295,h=l+((r=i+(h<<4&4294967295|h>>>28))^i^o)+s[12]+3873151461&4294967295,h=o+((l=r+(h<<11&4294967295|h>>>21))^r^i)+s[15]+530742520&4294967295,h=i+((o=l+(h<<16&4294967295|h>>>16))^l^r)+s[2]+3299628645&4294967295,i=o+(h<<23&4294967295|h>>>9),h=r+(o^(i|~l))+s[0]+4096336452&4294967295,r=i+(h<<6&4294967295|h>>>26),h=l+(i^(r|~o))+s[7]+1126891415&4294967295,l=r+(h<<10&4294967295|h>>>22),h=o+(r^(l|~i))+s[14]+2878612391&4294967295,o=l+(h<<15&4294967295|h>>>17),h=i+(l^(o|~r))+s[5]+4237533241&4294967295,i=o+(h<<21&4294967295|h>>>11),h=r+(o^(i|~l))+s[12]+1700485571&4294967295,r=i+(h<<6&4294967295|h>>>26),h=l+(i^(r|~o))+s[3]+2399980690&4294967295,l=r+(h<<10&4294967295|h>>>22),h=o+(r^(l|~i))+s[10]+4293915773&4294967295,o=l+(h<<15&4294967295|h>>>17),h=i+(l^(o|~r))+s[1]+2240044497&4294967295,i=o+(h<<21&4294967295|h>>>11),h=r+(o^(i|~l))+s[8]+1873313359&4294967295,r=i+(h<<6&4294967295|h>>>26),h=l+(i^(r|~o))+s[15]+4264355552&4294967295,l=r+(h<<10&4294967295|h>>>22),h=o+(r^(l|~i))+s[6]+2734768916&4294967295,o=l+(h<<15&4294967295|h>>>17),h=i+(l^(o|~r))+s[13]+1309151649&4294967295,i=o+(h<<21&4294967295|h>>>11),h=r+(o^(i|~l))+s[4]+4149444226&4294967295,r=i+(h<<6&4294967295|h>>>26),h=l+(i^(r|~o))+s[11]+3174756917&4294967295,l=r+(h<<10&4294967295|h>>>22),h=o+(r^(l|~i))+s[2]+718787259&4294967295,o=l+(h<<15&4294967295|h>>>17),h=i+(l^(o|~r))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+r&4294967295,e.g[1]=e.g[1]+(o+(h<<21&4294967295|h>>>11))&4294967295,e.g[2]=e.g[2]+o&4294967295,e.g[3]=e.g[3]+l&4294967295}function t(e,r){this.h=r;let i=[],s=!0;for(let o=e.length-1;o>=0;o--){let l=0|e[o];s&&l==r||(i[o]=l,s=!1)}this.g=i}!function(e,r){function c(){}c.prototype=r.prototype,e.F=r.prototype,e.prototype=new c,e.prototype.constructor=e,e.D=function(e,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return r.prototype[i].apply(e,o)}}(m,function(){this.blockSize=-1}),m.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},m.prototype.v=function(e,r){void 0===r&&(r=e.length);let i=r-this.blockSize,s=this.C,o=this.h,l=0;for(;l<r;){if(0==o)for(;l<=i;)n(this,e,l),l+=this.blockSize;if("string"==typeof e){for(;l<r;)if(s[o++]=e.charCodeAt(l++),o==this.blockSize){n(this,s),o=0;break}}else for(;l<r;)if(s[o++]=e[l++],o==this.blockSize){n(this,s),o=0;break}}this.h=o,this.o+=r},m.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var r=1;r<e.length-8;++r)e[r]=0;r=8*this.o;for(var i=e.length-8;i<e.length;++i)e[i]=255&r,r/=256;for(this.v(e),e=Array(16),r=0,i=0;i<4;++i)for(let s=0;s<32;s+=8)e[r++]=this.g[i]>>>s&255;return e};var e,r={};function u(e){return -128<=e&&e<128?Object.prototype.hasOwnProperty.call(r,e)?r[e]:r[e]=new t([0|e],e<0?-1:0):new t([0|e],e<0?-1:0)}function v(e){if(isNaN(e)||!isFinite(e))return i;if(e<0)return x(v(-e));let r=[],s=1;for(let i=0;e>=s;i++)r[i]=e/s|0,s*=4294967296;return new t(r,0)}var i=u(0),s=u(1),o=u(16777216);function C(e){if(0!=e.h)return!1;for(let r=0;r<e.g.length;r++)if(0!=e.g[r])return!1;return!0}function B(e){return -1==e.h}function x(e){let r=e.g.length,i=[];for(let s=0;s<r;s++)i[s]=~e.g[s];return new t(i,~e.h).add(s)}function F(e,r){return e.add(x(r))}function G(e,r){for(;(65535&e[r])!=e[r];)e[r+1]+=e[r]>>>16,e[r]&=65535,r++}function H(e,r){this.g=e,this.h=r}function D(e,r){if(C(r))throw Error("division by zero");if(C(e))return new H(i,i);if(B(e))return r=D(x(e),r),new H(x(r.g),x(r.h));if(B(r))return r=D(e,x(r)),new H(x(r.g),r.h);if(e.g.length>30){if(B(e)||B(r))throw Error("slowDivide_ only works with positive integers.");for(var o=s,l=r;0>=l.l(e);)o=I(o),l=I(l);var h=J(o,1),d=J(l,1);for(l=J(l,2),o=J(o,2);!C(l);){var f=d.add(l);0>=f.l(e)&&(h=h.add(o),d=f),l=J(l,1),o=J(o,1)}return r=F(e,h.j(r)),new H(h,r)}for(h=i;e.l(r)>=0;){for(l=(l=Math.ceil(Math.log(o=Math.max(1,Math.floor(e.m()/r.m())))/Math.LN2))<=48?1:Math.pow(2,l-48),f=(d=v(o)).j(r);B(f)||f.l(e)>0;)o-=l,f=(d=v(o)).j(r);C(d)&&(d=s),h=h.add(d),e=F(e,f)}return new H(h,e)}function I(e){let r=e.g.length+1,i=[];for(let s=0;s<r;s++)i[s]=e.i(s)<<1|e.i(s-1)>>>31;return new t(i,e.h)}function J(e,r){let i=r>>5;r%=32;let s=e.g.length-i,o=[];for(let l=0;l<s;l++)o[l]=r>0?e.i(l+i)>>>r|e.i(l+i+1)<<32-r:e.i(l+i);return new t(o,e.h)}(e=t.prototype).m=function(){if(B(this))return-x(this).m();let e=0,r=1;for(let i=0;i<this.g.length;i++){let s=this.i(i);e+=(s>=0?s:4294967296+s)*r,r*=4294967296}return e},e.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if(C(this))return"0";if(B(this))return"-"+x(this).toString(e);let r=v(Math.pow(e,6));var i=this;let s="";for(;;){let o=D(i,r).g,l=(((i=F(i,o.j(r))).g.length>0?i.g[0]:i.h)>>>0).toString(e);if(C(i=o))return l+s;for(;l.length<6;)l="0"+l;s=l+s}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return B(e=F(this,e))?-1:C(e)?0:1},e.abs=function(){return B(this)?x(this):this},e.add=function(e){let r=Math.max(this.g.length,e.g.length),i=[],s=0;for(let o=0;o<=r;o++){let r=s+(65535&this.i(o))+(65535&e.i(o)),l=(r>>>16)+(this.i(o)>>>16)+(e.i(o)>>>16);s=l>>>16,r&=65535,l&=65535,i[o]=l<<16|r}return new t(i,-2147483648&i[i.length-1]?-1:0)},e.j=function(e){if(C(this)||C(e))return i;if(B(this))return B(e)?x(this).j(x(e)):x(x(this).j(e));if(B(e))return x(this.j(x(e)));if(0>this.l(o)&&0>e.l(o))return v(this.m()*e.m());let r=this.g.length+e.g.length,s=[];for(var l=0;l<2*r;l++)s[l]=0;for(l=0;l<this.g.length;l++)for(let r=0;r<e.g.length;r++){let i=this.i(l)>>>16,o=65535&this.i(l),h=e.i(r)>>>16,d=65535&e.i(r);s[2*l+2*r]+=o*d,G(s,2*l+2*r),s[2*l+2*r+1]+=i*d,G(s,2*l+2*r+1),s[2*l+2*r+1]+=o*h,G(s,2*l+2*r+1),s[2*l+2*r+2]+=i*h,G(s,2*l+2*r+2)}for(e=0;e<r;e++)s[e]=s[2*e+1]<<16|s[2*e];for(e=r;e<2*r;e++)s[e]=0;return new t(s,0)},e.B=function(e){return D(this,e).h},e.and=function(e){let r=Math.max(this.g.length,e.g.length),i=[];for(let s=0;s<r;s++)i[s]=this.i(s)&e.i(s);return new t(i,this.h&e.h)},e.or=function(e){let r=Math.max(this.g.length,e.g.length),i=[];for(let s=0;s<r;s++)i[s]=this.i(s)|e.i(s);return new t(i,this.h|e.h)},e.xor=function(e){let r=Math.max(this.g.length,e.g.length),i=[];for(let s=0;s<r;s++)i[s]=this.i(s)^e.i(s);return new t(i,this.h^e.h)},m.prototype.digest=m.prototype.A,m.prototype.reset=m.prototype.u,m.prototype.update=m.prototype.v,ea=ty.Md5=m,t.prototype.add=t.prototype.add,t.prototype.multiply=t.prototype.j,t.prototype.modulo=t.prototype.B,t.prototype.compare=t.prototype.l,t.prototype.toNumber=t.prototype.m,t.prototype.toString=t.prototype.toString,t.prototype.getBits=t.prototype.i,t.fromNumber=v,t.fromString=function y(e,r){if(0==e.length)throw Error("number format error: empty string");if((r=r||10)<2||36<r)throw Error("radix out of range: "+r);if("-"==e.charAt(0))return x(y(e.substring(1),r));if(e.indexOf("-")>=0)throw Error('number format error: interior "-" character');let s=v(Math.pow(r,8)),o=i;for(let i=0;i<e.length;i+=8){var l=Math.min(8,e.length-i);let h=parseInt(e.substring(i,i+l),r);l<8?(l=v(Math.pow(r,l)),o=o.j(l).add(v(h))):o=(o=o.j(s)).add(v(h))}return o},eo=ty.Integer=t}).apply(void 0!==tg?tg:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var tE="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},tI={};(function(){var e,r,i=Object.defineProperty,s=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof tE&&tE];for(var r=0;r<e.length;++r){var i=e[r];if(i&&i.Math==Math)return i}throw Error("Cannot find global object")}(this);function da(e,r){if(r)e:{var o=s;e=e.split(".");for(var l=0;l<e.length-1;l++){var h=e[l];if(!(h in o))break e;o=o[h]}(r=r(l=o[e=e[e.length-1]]))!=l&&null!=r&&i(o,e,{configurable:!0,writable:!0,value:r})}}da("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),da("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),da("Object.entries",function(e){return e||function(e){var r,i=[];for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.push([r,e[r]]);return i}});var o=o||{},l=this||self;function n(e){var r=typeof e;return"object"==r&&null!=e||"function"==r}function fa(e,r,i){return e.call.apply(e.bind,arguments)}function p(e,r,i){return(p=fa).apply(null,arguments)}function ha(e,r){var i=Array.prototype.slice.call(arguments,1);return function(){var r=i.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function t(e,r){function c(){}c.prototype=r.prototype,e.Z=r.prototype,e.prototype=new c,e.prototype.constructor=e,e.Ob=function(e,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return r.prototype[i].apply(e,o)}}var h="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function ja(e){let r=e.length;if(r>0){let i=Array(r);for(let s=0;s<r;s++)i[s]=e[s];return i}return[]}function ka(e,r){for(let r=1;r<arguments.length;r++){let s=arguments[r];var i=typeof s;if("array"==(i="object"!=i?i:s?Array.isArray(s)?"array":i:"null")||"object"==i&&"number"==typeof s.length){i=e.length||0;let r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}var d=new class{constructor(e,r){this.i=e,this.j=r,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new ra,e=>e.reset());let ra=class ra{constructor(){this.next=this.g=this.h=null}set(e,r){this.h=e,this.g=r,this.next=null}reset(){this.next=this.g=this.h=null}};let f,_=!1,g=new class{constructor(){this.h=this.g=null}add(e,r){let i=d.get();i.set(e,r),this.h?this.h.next=i:this.g=i,this.h=i}},ta=()=>{let e=Promise.resolve(void 0);f=()=>{e.then(sa)}};function sa(){let e;for(var r;e=null,g.g&&(e=g.g,g.g=g.g.next,g.g||(g.h=null),e.next=null),r=e;){try{r.h.call(r.g)}catch(e){!function(e){l.setTimeout(()=>{throw e},0)}(e)}d.j(r),d.h<100&&(d.h++,r.next=d.g,d.g=r)}_=!1}function w(){this.u=this.u,this.C=this.C}function x(e,r){this.type=e,this.g=this.target=r,this.defaultPrevented=!1}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},x.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var e=!1,r=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let c=()=>{};l.addEventListener("test",c,r),l.removeEventListener("test",c,r)}catch(e){}return e}();function y(e){return/^[\s\xa0]*$/.test(e)}function z(e,r){x.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,r)}t(z,x),z.prototype.init=function(e,r){let i=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=r,(r=e.relatedTarget)||("mouseover"==i?r=e.fromElement:"mouseout"==i&&(r=e.toElement)),this.relatedTarget=r,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&z.Z.h.call(this)},z.prototype.h=function(){z.Z.h.call(this);let e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var b="closure_listenable_"+(1e6*Math.random()|0),k=0;function wa(e,r,i,s,o){this.listener=e,this.proxy=null,this.src=r,this.type=i,this.capture=!!s,this.ha=o,this.key=++k,this.da=this.fa=!1}function xa(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ya(e,r,i){for(let s in e)r.call(i,e[s],s,e)}function Ba(e){let r={};for(let i in e)r[i]=e[i];return r}let M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Da(e,r){let i,s;for(let r=1;r<arguments.length;r++){for(i in s=arguments[r])e[i]=s[i];for(let r=0;r<M.length;r++)i=M[r],Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}}function Ea(e){this.src=e,this.g={},this.h=0}function Ga(e,r){let i=r.type;if(i in e.g){var s,o=e.g[i],l=Array.prototype.indexOf.call(o,r,void 0);(s=l>=0)&&Array.prototype.splice.call(o,l,1),s&&(xa(r),0==e.g[i].length&&(delete e.g[i],e.h--))}}function Fa(e,r,i,s){for(let o=0;o<e.length;++o){let l=e[o];if(!l.da&&l.listener==r&&!!i==l.capture&&l.ha==s)return o}return -1}Ea.prototype.add=function(e,r,i,s,o){let l=e.toString();(e=this.g[l])||(e=this.g[l]=[],this.h++);let h=Fa(e,r,s,o);return h>-1?(r=e[h],i||(r.fa=!1)):((r=new wa(r,this.src,l,!!s,o)).fa=i,e.push(r)),r};var q="closure_lm_"+(1e6*Math.random()|0),j={};function Na(e,r,i,s,o,l){if(!r)throw Error("Invalid event type");let h=n(o)?!!o.capture:!!o,d=Oa(e);if(d||(e[q]=d=new Ea(e)),(i=d.add(r,i,s,h,l)).proxy)return i;if(s=function a(e){return Ra.call(a.src,a.listener,e)},i.proxy=s,s.src=e,s.listener=i,e.addEventListener)A||(o=h),void 0===o&&(o=!1),e.addEventListener(r.toString(),s,o);else if(e.attachEvent)e.attachEvent(Qa(r.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return i}function Ta(e){if("number"!=typeof e&&e&&!e.da){var r=e.src;if(r&&r[b])Ga(r.i,e);else{var i=e.type,s=e.proxy;r.removeEventListener?r.removeEventListener(i,s,e.capture):r.detachEvent?r.detachEvent(Qa(i),s):r.addListener&&r.removeListener&&r.removeListener(s),(i=Oa(r))?(Ga(i,e),0==i.h&&(i.src=null,r[q]=null)):xa(e)}}}function Qa(e){return e in j?j[e]:j[e]="on"+e}function Ra(e,r){if(e.da)e=!0;else{r=new z(r,this);let i=e.listener,s=e.ha||e.src;e.fa&&Ta(e),e=i.call(s,r)}return e}function Oa(e){return(e=e[q])instanceof Ea?e:null}var $="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ma(e){return"function"==typeof e?e:(e[$]||(e[$]=function(r){return e.handleEvent(r)}),e[$])}function C(){w.call(this),this.i=new Ea(this),this.M=this,this.G=null}function D(e,r){let i,s;var o,l=e.G;if(l)for(o=[];l;l=l.G)o.push(l);if(e=e.M,l=r.type||r,"string"==typeof r)r=new x(r,e);else if(r instanceof x)r.target=r.target||e;else{var h=r;Da(r=new x(l,e),h)}if(h=!0,o)for(s=o.length-1;s>=0;s--)h=Va(i=r.g=o[s],l,!0,r)&&h;if(h=Va(i=r.g=e,l,!0,r)&&h,h=Va(i,l,!1,r)&&h,o)for(s=0;s<o.length;s++)h=Va(i=r.g=o[s],l,!1,r)&&h}function Va(e,r,i,s){if(!(r=e.i.g[String(r)]))return!0;r=r.concat();let o=!0;for(let l=0;l<r.length;++l){let h=r[l];if(h&&!h.da&&h.capture==i){let r=h.listener,i=h.ha||h.src;h.fa&&Ga(e.i,h),o=!1!==r.call(i,s)&&o}}return o&&!s.defaultPrevented}t(C,w),C.prototype[b]=!0,C.prototype.removeEventListener=function(e,r,i,s){!function Sa(e,r,i,s,o){if(Array.isArray(r))for(var l=0;l<r.length;l++)Sa(e,r[l],i,s,o);else(s=n(s)?!!s.capture:!!s,i=Ma(i),e&&e[b])?(e=e.i,(l=String(r).toString())in e.g&&(i=Fa(r=e.g[l],i,s,o))>-1&&(xa(r[i]),Array.prototype.splice.call(r,i,1),0==r.length&&(delete e.g[l],e.h--))):e&&(e=Oa(e))&&(r=e.g[r.toString()],e=-1,r&&(e=Fa(r,i,s,o)),(i=e>-1?r[e]:null)&&Ta(i))}(this,e,r,i,s)},C.prototype.N=function(){if(C.Z.N.call(this),this.i){var e=this.i;for(let r in e.g){let i=e.g[r];for(let e=0;e<i.length;e++)xa(i[e]);delete e.g[r],e.h--}}this.G=null},C.prototype.J=function(e,r,i,s){return this.i.add(String(e),r,!1,i,s)},C.prototype.K=function(e,r,i,s){return this.i.add(String(e),r,!0,i,s)};let Ya=class Ya extends w{constructor(e,r){super(),this.m=e,this.l=r,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function Xa(e){e.g=function(e,r){if("function"!=typeof e){if(e&&"function"==typeof e.handleEvent)e=p(e.handleEvent,e);else throw Error("Invalid listener argument")}return Number(r)>2147483647?-1:l.setTimeout(e,r||0)}(()=>{e.g=null,e.i&&(e.i=!1,Xa(e))},e.l);let r=e.h;e.h=null,e.m.apply(null,r)}(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}};function E(e){w.call(this),this.h=e,this.g={}}t(E,w);var ee=[];function $a(e){ya(e.g,function(e,r){this.g.hasOwnProperty(r)&&Ta(e)},e),e.g={}}E.prototype.N=function(){E.Z.N.call(this),$a(this)},E.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var et=l.JSON.stringify,er=l.JSON.parse,en=class{stringify(e){return l.JSON.stringify(e,void 0)}parse(e){return l.JSON.parse(e,void 0)}};function eb(){}function fb(){}var ei={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function gb(){x.call(this,"d")}function hb(){x.call(this,"c")}t(gb,x),t(hb,x);var es={},eo=null;function jb(){return eo=eo||new C}function kb(e){x.call(this,es.Ia,e)}function lb(e){let r=jb();D(r,new kb(r))}function mb(e,r){x.call(this,es.STAT_EVENT,e),this.stat=r}function J(e){let r=jb();D(r,new mb(r,e))}function nb(e,r){x.call(this,es.Ja,e),this.size=r}function ob(e,r){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){e()},r)}function pb(){this.g=!0}function K(e,r,i,s){e.info(function(){return"XMLHTTP TEXT ("+r+"): "+function(e,r){if(!e.g)return r;if(!r)return null;try{let l=JSON.parse(r);if(l){for(e=0;e<l.length;e++)if(Array.isArray(l[e])){var i=l[e];if(!(i.length<2)){var s=i[1];if(Array.isArray(s)&&!(s.length<1)){var o=s[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(let e=1;e<s.length;e++)s[e]=""}}}}return et(l)}catch(e){return r}}(e,i)+(s?" "+s:"")})}es.Ia="serverreachability",t(kb,x),es.STAT_EVENT="statevent",t(mb,x),es.Ja="timingevent",t(nb,x),pb.prototype.ua=function(){this.g=!1},pb.prototype.info=function(){};var ea={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},eg={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function xb(){}function L(e){return encodeURIComponent(String(e))}function N(e,r,i,s){this.j=e,this.i=r,this.l=i,this.S=s||1,this.V=new E(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new zb}function zb(){this.i=null,this.g="",this.h=!1}t(xb,eb),xb.prototype.g=function(){return new XMLHttpRequest},e=new xb;var ey={},eE={};function Cb(e,r,i){e.M=1,e.A=Db(O(r)),e.u=i,e.R=!0,Eb(e,null)}function Eb(e,r){e.F=Date.now(),Fb(e),e.B=O(e.A);var i=e.B,s=e.S;Array.isArray(s)||(s=[String(s)]),Gb(i.i,"t",s),e.C=0,i=e.j.L,e.h=new zb,e.g=Hb(e.j,i?r:null,!e.u),e.P>0&&(e.O=new Ya(p(e.Y,e,e.g),e.P)),r=e.V,i=e.g,s=e.ba;var o="readystatechange";Array.isArray(o)||(o&&(ee[0]=o.toString()),o=ee);for(let e=0;e<o.length;e++){let l=function Ka(e,r,i,s,o){if(s&&s.once)return function La(e,r,i,s,o){if(Array.isArray(r)){for(let l=0;l<r.length;l++)La(e,r[l],i,s,o);return null}return i=Ma(i),e&&e[b]?e.K(r,i,n(s)?!!s.capture:!!s,o):Na(e,r,i,!0,s,o)}(e,r,i,s,o);if(Array.isArray(r)){for(let l=0;l<r.length;l++)Ka(e,r[l],i,s,o);return null}return i=Ma(i),e&&e[b]?e.J(r,i,n(s)?!!s.capture:!!s,o):Na(e,r,i,!1,s,o)}(i,o[e],s||r.handleEvent,!1,r.h||r);if(!l)break;r.g[l.key]=l}r=e.J?Ba(e.J):{},e.u?(e.v||(e.v="POST"),r["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,r)):(e.v="GET",e.g.ea(e.B,e.v,null,r)),lb(),function(e,r,i,s,o,l){e.info(function(){if(e.g){if(l){var h="",d=l.split("&");for(let e=0;e<d.length;e++){var f=d[e].split("=");if(f.length>1){let e=f[0];f=f[1];let r=e.split("_");h=r.length>=2&&"type"==r[1]?h+(e+"=")+f+"&":h+(e+"=redacted&")}}}else h=null}else h=l;return"XMLHTTP REQ ("+s+") [attempt "+o+"]: "+r+"\n"+i+"\n"+h})}(e.i,e.v,e.B,e.l,e.S,e.u)}function Ob(e){return!!e.g&&"GET"==e.v&&2!=e.M&&e.j.Aa}function Fb(e){e.T=Date.now()+e.H,Sb(e,e.H)}function Sb(e,r){if(null!=e.D)throw Error("WatchDog timer not null");e.D=ob(p(e.aa,e),r)}function Jb(e){e.D&&(l.clearTimeout(e.D),e.D=null)}function Mb(e){0==e.j.I||e.K||Qb(e.j,e)}function Q(e){Jb(e);var r=e.O;r&&"function"==typeof r.dispose&&r.dispose(),e.O=null,$a(e.V),e.g&&(r=e.g,e.g=null,r.abort(),r.dispose())}function Lb(e,r){try{var i=e.j;if(0!=i.I&&(i.g==e||Tb(i.h,e))){if(!e.L&&Tb(i.h,e)&&3==i.I){try{var s=i.Ba.g.parse(r)}catch(e){s=null}if(Array.isArray(s)&&3==s.length){var o=s;if(0==o[0]){e:if(!i.v){if(i.g){if(i.g.F+3e3<e.F)Ub(i),Vb(i);else break e}Wb(i),J(18)}}else i.xa=o[1],0<i.xa-i.K&&o[2]<37500&&i.F&&0==i.A&&!i.C&&(i.C=ob(p(i.Va,i),6e3));1>=Xb(i.h)&&i.ta&&(i.ta=void 0)}else R(i,11)}else if((e.L||i.g==e)&&Ub(i),!y(r))for(o=i.Ba.g.parse(r),r=0;r<o.length;r++){let d=o[r],f=d[0];if(!(f<=i.K)){if(i.K=f,d=d[1],2==i.I){if("c"==d[0]){i.M=d[1],i.ba=d[2];let r=d[3];null!=r&&(i.ka=r,i.j.info("VER="+i.ka));let o=d[4];null!=o&&(i.za=o,i.j.info("SVER="+i.za));let f=d[5];null!=f&&"number"==typeof f&&f>0&&(s=1.5*f,i.O=s,i.j.info("backChannelRequestTimeoutMs_="+s)),s=i;let _=e.g;if(_){let e=_.g?_.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var l=s.h;l.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(l.j=l.l,l.g=new Set,l.h&&(Yb(l,l.h),l.h=null))}if(s.G){let e=_.g?_.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(s.wa=e,S(s.J,s.G,e))}}if(i.I=3,i.l&&i.l.ra(),i.aa&&(i.T=Date.now()-e.F,i.j.info("Handshake RTT: "+i.T+"ms")),(s=i).na=Zb(s,s.L?s.ba:null,s.W),e.L){$b(s.h,e);var h=s.O;h&&(e.H=h),e.D&&(Jb(e),Fb(e)),s.g=e}else ac(s);i.i.length>0&&bc(i)}else"stop"!=d[0]&&"close"!=d[0]||R(i,7)}else 3==i.I&&("stop"==d[0]||"close"==d[0]?"stop"==d[0]?R(i,7):cc(i):"noop"!=d[0]&&i.l&&i.l.qa(d),i.A=0)}}}lb(4)}catch(e){}}N.prototype.ba=function(e){e=e.target;let r=this.O;r&&3==P(e)?r.j():this.Y(e)},N.prototype.Y=function(e){try{if(e==this.g)e:{let f=P(this.g),_=this.g.ya(),g=this.g.ca();if(!(f<3)&&(3!=f||this.g&&(this.h.h||this.g.la()||Ib(this.g)))){this.K||4!=f||7==_||(8==_||g<=0?lb(3):lb(2)),Jb(this);var r=this.g.ca();this.X=r;var i=function(e){if(!Ob(e))return e.g.la();let r=Ib(e.g);if(""===r)return"";let i="",s=r.length,o=4==P(e.g);if(!e.h.i){if("undefined"==typeof TextDecoder)return Q(e),Mb(e),"";e.h.i=new l.TextDecoder}for(let l=0;l<s;l++)e.h.h=!0,i+=e.h.i.decode(r[l],{stream:!(o&&l==s-1)});return r.length=0,e.h.g+=i,e.C=0,e.h.g}(this);if(this.o=200==r,function(e,r,i,s,o,l,h){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+o+"]: "+r+"\n"+i+"\n"+l+" "+h})}(this.i,this.v,this.B,this.l,this.S,f,r),this.o){if(this.U&&!this.L){t:{if(this.g){var s,o=this.g;if((s=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(s)){var h=s;break t}}h=null}if(e=h)K(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Lb(this,e);else{this.o=!1,this.m=3,J(12),Q(this),Mb(this);break e}}if(this.R){let r;for(e=!0;!this.K&&this.C<i.length;)if((r=function(e,r){var i=e.C,s=r.indexOf("\n",i);return -1==s?eE:isNaN(i=Number(r.substring(i,s)))?ey:(s+=1)+i>r.length?eE:(r=r.slice(s,s+i),e.C=s+i,r)}(this,i))==eE){4==f&&(this.m=4,J(14),e=!1),K(this.i,this.l,null,"[Incomplete Response]");break}else if(r==ey){this.m=4,J(15),K(this.i,this.l,i,"[Invalid Chunk]"),e=!1;break}else K(this.i,this.l,r,null),Lb(this,r);if(Ob(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=i.length||this.h.h||(this.m=1,J(16),e=!1),this.o=this.o&&e,e){if(i.length>0&&!this.W){this.W=!0;var d=this.j;d.g==this&&d.aa&&!d.P&&(d.j.info("Great, no buffering proxy detected. Bytes received: "+i.length),Pb(d),d.P=!0,J(11))}}else K(this.i,this.l,i,"[Invalid Chunked Response]"),Q(this),Mb(this)}else K(this.i,this.l,i,null),Lb(this,i);4==f&&Q(this),this.o&&!this.K&&(4==f?Qb(this.j,this):(this.o=!1,Fb(this)))}else(function(e){let r={};e=(e.g&&P(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<e.length;s++){if(y(e[s]))continue;var i=function(e){var r=1;e=e.split(":");let i=[];for(;r>0&&e.length;)i.push(e.shift()),r--;return e.length&&i.push(e.join(":")),i}(e[s]);let o=i[0];if("string"!=typeof(i=i[1]))continue;i=i.trim();let l=r[o]||[];r[o]=l,l.push(i)}!function(e,r){for(let i in e)r.call(void 0,e[i],i,e)}(r,function(e){return e.join(", ")})})(this.g),400==r&&i.indexOf("Unknown SID")>0?(this.m=3,J(12)):(this.m=0,J(13)),Q(this),Mb(this)}}}catch(e){}finally{}},N.prototype.cancel=function(){this.K=!0,Q(this)},N.prototype.aa=function(){this.D=null;let e=Date.now();e-this.T>=0?(function(e,r){e.info(function(){return"TIMEOUT: "+r})}(this.i,this.B),2!=this.M&&(lb(),J(17)),Q(this),this.m=2,Mb(this)):Sb(this,this.T-e)};var eI=class{constructor(e,r){this.g=e,this.map=r}};function ec(e){this.l=e||10,e=l.PerformanceNavigationTiming?(e=l.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fc(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Xb(e){return e.h?1:e.g?e.g.size:0}function Tb(e,r){return e.h?e.h==r:!!e.g&&e.g.has(r)}function Yb(e,r){e.g?e.g.add(r):e.h=r}function $b(e,r){e.h&&e.h==r?e.h=null:e.g&&e.g.has(r)&&e.g.delete(r)}function hc(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let r=e.i;for(let i of e.g.values())r=r.concat(i.G);return r}return ja(e.i)}ec.prototype.cancel=function(){if(this.i=hc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var eT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function T(e){let r;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof T?(this.l=e.l,kc(this,e.j),this.o=e.o,this.g=e.g,lc(this,e.u),this.h=e.h,mc(this,nc(e.i)),this.m=e.m):e&&(r=String(e).match(eT))?(this.l=!1,kc(this,r[1]||"",!0),this.o=oc(r[2]||""),this.g=oc(r[3]||"",!0),lc(this,r[4]),this.h=oc(r[5]||"",!0),mc(this,r[6]||"",!0),this.m=oc(r[7]||"")):(this.l=!1,this.i=new pc(null,this.l))}function O(e){return new T(e)}function kc(e,r,i){e.j=i?oc(r,!0):r,e.j&&(e.j=e.j.replace(/:$/,""))}function lc(e,r){if(r){if(isNaN(r=Number(r))||r<0)throw Error("Bad port number "+r);e.u=r}else e.u=null}function mc(e,r,i){var s,o;r instanceof pc?(e.i=r,s=e.i,(o=e.l)&&!s.j&&(U(s),s.i=null,s.g.forEach(function(e,r){let i=r.toLowerCase();r!=i&&(yc(this,r),Gb(this,i,e))},s)),s.j=o):(i||(r=qc(r,eR)),e.i=new pc(r,e.l))}function S(e,r,i){e.i.set(r,i)}function Db(e){return S(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function oc(e,r){return e?r?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function qc(e,r,i){return"string"==typeof e?(e=encodeURI(e).replace(r,xc),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function xc(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}T.prototype.toString=function(){let e=[];var r=this.j;r&&e.push(qc(r,ev,!0),":");var i=this.g;return(i||"file"==r)&&(e.push("//"),(r=this.o)&&e.push(qc(r,ev,!0),"@"),e.push(L(i).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.u)&&e.push(":",String(i))),(i=this.h)&&(this.g&&"/"!=i.charAt(0)&&e.push("/"),e.push(qc(i,"/"==i.charAt(0)?eA:eP,!0))),(i=this.i.toString())&&e.push("?",i),(i=this.m)&&e.push("#",qc(i,ew)),e.join("")},T.prototype.resolve=function(e){let r=O(this),i=!!e.j;i?kc(r,e.j):i=!!e.o,i?r.o=e.o:i=!!e.g,i?r.g=e.g:i=null!=e.u;var s=e.h;if(i)lc(r,e.u);else if(i=!!e.h){if("/"!=s.charAt(0)){if(this.g&&!this.h)s="/"+s;else{var o=r.h.lastIndexOf("/");-1!=o&&(s=r.h.slice(0,o+1)+s)}}if(".."==(o=s)||"."==o)s="";else if(-1!=o.indexOf("./")||-1!=o.indexOf("/.")){s=0==o.lastIndexOf("/",0),o=o.split("/");let e=[];for(let r=0;r<o.length;){let i=o[r++];"."==i?s&&r==o.length&&e.push(""):".."==i?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),s&&r==o.length&&e.push("")):(e.push(i),s=!0)}s=e.join("/")}else s=o}return i?r.h=s:i=""!==e.i.toString(),i?mc(r,nc(e.i)):i=!!e.m,i&&(r.m=e.m),r};var ev=/[#\/\?@]/g,eP=/[#\?:]/g,eA=/[#\?]/g,eR=/[#\?@]/g,ew=/#/g;function pc(e,r){this.h=this.g=null,this.i=e||null,this.j=!!r}function U(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,r){if(e){e=e.split("&");for(let i=0;i<e.length;i++){let s=e[i].indexOf("="),o,l=null;s>=0?(o=e[i].substring(0,s),l=e[i].substring(s+1)):o=e[i],r(o,l?decodeURIComponent(l.replace(/\+/g," ")):"")}}}(e.i,function(r,i){e.add(decodeURIComponent(r.replace(/\+/g," ")),i)}))}function yc(e,r){U(e),r=V(e,r),e.g.has(r)&&(e.i=null,e.h-=e.g.get(r).length,e.g.delete(r))}function zc(e,r){return U(e),r=V(e,r),e.g.has(r)}function Ac(e,r){U(e);let i=[];if("string"==typeof r)zc(e,r)&&(i=i.concat(e.g.get(V(e,r))));else for(e=Array.from(e.g.values()),r=0;r<e.length;r++)i=i.concat(e[r]);return i}function Gb(e,r,i){yc(e,r),i.length>0&&(e.i=null,e.g.set(V(e,r),ja(i)),e.h+=i.length)}function nc(e){let r=new pc;return r.i=e.i,e.g&&(r.g=new Map(e.g),r.h=e.h),r}function V(e,r){return r=String(r),e.j&&(r=r.toLowerCase()),r}function W(e,r,i,s,o){try{o&&(o.onload=null,o.onerror=null,o.onabort=null,o.ontimeout=null),s(i)}catch(e){}}function Dc(){this.g=new en}function Ec(e){this.i=e.Sb||null,this.h=e.ab||!1}function Fc(e,r){C.call(this),this.H=e,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Ic(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function Hc(e){e.readyState=4,e.l=null,e.j=null,e.B=null,Gc(e)}function Gc(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Jc(e){let r="";return ya(e,function(e,i){r+=i+":"+e+"\r\n"}),r}function Kc(e,r,i){e:{for(s in i){var s=!1;break e}s=!0}s||(i=Jc(i),"string"==typeof e?null!=i&&L(i):S(e,r,i))}function X(e){C.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(r=pc.prototype).add=function(e,r){U(this),this.i=null,e=V(this,e);let i=this.g.get(e);return i||this.g.set(e,i=[]),i.push(r),this.h+=1,this},r.forEach=function(e,r){U(this),this.g.forEach(function(i,s){i.forEach(function(i){e.call(r,i,s,this)},this)},this)},r.set=function(e,r){return U(this),this.i=null,zc(this,e=V(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[r]),this.h+=1,this},r.get=function(e,r){return e&&(e=Ac(this,e)).length>0?String(e[0]):r},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],r=Array.from(this.g.keys());for(let s=0;s<r.length;s++){var i=r[s];let o=L(i);i=Ac(this,i);for(let r=0;r<i.length;r++){let s=o;""!==i[r]&&(s+="="+L(i[r])),e.push(s)}}return this.i=e.join("&")},t(Ec,eb),Ec.prototype.g=function(){return new Fc(this.i,this.h)},t(Fc,C),(r=Fc.prototype).open=function(e,r){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=r,this.readyState=1,Gc(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;let r={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(r.body=e),(this.H||l).fetch(new Request(this.D,r)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Hc(this)),this.readyState=0},r.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Gc(this)),this.g&&(this.readyState=3,Gc(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==l.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ic(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))}},r.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var r=e.value?e.value:new Uint8Array(0);(r=this.B.decode(r,{stream:!e.done}))&&(this.response=this.responseText+=r)}e.done?Hc(this):Gc(this),3==this.readyState&&Ic(this)}},r.Oa=function(e){this.g&&(this.response=this.responseText=e,Hc(this))},r.Na=function(e){this.g&&(this.response=e,Hc(this))},r.ga=function(){this.g&&Hc(this)},r.setRequestHeader=function(e,r){this.A.append(e,r)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],r=this.h.entries();for(var i=r.next();!i.done;)e.push((i=i.value)[0]+": "+i[1]),i=r.next();return e.join("\r\n")},Object.defineProperty(Fc.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),t(X,C);var eC=/^https?$/i,eS=["POST","PUT"];function Nc(e,r){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=r,e.o=5,Oc(e),Pc(e)}function Oc(e){e.A||(e.A=!0,D(e,"complete"),D(e,"error"))}function Qc(e){if(e.h&&void 0!==o){if(e.v&&4==P(e))setTimeout(e.Ca.bind(e),0);else if(D(e,"readystatechange"),4==P(e)){e.h=!1;try{let o=e.ca();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r,i,s=!0;break;default:s=!1}if(!(r=s)){if(i=0===o){let r=String(e.D).match(eT)[1]||null;!r&&l.self&&l.self.location&&(r=l.self.location.protocol.slice(0,-1)),i=!eC.test(r?r.toLowerCase():"")}r=i}if(r)D(e,"complete"),D(e,"success");else{e.o=6;try{var h=P(e)>2?e.g.statusText:""}catch(e){h=""}e.l=h+" ["+e.ca()+"]",Oc(e)}}finally{Pc(e)}}}}function Pc(e,r){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);let i=e.g;e.g=null,r||D(e,"ready");try{i.onreadystatechange=null}catch(e){}}}function P(e){return e.g?e.g.readyState:0}function Ib(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Rc(e,r,i){return i&&i.internalChannelParams&&i.internalChannelParams[e]||r}function Sc(e){this.za=0,this.i=[],this.j=new pb,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Rc("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Rc("baseRetryDelayMs",5e3,e),this.Za=Rc("retryDelaySeedMs",1e4,e),this.Ta=Rc("forwardChannelMaxRetries",2,e),this.va=Rc("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new ec(e&&e.concurrentRequestLimit),this.Ba=new Dc,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function cc(e){if(Tc(e),3==e.I){var r=e.V++,i=O(e.J);if(S(i,"SID",e.M),S(i,"RID",r),S(i,"TYPE","terminate"),Uc(e,i),(r=new N(e,e.j,r)).M=2,r.A=Db(O(i)),i=!1,l.navigator&&l.navigator.sendBeacon)try{i=l.navigator.sendBeacon(r.A.toString(),"")}catch(e){}!i&&l.Image&&((new Image).src=r.A,i=!0),i||(r.g=Hb(r.j,null),r.g.ea(r.A)),r.F=Date.now(),Fb(r)}Vc(e)}function Vb(e){e.g&&(Pb(e),e.g.cancel(),e.g=null)}function Tc(e){Vb(e),e.v&&(l.clearTimeout(e.v),e.v=null),Ub(e),e.h.cancel(),e.m&&("number"==typeof e.m&&l.clearTimeout(e.m),e.m=null)}function bc(e){if(!fc(e.h)&&!e.m){e.m=!0;var r=e.Ea;f||ta(),_||(f(),_=!0),g.add(r,e),e.D=0}}function Zc(e,r){var i;i=r?r.l:e.V++;let s=O(e.J);S(s,"SID",e.M),S(s,"RID",i),S(s,"AID",e.K),Uc(e,s),e.u&&e.o&&Kc(s,e.u,e.o),i=new N(e,e.j,i,e.D+1),null===e.u&&(i.J=e.o),r&&(e.i=r.G.concat(e.i)),r=Yc(e,i,1e3),i.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),Yb(e.h,i),Cb(i,s,r)}function Uc(e,r){e.H&&ya(e.H,function(e,i){S(r,i,e)}),e.l&&ya({},function(e,i){S(r,i,e)})}function Yc(e,r,i){i=Math.min(e.i.length,i);let s=e.l?p(e.l.Ka,e.l,e):null;e:{var o=e.i;let r=-1;for(;;){let e=["count="+i];-1==r?i>0?(r=o[0].g,e.push("ofs="+r)):r=0:e.push("ofs="+r);let d=!0;for(let f=0;f<i;f++){var l=o[f].g;let i=o[f].map;if((l-=r)<0)r=Math.max(0,o[f].g-100),d=!1;else try{l="req"+l+"_";try{var h=i instanceof Map?i:Object.entries(i);for(let[r,i]of h){let s=i;n(i)&&(s=et(i)),e.push(l+r+"="+encodeURIComponent(s))}}catch(r){throw e.push(l+"type="+encodeURIComponent("_badmap")),r}}catch(e){s&&s(i)}}if(d){h=e.join("&");break e}}h=void 0}return e=e.i.splice(0,i),r.G=e,h}function ac(e){if(!e.g&&!e.v){e.Y=1;var r=e.Da;f||ta(),_||(f(),_=!0),g.add(r,e),e.A=0}}function Wb(e){return!e.g&&!e.v&&!(e.A>=3)&&(e.Y++,e.v=ob(p(e.Da,e),Xc(e,e.A)),e.A++,!0)}function Pb(e){null!=e.B&&(l.clearTimeout(e.B),e.B=null)}function $c(e){e.g=new N(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var r=O(e.na);S(r,"RID","rpc"),S(r,"SID",e.M),S(r,"AID",e.K),S(r,"CI",e.F?"0":"1"),!e.F&&e.ia&&S(r,"TO",e.ia),S(r,"TYPE","xmlhttp"),Uc(e,r),e.u&&e.o&&Kc(r,e.u,e.o),e.O&&(e.g.H=e.O);var i=e.g;e=e.ba,i.M=1,i.A=Db(O(r)),i.u=null,i.R=!0,Eb(i,e)}function Ub(e){null!=e.C&&(l.clearTimeout(e.C),e.C=null)}function Qb(e,r){var i=null;if(e.g==r){Ub(e),Pb(e),e.g=null;var s=2}else{if(!Tb(e.h,r))return;i=r.G,$b(e.h,r),s=1}if(0!=e.I){if(r.o){if(1==s){i=r.u?r.u.length:0,r=Date.now()-r.F;var o,l=e.D;D(s=jb(),new nb(s,i)),bc(e)}else ac(e)}else if(3==(l=r.m)||0==l&&r.X>0||!(1==s&&(o=r,!(Xb(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=o.G.concat(e.i),!0):1!=e.I&&2!=e.I&&!(e.D>=(e.Sa?0:e.Ta))&&(e.m=ob(p(e.Ea,e,o),Xc(e,e.D)),e.D++,!0)))||2==s&&Wb(e)))switch(i&&i.length>0&&((r=e.h).i=r.i.concat(i)),l){case 1:R(e,5);break;case 4:R(e,10);break;case 3:R(e,6);break;default:R(e,2)}}}function Xc(e,r){let i=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(i*=2),i*r}function R(e,r){if(e.j.info("Error code "+r),2==r){var i=p(e.bb,e),s=e.Ua;let r=!s;s=new T(s||"//www.google.com/images/cleardot.gif"),l.location&&"http"==l.location.protocol||kc(s,"https"),Db(s),r?function(e,r){let i=new pb;if(l.Image){let s=new Image;s.onload=ha(W,i,"TestLoadImage: loaded",!0,r,s),s.onerror=ha(W,i,"TestLoadImage: error",!1,r,s),s.onabort=ha(W,i,"TestLoadImage: abort",!1,r,s),s.ontimeout=ha(W,i,"TestLoadImage: timeout",!1,r,s),l.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else r(!1)}(s.toString(),i):function(e,r){let i=new pb,s=new AbortController,o=setTimeout(()=>{s.abort(),W(i,"TestPingServer: timeout",!1,r)},1e4);fetch(e,{signal:s.signal}).then(e=>{clearTimeout(o),e.ok?W(i,"TestPingServer: ok",!0,r):W(i,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(o),W(i,"TestPingServer: error",!1,r)})}(s.toString(),i)}else J(2);e.I=0,e.l&&e.l.pa(r),Vc(e),Tc(e)}function Vc(e){if(e.I=0,e.ja=[],e.l){let r=hc(e.h);(0!=r.length||0!=e.i.length)&&(ka(e.ja,r),ka(e.ja,e.i),e.h.i.length=0,ja(e.i),e.i.length=0),e.l.oa()}}function Zb(e,r,i){var s=i instanceof T?O(i):new T(i);if(""!=s.g)r&&(s.g=r+"."+s.g),lc(s,s.u);else{var o=l.location;s=o.protocol,r=r?r+"."+o.hostname:o.hostname,o=+o.port;let e=new T(null);s&&kc(e,s),r&&(e.g=r),o&&lc(e,o),i&&(e.h=i),s=e}return i=e.G,r=e.wa,i&&r&&S(s,i,r),S(s,"VER",e.ka),Uc(e,s),s}function Hb(e,r,i){if(r&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return(r=new X(e.Aa&&!e.ma?new Ec({ab:i}):e.ma)).Fa(e.L),r}function ad(){}function bd(){}function Y(e,r){C.call(this),this.g=new Sc(r),this.l=e,this.h=r&&r.messageUrlParams||null,e=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(e?e["X-WebChannel-Content-Type"]=r.messageContentType:e={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.sa&&(e?e["X-WebChannel-Client-Profile"]=r.sa:e={"X-WebChannel-Client-Profile":r.sa}),this.g.U=e,(e=r&&r.Qb)&&!y(e)&&(this.g.u=e),this.A=r&&r.supportsCrossDomainXhr||!1,this.v=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!y(r)&&(this.g.G=r,null!==(e=this.h)&&r in e&&r in(e=this.h)&&delete e[r]),this.j=new Z(this)}function cd(e){gb.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var r=e.__sm__;if(r){e:{for(let i in r){e=i;break e}e=void 0}(this.i=e)&&(e=this.i,r=null!==r&&e in r?r[e]:void 0),this.data=r}else this.data=e}function dd(){hb.call(this),this.status=1}function Z(e){this.g=e}(r=X.prototype).Fa=function(e){this.H=e},r.ea=function(r,i,s,o){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);i=i?i.toUpperCase():"GET",this.D=r,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():e.g(),this.g.onreadystatechange=h(p(this.Ca,this));try{this.B=!0,this.g.open(i,String(r),!0),this.B=!1}catch(e){Nc(this,e);return}if(r=s||"",s=new Map(this.headers),o){if(Object.getPrototypeOf(o)===Object.prototype)for(var d in o)s.set(d,o[d]);else if("function"==typeof o.keys&&"function"==typeof o.get)for(let e of o.keys())s.set(e,o.get(e));else throw Error("Unknown input type for opt_headers: "+String(o))}for(let[e,h]of(o=Array.from(s.keys()).find(e=>"content-type"==e.toLowerCase()),d=l.FormData&&r instanceof l.FormData,!(Array.prototype.indexOf.call(eS,i,void 0)>=0)||o||d||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s))this.g.setRequestHeader(e,h);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(r),this.v=!1}catch(e){Nc(this,e)}},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,D(this,"complete"),D(this,"abort"),Pc(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pc(this,!0)),X.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Qc(this):this.Xa())},r.Xa=function(){Qc(this)},r.isActive=function(){return!!this.g},r.ca=function(){try{return P(this)>2?this.g.status:-1}catch(e){return -1}},r.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.La=function(e){if(this.g){var r=this.g.responseText;return e&&0==r.indexOf(e)&&(r=r.substring(e.length)),er(r)}},r.ya=function(){return this.o},r.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(r=Sc.prototype).ka=8,r.I=1,r.connect=function(e,r,i,s){J(0),this.W=e,this.H=r||{},i&&void 0!==s&&(this.H.OSID=i,this.H.OAID=s),this.F=this.X,this.J=Zb(this,null,this.W),bc(this)},r.Ea=function(e){if(this.m){if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;let o=new N(this,this.j,e),l=this.o;if(this.U&&(l?Da(l=Ba(l),this.U):l=this.U),null!==this.u||this.R||(o.J=l,l=null),this.S)e:{for(var r=0,i=0;i<this.i.length;i++){t:{var s=this.i[i];if("__data__"in s.map&&"string"==typeof(s=s.map.__data__)){s=s.length;break t}s=void 0}if(void 0===s)break;if((r+=s)>4096){r=i;break e}if(4096===r||i===this.i.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=Yc(this,o,r),S(i=O(this.J),"RID",e),S(i,"CVER",22),this.G&&S(i,"X-HTTP-Session-Id",this.G),Uc(this,i),l&&(this.R?r="headers="+L(Jc(l))+"&"+r:this.u&&Kc(i,this.u,l)),Yb(this.h,o),this.Ra&&S(i,"TYPE","init"),this.S?(S(i,"$req",r),S(i,"SID","null"),o.U=!0,Cb(o,i,null)):Cb(o,i,r),this.I=2}}else 3==this.I&&(e?Zc(this,e):0==this.i.length||fc(this.h)||Zc(this))}},r.Da=function(){if(this.v=null,$c(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=ob(p(this.Wa,this),e)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,J(10),Vb(this),$c(this))},r.Va=function(){null!=this.C&&(this.C=null,Vb(this),Wb(this),J(19))},r.bb=function(e){e?(this.j.info("Successfully pinged google.com"),J(2)):(this.j.info("Failed to ping google.com"),J(1))},r.isActive=function(){return!!this.l&&this.l.isActive(this)},(r=ad.prototype).ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){},bd.prototype.g=function(e,r){return new Y(e,r)},t(Y,C),Y.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Y.prototype.close=function(){cc(this.g)},Y.prototype.o=function(e){var r=this.g;if("string"==typeof e){var i={};i.__data__=e,e=i}else this.v&&((i={}).__data__=et(e),e=i);r.i.push(new eI(r.Ya++,e)),3==r.I&&bc(r)},Y.prototype.N=function(){this.g.l=null,delete this.j,cc(this.g),delete this.g,Y.Z.N.call(this)},t(cd,gb),t(dd,hb),t(Z,ad),Z.prototype.ra=function(){D(this.g,"a")},Z.prototype.qa=function(e){D(this.g,new cd(e))},Z.prototype.pa=function(e){D(this.g,new dd)},Z.prototype.oa=function(){D(this.g,"b")},bd.prototype.createWebChannel=bd.prototype.g,Y.prototype.send=Y.prototype.o,Y.prototype.open=Y.prototype.m,Y.prototype.close=Y.prototype.close,em=tI.createWebChannelTransport=function(){return new bd},e_=tI.getStatEventTarget=function(){return jb()},ef=tI.Event=es,ep=tI.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ea.NO_ERROR=0,ea.TIMEOUT=8,ea.HTTP_ERROR=6,ed=tI.ErrorCode=ea,eg.COMPLETE="complete",eh=tI.EventType=eg,fb.EventType=ei,ei.OPEN="a",ei.CLOSE="b",ei.ERROR="c",ei.MESSAGE="d",C.prototype.listen=C.prototype.J,eu=tI.WebChannel=fb,tI.FetchXmlHttpFactory=Ec,X.prototype.listenOnce=X.prototype.K,X.prototype.getLastError=X.prototype.Ha,X.prototype.getLastErrorCode=X.prototype.ya,X.prototype.getStatus=X.prototype.ca,X.prototype.getResponseJson=X.prototype.La,X.prototype.getResponseText=X.prototype.la,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Fa,el=tI.XhrIo=X}).apply(void 0!==tE?tE:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),i(3454);var tT=i(1876).Buffer;let tv="@firebase/firestore",tP="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let User=class User{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};User.UNAUTHENTICATED=new User(null),User.GOOGLE_CREDENTIALS=new User("google-credentials-uid"),User.FIRST_PARTY=new User("first-party-uid"),User.MOCK_USER=new User("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tA="12.3.0",tR=new eN.Yd("@firebase/firestore");function __PRIVATE_getLogLevel(){return tR.logLevel}function __PRIVATE_logDebug(e,...r){if(tR.logLevel<=eN.in.DEBUG){let i=r.map(__PRIVATE_argToString);tR.debug(`Firestore (${tA}): ${e}`,...i)}}function __PRIVATE_logError(e,...r){if(tR.logLevel<=eN.in.ERROR){let i=r.map(__PRIVATE_argToString);tR.error(`Firestore (${tA}): ${e}`,...i)}}function __PRIVATE_logWarn(e,...r){if(tR.logLevel<=eN.in.WARN){let i=r.map(__PRIVATE_argToString);tR.warn(`Firestore (${tA}): ${e}`,...i)}}function __PRIVATE_argToString(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(r){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fail(e,r,i){let s="Unexpected state";"string"==typeof r?s=r:i=r,__PRIVATE__fail(e,s,i)}function __PRIVATE__fail(e,r,i){let s=`FIRESTORE (${tA}) INTERNAL ASSERTION FAILED: ${r} (ID: ${e.toString(16)})`;if(void 0!==i)try{s+=" CONTEXT: "+JSON.stringify(i)}catch(e){s+=" CONTEXT: "+i}throw __PRIVATE_logError(s),Error(s)}function __PRIVATE_hardAssert(e,r,i,s){let o="Unexpected state";"string"==typeof i?o=i:s=i,e||__PRIVATE__fail(r,o,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tw={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let FirestoreError=class FirestoreError extends eA.ZR{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_Deferred=class __PRIVATE_Deferred{constructor(){this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_OAuthToken=class __PRIVATE_OAuthToken{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}};let __PRIVATE_EmptyAuthCredentialsProvider=class __PRIVATE_EmptyAuthCredentialsProvider{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(User.UNAUTHENTICATED))}shutdown(){}};let __PRIVATE_EmulatorAuthCredentialsProvider=class __PRIVATE_EmulatorAuthCredentialsProvider{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}};let __PRIVATE_FirebaseAuthCredentialsProvider=class __PRIVATE_FirebaseAuthCredentialsProvider{constructor(e){this.t=e,this.currentUser=User.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){__PRIVATE_hardAssert(void 0===this.o,42304);let i=this.i,__PRIVATE_guardedChangeListener=e=>this.i!==i?(i=this.i,r(e)):Promise.resolve(),s=new __PRIVATE_Deferred;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new __PRIVATE_Deferred,e.enqueueRetryable(()=>__PRIVATE_guardedChangeListener(this.currentUser))};let __PRIVATE_awaitNextToken=()=>{let r=s;e.enqueueRetryable(async()=>{await r.promise,await __PRIVATE_guardedChangeListener(this.currentUser)})},__PRIVATE_registerAuth=e=>{__PRIVATE_logDebug("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),__PRIVATE_awaitNextToken())};this.t.onInit(e=>__PRIVATE_registerAuth(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?__PRIVATE_registerAuth(e):(__PRIVATE_logDebug("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new __PRIVATE_Deferred)}},0),__PRIVATE_awaitNextToken()}getToken(){let e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(r=>this.i!==e?(__PRIVATE_logDebug("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(__PRIVATE_hardAssert("string"==typeof r.accessToken,31837,{l:r}),new __PRIVATE_OAuthToken(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return __PRIVATE_hardAssert(null===e||"string"==typeof e,2055,{h:e}),new User(e)}};let __PRIVATE_FirstPartyToken=class __PRIVATE_FirstPartyToken{constructor(e,r,i){this.P=e,this.T=r,this.I=i,this.type="FirstParty",this.user=User.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}};let __PRIVATE_FirstPartyAuthCredentialsProvider=class __PRIVATE_FirstPartyAuthCredentialsProvider{constructor(e,r,i){this.P=e,this.T=r,this.I=i}getToken(){return Promise.resolve(new __PRIVATE_FirstPartyToken(this.P,this.T,this.I))}start(e,r){e.enqueueRetryable(()=>r(User.FIRST_PARTY))}shutdown(){}invalidateToken(){}};let AppCheckToken=class AppCheckToken{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};let __PRIVATE_FirebaseAppCheckTokenProvider=class __PRIVATE_FirebaseAppCheckTokenProvider{constructor(e,r){this.V=r,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,eP.rh)(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,r){__PRIVATE_hardAssert(void 0===this.o,3512);let onTokenChanged=e=>{null!=e.error&&__PRIVATE_logDebug("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let i=e.token!==this.m;return this.m=e.token,__PRIVATE_logDebug("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?r(e.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>onTokenChanged(r))};let __PRIVATE_registerAppCheck=e=>{__PRIVATE_logDebug("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>__PRIVATE_registerAppCheck(e)),setTimeout(()=>{if(!this.appCheck){let e=this.V.getImmediate({optional:!0});e?__PRIVATE_registerAppCheck(e):__PRIVATE_logDebug("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new AppCheckToken(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(__PRIVATE_hardAssert("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new AppCheckToken(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_AutoId=class __PRIVATE_AutoId{static newId(){let e=62*Math.floor(256/62),r="";for(;r.length<20;){let i=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let r="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(e);if(r&&"function"==typeof r.getRandomValues)r.getRandomValues(i);else for(let r=0;r<e;r++)i[r]=Math.floor(256*Math.random());return i}(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(i[s]%62))}return r}};function __PRIVATE_primitiveComparator(e,r){return e<r?-1:e>r?1:0}function __PRIVATE_compareUtf8Strings(e,r){let i=Math.min(e.length,r.length);for(let s=0;s<i;s++){let i=e.charAt(s),o=r.charAt(s);if(i!==o)return __PRIVATE_isSurrogate(i)===__PRIVATE_isSurrogate(o)?__PRIVATE_primitiveComparator(i,o):__PRIVATE_isSurrogate(i)?1:-1}return __PRIVATE_primitiveComparator(e.length,r.length)}function __PRIVATE_isSurrogate(e){let r=e.charCodeAt(0);return r>=55296&&r<=57343}function __PRIVATE_arrayEquals(e,r,i){return e.length===r.length&&e.every((e,s)=>i(e,r[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tC="__name__";let BasePath=class BasePath{constructor(e,r,i){void 0===r?r=0:r>e.length&&fail(637,{offset:r,range:e.length}),void 0===i?i=e.length-r:i>e.length-r&&fail(1746,{length:i,range:e.length-r}),this.segments=e,this.offset=r,this.len=i}get length(){return this.len}isEqual(e){return 0===BasePath.comparator(this,e)}child(e){let r=this.segments.slice(this.offset,this.limit());return e instanceof BasePath?e.forEach(e=>{r.push(e)}):r.push(e),this.construct(r)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}forEach(e){for(let r=this.offset,i=this.limit();r<i;r++)e(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,r){let i=Math.min(e.length,r.length);for(let s=0;s<i;s++){let i=BasePath.compareSegments(e.get(s),r.get(s));if(0!==i)return i}return __PRIVATE_primitiveComparator(e.length,r.length)}static compareSegments(e,r){let i=BasePath.isNumericId(e),s=BasePath.isNumericId(r);return i&&!s?-1:!i&&s?1:i&&s?BasePath.extractNumericId(e).compare(BasePath.extractNumericId(r)):__PRIVATE_compareUtf8Strings(e,r)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return eo.fromString(e.substring(4,e.length-2))}};let ResourcePath=class ResourcePath extends BasePath{construct(e,r,i){return new ResourcePath(e,r,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let r=[];for(let i of e){if(i.indexOf("//")>=0)throw new FirestoreError(tw.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);r.push(...i.split("/").filter(e=>e.length>0))}return new ResourcePath(r)}static emptyPath(){return new ResourcePath([])}};let tb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let FieldPath$1=class FieldPath$1 extends BasePath{construct(e,r,i){return new FieldPath$1(e,r,i)}static isValidIdentifier(e){return tb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),FieldPath$1.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===tC}static keyField(){return new FieldPath$1([tC])}static fromServerFormat(e){let r=[],i="",s=0,__PRIVATE_addCurrentSegment=()=>{if(0===i.length)throw new FirestoreError(tw.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(i),i=""},o=!1;for(;s<e.length;){let r=e[s];if("\\"===r){if(s+1===e.length)throw new FirestoreError(tw.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let r=e[s+1];if("\\"!==r&&"."!==r&&"`"!==r)throw new FirestoreError(tw.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=r,s+=2}else"`"===r?o=!o:"."!==r||o?i+=r:__PRIVATE_addCurrentSegment(),s++}if(__PRIVATE_addCurrentSegment(),o)throw new FirestoreError(tw.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new FieldPath$1(r)}static emptyPath(){return new FieldPath$1([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DocumentKey=class DocumentKey{constructor(e){this.path=e}static fromPath(e){return new DocumentKey(ResourcePath.fromString(e))}static fromName(e){return new DocumentKey(ResourcePath.fromString(e).popFirst(5))}static empty(){return new DocumentKey(ResourcePath.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ResourcePath.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,r){return ResourcePath.comparator(e.path,r.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new DocumentKey(new ResourcePath(e.slice()))}};function __PRIVATE_validateCollectionPath(e){if(DocumentKey.isDocumentKey(e))throw new FirestoreError(tw.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function __PRIVATE_isPlainObject(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function __PRIVATE_valueDescription(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var r;let i=(r=e).constructor?r.constructor.name:null;return i?`a custom ${i} object`:"an object"}}return"function"==typeof e?"a function":fail(12329,{type:typeof e})}function __PRIVATE_cast(e,r){if("_delegate"in e&&(e=e._delegate),!(e instanceof r)){if(r.name===e.constructor.name)throw new FirestoreError(tw.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let i=__PRIVATE_valueDescription(e);throw new FirestoreError(tw.INVALID_ARGUMENT,`Expected type '${r.name}', but it was: ${i}`)}}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function property(e,r){let i={typeString:e};return r&&(i.value=r),i}function __PRIVATE_validateJSON(e,r){let i;if(!__PRIVATE_isPlainObject(e))throw new FirestoreError(tw.INVALID_ARGUMENT,"JSON must be an object");for(let s in r)if(r[s]){let o=r[s].typeString,l="value"in r[s]?{value:r[s].value}:void 0;if(!(s in e)){i=`JSON missing required field: '${s}'`;break}let h=e[s];if(o&&typeof h!==o){i=`JSON field '${s}' must be a ${o}.`;break}if(void 0!==l&&h!==l.value){i=`Expected '${s}' field to equal '${l.value}'`;break}}if(i)throw new FirestoreError(tw.INVALID_ARGUMENT,i);return!0}let Timestamp=class Timestamp{static now(){return Timestamp.fromMillis(Date.now())}static fromDate(e){return Timestamp.fromMillis(e.getTime())}static fromMillis(e){let r=Math.floor(e/1e3),i=Math.floor((e-1e3*r)*1e6);return new Timestamp(r,i)}constructor(e,r){if(this.seconds=e,this.nanoseconds=r,r<0||r>=1e9)throw new FirestoreError(tw.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(e<-62135596800||e>=253402300800)throw new FirestoreError(tw.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?__PRIVATE_primitiveComparator(this.nanoseconds,e.nanoseconds):__PRIVATE_primitiveComparator(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Timestamp._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(__PRIVATE_validateJSON(e,Timestamp._jsonSchema))return new Timestamp(e.seconds,e.nanoseconds)}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};Timestamp._jsonSchemaVersion="firestore/timestamp/1.0",Timestamp._jsonSchema={type:property("string",Timestamp._jsonSchemaVersion),seconds:property("number"),nanoseconds:property("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SnapshotVersion=class SnapshotVersion{static fromTimestamp(e){return new SnapshotVersion(e)}static min(){return new SnapshotVersion(new Timestamp(0,0))}static max(){return new SnapshotVersion(new Timestamp(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};let IndexOffset=class IndexOffset{constructor(e,r,i){this.readTime=e,this.documentKey=r,this.largestBatchId=i}static min(){return new IndexOffset(SnapshotVersion.min(),DocumentKey.empty(),-1)}static max(){return new IndexOffset(SnapshotVersion.max(),DocumentKey.empty(),-1)}};let PersistenceTransaction=class PersistenceTransaction{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __PRIVATE_ignoreIfPrimaryLeaseLoss(e){if(e.code!==tw.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;__PRIVATE_logDebug("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PersistencePromise=class PersistencePromise{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,r){return this.callbackAttached&&fail(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(e,this.result):new PersistencePromise((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=e=>{this.wrapFailure(r,e).next(i,s)}})}toPromise(){return new Promise((e,r)=>{this.next(e,r)})}wrapUserFunction(e){try{let r=e();return r instanceof PersistencePromise?r:PersistencePromise.resolve(r)}catch(e){return PersistencePromise.reject(e)}}wrapSuccess(e,r){return e?this.wrapUserFunction(()=>e(r)):PersistencePromise.resolve(r)}wrapFailure(e,r){return e?this.wrapUserFunction(()=>e(r)):PersistencePromise.reject(r)}static resolve(e){return new PersistencePromise((r,i)=>{r(e)})}static reject(e){return new PersistencePromise((r,i)=>{i(e)})}static waitFor(e){return new PersistencePromise((r,i)=>{let s=0,o=0,l=!1;e.forEach(e=>{++s,e.next(()=>{++o,l&&o===s&&r()},e=>i(e))}),l=!0,o===s&&r()})}static or(e){let r=PersistencePromise.resolve(!1);for(let i of e)r=r.next(e=>e?PersistencePromise.resolve(e):i());return r}static forEach(e,r){let i=[];return e.forEach((e,s)=>{i.push(r.call(this,e,s))}),this.waitFor(i)}static mapArray(e,r){return new PersistencePromise((i,s)=>{let o=e.length,l=Array(o),h=0;for(let d=0;d<o;d++){let f=d;r(e[f]).next(e=>{l[f]=e,++h===o&&i(l)},e=>s(e))}})}static doWhile(e,r){return new PersistencePromise((i,s)=>{let process=()=>{!0===e()?r().next(()=>{process()},s):i()};process()})}};function __PRIVATE_isIndexedDbTransactionError(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_ListenSequence=class __PRIVATE_ListenSequence{constructor(e,r){this.previousValue=e,r&&(r.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>r.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ue&&this.ue(e),e}};function __PRIVATE_isNegativeZero(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_objectSize(e){let r=0;for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&r++;return r}function forEach(e,r){for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&r(i,e[i])}function index_esm_isEmpty(e){for(let r in e)if(Object.prototype.hasOwnProperty.call(e,r))return!1;return!0}__PRIVATE_ListenSequence.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SortedMap=class SortedMap{constructor(e,r){this.comparator=e,this.root=r||LLRBNode.EMPTY}insert(e,r){return new SortedMap(this.comparator,this.root.insert(e,r,this.comparator).copy(null,null,LLRBNode.BLACK,null,null))}remove(e){return new SortedMap(this.comparator,this.root.remove(e,this.comparator).copy(null,null,LLRBNode.BLACK,null,null))}get(e){let r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(0===i)return r.value;i<0?r=r.left:i>0&&(r=r.right)}return null}indexOf(e){let r=0,i=this.root;for(;!i.isEmpty();){let s=this.comparator(e,i.key);if(0===s)return r+i.left.size;s<0?i=i.left:(r+=i.left.size+1,i=i.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((r,i)=>(e(r,i),!1))}toString(){let e=[];return this.inorderTraversal((r,i)=>(e.push(`${r}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new SortedMapIterator(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new SortedMapIterator(this.root,e,this.comparator,!1)}getReverseIterator(){return new SortedMapIterator(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new SortedMapIterator(this.root,e,this.comparator,!0)}};let SortedMapIterator=class SortedMapIterator{constructor(e,r,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=r?i(e.key,r):1,r&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(0===o){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),r={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}};let LLRBNode=class LLRBNode{constructor(e,r,i,s,o){this.key=e,this.value=r,this.color=null!=i?i:LLRBNode.RED,this.left=null!=s?s:LLRBNode.EMPTY,this.right=null!=o?o:LLRBNode.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,r,i,s,o){return new LLRBNode(null!=e?e:this.key,null!=r?r:this.value,null!=i?i:this.color,null!=s?s:this.left,null!=o?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,i){let s=this,o=i(e,s.key);return(s=o<0?s.copy(null,null,null,s.left.insert(e,r,i),null):0===o?s.copy(null,r,null,null,null):s.copy(null,null,null,null,s.right.insert(e,r,i))).fixUp()}removeMin(){if(this.left.isEmpty())return LLRBNode.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,r){let i,s=this;if(0>r(e,s.key))s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,r),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===r(e,s.key)){if(s.right.isEmpty())return LLRBNode.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,r))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,LLRBNode.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,LLRBNode.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fail(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fail(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw fail(27949);return e+(this.isRed()?0:1)}};LLRBNode.EMPTY=null,LLRBNode.RED=!0,LLRBNode.BLACK=!1,LLRBNode.EMPTY=new class{constructor(){this.size=0}get key(){throw fail(57766)}get value(){throw fail(16141)}get color(){throw fail(16727)}get left(){throw fail(29726)}get right(){throw fail(36894)}copy(e,r,i,s,o){return this}insert(e,r,i){return new LLRBNode(e,r)}remove(e,r){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SortedSet=class SortedSet{constructor(e){this.comparator=e,this.data=new SortedMap(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((r,i)=>(e(r),!1))}forEachInRange(e,r){let i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){let s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;r(s.key)}}forEachWhile(e,r){let i;for(i=void 0!==r?this.data.getIteratorFrom(r):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){let r=this.data.getIteratorFrom(e);return r.hasNext()?r.getNext().key:null}getIterator(){return new SortedSetIterator(this.data.getIterator())}getIteratorFrom(e){return new SortedSetIterator(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let r=this;return r.size<e.size&&(r=e,e=this),e.forEach(e=>{r=r.add(e)}),r}isEqual(e){if(!(e instanceof SortedSet)||this.size!==e.size)return!1;let r=this.data.getIterator(),i=e.data.getIterator();for(;r.hasNext();){let e=r.getNext().key,s=i.getNext().key;if(0!==this.comparator(e,s))return!1}return!0}toArray(){let e=[];return this.forEach(r=>{e.push(r)}),e}toString(){let e=[];return this.forEach(r=>e.push(r)),"SortedSet("+e.toString()+")"}copy(e){let r=new SortedSet(this.comparator);return r.data=e,r}};let SortedSetIterator=class SortedSetIterator{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FieldMask=class FieldMask{constructor(e){this.fields=e,e.sort(FieldPath$1.comparator)}static empty(){return new FieldMask([])}unionWith(e){let r=new SortedSet(FieldPath$1.comparator);for(let e of this.fields)r=r.add(e);for(let i of e)r=r.add(i);return new FieldMask(r.toArray())}covers(e){for(let r of this.fields)if(r.isPrefixOf(e))return!0;return!1}isEqual(e){return __PRIVATE_arrayEquals(this.fields,e.fields,(e,r)=>e.isEqual(r))}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_Base64DecodeError=class __PRIVATE_Base64DecodeError extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ByteString=class ByteString{constructor(e){this.binaryString=e}static fromBase64String(e){let r=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new __PRIVATE_Base64DecodeError("Invalid base64 string: "+e):e}}(e);return new ByteString(r)}static fromUint8Array(e){let r=function(e){let r="";for(let i=0;i<e.length;++i)r+=String.fromCharCode(e[i]);return r}(e);return new ByteString(r)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return __PRIVATE_primitiveComparator(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};ByteString.EMPTY_BYTE_STRING=new ByteString("");let tS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function __PRIVATE_normalizeTimestamp(e){if(__PRIVATE_hardAssert(!!e,39018),"string"==typeof e){let r=0,i=tS.exec(e);if(__PRIVATE_hardAssert(!!i,46558,{timestamp:e}),i[1]){let e=i[1];r=Number(e=(e+"000000000").substr(0,9))}let s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:r}}return{seconds:__PRIVATE_normalizeNumber(e.seconds),nanos:__PRIVATE_normalizeNumber(e.nanos)}}function __PRIVATE_normalizeNumber(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function __PRIVATE_normalizeByteString(e){return"string"==typeof e?ByteString.fromBase64String(e):ByteString.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tV="server_timestamp",tN="__type__",tk="__previous_value__",tD="__local_write_time__";function __PRIVATE_isServerTimestamp(e){let r=(e?.mapValue?.fields||{})[tN]?.stringValue;return r===tV}function __PRIVATE_getPreviousValue(e){let r=e.mapValue.fields[tk];return __PRIVATE_isServerTimestamp(r)?__PRIVATE_getPreviousValue(r):r}function __PRIVATE_getLocalWriteTime(e){let r=__PRIVATE_normalizeTimestamp(e.mapValue.fields[tD].timestampValue);return new Timestamp(r.seconds,r.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DatabaseInfo=class DatabaseInfo{constructor(e,r,i,s,o,l,h,d,f,_){this.databaseId=e,this.appId=r,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=d,this.useFetchStreams=f,this.isUsingEmulator=_}};let tO="(default)";let DatabaseId=class DatabaseId{constructor(e,r){this.projectId=e,this.database=r||tO}static empty(){return new DatabaseId("","")}get isDefaultDatabase(){return this.database===tO}isEqual(e){return e instanceof DatabaseId&&e.projectId===this.projectId&&e.database===this.database}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tL="__type__",tx="__max__",tM={mapValue:{fields:{__type__:{stringValue:tx}}}},tF="__vector__",tU="value";function __PRIVATE_typeOrder(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?__PRIVATE_isServerTimestamp(e)?4:__PRIVATE_isMaxValue(e)?9007199254740991:__PRIVATE_isVectorValue(e)?10:11:fail(28295,{value:e})}function __PRIVATE_valueEquals(e,r){if(e===r)return!0;let i=__PRIVATE_typeOrder(e);if(i!==__PRIVATE_typeOrder(r))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===r.booleanValue;case 4:return __PRIVATE_getLocalWriteTime(e).isEqual(__PRIVATE_getLocalWriteTime(r));case 3:return function(e,r){if("string"==typeof e.timestampValue&&"string"==typeof r.timestampValue&&e.timestampValue.length===r.timestampValue.length)return e.timestampValue===r.timestampValue;let i=__PRIVATE_normalizeTimestamp(e.timestampValue),s=__PRIVATE_normalizeTimestamp(r.timestampValue);return i.seconds===s.seconds&&i.nanos===s.nanos}(e,r);case 5:return e.stringValue===r.stringValue;case 6:return __PRIVATE_normalizeByteString(e.bytesValue).isEqual(__PRIVATE_normalizeByteString(r.bytesValue));case 7:return e.referenceValue===r.referenceValue;case 8:return __PRIVATE_normalizeNumber(e.geoPointValue.latitude)===__PRIVATE_normalizeNumber(r.geoPointValue.latitude)&&__PRIVATE_normalizeNumber(e.geoPointValue.longitude)===__PRIVATE_normalizeNumber(r.geoPointValue.longitude);case 2:return function(e,r){if("integerValue"in e&&"integerValue"in r)return __PRIVATE_normalizeNumber(e.integerValue)===__PRIVATE_normalizeNumber(r.integerValue);if("doubleValue"in e&&"doubleValue"in r){let i=__PRIVATE_normalizeNumber(e.doubleValue),s=__PRIVATE_normalizeNumber(r.doubleValue);return i===s?__PRIVATE_isNegativeZero(i)===__PRIVATE_isNegativeZero(s):isNaN(i)&&isNaN(s)}return!1}(e,r);case 9:return __PRIVATE_arrayEquals(e.arrayValue.values||[],r.arrayValue.values||[],__PRIVATE_valueEquals);case 10:case 11:return function(e,r){let i=e.mapValue.fields||{},s=r.mapValue.fields||{};if(__PRIVATE_objectSize(i)!==__PRIVATE_objectSize(s))return!1;for(let e in i)if(i.hasOwnProperty(e)&&(void 0===s[e]||!__PRIVATE_valueEquals(i[e],s[e])))return!1;return!0}(e,r);default:return fail(52216,{left:e})}}function __PRIVATE_arrayValueContains(e,r){return void 0!==(e.values||[]).find(e=>__PRIVATE_valueEquals(e,r))}function __PRIVATE_valueCompare(e,r){if(e===r)return 0;let i=__PRIVATE_typeOrder(e),s=__PRIVATE_typeOrder(r);if(i!==s)return __PRIVATE_primitiveComparator(i,s);switch(i){case 0:case 9007199254740991:return 0;case 1:return __PRIVATE_primitiveComparator(e.booleanValue,r.booleanValue);case 2:return function(e,r){let i=__PRIVATE_normalizeNumber(e.integerValue||e.doubleValue),s=__PRIVATE_normalizeNumber(r.integerValue||r.doubleValue);return i<s?-1:i>s?1:i===s?0:isNaN(i)?isNaN(s)?0:-1:1}(e,r);case 3:return __PRIVATE_compareTimestamps(e.timestampValue,r.timestampValue);case 4:return __PRIVATE_compareTimestamps(__PRIVATE_getLocalWriteTime(e),__PRIVATE_getLocalWriteTime(r));case 5:return __PRIVATE_compareUtf8Strings(e.stringValue,r.stringValue);case 6:return function(e,r){let i=__PRIVATE_normalizeByteString(e),s=__PRIVATE_normalizeByteString(r);return i.compareTo(s)}(e.bytesValue,r.bytesValue);case 7:return function(e,r){let i=e.split("/"),s=r.split("/");for(let e=0;e<i.length&&e<s.length;e++){let r=__PRIVATE_primitiveComparator(i[e],s[e]);if(0!==r)return r}return __PRIVATE_primitiveComparator(i.length,s.length)}(e.referenceValue,r.referenceValue);case 8:return function(e,r){let i=__PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e.latitude),__PRIVATE_normalizeNumber(r.latitude));return 0!==i?i:__PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e.longitude),__PRIVATE_normalizeNumber(r.longitude))}(e.geoPointValue,r.geoPointValue);case 9:return __PRIVATE_compareArrays(e.arrayValue,r.arrayValue);case 10:return function(e,r){let i=e.fields||{},s=r.fields||{},o=i[tU]?.arrayValue,l=s[tU]?.arrayValue,h=__PRIVATE_primitiveComparator(o?.values?.length||0,l?.values?.length||0);return 0!==h?h:__PRIVATE_compareArrays(o,l)}(e.mapValue,r.mapValue);case 11:return function(e,r){if(e===tM.mapValue&&r===tM.mapValue)return 0;if(e===tM.mapValue)return 1;if(r===tM.mapValue)return -1;let i=e.fields||{},s=Object.keys(i),o=r.fields||{},l=Object.keys(o);s.sort(),l.sort();for(let e=0;e<s.length&&e<l.length;++e){let r=__PRIVATE_compareUtf8Strings(s[e],l[e]);if(0!==r)return r;let h=__PRIVATE_valueCompare(i[s[e]],o[l[e]]);if(0!==h)return h}return __PRIVATE_primitiveComparator(s.length,l.length)}(e.mapValue,r.mapValue);default:throw fail(23264,{he:i})}}function __PRIVATE_compareTimestamps(e,r){if("string"==typeof e&&"string"==typeof r&&e.length===r.length)return __PRIVATE_primitiveComparator(e,r);let i=__PRIVATE_normalizeTimestamp(e),s=__PRIVATE_normalizeTimestamp(r),o=__PRIVATE_primitiveComparator(i.seconds,s.seconds);return 0!==o?o:__PRIVATE_primitiveComparator(i.nanos,s.nanos)}function __PRIVATE_compareArrays(e,r){let i=e.values||[],s=r.values||[];for(let e=0;e<i.length&&e<s.length;++e){let r=__PRIVATE_valueCompare(i[e],s[e]);if(r)return r}return __PRIVATE_primitiveComparator(i.length,s.length)}function __PRIVATE_canonifyValue(e){var r,i;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let r=__PRIVATE_normalizeTimestamp(e);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?__PRIVATE_normalizeByteString(e.bytesValue).toBase64():"referenceValue"in e?(r=e.referenceValue,DocumentKey.fromName(r).toString()):"geoPointValue"in e?(i=e.geoPointValue,`geo(${i.latitude},${i.longitude})`):"arrayValue"in e?function(e){let r="[",i=!0;for(let s of e.values||[])i?i=!1:r+=",",r+=__PRIVATE_canonifyValue(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(e){let r=Object.keys(e.fields||{}).sort(),i="{",s=!0;for(let o of r)s?s=!1:i+=",",i+=`${o}:${__PRIVATE_canonifyValue(e.fields[o])}`;return i+"}"}(e.mapValue):fail(61005,{value:e})}function __PRIVATE_refValue(e,r){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${r.path.canonicalString()}`}}function isInteger(e){return!!e&&"integerValue"in e}function isArray(e){return!!e&&"arrayValue"in e}function __PRIVATE_isNullValue(e){return!!e&&"nullValue"in e}function __PRIVATE_isNanValue(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function __PRIVATE_isMapValue(e){return!!e&&"mapValue"in e}function __PRIVATE_isVectorValue(e){let r=(e?.mapValue?.fields||{})[tL]?.stringValue;return r===tF}function __PRIVATE_deepClone(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){let r={mapValue:{fields:{}}};return forEach(e.mapValue.fields,(e,i)=>r.mapValue.fields[e]=__PRIVATE_deepClone(i)),r}if(e.arrayValue){let r={arrayValue:{values:[]}};for(let i=0;i<(e.arrayValue.values||[]).length;++i)r.arrayValue.values[i]=__PRIVATE_deepClone(e.arrayValue.values[i]);return r}return{...e}}function __PRIVATE_isMaxValue(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===tx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ObjectValue=class ObjectValue{constructor(e){this.value=e}static empty(){return new ObjectValue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let r=this.value;for(let i=0;i<e.length-1;++i)if(!__PRIVATE_isMapValue(r=(r.mapValue.fields||{})[e.get(i)]))return null;return(r=(r.mapValue.fields||{})[e.lastSegment()])||null}}set(e,r){this.getFieldsMap(e.popLast())[e.lastSegment()]=__PRIVATE_deepClone(r)}setAll(e){let r=FieldPath$1.emptyPath(),i={},s=[];e.forEach((e,o)=>{if(!r.isImmediateParentOf(o)){let e=this.getFieldsMap(r);this.applyChanges(e,i,s),i={},s=[],r=o.popLast()}e?i[o.lastSegment()]=__PRIVATE_deepClone(e):s.push(o.lastSegment())});let o=this.getFieldsMap(r);this.applyChanges(o,i,s)}delete(e){let r=this.field(e.popLast());__PRIVATE_isMapValue(r)&&r.mapValue.fields&&delete r.mapValue.fields[e.lastSegment()]}isEqual(e){return __PRIVATE_valueEquals(this.value,e.value)}getFieldsMap(e){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=r.mapValue.fields[e.get(i)];__PRIVATE_isMapValue(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},r.mapValue.fields[e.get(i)]=s),r=s}return r.mapValue.fields}applyChanges(e,r,i){for(let s of(forEach(r,(r,i)=>e[r]=i),i))delete e[s]}clone(){return new ObjectValue(__PRIVATE_deepClone(this.value))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MutableDocument=class MutableDocument{constructor(e,r,i,s,o,l,h){this.key=e,this.documentType=r,this.version=i,this.readTime=s,this.createTime=o,this.data=l,this.documentState=h}static newInvalidDocument(e){return new MutableDocument(e,0,SnapshotVersion.min(),SnapshotVersion.min(),SnapshotVersion.min(),ObjectValue.empty(),0)}static newFoundDocument(e,r,i,s){return new MutableDocument(e,1,r,SnapshotVersion.min(),i,s,0)}static newNoDocument(e,r){return new MutableDocument(e,2,r,SnapshotVersion.min(),SnapshotVersion.min(),ObjectValue.empty(),0)}static newUnknownDocument(e,r){return new MutableDocument(e,3,r,SnapshotVersion.min(),SnapshotVersion.min(),ObjectValue.empty(),2)}convertToFoundDocument(e,r){return this.createTime.isEqual(SnapshotVersion.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ObjectValue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ObjectValue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=SnapshotVersion.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof MutableDocument&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new MutableDocument(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bound=class Bound{constructor(e,r){this.position=e,this.inclusive=r}};function __PRIVATE_boundCompareToDocument(e,r,i){let s=0;for(let o=0;o<e.position.length;o++){let l=r[o],h=e.position[o];if(s=l.field.isKeyField()?DocumentKey.comparator(DocumentKey.fromName(h.referenceValue),i.key):__PRIVATE_valueCompare(h,i.data.field(l.field)),"desc"===l.dir&&(s*=-1),0!==s)break}return s}function __PRIVATE_boundEquals(e,r){if(null===e)return null===r;if(null===r||e.inclusive!==r.inclusive||e.position.length!==r.position.length)return!1;for(let i=0;i<e.position.length;i++)if(!__PRIVATE_valueEquals(e.position[i],r.position[i]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OrderBy=class OrderBy{constructor(e,r="asc"){this.field=e,this.dir=r}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Filter=class Filter{};let FieldFilter=class FieldFilter extends Filter{constructor(e,r,i){super(),this.field=e,this.op=r,this.value=i}static create(e,r,i){return e.isKeyField()?"in"===r||"not-in"===r?this.createKeyFieldInFilter(e,r,i):new __PRIVATE_KeyFieldFilter(e,r,i):"array-contains"===r?new __PRIVATE_ArrayContainsFilter(e,i):"in"===r?new __PRIVATE_InFilter(e,i):"not-in"===r?new __PRIVATE_NotInFilter(e,i):"array-contains-any"===r?new __PRIVATE_ArrayContainsAnyFilter(e,i):new FieldFilter(e,r,i)}static createKeyFieldInFilter(e,r,i){return"in"===r?new __PRIVATE_KeyFieldInFilter(e,i):new __PRIVATE_KeyFieldNotInFilter(e,i)}matches(e){let r=e.data.field(this.field);return"!="===this.op?null!==r&&void 0===r.nullValue&&this.matchesComparison(__PRIVATE_valueCompare(r,this.value)):null!==r&&__PRIVATE_typeOrder(this.value)===__PRIVATE_typeOrder(r)&&this.matchesComparison(__PRIVATE_valueCompare(r,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return fail(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}};let CompositeFilter=class CompositeFilter extends Filter{constructor(e,r){super(),this.filters=e,this.op=r,this.Pe=null}static create(e,r){return new CompositeFilter(e,r)}matches(e){return __PRIVATE_compositeFilterIsConjunction(this)?void 0===this.filters.find(r=>!r.matches(e)):void 0!==this.filters.find(r=>r.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,r)=>e.concat(r.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}};function __PRIVATE_compositeFilterIsConjunction(e){return"and"===e.op}function __PRIVATE_compositeFilterIsFlat(e){for(let r of e.filters)if(r instanceof CompositeFilter)return!1;return!0}let __PRIVATE_KeyFieldFilter=class __PRIVATE_KeyFieldFilter extends FieldFilter{constructor(e,r,i){super(e,r,i),this.key=DocumentKey.fromName(i.referenceValue)}matches(e){let r=DocumentKey.comparator(e.key,this.key);return this.matchesComparison(r)}};let __PRIVATE_KeyFieldInFilter=class __PRIVATE_KeyFieldInFilter extends FieldFilter{constructor(e,r){super(e,"in",r),this.keys=__PRIVATE_extractDocumentKeysFromArrayValue("in",r)}matches(e){return this.keys.some(r=>r.isEqual(e.key))}};let __PRIVATE_KeyFieldNotInFilter=class __PRIVATE_KeyFieldNotInFilter extends FieldFilter{constructor(e,r){super(e,"not-in",r),this.keys=__PRIVATE_extractDocumentKeysFromArrayValue("not-in",r)}matches(e){return!this.keys.some(r=>r.isEqual(e.key))}};function __PRIVATE_extractDocumentKeysFromArrayValue(e,r){return(r.arrayValue?.values||[]).map(e=>DocumentKey.fromName(e.referenceValue))}let __PRIVATE_ArrayContainsFilter=class __PRIVATE_ArrayContainsFilter extends FieldFilter{constructor(e,r){super(e,"array-contains",r)}matches(e){let r=e.data.field(this.field);return isArray(r)&&__PRIVATE_arrayValueContains(r.arrayValue,this.value)}};let __PRIVATE_InFilter=class __PRIVATE_InFilter extends FieldFilter{constructor(e,r){super(e,"in",r)}matches(e){let r=e.data.field(this.field);return null!==r&&__PRIVATE_arrayValueContains(this.value.arrayValue,r)}};let __PRIVATE_NotInFilter=class __PRIVATE_NotInFilter extends FieldFilter{constructor(e,r){super(e,"not-in",r)}matches(e){if(__PRIVATE_arrayValueContains(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let r=e.data.field(this.field);return null!==r&&void 0===r.nullValue&&!__PRIVATE_arrayValueContains(this.value.arrayValue,r)}};let __PRIVATE_ArrayContainsAnyFilter=class __PRIVATE_ArrayContainsAnyFilter extends FieldFilter{constructor(e,r){super(e,"array-contains-any",r)}matches(e){let r=e.data.field(this.field);return!(!isArray(r)||!r.arrayValue.values)&&r.arrayValue.values.some(e=>__PRIVATE_arrayValueContains(this.value.arrayValue,e))}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_TargetImpl=class __PRIVATE_TargetImpl{constructor(e,r=null,i=[],s=[],o=null,l=null,h=null){this.path=e,this.collectionGroup=r,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=l,this.endAt=h,this.Te=null}};function __PRIVATE_newTarget(e,r=null,i=[],s=[],o=null,l=null,h=null){return new __PRIVATE_TargetImpl(e,r,i,s,o,l,h)}function __PRIVATE_canonifyTarget(e){if(null===e.Te){let r=e.path.canonicalString();null!==e.collectionGroup&&(r+="|cg:"+e.collectionGroup),r+="|f:"+e.filters.map(e=>(function __PRIVATE_canonifyFilter(e){if(e instanceof FieldFilter)return e.field.canonicalString()+e.op.toString()+__PRIVATE_canonifyValue(e.value);if(__PRIVATE_compositeFilterIsFlat(e)&&__PRIVATE_compositeFilterIsConjunction(e))return e.filters.map(e=>__PRIVATE_canonifyFilter(e)).join(",");{let r=e.filters.map(e=>__PRIVATE_canonifyFilter(e)).join(",");return`${e.op}(${r})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(r+="|l:"+e.limit),e.startAt&&(r+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>__PRIVATE_canonifyValue(e)).join(",")),e.endAt&&(r+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>__PRIVATE_canonifyValue(e)).join(",")),e.Te=r}return e.Te}function __PRIVATE_targetEquals(e,r){if(e.limit!==r.limit||e.orderBy.length!==r.orderBy.length)return!1;for(let o=0;o<e.orderBy.length;o++){var i,s;if(i=e.orderBy[o],s=r.orderBy[o],!(i.dir===s.dir&&i.field.isEqual(s.field)))return!1}if(e.filters.length!==r.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(!function __PRIVATE_filterEquals(e,r){return e instanceof FieldFilter?r instanceof FieldFilter&&e.op===r.op&&e.field.isEqual(r.field)&&__PRIVATE_valueEquals(e.value,r.value):e instanceof CompositeFilter?r instanceof CompositeFilter&&e.op===r.op&&e.filters.length===r.filters.length&&e.filters.reduce((e,i,s)=>e&&__PRIVATE_filterEquals(i,r.filters[s]),!0):void fail(19439)}(e.filters[i],r.filters[i]))return!1;return e.collectionGroup===r.collectionGroup&&!!e.path.isEqual(r.path)&&!!__PRIVATE_boundEquals(e.startAt,r.startAt)&&__PRIVATE_boundEquals(e.endAt,r.endAt)}function __PRIVATE_targetIsDocumentTarget(e){return DocumentKey.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_QueryImpl=class __PRIVATE_QueryImpl{constructor(e,r=null,i=[],s=[],o=null,l="F",h=null,d=null){this.path=e,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=l,this.startAt=h,this.endAt=d,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}};function __PRIVATE_queryMatchesAllDocuments(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function __PRIVATE_isCollectionGroupQuery(e){return null!==e.collectionGroup}function __PRIVATE_queryNormalizedOrderBy(e){if(null===e.Ie){let r;e.Ie=[];let i=new Set;for(let r of e.explicitOrderBy)e.Ie.push(r),i.add(r.field.canonicalString());let s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",o=(r=new SortedSet(FieldPath$1.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(r=r.add(e.field))})}),r);o.forEach(r=>{i.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new OrderBy(r,s))}),i.has(FieldPath$1.keyField().canonicalString())||e.Ie.push(new OrderBy(FieldPath$1.keyField(),s))}return e.Ie}function __PRIVATE_queryToTarget(e){return e.Ee||(e.Ee=function(e,r){if("F"===e.limitType)return __PRIVATE_newTarget(e.path,e.collectionGroup,r,e.filters,e.limit,e.startAt,e.endAt);{r=r.map(e=>{let r="desc"===e.dir?"asc":"desc";return new OrderBy(e.field,r)});let i=e.endAt?new Bound(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Bound(e.startAt.position,e.startAt.inclusive):null;return __PRIVATE_newTarget(e.path,e.collectionGroup,r,e.filters,e.limit,i,s)}}(e,__PRIVATE_queryNormalizedOrderBy(e))),e.Ee}function __PRIVATE_queryWithAddedFilter(e,r){let i=e.filters.concat([r]);return new __PRIVATE_QueryImpl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),i,e.limit,e.limitType,e.startAt,e.endAt)}function __PRIVATE_queryWithLimit(e,r,i){return new __PRIVATE_QueryImpl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),r,i,e.startAt,e.endAt)}function __PRIVATE_queryEquals(e,r){return __PRIVATE_targetEquals(__PRIVATE_queryToTarget(e),__PRIVATE_queryToTarget(r))&&e.limitType===r.limitType}function __PRIVATE_canonifyQuery(e){return`${__PRIVATE_canonifyTarget(__PRIVATE_queryToTarget(e))}|lt:${e.limitType}`}function __PRIVATE_stringifyQuery(e){var r;let i;return`Query(target=${i=(r=__PRIVATE_queryToTarget(e)).path.canonicalString(),null!==r.collectionGroup&&(i+=" collectionGroup="+r.collectionGroup),r.filters.length>0&&(i+=`, filters: [${r.filters.map(e=>(function __PRIVATE_stringifyFilter(e){return e instanceof FieldFilter?`${e.field.canonicalString()} ${e.op} ${__PRIVATE_canonifyValue(e.value)}`:e instanceof CompositeFilter?e.op.toString()+" {"+e.getFilters().map(__PRIVATE_stringifyFilter).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==r.limit||(i+=", limit: "+r.limit),r.orderBy.length>0&&(i+=`, orderBy: [${r.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),r.startAt&&(i+=", startAt: "+(r.startAt.inclusive?"b:":"a:")+r.startAt.position.map(e=>__PRIVATE_canonifyValue(e)).join(",")),r.endAt&&(i+=", endAt: "+(r.endAt.inclusive?"a:":"b:")+r.endAt.position.map(e=>__PRIVATE_canonifyValue(e)).join(",")),`Target(${i})`}; limitType=${e.limitType})`}function __PRIVATE_queryMatches(e,r){return r.isFoundDocument()&&function(e,r){let i=r.key.path;return null!==e.collectionGroup?r.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(i):DocumentKey.isDocumentKey(e.path)?e.path.isEqual(i):e.path.isImmediateParentOf(i)}(e,r)&&function(e,r){for(let i of __PRIVATE_queryNormalizedOrderBy(e))if(!i.field.isKeyField()&&null===r.data.field(i.field))return!1;return!0}(e,r)&&function(e,r){for(let i of e.filters)if(!i.matches(r))return!1;return!0}(e,r)&&(!e.startAt||!!function(e,r,i){let s=__PRIVATE_boundCompareToDocument(e,r,i);return e.inclusive?s<=0:s<0}(e.startAt,__PRIVATE_queryNormalizedOrderBy(e),r))&&(!e.endAt||!!function(e,r,i){let s=__PRIVATE_boundCompareToDocument(e,r,i);return e.inclusive?s>=0:s>0}(e.endAt,__PRIVATE_queryNormalizedOrderBy(e),r))}function __PRIVATE_newQueryComparator(e){return(r,i)=>{let s=!1;for(let o of __PRIVATE_queryNormalizedOrderBy(e)){let e=function(e,r,i){let s=e.field.isKeyField()?DocumentKey.comparator(r.key,i.key):function(e,r,i){let s=r.data.field(e),o=i.data.field(e);return null!==s&&null!==o?__PRIVATE_valueCompare(s,o):fail(42886)}(e.field,r,i);switch(e.dir){case"asc":return s;case"desc":return -1*s;default:return fail(19790,{direction:e.dir})}}(o,r,i);if(0!==e)return e;s=s||o.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ObjectMap=class ObjectMap{constructor(e,r){this.mapKeyFn=e,this.equalsFn=r,this.inner={},this.innerSize=0}get(e){let r=this.mapKeyFn(e),i=this.inner[r];if(void 0!==i){for(let[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return void 0!==this.get(e)}set(e,r){let i=this.mapKeyFn(e),s=this.inner[i];if(void 0===s)return this.inner[i]=[[e,r]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,r]);s.push([e,r]),this.innerSize++}delete(e){let r=this.mapKeyFn(e),i=this.inner[r];if(void 0===i)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return 1===i.length?delete this.inner[r]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){forEach(this.inner,(r,i)=>{for(let[r,s]of i)e(r,s)})}isEmpty(){return index_esm_isEmpty(this.inner)}size(){return this.innerSize}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tB=new SortedMap(DocumentKey.comparator),tq=new SortedMap(DocumentKey.comparator);function documentMap(...e){let r=tq;for(let i of e)r=r.insert(i.key,i);return r}function __PRIVATE_newDocumentKeyMap(){return new ObjectMap(e=>e.toString(),(e,r)=>e.isEqual(r))}new SortedMap(DocumentKey.comparator);let tj=new SortedSet(DocumentKey.comparator);function __PRIVATE_documentKeySet(...e){let r=tj;for(let i of e)r=r.add(i);return r}let tW=new SortedSet(__PRIVATE_primitiveComparator);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_toDouble(e,r){if(e.useProto3Json){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:__PRIVATE_isNegativeZero(r)?"-0":r}}function __PRIVATE_toInteger(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TransformOperation=class TransformOperation{constructor(){this._=void 0}};let __PRIVATE_ServerTimestampTransform=class __PRIVATE_ServerTimestampTransform extends TransformOperation{};let __PRIVATE_ArrayUnionTransformOperation=class __PRIVATE_ArrayUnionTransformOperation extends TransformOperation{constructor(e){super(),this.elements=e}};function __PRIVATE_applyArrayUnionTransformOperation(e,r){let i=__PRIVATE_coercedFieldValuesArray(r);for(let r of e.elements)i.some(e=>__PRIVATE_valueEquals(e,r))||i.push(r);return{arrayValue:{values:i}}}let __PRIVATE_ArrayRemoveTransformOperation=class __PRIVATE_ArrayRemoveTransformOperation extends TransformOperation{constructor(e){super(),this.elements=e}};function __PRIVATE_applyArrayRemoveTransformOperation(e,r){let i=__PRIVATE_coercedFieldValuesArray(r);for(let r of e.elements)i=i.filter(e=>!__PRIVATE_valueEquals(e,r));return{arrayValue:{values:i}}}let __PRIVATE_NumericIncrementTransformOperation=class __PRIVATE_NumericIncrementTransformOperation extends TransformOperation{constructor(e,r){super(),this.serializer=e,this.Ae=r}};function asNumber(e){return __PRIVATE_normalizeNumber(e.integerValue||e.doubleValue)}function __PRIVATE_coercedFieldValuesArray(e){return isArray(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}let Precondition=class Precondition{constructor(e,r){this.updateTime=e,this.exists=r}static none(){return new Precondition}static exists(e){return new Precondition(void 0,e)}static updateTime(e){return new Precondition(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function __PRIVATE_preconditionIsValidForDocument(e,r){return void 0!==e.updateTime?r.isFoundDocument()&&r.version.isEqual(e.updateTime):void 0===e.exists||e.exists===r.isFoundDocument()}let Mutation=class Mutation{};function __PRIVATE_calculateOverlayMutation(e,r){if(!e.hasLocalMutations||r&&0===r.fields.length)return null;if(null===r)return e.isNoDocument()?new __PRIVATE_DeleteMutation(e.key,Precondition.none()):new __PRIVATE_SetMutation(e.key,e.data,Precondition.none());{let i=e.data,s=ObjectValue.empty(),o=new SortedSet(FieldPath$1.comparator);for(let e of r.fields)if(!o.has(e)){let r=i.field(e);null===r&&e.length>1&&(e=e.popLast(),r=i.field(e)),null===r?s.delete(e):s.set(e,r),o=o.add(e)}return new __PRIVATE_PatchMutation(e.key,s,new FieldMask(o.toArray()),Precondition.none())}}function __PRIVATE_mutationApplyToLocalView(e,r,i,s){return e instanceof __PRIVATE_SetMutation?function(e,r,i,s){if(!__PRIVATE_preconditionIsValidForDocument(e.precondition,r))return i;let o=e.value.clone(),l=__PRIVATE_localTransformResults(e.fieldTransforms,s,r);return o.setAll(l),r.convertToFoundDocument(r.version,o).setHasLocalMutations(),null}(e,r,i,s):e instanceof __PRIVATE_PatchMutation?function(e,r,i,s){if(!__PRIVATE_preconditionIsValidForDocument(e.precondition,r))return i;let o=__PRIVATE_localTransformResults(e.fieldTransforms,s,r),l=r.data;return(l.setAll(__PRIVATE_getPatch(e)),l.setAll(o),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null===i)?null:i.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,r,i,s):__PRIVATE_preconditionIsValidForDocument(e.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):i}function __PRIVATE_mutationEquals(e,r){var i,s;return e.type===r.type&&!!e.key.isEqual(r.key)&&!!e.precondition.isEqual(r.precondition)&&(i=e.fieldTransforms,s=r.fieldTransforms,!!(void 0===i&&void 0===s||!(!i||!s)&&__PRIVATE_arrayEquals(i,s,(e,r)=>{var i,s;return e.field.isEqual(r.field)&&(i=e.transform,s=r.transform,i instanceof __PRIVATE_ArrayUnionTransformOperation&&s instanceof __PRIVATE_ArrayUnionTransformOperation||i instanceof __PRIVATE_ArrayRemoveTransformOperation&&s instanceof __PRIVATE_ArrayRemoveTransformOperation?__PRIVATE_arrayEquals(i.elements,s.elements,__PRIVATE_valueEquals):i instanceof __PRIVATE_NumericIncrementTransformOperation&&s instanceof __PRIVATE_NumericIncrementTransformOperation?__PRIVATE_valueEquals(i.Ae,s.Ae):i instanceof __PRIVATE_ServerTimestampTransform&&s instanceof __PRIVATE_ServerTimestampTransform)})))&&(0===e.type?e.value.isEqual(r.value):1!==e.type||e.data.isEqual(r.data)&&e.fieldMask.isEqual(r.fieldMask))}let __PRIVATE_SetMutation=class __PRIVATE_SetMutation extends Mutation{constructor(e,r,i,s=[]){super(),this.key=e,this.value=r,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}};let __PRIVATE_PatchMutation=class __PRIVATE_PatchMutation extends Mutation{constructor(e,r,i,s,o=[]){super(),this.key=e,this.data=r,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}};function __PRIVATE_getPatch(e){let r=new Map;return e.fieldMask.fields.forEach(i=>{if(!i.isEmpty()){let s=e.data.field(i);r.set(i,s)}}),r}function __PRIVATE_serverTransformResults(e,r,i){let s=new Map;__PRIVATE_hardAssert(e.length===i.length,32656,{Re:i.length,Ve:e.length});for(let l=0;l<i.length;l++){var o;let h=e[l],d=h.transform,f=r.data.field(h.field);s.set(h.field,(o=i[l],d instanceof __PRIVATE_ArrayUnionTransformOperation?__PRIVATE_applyArrayUnionTransformOperation(d,f):d instanceof __PRIVATE_ArrayRemoveTransformOperation?__PRIVATE_applyArrayRemoveTransformOperation(d,f):o))}return s}function __PRIVATE_localTransformResults(e,r,i){let s=new Map;for(let o of e){let e=o.transform,l=i.data.field(o.field);s.set(o.field,e instanceof __PRIVATE_ServerTimestampTransform?function(e,r){let i={fields:{[tN]:{stringValue:tV},[tD]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return r&&__PRIVATE_isServerTimestamp(r)&&(r=__PRIVATE_getPreviousValue(r)),r&&(i.fields[tk]=r),{mapValue:i}}(r,l):e instanceof __PRIVATE_ArrayUnionTransformOperation?__PRIVATE_applyArrayUnionTransformOperation(e,l):e instanceof __PRIVATE_ArrayRemoveTransformOperation?__PRIVATE_applyArrayRemoveTransformOperation(e,l):function(e,r){var i,s;let o=(i=e,s=r,i instanceof __PRIVATE_NumericIncrementTransformOperation?isInteger(s)||s&&"doubleValue"in s?s:{integerValue:0}:null),l=asNumber(o)+asNumber(e.Ae);return isInteger(o)&&isInteger(e.Ae)?__PRIVATE_toInteger(l):__PRIVATE_toDouble(e.serializer,l)}(e,l))}return s}let __PRIVATE_DeleteMutation=class __PRIVATE_DeleteMutation extends Mutation{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MutationBatch=class MutationBatch{constructor(e,r,i,s){this.batchId=e,this.localWriteTime=r,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,r){let i=r.mutationResults;for(let r=0;r<this.mutations.length;r++){let o=this.mutations[r];if(o.key.isEqual(e.key)){var s;s=i[r],o instanceof __PRIVATE_SetMutation?function(e,r,i){let s=e.value.clone(),o=__PRIVATE_serverTransformResults(e.fieldTransforms,r,i.transformResults);s.setAll(o),r.convertToFoundDocument(i.version,s).setHasCommittedMutations()}(o,e,s):o instanceof __PRIVATE_PatchMutation?function(e,r,i){if(!__PRIVATE_preconditionIsValidForDocument(e.precondition,r))return void r.convertToUnknownDocument(i.version);let s=__PRIVATE_serverTransformResults(e.fieldTransforms,r,i.transformResults),o=r.data;o.setAll(__PRIVATE_getPatch(e)),o.setAll(s),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(o,e,s):function(e,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,s)}}}applyToLocalView(e,r){for(let i of this.baseMutations)i.key.isEqual(e.key)&&(r=__PRIVATE_mutationApplyToLocalView(i,e,r,this.localWriteTime));for(let i of this.mutations)i.key.isEqual(e.key)&&(r=__PRIVATE_mutationApplyToLocalView(i,e,r,this.localWriteTime));return r}applyToLocalDocumentSet(e,r){let i=__PRIVATE_newDocumentKeyMap();return this.mutations.forEach(s=>{let o=e.get(s.key),l=o.overlayedDocument,h=this.applyToLocalView(l,o.mutatedFields);h=r.has(s.key)?null:h;let d=__PRIVATE_calculateOverlayMutation(l,h);null!==d&&i.set(s.key,d),l.isValidDocument()||l.convertToNoDocument(SnapshotVersion.min())}),i}keys(){return this.mutations.reduce((e,r)=>e.add(r.key),__PRIVATE_documentKeySet())}isEqual(e){return this.batchId===e.batchId&&__PRIVATE_arrayEquals(this.mutations,e.mutations,(e,r)=>__PRIVATE_mutationEquals(e,r))&&__PRIVATE_arrayEquals(this.baseMutations,e.baseMutations,(e,r)=>__PRIVATE_mutationEquals(e,r))}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Overlay=class Overlay{constructor(e,r){this.largestBatchId=e,this.mutation=r}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ExistenceFilter=class ExistenceFilter{constructor(e,r){this.count=e,this.unchangedNames=r}};function __PRIVATE_mapCodeFromRpcCode(e){if(void 0===e)return __PRIVATE_logError("GRPC error has no .code"),tw.UNKNOWN;switch(e){case eg.OK:return tw.OK;case eg.CANCELLED:return tw.CANCELLED;case eg.UNKNOWN:return tw.UNKNOWN;case eg.DEADLINE_EXCEEDED:return tw.DEADLINE_EXCEEDED;case eg.RESOURCE_EXHAUSTED:return tw.RESOURCE_EXHAUSTED;case eg.INTERNAL:return tw.INTERNAL;case eg.UNAVAILABLE:return tw.UNAVAILABLE;case eg.UNAUTHENTICATED:return tw.UNAUTHENTICATED;case eg.INVALID_ARGUMENT:return tw.INVALID_ARGUMENT;case eg.NOT_FOUND:return tw.NOT_FOUND;case eg.ALREADY_EXISTS:return tw.ALREADY_EXISTS;case eg.PERMISSION_DENIED:return tw.PERMISSION_DENIED;case eg.FAILED_PRECONDITION:return tw.FAILED_PRECONDITION;case eg.ABORTED:return tw.ABORTED;case eg.OUT_OF_RANGE:return tw.OUT_OF_RANGE;case eg.UNIMPLEMENTED:return tw.UNIMPLEMENTED;case eg.DATA_LOSS:return tw.DATA_LOSS;default:return fail(39323,{code:e})}}(ey=eg||(eg={}))[ey.OK=0]="OK",ey[ey.CANCELLED=1]="CANCELLED",ey[ey.UNKNOWN=2]="UNKNOWN",ey[ey.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ey[ey.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ey[ey.NOT_FOUND=5]="NOT_FOUND",ey[ey.ALREADY_EXISTS=6]="ALREADY_EXISTS",ey[ey.PERMISSION_DENIED=7]="PERMISSION_DENIED",ey[ey.UNAUTHENTICATED=16]="UNAUTHENTICATED",ey[ey.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ey[ey.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ey[ey.ABORTED=10]="ABORTED",ey[ey.OUT_OF_RANGE=11]="OUT_OF_RANGE",ey[ey.UNIMPLEMENTED=12]="UNIMPLEMENTED",ey[ey.INTERNAL=13]="INTERNAL",ey[ey.UNAVAILABLE=14]="UNAVAILABLE",ey[ey.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tG=new eo([4294967295,4294967295],0);function __PRIVATE_getMd5HashValue(e){let r=(new TextEncoder).encode(e),i=new ea;return i.update(r),new Uint8Array(i.digest())}function __PRIVATE_get64BitUints(e){let r=new DataView(e.buffer),i=r.getUint32(0,!0),s=r.getUint32(4,!0),o=r.getUint32(8,!0),l=r.getUint32(12,!0);return[new eo([i,s],0),new eo([o,l],0)]}let BloomFilter=class BloomFilter{constructor(e,r,i){if(this.bitmap=e,this.padding=r,this.hashCount=i,r<0||r>=8)throw new __PRIVATE_BloomFilterError(`Invalid padding: ${r}`);if(i<0||e.length>0&&0===this.hashCount)throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${i}`);if(0===e.length&&0!==r)throw new __PRIVATE_BloomFilterError(`Invalid padding when bitmap length is 0: ${r}`);this.ge=8*e.length-r,this.pe=eo.fromNumber(this.ge)}ye(e,r,i){let s=e.add(r.multiply(eo.fromNumber(i)));return 1===s.compare(tG)&&(s=new eo([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;let r=__PRIVATE_getMd5HashValue(e),[i,s]=__PRIVATE_get64BitUints(r);for(let e=0;e<this.hashCount;e++){let r=this.ye(i,s,e);if(!this.we(r))return!1}return!0}static create(e,r,i){let s=new Uint8Array(Math.ceil(e/8)),o=new BloomFilter(s,e%8==0?0:8-e%8,r);return i.forEach(e=>o.insert(e)),o}insert(e){if(0===this.ge)return;let r=__PRIVATE_getMd5HashValue(e),[i,s]=__PRIVATE_get64BitUints(r);for(let e=0;e<this.hashCount;e++){let r=this.ye(i,s,e);this.Se(r)}}Se(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}};let __PRIVATE_BloomFilterError=class __PRIVATE_BloomFilterError extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RemoteEvent=class RemoteEvent{constructor(e,r,i,s,o){this.snapshotVersion=e,this.targetChanges=r,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,r,i){let s=new Map;return s.set(e,TargetChange.createSynthesizedTargetChangeForCurrentChange(e,r,i)),new RemoteEvent(SnapshotVersion.min(),s,new SortedMap(__PRIVATE_primitiveComparator),tB,__PRIVATE_documentKeySet())}};let TargetChange=class TargetChange{constructor(e,r,i,s,o){this.resumeToken=e,this.current=r,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,r,i){return new TargetChange(i,r,__PRIVATE_documentKeySet(),__PRIVATE_documentKeySet(),__PRIVATE_documentKeySet())}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_DocumentWatchChange=class __PRIVATE_DocumentWatchChange{constructor(e,r,i,s){this.be=e,this.removedTargetIds=r,this.key=i,this.De=s}};let __PRIVATE_ExistenceFilterChange=class __PRIVATE_ExistenceFilterChange{constructor(e,r){this.targetId=e,this.Ce=r}};let __PRIVATE_WatchTargetChange=class __PRIVATE_WatchTargetChange{constructor(e,r,i=ByteString.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=r,this.resumeToken=i,this.cause=s}};let __PRIVATE_TargetState=class __PRIVATE_TargetState{constructor(){this.ve=0,this.Fe=__PRIVATE_snapshotChangesMap(),this.Me=ByteString.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=__PRIVATE_documentKeySet(),r=__PRIVATE_documentKeySet(),i=__PRIVATE_documentKeySet();return this.Fe.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:r=r.add(s);break;case 1:i=i.add(s);break;default:fail(38017,{changeType:o})}}),new TargetChange(this.Me,this.xe,e,r,i)}qe(){this.Oe=!1,this.Fe=__PRIVATE_snapshotChangesMap()}Qe(e,r){this.Oe=!0,this.Fe=this.Fe.insert(e,r)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,__PRIVATE_hardAssert(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}};let __PRIVATE_WatchChangeAggregator=class __PRIVATE_WatchChangeAggregator{constructor(e){this.Ge=e,this.ze=new Map,this.je=tB,this.Je=__PRIVATE_documentTargetMap(),this.He=__PRIVATE_documentTargetMap(),this.Ye=new SortedMap(__PRIVATE_primitiveComparator)}Ze(e){for(let r of e.be)e.De&&e.De.isFoundDocument()?this.Xe(r,e.De):this.et(r,e.key,e.De);for(let r of e.removedTargetIds)this.et(r,e.key,e.De)}tt(e){this.forEachTarget(e,r=>{let i=this.nt(r);switch(e.state){case 0:this.rt(r)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(r);break;case 3:this.rt(r)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(r)&&(this.it(r),i.Le(e.resumeToken));break;default:fail(56790,{state:e.state})}})}forEachTarget(e,r){e.targetIds.length>0?e.targetIds.forEach(r):this.ze.forEach((e,i)=>{this.rt(i)&&r(i)})}st(e){let r=e.targetId,i=e.Ce.count,s=this.ot(r);if(s){let o=s.target;if(__PRIVATE_targetIsDocumentTarget(o)){if(0===i){let e=new DocumentKey(o.path);this.et(r,e,MutableDocument.newNoDocument(e,SnapshotVersion.min()))}else __PRIVATE_hardAssert(1===i,20013,{expectedCount:i})}else{let s=this._t(r);if(s!==i){let i=this.ut(e),o=i?this.ct(i,e,s):1;0!==o&&(this.it(r),this.Ye=this.Ye.insert(r,2===o?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}ut(e){let r,i;let s=e.Ce.unchangedNames;if(!s||!s.bits)return null;let{bits:{bitmap:o="",padding:l=0},hashCount:h=0}=s;try{r=__PRIVATE_normalizeByteString(o).toUint8Array()}catch(e){if(e instanceof __PRIVATE_Base64DecodeError)return __PRIVATE_logWarn("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{i=new BloomFilter(r,l,h)}catch(e){return __PRIVATE_logWarn(e instanceof __PRIVATE_BloomFilterError?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===i.ge?null:i}ct(e,r,i){return r.Ce.count===i-this.Pt(e,r.targetId)?0:2}Pt(e,r){let i=this.Ge.getRemoteKeysForTarget(r),s=0;return i.forEach(i=>{let o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(r,i,null),s++)}),s}Tt(e){let r=new Map;this.ze.forEach((i,s)=>{let o=this.ot(s);if(o){if(i.current&&__PRIVATE_targetIsDocumentTarget(o.target)){let r=new DocumentKey(o.target.path);this.It(r).has(s)||this.Et(s,r)||this.et(s,r,MutableDocument.newNoDocument(r,e))}i.Be&&(r.set(s,i.ke()),i.qe())}});let i=__PRIVATE_documentKeySet();this.He.forEach((e,r)=>{let s=!0;r.forEachWhile(e=>{let r=this.ot(e);return!r||"TargetPurposeLimboResolution"===r.purpose||(s=!1,!1)}),s&&(i=i.add(e))}),this.je.forEach((r,i)=>i.setReadTime(e));let s=new RemoteEvent(e,r,this.Ye,this.je,i);return this.je=tB,this.Je=__PRIVATE_documentTargetMap(),this.He=__PRIVATE_documentTargetMap(),this.Ye=new SortedMap(__PRIVATE_primitiveComparator),s}Xe(e,r){if(!this.rt(e))return;let i=this.Et(e,r.key)?2:0;this.nt(e).Qe(r.key,i),this.je=this.je.insert(r.key,r),this.Je=this.Je.insert(r.key,this.It(r.key).add(e)),this.He=this.He.insert(r.key,this.dt(r.key).add(e))}et(e,r,i){if(!this.rt(e))return;let s=this.nt(e);this.Et(e,r)?s.Qe(r,1):s.$e(r),this.He=this.He.insert(r,this.dt(r).delete(e)),this.He=this.He.insert(r,this.dt(r).add(e)),i&&(this.je=this.je.insert(r,i))}removeTarget(e){this.ze.delete(e)}_t(e){let r=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let r=this.ze.get(e);return r||(r=new __PRIVATE_TargetState,this.ze.set(e,r)),r}dt(e){let r=this.He.get(e);return r||(r=new SortedSet(__PRIVATE_primitiveComparator),this.He=this.He.insert(e,r)),r}It(e){let r=this.Je.get(e);return r||(r=new SortedSet(__PRIVATE_primitiveComparator),this.Je=this.Je.insert(e,r)),r}rt(e){let r=null!==this.ot(e);return r||__PRIVATE_logDebug("WatchChangeAggregator","Detected inactive target",e),r}ot(e){let r=this.ze.get(e);return r&&r.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new __PRIVATE_TargetState),this.Ge.getRemoteKeysForTarget(e).forEach(r=>{this.et(e,r,null)})}Et(e,r){return this.Ge.getRemoteKeysForTarget(e).has(r)}};function __PRIVATE_documentTargetMap(){return new SortedMap(DocumentKey.comparator)}function __PRIVATE_snapshotChangesMap(){return new SortedMap(DocumentKey.comparator)}let tz={asc:"ASCENDING",desc:"DESCENDING"},t$={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tK={and:"AND",or:"OR"};let JsonProtoSerializer=class JsonProtoSerializer{constructor(e,r){this.databaseId=e,this.useProto3Json=r}};function __PRIVATE_toInt32Proto(e,r){return e.useProto3Json||null==r?r:{value:r}}function toTimestamp(e,r){return e.useProto3Json?`${new Date(1e3*r.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+r.nanoseconds).slice(-9)}Z`:{seconds:""+r.seconds,nanos:r.nanoseconds}}function __PRIVATE_toBytes(e,r){return e.useProto3Json?r.toBase64():r.toUint8Array()}function __PRIVATE_fromVersion(e){return __PRIVATE_hardAssert(!!e,49232),SnapshotVersion.fromTimestamp(function(e){let r=__PRIVATE_normalizeTimestamp(e);return new Timestamp(r.seconds,r.nanos)}(e))}function __PRIVATE_toResourceName(e,r){return __PRIVATE_toResourcePath(e,r).canonicalString()}function __PRIVATE_toResourcePath(e,r){let i=new ResourcePath(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===r?i:i.child(r)}function __PRIVATE_fromResourceName(e){let r=ResourcePath.fromString(e);return __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(r),10190,{key:r.toString()}),r}function fromName(e,r){let i=__PRIVATE_fromResourceName(r);if(i.get(1)!==e.databaseId.projectId)throw new FirestoreError(tw.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+e.databaseId.projectId);if(i.get(3)!==e.databaseId.database)throw new FirestoreError(tw.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+e.databaseId.database);return new DocumentKey(__PRIVATE_extractLocalPathFromResourceName(i))}function __PRIVATE_toQueryPath(e,r){return __PRIVATE_toResourceName(e.databaseId,r)}function __PRIVATE_getEncodedDatabaseId(e){return new ResourcePath(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function __PRIVATE_extractLocalPathFromResourceName(e){return __PRIVATE_hardAssert(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function __PRIVATE_toFieldPathReference(e){return{fieldPath:e.canonicalString()}}function __PRIVATE_fromFieldPathReference(e){return FieldPath$1.fromServerFormat(e.fieldPath)}function __PRIVATE_isValidResourceName(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TargetData=class TargetData{constructor(e,r,i,s,o=SnapshotVersion.min(),l=SnapshotVersion.min(),h=ByteString.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=r,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=h,this.expectedCount=d}withSequenceNumber(e){return new TargetData(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,r){return new TargetData(this.target,this.targetId,this.purpose,this.sequenceNumber,r,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new TargetData(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new TargetData(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_LocalSerializer=class __PRIVATE_LocalSerializer{constructor(e){this.yt=e}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_FirestoreIndexValueWriter=class __PRIVATE_FirestoreIndexValueWriter{constructor(){}Dt(e,r){this.Ct(e,r),r.vt()}Ct(e,r){if("nullValue"in e)this.Ft(r,5);else if("booleanValue"in e)this.Ft(r,10),r.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(r,15),r.Mt(__PRIVATE_normalizeNumber(e.integerValue));else if("doubleValue"in e){let i=__PRIVATE_normalizeNumber(e.doubleValue);isNaN(i)?this.Ft(r,13):(this.Ft(r,15),__PRIVATE_isNegativeZero(i)?r.Mt(0):r.Mt(i))}else if("timestampValue"in e){let i=e.timestampValue;this.Ft(r,20),"string"==typeof i&&(i=__PRIVATE_normalizeTimestamp(i)),r.xt(`${i.seconds||""}`),r.Mt(i.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,r),this.Nt(r);else if("bytesValue"in e)this.Ft(r,30),r.Bt(__PRIVATE_normalizeByteString(e.bytesValue)),this.Nt(r);else if("referenceValue"in e)this.Lt(e.referenceValue,r);else if("geoPointValue"in e){let i=e.geoPointValue;this.Ft(r,45),r.Mt(i.latitude||0),r.Mt(i.longitude||0)}else"mapValue"in e?__PRIVATE_isMaxValue(e)?this.Ft(r,Number.MAX_SAFE_INTEGER):__PRIVATE_isVectorValue(e)?this.kt(e.mapValue,r):(this.qt(e.mapValue,r),this.Nt(r)):"arrayValue"in e?(this.Qt(e.arrayValue,r),this.Nt(r)):fail(19022,{$t:e})}Ot(e,r){this.Ft(r,25),this.Ut(e,r)}Ut(e,r){r.xt(e)}qt(e,r){let i=e.fields||{};for(let e of(this.Ft(r,55),Object.keys(i)))this.Ot(e,r),this.Ct(i[e],r)}kt(e,r){let i=e.fields||{};this.Ft(r,53);let s=i[tU].arrayValue?.values?.length||0;this.Ft(r,15),r.Mt(__PRIVATE_normalizeNumber(s)),this.Ot(tU,r),this.Ct(i[tU],r)}Qt(e,r){let i=e.values||[];for(let e of(this.Ft(r,50),i))this.Ct(e,r)}Lt(e,r){this.Ft(r,37),DocumentKey.fromName(e).path.forEach(e=>{this.Ft(r,60),this.Ut(e,r)})}Ft(e,r){e.Mt(r)}Nt(e){e.Mt(2)}};__PRIVATE_FirestoreIndexValueWriter.Kt=new __PRIVATE_FirestoreIndexValueWriter;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryIndexManager=class __PRIVATE_MemoryIndexManager{constructor(){this.Cn=new __PRIVATE_MemoryCollectionParentIndex}addToCollectionParentIndex(e,r){return this.Cn.add(r),PersistencePromise.resolve()}getCollectionParents(e,r){return PersistencePromise.resolve(this.Cn.getEntries(r))}addFieldIndex(e,r){return PersistencePromise.resolve()}deleteFieldIndex(e,r){return PersistencePromise.resolve()}deleteAllFieldIndexes(e){return PersistencePromise.resolve()}createTargetIndexes(e,r){return PersistencePromise.resolve()}getDocumentsMatchingTarget(e,r){return PersistencePromise.resolve(null)}getIndexType(e,r){return PersistencePromise.resolve(0)}getFieldIndexes(e,r){return PersistencePromise.resolve([])}getNextCollectionGroupToUpdate(e){return PersistencePromise.resolve(null)}getMinOffset(e,r){return PersistencePromise.resolve(IndexOffset.min())}getMinOffsetFromCollectionGroup(e,r){return PersistencePromise.resolve(IndexOffset.min())}updateCollectionGroup(e,r,i){return PersistencePromise.resolve()}updateIndexEntries(e,r){return PersistencePromise.resolve()}};let __PRIVATE_MemoryCollectionParentIndex=class __PRIVATE_MemoryCollectionParentIndex{constructor(){this.index={}}add(e){let r=e.lastSegment(),i=e.popLast(),s=this.index[r]||new SortedSet(ResourcePath.comparator),o=!s.has(i);return this.index[r]=s.add(i),o}has(e){let r=e.lastSegment(),i=e.popLast(),s=this.index[r];return s&&s.has(i)}getEntries(e){return(this.index[e]||new SortedSet(ResourcePath.comparator)).toArray()}};new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tH={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};let LruParams=class LruParams{static withCacheSize(e){return new LruParams(e,LruParams.DEFAULT_COLLECTION_PERCENTILE,LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,r,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */LruParams.DEFAULT_COLLECTION_PERCENTILE=10,LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,LruParams.DEFAULT=new LruParams(41943040,LruParams.DEFAULT_COLLECTION_PERCENTILE,LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),LruParams.DISABLED=new LruParams(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_TargetIdGenerator=class __PRIVATE_TargetIdGenerator{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new __PRIVATE_TargetIdGenerator(0)}static cr(){return new __PRIVATE_TargetIdGenerator(-1)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tQ="LruGarbageCollector";function __PRIVATE_bufferEntryComparator([e,r],[i,s]){let o=__PRIVATE_primitiveComparator(e,i);return 0===o?__PRIVATE_primitiveComparator(r,s):o}let __PRIVATE_RollingSequenceNumberBuffer=class __PRIVATE_RollingSequenceNumberBuffer{constructor(e){this.Ir=e,this.buffer=new SortedSet(__PRIVATE_bufferEntryComparator),this.Er=0}dr(){return++this.Er}Ar(e){let r=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(r);else{let e=this.buffer.last();0>__PRIVATE_bufferEntryComparator(r,e)&&(this.buffer=this.buffer.delete(e).add(r))}}get maxValue(){return this.buffer.last()[0]}};let __PRIVATE_LruScheduler=class __PRIVATE_LruScheduler{constructor(e,r,i){this.garbageCollector=e,this.asyncQueue=r,this.localStore=i,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Vr(e){__PRIVATE_logDebug(tQ,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){__PRIVATE_isIndexedDbTransactionError(e)?__PRIVATE_logDebug(tQ,"Ignoring IndexedDB error during garbage collection: ",e):await __PRIVATE_ignoreIfPrimaryLeaseLoss(e)}await this.Vr(3e5)})}};let __PRIVATE_LruGarbageCollectorImpl=class __PRIVATE_LruGarbageCollectorImpl{constructor(e,r){this.mr=e,this.params=r}calculateTargetCount(e,r){return this.mr.gr(e).next(e=>Math.floor(r/100*e))}nthSequenceNumber(e,r){if(0===r)return PersistencePromise.resolve(__PRIVATE_ListenSequence.ce);let i=new __PRIVATE_RollingSequenceNumberBuffer(r);return this.mr.forEachTarget(e,e=>i.Ar(e.sequenceNumber)).next(()=>this.mr.pr(e,e=>i.Ar(e))).next(()=>i.maxValue)}removeTargets(e,r,i){return this.mr.removeTargets(e,r,i)}removeOrphanedDocuments(e,r){return this.mr.removeOrphanedDocuments(e,r)}collect(e,r){return -1===this.params.cacheSizeCollectionThreshold?(__PRIVATE_logDebug("LruGarbageCollector","Garbage collection skipped; disabled"),PersistencePromise.resolve(tH)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(__PRIVATE_logDebug("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tH):this.yr(e,r))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,r){let i,s,o,l,h,d,f;let _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(r=>(r>this.params.maximumSequenceNumbersToCollect?(__PRIVATE_logDebug("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${r}`),s=this.params.maximumSequenceNumbersToCollect):s=r,l=Date.now(),this.nthSequenceNumber(e,s))).next(s=>(i=s,h=Date.now(),this.removeTargets(e,i,r))).next(r=>(o=r,d=Date.now(),this.removeOrphanedDocuments(e,i))).next(e=>(f=Date.now(),__PRIVATE_getLogLevel()<=eN.in.DEBUG&&__PRIVATE_logDebug("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-_}ms
	Determined least recently used ${s} in `+(h-l)+"ms\n"+`	Removed ${o} targets in `+(d-h)+"ms\n"+`	Removed ${e} documents in `+(f-d)+"ms\n"+`Total Duration: ${f-_}ms`),PersistencePromise.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:e})))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RemoteDocumentChangeBuffer=class RemoteDocumentChangeBuffer{constructor(){this.changes=new ObjectMap(e=>e.toString(),(e,r)=>e.isEqual(r)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,r){this.assertNotApplied(),this.changes.set(e,MutableDocument.newInvalidDocument(e).setReadTime(r))}getEntry(e,r){this.assertNotApplied();let i=this.changes.get(r);return void 0!==i?PersistencePromise.resolve(i):this.getFromCache(e,r)}getEntries(e,r){return this.getAllFromCache(e,r)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OverlayedDocument=class OverlayedDocument{constructor(e,r){this.overlayedDocument=e,this.mutatedFields=r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let LocalDocumentsView=class LocalDocumentsView{constructor(e,r,i,s){this.remoteDocumentCache=e,this.mutationQueue=r,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,r){let i=null;return this.documentOverlayCache.getOverlay(e,r).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,r))).next(e=>(null!==i&&__PRIVATE_mutationApplyToLocalView(i.mutation,e,FieldMask.empty(),Timestamp.now()),e))}getDocuments(e,r){return this.remoteDocumentCache.getEntries(e,r).next(r=>this.getLocalViewOfDocuments(e,r,__PRIVATE_documentKeySet()).next(()=>r))}getLocalViewOfDocuments(e,r,i=__PRIVATE_documentKeySet()){let s=__PRIVATE_newDocumentKeyMap();return this.populateOverlays(e,s,r).next(()=>this.computeViews(e,r,s,i).next(e=>{let r=documentMap();return e.forEach((e,i)=>{r=r.insert(e,i.overlayedDocument)}),r}))}getOverlayedDocuments(e,r){let i=__PRIVATE_newDocumentKeyMap();return this.populateOverlays(e,i,r).next(()=>this.computeViews(e,r,i,__PRIVATE_documentKeySet()))}populateOverlays(e,r,i){let s=[];return i.forEach(e=>{r.has(e)||s.push(e)}),this.documentOverlayCache.getOverlays(e,s).next(e=>{e.forEach((e,i)=>{r.set(e,i)})})}computeViews(e,r,i,s){let o=tB,l=__PRIVATE_newDocumentKeyMap(),h=__PRIVATE_newDocumentKeyMap();return r.forEach((e,r)=>{let h=i.get(r.key);s.has(r.key)&&(void 0===h||h.mutation instanceof __PRIVATE_PatchMutation)?o=o.insert(r.key,r):void 0!==h?(l.set(r.key,h.mutation.getFieldMask()),__PRIVATE_mutationApplyToLocalView(h.mutation,r,h.mutation.getFieldMask(),Timestamp.now())):l.set(r.key,FieldMask.empty())}),this.recalculateAndSaveOverlays(e,o).next(e=>(e.forEach((e,r)=>l.set(e,r)),r.forEach((e,r)=>h.set(e,new OverlayedDocument(r,l.get(e)??null))),h))}recalculateAndSaveOverlays(e,r){let i=__PRIVATE_newDocumentKeyMap(),s=new SortedMap((e,r)=>e-r),o=__PRIVATE_documentKeySet();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,r).next(e=>{for(let o of e)o.keys().forEach(e=>{let l=r.get(e);if(null===l)return;let h=i.get(e)||FieldMask.empty();h=o.applyToLocalView(l,h),i.set(e,h);let d=(s.get(o.batchId)||__PRIVATE_documentKeySet()).add(e);s=s.insert(o.batchId,d)})}).next(()=>{let l=[],h=s.getReverseIterator();for(;h.hasNext();){let s=h.getNext(),d=s.key,f=s.value,_=__PRIVATE_newDocumentKeyMap();f.forEach(e=>{if(!o.has(e)){let s=__PRIVATE_calculateOverlayMutation(r.get(e),i.get(e));null!==s&&_.set(e,s),o=o.add(e)}}),l.push(this.documentOverlayCache.saveOverlays(e,d,_))}return PersistencePromise.waitFor(l)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,r){return this.remoteDocumentCache.getEntries(e,r).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,r,i,s){return DocumentKey.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,r.path):__PRIVATE_isCollectionGroupQuery(r)?this.getDocumentsMatchingCollectionGroupQuery(e,r,i,s):this.getDocumentsMatchingCollectionQuery(e,r,i,s)}getNextDocuments(e,r,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,r,i,s).next(o=>{let l=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,r,i.largestBatchId,s-o.size):PersistencePromise.resolve(__PRIVATE_newDocumentKeyMap()),h=-1,d=o;return l.next(r=>PersistencePromise.forEach(r,(r,i)=>(h<i.largestBatchId&&(h=i.largestBatchId),o.get(r)?PersistencePromise.resolve():this.remoteDocumentCache.getEntry(e,r).next(e=>{d=d.insert(r,e)}))).next(()=>this.populateOverlays(e,r,o)).next(()=>this.computeViews(e,d,r,__PRIVATE_documentKeySet())).next(e=>{let r;return{batchId:h,changes:(r=tq,e.forEach((e,i)=>r=r.insert(e,i.overlayedDocument)),r)}}))})}getDocumentsMatchingDocumentQuery(e,r){return this.getDocument(e,new DocumentKey(r)).next(e=>{let r=documentMap();return e.isFoundDocument()&&(r=r.insert(e.key,e)),r})}getDocumentsMatchingCollectionGroupQuery(e,r,i,s){let o=r.collectionGroup,l=documentMap();return this.indexManager.getCollectionParents(e,o).next(h=>PersistencePromise.forEach(h,h=>{var d;let f=(d=h.child(o),new __PRIVATE_QueryImpl(d,null,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt));return this.getDocumentsMatchingCollectionQuery(e,f,i,s).next(e=>{e.forEach((e,r)=>{l=l.insert(e,r)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,r,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,r.path,i.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,r,i,o,s))).next(e=>{o.forEach((r,i)=>{let s=i.getKey();null===e.get(s)&&(e=e.insert(s,MutableDocument.newInvalidDocument(s)))});let i=documentMap();return e.forEach((e,s)=>{let l=o.get(e);void 0!==l&&__PRIVATE_mutationApplyToLocalView(l.mutation,s,FieldMask.empty(),Timestamp.now()),__PRIVATE_queryMatches(r,s)&&(i=i.insert(e,s))}),i})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryBundleCache=class __PRIVATE_MemoryBundleCache{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,r){return PersistencePromise.resolve(this.Lr.get(r))}saveBundleMetadata(e,r){return this.Lr.set(r.id,{id:r.id,version:r.version,createTime:__PRIVATE_fromVersion(r.createTime)}),PersistencePromise.resolve()}getNamedQuery(e,r){return PersistencePromise.resolve(this.kr.get(r))}saveNamedQuery(e,r){return this.kr.set(r.name,{name:r.name,query:function(e){let r=function(e){var r,i,s,o,l,h,d,f;let _,g=function(e){let r=__PRIVATE_fromResourceName(e);return 4===r.length?ResourcePath.emptyPath():__PRIVATE_extractLocalPathFromResourceName(r)}(e.parent),A=e.structuredQuery,b=A.from?A.from.length:0,k=null;if(b>0){__PRIVATE_hardAssert(1===b,65062);let e=A.from[0];e.allDescendants?k=e.collectionId:g=g.child(e.collectionId)}let M=[];A.where&&(M=function(e){var r;let i=function __PRIVATE_fromFilter(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let r=__PRIVATE_fromFieldPathReference(e.unaryFilter.field);return FieldFilter.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=__PRIVATE_fromFieldPathReference(e.unaryFilter.field);return FieldFilter.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=__PRIVATE_fromFieldPathReference(e.unaryFilter.field);return FieldFilter.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let o=__PRIVATE_fromFieldPathReference(e.unaryFilter.field);return FieldFilter.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fail(61313);default:return fail(60726)}}(e):void 0!==e.fieldFilter?FieldFilter.create(__PRIVATE_fromFieldPathReference(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fail(58110);default:return fail(50506)}}(e.fieldFilter.op),e.fieldFilter.value):void 0!==e.compositeFilter?CompositeFilter.create(e.compositeFilter.filters.map(e=>__PRIVATE_fromFilter(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return fail(1026)}}(e.compositeFilter.op)):fail(30097,{filter:e})}(e);return i instanceof CompositeFilter&&__PRIVATE_compositeFilterIsFlat(r=i)&&__PRIVATE_compositeFilterIsConjunction(r)?i.getFilters():[i]}(A.where));let q=[];A.orderBy&&(q=A.orderBy.map(e=>new OrderBy(__PRIVATE_fromFieldPathReference(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let j=null;A.limit&&(j=null==(_="object"==typeof(r=A.limit)?r.value:r)?null:_);let $=null;A.startAt&&($=function(e){let r=!!e.before,i=e.values||[];return new Bound(i,r)}(A.startAt));let ee=null;return A.endAt&&(ee=function(e){let r=!e.before,i=e.values||[];return new Bound(i,r)}(A.endAt)),i=g,s=k,o=q,l=M,h=j,d=$,f=ee,new __PRIVATE_QueryImpl(i,s,o,l,h,"F",d,f)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?__PRIVATE_queryWithLimit(r,r.limit,"L"):r}(r.bundledQuery),readTime:__PRIVATE_fromVersion(r.readTime)}),PersistencePromise.resolve()}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryDocumentOverlayCache=class __PRIVATE_MemoryDocumentOverlayCache{constructor(){this.overlays=new SortedMap(DocumentKey.comparator),this.qr=new Map}getOverlay(e,r){return PersistencePromise.resolve(this.overlays.get(r))}getOverlays(e,r){let i=__PRIVATE_newDocumentKeyMap();return PersistencePromise.forEach(r,r=>this.getOverlay(e,r).next(e=>{null!==e&&i.set(r,e)})).next(()=>i)}saveOverlays(e,r,i){return i.forEach((i,s)=>{this.St(e,r,s)}),PersistencePromise.resolve()}removeOverlaysForBatchId(e,r,i){let s=this.qr.get(i);return void 0!==s&&(s.forEach(e=>this.overlays=this.overlays.remove(e)),this.qr.delete(i)),PersistencePromise.resolve()}getOverlaysForCollection(e,r,i){let s=__PRIVATE_newDocumentKeyMap(),o=r.length+1,l=new DocumentKey(r.child("")),h=this.overlays.getIteratorFrom(l);for(;h.hasNext();){let e=h.getNext().value,l=e.getKey();if(!r.isPrefixOf(l.path))break;l.path.length===o&&e.largestBatchId>i&&s.set(e.getKey(),e)}return PersistencePromise.resolve(s)}getOverlaysForCollectionGroup(e,r,i,s){let o=new SortedMap((e,r)=>e-r),l=this.overlays.getIterator();for(;l.hasNext();){let e=l.getNext().value;if(e.getKey().getCollectionGroup()===r&&e.largestBatchId>i){let r=o.get(e.largestBatchId);null===r&&(r=__PRIVATE_newDocumentKeyMap(),o=o.insert(e.largestBatchId,r)),r.set(e.getKey(),e)}}let h=__PRIVATE_newDocumentKeyMap(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((e,r)=>h.set(e,r)),!(h.size()>=s)););return PersistencePromise.resolve(h)}St(e,r,i){let s=this.overlays.get(i.key);if(null!==s){let e=this.qr.get(s.largestBatchId).delete(i.key);this.qr.set(s.largestBatchId,e)}this.overlays=this.overlays.insert(i.key,new Overlay(r,i));let o=this.qr.get(r);void 0===o&&(o=__PRIVATE_documentKeySet(),this.qr.set(r,o)),this.qr.set(r,o.add(i.key))}};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryGlobalsCache=class __PRIVATE_MemoryGlobalsCache{constructor(){this.sessionToken=ByteString.EMPTY_BYTE_STRING}getSessionToken(e){return PersistencePromise.resolve(this.sessionToken)}setSessionToken(e,r){return this.sessionToken=r,PersistencePromise.resolve()}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_ReferenceSet=class __PRIVATE_ReferenceSet{constructor(){this.Qr=new SortedSet(__PRIVATE_DocReference.$r),this.Ur=new SortedSet(__PRIVATE_DocReference.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,r){let i=new __PRIVATE_DocReference(e,r);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,r){e.forEach(e=>this.addReference(e,r))}removeReference(e,r){this.Gr(new __PRIVATE_DocReference(e,r))}zr(e,r){e.forEach(e=>this.removeReference(e,r))}jr(e){let r=new DocumentKey(new ResourcePath([])),i=new __PRIVATE_DocReference(r,e),s=new __PRIVATE_DocReference(r,e+1),o=[];return this.Ur.forEachInRange([i,s],e=>{this.Gr(e),o.push(e.key)}),o}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){let r=new DocumentKey(new ResourcePath([])),i=new __PRIVATE_DocReference(r,e),s=new __PRIVATE_DocReference(r,e+1),o=__PRIVATE_documentKeySet();return this.Ur.forEachInRange([i,s],e=>{o=o.add(e.key)}),o}containsKey(e){let r=new __PRIVATE_DocReference(e,0),i=this.Qr.firstAfterOrEqual(r);return null!==i&&e.isEqual(i.key)}};let __PRIVATE_DocReference=class __PRIVATE_DocReference{constructor(e,r){this.key=e,this.Yr=r}static $r(e,r){return DocumentKey.comparator(e.key,r.key)||__PRIVATE_primitiveComparator(e.Yr,r.Yr)}static Kr(e,r){return __PRIVATE_primitiveComparator(e.Yr,r.Yr)||DocumentKey.comparator(e.key,r.key)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryMutationQueue=class __PRIVATE_MemoryMutationQueue{constructor(e,r){this.indexManager=e,this.referenceDelegate=r,this.mutationQueue=[],this.tr=1,this.Zr=new SortedSet(__PRIVATE_DocReference.$r)}checkEmpty(e){return PersistencePromise.resolve(0===this.mutationQueue.length)}addMutationBatch(e,r,i,s){let o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let l=new MutationBatch(o,r,i,s);for(let r of(this.mutationQueue.push(l),s))this.Zr=this.Zr.add(new __PRIVATE_DocReference(r.key,o)),this.indexManager.addToCollectionParentIndex(e,r.key.path.popLast());return PersistencePromise.resolve(l)}lookupMutationBatch(e,r){return PersistencePromise.resolve(this.Xr(r))}getNextMutationBatchAfterBatchId(e,r){let i=this.ei(r+1),s=i<0?0:i;return PersistencePromise.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return PersistencePromise.resolve(0===this.mutationQueue.length?-1:this.tr-1)}getAllMutationBatches(e){return PersistencePromise.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,r){let i=new __PRIVATE_DocReference(r,0),s=new __PRIVATE_DocReference(r,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([i,s],e=>{let r=this.Xr(e.Yr);o.push(r)}),PersistencePromise.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,r){let i=new SortedSet(__PRIVATE_primitiveComparator);return r.forEach(e=>{let r=new __PRIVATE_DocReference(e,0),s=new __PRIVATE_DocReference(e,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([r,s],e=>{i=i.add(e.Yr)})}),PersistencePromise.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,r){let i=r.path,s=i.length+1,o=i;DocumentKey.isDocumentKey(o)||(o=o.child(""));let l=new __PRIVATE_DocReference(new DocumentKey(o),0),h=new SortedSet(__PRIVATE_primitiveComparator);return this.Zr.forEachWhile(e=>{let r=e.key.path;return!!i.isPrefixOf(r)&&(r.length===s&&(h=h.add(e.Yr)),!0)},l),PersistencePromise.resolve(this.ti(h))}ti(e){let r=[];return e.forEach(e=>{let i=this.Xr(e);null!==i&&r.push(i)}),r}removeMutationBatch(e,r){__PRIVATE_hardAssert(0===this.ni(r.batchId,"removed"),55003),this.mutationQueue.shift();let i=this.Zr;return PersistencePromise.forEach(r.mutations,s=>{let o=new __PRIVATE_DocReference(s.key,r.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=i})}ir(e){}containsKey(e,r){let i=new __PRIVATE_DocReference(r,0),s=this.Zr.firstAfterOrEqual(i);return PersistencePromise.resolve(r.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,PersistencePromise.resolve()}ni(e,r){return this.ei(e)}ei(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Xr(e){let r=this.ei(e);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryRemoteDocumentCacheImpl=class __PRIVATE_MemoryRemoteDocumentCacheImpl{constructor(e){this.ri=e,this.docs=new SortedMap(DocumentKey.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,r){let i=r.key,s=this.docs.get(i),o=s?s.size:0,l=this.ri(r);return this.docs=this.docs.insert(i,{document:r.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){let r=this.docs.get(e);r&&(this.docs=this.docs.remove(e),this.size-=r.size)}getEntry(e,r){let i=this.docs.get(r);return PersistencePromise.resolve(i?i.document.mutableCopy():MutableDocument.newInvalidDocument(r))}getEntries(e,r){let i=tB;return r.forEach(e=>{let r=this.docs.get(e);i=i.insert(e,r?r.document.mutableCopy():MutableDocument.newInvalidDocument(e))}),PersistencePromise.resolve(i)}getDocumentsMatchingQuery(e,r,i,s){let o=tB,l=r.path,h=new DocumentKey(l.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(h);for(;d.hasNext();){let{key:e,value:{document:h}}=d.getNext();if(!l.isPrefixOf(e.path))break;e.path.length>l.length+1||0>=function(e,r){let i=e.readTime.compareTo(r.readTime);return 0!==i?i:0!==(i=DocumentKey.comparator(e.documentKey,r.documentKey))?i:__PRIVATE_primitiveComparator(e.largestBatchId,r.largestBatchId)}(new IndexOffset(h.readTime,h.key,-1),i)||(s.has(h.key)||__PRIVATE_queryMatches(r,h))&&(o=o.insert(h.key,h.mutableCopy()))}return PersistencePromise.resolve(o)}getAllFromCollectionGroup(e,r,i,s){fail(9500)}ii(e,r){return PersistencePromise.forEach(this.docs,e=>r(e))}newChangeBuffer(e){return new __PRIVATE_MemoryRemoteDocumentChangeBuffer(this)}getSize(e){return PersistencePromise.resolve(this.size)}};let __PRIVATE_MemoryRemoteDocumentChangeBuffer=class __PRIVATE_MemoryRemoteDocumentChangeBuffer extends RemoteDocumentChangeBuffer{constructor(e){super(),this.Nr=e}applyChanges(e){let r=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?r.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(i)}),PersistencePromise.waitFor(r)}getFromCache(e,r){return this.Nr.getEntry(e,r)}getAllFromCache(e,r){return this.Nr.getEntries(e,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryTargetCache=class __PRIVATE_MemoryTargetCache{constructor(e){this.persistence=e,this.si=new ObjectMap(e=>__PRIVATE_canonifyTarget(e),__PRIVATE_targetEquals),this.lastRemoteSnapshotVersion=SnapshotVersion.min(),this.highestTargetId=0,this.oi=0,this._i=new __PRIVATE_ReferenceSet,this.targetCount=0,this.ai=__PRIVATE_TargetIdGenerator.ur()}forEachTarget(e,r){return this.si.forEach((e,i)=>r(i)),PersistencePromise.resolve()}getLastRemoteSnapshotVersion(e){return PersistencePromise.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return PersistencePromise.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),PersistencePromise.resolve(this.highestTargetId)}setTargetsMetadata(e,r,i){return i&&(this.lastRemoteSnapshotVersion=i),r>this.oi&&(this.oi=r),PersistencePromise.resolve()}Pr(e){this.si.set(e.target,e);let r=e.targetId;r>this.highestTargetId&&(this.ai=new __PRIVATE_TargetIdGenerator(r),this.highestTargetId=r),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,r){return this.Pr(r),this.targetCount+=1,PersistencePromise.resolve()}updateTargetData(e,r){return this.Pr(r),PersistencePromise.resolve()}removeTargetData(e,r){return this.si.delete(r.target),this._i.jr(r.targetId),this.targetCount-=1,PersistencePromise.resolve()}removeTargets(e,r,i){let s=0,o=[];return this.si.forEach((l,h)=>{h.sequenceNumber<=r&&null===i.get(h.targetId)&&(this.si.delete(l),o.push(this.removeMatchingKeysForTargetId(e,h.targetId)),s++)}),PersistencePromise.waitFor(o).next(()=>s)}getTargetCount(e){return PersistencePromise.resolve(this.targetCount)}getTargetData(e,r){let i=this.si.get(r)||null;return PersistencePromise.resolve(i)}addMatchingKeys(e,r,i){return this._i.Wr(r,i),PersistencePromise.resolve()}removeMatchingKeys(e,r,i){this._i.zr(r,i);let s=this.persistence.referenceDelegate,o=[];return s&&r.forEach(r=>{o.push(s.markPotentiallyOrphaned(e,r))}),PersistencePromise.waitFor(o)}removeMatchingKeysForTargetId(e,r){return this._i.jr(r),PersistencePromise.resolve()}getMatchingKeysForTargetId(e,r){let i=this._i.Hr(r);return PersistencePromise.resolve(i)}containsKey(e,r){return PersistencePromise.resolve(this._i.containsKey(r))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryPersistence=class __PRIVATE_MemoryPersistence{constructor(e,r){this.ui={},this.overlays={},this.ci=new __PRIVATE_ListenSequence(0),this.li=!1,this.li=!0,this.hi=new __PRIVATE_MemoryGlobalsCache,this.referenceDelegate=e(this),this.Pi=new __PRIVATE_MemoryTargetCache(this),this.indexManager=new __PRIVATE_MemoryIndexManager,this.remoteDocumentCache=new __PRIVATE_MemoryRemoteDocumentCacheImpl(e=>this.referenceDelegate.Ti(e)),this.serializer=new __PRIVATE_LocalSerializer(r),this.Ii=new __PRIVATE_MemoryBundleCache(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let r=this.overlays[e.toKey()];return r||(r=new __PRIVATE_MemoryDocumentOverlayCache,this.overlays[e.toKey()]=r),r}getMutationQueue(e,r){let i=this.ui[e.toKey()];return i||(i=new __PRIVATE_MemoryMutationQueue(r,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,r,i){__PRIVATE_logDebug("MemoryPersistence","Starting transaction:",e);let s=new __PRIVATE_MemoryTransaction(this.ci.next());return this.referenceDelegate.Ei(),i(s).next(e=>this.referenceDelegate.di(s).next(()=>e)).toPromise().then(e=>(s.raiseOnCommittedEvent(),e))}Ai(e,r){return PersistencePromise.or(Object.values(this.ui).map(i=>()=>i.containsKey(e,r)))}};let __PRIVATE_MemoryTransaction=class __PRIVATE_MemoryTransaction extends PersistenceTransaction{constructor(e){super(),this.currentSequenceNumber=e}};let __PRIVATE_MemoryEagerDelegate=class __PRIVATE_MemoryEagerDelegate{constructor(e){this.persistence=e,this.Ri=new __PRIVATE_ReferenceSet,this.Vi=null}static mi(e){return new __PRIVATE_MemoryEagerDelegate(e)}get fi(){if(this.Vi)return this.Vi;throw fail(60996)}addReference(e,r,i){return this.Ri.addReference(i,r),this.fi.delete(i.toString()),PersistencePromise.resolve()}removeReference(e,r,i){return this.Ri.removeReference(i,r),this.fi.add(i.toString()),PersistencePromise.resolve()}markPotentiallyOrphaned(e,r){return this.fi.add(r.toString()),PersistencePromise.resolve()}removeTarget(e,r){this.Ri.jr(r.targetId).forEach(e=>this.fi.add(e.toString()));let i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,r.targetId).next(e=>{e.forEach(e=>this.fi.add(e.toString()))}).next(()=>i.removeTargetData(e,r))}Ei(){this.Vi=new Set}di(e){let r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return PersistencePromise.forEach(this.fi,i=>{let s=DocumentKey.fromPath(i);return this.gi(e,s).next(e=>{e||r.removeEntry(s,SnapshotVersion.min())})}).next(()=>(this.Vi=null,r.apply(e)))}updateLimboDocument(e,r){return this.gi(e,r).next(e=>{e?this.fi.delete(r.toString()):this.fi.add(r.toString())})}Ti(e){return 0}gi(e,r){return PersistencePromise.or([()=>PersistencePromise.resolve(this.Ri.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(e,r),()=>this.persistence.Ai(e,r)])}};let __PRIVATE_MemoryLruDelegate=class __PRIVATE_MemoryLruDelegate{constructor(e,r){this.persistence=e,this.pi=new ObjectMap(e=>(function(e){var r,i;let s="";for(let r=0;r<e.length;r++)s.length>0&&(s=s+"\x01\x01"),s=function(e,r){let i=r,s=e.length;for(let r=0;r<s;r++){let s=e.charAt(r);switch(s){case"\x00":i+="\x01\x10";break;case"\x01":i+="\x01\x11";break;default:i+=s}}return i}(e.get(r),s);return s+"\x01\x01"})(e.path),(e,r)=>e.isEqual(r)),this.garbageCollector=new __PRIVATE_LruGarbageCollectorImpl(this,r)}static mi(e,r){return new __PRIVATE_MemoryLruDelegate(e,r)}Ei(){}di(e){return PersistencePromise.resolve()}forEachTarget(e,r){return this.persistence.getTargetCache().forEachTarget(e,r)}gr(e){let r=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>r.next(r=>e+r))}wr(e){let r=0;return this.pr(e,e=>{r++}).next(()=>r)}pr(e,r){return PersistencePromise.forEach(this.pi,(i,s)=>this.br(e,i,s).next(e=>e?PersistencePromise.resolve():r(s)))}removeTargets(e,r,i){return this.persistence.getTargetCache().removeTargets(e,r,i)}removeOrphanedDocuments(e,r){let i=0,s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(e,s=>this.br(e,s,r).next(e=>{e||(i++,o.removeEntry(s,SnapshotVersion.min()))})).next(()=>o.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,r){return this.pi.set(r,e.currentSequenceNumber),PersistencePromise.resolve()}removeTarget(e,r){let i=r.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,r,i){return this.pi.set(i,e.currentSequenceNumber),PersistencePromise.resolve()}removeReference(e,r,i){return this.pi.set(i,e.currentSequenceNumber),PersistencePromise.resolve()}updateLimboDocument(e,r){return this.pi.set(r,e.currentSequenceNumber),PersistencePromise.resolve()}Ti(e){let r=e.key.toString().length;return e.isFoundDocument()&&(r+=function __PRIVATE_estimateByteSize(e){switch(__PRIVATE_typeOrder(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let r=__PRIVATE_getPreviousValue(e);return r?16+__PRIVATE_estimateByteSize(r):16;case 5:return 2*e.stringValue.length;case 6:return __PRIVATE_normalizeByteString(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(e.arrayValue.values||[]).reduce((e,r)=>e+__PRIVATE_estimateByteSize(r),0);case 10:case 11:var i;let s;return i=e.mapValue,s=0,forEach(i.fields,(e,r)=>{s+=e.length+__PRIVATE_estimateByteSize(r)}),s;default:throw fail(13486,{value:e})}}(e.data.value)),r}br(e,r,i){return PersistencePromise.or([()=>this.persistence.Ai(e,r),()=>this.persistence.getTargetCache().containsKey(e,r),()=>{let e=this.pi.get(r);return PersistencePromise.resolve(void 0!==e&&e>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_LocalViewChanges=class __PRIVATE_LocalViewChanges{constructor(e,r,i,s){this.targetId=e,this.fromCache=r,this.Es=i,this.ds=s}static As(e,r){let i=__PRIVATE_documentKeySet(),s=__PRIVATE_documentKeySet();for(let e of r.docChanges)switch(e.type){case 0:i=i.add(e.doc.key);break;case 1:s=s.add(e.doc.key)}return new __PRIVATE_LocalViewChanges(e,r.fromCache,i,s)}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QueryContext=class QueryContext{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_QueryEngine=class __PRIVATE_QueryEngine{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(0,eA.G6)()?8:function(e){let r=e.match(/Android ([\d.]+)/i),i=r?r[1].split(".").slice(0,2).join("."):"-1";return Number(i)}((0,eA.z$)())>0?6:4}initialize(e,r){this.ps=e,this.indexManager=r,this.Rs=!0}getDocumentsMatchingQuery(e,r,i,s){let o={result:null};return this.ys(e,r).next(e=>{o.result=e}).next(()=>{if(!o.result)return this.ws(e,r,s,i).next(e=>{o.result=e})}).next(()=>{if(o.result)return;let i=new QueryContext;return this.Ss(e,r,i).next(s=>{if(o.result=s,this.Vs)return this.bs(e,r,i,s.size)})}).next(()=>o.result)}bs(e,r,i,s){return i.documentReadCount<this.fs?(__PRIVATE_getLogLevel()<=eN.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","SDK will not create cache indexes for query:",__PRIVATE_stringifyQuery(r),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),PersistencePromise.resolve()):(__PRIVATE_getLogLevel()<=eN.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","Query:",__PRIVATE_stringifyQuery(r),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.gs*s?(__PRIVATE_getLogLevel()<=eN.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","The SDK decides to create cache indexes for query:",__PRIVATE_stringifyQuery(r),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,__PRIVATE_queryToTarget(r))):PersistencePromise.resolve())}ys(e,r){if(__PRIVATE_queryMatchesAllDocuments(r))return PersistencePromise.resolve(null);let i=__PRIVATE_queryToTarget(r);return this.indexManager.getIndexType(e,i).next(s=>0===s?null:(null!==r.limit&&1===s&&(i=__PRIVATE_queryToTarget(r=__PRIVATE_queryWithLimit(r,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{let o=__PRIVATE_documentKeySet(...s);return this.ps.getDocuments(e,o).next(s=>this.indexManager.getMinOffset(e,i).next(i=>{let l=this.Ds(r,s);return this.Cs(r,l,o,i.readTime)?this.ys(e,__PRIVATE_queryWithLimit(r,null,"F")):this.vs(e,l,r,i)}))})))}ws(e,r,i,s){return __PRIVATE_queryMatchesAllDocuments(r)||s.isEqual(SnapshotVersion.min())?PersistencePromise.resolve(null):this.ps.getDocuments(e,i).next(o=>{let l=this.Ds(r,o);return this.Cs(r,l,i,s)?PersistencePromise.resolve(null):(__PRIVATE_getLogLevel()<=eN.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),__PRIVATE_stringifyQuery(r)),this.vs(e,l,r,function(e,r){let i=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,o=SnapshotVersion.fromTimestamp(1e9===s?new Timestamp(i+1,0):new Timestamp(i,s));return new IndexOffset(o,DocumentKey.empty(),-1)}(s,0)).next(e=>e))})}Ds(e,r){let i=new SortedSet(__PRIVATE_newQueryComparator(e));return r.forEach((r,s)=>{__PRIVATE_queryMatches(e,s)&&(i=i.add(s))}),i}Cs(e,r,i,s){if(null===e.limit)return!1;if(i.size!==r.size)return!0;let o="F"===e.limitType?r.last():r.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(e,r,i){return __PRIVATE_getLogLevel()<=eN.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","Using full collection scan to execute query:",__PRIVATE_stringifyQuery(r)),this.ps.getDocumentsMatchingQuery(e,r,IndexOffset.min(),i)}vs(e,r,i,s){return this.ps.getDocumentsMatchingQuery(e,i,s).next(e=>(r.forEach(r=>{e=e.insert(r.key,r)}),e))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tY="LocalStore";let __PRIVATE_LocalStoreImpl=class __PRIVATE_LocalStoreImpl{constructor(e,r,i,s){this.persistence=e,this.Fs=r,this.serializer=s,this.Ms=new SortedMap(__PRIVATE_primitiveComparator),this.xs=new ObjectMap(e=>__PRIVATE_canonifyTarget(e),__PRIVATE_targetEquals),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LocalDocumentsView(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",r=>e.collect(r,this.Ms))}};async function __PRIVATE_localStoreHandleUserChange(e,r){return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e.Bs(r),e.mutationQueue.getAllMutationBatches(i))).next(r=>{let o=[],l=[],h=__PRIVATE_documentKeySet();for(let e of s)for(let r of(o.push(e.batchId),e.mutations))h=h.add(r.key);for(let e of r)for(let r of(l.push(e.batchId),e.mutations))h=h.add(r.key);return e.localDocuments.getDocuments(i,h).next(e=>({Ls:e,removedBatchIds:o,addedBatchIds:l}))})})}function __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",r=>e.Pi.getLastRemoteSnapshotVersion(r))}async function __PRIVATE_localStoreReleaseTarget(e,r,i){let s=e.Ms.get(r);try{i||await e.persistence.runTransaction("Release target",i?"readwrite":"readwrite-primary",r=>e.persistence.referenceDelegate.removeTarget(r,s))}catch(e){if(!__PRIVATE_isIndexedDbTransactionError(e))throw e;__PRIVATE_logDebug(tY,`Failed to update sequence numbers for target ${r}: ${e}`)}e.Ms=e.Ms.remove(r),e.xs.delete(s.target)}function __PRIVATE_localStoreExecuteQuery(e,r,i){let s=SnapshotVersion.min(),o=__PRIVATE_documentKeySet();return e.persistence.runTransaction("Execute query","readwrite",l=>(function(e,r,i){let s=e.xs.get(i);return void 0!==s?PersistencePromise.resolve(e.Ms.get(s)):e.Pi.getTargetData(r,i)})(e,l,__PRIVATE_queryToTarget(r)).next(r=>{if(r)return s=r.lastLimboFreeSnapshotVersion,e.Pi.getMatchingKeysForTargetId(l,r.targetId).next(e=>{o=e})}).next(()=>e.Fs.getDocumentsMatchingQuery(l,r,i?s:SnapshotVersion.min(),i?o:__PRIVATE_documentKeySet())).next(i=>{var s;let l;return s=r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2)),l=e.Os.get(s)||SnapshotVersion.min(),i.forEach((e,r)=>{r.readTime.compareTo(l)>0&&(l=r.readTime)}),e.Os.set(s,l),{documents:i,Qs:o}}))}let __PRIVATE_LocalClientState=class __PRIVATE_LocalClientState{constructor(){this.activeTargetIds=tW}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};let __PRIVATE_MemorySharedClientState=class __PRIVATE_MemorySharedClientState{constructor(){this.Mo=new __PRIVATE_LocalClientState,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,r,i){}addLocalQueryTarget(e,r=!0){return r&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,r,i){this.xo[e]=r}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new __PRIVATE_LocalClientState,Promise.resolve()}handleUserChange(e,r,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_NoopConnectivityMonitor=class __PRIVATE_NoopConnectivityMonitor{Oo(e){}shutdown(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tJ="ConnectivityMonitor";let __PRIVATE_BrowserConnectivityMonitor=class __PRIVATE_BrowserConnectivityMonitor{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){for(let e of(__PRIVATE_logDebug(tJ,"Network connectivity changed: AVAILABLE"),this.qo))e(0)}ko(){for(let e of(__PRIVATE_logDebug(tJ,"Network connectivity changed: UNAVAILABLE"),this.qo))e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tX=null;function __PRIVATE_generateUniqueDebugId(){return null===tX?tX=268435456+Math.round(2147483648*Math.random()):tX++,"0x"+tX.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tZ="RestConnection",t0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};let __PRIVATE_RestConnection=class __PRIVATE_RestConnection{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=r+"://"+e.host,this.Ko=`projects/${i}/databases/${s}`,this.Wo=this.databaseId.database===tO?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Go(e,r,i,s,o){let l=__PRIVATE_generateUniqueDebugId(),h=this.zo(e,r.toUriEncodedString());__PRIVATE_logDebug(tZ,`Sending RPC '${e}' ${l}:`,h,i);let d={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(d,s,o);let{host:f}=new URL(h),_=(0,eA.Xx)(f);return this.Jo(e,h,d,i,_).then(r=>(__PRIVATE_logDebug(tZ,`Received RPC '${e}' ${l}: `,r),r),r=>{throw __PRIVATE_logWarn(tZ,`RPC '${e}' ${l} failed with error: `,r,"url: ",h,"request:",i),r})}Ho(e,r,i,s,o,l){return this.Go(e,r,i,s,o)}jo(e,r,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+tA,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((r,i)=>e[i]=r),i&&i.headers.forEach((r,i)=>e[i]=r)}zo(e,r){let i=t0[e];return`${this.Uo}/v1/${r}:${i}`}terminate(){}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_StreamBridge=class __PRIVATE_StreamBridge{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t1="WebChannelConnection";let __PRIVATE_WebChannelConnection=class __PRIVATE_WebChannelConnection extends __PRIVATE_RestConnection{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,r,i,s,o){let l=__PRIVATE_generateUniqueDebugId();return new Promise((o,h)=>{let d=new el;d.setWithCredentials(!0),d.listenOnce(eh.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case ed.NO_ERROR:let r=d.getResponseJson();__PRIVATE_logDebug(t1,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(r)),o(r);break;case ed.TIMEOUT:__PRIVATE_logDebug(t1,`RPC '${e}' ${l} timed out`),h(new FirestoreError(tw.DEADLINE_EXCEEDED,"Request time out"));break;case ed.HTTP_ERROR:let i=d.getStatus();if(__PRIVATE_logDebug(t1,`RPC '${e}' ${l} failed with status:`,i,"response text:",d.getResponseText()),i>0){let e=d.getResponseJson();Array.isArray(e)&&(e=e[0]);let r=e?.error;if(r&&r.status&&r.message){let e=function(e){let r=e.toLowerCase().replace(/_/g,"-");return Object.values(tw).indexOf(r)>=0?r:tw.UNKNOWN}(r.status);h(new FirestoreError(e,r.message))}else h(new FirestoreError(tw.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new FirestoreError(tw.UNAVAILABLE,"Connection failed."));break;default:fail(9055,{l_:e,streamId:l,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{__PRIVATE_logDebug(t1,`RPC '${e}' ${l} completed.`)}});let f=JSON.stringify(s);__PRIVATE_logDebug(t1,`RPC '${e}' ${l} sending request:`,s),d.send(r,"POST",f,i,15)})}T_(e,r,i){let s=__PRIVATE_generateUniqueDebugId(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=em(),h=e_(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;void 0!==f&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.jo(d.initMessageHeaders,r,i),d.encodeInitMessageHeaders=!0;let _=o.join("");__PRIVATE_logDebug(t1,`Creating RPC '${e}' stream ${s}: ${_}`,d);let g=l.createWebChannel(_,d);this.I_(g);let A=!1,b=!1,k=new __PRIVATE_StreamBridge({Yo:r=>{b?__PRIVATE_logDebug(t1,`Not sending because RPC '${e}' stream ${s} is closed:`,r):(A||(__PRIVATE_logDebug(t1,`Opening RPC '${e}' stream ${s} transport.`),g.open(),A=!0),__PRIVATE_logDebug(t1,`RPC '${e}' stream ${s} sending:`,r),g.send(r))},Zo:()=>g.close()}),__PRIVATE_unguardedEventListen=(e,r,i)=>{e.listen(r,e=>{try{i(e)}catch(e){setTimeout(()=>{throw e},0)}})};return __PRIVATE_unguardedEventListen(g,eu.EventType.OPEN,()=>{b||(__PRIVATE_logDebug(t1,`RPC '${e}' stream ${s} transport opened.`),k.o_())}),__PRIVATE_unguardedEventListen(g,eu.EventType.CLOSE,()=>{b||(b=!0,__PRIVATE_logDebug(t1,`RPC '${e}' stream ${s} transport closed`),k.a_(),this.E_(g))}),__PRIVATE_unguardedEventListen(g,eu.EventType.ERROR,r=>{b||(b=!0,__PRIVATE_logWarn(t1,`RPC '${e}' stream ${s} transport errored. Name:`,r.name,"Message:",r.message),k.a_(new FirestoreError(tw.UNAVAILABLE,"The operation could not be completed")))}),__PRIVATE_unguardedEventListen(g,eu.EventType.MESSAGE,r=>{if(!b){let i=r.data[0];__PRIVATE_hardAssert(!!i,16349);let o=i?.error||i[0]?.error;if(o){__PRIVATE_logDebug(t1,`RPC '${e}' stream ${s} received error:`,o);let r=o.status,i=function(e){let r=eg[e];if(void 0!==r)return __PRIVATE_mapCodeFromRpcCode(r)}(r),l=o.message;void 0===i&&(i=tw.INTERNAL,l="Unknown error status: "+r+" with message "+o.message),b=!0,k.a_(new FirestoreError(i,l)),g.close()}else __PRIVATE_logDebug(t1,`RPC '${e}' stream ${s} received:`,i),k.u_(i)}}),__PRIVATE_unguardedEventListen(h,ef.STAT_EVENT,r=>{r.stat===ep.PROXY?__PRIVATE_logDebug(t1,`RPC '${e}' stream ${s} detected buffering proxy`):r.stat===ep.NOPROXY&&__PRIVATE_logDebug(t1,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(r=>r===e)}};function getDocument(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_newSerializer(e){return new JsonProtoSerializer(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_ExponentialBackoff=class __PRIVATE_ExponentialBackoff{constructor(e,r,i=1e3,s=1.5,o=6e4){this.Mi=e,this.timerId=r,this.d_=i,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();let r=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,r-i);s>0&&__PRIVATE_logDebug("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${r} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t2="PersistentStream";let __PRIVATE_PersistentStream=class __PRIVATE_PersistentStream{constructor(e,r,i,s,o,l,h,d){this.Mi=e,this.S_=i,this.b_=s,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=h,this.listener=d,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new __PRIVATE_ExponentialBackoff(e,r)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,r){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():r&&r.code===tw.RESOURCE_EXHAUSTED?(__PRIVATE_logError(r.toString()),__PRIVATE_logError("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):r&&r.code===tw.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(r)}K_(){}auth(){this.state=1;let e=this.W_(this.D_),r=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,i])=>{this.D_===r&&this.G_(e,i)},r=>{e(()=>{let e=new FirestoreError(tw.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(e)})})}G_(e,r){let i=this.W_(this.D_);this.stream=this.j_(e,r),this.stream.Xo(()=>{i(()=>this.listener.Xo())}),this.stream.t_(()=>{i(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(e=>{i(()=>this.z_(e))}),this.stream.onMessage(e=>{i(()=>1==++this.F_?this.J_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return __PRIVATE_logDebug(t2,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return r=>{this.Mi.enqueueAndForget(()=>this.D_===e?r():(__PRIVATE_logDebug(t2,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}};let __PRIVATE_PersistentListenStream=class __PRIVATE_PersistentListenStream extends __PRIVATE_PersistentStream{constructor(e,r,i,s,o,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",r,i,s,l),this.serializer=o}j_(e,r){return this.connection.T_("Listen",e,r)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();let r=function(e,r){let i;if("targetChange"in r){var s,o;r.targetChange;let l="NO_CHANGE"===(s=r.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===s?1:"REMOVE"===s?2:"CURRENT"===s?3:"RESET"===s?4:fail(39313,{state:s}),h=r.targetChange.targetIds||[],d=(o=r.targetChange.resumeToken,e.useProto3Json?(__PRIVATE_hardAssert(void 0===o||"string"==typeof o,58123),ByteString.fromBase64String(o||"")):(__PRIVATE_hardAssert(void 0===o||o instanceof tT||o instanceof Uint8Array,16193),ByteString.fromUint8Array(o||new Uint8Array))),f=r.targetChange.cause,_=f&&function(e){let r=void 0===e.code?tw.UNKNOWN:__PRIVATE_mapCodeFromRpcCode(e.code);return new FirestoreError(r,e.message||"")}(f);i=new __PRIVATE_WatchTargetChange(l,h,d,_||null)}else if("documentChange"in r){r.documentChange;let s=r.documentChange;s.document,s.document.name,s.document.updateTime;let o=fromName(e,s.document.name),l=__PRIVATE_fromVersion(s.document.updateTime),h=s.document.createTime?__PRIVATE_fromVersion(s.document.createTime):SnapshotVersion.min(),d=new ObjectValue({mapValue:{fields:s.document.fields}}),f=MutableDocument.newFoundDocument(o,l,h,d),_=s.targetIds||[],g=s.removedTargetIds||[];i=new __PRIVATE_DocumentWatchChange(_,g,f.key,f)}else if("documentDelete"in r){r.documentDelete;let s=r.documentDelete;s.document;let o=fromName(e,s.document),l=s.readTime?__PRIVATE_fromVersion(s.readTime):SnapshotVersion.min(),h=MutableDocument.newNoDocument(o,l),d=s.removedTargetIds||[];i=new __PRIVATE_DocumentWatchChange([],d,h.key,h)}else if("documentRemove"in r){r.documentRemove;let s=r.documentRemove;s.document;let o=fromName(e,s.document),l=s.removedTargetIds||[];i=new __PRIVATE_DocumentWatchChange([],l,o,null)}else{if(!("filter"in r))return fail(11601,{Rt:r});{r.filter;let e=r.filter;e.targetId;let{count:s=0,unchangedNames:o}=e,l=new ExistenceFilter(s,o),h=e.targetId;i=new __PRIVATE_ExistenceFilterChange(h,l)}}return i}(this.serializer,e),i=function(e){if(!("targetChange"in e))return SnapshotVersion.min();let r=e.targetChange;return r.targetIds&&r.targetIds.length?SnapshotVersion.min():r.readTime?__PRIVATE_fromVersion(r.readTime):SnapshotVersion.min()}(e);return this.listener.H_(r,i)}Y_(e){let r={};r.database=__PRIVATE_getEncodedDatabaseId(this.serializer),r.addTarget=function(e,r){let i;let s=r.target;if((i=__PRIVATE_targetIsDocumentTarget(s)?{documents:{documents:[__PRIVATE_toQueryPath(e,s.path)]}}:{query:function(e,r){var i,s;let o;let l={structuredQuery:{}},h=r.path;null!==r.collectionGroup?(o=h,l.structuredQuery.from=[{collectionId:r.collectionGroup,allDescendants:!0}]):(o=h.popLast(),l.structuredQuery.from=[{collectionId:h.lastSegment()}]),l.parent=__PRIVATE_toQueryPath(e,o);let d=function(e){if(0!==e.length)return function __PRIVATE_toFilter(e){return e instanceof FieldFilter?function(e){if("=="===e.op){if(__PRIVATE_isNanValue(e.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(e.field),op:"IS_NAN"}};if(__PRIVATE_isNullValue(e.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(__PRIVATE_isNanValue(e.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(e.field),op:"IS_NOT_NAN"}};if(__PRIVATE_isNullValue(e.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:__PRIVATE_toFieldPathReference(e.field),op:t$[e.op],value:e.value}}}(e):e instanceof CompositeFilter?function(e){let r=e.getFilters().map(e=>__PRIVATE_toFilter(e));return 1===r.length?r[0]:{compositeFilter:{op:tK[e.op],filters:r}}}(e):fail(54877,{filter:e})}(CompositeFilter.create(e,"and"))}(r.filters);d&&(l.structuredQuery.where=d);let f=function(e){if(0!==e.length)return e.map(e=>({field:__PRIVATE_toFieldPathReference(e.field),direction:tz[e.dir]}))}(r.orderBy);f&&(l.structuredQuery.orderBy=f);let _=__PRIVATE_toInt32Proto(e,r.limit);return null!==_&&(l.structuredQuery.limit=_),r.startAt&&(l.structuredQuery.startAt={before:(i=r.startAt).inclusive,values:i.position}),r.endAt&&(l.structuredQuery.endAt={before:!(s=r.endAt).inclusive,values:s.position}),{ft:l,parent:o}}(e,s).ft}).targetId=r.targetId,r.resumeToken.approximateByteSize()>0){i.resumeToken=__PRIVATE_toBytes(e,r.resumeToken);let s=__PRIVATE_toInt32Proto(e,r.expectedCount);null!==s&&(i.expectedCount=s)}else if(r.snapshotVersion.compareTo(SnapshotVersion.min())>0){i.readTime=toTimestamp(e,r.snapshotVersion.toTimestamp());let s=__PRIVATE_toInt32Proto(e,r.expectedCount);null!==s&&(i.expectedCount=s)}return i}(this.serializer,e);let i=function(e,r){let i=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fail(28987,{purpose:e})}}(r.purpose);return null==i?null:{"goog-listen-tags":i}}(this.serializer,e);i&&(r.labels=i),this.q_(r)}Z_(e){let r={};r.database=__PRIVATE_getEncodedDatabaseId(this.serializer),r.removeTarget=e,this.q_(r)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Datastore=class Datastore{};let __PRIVATE_DatastoreImpl=class __PRIVATE_DatastoreImpl extends Datastore{constructor(e,r,i,s){super(),this.authCredentials=e,this.appCheckCredentials=r,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new FirestoreError(tw.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Go(e,__PRIVATE_toResourcePath(r,i),s,o,l)).catch(e=>{throw"FirebaseError"===e.name?(e.code===tw.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new FirestoreError(tw.UNKNOWN,e.toString())})}Ho(e,r,i,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Ho(e,__PRIVATE_toResourcePath(r,i),s,l,h,o)).catch(e=>{throw"FirebaseError"===e.name?(e.code===tw.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new FirestoreError(tw.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}};let __PRIVATE_OnlineStateTracker=class __PRIVATE_OnlineStateTracker{constructor(e,r){this.asyncQueue=e,this.onlineStateHandler=r,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){let r=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(__PRIVATE_logError(r),this.aa=!1):__PRIVATE_logDebug("OnlineStateTracker",r)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t4="RemoteStore";let __PRIVATE_RemoteStoreImpl=class __PRIVATE_RemoteStoreImpl{constructor(e,r,i,s,o){this.localStore=e,this.datastore=r,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(e=>{i.enqueueAndForget(async()=>{__PRIVATE_canUseNetwork(this)&&(__PRIVATE_logDebug(t4,"Restarting streams for network reachability change."),await async function(e){e.Ea.add(4),await __PRIVATE_disableNetworkInternal(e),e.Ra.set("Unknown"),e.Ea.delete(4),await __PRIVATE_enableNetworkInternal(e)}(this))})}),this.Ra=new __PRIVATE_OnlineStateTracker(i,s)}};async function __PRIVATE_enableNetworkInternal(e){if(__PRIVATE_canUseNetwork(e))for(let r of e.da)await r(!0)}async function __PRIVATE_disableNetworkInternal(e){for(let r of e.da)await r(!1)}function __PRIVATE_remoteStoreListen(e,r){e.Ia.has(r.targetId)||(e.Ia.set(r.targetId,r),__PRIVATE_shouldStartWatchStream(e)?__PRIVATE_startWatchStream(e):__PRIVATE_ensureWatchStream(e).O_()&&__PRIVATE_sendWatchRequest(e,r))}function __PRIVATE_remoteStoreUnlisten(e,r){let i=__PRIVATE_ensureWatchStream(e);e.Ia.delete(r),i.O_()&&__PRIVATE_sendUnwatchRequest(e,r),0===e.Ia.size&&(i.O_()?i.L_():__PRIVATE_canUseNetwork(e)&&e.Ra.set("Unknown"))}function __PRIVATE_sendWatchRequest(e,r){if(e.Va.Ue(r.targetId),r.resumeToken.approximateByteSize()>0||r.snapshotVersion.compareTo(SnapshotVersion.min())>0){let i=e.remoteSyncer.getRemoteKeysForTarget(r.targetId).size;r=r.withExpectedCount(i)}__PRIVATE_ensureWatchStream(e).Y_(r)}function __PRIVATE_sendUnwatchRequest(e,r){e.Va.Ue(r),__PRIVATE_ensureWatchStream(e).Z_(r)}function __PRIVATE_startWatchStream(e){e.Va=new __PRIVATE_WatchChangeAggregator({getRemoteKeysForTarget:r=>e.remoteSyncer.getRemoteKeysForTarget(r),At:r=>e.Ia.get(r)||null,ht:()=>e.datastore.serializer.databaseId}),__PRIVATE_ensureWatchStream(e).start(),e.Ra.ua()}function __PRIVATE_shouldStartWatchStream(e){return __PRIVATE_canUseNetwork(e)&&!__PRIVATE_ensureWatchStream(e).x_()&&e.Ia.size>0}function __PRIVATE_canUseNetwork(e){return 0===e.Ea.size}async function __PRIVATE_onWatchStreamConnected(e){e.Ra.set("Online")}async function __PRIVATE_onWatchStreamOpen(e){e.Ia.forEach((r,i)=>{__PRIVATE_sendWatchRequest(e,r)})}async function __PRIVATE_onWatchStreamClose(e,r){e.Va=void 0,__PRIVATE_shouldStartWatchStream(e)?(e.Ra.ha(r),__PRIVATE_startWatchStream(e)):e.Ra.set("Unknown")}async function __PRIVATE_onWatchStreamChange(e,r,i){if(e.Ra.set("Online"),r instanceof __PRIVATE_WatchTargetChange&&2===r.state&&r.cause)try{await async function(e,r){let i=r.cause;for(let s of r.targetIds)e.Ia.has(s)&&(await e.remoteSyncer.rejectListen(s,i),e.Ia.delete(s),e.Va.removeTarget(s))}(e,r)}catch(i){__PRIVATE_logDebug(t4,"Failed to remove targets %s: %s ",r.targetIds.join(","),i),await __PRIVATE_disableNetworkUntilRecovery(e,i)}else if(r instanceof __PRIVATE_DocumentWatchChange?e.Va.Ze(r):r instanceof __PRIVATE_ExistenceFilterChange?e.Va.st(r):e.Va.tt(r),!i.isEqual(SnapshotVersion.min()))try{let r=await __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e.localStore);i.compareTo(r)>=0&&await function(e,r){let i=e.Va.Tt(r);return i.targetChanges.forEach((i,s)=>{if(i.resumeToken.approximateByteSize()>0){let o=e.Ia.get(s);o&&e.Ia.set(s,o.withResumeToken(i.resumeToken,r))}}),i.targetMismatches.forEach((r,i)=>{let s=e.Ia.get(r);if(!s)return;e.Ia.set(r,s.withResumeToken(ByteString.EMPTY_BYTE_STRING,s.snapshotVersion)),__PRIVATE_sendUnwatchRequest(e,r);let o=new TargetData(s.target,r,i,s.sequenceNumber);__PRIVATE_sendWatchRequest(e,o)}),e.remoteSyncer.applyRemoteEvent(i)}(e,i)}catch(r){__PRIVATE_logDebug(t4,"Failed to raise snapshot:",r),await __PRIVATE_disableNetworkUntilRecovery(e,r)}}async function __PRIVATE_disableNetworkUntilRecovery(e,r,i){if(!__PRIVATE_isIndexedDbTransactionError(r))throw r;e.Ea.add(1),await __PRIVATE_disableNetworkInternal(e),e.Ra.set("Offline"),i||(i=()=>__PRIVATE_localStoreGetLastRemoteSnapshotVersion(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{__PRIVATE_logDebug(t4,"Retrying IndexedDB access"),await i(),e.Ea.delete(1),await __PRIVATE_enableNetworkInternal(e)})}async function __PRIVATE_remoteStoreHandleCredentialChange(e,r){e.asyncQueue.verifyOperationInProgress(),__PRIVATE_logDebug(t4,"RemoteStore received new credentials");let i=__PRIVATE_canUseNetwork(e);e.Ea.add(3),await __PRIVATE_disableNetworkInternal(e),i&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(r),e.Ea.delete(3),await __PRIVATE_enableNetworkInternal(e)}async function __PRIVATE_remoteStoreApplyPrimaryState(e,r){r?(e.Ea.delete(2),await __PRIVATE_enableNetworkInternal(e)):r||(e.Ea.add(2),await __PRIVATE_disableNetworkInternal(e),e.Ra.set("Unknown"))}function __PRIVATE_ensureWatchStream(e){var r,i,s;return e.ma||(e.ma=(r=e.datastore,i=e.asyncQueue,s={Xo:__PRIVATE_onWatchStreamConnected.bind(null,e),t_:__PRIVATE_onWatchStreamOpen.bind(null,e),r_:__PRIVATE_onWatchStreamClose.bind(null,e),H_:__PRIVATE_onWatchStreamChange.bind(null,e)},r.sa(),new __PRIVATE_PersistentListenStream(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)),e.da.push(async r=>{r?(e.ma.B_(),__PRIVATE_shouldStartWatchStream(e)?__PRIVATE_startWatchStream(e):e.Ra.set("Unknown")):(await e.ma.stop(),e.Va=void 0)})),e.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DelayedOperation=class DelayedOperation{constructor(e,r,i,s,o){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new __PRIVATE_Deferred,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,r,i,s,o){let l=Date.now()+i,h=new DelayedOperation(e,r,l,s,o);return h.start(i),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new FirestoreError(tw.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function __PRIVATE_wrapInUserErrorIfRecoverable(e,r){if(__PRIVATE_logError("AsyncQueue",`${r}: ${e}`),__PRIVATE_isIndexedDbTransactionError(e))return new FirestoreError(tw.UNAVAILABLE,`${r}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DocumentSet=class DocumentSet{static emptySet(e){return new DocumentSet(e.comparator)}constructor(e){this.comparator=e?(r,i)=>e(r,i)||DocumentKey.comparator(r.key,i.key):(e,r)=>DocumentKey.comparator(e.key,r.key),this.keyedMap=documentMap(),this.sortedSet=new SortedMap(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let r=this.keyedMap.get(e);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((r,i)=>(e(r),!1))}add(e){let r=this.delete(e.key);return r.copy(r.keyedMap.insert(e.key,e),r.sortedSet.insert(e,null))}delete(e){let r=this.get(e);return r?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(r)):this}isEqual(e){if(!(e instanceof DocumentSet)||this.size!==e.size)return!1;let r=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;r.hasNext();){let e=r.getNext().key,s=i.getNext().key;if(!e.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(r=>{e.push(r.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,r){let i=new DocumentSet;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=r,i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_DocumentChangeSet=class __PRIVATE_DocumentChangeSet{constructor(){this.ga=new SortedMap(DocumentKey.comparator)}track(e){let r=e.doc.key,i=this.ga.get(r);i?0!==e.type&&3===i.type?this.ga=this.ga.insert(r,e):3===e.type&&1!==i.type?this.ga=this.ga.insert(r,{type:i.type,doc:e.doc}):2===e.type&&2===i.type?this.ga=this.ga.insert(r,{type:2,doc:e.doc}):2===e.type&&0===i.type?this.ga=this.ga.insert(r,{type:0,doc:e.doc}):1===e.type&&0===i.type?this.ga=this.ga.remove(r):1===e.type&&2===i.type?this.ga=this.ga.insert(r,{type:1,doc:i.doc}):0===e.type&&1===i.type?this.ga=this.ga.insert(r,{type:2,doc:e.doc}):fail(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(r,e)}ya(){let e=[];return this.ga.inorderTraversal((r,i)=>{e.push(i)}),e}};let ViewSnapshot=class ViewSnapshot{constructor(e,r,i,s,o,l,h,d,f){this.query=e,this.docs=r,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=o,this.fromCache=l,this.syncStateChanged=h,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(e,r,i,s,o){let l=[];return r.forEach(e=>{l.push({type:0,doc:e})}),new ViewSnapshot(e,r,DocumentSet.emptySet(r),l,i,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&__PRIVATE_queryEquals(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let r=this.docChanges,i=e.docChanges;if(r.length!==i.length)return!1;for(let e=0;e<r.length;e++)if(r[e].type!==i[e].type||!r[e].doc.isEqual(i[e].doc))return!1;return!0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_QueryListenersInfo=class __PRIVATE_QueryListenersInfo{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}};let __PRIVATE_EventManagerImpl=class __PRIVATE_EventManagerImpl{constructor(){this.queries=__PRIVATE_newQueriesObjectMap(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,r){let i=e.queries;e.queries=__PRIVATE_newQueriesObjectMap(),i.forEach((e,i)=>{for(let e of i.Sa)e.onError(r)})}(this,new FirestoreError(tw.ABORTED,"Firestore shutting down"))}};function __PRIVATE_newQueriesObjectMap(){return new ObjectMap(e=>__PRIVATE_canonifyQuery(e),__PRIVATE_queryEquals)}async function __PRIVATE_eventManagerListen(e,r){let i=3,s=r.query,o=e.queries.get(s);o?!o.ba()&&r.Da()&&(i=2):(o=new __PRIVATE_QueryListenersInfo,i=r.Da()?0:1);try{switch(i){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(i){let e=__PRIVATE_wrapInUserErrorIfRecoverable(i,`Initialization of query '${__PRIVATE_stringifyQuery(r.query)}' failed`);return void r.onError(e)}e.queries.set(s,o),o.Sa.push(r),r.va(e.onlineState),o.wa&&r.Fa(o.wa)&&__PRIVATE_raiseSnapshotsInSyncEvent(e)}async function __PRIVATE_eventManagerUnlisten(e,r){let i=r.query,s=3,o=e.queries.get(i);if(o){let e=o.Sa.indexOf(r);e>=0&&(o.Sa.splice(e,1),0===o.Sa.length?s=r.Da()?0:1:!o.ba()&&r.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function __PRIVATE_eventManagerOnWatchChange(e,r){let i=!1;for(let s of r){let r=s.query,o=e.queries.get(r);if(o){for(let e of o.Sa)e.Fa(s)&&(i=!0);o.wa=s}}i&&__PRIVATE_raiseSnapshotsInSyncEvent(e)}function __PRIVATE_eventManagerOnWatchError(e,r,i){let s=e.queries.get(r);if(s)for(let e of s.Sa)e.onError(i);e.queries.delete(r)}function __PRIVATE_raiseSnapshotsInSyncEvent(e){e.Ca.forEach(e=>{e.next()})}(eI=eE||(eE={})).Ma="default",eI.Cache="cache";let __PRIVATE_QueryListener=class __PRIVATE_QueryListener{constructor(e,r,i){this.query=e,this.xa=r,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)3!==i.type&&r.push(i);e=new ViewSnapshot(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),r=!0):this.La(e,this.onlineState)&&(this.ka(e),r=!0),this.Na=e,r}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let r=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),r=!0),r}La(e,r){return!(e.fromCache&&this.Da())||(!this.options.qa||!("Offline"!==r))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===r)}Ba(e){if(e.docChanges.length>0)return!0;let r=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!r)&&!0===this.options.includeMetadataChanges}ka(e){e=ViewSnapshot.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==eE.Cache}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_AddedLimboDocument=class __PRIVATE_AddedLimboDocument{constructor(e){this.key=e}};let __PRIVATE_RemovedLimboDocument=class __PRIVATE_RemovedLimboDocument{constructor(e){this.key=e}};let __PRIVATE_View=class __PRIVATE_View{constructor(e,r){this.query=e,this.Ya=r,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=__PRIVATE_documentKeySet(),this.mutatedKeys=__PRIVATE_documentKeySet(),this.eu=__PRIVATE_newQueryComparator(e),this.tu=new DocumentSet(this.eu)}get nu(){return this.Ya}ru(e,r){let i=r?r.iu:new __PRIVATE_DocumentChangeSet,s=r?r.tu:this.tu,o=r?r.mutatedKeys:this.mutatedKeys,l=s,h=!1,d="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,f="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((e,r)=>{let _=s.get(e),g=__PRIVATE_queryMatches(this.query,r)?r:null,A=!!_&&this.mutatedKeys.has(_.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations),k=!1;_&&g?_.data.isEqual(g.data)?A!==b&&(i.track({type:3,doc:g}),k=!0):this.su(_,g)||(i.track({type:2,doc:g}),k=!0,(d&&this.eu(g,d)>0||f&&0>this.eu(g,f))&&(h=!0)):!_&&g?(i.track({type:0,doc:g}),k=!0):_&&!g&&(i.track({type:1,doc:_}),k=!0,(d||f)&&(h=!0)),k&&(g?(l=l.add(g),o=b?o.add(e):o.delete(e)):(l=l.delete(e),o=o.delete(e)))}),null!==this.query.limit)for(;l.size>this.query.limit;){let e="F"===this.query.limitType?l.last():l.first();l=l.delete(e.key),o=o.delete(e.key),i.track({type:1,doc:e})}return{tu:l,iu:i,Cs:h,mutatedKeys:o}}su(e,r){return e.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(e,r,i,s){let o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;let l=e.iu.ya();l.sort((e,r)=>(function(e,r){let order=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fail(20277,{Rt:e})}};return order(e)-order(r)})(e.type,r.type)||this.eu(e.doc,r.doc)),this.ou(i),s=s??!1;let h=r&&!s?this._u():[],d=0===this.Xa.size&&this.current&&!s?1:0,f=d!==this.Za;return(this.Za=d,0!==l.length||f)?{snapshot:new ViewSnapshot(this.query,e.tu,o,l,e.mutatedKeys,0===d,f,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:h}:{au:h}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tu:this.tu,iu:new __PRIVATE_DocumentChangeSet,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=e.current)}_u(){if(!this.current)return[];let e=this.Xa;this.Xa=__PRIVATE_documentKeySet(),this.tu.forEach(e=>{this.uu(e.key)&&(this.Xa=this.Xa.add(e.key))});let r=[];return e.forEach(e=>{this.Xa.has(e)||r.push(new __PRIVATE_RemovedLimboDocument(e))}),this.Xa.forEach(i=>{e.has(i)||r.push(new __PRIVATE_AddedLimboDocument(i))}),r}cu(e){this.Ya=e.Qs,this.Xa=__PRIVATE_documentKeySet();let r=this.ru(e.documents);return this.applyChanges(r,!0)}lu(){return ViewSnapshot.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Za,this.hasCachedResults)}};let t6="SyncEngine";let __PRIVATE_QueryView=class __PRIVATE_QueryView{constructor(e,r,i){this.query=e,this.targetId=r,this.view=i}};let LimboResolution=class LimboResolution{constructor(e){this.key=e,this.hu=!1}};let __PRIVATE_SyncEngineImpl=class __PRIVATE_SyncEngineImpl{constructor(e,r,i,s,o,l){this.localStore=e,this.remoteStore=r,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new ObjectMap(e=>__PRIVATE_canonifyQuery(e),__PRIVATE_queryEquals),this.Iu=new Map,this.Eu=new Set,this.du=new SortedMap(DocumentKey.comparator),this.Au=new Map,this.Ru=new __PRIVATE_ReferenceSet,this.Vu={},this.mu=new Map,this.fu=__PRIVATE_TargetIdGenerator.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}};async function __PRIVATE_syncEngineListen(e,r,i=!0){let s;let o=__PRIVATE_ensureWatchCallbacks(e),l=o.Tu.get(r);return l?(o.sharedClientState.addLocalQueryTarget(l.targetId),s=l.view.lu()):s=await __PRIVATE_allocateTargetAndMaybeListen(o,r,i,!0),s}async function __PRIVATE_triggerRemoteStoreListen(e,r){let i=__PRIVATE_ensureWatchCallbacks(e);await __PRIVATE_allocateTargetAndMaybeListen(i,r,!0,!1)}async function __PRIVATE_allocateTargetAndMaybeListen(e,r,i,s){var o,l;let h;let d=await (o=e.localStore,l=__PRIVATE_queryToTarget(r),o.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return o.Pi.getTargetData(e,l).next(i=>i?(r=i,PersistencePromise.resolve(r)):o.Pi.allocateTargetId(e).next(i=>(r=new TargetData(l,i,"TargetPurposeListen",e.currentSequenceNumber),o.Pi.addTargetData(e,r).next(()=>r))))}).then(e=>{let r=o.Ms.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(o.Ms=o.Ms.insert(e.targetId,e),o.xs.set(l,e.targetId)),e})),f=d.targetId,_=e.sharedClientState.addLocalQueryTarget(f,i);return s&&(h=await __PRIVATE_initializeViewAndComputeSnapshot(e,r,f,"current"===_,d.resumeToken)),e.isPrimaryClient&&i&&__PRIVATE_remoteStoreListen(e.remoteStore,d),h}async function __PRIVATE_initializeViewAndComputeSnapshot(e,r,i,s,o){e.pu=(r,i,s)=>(async function(e,r,i,s){let o=r.view.ru(i);o.Cs&&(o=await __PRIVATE_localStoreExecuteQuery(e.localStore,r.query,!1).then(({documents:e})=>r.view.ru(e,o)));let l=s&&s.targetChanges.get(r.targetId),h=s&&null!=s.targetMismatches.get(r.targetId),d=r.view.applyChanges(o,e.isPrimaryClient,l,h);return __PRIVATE_updateTrackedLimbos(e,r.targetId,d.au),d.snapshot})(e,r,i,s);let l=await __PRIVATE_localStoreExecuteQuery(e.localStore,r,!0),h=new __PRIVATE_View(r,l.Qs),d=h.ru(l.documents),f=TargetChange.createSynthesizedTargetChangeForCurrentChange(i,s&&"Offline"!==e.onlineState,o),_=h.applyChanges(d,e.isPrimaryClient,f);__PRIVATE_updateTrackedLimbos(e,i,_.au);let g=new __PRIVATE_QueryView(r,i,h);return e.Tu.set(r,g),e.Iu.has(i)?e.Iu.get(i).push(r):e.Iu.set(i,[r]),_.snapshot}async function __PRIVATE_syncEngineUnlisten(e,r,i){let s=e.Tu.get(r),o=e.Iu.get(s.targetId);if(o.length>1)return e.Iu.set(s.targetId,o.filter(e=>!__PRIVATE_queryEquals(e,r))),void e.Tu.delete(r);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(s.targetId),e.sharedClientState.isActiveQueryTarget(s.targetId)||await __PRIVATE_localStoreReleaseTarget(e.localStore,s.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(s.targetId),i&&__PRIVATE_remoteStoreUnlisten(e.remoteStore,s.targetId),__PRIVATE_removeAndCleanupTarget(e,s.targetId)}).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss)):(__PRIVATE_removeAndCleanupTarget(e,s.targetId),await __PRIVATE_localStoreReleaseTarget(e.localStore,s.targetId,!0))}async function __PRIVATE_triggerRemoteStoreUnlisten(e,r){let i=e.Tu.get(r),s=e.Iu.get(i.targetId);e.isPrimaryClient&&1===s.length&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),__PRIVATE_remoteStoreUnlisten(e.remoteStore,i.targetId))}async function __PRIVATE_syncEngineApplyRemoteEvent(e,r){try{let i=await function(e,r){let i=r.snapshotVersion,s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{var l;let h,d;let f=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;let _=[];r.targetChanges.forEach((l,h)=>{let d=s.get(h);if(!d)return;_.push(e.Pi.removeMatchingKeys(o,l.removedDocuments,h).next(()=>e.Pi.addMatchingKeys(o,l.addedDocuments,h)));let f=d.withSequenceNumber(o.currentSequenceNumber);null!==r.targetMismatches.get(h)?f=f.withResumeToken(ByteString.EMPTY_BYTE_STRING,SnapshotVersion.min()).withLastLimboFreeSnapshotVersion(SnapshotVersion.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,i)),s=s.insert(h,f),function(e,r,i){if(0===e.resumeToken.approximateByteSize())return!0;let s=r.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds();if(s>=3e8)return!0;let o=i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size;return o>0}(d,f,l)&&_.push(e.Pi.updateTargetData(o,f))});let g=tB,A=__PRIVATE_documentKeySet();if(r.documentUpdates.forEach(i=>{r.resolvedLimboDocuments.has(i)&&_.push(e.persistence.referenceDelegate.updateLimboDocument(o,i))}),_.push((l=r.documentUpdates,h=__PRIVATE_documentKeySet(),d=__PRIVATE_documentKeySet(),l.forEach(e=>h=h.add(e)),f.getEntries(o,h).next(e=>{let r=tB;return l.forEach((i,s)=>{let o=e.get(i);s.isFoundDocument()!==o.isFoundDocument()&&(d=d.add(i)),s.isNoDocument()&&s.version.isEqual(SnapshotVersion.min())?(f.removeEntry(i,s.readTime),r=r.insert(i,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(f.addEntry(s),r=r.insert(i,s)):__PRIVATE_logDebug(tY,"Ignoring outdated watch update for ",i,". Current version:",o.version," Watch version:",s.version)}),{ks:r,qs:d}})).next(e=>{g=e.ks,A=e.qs})),!i.isEqual(SnapshotVersion.min())){let r=e.Pi.getLastRemoteSnapshotVersion(o).next(r=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,i));_.push(r)}return PersistencePromise.waitFor(_).next(()=>f.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,g,A)).next(()=>g)}).then(r=>(e.Ms=s,r))}(e.localStore,r);r.targetChanges.forEach((r,i)=>{let s=e.Au.get(i);s&&(__PRIVATE_hardAssert(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?s.hu=!0:r.modifiedDocuments.size>0?__PRIVATE_hardAssert(s.hu,14607):r.removedDocuments.size>0&&(__PRIVATE_hardAssert(s.hu,42227),s.hu=!1))}),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e,i,r)}catch(e){await __PRIVATE_ignoreIfPrimaryLeaseLoss(e)}}function __PRIVATE_syncEngineApplyOnlineStateChange(e,r,i){var s;if(e.isPrimaryClient&&0===i||!e.isPrimaryClient&&1===i){let i;let o=[];e.Tu.forEach((e,i)=>{let s=i.view.va(r);s.snapshot&&o.push(s.snapshot)}),(s=e.eventManager).onlineState=r,i=!1,s.queries.forEach((e,s)=>{for(let e of s.Sa)e.va(r)&&(i=!0)}),i&&__PRIVATE_raiseSnapshotsInSyncEvent(s),o.length&&e.Pu.H_(o),e.onlineState=r,e.isPrimaryClient&&e.sharedClientState.setOnlineState(r)}}async function __PRIVATE_syncEngineRejectListen(e,r,i){e.sharedClientState.updateQueryState(r,"rejected",i);let s=e.Au.get(r),o=s&&s.key;if(o){let i=new SortedMap(DocumentKey.comparator);i=i.insert(o,MutableDocument.newNoDocument(o,SnapshotVersion.min()));let s=__PRIVATE_documentKeySet().add(o),l=new RemoteEvent(SnapshotVersion.min(),new Map,new SortedMap(__PRIVATE_primitiveComparator),i,s);await __PRIVATE_syncEngineApplyRemoteEvent(e,l),e.du=e.du.remove(o),e.Au.delete(r),__PRIVATE_pumpEnqueuedLimboResolutions(e)}else await __PRIVATE_localStoreReleaseTarget(e.localStore,r,!1).then(()=>__PRIVATE_removeAndCleanupTarget(e,r,i)).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss)}function __PRIVATE_removeAndCleanupTarget(e,r,i=null){for(let s of(e.sharedClientState.removeLocalQueryTarget(r),e.Iu.get(r)))e.Tu.delete(s),i&&e.Pu.yu(s,i);e.Iu.delete(r),e.isPrimaryClient&&e.Ru.jr(r).forEach(r=>{e.Ru.containsKey(r)||__PRIVATE_removeLimboTarget(e,r)})}function __PRIVATE_removeLimboTarget(e,r){e.Eu.delete(r.path.canonicalString());let i=e.du.get(r);null!==i&&(__PRIVATE_remoteStoreUnlisten(e.remoteStore,i),e.du=e.du.remove(r),e.Au.delete(i),__PRIVATE_pumpEnqueuedLimboResolutions(e))}function __PRIVATE_updateTrackedLimbos(e,r,i){for(let s of i)s instanceof __PRIVATE_AddedLimboDocument?(e.Ru.addReference(s.key,r),function(e,r){let i=r.key,s=i.path.canonicalString();e.du.get(i)||e.Eu.has(s)||(__PRIVATE_logDebug(t6,"New document in limbo: "+i),e.Eu.add(s),__PRIVATE_pumpEnqueuedLimboResolutions(e))}(e,s)):s instanceof __PRIVATE_RemovedLimboDocument?(__PRIVATE_logDebug(t6,"Document no longer in limbo: "+s.key),e.Ru.removeReference(s.key,r),e.Ru.containsKey(s.key)||__PRIVATE_removeLimboTarget(e,s.key)):fail(19791,{wu:s})}function __PRIVATE_pumpEnqueuedLimboResolutions(e){for(;e.Eu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){var r;let i=e.Eu.values().next().value;e.Eu.delete(i);let s=new DocumentKey(ResourcePath.fromString(i)),o=e.fu.next();e.Au.set(o,new LimboResolution(s)),e.du=e.du.insert(s,o),__PRIVATE_remoteStoreListen(e.remoteStore,new TargetData(__PRIVATE_queryToTarget((r=s.path,new __PRIVATE_QueryImpl(r))),o,"TargetPurposeLimboResolution",__PRIVATE_ListenSequence.ce))}}async function __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e,r,i){let s=[],o=[],l=[];e.Tu.isEmpty()||(e.Tu.forEach((h,d)=>{l.push(e.pu(d,r,i).then(r=>{if((r||i)&&e.isPrimaryClient){let s=r?!r.fromCache:i?.targetChanges.get(d.targetId)?.current;e.sharedClientState.updateQueryState(d.targetId,s?"current":"not-current")}if(r){s.push(r);let e=__PRIVATE_LocalViewChanges.As(d.targetId,r);o.push(e)}}))}),await Promise.all(l),e.Pu.H_(s),await async function(e,r){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",i=>PersistencePromise.forEach(r,r=>PersistencePromise.forEach(r.Es,s=>e.persistence.referenceDelegate.addReference(i,r.targetId,s)).next(()=>PersistencePromise.forEach(r.ds,s=>e.persistence.referenceDelegate.removeReference(i,r.targetId,s)))))}catch(e){if(!__PRIVATE_isIndexedDbTransactionError(e))throw e;__PRIVATE_logDebug(tY,"Failed to update sequence numbers: "+e)}for(let i of r){let r=i.targetId;if(!i.fromCache){let i=e.Ms.get(r),s=i.snapshotVersion,o=i.withLastLimboFreeSnapshotVersion(s);e.Ms=e.Ms.insert(r,o)}}}(e.localStore,o))}async function __PRIVATE_syncEngineHandleCredentialChange(e,r){if(!e.currentUser.isEqual(r)){__PRIVATE_logDebug(t6,"User change. New user:",r.toKey());let i=await __PRIVATE_localStoreHandleUserChange(e.localStore,r);e.currentUser=r,e.mu.forEach(e=>{e.forEach(e=>{e.reject(new FirestoreError(tw.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.mu.clear(),e.sharedClientState.handleUserChange(r,i.removedBatchIds,i.addedBatchIds),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e,i.Ls)}}function __PRIVATE_syncEngineGetRemoteKeysForTarget(e,r){let i=e.Au.get(r);if(i&&i.hu)return __PRIVATE_documentKeySet().add(i.key);{let i=__PRIVATE_documentKeySet(),s=e.Iu.get(r);if(!s)return i;for(let r of s){let s=e.Tu.get(r);i=i.unionWith(s.view.nu)}return i}}function __PRIVATE_ensureWatchCallbacks(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=__PRIVATE_syncEngineApplyRemoteEvent.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=__PRIVATE_syncEngineGetRemoteKeysForTarget.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=__PRIVATE_syncEngineRejectListen.bind(null,e),e.Pu.H_=__PRIVATE_eventManagerOnWatchChange.bind(null,e.eventManager),e.Pu.yu=__PRIVATE_eventManagerOnWatchError.bind(null,e.eventManager),e}let __PRIVATE_MemoryOfflineComponentProvider=class __PRIVATE_MemoryOfflineComponentProvider{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=__PRIVATE_newSerializer(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,r){return null}Mu(e,r){return null}vu(e){var r,i,s,o;return r=this.persistence,i=new __PRIVATE_QueryEngine,s=e.initialUser,o=this.serializer,new __PRIVATE_LocalStoreImpl(r,i,s,o)}Cu(e){return new __PRIVATE_MemoryPersistence(__PRIVATE_MemoryEagerDelegate.mi,this.serializer)}Du(e){return new __PRIVATE_MemorySharedClientState}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};__PRIVATE_MemoryOfflineComponentProvider.provider={build:()=>new __PRIVATE_MemoryOfflineComponentProvider};let __PRIVATE_LruGcMemoryOfflineComponentProvider=class __PRIVATE_LruGcMemoryOfflineComponentProvider extends __PRIVATE_MemoryOfflineComponentProvider{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,r){__PRIVATE_hardAssert(this.persistence.referenceDelegate instanceof __PRIVATE_MemoryLruDelegate,46915);let i=this.persistence.referenceDelegate.garbageCollector;return new __PRIVATE_LruScheduler(i,e.asyncQueue,r)}Cu(e){let r=void 0!==this.cacheSizeBytes?LruParams.withCacheSize(this.cacheSizeBytes):LruParams.DEFAULT;return new __PRIVATE_MemoryPersistence(e=>__PRIVATE_MemoryLruDelegate.mi(e,r),this.serializer)}};let OnlineComponentProvider=class OnlineComponentProvider{async initialize(e,r){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>__PRIVATE_syncEngineApplyOnlineStateChange(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=__PRIVATE_syncEngineHandleCredentialChange.bind(null,this.syncEngine),await __PRIVATE_remoteStoreApplyPrimaryState(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new __PRIVATE_EventManagerImpl}createDatastore(e){var r,i,s;let o=__PRIVATE_newSerializer(e.databaseInfo.databaseId),l=(r=e.databaseInfo,new __PRIVATE_WebChannelConnection(r));return i=e.authCredentials,s=e.appCheckCredentials,new __PRIVATE_DatastoreImpl(i,s,l,o)}createRemoteStore(e){var r,i,s,o;return r=this.localStore,i=this.datastore,s=e.asyncQueue,o=__PRIVATE_BrowserConnectivityMonitor.v()?new __PRIVATE_BrowserConnectivityMonitor:new __PRIVATE_NoopConnectivityMonitor,new __PRIVATE_RemoteStoreImpl(r,i,s,e=>__PRIVATE_syncEngineApplyOnlineStateChange(this.syncEngine,e,0),o)}createSyncEngine(e,r){return function(e,r,i,s,o,l,h){let d=new __PRIVATE_SyncEngineImpl(e,r,i,s,o,l);return h&&(d.gu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,r)}async terminate(){await async function(e){__PRIVATE_logDebug(t4,"RemoteStore shutting down."),e.Ea.add(5),await __PRIVATE_disableNetworkInternal(e),e.Aa.shutdown(),e.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}};OnlineComponentProvider.provider={build:()=>new OnlineComponentProvider};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_AsyncObserver=class __PRIVATE_AsyncObserver{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):__PRIVATE_logError("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,r){setTimeout(()=>{this.muted||e(r)},0)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t9="FirestoreClient";let FirestoreClient=class FirestoreClient{constructor(e,r,i,s,o){this.authCredentials=e,this.appCheckCredentials=r,this.asyncQueue=i,this.databaseInfo=s,this.user=User.UNAUTHENTICATED,this.clientId=__PRIVATE_AutoId.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async e=>{__PRIVATE_logDebug(t9,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(i,e=>(__PRIVATE_logDebug(t9,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new __PRIVATE_Deferred;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){let r=__PRIVATE_wrapInUserErrorIfRecoverable(i,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function __PRIVATE_setOfflineComponentProvider(e,r){e.asyncQueue.verifyOperationInProgress(),__PRIVATE_logDebug(t9,"Initializing OfflineComponentProvider");let i=e.configuration;await r.initialize(i);let s=i.initialUser;e.setCredentialChangeListener(async e=>{s.isEqual(e)||(await __PRIVATE_localStoreHandleUserChange(r.localStore,e),s=e)}),r.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=r}async function __PRIVATE_setOnlineComponentProvider(e,r){e.asyncQueue.verifyOperationInProgress();let i=await __PRIVATE_ensureOfflineComponents(e);__PRIVATE_logDebug(t9,"Initializing OnlineComponentProvider"),await r.initialize(i,e.configuration),e.setCredentialChangeListener(e=>__PRIVATE_remoteStoreHandleCredentialChange(r.remoteStore,e)),e.setAppCheckTokenChangeListener((e,i)=>__PRIVATE_remoteStoreHandleCredentialChange(r.remoteStore,i)),e._onlineComponents=r}async function __PRIVATE_ensureOfflineComponents(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){__PRIVATE_logDebug(t9,"Using user provided OfflineComponentProvider");try{await __PRIVATE_setOfflineComponentProvider(e,e._uninitializedComponentsProvider._offline)}catch(r){if(!("FirebaseError"===r.name?r.code===tw.FAILED_PRECONDITION||r.code===tw.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&r instanceof DOMException)||22===r.code||20===r.code||11===r.code))throw r;__PRIVATE_logWarn("Error using user provided cache. Falling back to memory cache: "+r),await __PRIVATE_setOfflineComponentProvider(e,new __PRIVATE_MemoryOfflineComponentProvider)}}else __PRIVATE_logDebug(t9,"Using default OfflineComponentProvider"),await __PRIVATE_setOfflineComponentProvider(e,new __PRIVATE_LruGcMemoryOfflineComponentProvider(void 0))}return e._offlineComponents}async function __PRIVATE_ensureOnlineComponents(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(__PRIVATE_logDebug(t9,"Using user provided OnlineComponentProvider"),await __PRIVATE_setOnlineComponentProvider(e,e._uninitializedComponentsProvider._online)):(__PRIVATE_logDebug(t9,"Using default OnlineComponentProvider"),await __PRIVATE_setOnlineComponentProvider(e,new OnlineComponentProvider))),e._onlineComponents}async function __PRIVATE_getEventManager(e){let r=await __PRIVATE_ensureOnlineComponents(e),i=r.eventManager;return i.onListen=__PRIVATE_syncEngineListen.bind(null,r.syncEngine),i.onUnlisten=__PRIVATE_syncEngineUnlisten.bind(null,r.syncEngine),i.onFirstRemoteStoreListen=__PRIVATE_triggerRemoteStoreListen.bind(null,r.syncEngine),i.onLastRemoteStoreUnlisten=__PRIVATE_triggerRemoteStoreUnlisten.bind(null,r.syncEngine),i}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_cloneLongPollingOptions(e){let r={};return void 0!==e.timeoutSeconds&&(r.timeoutSeconds=e.timeoutSeconds),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t3=new Map,t5="firestore.googleapis.com";let FirestoreSettingsImpl=class FirestoreSettingsImpl{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new FirestoreError(tw.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=t5,this.ssl=!0}else this.host=e.host,this.ssl=e.ssl??!0;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new FirestoreError(tw.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,r,i,s){if(!0===r&&!0===s)throw new FirestoreError(tw.INVALID_ARGUMENT,`${e} and ${i} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=__PRIVATE_cloneLongPollingOptions(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new FirestoreError(tw.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new FirestoreError(tw.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new FirestoreError(tw.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var r,i;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(r=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,r.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}};let Firestore$1=class Firestore$1{constructor(e,r,i,s){this._authCredentials=e,this._appCheckCredentials=r,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new FirestoreSettingsImpl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new FirestoreError(tw.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new FirestoreError(tw.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new FirestoreSettingsImpl(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new __PRIVATE_EmptyAuthCredentialsProvider;switch(e.type){case"firstParty":return new __PRIVATE_FirstPartyAuthCredentialsProvider(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new FirestoreError(tw.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let r=t3.get(e);r&&(__PRIVATE_logDebug("ComponentProvider","Removing Datastore"),t3.delete(e),r.terminate())}(this),Promise.resolve()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Query=class Query{constructor(e,r,i){this.converter=r,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Query(this.firestore,e,this._query)}};let DocumentReference=class DocumentReference{constructor(e,r,i){this.converter=r,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new CollectionReference(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new DocumentReference(this.firestore,e,this._key)}toJSON(){return{type:DocumentReference._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,r,i){if(__PRIVATE_validateJSON(r,DocumentReference._jsonSchema))return new DocumentReference(e,i||null,new DocumentKey(ResourcePath.fromString(r.referencePath)))}};DocumentReference._jsonSchemaVersion="firestore/documentReference/1.0",DocumentReference._jsonSchema={type:property("string",DocumentReference._jsonSchemaVersion),referencePath:property("string")};let CollectionReference=class CollectionReference extends Query{constructor(e,r,i){super(e,r,new __PRIVATE_QueryImpl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new DocumentReference(this.firestore,null,new DocumentKey(e))}withConverter(e){return new CollectionReference(this.firestore,e,this._path)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t8="AsyncQueue";let __PRIVATE_AsyncQueueImpl=class __PRIVATE_AsyncQueueImpl{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new __PRIVATE_ExponentialBackoff(this,"async_queue_retry"),this._c=()=>{let e=getDocument();e&&__PRIVATE_logDebug(t8,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;let r=getDocument();r&&"function"==typeof r.addEventListener&&r.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;let r=getDocument();r&&"function"==typeof r.removeEventListener&&r.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});let r=new __PRIVATE_Deferred;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(0!==this.Xu.length){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!__PRIVATE_isIndexedDbTransactionError(e))throw e;__PRIVATE_logDebug(t8,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){let r=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,__PRIVATE_logError("INTERNAL UNHANDLED ERROR: ",__PRIVATE_getMessageOrStack(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=r,r}enqueueAfterDelay(e,r,i){this.uc(),this.oc.indexOf(e)>-1&&(r=0);let s=DelayedOperation.createAndSchedule(this,e,r,i,e=>this.hc(e));return this.tc.push(s),s}uc(){this.nc&&fail(47125,{Pc:__PRIVATE_getMessageOrStack(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(let r of this.tc)if(r.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{for(let r of(this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs),this.tc))if(r.skipDelay(),"all"!==e&&r.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){let r=this.tc.indexOf(e);this.tc.splice(r,1)}};function __PRIVATE_getMessageOrStack(e){let r=e.message||"";return e.stack&&(r=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_isPartialObserver(e){return function(e,r){if("object"!=typeof e||null===e)return!1;for(let i of r)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])}let Firestore=class Firestore extends Firestore$1{constructor(e,r,i,s){super(e,r,i,s),this.type="firestore",this._queue=new __PRIVATE_AsyncQueueImpl,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new __PRIVATE_AsyncQueueImpl(e),this._firestoreClient=void 0,await e}}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bytes=class Bytes{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bytes(ByteString.fromBase64String(e))}catch(e){throw new FirestoreError(tw.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Bytes(ByteString.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Bytes._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(__PRIVATE_validateJSON(e,Bytes._jsonSchema))return Bytes.fromBase64String(e.bytes)}};Bytes._jsonSchemaVersion="firestore/bytes/1.0",Bytes._jsonSchema={type:property("string",Bytes._jsonSchemaVersion),bytes:property("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FieldPath=class FieldPath{constructor(...e){for(let r=0;r<e.length;++r)if(0===e[r].length)throw new FirestoreError(tw.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new FieldPath$1(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FieldValue=class FieldValue{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GeoPoint=class GeoPoint{constructor(e,r){if(!isFinite(e)||e<-90||e>90)throw new FirestoreError(tw.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(r)||r<-180||r>180)throw new FirestoreError(tw.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=e,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return __PRIVATE_primitiveComparator(this._lat,e._lat)||__PRIVATE_primitiveComparator(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:GeoPoint._jsonSchemaVersion}}static fromJSON(e){if(__PRIVATE_validateJSON(e,GeoPoint._jsonSchema))return new GeoPoint(e.latitude,e.longitude)}};GeoPoint._jsonSchemaVersion="firestore/geoPoint/1.0",GeoPoint._jsonSchema={type:property("string",GeoPoint._jsonSchemaVersion),latitude:property("number"),longitude:property("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let VectorValue=class VectorValue{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,r){if(e.length!==r.length)return!1;for(let i=0;i<e.length;++i)if(e[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:VectorValue._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(__PRIVATE_validateJSON(e,VectorValue._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new VectorValue(e.vectorValues);throw new FirestoreError(tw.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};VectorValue._jsonSchemaVersion="firestore/vectorValue/1.0",VectorValue._jsonSchema={type:property("string",VectorValue._jsonSchemaVersion),vectorValues:property("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t7=/^__.*__$/;function __PRIVATE_isWrite(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fail(40011,{Ac:e})}}let __PRIVATE_ParseContextImpl=class __PRIVATE_ParseContextImpl{constructor(e,r,i,s,o,l){this.settings=e,this.databaseId=r,this.serializer=i,this.ignoreUndefinedProperties=s,void 0===o&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new __PRIVATE_ParseContextImpl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){let r=this.path?.child(e),i=this.Vc({path:r,fc:!1});return i.gc(e),i}yc(e){let r=this.path?.child(e),i=this.Vc({path:r,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return __PRIVATE_createError(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return void 0!==this.fieldMask.find(r=>e.isPrefixOf(r))||void 0!==this.fieldTransforms.find(r=>e.isPrefixOf(r.field))}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(0===e.length)throw this.Sc("Document fields must not be empty");if(__PRIVATE_isWrite(this.Ac)&&t7.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}};let __PRIVATE_UserDataReader=class __PRIVATE_UserDataReader{constructor(e,r,i){this.databaseId=e,this.ignoreUndefinedProperties=r,this.serializer=i||__PRIVATE_newSerializer(e)}Cc(e,r,i,s=!1){return new __PRIVATE_ParseContextImpl({Ac:e,methodName:r,Dc:i,path:FieldPath$1.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function __PRIVATE_looksLikeJsonObject(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Timestamp||e instanceof GeoPoint||e instanceof Bytes||e instanceof DocumentReference||e instanceof FieldValue||e instanceof VectorValue)}let re=RegExp("[~\\*/\\[\\]]");function __PRIVATE_createError(e,r,i,s,o){let l=s&&!s.isEmpty(),h=void 0!==o,d=`Function ${r}() called with invalid data`;i&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(l||h)&&(f+=" (found",l&&(f+=` in field ${s}`),h&&(f+=` in document ${o}`),f+=")"),new FirestoreError(tw.INVALID_ARGUMENT,d+e+f)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DocumentSnapshot$1=class DocumentSnapshot$1{constructor(e,r,i,s,o){this._firestore=e,this._userDataWriter=r,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new DocumentReference(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new QueryDocumentSnapshot$1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let r=this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r)}}};let QueryDocumentSnapshot$1=class QueryDocumentSnapshot$1 extends DocumentSnapshot$1{data(){return super.data()}};function __PRIVATE_fieldPathFromArgument(e,r){return"string"==typeof r?function(e,r,i){if(r.search(re)>=0)throw __PRIVATE_createError(`Invalid field path (${r}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,i);try{return new FieldPath(...r.split("."))._internalPath}catch(s){throw __PRIVATE_createError(`Invalid field path (${r}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,i)}}(e,r):r instanceof FieldPath?r._internalPath:r._delegate._internalPath}let AppliableConstraint=class AppliableConstraint{};let QueryConstraint=class QueryConstraint extends AppliableConstraint{};let QueryFieldFilterConstraint=class QueryFieldFilterConstraint extends QueryConstraint{constructor(e,r,i){super(),this._field=e,this._op=r,this._value=i,this.type="where"}static _create(e,r,i){return new QueryFieldFilterConstraint(e,r,i)}_apply(e){let r=this._parse(e);return __PRIVATE_validateNewFieldFilter(e._query,r),new Query(e.firestore,e.converter,__PRIVATE_queryWithAddedFilter(e._query,r))}_parse(e){let r=function(e){let r=e._freezeSettings(),i=__PRIVATE_newSerializer(e._databaseId);return new __PRIVATE_UserDataReader(e._databaseId,!!r.ignoreUndefinedProperties,i)}(e.firestore),i=function(e,r,i,s,o,l,h){let d;if(o.isKeyField()){if("array-contains"===l||"array-contains-any"===l)throw new FirestoreError(tw.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if("in"===l||"not-in"===l){__PRIVATE_validateDisjunctiveFilterElements(h,l);let r=[];for(let i of h)r.push(__PRIVATE_parseDocumentIdValue(s,e,i));d={arrayValue:{values:r}}}else d=__PRIVATE_parseDocumentIdValue(s,e,h)}else"in"!==l&&"not-in"!==l&&"array-contains-any"!==l||__PRIVATE_validateDisjunctiveFilterElements(h,l),d=function(e,r,i,s=!1){return function __PRIVATE_parseData(e,r){if(__PRIVATE_looksLikeJsonObject(e=(0,eA.m9)(e)))return function(e,r,i){if(!__PRIVATE_looksLikeJsonObject(i)||!__PRIVATE_isPlainObject(i)){let s=__PRIVATE_valueDescription(i);throw"an object"===s?r.Sc(e+" a custom object"):r.Sc(e+" "+s)}}("Unsupported field value:",r,e),function(e,r){let i={};return index_esm_isEmpty(e)?r.path&&r.path.length>0&&r.fieldMask.push(r.path):forEach(e,(e,s)=>{let o=__PRIVATE_parseData(s,r.mc(e));null!=o&&(i[e]=o)}),{mapValue:{fields:i}}}(e,r);if(e instanceof FieldValue)return function(e,r){if(!__PRIVATE_isWrite(r.Ac))throw r.Sc(`${e._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${e._methodName}() is not currently supported inside arrays`);let i=e._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,r),null;if(void 0===e&&r.ignoreUndefinedProperties)return null;if(r.path&&r.fieldMask.push(r.path),e instanceof Array){if(r.settings.fc&&4!==r.Ac)throw r.Sc("Nested arrays are not supported");return function(e,r){let i=[],s=0;for(let o of e){let e=__PRIVATE_parseData(o,r.wc(s));null==e&&(e={nullValue:"NULL_VALUE"}),i.push(e),s++}return{arrayValue:{values:i}}}(e,r)}return function(e,r){if(null===(e=(0,eA.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var i,s,o;return i=r.serializer,"number"==typeof(o=s=e)&&Number.isInteger(o)&&!__PRIVATE_isNegativeZero(o)&&o<=Number.MAX_SAFE_INTEGER&&o>=Number.MIN_SAFE_INTEGER?__PRIVATE_toInteger(s):__PRIVATE_toDouble(i,s)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let i=Timestamp.fromDate(e);return{timestampValue:toTimestamp(r.serializer,i)}}if(e instanceof Timestamp){let i=new Timestamp(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:toTimestamp(r.serializer,i)}}if(e instanceof GeoPoint)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Bytes)return{bytesValue:__PRIVATE_toBytes(r.serializer,e._byteString)};if(e instanceof DocumentReference){let i=r.databaseId,s=e.firestore._databaseId;if(!s.isEqual(i))throw r.Sc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:__PRIVATE_toResourceName(e.firestore._databaseId||r.databaseId,e._key.path)}}if(e instanceof VectorValue)return function(e,r){let i={fields:{[tL]:{stringValue:tF},[tU]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw r.Sc("VectorValues must only contain numeric values.");return __PRIVATE_toDouble(r.serializer,e)})}}}};return{mapValue:i}}(e,r);throw r.Sc(`Unsupported field value: ${__PRIVATE_valueDescription(e)}`)}(e,r)}(i,e.Cc(s?4:3,r))}(i,r,h,"in"===l||"not-in"===l);let f=FieldFilter.create(o,l,d);return f}(e._query,"where",r,e.firestore._databaseId,this._field,this._op,this._value);return i}};let QueryCompositeFilterConstraint=class QueryCompositeFilterConstraint extends AppliableConstraint{constructor(e,r){super(),this.type=e,this._queryConstraints=r}static _create(e,r){return new QueryCompositeFilterConstraint(e,r)}_parse(e){let r=this._queryConstraints.map(r=>r._parse(e)).filter(e=>e.getFilters().length>0);return 1===r.length?r[0]:CompositeFilter.create(r,this._getOperator())}_apply(e){let r=this._parse(e);return 0===r.getFilters().length?e:(function(e,r){let i=e,s=r.getFlattenedFilters();for(let e of s)__PRIVATE_validateNewFieldFilter(i,e),i=__PRIVATE_queryWithAddedFilter(i,e)}(e._query,r),new Query(e.firestore,e.converter,__PRIVATE_queryWithAddedFilter(e._query,r)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}};let QueryOrderByConstraint=class QueryOrderByConstraint extends QueryConstraint{constructor(e,r){super(),this._field=e,this._direction=r,this.type="orderBy"}static _create(e,r){return new QueryOrderByConstraint(e,r)}_apply(e){let r=function(e,r,i){if(null!==e.startAt)throw new FirestoreError(tw.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new FirestoreError(tw.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let s=new OrderBy(r,i);return s}(e._query,this._field,this._direction);return new Query(e.firestore,e.converter,function(e,r){let i=e.explicitOrderBy.concat([r]);return new __PRIVATE_QueryImpl(e.path,e.collectionGroup,i,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,r))}};function __PRIVATE_parseDocumentIdValue(e,r,i){if("string"==typeof(i=(0,eA.m9)(i))){if(""===i)throw new FirestoreError(tw.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!__PRIVATE_isCollectionGroupQuery(r)&&-1!==i.indexOf("/"))throw new FirestoreError(tw.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${i}' contains a '/' character.`);let s=r.path.child(ResourcePath.fromString(i));if(!DocumentKey.isDocumentKey(s))throw new FirestoreError(tw.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return __PRIVATE_refValue(e,new DocumentKey(s))}if(i instanceof DocumentReference)return __PRIVATE_refValue(e,i._key);throw new FirestoreError(tw.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${__PRIVATE_valueDescription(i)}.`)}function __PRIVATE_validateDisjunctiveFilterElements(e,r){if(!Array.isArray(e)||0===e.length)throw new FirestoreError(tw.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${r.toString()}' filters.`)}function __PRIVATE_validateNewFieldFilter(e,r){let i=function(e,r){for(let i of e)for(let e of i.getFlattenedFilters())if(r.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(r.op));if(null!==i)throw i===r.op?new FirestoreError(tw.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${r.op.toString()}' filter.`):new FirestoreError(tw.INVALID_ARGUMENT,`Invalid query. You cannot use '${r.op.toString()}' filters with '${i.toString()}' filters.`)}let AbstractUserDataWriter=class AbstractUserDataWriter{convertValue(e,r="none"){switch(__PRIVATE_typeOrder(e)){case 0:return null;case 1:return e.booleanValue;case 2:return __PRIVATE_normalizeNumber(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,r);case 5:return e.stringValue;case 6:return this.convertBytes(__PRIVATE_normalizeByteString(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,r);case 11:return this.convertObject(e.mapValue,r);case 10:return this.convertVectorValue(e.mapValue);default:throw fail(62114,{value:e})}}convertObject(e,r){return this.convertObjectMap(e.fields,r)}convertObjectMap(e,r="none"){let i={};return forEach(e,(e,s)=>{i[e]=this.convertValue(s,r)}),i}convertVectorValue(e){let r=e.fields?.[tU].arrayValue?.values?.map(e=>__PRIVATE_normalizeNumber(e.doubleValue));return new VectorValue(r)}convertGeoPoint(e){return new GeoPoint(__PRIVATE_normalizeNumber(e.latitude),__PRIVATE_normalizeNumber(e.longitude))}convertArray(e,r){return(e.values||[]).map(e=>this.convertValue(e,r))}convertServerTimestamp(e,r){switch(r){case"previous":let i=__PRIVATE_getPreviousValue(e);return null==i?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(__PRIVATE_getLocalWriteTime(e));default:return null}}convertTimestamp(e){let r=__PRIVATE_normalizeTimestamp(e);return new Timestamp(r.seconds,r.nanos)}convertDocumentKey(e,r){let i=ResourcePath.fromString(e);__PRIVATE_hardAssert(__PRIVATE_isValidResourceName(i),9688,{name:e});let s=new DatabaseId(i.get(1),i.get(3)),o=new DocumentKey(i.popFirst(5));return s.isEqual(r)||__PRIVATE_logError(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}};let SnapshotMetadata=class SnapshotMetadata{constructor(e,r){this.hasPendingWrites=e,this.fromCache=r}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}};let DocumentSnapshot=class DocumentSnapshot extends DocumentSnapshot$1{constructor(e,r,i,s,o,l){super(e,r,i,s,l),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let r=new QueryDocumentSnapshot(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,r={}){if(this._document){let i=this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get",e));if(null!==i)return this._userDataWriter.convertValue(i,r.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new FirestoreError(tw.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,r={};return r.type=DocumentSnapshot._jsonSchemaVersion,r.bundle="",r.bundleSource="DocumentSnapshot",r.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()&&(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),r.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),r}};DocumentSnapshot._jsonSchemaVersion="firestore/documentSnapshot/1.0",DocumentSnapshot._jsonSchema={type:property("string",DocumentSnapshot._jsonSchemaVersion),bundleSource:property("string","DocumentSnapshot"),bundleName:property("string"),bundle:property("string")};let QueryDocumentSnapshot=class QueryDocumentSnapshot extends DocumentSnapshot{data(e={}){return super.data(e)}};let QuerySnapshot=class QuerySnapshot{constructor(e,r,i,s){this._firestore=e,this._userDataWriter=r,this._snapshot=s,this.metadata=new SnapshotMetadata(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){let e=[];return this.forEach(r=>e.push(r)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,r){this._snapshot.docs.forEach(i=>{e.call(r,new QueryDocumentSnapshot(this._firestore,this._userDataWriter,i.key,i,new SnapshotMetadata(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let r=!!e.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new FirestoreError(tw.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=function(e,r){if(e._snapshot.oldDocs.isEmpty()){let r=0;return e._snapshot.docChanges.map(i=>{let s=new QueryDocumentSnapshot(e._firestore,e._userDataWriter,i.doc.key,i.doc,new SnapshotMetadata(e._snapshot.mutatedKeys.has(i.doc.key),e._snapshot.fromCache),e.query.converter);return i.doc,{type:"added",doc:s,oldIndex:-1,newIndex:r++}})}{let i=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>r||3!==e.type).map(r=>{let s=new QueryDocumentSnapshot(e._firestore,e._userDataWriter,r.doc.key,r.doc,new SnapshotMetadata(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter),o=-1,l=-1;return 0!==r.type&&(o=i.indexOf(r.doc.key),i=i.delete(r.doc.key)),1!==r.type&&(l=(i=i.add(r.doc)).indexOf(r.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fail(61501,{type:e})}}(r.type),doc:s,oldIndex:o,newIndex:l}})}}(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new FirestoreError(tw.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=QuerySnapshot._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=__PRIVATE_AutoId.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let r=[],i=[],s=[];return this.docs.forEach(e=>{null!==e._document&&(r.push(e._document),i.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),s.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};QuerySnapshot._jsonSchemaVersion="firestore/querySnapshot/1.0",QuerySnapshot._jsonSchema={type:property("string",QuerySnapshot._jsonSchemaVersion),bundleSource:property("string","QuerySnapshot"),bundleName:property("string"),bundle:property("string")};let __PRIVATE_ExpUserDataWriter=class __PRIVATE_ExpUserDataWriter extends AbstractUserDataWriter{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bytes(e)}convertReference(e){let r=this.convertDocumentKey(e,this.firestore._databaseId);return new DocumentReference(this.firestore,null,r)}};new WeakMap,function(e=!0){tA=eP.Jn,(0,eP.Xd)(new eR.wA("firestore",(r,{instanceIdentifier:i,options:s})=>{let o=r.getProvider("app").getImmediate(),l=new Firestore(new __PRIVATE_FirebaseAuthCredentialsProvider(r.getProvider("auth-internal")),new __PRIVATE_FirebaseAppCheckTokenProvider(o,r.getProvider("app-check-internal")),function(e,r){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new FirestoreError(tw.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new DatabaseId(e.options.projectId,r)}(o,i),o);return s={useFetchStreams:e,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),(0,eP.KN)(tv,tP,void 0),(0,eP.KN)(tv,tP,"esm2020")}();var rt=i(3454);let rr="@firebase/database",rn="1.1.0",ri="";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DOMStorageWrapper=class DOMStorageWrapper{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,r){null==r?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,eA.Wl)(r))}get(e){let r=this.domStorage_.getItem(this.prefixedName_(e));return null==r?null:(0,eA.cI)(r)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MemoryStorage=class MemoryStorage{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,r){null==r?delete this.cache_[e]:this.cache_[e]=r}get(e){return(0,eA.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let createStoragefor=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let r=window[e];return r.setItem("firebase:sentinel","cache"),r.removeItem("firebase:sentinel"),new DOMStorageWrapper(r)}}catch(e){}return new MemoryStorage},rs=createStoragefor("localStorage"),ro=createStoragefor("sessionStorage"),rl=new eN.Yd("@firebase/database"),ru=(k=1,function(){return k++}),sha1=function(e){let r=(0,eA.dS)(e),i=new eA.gQ;i.update(r);let s=i.digest();return eA.US.encodeByteArray(s)},buildLogMessage_=function(...e){let r="";for(let i=0;i<e.length;i++){let s=e[i];Array.isArray(s)||s&&"object"==typeof s&&"number"==typeof s.length?r+=buildLogMessage_.apply(null,s):"object"==typeof s?r+=(0,eA.Wl)(s):r+=s,r+=" "}return r},rh=null,rc=!0,enableLogging$1=function(e,r){(0,eA.hu)(!r||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(rl.logLevel=eN.in.VERBOSE,rh=rl.log.bind(rl),r&&ro.set("logging_enabled",!0)):"function"==typeof e?rh=e:(rh=null,ro.remove("logging_enabled"))},log=function(...e){if(!0===rc&&(rc=!1,null===rh&&!0===ro.get("logging_enabled")&&enableLogging$1(!0)),rh){let r=buildLogMessage_.apply(null,e);rh(r)}},logWrapper=function(e){return function(...r){log(e,...r)}},error=function(...e){let r="FIREBASE INTERNAL ERROR: "+buildLogMessage_(...e);rl.error(r)},fatal=function(...e){let r=`FIREBASE FATAL ERROR: ${buildLogMessage_(...e)}`;throw rl.error(r),Error(r)},warn=function(...e){let r="FIREBASE WARNING: "+buildLogMessage_(...e);rl.warn(r)},warnIfPageIsSecure=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},isInvalidJSONNumber=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},executeWhenDOMReady=function(e){if((0,eA.Yr)()||"complete"===document.readyState)e();else{let r=!1,wrappedFn=function(){if(!document.body){setTimeout(wrappedFn,Math.floor(10));return}r||(r=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",wrappedFn,!1),window.addEventListener("load",wrappedFn,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&wrappedFn()}),window.attachEvent("onload",wrappedFn))}},rd="[MIN_NAME]",rp="[MAX_NAME]",nameCompare=function(e,r){if(e===r)return 0;if(e===rd||r===rp)return -1;if(r===rd||e===rp)return 1;{let i=tryParseInt(e),s=tryParseInt(r);return null!==i?null!==s?i-s==0?e.length-r.length:i-s:-1:null!==s?1:e<r?-1:1}},stringCompare=function(e,r){return e===r?0:e<r?-1:1},requireKey=function(e,r){if(r&&e in r)return r[e];throw Error("Missing required key ("+e+") in object: "+(0,eA.Wl)(r))},ObjectToUniqueKey=function(e){if("object"!=typeof e||null===e)return(0,eA.Wl)(e);let r=[];for(let i in e)r.push(i);r.sort();let i="{";for(let s=0;s<r.length;s++)0!==s&&(i+=","),i+=(0,eA.Wl)(r[s])+":"+ObjectToUniqueKey(e[r[s]]);return i+"}"},splitStringBySize=function(e,r){let i=e.length;if(i<=r)return[e];let s=[];for(let o=0;o<i;o+=r)o+r>i?s.push(e.substring(o,i)):s.push(e.substring(o,o+r));return s};function each(e,r){for(let i in e)e.hasOwnProperty(i)&&r(i,e[i])}let doubleToIEEE754String=function(e){let r,i,s,o,l;(0,eA.hu)(!isInvalidJSONNumber(e),"Invalid JSON number"),0===e?(i=0,s=0,r=1/e==-1/0?1:0):(r=e<0,(e=Math.abs(e))>=22250738585072014e-324?(i=(o=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,s=Math.round(e*Math.pow(2,52-o)-4503599627370496)):(i=0,s=Math.round(e/5e-324)));let h=[];for(l=52;l;l-=1)h.push(s%2?1:0),s=Math.floor(s/2);for(l=11;l;l-=1)h.push(i%2?1:0),i=Math.floor(i/2);h.push(r?1:0),h.reverse();let d=h.join(""),f="";for(l=0;l<64;l+=8){let e=parseInt(d.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),f+=e}return f.toLowerCase()},rf=RegExp("^-?(0*)\\d{1,10}$"),tryParseInt=function(e){if(rf.test(e)){let r=Number(e);if(r>=-2147483648&&r<=2147483647)return r}return null},exceptionGuard=function(e){try{e()}catch(e){setTimeout(()=>{let r=e.stack||"";throw warn("Exception was thrown by user callback.",r),e},Math.floor(0))}},beingCrawled=function(){let e="object"==typeof window&&window.navigator&&window.navigator.userAgent||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},setTimeoutNonBlocking=function(e,r){let i=setTimeout(e,r);return"number"==typeof i&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(i):"object"==typeof i&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AppCheckTokenProvider=class AppCheckTokenProvider{constructor(e,r){this.appCheckProvider=r,this.appName=e.name,(0,eP.rh)(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=r?.getImmediate({optional:!0}),this.appCheck||r?.get().then(e=>this.appCheck=e)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((r,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(r,i):r(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){warn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FirebaseAuthTokenProvider=class FirebaseAuthTokenProvider{constructor(e,r,i){this.appName_=e,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(log("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((r,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(r,i):r(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(r=>r.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(r=>r.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',warn(e)}};let EmulatorTokenProvider=class EmulatorTokenProvider{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}};EmulatorTokenProvider.OWNER="owner";let r_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rm="websocket",rg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RepoInfo=class RepoInfo{constructor(e,r,i,s,o=!1,l="",h=!1,d=!1,f=null){this.secure=r,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=o,this.persistenceKey=l,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=d,this.emulatorOptions=f,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rs.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",r=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${r}`}};function repoInfoConnectionURL(e,r,i){let s;if((0,eA.hu)("string"==typeof r,"typeof type must == string"),(0,eA.hu)("object"==typeof i,"typeof params must == object"),r===rm)s=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(r===rg)s=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+r);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(i.ns=e.namespace);let o=[];return each(i,(e,r)=>{o.push(e+"="+r)}),s+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let StatsCollection=class StatsCollection{constructor(){this.counters_={}}incrementCounter(e,r=1){(0,eA.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=r}get(){return(0,eA.p$)(this.counters_)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ry={},rE={};function statsManagerGetCollection(e){let r=e.toString();return ry[r]||(ry[r]=new StatsCollection),ry[r]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PacketReceiver=class PacketReceiver{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,r){this.closeAfterResponse=e,this.onClose=r,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,r){for(this.pendingResponses[e]=r;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<e.length;++r)e[r]&&exceptionGuard(()=>{this.onMessage_(e[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rI="start";let BrowserPollConnection=class BrowserPollConnection{constructor(e,r,i,s,o,l,h){this.connId=e,this.repoInfo=r,this.applicationId=i,this.appCheckToken=s,this.authToken=o,this.transportSessionId=l,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=logWrapper(e),this.stats_=statsManagerGetCollection(r),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),repoInfoConnectionURL(r,rg,e))}open(e,r){this.curSegmentNum=0,this.onDisconnect_=r,this.myPacketOrderer=new PacketReceiver(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),executeWhenDOMReady(()=>{if(this.isClosed_)return;this.scriptTagHolder=new FirebaseIFrameScriptHolder((...e)=>{let[r,i,s,o,l]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,r===rI)this.id=i,this.password=s;else if("close"===r)i?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(i,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+r)}},(...e)=>{let[r,i]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(r,i)},()=>{this.onClosed_()},this.urlFn);let e={};e[rI]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&r_.test(location.hostname)&&(e.r="f");let r=this.urlFn(e);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){BrowserPollConnection.forceAllow_=!0}static forceDisallow(){BrowserPollConnection.forceDisallow_=!0}static isAvailable(){return!(0,eA.Yr)()&&(!!BrowserPollConnection.forceAllow_||!BrowserPollConnection.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let r=(0,eA.Wl)(e);this.bytesSent+=r.length,this.stats_.incrementCounter("bytes_sent",r.length);let i=(0,eA.h$)(r),s=splitStringBySize(i,1840);for(let e=0;e<s.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[e]),this.curSegmentNum++}addDisconnectPingFrame(e,r){if((0,eA.Yr)())return;this.myDisconnFrame=document.createElement("iframe");let i={};i.dframe="t",i.id=e,i.pw=r,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let r=(0,eA.Wl)(e).length;this.bytesReceived+=r,this.stats_.incrementCounter("bytes_received",r)}};let FirebaseIFrameScriptHolder=class FirebaseIFrameScriptHolder{constructor(e,r,i,s){if(this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,eA.Yr)())this.commandCB=e,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=ru(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=FirebaseIFrameScriptHolder.createIFrame_();let i="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){let e=document.domain;i='<script>document.domain="'+e+'";</script>'}let s="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(e){log("frame writing exception"),e.stack&&log(e.stack),log(e)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{let r=e.contentWindow.document;r||log("No IE domain setting required")}catch(i){let r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,r){for(this.myID=e,this.myPW=r,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let r=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0;){let e=this.pendingSegs[0];if(e.d.length+30+i.length<=1870){let e=this.pendingSegs.shift();i=i+"&seg"+s+"="+e.seg+"&ts"+s+"="+e.ts+"&d"+s+"="+e.d,s++}else break}return r+=i,this.addLongPollTag_(r,this.currentSerial),!0}}enqueueSegment(e,r,i){this.pendingSegs.push({seg:e,ts:r,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,r){this.outstandingRequests.add(r);let doNewRequest=()=>{this.outstandingRequests.delete(r),this.newRequest_()},i=setTimeout(doNewRequest,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(i),doNewRequest()})}addTag(e,r){(0,eA.Yr)()?this.doNodeLongPoll(e,r):setTimeout(()=>{try{if(!this.sendNewPolls)return;let i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){let e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),r())},i.onerror=()=>{log("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch(e){}},Math.floor(1))}};let rT=null;"undefined"!=typeof MozWebSocket?rT=MozWebSocket:"undefined"!=typeof WebSocket&&(rT=WebSocket);let WebSocketConnection=class WebSocketConnection{constructor(e,r,i,s,o,l,h){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=logWrapper(this.connId),this.stats_=statsManagerGetCollection(r),this.connURL=WebSocketConnection.connectionURL_(r,l,h,s,i),this.nodeAdmin=r.nodeAdmin}static connectionURL_(e,r,i,s,o){let l={};return l.v="5",!(0,eA.Yr)()&&"undefined"!=typeof location&&location.hostname&&r_.test(location.hostname)&&(l.r="f"),r&&(l.s=r),i&&(l.ls=i),s&&(l.ac=s),o&&(l.p=o),repoInfoConnectionURL(e,rm,l)}open(e,r){this.onDisconnect=r,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rs.set("previous_websocket_failure",!0);try{let e;if((0,eA.Yr)()){let r=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${ri}/${rt.platform}/${r}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);let i=rt.env,s=0===this.connURL.indexOf("wss://")?i.HTTPS_PROXY||i.https_proxy:i.HTTP_PROXY||i.http_proxy;s&&(e.proxy={origin:s})}this.mySock=new rT(this.connURL,[],e)}catch(r){this.log_("Error instantiating WebSocket.");let e=r.message||r.data;e&&this.log_(e),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let r=e.message||e.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){WebSocketConnection.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let r=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);r&&r.length>1&&4.4>parseFloat(r[1])&&(e=!0)}return!e&&null!==rT&&!WebSocketConnection.forceDisallow_}static previouslyFailed(){return rs.isInMemoryStorage||!0===rs.get("previous_websocket_failure")}markConnectionHealthy(){rs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join("");this.frames=null;let r=(0,eA.cI)(e);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,eA.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){let r=Number(e);if(!isNaN(r))return this.handleNewFrameCount_(r),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let r=e.data;if(this.bytesReceived+=r.length,this.stats_.incrementCounter("bytes_received",r.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(r);else{let e=this.extractFrameCount_(r);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let r=(0,eA.Wl)(e);this.bytesSent+=r.length,this.stats_.incrementCounter("bytes_sent",r.length);let i=splitStringBySize(r,16384);i.length>1&&this.sendString_(String(i.length));for(let e=0;e<i.length;e++)this.sendString_(i[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}};WebSocketConnection.responsesRequiredToBeHealthy=2,WebSocketConnection.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TransportManager=class TransportManager{static get ALL_TRANSPORTS(){return[BrowserPollConnection,WebSocketConnection]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){let r=WebSocketConnection&&WebSocketConnection.isAvailable(),i=r&&!WebSocketConnection.previouslyFailed();if(e.webSocketOnly&&(r||warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[WebSocketConnection];else{let e=this.transports_=[];for(let r of TransportManager.ALL_TRANSPORTS)r&&r.isAvailable()&&e.push(r);TransportManager.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}};TransportManager.globalTransportInitialized_=!1;let Connection=class Connection{constructor(e,r,i,s,o,l,h,d,f,_){this.id=e,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=o,this.onMessage_=l,this.onReady_=h,this.onDisconnect_=d,this.onKill_=f,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=logWrapper("c:"+this.id+":"),this.transportManager_=new TransportManager(r),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let r=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(r,i)},Math.floor(0));let s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=setTimeoutNonBlocking(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return r=>{e===this.conn_?this.onConnectionLost_(r):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return r=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(r):e===this.secondaryConn_?this.onSecondaryMessageReceived_(r):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let r=e.t;"a"===r?this.upgradeIfSecondaryHealthy_():"r"===r?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===r&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let r=requireKey("t",e),i=requireKey("d",e);if("c"===r)this.onSecondaryControl_(i);else if("d"===r)this.pendingDataMessages.push(i);else throw Error("Unknown protocol layer: "+r)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let r=requireKey("t",e),i=requireKey("d",e);"c"===r?this.onControl_(i):"d"===r&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let r=requireKey("t",e);if("d"in e){let i=e.d;if("h"===r){let e={...i};this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===r){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===r?this.onConnectionShutdown_(i):"r"===r?this.onReset_(i):"e"===r?error("Server Error: "+i):"o"===r?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):error("Unknown control packet command: "+r)}}onHandshake_(e){let r=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,r),"5"!==i&&warn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let r=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(r,i),setTimeoutNonBlocking(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,r){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(r,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):setTimeoutNonBlocking(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ServerActions=class ServerActions{put(e,r,i,s){}merge(e,r,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,r,i){}onDisconnectMerge(e,r,i){}onDisconnectCancel(e,r){}reportStats(e){}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EventEmitter=class EventEmitter{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,eA.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...r){if(Array.isArray(this.listeners_[e])){let i=[...this.listeners_[e]];for(let e=0;e<i.length;e++)i[e].callback.apply(i[e].context,r)}}on(e,r,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:r,context:i});let s=this.getInitialEvent(e);s&&r.apply(i,s)}off(e,r,i){this.validateEventType_(e);let s=this.listeners_[e]||[];for(let e=0;e<s.length;e++)if(s[e].callback===r&&(!i||i===s[e].context)){s.splice(e,1);return}}validateEventType_(e){(0,eA.hu)(this.allowedEvents_.find(r=>r===e),"Unknown event: "+e)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OnlineMonitor=class OnlineMonitor extends EventEmitter{static getInstance(){return new OnlineMonitor}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,eA.uI)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return(0,eA.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}};let Path=class Path{constructor(e,r){if(void 0===r){this.pieces_=e.split("/");let r=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[r]=this.pieces_[e],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=r}toString(){let e="";for(let r=this.pieceNum_;r<this.pieces_.length;r++)""!==this.pieces_[r]&&(e+="/"+this.pieces_[r]);return e||"/"}};function newEmptyPath(){return new Path("")}function pathGetFront(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function pathGetLength(e){return e.pieces_.length-e.pieceNum_}function pathPopFront(e){let r=e.pieceNum_;return r<e.pieces_.length&&r++,new Path(e.pieces_,r)}function pathGetBack(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function pathSlice(e,r=0){return e.pieces_.slice(e.pieceNum_+r)}function pathParent(e){if(e.pieceNum_>=e.pieces_.length)return null;let r=[];for(let i=e.pieceNum_;i<e.pieces_.length-1;i++)r.push(e.pieces_[i]);return new Path(r,0)}function pathChild(e,r){let i=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)i.push(e.pieces_[r]);if(r instanceof Path)for(let e=r.pieceNum_;e<r.pieces_.length;e++)i.push(r.pieces_[e]);else{let e=r.split("/");for(let r=0;r<e.length;r++)e[r].length>0&&i.push(e[r])}return new Path(i,0)}function pathIsEmpty(e){return e.pieceNum_>=e.pieces_.length}function newRelativePath(e,r){let i=pathGetFront(e),s=pathGetFront(r);if(null===i)return r;if(i===s)return newRelativePath(pathPopFront(e),pathPopFront(r));throw Error("INTERNAL ERROR: innerPath ("+r+") is not within outerPath ("+e+")")}function pathEquals(e,r){if(pathGetLength(e)!==pathGetLength(r))return!1;for(let i=e.pieceNum_,s=r.pieceNum_;i<=e.pieces_.length;i++,s++)if(e.pieces_[i]!==r.pieces_[s])return!1;return!0}function pathContains(e,r){let i=e.pieceNum_,s=r.pieceNum_;if(pathGetLength(e)>pathGetLength(r))return!1;for(;i<e.pieces_.length;){if(e.pieces_[i]!==r.pieces_[s])return!1;++i,++s}return!0}let ValidationPath=class ValidationPath{constructor(e,r){this.errorPrefix_=r,this.parts_=pathSlice(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,eA.ug)(this.parts_[e]);validationPathCheckValid(this)}};function validationPathCheckValid(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+validationPathToErrorString(e))}function validationPathToErrorString(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let VisibilityMonitor=class VisibilityMonitor extends EventEmitter{static getInstance(){return new VisibilityMonitor}constructor(){let e,r;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(r="visibilitychange",e="hidden"):void 0!==document.mozHidden?(r="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(r="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(r="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,r&&document.addEventListener(r,()=>{let r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return(0,eA.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}};let PersistentConnection=class PersistentConnection extends ServerActions{constructor(e,r,i,s,o,l,h,d){if(super(),this.repoInfo_=e,this.applicationId_=r,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=o,this.authTokenProvider_=l,this.appCheckTokenProvider_=h,this.authOverride_=d,this.id=PersistentConnection.nextPersistentConnectionId_++,this.log_=logWrapper("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,d&&!(0,eA.Yr)())throw Error("Auth override specified in options, but not supported on non Node.js platforms");VisibilityMonitor.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&OnlineMonitor.getInstance().on("online",this.onOnline_,this)}sendRequest(e,r,i){let s=++this.requestNumber_,o={r:s,a:e,b:r};this.log_((0,eA.Wl)(o)),(0,eA.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();let r=new eA.BH,i={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:i,onComplete:e=>{let i=e.d;"ok"===e.s?r.resolve(i):r.reject(i)}}),this.outstandingGetCount_++;let s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),r.promise}listen(e,r,i,s){this.initConnection_();let o=e._queryIdentifier,l=e._path.toString();this.log_("Listen called for "+l+" "+o),this.listens.has(l)||this.listens.set(l,new Map),(0,eA.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,eA.hu)(!this.listens.get(l).has(o),"listen() called twice for same path/queryId.");let h={onComplete:s,hashFn:r,query:e,tag:i};this.listens.get(l).set(o,h),this.connected_&&this.sendListen_(h)}sendGet_(e){let r=this.outstandingGets_[e];this.sendRequest("g",r.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),r.onComplete&&r.onComplete(i)})}sendListen_(e){let r=e.query,i=r._path.toString(),s=r._queryIdentifier;this.log_("Listen on "+i+" for "+s);let o={p:i};e.tag&&(o.q=r._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest("q",o,o=>{let l=o.d,h=o.s;PersistentConnection.warnOnListenWarnings_(l,r);let d=this.listens.get(i)&&this.listens.get(i).get(s);d===e&&(this.log_("listen response",o),"ok"!==h&&this.removeListen_(i,s),e.onComplete&&e.onComplete(h,l))})}static warnOnListenWarnings_(e,r){if(e&&"object"==typeof e&&(0,eA.r3)(e,"w")){let i=(0,eA.DV)(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){let e='".indexOn": "'+r._queryParams.getIndex().toString()+'"',i=r._path.toString();warn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){let r=e&&40===e.length;(r||(0,eA.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,r=(0,eA.w9)(e)?"auth":"gauth",i={cred:e};null===this.authOverride_?i.noauth=!0:"object"==typeof this.authOverride_&&(i.authvar=this.authOverride_),this.sendRequest(r,i,r=>{let i=r.s,s=r.d||"error";this.authToken_===e&&("ok"===i?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,s))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let r=e.s,i=e.d||"error";"ok"===r?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(r,i)})}unlisten(e,r){let i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),(0,eA.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");let o=this.removeListen_(i,s);o&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,r)}sendUnlisten_(e,r,i,s){this.log_("Unlisten on "+e+" for "+r);let o={p:e};s&&(o.q=i,o.t=s),this.sendRequest("n",o)}onDisconnectPut(e,r,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,r,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:r,onComplete:i})}onDisconnectMerge(e,r,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,r,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:r,onComplete:i})}onDisconnectCancel(e,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:r})}sendOnDisconnect_(e,r,i,s){let o={p:r,d:i};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,e=>{s&&setTimeout(()=>{s(e.s,e.d)},Math.floor(0))})}put(e,r,i,s){this.putInternal("p",e,r,i,s)}merge(e,r,i,s){this.putInternal("m",e,r,i,s)}putInternal(e,r,i,s,o){this.initConnection_();let l={p:r,d:i};void 0!==o&&(l.h=o),this.outstandingPuts_.push({action:e,request:l,onComplete:s}),this.outstandingPutCount_++;let h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+r)}sendPut_(e){let r=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(r,i,i=>{this.log_(r+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){let r={c:e};this.log_("reportStats",r),this.sendRequest("s",r,e=>{let r=e.s;if("ok"!==r){let r=e.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,eA.Wl)(e));let r=e.r,i=this.requestCBHash_[r];i&&(delete this.requestCBHash_[r],i(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,r){this.log_("handleServerMessage",e,r),"d"===e?this.onDataUpdate_(r.p,r.d,!1,r.t):"m"===e?this.onDataUpdate_(r.p,r.d,!0,r.t):"c"===e?this.onListenRevoked_(r.p,r.q):"ac"===e?this.onAuthRevoked_(r.s,r.d):"apc"===e?this.onAppCheckRevoked_(r.s,r.d):"sd"===e?this.onSecurityDebugPacket_(r):error("Unrecognized action received from server: "+(0,eA.Wl)(e)+"\nAre you using the latest client?")}onReady_(e,r){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=r,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,eA.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){let e=new Date().getTime()-this.lastConnectionEstablishedTime_;e>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();let e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_),r=Math.max(0,this.reconnectDelay_-e);r=Math.random()*r,this.log_("Trying to reconnect in "+r+"ms"),this.scheduleConnect_(r),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),r=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+PersistentConnection.nextConnectionId_++,o=this.lastSessionId,l=!1,h=null,closeFn=function(){h?h.close():(l=!0,i())};this.realtime_={close:closeFn,sendRequest:function(e){(0,eA.hu)(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(e)}};let d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[f,_]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);l?log("getToken() completed but was canceled"):(log("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=_&&_.token,h=new Connection(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,r,i,e=>{warn(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},o))}catch(e){this.log_("Failed to get token: "+e),l||(this.repoInfo_.nodeAdmin&&warn(e),closeFn())}}}interrupt(e){log("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){log("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,eA.xb)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let r=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:r})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let r=this.outstandingPuts_[e];r&&"h"in r.request&&r.queued&&(r.onComplete&&r.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,r){let i;i=r?r.map(e=>ObjectToUniqueKey(e)).join("$"):"default";let s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,r){let i;let s=new Path(e).toString();if(this.listens.has(s)){let e=this.listens.get(s);i=e.get(r),e.delete(r),0===e.size&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,r){log("Auth token revoked: "+e+"/"+r),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,r){log("App check token revoked: "+e+"/"+r),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let r of e.values())this.sendListen_(r);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},r="js";(0,eA.Yr)()&&(r=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+r+"."+ri.replace(/\./g,"-")]=1,(0,eA.uI)()?e["framework.cordova"]=1:(0,eA.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=OnlineMonitor.getInstance().currentlyOnline();return(0,eA.xb)(this.interruptReasons_)&&e}};PersistentConnection.nextPersistentConnectionId_=0,PersistentConnection.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NamedNode=class NamedNode{constructor(e,r){this.name=e,this.node=r}static Wrap(e,r){return new NamedNode(e,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Index=class Index{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,r){let i=new NamedNode(rd,e),s=new NamedNode(rd,r);return 0!==this.compare(i,s)}minPost(){return NamedNode.MIN}};let KeyIndex=class KeyIndex extends Index{static get __EMPTY_NODE(){return s}static set __EMPTY_NODE(e){s=e}compare(e,r){return nameCompare(e.name,r.name)}isDefinedOn(e){throw(0,eA.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,r){return!1}minPost(){return NamedNode.MIN}maxPost(){return new NamedNode(rp,s)}makePost(e,r){return(0,eA.hu)("string"==typeof e,"KeyIndex indexValue must always be a string."),new NamedNode(e,s)}toString(){return".key"}};let rv=new KeyIndex;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let index_esm_SortedMapIterator=class index_esm_SortedMapIterator{constructor(e,r,i,s,o=null){this.isReverse_=s,this.resultGenerator_=o,this.nodeStack_=[];let l=1;for(;!e.isEmpty();)if(l=r?i(e.key,r):1,s&&(l*=-1),l<0)e=this.isReverse_?e.left:e.right;else if(0===l){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let r=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(r.key,r.value):{key:r.key,value:r.value},this.isReverse_)for(r=r.left;!r.isEmpty();)this.nodeStack_.push(r),r=r.right;else for(r=r.right;!r.isEmpty();)this.nodeStack_.push(r),r=r.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}};let index_esm_LLRBNode=class index_esm_LLRBNode{constructor(e,r,i,s,o){this.key=e,this.value=r,this.color=null!=i?i:index_esm_LLRBNode.RED,this.left=null!=s?s:index_esm_SortedMap.EMPTY_NODE,this.right=null!=o?o:index_esm_SortedMap.EMPTY_NODE}copy(e,r,i,s,o){return new index_esm_LLRBNode(null!=e?e:this.key,null!=r?r:this.value,null!=i?i:this.color,null!=s?s:this.left,null!=o?o:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,i){let s=this,o=i(e,s.key);return(s=o<0?s.copy(null,null,null,s.left.insert(e,r,i),null):0===o?s.copy(null,r,null,null,null):s.copy(null,null,null,null,s.right.insert(e,r,i))).fixUp_()}removeMin_(){if(this.left.isEmpty())return index_esm_SortedMap.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,r){let i,s;if(i=this,0>r(e,i.key))i.left.isEmpty()||i.left.isRed_()||i.left.left.isRed_()||(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,r),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),i.right.isEmpty()||i.right.isRed_()||i.right.left.isRed_()||(i=i.moveRedRight_()),0===r(e,i.key)){if(i.right.isEmpty())return index_esm_SortedMap.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,r))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,index_esm_LLRBNode.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,index_esm_LLRBNode.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth_(){let e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}};index_esm_LLRBNode.RED=!0,index_esm_LLRBNode.BLACK=!1;let index_esm_SortedMap=class index_esm_SortedMap{constructor(e,r=index_esm_SortedMap.EMPTY_NODE){this.comparator_=e,this.root_=r}insert(e,r){return new index_esm_SortedMap(this.comparator_,this.root_.insert(e,r,this.comparator_).copy(null,null,index_esm_LLRBNode.BLACK,null,null))}remove(e){return new index_esm_SortedMap(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,index_esm_LLRBNode.BLACK,null,null))}get(e){let r;let i=this.root_;for(;!i.isEmpty();){if(0===(r=this.comparator_(e,i.key)))return i.value;r<0?i=i.left:r>0&&(i=i.right)}return null}getPredecessorKey(e){let r,i=this.root_,s=null;for(;!i.isEmpty();){if(0===(r=this.comparator_(e,i.key))){if(i.left.isEmpty()){if(s)return s.key;return null}for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}r<0?i=i.left:r>0&&(s=i,i=i.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new index_esm_SortedMapIterator(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,r){return new index_esm_SortedMapIterator(this.root_,e,this.comparator_,!1,r)}getReverseIteratorFrom(e,r){return new index_esm_SortedMapIterator(this.root_,e,this.comparator_,!0,r)}getReverseIterator(e){return new index_esm_SortedMapIterator(this.root_,null,this.comparator_,!0,e)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NAME_ONLY_COMPARATOR(e,r){return nameCompare(e.name,r.name)}function NAME_COMPARATOR(e,r){return nameCompare(e,r)}index_esm_SortedMap.EMPTY_NODE=new class{copy(e,r,i,s,o){return this}insert(e,r,i){return new index_esm_LLRBNode(e,r,null)}remove(e,r){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};let priorityHashText=function(e){return"number"==typeof e?"number:"+doubleToIEEE754String(e):"string:"+e},validatePriorityNode=function(e){if(e.isLeafNode()){let r=e.val();(0,eA.hu)("string"==typeof r||"number"==typeof r||"object"==typeof r&&(0,eA.r3)(r,".sv"),"Priority must be a string or number.")}else(0,eA.hu)(e===o||e.isEmpty(),"priority of unexpected type.");(0,eA.hu)(e===o||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};let LeafNode=class LeafNode{static set __childrenNodeConstructor(e){l=e}static get __childrenNodeConstructor(){return l}constructor(e,r=LeafNode.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=r,this.lazyHash_=null,(0,eA.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),validatePriorityNode(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new LeafNode(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:LeafNode.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return pathIsEmpty(e)?this:".priority"===pathGetFront(e)?this.priorityNode_:LeafNode.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,r){return null}updateImmediateChild(e,r){return".priority"===e?this.updatePriority(r):r.isEmpty()&&".priority"!==e?this:LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,r).updatePriority(this.priorityNode_)}updateChild(e,r){let i=pathGetFront(e);return null===i?r:r.isEmpty()&&".priority"!==i?this:((0,eA.hu)(".priority"!==i||1===pathGetLength(e),".priority must be the last token in a path"),this.updateImmediateChild(i,LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild(pathPopFront(e),r)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,r){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+priorityHashText(this.priorityNode_.val())+":");let r=typeof this.value_;e+=r+":","number"===r?e+=doubleToIEEE754String(this.value_):e+=this.value_,this.lazyHash_=sha1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===LeafNode.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof LeafNode.__childrenNodeConstructor?-1:((0,eA.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let r=typeof e.value_,i=typeof this.value_,s=LeafNode.VALUE_TYPE_ORDER.indexOf(r),o=LeafNode.VALUE_TYPE_ORDER.indexOf(i);return((0,eA.hu)(s>=0,"Unknown leaf type: "+r),(0,eA.hu)(o>=0,"Unknown leaf type: "+i),s!==o)?o-s:"object"===i?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}};LeafNode.VALUE_TYPE_ORDER=["object","boolean","number","string"];let rP=new class extends Index{compare(e,r){let i=e.node.getPriority(),s=r.node.getPriority(),o=i.compareTo(s);return 0===o?nameCompare(e.name,r.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,r){return!e.getPriority().equals(r.getPriority())}minPost(){return NamedNode.MIN}maxPost(){return new NamedNode(rp,new LeafNode("[PRIORITY-POST]",d))}makePost(e,r){let i=h(e);return new NamedNode(r,new LeafNode("[PRIORITY-POST]",i))}toString(){return".priority"}},rA=Math.log(2);let Base12Num=class Base12Num{constructor(e){this.count=parseInt(Math.log(e+1)/rA,10),this.current_=this.count-1;let r=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&r}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}};let buildChildSet=function(e,r,i,s){e.sort(r);let buildBalancedTree=function(r,s){let o,l;let h=s-r;if(0===h)return null;if(1===h)return o=e[r],l=i?i(o):o,new index_esm_LLRBNode(l,o.node,index_esm_LLRBNode.BLACK,null,null);{let d=parseInt(h/2,10)+r,f=buildBalancedTree(r,d),_=buildBalancedTree(d+1,s);return o=e[d],l=i?i(o):o,new index_esm_LLRBNode(l,o.node,index_esm_LLRBNode.BLACK,f,_)}},o=new Base12Num(e.length),l=function(r){let s=null,o=null,l=e.length,buildPennant=function(r,s){let o=l-r,h=l;l-=r;let d=buildBalancedTree(o+1,h),f=e[o],_=i?i(f):f;attachPennant(new index_esm_LLRBNode(_,f.node,s,null,d))},attachPennant=function(e){s?s.left=e:o=e,s=e};for(let e=0;e<r.count;++e){let i=r.nextBitIsOne(),s=Math.pow(2,r.count-(e+1));i?buildPennant(s,index_esm_LLRBNode.BLACK):(buildPennant(s,index_esm_LLRBNode.BLACK),buildPennant(s,index_esm_LLRBNode.RED))}return o}(o);return new index_esm_SortedMap(s||r,l)},rR={};let IndexMap=class IndexMap{static get Default(){return(0,eA.hu)(rR&&rP,"ChildrenNode.ts has not been loaded"),f=f||new IndexMap({".priority":rR},{".priority":rP})}constructor(e,r){this.indexes_=e,this.indexSet_=r}get(e){let r=(0,eA.DV)(this.indexes_,e);if(!r)throw Error("No index defined for "+e);return r instanceof index_esm_SortedMap?r:null}hasIndex(e){return(0,eA.r3)(this.indexSet_,e.toString())}addIndex(e,r){let i;(0,eA.hu)(e!==rv,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let s=[],o=!1,l=r.getIterator(NamedNode.Wrap),h=l.getNext();for(;h;)o=o||e.isDefinedOn(h.node),s.push(h),h=l.getNext();i=o?buildChildSet(s,e.getCompare()):rR;let d=e.toString(),f={...this.indexSet_};f[d]=e;let _={...this.indexes_};return _[d]=i,new IndexMap(_,f)}addToIndexes(e,r){let i=(0,eA.UI)(this.indexes_,(i,s)=>{let o=(0,eA.DV)(this.indexSet_,s);if((0,eA.hu)(o,"Missing index implementation for "+s),i===rR){if(!o.isDefinedOn(e.node))return rR;{let i=[],s=r.getIterator(NamedNode.Wrap),l=s.getNext();for(;l;)l.name!==e.name&&i.push(l),l=s.getNext();return i.push(e),buildChildSet(i,o.getCompare())}}{let s=r.get(e.name),o=i;return s&&(o=o.remove(new NamedNode(e.name,s))),o.insert(e,e.node)}});return new IndexMap(i,this.indexSet_)}removeFromIndexes(e,r){let i=(0,eA.UI)(this.indexes_,i=>{if(i===rR)return i;{let s=r.get(e.name);return s?i.remove(new NamedNode(e.name,s)):i}});return new IndexMap(i,this.indexSet_)}};let ChildrenNode=class ChildrenNode{static get EMPTY_NODE(){return _||(_=new ChildrenNode(new index_esm_SortedMap(NAME_COMPARATOR),null,IndexMap.Default))}constructor(e,r,i){this.children_=e,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&validatePriorityNode(this.priorityNode_),this.children_.isEmpty()&&(0,eA.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_}updatePriority(e){return this.children_.isEmpty()?this:new ChildrenNode(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let r=this.children_.get(e);return null===r?_:r}}getChild(e){let r=pathGetFront(e);return null===r?this:this.getImmediateChild(r).getChild(pathPopFront(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,r){if((0,eA.hu)(r,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(r);{let i,s;let o=new NamedNode(e,r);r.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(o,this.children_)):(i=this.children_.insert(e,r),s=this.indexMap_.addToIndexes(o,this.children_));let l=i.isEmpty()?_:this.priorityNode_;return new ChildrenNode(i,l,s)}}updateChild(e,r){let i=pathGetFront(e);if(null===i)return r;{(0,eA.hu)(".priority"!==pathGetFront(e)||1===pathGetLength(e),".priority must be the last token in a path");let s=this.getImmediateChild(i).updateChild(pathPopFront(e),r);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let r={},i=0,s=0,o=!0;if(this.forEachChild(rP,(l,h)=>{r[l]=h.val(e),i++,o&&ChildrenNode.INTEGER_REGEXP_.test(l)?s=Math.max(s,Number(l)):o=!1}),e||!o||!(s<2*i))return e&&!this.getPriority().isEmpty()&&(r[".priority"]=this.getPriority().val()),r;{let e=[];for(let i in r)e[i]=r[i];return e}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+priorityHashText(this.getPriority().val())+":"),this.forEachChild(rP,(r,i)=>{let s=i.hash();""!==s&&(e+=":"+r+":"+s)}),this.lazyHash_=""===e?"":sha1(e)}return this.lazyHash_}getPredecessorChildName(e,r,i){let s=this.resolveIndex_(i);if(!s)return this.children_.getPredecessorKey(e);{let i=s.getPredecessorKey(new NamedNode(e,r));return i?i.name:null}}getFirstChildName(e){let r=this.resolveIndex_(e);if(!r)return this.children_.minKey();{let e=r.minKey();return e&&e.name}}getFirstChild(e){let r=this.getFirstChildName(e);return r?new NamedNode(r,this.children_.get(r)):null}getLastChildName(e){let r=this.resolveIndex_(e);if(!r)return this.children_.maxKey();{let e=r.maxKey();return e&&e.name}}getLastChild(e){let r=this.getLastChildName(e);return r?new NamedNode(r,this.children_.get(r)):null}forEachChild(e,r){let i=this.resolveIndex_(e);return i?i.inorderTraversal(e=>r(e.name,e.node)):this.children_.inorderTraversal(r)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,r){let i=this.resolveIndex_(r);if(i)return i.getIteratorFrom(e,e=>e);{let i=this.children_.getIteratorFrom(e.name,NamedNode.Wrap),s=i.peek();for(;null!=s&&0>r.compare(s,e);)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,r){let i=this.resolveIndex_(r);if(i)return i.getReverseIteratorFrom(e,e=>e);{let i=this.children_.getReverseIteratorFrom(e.name,NamedNode.Wrap),s=i.peek();for(;null!=s&&r.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===rw?-1:0}withIndex(e){if(e===rv||this.indexMap_.hasIndex(e))return this;{let r=this.indexMap_.addIndex(e,this.children_);return new ChildrenNode(this.children_,this.priorityNode_,r)}}isIndexed(e){return e===rv||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority())||this.children_.count()!==e.children_.count())return!1;{let r=this.getIterator(rP),i=e.getIterator(rP),s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return null===s&&null===o}}resolveIndex_(e){return e===rv?null:this.indexMap_.get(e.toString())}};ChildrenNode.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;let rw=new class extends ChildrenNode{constructor(){super(new index_esm_SortedMap(NAME_COMPARATOR),ChildrenNode.EMPTY_NODE,IndexMap.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ChildrenNode.EMPTY_NODE}isEmpty(){return!1}};function nodeFromJSON(e,r=null){if(null===e)return ChildrenNode.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(r=e[".priority"]),(0,eA.hu)(null===r||"string"==typeof r||"number"==typeof r||"object"==typeof r&&".sv"in r,"Invalid priority type found: "+typeof r),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){let i=e;return new LeafNode(i,nodeFromJSON(r))}if(e instanceof Array){let i=ChildrenNode.EMPTY_NODE;return each(e,(r,s)=>{if((0,eA.r3)(e,r)&&"."!==r.substring(0,1)){let e=nodeFromJSON(s);(e.isLeafNode()||!e.isEmpty())&&(i=i.updateImmediateChild(r,e))}}),i.updatePriority(nodeFromJSON(r))}{let i=[],s=!1,o=e;if(each(o,(e,r)=>{if("."!==e.substring(0,1)){let o=nodeFromJSON(r);o.isEmpty()||(s=s||!o.getPriority().isEmpty(),i.push(new NamedNode(e,o)))}}),0===i.length)return ChildrenNode.EMPTY_NODE;let l=buildChildSet(i,NAME_ONLY_COMPARATOR,e=>e.name,NAME_COMPARATOR);if(!s)return new ChildrenNode(l,nodeFromJSON(r),IndexMap.Default);{let e=buildChildSet(i,rP.getCompare());return new ChildrenNode(l,nodeFromJSON(r),new IndexMap({".priority":e},{".priority":rP}))}}}Object.defineProperties(NamedNode,{MIN:{value:new NamedNode(rd,ChildrenNode.EMPTY_NODE)},MAX:{value:new NamedNode(rp,rw)}}),KeyIndex.__EMPTY_NODE=ChildrenNode.EMPTY_NODE,LeafNode.__childrenNodeConstructor=ChildrenNode,o=rw,d=rw,h=nodeFromJSON;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PathIndex=class PathIndex extends Index{constructor(e){super(),this.indexPath_=e,(0,eA.hu)(!pathIsEmpty(e)&&".priority"!==pathGetFront(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,r){let i=this.extractChild(e.node),s=this.extractChild(r.node),o=i.compareTo(s);return 0===o?nameCompare(e.name,r.name):o}makePost(e,r){let i=nodeFromJSON(e),s=ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_,i);return new NamedNode(r,s)}maxPost(){let e=ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_,rw);return new NamedNode(rp,e)}toString(){return pathSlice(this.indexPath_,0).join("/")}};let rC=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class extends Index{compare(e,r){let i=e.node.compareTo(r.node);return 0===i?nameCompare(e.name,r.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,r){return!e.equals(r)}minPost(){return NamedNode.MIN}maxPost(){return NamedNode.MAX}makePost(e,r){let i=nodeFromJSON(e);return new NamedNode(r,i)}toString(){return".value"}};function changeChildChanged(e,r,i){return{type:"child_changed",snapshotNode:r,childName:e,oldSnap:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QueryParams=class QueryParams{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=rP}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,eA.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return((0,eA.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:rd}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,eA.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return((0,eA.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:rp}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,eA.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===rP}copy(){let e=new QueryParams;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}};function queryParamsToRestQueryStringParameters(e){let r;let i={};if(e.isDefault())return i;if(e.index_===rP?r="$priority":e.index_===rC?r="$value":e.index_===rv?r="$key":((0,eA.hu)(e.index_ instanceof PathIndex,"Unrecognized index type!"),r=e.index_.toString()),i.orderBy=(0,eA.Wl)(r),e.startSet_){let r=e.startAfterSet_?"startAfter":"startAt";i[r]=(0,eA.Wl)(e.indexStartValue_),e.startNameSet_&&(i[r]+=","+(0,eA.Wl)(e.indexStartName_))}if(e.endSet_){let r=e.endBeforeSet_?"endBefore":"endAt";i[r]=(0,eA.Wl)(e.indexEndValue_),e.endNameSet_&&(i[r]+=","+(0,eA.Wl)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?i.limitToFirst=e.limit_:i.limitToLast=e.limit_),i}function queryParamsGetQueryObject(e){let r={};if(e.startSet_&&(r.sp=e.indexStartValue_,e.startNameSet_&&(r.sn=e.indexStartName_),r.sin=!e.startAfterSet_),e.endSet_&&(r.ep=e.indexEndValue_,e.endNameSet_&&(r.en=e.indexEndName_),r.ein=!e.endBeforeSet_),e.limitSet_){r.l=e.limit_;let i=e.viewFrom_;""===i&&(i=e.isViewFromLeft()?"l":"r"),r.vf=i}return e.index_!==rP&&(r.i=e.index_.toString()),r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ReadonlyRestClient=class ReadonlyRestClient extends ServerActions{reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,r){return void 0!==r?"tag$"+r:((0,eA.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,r,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=r,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=logWrapper("p:rest:"),this.listens_={}}listen(e,r,i,s){let o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);let l=ReadonlyRestClient.getListenId_(e,i),h={};this.listens_[l]=h;let d=queryParamsToRestQueryStringParameters(e._queryParams);this.restRequest_(o+".json",d,(e,r)=>{let d=r;404===e&&(d=null,e=null),null===e&&this.onDataUpdate_(o,d,!1,i),(0,eA.DV)(this.listens_,l)===h&&s(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,r){let i=ReadonlyRestClient.getListenId_(e,r);delete this.listens_[i]}get(e){let r=queryParamsToRestQueryStringParameters(e._queryParams),i=e._path.toString(),s=new eA.BH;return this.restRequest_(i+".json",r,(e,r)=>{let o=r;404===e&&(o=null,e=null),null===e?(this.onDataUpdate_(i,o,!1,null),s.resolve(o)):s.reject(Error(o))}),s.promise}refreshAuthToken(e){}restRequest_(e,r={},i){return r.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,o])=>{s&&s.accessToken&&(r.auth=s.accessToken),o&&o.token&&(r.ac=o.token);let l=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,eA.xO)(r);this.log_("Sending REST request for "+l);let h=new XMLHttpRequest;h.onreadystatechange=()=>{if(i&&4===h.readyState){this.log_("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);let e=null;if(h.status>=200&&h.status<300){try{e=(0,eA.cI)(h.responseText)}catch(e){warn("Failed to parse JSON response for "+l+": "+h.responseText)}i(null,e)}else 401!==h.status&&404!==h.status&&warn("Got unsuccessful REST response for "+l+" Status: "+h.status),i(h.status);i=null}},h.open("GET",l,!0),h.send()})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SnapshotHolder=class SnapshotHolder{constructor(){this.rootNode_=ChildrenNode.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,r){this.rootNode_=this.rootNode_.updateChild(e,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function newSparseSnapshotTree(){return{value:null,children:new Map}}function sparseSnapshotTreeForEachTree(e,r,i){null!==e.value?i(r,e.value):function(e,r){e.children.forEach((e,i)=>{r(i,e)})}(e,(e,s)=>{let o=new Path(r.toString()+"/"+e);sparseSnapshotTreeForEachTree(s,o,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let StatsListener=class StatsListener{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),r={...e};return this.last_&&each(this.last_,(e,i)=>{r[e]=r[e]-i}),this.last_=e,r}};let StatsReporter=class StatsReporter{constructor(e,r){this.server_=r,this.statsToReport_={},this.statsListener_=new StatsListener(e),setTimeoutNonBlocking(this.reportStats_.bind(this),Math.floor(1e4+2e4*Math.random()))}reportStats_(){let e=this.statsListener_.get(),r={},i=!1;each(e,(e,s)=>{s>0&&(0,eA.r3)(this.statsToReport_,e)&&(r[e]=s,i=!0)}),i&&this.server_.reportStats(r),setTimeoutNonBlocking(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}};function newOperationSourceUser(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function newOperationSourceServer(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function newOperationSourceServerTaggedQuery(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(et=eT||(eT={}))[et.OVERWRITE=0]="OVERWRITE",et[et.MERGE=1]="MERGE",et[et.ACK_USER_WRITE=2]="ACK_USER_WRITE",et[et.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AckUserWrite=class AckUserWrite{constructor(e,r,i){this.path=e,this.affectedTree=r,this.revert=i,this.type=eT.ACK_USER_WRITE,this.source=newOperationSourceUser()}operationForChild(e){if(!pathIsEmpty(this.path))return(0,eA.hu)(pathGetFront(this.path)===e,"operationForChild called for unrelated child."),new AckUserWrite(pathPopFront(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return(0,eA.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let r=this.affectedTree.subtree(new Path(e));return new AckUserWrite(newEmptyPath(),r,this.revert)}}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Overwrite=class Overwrite{constructor(e,r,i){this.source=e,this.path=r,this.snap=i,this.type=eT.OVERWRITE}operationForChild(e){return pathIsEmpty(this.path)?new Overwrite(this.source,newEmptyPath(),this.snap.getImmediateChild(e)):new Overwrite(this.source,pathPopFront(this.path),this.snap)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Merge=class Merge{constructor(e,r,i){this.source=e,this.path=r,this.children=i,this.type=eT.MERGE}operationForChild(e){if(!pathIsEmpty(this.path))return(0,eA.hu)(pathGetFront(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Merge(this.source,pathPopFront(this.path),this.children);{let r=this.children.subtree(new Path(e));return r.isEmpty()?null:r.value?new Overwrite(this.source,newEmptyPath(),r.value):new Merge(this.source,newEmptyPath(),r)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let CacheNode=class CacheNode{constructor(e,r,i){this.node_=e,this.fullyInitialized_=r,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(pathIsEmpty(e))return this.isFullyInitialized()&&!this.filtered_;let r=pathGetFront(e);return this.isCompleteForChild(r)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}};function eventGeneratorGenerateEventsForType(e,r,i,s,o,l){let h=s.filter(e=>e.type===i);h.sort((r,i)=>(function(e,r,i){if(null==r.childName||null==i.childName)throw(0,eA.g5)("Should only compare child_ events.");let s=new NamedNode(r.childName,r.snapshotNode),o=new NamedNode(i.childName,i.snapshotNode);return e.index_.compare(s,o)})(e,r,i)),h.forEach(i=>{let s=("value"===i.type||"child_removed"===i.type||(i.prevName=l.getPredecessorChildName(i.childName,i.snapshotNode,e.index_)),i);o.forEach(o=>{o.respondsTo(i.type)&&r.push(o.createEvent(s,e.query_))})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function newViewCache(e,r){return{eventCache:e,serverCache:r}}function viewCacheUpdateEventSnap(e,r,i,s){return newViewCache(new CacheNode(r,i,s),e.serverCache)}function viewCacheUpdateServerSnap(e,r,i,s){return newViewCache(e.eventCache,new CacheNode(r,i,s))}function viewCacheGetCompleteEventSnap(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function viewCacheGetCompleteServerSnap(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}let EmptyChildren=()=>(g||(g=new index_esm_SortedMap(stringCompare)),g);let ImmutableTree=class ImmutableTree{static fromObject(e){let r=new ImmutableTree(null);return each(e,(e,i)=>{r=r.set(new Path(e),i)}),r}constructor(e,r=EmptyChildren()){this.value=e,this.children=r}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,r){if(null!=this.value&&r(this.value))return{path:newEmptyPath(),value:this.value};if(pathIsEmpty(e))return null;{let i=pathGetFront(e),s=this.children.get(i);if(null===s)return null;{let o=s.findRootMostMatchingPathAndValue(pathPopFront(e),r);if(null==o)return null;{let e=pathChild(new Path(i),o.path);return{path:e,value:o.value}}}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(pathIsEmpty(e))return this;{let r=pathGetFront(e),i=this.children.get(r);return null!==i?i.subtree(pathPopFront(e)):new ImmutableTree(null)}}set(e,r){if(pathIsEmpty(e))return new ImmutableTree(r,this.children);{let i=pathGetFront(e),s=this.children.get(i)||new ImmutableTree(null),o=s.set(pathPopFront(e),r),l=this.children.insert(i,o);return new ImmutableTree(this.value,l)}}remove(e){if(pathIsEmpty(e))return this.children.isEmpty()?new ImmutableTree(null):new ImmutableTree(null,this.children);{let r=pathGetFront(e),i=this.children.get(r);if(!i)return this;{let s;let o=i.remove(pathPopFront(e));return(s=o.isEmpty()?this.children.remove(r):this.children.insert(r,o),null===this.value&&s.isEmpty())?new ImmutableTree(null):new ImmutableTree(this.value,s)}}}get(e){if(pathIsEmpty(e))return this.value;{let r=pathGetFront(e),i=this.children.get(r);return i?i.get(pathPopFront(e)):null}}setTree(e,r){if(pathIsEmpty(e))return r;{let i;let s=pathGetFront(e),o=this.children.get(s)||new ImmutableTree(null),l=o.setTree(pathPopFront(e),r);return i=l.isEmpty()?this.children.remove(s):this.children.insert(s,l),new ImmutableTree(this.value,i)}}fold(e){return this.fold_(newEmptyPath(),e)}fold_(e,r){let i={};return this.children.inorderTraversal((s,o)=>{i[s]=o.fold_(pathChild(e,s),r)}),r(e,this.value,i)}findOnPath(e,r){return this.findOnPath_(e,newEmptyPath(),r)}findOnPath_(e,r,i){let s=!!this.value&&i(r,this.value);if(s)return s;if(pathIsEmpty(e))return null;{let s=pathGetFront(e),o=this.children.get(s);return o?o.findOnPath_(pathPopFront(e),pathChild(r,s),i):null}}foreachOnPath(e,r){return this.foreachOnPath_(e,newEmptyPath(),r)}foreachOnPath_(e,r,i){if(pathIsEmpty(e))return this;{this.value&&i(r,this.value);let s=pathGetFront(e),o=this.children.get(s);return o?o.foreachOnPath_(pathPopFront(e),pathChild(r,s),i):new ImmutableTree(null)}}foreach(e){this.foreach_(newEmptyPath(),e)}foreach_(e,r){this.children.inorderTraversal((i,s)=>{s.foreach_(pathChild(e,i),r)}),this.value&&r(e,this.value)}foreachChild(e){this.children.inorderTraversal((r,i)=>{i.value&&e(r,i.value)})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let CompoundWrite=class CompoundWrite{constructor(e){this.writeTree_=e}static empty(){return new CompoundWrite(new ImmutableTree(null))}};function compoundWriteAddWrite(e,r,i){if(pathIsEmpty(r))return new CompoundWrite(new ImmutableTree(i));{let s=e.writeTree_.findRootMostValueAndPath(r);if(null!=s){let o=s.path,l=s.value,h=newRelativePath(o,r);return l=l.updateChild(h,i),new CompoundWrite(e.writeTree_.set(o,l))}{let s=new ImmutableTree(i),o=e.writeTree_.setTree(r,s);return new CompoundWrite(o)}}}function compoundWriteAddWrites(e,r,i){let s=e;return each(i,(e,i)=>{s=compoundWriteAddWrite(s,pathChild(r,e),i)}),s}function compoundWriteRemoveWrite(e,r){if(pathIsEmpty(r))return CompoundWrite.empty();{let i=e.writeTree_.setTree(r,new ImmutableTree(null));return new CompoundWrite(i)}}function compoundWriteHasCompleteWrite(e,r){return null!=compoundWriteGetCompleteNode(e,r)}function compoundWriteGetCompleteNode(e,r){let i=e.writeTree_.findRootMostValueAndPath(r);return null!=i?e.writeTree_.get(i.path).getChild(newRelativePath(i.path,r)):null}function compoundWriteGetCompleteChildren(e){let r=[],i=e.writeTree_.value;return null!=i?i.isLeafNode()||i.forEachChild(rP,(e,i)=>{r.push(new NamedNode(e,i))}):e.writeTree_.children.inorderTraversal((e,i)=>{null!=i.value&&r.push(new NamedNode(e,i.value))}),r}function compoundWriteChildCompoundWrite(e,r){if(pathIsEmpty(r))return e;{let i=compoundWriteGetCompleteNode(e,r);return new CompoundWrite(null!=i?new ImmutableTree(i):e.writeTree_.subtree(r))}}function compoundWriteIsEmpty(e){return e.writeTree_.isEmpty()}function compoundWriteApply(e,r){return function applySubtreeWrite(e,r,i){if(null!=r.value)return i.updateChild(e,r.value);{let s=null;return r.children.inorderTraversal((r,o)=>{".priority"===r?((0,eA.hu)(null!==o.value,"Priority writes must always be leaf nodes"),s=o.value):i=applySubtreeWrite(pathChild(e,r),o,i)}),i.getChild(e).isEmpty()||null===s||(i=i.updateChild(pathChild(e,".priority"),s)),i}}(newEmptyPath(),e.writeTree_,r)}function writeTreeDefaultFilter_(e){return e.visible}function writeTreeLayerTree_(e,r,i){let s=CompoundWrite.empty();for(let o=0;o<e.length;++o){let l=e[o];if(r(l)){let e;let r=l.path;if(l.snap)pathContains(i,r)?s=compoundWriteAddWrite(s,e=newRelativePath(i,r),l.snap):pathContains(r,i)&&(e=newRelativePath(r,i),s=compoundWriteAddWrite(s,newEmptyPath(),l.snap.getChild(e)));else if(l.children){if(pathContains(i,r))s=compoundWriteAddWrites(s,e=newRelativePath(i,r),l.children);else if(pathContains(r,i)){if(pathIsEmpty(e=newRelativePath(r,i)))s=compoundWriteAddWrites(s,newEmptyPath(),l.children);else{let r=(0,eA.DV)(l.children,pathGetFront(e));if(r){let i=r.getChild(pathPopFront(e));s=compoundWriteAddWrite(s,newEmptyPath(),i)}}}}else throw(0,eA.g5)("WriteRecord should have .snap or .children")}}return s}function writeTreeCalcCompleteEventCache(e,r,i,s,o){if(s||o){let l=compoundWriteChildCompoundWrite(e.visibleWrites,r);if(!o&&compoundWriteIsEmpty(l))return i;if(!o&&null==i&&!compoundWriteHasCompleteWrite(l,newEmptyPath()))return null;{let l=writeTreeLayerTree_(e.allWrites,function(e){return(e.visible||o)&&(!s||!~s.indexOf(e.writeId))&&(pathContains(e.path,r)||pathContains(r,e.path))},r),h=i||ChildrenNode.EMPTY_NODE;return compoundWriteApply(l,h)}}{let s=compoundWriteGetCompleteNode(e.visibleWrites,r);if(null!=s)return s;{let s=compoundWriteChildCompoundWrite(e.visibleWrites,r);if(compoundWriteIsEmpty(s))return i;if(null==i&&!compoundWriteHasCompleteWrite(s,newEmptyPath()))return null;{let e=i||ChildrenNode.EMPTY_NODE;return compoundWriteApply(s,e)}}}}function writeTreeRefCalcCompleteEventCache(e,r,i,s){return writeTreeCalcCompleteEventCache(e.writeTree,e.treePath,r,i,s)}function writeTreeRefCalcCompleteEventChildren(e,r){return function(e,r,i){let s=ChildrenNode.EMPTY_NODE,o=compoundWriteGetCompleteNode(e.visibleWrites,r);if(o)return o.isLeafNode()||o.forEachChild(rP,(e,r)=>{s=s.updateImmediateChild(e,r)}),s;if(i){let o=compoundWriteChildCompoundWrite(e.visibleWrites,r);return i.forEachChild(rP,(e,r)=>{let i=compoundWriteApply(compoundWriteChildCompoundWrite(o,new Path(e)),r);s=s.updateImmediateChild(e,i)}),compoundWriteGetCompleteChildren(o).forEach(e=>{s=s.updateImmediateChild(e.name,e.node)}),s}{let i=compoundWriteChildCompoundWrite(e.visibleWrites,r);return compoundWriteGetCompleteChildren(i).forEach(e=>{s=s.updateImmediateChild(e.name,e.node)}),s}}(e.writeTree,e.treePath,r)}function writeTreeRefCalcEventCacheAfterServerOverwrite(e,r,i,s){return function(e,r,i,s,o){(0,eA.hu)(s||o,"Either existingEventSnap or existingServerSnap must exist");let l=pathChild(r,i);if(compoundWriteHasCompleteWrite(e.visibleWrites,l))return null;{let r=compoundWriteChildCompoundWrite(e.visibleWrites,l);return compoundWriteIsEmpty(r)?o.getChild(i):compoundWriteApply(r,o.getChild(i))}}(e.writeTree,e.treePath,r,i,s)}function writeTreeRefShadowingWrite(e,r){var i,s;return i=e.writeTree,s=pathChild(e.treePath,r),compoundWriteGetCompleteNode(i.visibleWrites,s)}function writeTreeRefCalcCompleteChild(e,r,i){return function(e,r,i,s){let o=pathChild(r,i),l=compoundWriteGetCompleteNode(e.visibleWrites,o);if(null!=l)return l;if(!s.isCompleteForChild(i))return null;{let r=compoundWriteChildCompoundWrite(e.visibleWrites,o);return compoundWriteApply(r,s.getNode().getImmediateChild(i))}}(e.writeTree,e.treePath,r,i)}function writeTreeRefChild(e,r){return newWriteTreeRef(pathChild(e.treePath,r),e.writeTree)}function newWriteTreeRef(e,r){return{treePath:e,writeTree:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ChildChangeAccumulator=class ChildChangeAccumulator{constructor(){this.changeMap=new Map}trackChildChange(e){let r=e.type,i=e.childName;(0,eA.hu)("child_added"===r||"child_changed"===r||"child_removed"===r,"Only child changes supported for tracking"),(0,eA.hu)(".priority"!==i,"Only non-priority child changes can be tracked.");let s=this.changeMap.get(i);if(s){let o=s.type;if("child_added"===r&&"child_removed"===o)this.changeMap.set(i,changeChildChanged(i,e.snapshotNode,s.snapshotNode));else if("child_removed"===r&&"child_added"===o)this.changeMap.delete(i);else if("child_removed"===r&&"child_changed"===o)this.changeMap.set(i,{type:"child_removed",snapshotNode:s.oldSnap,childName:i});else if("child_changed"===r&&"child_added"===o)this.changeMap.set(i,{type:"child_added",snapshotNode:e.snapshotNode,childName:i});else if("child_changed"===r&&"child_changed"===o)this.changeMap.set(i,changeChildChanged(i,e.snapshotNode,s.oldSnap));else throw(0,eA.g5)("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}};let rb=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class{getCompleteChild(e){return null}getChildAfterChild(e,r,i){return null}};let WriteTreeCompleteChildSource=class WriteTreeCompleteChildSource{constructor(e,r,i=null){this.writes_=e,this.viewCache_=r,this.optCompleteServerCache_=i}getCompleteChild(e){let r=this.viewCache_.eventCache;if(r.isCompleteForChild(e))return r.getNode().getImmediateChild(e);{let r=null!=this.optCompleteServerCache_?new CacheNode(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return writeTreeRefCalcCompleteChild(this.writes_,e,r)}}getChildAfterChild(e,r,i){var s;let o=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:viewCacheGetCompleteServerSnap(this.viewCache_),l=function(e,r,i,s,o,l,h){let d;let f=compoundWriteChildCompoundWrite(e.visibleWrites,r),_=compoundWriteGetCompleteNode(f,newEmptyPath());if(null!=_)d=_;else{if(null==i)return[];d=compoundWriteApply(f,i)}if((d=d.withIndex(h)).isEmpty()||d.isLeafNode())return[];{let e=[],r=h.getCompare(),i=l?d.getReverseIteratorFrom(s,h):d.getIteratorFrom(s,h),o=i.getNext();for(;o&&e.length<1;)0!==r(o,s)&&e.push(o),o=i.getNext();return e}}((s=this.writes_).writeTree,s.treePath,o,r,0,i,e);return 0===l.length?null:l[0]}};function viewProcessorGenerateEventCacheAfterServerEvent(e,r,i,s,o,l){let h=r.eventCache;if(null!=writeTreeRefShadowingWrite(s,i))return r;{let d,f;if(pathIsEmpty(i)){if((0,eA.hu)(r.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),r.serverCache.isFiltered()){let i=viewCacheGetCompleteServerSnap(r),o=i instanceof ChildrenNode?i:ChildrenNode.EMPTY_NODE,h=writeTreeRefCalcCompleteEventChildren(s,o);d=e.filter.updateFullNode(r.eventCache.getNode(),h,l)}else{let i=writeTreeRefCalcCompleteEventCache(s,viewCacheGetCompleteServerSnap(r));d=e.filter.updateFullNode(r.eventCache.getNode(),i,l)}}else{let _=pathGetFront(i);if(".priority"===_){(0,eA.hu)(1===pathGetLength(i),"Can't have a priority with additional path components");let o=h.getNode();f=r.serverCache.getNode();let l=writeTreeRefCalcEventCacheAfterServerOverwrite(s,i,o,f);d=null!=l?e.filter.updatePriority(o,l):h.getNode()}else{let g;let A=pathPopFront(i);if(h.isCompleteForChild(_)){f=r.serverCache.getNode();let e=writeTreeRefCalcEventCacheAfterServerOverwrite(s,i,h.getNode(),f);g=null!=e?h.getNode().getImmediateChild(_).updateChild(A,e):h.getNode().getImmediateChild(_)}else g=writeTreeRefCalcCompleteChild(s,_,r.serverCache);d=null!=g?e.filter.updateChild(h.getNode(),_,g,A,o,l):h.getNode()}}return viewCacheUpdateEventSnap(r,d,h.isFullyInitialized()||pathIsEmpty(i),e.filter.filtersNodes())}}function viewProcessorApplyServerOverwrite(e,r,i,s,o,l,h,d){let f;let _=r.serverCache,g=h?e.filter:e.filter.getIndexedFilter();if(pathIsEmpty(i))f=g.updateFullNode(_.getNode(),s,null);else if(g.filtersNodes()&&!_.isFiltered()){let e=_.getNode().updateChild(i,s);f=g.updateFullNode(_.getNode(),e,null)}else{let e=pathGetFront(i);if(!_.isCompleteForPath(i)&&pathGetLength(i)>1)return r;let o=pathPopFront(i),l=_.getNode().getImmediateChild(e),h=l.updateChild(o,s);f=".priority"===e?g.updatePriority(_.getNode(),h):g.updateChild(_.getNode(),e,h,o,rb,null)}let A=viewCacheUpdateServerSnap(r,f,_.isFullyInitialized()||pathIsEmpty(i),g.filtersNodes()),b=new WriteTreeCompleteChildSource(o,A,l);return viewProcessorGenerateEventCacheAfterServerEvent(e,A,i,o,b,d)}function viewProcessorApplyUserOverwrite(e,r,i,s,o,l,h){let d,f;let _=r.eventCache,g=new WriteTreeCompleteChildSource(o,r,l);if(pathIsEmpty(i))f=e.filter.updateFullNode(r.eventCache.getNode(),s,h),d=viewCacheUpdateEventSnap(r,f,!0,e.filter.filtersNodes());else{let o=pathGetFront(i);if(".priority"===o)f=e.filter.updatePriority(r.eventCache.getNode(),s),d=viewCacheUpdateEventSnap(r,f,_.isFullyInitialized(),_.isFiltered());else{let l;let f=pathPopFront(i),A=_.getNode().getImmediateChild(o);if(pathIsEmpty(f))l=s;else{let e=g.getCompleteChild(o);l=null!=e?".priority"===pathGetBack(f)&&e.getChild(pathParent(f)).isEmpty()?e:e.updateChild(f,s):ChildrenNode.EMPTY_NODE}if(A.equals(l))d=r;else{let i=e.filter.updateChild(_.getNode(),o,l,f,g,h);d=viewCacheUpdateEventSnap(r,i,_.isFullyInitialized(),e.filter.filtersNodes())}}}return d}function viewProcessorCacheHasChild(e,r){return e.eventCache.isCompleteForChild(r)}function viewProcessorApplyMerge(e,r,i){return i.foreach((e,i)=>{r=r.updateChild(e,i)}),r}function viewProcessorApplyServerMerge(e,r,i,s,o,l,h,d){let f;if(r.serverCache.getNode().isEmpty()&&!r.serverCache.isFullyInitialized())return r;let _=r;f=pathIsEmpty(i)?s:new ImmutableTree(null).setTree(i,s);let g=r.serverCache.getNode();return f.children.inorderTraversal((i,s)=>{if(g.hasChild(i)){let f=r.serverCache.getNode().getImmediateChild(i),g=viewProcessorApplyMerge(e,f,s);_=viewProcessorApplyServerOverwrite(e,_,new Path(i),g,o,l,h,d)}}),f.children.inorderTraversal((i,s)=>{let f=!r.serverCache.isCompleteForChild(i)&&null===s.value;if(!g.hasChild(i)&&!f){let f=r.serverCache.getNode().getImmediateChild(i),g=viewProcessorApplyMerge(e,f,s);_=viewProcessorApplyServerOverwrite(e,_,new Path(i),g,o,l,h,d)}}),_}function viewApplyOperation(e,r,i,s){var o,l;r.type===eT.MERGE&&null!==r.source.queryId&&((0,eA.hu)(viewCacheGetCompleteServerSnap(e.viewCache_),"We should always have a full cache before handling merges"),(0,eA.hu)(viewCacheGetCompleteEventSnap(e.viewCache_),"Missing event cache, even though we have a server cache"));let h=e.viewCache_,d=function(e,r,i,s,o){let l,h;let d=new ChildChangeAccumulator;if(i.type===eT.OVERWRITE)i.source.fromUser?l=viewProcessorApplyUserOverwrite(e,r,i.path,i.snap,s,o,d):((0,eA.hu)(i.source.fromServer,"Unknown source."),h=i.source.tagged||r.serverCache.isFiltered()&&!pathIsEmpty(i.path),l=viewProcessorApplyServerOverwrite(e,r,i.path,i.snap,s,o,h,d));else if(i.type===eT.MERGE){var f,_;let g;i.source.fromUser?(f=i.path,_=i.children,g=r,_.foreach((i,l)=>{let h=pathChild(f,i);viewProcessorCacheHasChild(r,pathGetFront(h))&&(g=viewProcessorApplyUserOverwrite(e,g,h,l,s,o,d))}),_.foreach((i,l)=>{let h=pathChild(f,i);viewProcessorCacheHasChild(r,pathGetFront(h))||(g=viewProcessorApplyUserOverwrite(e,g,h,l,s,o,d))}),l=g):((0,eA.hu)(i.source.fromServer,"Unknown source."),h=i.source.tagged||r.serverCache.isFiltered(),l=viewProcessorApplyServerMerge(e,r,i.path,i.children,s,o,h,d))}else if(i.type===eT.ACK_USER_WRITE)l=i.revert?function(e,r,i,s,o,l){let h;if(null!=writeTreeRefShadowingWrite(s,i))return r;{let d;let f=new WriteTreeCompleteChildSource(s,r,o),_=r.eventCache.getNode();if(pathIsEmpty(i)||".priority"===pathGetFront(i)){let i;if(r.serverCache.isFullyInitialized())i=writeTreeRefCalcCompleteEventCache(s,viewCacheGetCompleteServerSnap(r));else{let e=r.serverCache.getNode();(0,eA.hu)(e instanceof ChildrenNode,"serverChildren would be complete if leaf node"),i=writeTreeRefCalcCompleteEventChildren(s,e)}d=e.filter.updateFullNode(_,i,l)}else{let o=pathGetFront(i),g=writeTreeRefCalcCompleteChild(s,o,r.serverCache);null==g&&r.serverCache.isCompleteForChild(o)&&(g=_.getImmediateChild(o)),(d=null!=g?e.filter.updateChild(_,o,g,pathPopFront(i),f,l):r.eventCache.getNode().hasChild(o)?e.filter.updateChild(_,o,ChildrenNode.EMPTY_NODE,pathPopFront(i),f,l):_).isEmpty()&&r.serverCache.isFullyInitialized()&&(h=writeTreeRefCalcCompleteEventCache(s,viewCacheGetCompleteServerSnap(r))).isLeafNode()&&(d=e.filter.updateFullNode(d,h,l))}return h=r.serverCache.isFullyInitialized()||null!=writeTreeRefShadowingWrite(s,newEmptyPath()),viewCacheUpdateEventSnap(r,d,h,e.filter.filtersNodes())}}(e,r,i.path,s,o,d):function(e,r,i,s,o,l,h){if(null!=writeTreeRefShadowingWrite(o,i))return r;let d=r.serverCache.isFiltered(),f=r.serverCache;if(null!=s.value){if(pathIsEmpty(i)&&f.isFullyInitialized()||f.isCompleteForPath(i))return viewProcessorApplyServerOverwrite(e,r,i,f.getNode().getChild(i),o,l,d,h);if(!pathIsEmpty(i))return r;{let s=new ImmutableTree(null);return f.getNode().forEachChild(rv,(e,r)=>{s=s.set(new Path(e),r)}),viewProcessorApplyServerMerge(e,r,i,s,o,l,d,h)}}{let _=new ImmutableTree(null);return s.foreach((e,r)=>{let s=pathChild(i,e);f.isCompleteForPath(s)&&(_=_.set(e,f.getNode().getChild(s)))}),viewProcessorApplyServerMerge(e,r,i,_,o,l,d,h)}}(e,r,i.path,i.affectedTree,s,o,d);else if(i.type===eT.LISTEN_COMPLETE)l=function(e,r,i,s,o){let l=r.serverCache,h=viewCacheUpdateServerSnap(r,l.getNode(),l.isFullyInitialized()||pathIsEmpty(i),l.isFiltered());return viewProcessorGenerateEventCacheAfterServerEvent(e,h,i,s,rb,o)}(e,r,i.path,s,d);else throw(0,eA.g5)("Unknown operation type: "+i.type);let g=d.getChanges();return function(e,r,i){let s=r.eventCache;if(s.isFullyInitialized()){let o=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=viewCacheGetCompleteEventSnap(e);!(i.length>0)&&e.eventCache.isFullyInitialized()&&(!o||s.getNode().equals(l))&&s.getNode().getPriority().equals(l.getPriority())||i.push({type:"value",snapshotNode:viewCacheGetCompleteEventSnap(r)})}}(r,l,g),{viewCache:l,changes:g}}(e.processor_,h,r,i,s);return o=e.processor_,l=d.viewCache,(0,eA.hu)(l.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),(0,eA.hu)(l.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),(0,eA.hu)(d.viewCache.serverCache.isFullyInitialized()||!h.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=d.viewCache,function(e,r,i,s){let o=s?[s]:e.eventRegistrations_;return function(e,r,i,s){let o=[],l=[];return r.forEach(r=>{if("child_changed"===r.type&&e.index_.indexedValueChanged(r.oldSnap,r.snapshotNode)){var i;l.push((i=r.childName,{type:"child_moved",snapshotNode:r.snapshotNode,childName:i}))}}),eventGeneratorGenerateEventsForType(e,o,"child_removed",r,s,i),eventGeneratorGenerateEventsForType(e,o,"child_added",r,s,i),eventGeneratorGenerateEventsForType(e,o,"child_moved",l,s,i),eventGeneratorGenerateEventsForType(e,o,"child_changed",r,s,i),eventGeneratorGenerateEventsForType(e,o,"value",r,s,i),o}(e.eventGenerator_,r,i,o)}(e,d.changes,d.viewCache.eventCache.getNode(),null)}function syncPointApplyOperation(e,r,i,s){let o=r.source.queryId;if(null!==o){let l=e.views.get(o);return(0,eA.hu)(null!=l,"SyncTree gave us an op for an invalid query."),viewApplyOperation(l,r,i,s)}{let o=[];for(let l of e.views.values())o=o.concat(viewApplyOperation(l,r,i,s));return o}}function syncPointGetCompleteServerCache(e,r){let i=null;for(let s of e.views.values())i=i||function(e,r){let i=viewCacheGetCompleteServerSnap(e.viewCache_);return i&&(e.query._queryParams.loadsAllData()||!pathIsEmpty(r)&&!i.getImmediateChild(pathGetFront(r)).isEmpty())?i.getChild(r):null}(s,r);return i}let SyncTree=class SyncTree{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ImmutableTree(null),this.pendingWriteTree_={visibleWrites:CompoundWrite.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}};function syncTreeAckUserWrite(e,r,i=!1){let s=function(e,r){for(let i=0;i<e.allWrites.length;i++){let s=e.allWrites[i];if(s.writeId===r)return s}return null}(e.pendingWriteTree_,r),o=function(e,r){let i=e.allWrites.findIndex(e=>e.writeId===r);(0,eA.hu)(i>=0,"removeWrite called with nonexistent writeId.");let s=e.allWrites[i];e.allWrites.splice(i,1);let o=s.visible,l=!1,h=e.allWrites.length-1;for(;o&&h>=0;){let r=e.allWrites[h];r.visible&&(h>=i&&function(e,r){if(e.snap)return pathContains(e.path,r);for(let i in e.children)if(e.children.hasOwnProperty(i)&&pathContains(pathChild(e.path,i),r))return!0;return!1}(r,s.path)?o=!1:pathContains(s.path,r.path)&&(l=!0)),h--}if(!o)return!1;if(l)return e.visibleWrites=writeTreeLayerTree_(e.allWrites,writeTreeDefaultFilter_,newEmptyPath()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1,!0;if(s.snap)e.visibleWrites=compoundWriteRemoveWrite(e.visibleWrites,s.path);else{let r=s.children;each(r,r=>{e.visibleWrites=compoundWriteRemoveWrite(e.visibleWrites,pathChild(s.path,r))})}return!0}(e.pendingWriteTree_,r);if(!o)return[];{let r=new ImmutableTree(null);return null!=s.snap?r=r.set(newEmptyPath(),!0):each(s.children,e=>{r=r.set(new Path(e),!0)}),syncTreeApplyOperationToSyncPoints_(e,new AckUserWrite(s.path,r,i))}}function syncTreeApplyServerOverwrite(e,r,i){return syncTreeApplyOperationToSyncPoints_(e,new Overwrite(newOperationSourceServer(),r,i))}function syncTreeCalcCompleteEventCache(e,r,i){let s=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(r,(e,i)=>{let s=newRelativePath(e,r),o=syncPointGetCompleteServerCache(i,s);if(o)return o});return writeTreeCalcCompleteEventCache(s,r,o,i,!0)}function syncTreeApplyOperationToSyncPoints_(e,r){var i;return function syncTreeApplyOperationHelper_(e,r,i,s){if(pathIsEmpty(e.path))return function syncTreeApplyOperationDescendantsHelper_(e,r,i,s){let o=r.get(newEmptyPath());null==i&&null!=o&&(i=syncPointGetCompleteServerCache(o,newEmptyPath()));let l=[];return r.children.inorderTraversal((r,o)=>{let h=i?i.getImmediateChild(r):null,d=writeTreeRefChild(s,r),f=e.operationForChild(r);f&&(l=l.concat(syncTreeApplyOperationDescendantsHelper_(f,o,h,d)))}),o&&(l=l.concat(syncPointApplyOperation(o,e,s,i))),l}(e,r,i,s);{let o=r.get(newEmptyPath());null==i&&null!=o&&(i=syncPointGetCompleteServerCache(o,newEmptyPath()));let l=[],h=pathGetFront(e.path),d=e.operationForChild(h),f=r.children.get(h);if(f&&d){let e=i?i.getImmediateChild(h):null,r=writeTreeRefChild(s,h);l=l.concat(syncTreeApplyOperationHelper_(d,f,e,r))}return o&&(l=l.concat(syncPointApplyOperation(o,e,s,i))),l}}(r,e.syncPointTree_,null,(i=e.pendingWriteTree_,newWriteTreeRef(newEmptyPath(),i)))}function syncTreeQueryKeyForTag_(e,r){return e.tagToQueryMap.get(r)}function syncTreeParseQueryKey_(e){let r=e.indexOf("$");return(0,eA.hu)(-1!==r&&r<e.length-1,"Bad queryKey."),{queryId:e.substr(r+1),path:new Path(e.substr(0,r))}}function syncTreeApplyTaggedOperation_(e,r,i){let s=e.syncPointTree_.get(r);(0,eA.hu)(s,"Missing sync point for query tag that we're tracking");let o=newWriteTreeRef(r,e.pendingWriteTree_);return syncPointApplyOperation(s,i,o,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ExistingValueProvider=class ExistingValueProvider{constructor(e){this.node_=e}getImmediateChild(e){let r=this.node_.getImmediateChild(e);return new ExistingValueProvider(r)}node(){return this.node_}};let DeferredValueProvider=class DeferredValueProvider{constructor(e,r){this.syncTree_=e,this.path_=r}getImmediateChild(e){let r=pathChild(this.path_,e);return new DeferredValueProvider(this.syncTree_,r)}node(){return syncTreeCalcCompleteEventCache(this.syncTree_,this.path_)}};let resolveDeferredLeafValue=function(e,r,i){return e&&"object"==typeof e?((0,eA.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?resolveScalarDeferredValue(e[".sv"],r,i):"object"==typeof e[".sv"]?resolveComplexDeferredValue(e[".sv"],r):void(0,eA.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},resolveScalarDeferredValue=function(e,r,i){if("timestamp"===e)return i.timestamp;(0,eA.hu)(!1,"Unexpected server value: "+e)},resolveComplexDeferredValue=function(e,r,i){e.hasOwnProperty("increment")||(0,eA.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let s=e.increment;"number"!=typeof s&&(0,eA.hu)(!1,"Unexpected increment value: "+s);let o=r.node();if((0,eA.hu)(null!=o,"Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;let l=o.getValue();return"number"!=typeof l?s:l+s};function resolveDeferredValue(e,r,i){let s;let o=e.getPriority().val(),l=resolveDeferredLeafValue(o,r.getImmediateChild(".priority"),i);if(!e.isLeafNode())return s=e,l!==e.getPriority().val()&&(s=s.updatePriority(new LeafNode(l))),e.forEachChild(rP,(e,o)=>{let l=resolveDeferredValue(o,r.getImmediateChild(e),i);l!==o&&(s=s.updateImmediateChild(e,l))}),s;{let s=resolveDeferredLeafValue(e.getValue(),r,i);return s!==e.getValue()||l!==e.getPriority().val()?new LeafNode(s,nodeFromJSON(l)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tree=class Tree{constructor(e="",r=null,i={children:{},childCount:0}){this.name=e,this.parent=r,this.node=i}};function treeSubTree(e,r){let i=r instanceof Path?r:new Path(r),s=e,o=pathGetFront(i);for(;null!==o;){let e=(0,eA.DV)(s.node.children,o)||{children:{},childCount:0};s=new Tree(o,s,e),o=pathGetFront(i=pathPopFront(i))}return s}function treeGetValue(e){return e.node.value}function treeSetValue(e,r){e.node.value=r,function treeUpdateParents(e){null!==e.parent&&function(e,r,i){let s=void 0===treeGetValue(i)&&!treeHasChildren(i),o=(0,eA.r3)(e.node.children,r);s&&o?(delete e.node.children[r],e.node.childCount--,treeUpdateParents(e)):s||o||(e.node.children[r]=i.node,e.node.childCount++,treeUpdateParents(e))}(e.parent,e.name,e)}(e)}function treeHasChildren(e){return e.node.childCount>0}function treeForEachChild(e,r){each(e.node.children,(i,s)=>{r(new Tree(i,e,s))})}function treeGetPath(e){return new Path(null===e.parent?e.name:treeGetPath(e.parent)+"/"+e.name)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rS=/[\[\].#$\/\u0000-\u001F\u007F]/,rV=/[\[\].#$\u0000-\u001F\u007F]/,isValidKey=function(e){return"string"==typeof e&&0!==e.length&&!rS.test(e)},isValidRootPathString=function(e){var r;return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),"string"==typeof(r=e)&&0!==r.length&&!rV.test(r)},validateFirebaseData=function(e,r,i){let s=i instanceof Path?new ValidationPath(i,e):i;if(void 0===r)throw Error(e+"contains undefined "+validationPathToErrorString(s));if("function"==typeof r)throw Error(e+"contains a function "+validationPathToErrorString(s)+" with contents = "+r.toString());if(isInvalidJSONNumber(r))throw Error(e+"contains "+r.toString()+" "+validationPathToErrorString(s));if("string"==typeof r&&r.length>3495253.3333333335&&(0,eA.ug)(r)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+validationPathToErrorString(s)+" ('"+r.substring(0,50)+"...')");if(r&&"object"==typeof r){let i=!1,o=!1;if(each(r,(r,l)=>{if(".value"===r)i=!0;else if(".priority"!==r&&".sv"!==r&&(o=!0,!isValidKey(r)))throw Error(e+" contains an invalid key ("+r+") "+validationPathToErrorString(s)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(r),s.byteLength_+=(0,eA.ug)(r),validationPathCheckValid(s),validateFirebaseData(e,l,s),function(e){let r=e.parts_.pop();e.byteLength_-=(0,eA.ug)(r),e.parts_.length>0&&(e.byteLength_-=1)}(s)}),i&&o)throw Error(e+' contains ".value" child '+validationPathToErrorString(s)+" in addition to actual children.")}},validateUrl=function(e,r){let i=r.path.toString();if("string"!=typeof r.repoInfo.host||0===r.repoInfo.host.length||!isValidKey(r.repoInfo.namespace)&&"localhost"!==r.repoInfo.host.split(":")[0]||0!==i.length&&!isValidRootPathString(i))throw Error((0,eA.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EventQueue=class EventQueue{constructor(){this.eventLists_=[],this.recursionDepth_=0}};function eventQueueRaiseEventsForChangedPath(e,r,i){!function(e,r){let i=null;for(let s=0;s<r.length;s++){let o=r[s],l=o.getPath();null===i||pathEquals(l,i.path)||(e.eventLists_.push(i),i=null),null===i&&(i={events:[],path:l}),i.events.push(o)}i&&e.eventLists_.push(i)}(e,i),function(e,r){e.recursionDepth_++;let i=!0;for(let s=0;s<e.eventLists_.length;s++){let o=e.eventLists_[s];if(o){let l=o.path;r(l)?(function(e){for(let r=0;r<e.events.length;r++){let i=e.events[r];if(null!==i){e.events[r]=null;let s=i.getEventRunner();rh&&log("event: "+i.toString()),exceptionGuard(s)}}}(e.eventLists_[s]),e.eventLists_[s]=null):i=!1}}i&&(e.eventLists_=[]),e.recursionDepth_--}(e,e=>pathContains(e,r)||pathContains(r,e))}let Repo=class Repo{constructor(e,r,i,s){this.repoInfo_=e,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new EventQueue,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=newSparseSnapshotTree(),this.transactionQueueTree_=new Tree,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}};function repoGenerateServerValues(e){var r;return(r=r={timestamp:function(e){let r=e.infoData_.getNode(new Path(".info/serverTimeOffset")),i=r.val()||0;return new Date().getTime()+i}(e)}).timestamp=r.timestamp||new Date().getTime(),r}function repoOnDataUpdate(e,r,i,s,o){e.dataUpdateCount++;let l=new Path(r);i=e.interceptServerDataCallback_?e.interceptServerDataCallback_(r,i):i;let h=[];if(o){if(s){let r=(0,eA.UI)(i,e=>nodeFromJSON(e));h=function(e,r,i,s){let o=syncTreeQueryKeyForTag_(e,s);if(!o)return[];{let s=syncTreeParseQueryKey_(o),l=s.path,h=s.queryId,d=newRelativePath(l,r),f=ImmutableTree.fromObject(i),_=new Merge(newOperationSourceServerTaggedQuery(h),d,f);return syncTreeApplyTaggedOperation_(e,l,_)}}(e.serverSyncTree_,l,r,o)}else{let r=nodeFromJSON(i);h=function(e,r,i,s){let o=syncTreeQueryKeyForTag_(e,s);if(null==o)return[];{let s=syncTreeParseQueryKey_(o),l=s.path,h=s.queryId,d=newRelativePath(l,r),f=new Overwrite(newOperationSourceServerTaggedQuery(h),d,i);return syncTreeApplyTaggedOperation_(e,l,f)}}(e.serverSyncTree_,l,r,o)}}else if(s){let r=(0,eA.UI)(i,e=>nodeFromJSON(e));h=function(e,r,i){let s=ImmutableTree.fromObject(i);return syncTreeApplyOperationToSyncPoints_(e,new Merge(newOperationSourceServer(),r,s))}(e.serverSyncTree_,l,r)}else{let r=nodeFromJSON(i);h=syncTreeApplyServerOverwrite(e.serverSyncTree_,l,r)}let d=l;h.length>0&&(d=repoRerunTransactions(e,l)),eventQueueRaiseEventsForChangedPath(e.eventQueue_,d,h)}function repoOnConnectStatus(e,r){repoUpdateInfo(e,"connected",r),!1===r&&function(e){repoLog(e,"onDisconnectEvents");let r=repoGenerateServerValues(e),i=newSparseSnapshotTree();sparseSnapshotTreeForEachTree(e.onDisconnect_,newEmptyPath(),(s,o)=>{var l;let h=(l=e.serverSyncTree_,resolveDeferredValue(o,new DeferredValueProvider(l,s),r));!function sparseSnapshotTreeRemember(e,r,i){if(pathIsEmpty(r))e.value=i,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(r,i);else{let s=pathGetFront(r);e.children.has(s)||e.children.set(s,newSparseSnapshotTree());let o=e.children.get(s);sparseSnapshotTreeRemember(o,r=pathPopFront(r),i)}}(i,s,h)});let s=[];sparseSnapshotTreeForEachTree(i,newEmptyPath(),(r,i)=>{s=s.concat(syncTreeApplyServerOverwrite(e.serverSyncTree_,r,i));let o=function(e,r){let i=treeGetPath(repoGetAncestorTransactionNode(e,r)),s=treeSubTree(e.transactionQueueTree_,r);return function(e,r,i){let s=e.parent;for(;null!==s;){if(r(s))return!0;s=s.parent}}(s,r=>{repoAbortTransactionsOnNode(e,r)}),repoAbortTransactionsOnNode(e,s),function treeForEachDescendant(e,r,i,s){i&&!s&&r(e),treeForEachChild(e,e=>{treeForEachDescendant(e,r,!0,s)}),i&&s&&r(e)}(s,r=>{repoAbortTransactionsOnNode(e,r)}),i}(e,r);repoRerunTransactions(e,o)}),e.onDisconnect_=newSparseSnapshotTree(),eventQueueRaiseEventsForChangedPath(e.eventQueue_,newEmptyPath(),s)}(e)}function repoUpdateInfo(e,r,i){let s=new Path("/.info/"+r),o=nodeFromJSON(i);e.infoData_.updateSnapshot(s,o);let l=syncTreeApplyServerOverwrite(e.infoSyncTree_,s,o);eventQueueRaiseEventsForChangedPath(e.eventQueue_,s,l)}function repoLog(e,...r){let i="";e.persistentConnection_&&(i=e.persistentConnection_.id+":"),log(i,...r)}function repoGetLatestState(e,r,i){return syncTreeCalcCompleteEventCache(e.serverSyncTree_,r,i)||ChildrenNode.EMPTY_NODE}function repoRerunTransactions(e,r){let i=repoGetAncestorTransactionNode(e,r),s=treeGetPath(i),o=repoBuildTransactionQueue(e,i);return function(e,r,i){if(0===r.length)return;let s=[],o=[],l=r.filter(e=>0===e.status),h=l.map(e=>e.currentWriteId);for(let l=0;l<r.length;l++){let d=r[l],f=newRelativePath(i,d.path),_=!1,g;if((0,eA.hu)(null!==f,"rerunTransactionsUnderNode_: relativePath should not be null."),4===d.status)_=!0,g=d.abortReason,o=o.concat(syncTreeAckUserWrite(e.serverSyncTree_,d.currentWriteId,!0));else if(0===d.status){if(d.retryCount>=25)_=!0,g="maxretry",o=o.concat(syncTreeAckUserWrite(e.serverSyncTree_,d.currentWriteId,!0));else{let i=repoGetLatestState(e,d.path,h);d.currentInputSnapshot=i;let s=r[l].update(i.val());if(void 0!==s){validateFirebaseData("transaction failed: Data returned ",s,d.path);let r=nodeFromJSON(s),l="object"==typeof s&&null!=s&&(0,eA.r3)(s,".priority");l||(r=r.updatePriority(i.getPriority()));let f=d.currentWriteId,_=repoGenerateServerValues(e),g=resolveDeferredValue(r,new ExistingValueProvider(i),_);d.currentOutputSnapshotRaw=r,d.currentOutputSnapshotResolved=g,d.currentWriteId=e.nextWriteId_++,h.splice(h.indexOf(f),1),o=(o=o.concat(function(e,r,i,s,o){var l,h;return(l=e.pendingWriteTree_,h=o,(0,eA.hu)(s>l.lastWriteId,"Stacking an older write on top of newer ones"),void 0===h&&(h=!0),l.allWrites.push({path:r,snap:i,writeId:s,visible:h}),h&&(l.visibleWrites=compoundWriteAddWrite(l.visibleWrites,r,i)),l.lastWriteId=s,o)?syncTreeApplyOperationToSyncPoints_(e,new Overwrite(newOperationSourceUser(),r,i)):[]}(e.serverSyncTree_,d.path,g,d.currentWriteId,d.applyLocally))).concat(syncTreeAckUserWrite(e.serverSyncTree_,f,!0))}else _=!0,g="nodata",o=o.concat(syncTreeAckUserWrite(e.serverSyncTree_,d.currentWriteId,!0))}}eventQueueRaiseEventsForChangedPath(e.eventQueue_,i,o),o=[],_&&(r[l].status=2,setTimeout(r[l].unwatcher,Math.floor(0)),r[l].onComplete&&("nodata"===g?s.push(()=>r[l].onComplete(null,!1,r[l].currentInputSnapshot)):s.push(()=>r[l].onComplete(Error(g),!1,null))))}repoPruneCompletedTransactionsBelowNode(e,e.transactionQueueTree_);for(let e=0;e<s.length;e++)exceptionGuard(s[e]);(function repoSendReadyTransactions(e,r=e.transactionQueueTree_){if(r||repoPruneCompletedTransactionsBelowNode(e,r),treeGetValue(r)){let i=repoBuildTransactionQueue(e,r);(0,eA.hu)(i.length>0,"Sending zero length transaction queue");let s=i.every(e=>0===e.status);s&&function(e,r,i){let s=i.map(e=>e.currentWriteId),o=repoGetLatestState(e,r,s),l=o,h=o.hash();for(let e=0;e<i.length;e++){let s=i[e];(0,eA.hu)(0===s.status,"tryToSendTransactionQueue_: items in queue should all be run."),s.status=1,s.retryCount++;let o=newRelativePath(r,s.path);l=l.updateChild(o,s.currentOutputSnapshotRaw)}let d=l.val(!0);e.server_.put(r.toString(),d,s=>{repoLog(e,"transaction put response",{path:r.toString(),status:s});let o=[];if("ok"===s){let s=[];for(let r=0;r<i.length;r++)i[r].status=2,o=o.concat(syncTreeAckUserWrite(e.serverSyncTree_,i[r].currentWriteId)),i[r].onComplete&&s.push(()=>i[r].onComplete(null,!0,i[r].currentOutputSnapshotResolved)),i[r].unwatcher();repoPruneCompletedTransactionsBelowNode(e,treeSubTree(e.transactionQueueTree_,r)),repoSendReadyTransactions(e,e.transactionQueueTree_),eventQueueRaiseEventsForChangedPath(e.eventQueue_,r,o);for(let e=0;e<s.length;e++)exceptionGuard(s[e])}else{if("datastale"===s)for(let e=0;e<i.length;e++)3===i[e].status?i[e].status=4:i[e].status=0;else{warn("transaction at "+r.toString()+" failed: "+s);for(let e=0;e<i.length;e++)i[e].status=4,i[e].abortReason=s}repoRerunTransactions(e,r)}},h)}(e,treeGetPath(r),i)}else treeHasChildren(r)&&treeForEachChild(r,r=>{repoSendReadyTransactions(e,r)})})(e,e.transactionQueueTree_)}(e,o,s),s}function repoGetAncestorTransactionNode(e,r){let i;let s=e.transactionQueueTree_;for(i=pathGetFront(r);null!==i&&void 0===treeGetValue(s);)s=treeSubTree(s,i),i=pathGetFront(r=pathPopFront(r));return s}function repoBuildTransactionQueue(e,r){let i=[];return function repoAggregateTransactionQueuesForNode(e,r,i){let s=treeGetValue(r);if(s)for(let e=0;e<s.length;e++)i.push(s[e]);treeForEachChild(r,r=>{repoAggregateTransactionQueuesForNode(e,r,i)})}(e,r,i),i.sort((e,r)=>e.order-r.order),i}function repoPruneCompletedTransactionsBelowNode(e,r){let i=treeGetValue(r);if(i){let e=0;for(let r=0;r<i.length;r++)2!==i[r].status&&(i[e]=i[r],e++);i.length=e,treeSetValue(r,i.length>0?i:void 0)}treeForEachChild(r,r=>{repoPruneCompletedTransactionsBelowNode(e,r)})}function repoAbortTransactionsOnNode(e,r){let i=treeGetValue(r);if(i){let s=[],o=[],l=-1;for(let r=0;r<i.length;r++)3===i[r].status||(1===i[r].status?((0,eA.hu)(l===r-1,"All SENT items should be at beginning of queue."),l=r,i[r].status=3,i[r].abortReason="set"):((0,eA.hu)(0===i[r].status,"Unexpected transaction status in abort"),i[r].unwatcher(),o=o.concat(syncTreeAckUserWrite(e.serverSyncTree_,i[r].currentWriteId,!0)),i[r].onComplete&&s.push(i[r].onComplete.bind(null,Error("set"),!1,null))));-1===l?treeSetValue(r,void 0):i.length=l+1,eventQueueRaiseEventsForChangedPath(e.eventQueue_,treeGetPath(r),o);for(let e=0;e<s.length;e++)exceptionGuard(s[e])}}let parseRepoInfo=function(e,r){let i=parseDatabaseURL(e),s=i.namespace;"firebase.com"===i.domain&&fatal(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),s&&"undefined"!==s||"localhost"===i.domain||fatal("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||warnIfPageIsSecure();let o="ws"===i.scheme||"wss"===i.scheme;return{repoInfo:new RepoInfo(i.host,i.secure,s,o,r,"",s!==i.subdomain),path:new Path(i.pathString)}},parseDatabaseURL=function(e){let r="",i="",s="",o="",l="",h=!0,d="https",f=443;if("string"==typeof e){let _=e.indexOf("//");_>=0&&(d=e.substring(0,_-1),e=e.substring(_+2));let g=e.indexOf("/");-1===g&&(g=e.length);let A=e.indexOf("?");-1===A&&(A=e.length),r=e.substring(0,Math.min(g,A)),g<A&&(o=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let r="",i=e.split("/");for(let e=0;e<i.length;e++)if(i[e].length>0){let s=i[e];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch(e){}r+="/"+s}return r}(e.substring(g,A)));let b=function(e){let r={};for(let i of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===i.length)continue;let s=i.split("=");2===s.length?r[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):warn(`Invalid query segment '${i}' in query '${e}'`)}return r}(e.substring(Math.min(e.length,A)));(_=r.indexOf(":"))>=0?(h="https"===d||"wss"===d,f=parseInt(r.substring(_+1),10)):_=r.length;let k=r.slice(0,_);if("localhost"===k.toLowerCase())i="localhost";else if(k.split(".").length<=2)i=k;else{let e=r.indexOf(".");s=r.substring(0,e).toLowerCase(),i=r.substring(e+1),l=s}"ns"in b&&(l=b.ns)}return{host:r,port:f,domain:i,subdomain:s,secure:h,scheme:d,pathString:o,namespace:l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QueryImpl=class QueryImpl{constructor(e,r,i,s){this._repo=e,this._path=r,this._queryParams=i,this._orderByCalled=s}get key(){return pathIsEmpty(this._path)?null:pathGetBack(this._path)}get ref(){return new ReferenceImpl(this._repo,this._path)}get _queryIdentifier(){let e=queryParamsGetQueryObject(this._queryParams),r=ObjectToUniqueKey(e);return"{}"===r?"default":r}get _queryObject(){return queryParamsGetQueryObject(this._queryParams)}isEqual(e){if(!((e=(0,eA.m9)(e))instanceof QueryImpl))return!1;let r=this._repo===e._repo,i=pathEquals(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return r&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let r="";for(let i=e.pieceNum_;i<e.pieces_.length;i++)""!==e.pieces_[i]&&(r+="/"+encodeURIComponent(String(e.pieces_[i])));return r||"/"}(this._path)}};let ReferenceImpl=class ReferenceImpl extends QueryImpl{constructor(e,r){super(e,r,new QueryParams,!1)}get parent(){let e=pathParent(this._path);return null===e?null:new ReferenceImpl(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}};(0,eA.hu)(!A,"__referenceConstructor has already been defined"),A=ReferenceImpl,(0,eA.hu)(!b,"__referenceConstructor has already been defined"),b=ReferenceImpl;let rN={};let Database=class Database{constructor(e,r){this._repoInternal=e,this.app=r,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,r,i){if(e.stats_=statsManagerGetCollection(e.repoInfo_),e.forceRestClient_||beingCrawled())e.server_=new ReadonlyRestClient(e.repoInfo_,(r,i,s,o)=>{repoOnDataUpdate(e,r,i,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>repoOnConnectStatus(e,!0),0);else{if(null!=i){if("object"!=typeof i)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,eA.Wl)(i)}catch(e){throw Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new PersistentConnection(e.repoInfo_,r,(r,i,s,o)=>{repoOnDataUpdate(e,r,i,s,o)},r=>{repoOnConnectStatus(e,r)},r=>{each(r,(r,i)=>{repoUpdateInfo(e,r,i)})},e.authTokenProvider_,e.appCheckProvider_,i),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=function(e,r){let i=e.toString();return rE[i]||(rE[i]=r()),rE[i]}(e.repoInfo_,()=>new StatsReporter(e.stats_,e.server_)),e.infoData_=new SnapshotHolder,e.infoSyncTree_=new SyncTree({startListening:(r,i,s,o)=>{let l=[],h=e.infoData_.getNode(r._path);return h.isEmpty()||(l=syncTreeApplyServerOverwrite(e.infoSyncTree_,r._path,h),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),repoUpdateInfo(e,"connected",!1),e.serverSyncTree_=new SyncTree({startListening:(r,i,s,o)=>(e.server_.listen(r,s,i,(i,s)=>{let l=o(i,s);eventQueueRaiseEventsForChangedPath(e.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ReferenceImpl(this._repo,newEmptyPath())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,r){let i=rN[r];i&&i[e.key]===e||fatal(`Database ${r}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete i[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&fatal("Cannot call "+e+" on a deleted database.")}};PersistentConnection.prototype.simpleListen=function(e,r){this.sendRequest("q",{p:e},r)},PersistentConnection.prototype.echo=function(e,r){this.sendRequest("echo",{d:e},r)},ri=eP.Jn,(0,eP.Xd)(new eR.wA("database",(e,{instanceIdentifier:r})=>{let i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return function(e,r,i,s,o){var l,h;let d,f,_,g,A=s||e.options.databaseURL;void 0===A&&(e.options.projectId||fatal("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),log("Using default host for project ",e.options.projectId),A=`${e.options.projectId}-default-rtdb.firebaseio.com`);let b=parseRepoInfo(A,o),k=b.repoInfo;void 0!==rt&&rt.env&&(_=rt.env.FIREBASE_DATABASE_EMULATOR_HOST),_?(g=!0,k=(b=parseRepoInfo(A=`http://${_}?ns=${k.namespace}`,o)).repoInfo):g=!b.repoInfo.secure;let M=o&&g?new EmulatorTokenProvider(EmulatorTokenProvider.OWNER):new FirebaseAuthTokenProvider(e.name,e.options,r);validateUrl("Invalid Firebase Database URL",b),pathIsEmpty(b.path)||fatal("Database URL must point to the root of a Firebase Database (not including a child path).");let q=(l=k,h=new AppCheckTokenProvider(e,i),(d=rN[e.name])||(d={},rN[e.name]=d),(f=d[l.toURLString()])&&fatal("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),f=new Repo(l,!1,M,h),d[l.toURLString()]=f,f);return new Database(q,e)}(i,s,o,r)},"PUBLIC").setMultipleInstances(!0)),(0,eP.KN)(rr,rn,void 0),(0,eP.KN)(rr,rn,"esm2020");let rk={projectId:"prvail-69138435-b4295",appId:"1:71673449111:web:8a58435afa823e9ab6f7d2",databaseURL:"https://prvail-69138435-b4295-default-rtdb.firebaseio.com",storageBucket:"prvail-69138435-b4295.appspot.com",apiKey:"AIzaSyDowvxbna9N8icvun4_6vyys2dzl1KQ_a4",authDomain:"prvail-69138435-b4295.firebaseapp.com",messagingSenderId:"71673449111",measurementId:"G-9MHNCTH6DR"},rD=(0,eP.ZF)(rk);!function(e=(0,eP.Mq)(),r){e=(0,eA.m9)(e);let i=(0,eP.qX)(e,eV),s=i.getImmediate({identifier:void 0}),o=(0,eA.P0)("storage");o&&function(e,r,i,s={}){!function(e,r,i,s={}){e.host=`${r}:${i}`;let o=(0,eA.Xx)(r);o&&((0,eA.Uo)(`https://${e.host}/b`),(0,eA.dp)("Storage",!0)),e._isUsingEmulator=!0,e._protocol=o?"https":"http";let{mockUserToken:l}=s;l&&(e._overrideAuthToken="string"==typeof l?l:(0,eA.Sg)(l,e.app.options.projectId))}(e,r,i,s)}(s,...o)}(rD);let rO=function(e=(0,eP.Mq)()){let r=(0,eP.qX)(e,"auth");if(r.isInitialized())return r.getImmediate();let i=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,r){let i=(0,eP.qX)(e,"auth");if(i.isInitialized()){let e=i.getImmediate(),s=i.getOptions();if((0,eA.vZ)(s,r??{}))return e;_fail(e,"already-initialized")}let s=i.initialize({options:r});return s}(e,{popupRedirectResolver:td,persistence:[IndexedDBLocalPersistence,BrowserLocalPersistence,BrowserSessionPersistence]}),s=(0,eA.Pz)("authTokenSyncURL");if(s&&"boolean"==typeof isSecureContext&&isSecureContext){let e=new URL(s,location.origin);if(location.origin===e.origin){let r=mintCookieFactory(e.toString());(0,eA.m9)(i).beforeAuthStateChanged(r,()=>r(i.currentUser)),(0,eA.m9)(i).onIdTokenChanged(e=>r(e),void 0,void 0)}}let o=(0,eA.q4)("auth");return o&&function(e,r,i){let s=_castAuth(e);_assert(/^https?:\/\//.test(r),s,"invalid-emulator-scheme");let o=extractProtocol(r),{host:l,port:h}=function(e){let r=extractProtocol(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(r.length));if(!i)return{host:"",port:null};let s=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){let e=o[1];return{host:e,port:parsePort(s.substr(e.length+1))}}{let[e,r]=s.split(":");return{host:e,port:parsePort(r)}}}(r),d=null===h?"":`:${h}`,f={url:`${o}//${l}${d}/`},_=Object.freeze({host:l,port:h,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!s._canInitEmulator){_assert(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_assert((0,eA.vZ)(f,s.config.emulator)&&(0,eA.vZ)(_,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=f,s.emulatorConfig=_,s.settings.appVerificationDisabledForTesting=!0,(0,eA.Xx)(l)?((0,eA.Uo)(`${o}//${l}${d}`),(0,eA.dp)("Auth",!0)):function(){function attachBanner(){let e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",attachBanner):attachBanner())}()}(i,`http://${o}`),i}(rD),rL=function(e,r){let i="object"==typeof e?e:(0,eP.Mq)(),s=(0,eP.qX)(i,"firestore").getImmediate({identifier:"string"==typeof e?e:tO});if(!s._initialized){let e=(0,eA.P0)("firestore");e&&function(e,r,i,s={}){e=__PRIVATE_cast(e,Firestore$1);let o=(0,eA.Xx)(r),l=e._getSettings(),h={...l,emulatorOptions:e._getEmulatorOptions()},d=`${r}:${i}`;o&&((0,eA.Uo)(`https://${d}`),(0,eA.dp)("Firestore",!0)),l.host!==t5&&l.host!==d&&__PRIVATE_logWarn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let f={...l,host:d,ssl:o,emulatorOptions:s};if(!(0,eA.vZ)(f,h)&&(e._setSettings(f),s.mockUserToken)){let r,i;if("string"==typeof s.mockUserToken)r=s.mockUserToken,i=User.MOCK_USER;else{r=(0,eA.Sg)(s.mockUserToken,e._app?.options.projectId);let o=s.mockUserToken.sub||s.mockUserToken.user_id;if(!o)throw new FirestoreError(tw.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new User(o)}e._authCredentials=new __PRIVATE_EmulatorAuthCredentialsProvider(new __PRIVATE_OAuthToken(r,i))}}(s,...e)}return s}(rD);!function(e=(0,eP.Mq)(),r){let i=(0,eP.qX)(e,"database").getImmediate({identifier:void 0});if(!i._instanceStarted){let e=(0,eA.P0)("database");e&&function(e,r,i,s={}){let o;(e=(0,eA.m9)(e))._checkNotDeleted("useEmulator");let l=`${r}:${i}`,h=e._repoInternal;if(e._instanceStarted){if(l===e._repoInternal.repoInfo_.host&&(0,eA.vZ)(s,h.repoInfo_.emulatorOptions))return;fatal("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}if(h.repoInfo_.nodeAdmin)s.mockUserToken&&fatal('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new EmulatorTokenProvider(EmulatorTokenProvider.OWNER);else if(s.mockUserToken){let r="string"==typeof s.mockUserToken?s.mockUserToken:(0,eA.Sg)(s.mockUserToken,e.app.options.projectId);o=new EmulatorTokenProvider(r)}(0,eA.Xx)(r)&&((0,eA.Uo)(r),(0,eA.dp)("Database",!0)),function(e,r,i,s){let o=r.lastIndexOf(":"),l=r.substring(0,o),h=(0,eA.Xx)(l);e.repoInfo_=new RepoInfo(r,h,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,i),s&&(e.authTokenProvider_=s)}(h,l,s,o)}(i,...e)}}(rD);let rx=/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e=(0,eP.Mq)(),r){e=(0,eA.m9)(e);let i=(0,eP.qX)(e,"AI"),s=r?.backend??new GoogleAIBackend,o={useLimitedUseAppCheckTokens:r?.useLimitedUseAppCheckTokens??!1},l=/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(e instanceof GoogleAIBackend)return"AI/googleai";if(e instanceof VertexAIBackend)return`AI/vertexai/${e.location}`;throw new AIError(eU.ERROR,`Invalid backend: ${JSON.stringify(e.backendType)}`)}(s),h=i.getImmediate({identifier:l});return h.options=o,h}(rD,{backend:new VertexAIBackend});!function(e,r,i){let s;if(!(s=r.mode?r.inCloudParams||{model:"gemini-2.0-flash-lite"}:r).model)throw new AIError(eU.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");let o=e.chromeAdapterFactory?.(r.mode,"undefined"==typeof window?void 0:window,r.onDeviceParams);new GenerativeModel(e,s,void 0,o)}(rx,{model:"gemini-2.5-flash"});var rM=i(7294),components_Auth=()=>{let[e,r]=(0,rM.useState)(""),[i,s]=(0,rM.useState)(""),[o,l]=(0,rM.useState)(!0),[h,d]=(0,rM.useState)(null),handleSubmit=async r=>{r.preventDefault(),d(null);try{o?await createUserWithEmailAndPassword(rO,e,i):await ((0,eP.rh)(rO.app)?Promise.reject(_serverAppCurrentUserOperationNotSupportedError(rO)):signInWithCredential((0,eA.m9)(rO),EmailAuthProvider.credential(e,i)).catch(async e=>{throw"auth/password-does-not-meet-requirements"===e.code&&recachePasswordPolicy(rO),e}))}catch(e){d(e.message)}};return(0,ev.jsxs)("div",{className:"w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-8",children:[(0,ev.jsx)("h2",{className:"text-2xl font-bold text-center text-gray-800 mb-6",children:o?"Sign Up":"Log In"}),(0,ev.jsxs)("form",{onSubmit:handleSubmit,children:[(0,ev.jsx)("div",{className:"mb-4",children:(0,ev.jsx)("input",{type:"email",value:e,onChange:e=>r(e.target.value),placeholder:"Email",className:"w-full p-3 border border-gray-300 rounded-lg"})}),(0,ev.jsx)("div",{className:"mb-4",children:(0,ev.jsx)("input",{type:"password",value:i,onChange:e=>s(e.target.value),placeholder:"Password",className:"w-full p-3 border border-gray-300 rounded-lg"})}),(0,ev.jsx)("button",{type:"submit",className:"w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg",children:o?"Sign Up":"Log In"}),h&&(0,ev.jsx)("p",{className:"text-red-500 text-center mt-4",children:h})]}),(0,ev.jsx)("button",{onClick:()=>l(!o),className:"w-full text-center text-blue-500 mt-4",children:o?"Already have an account? Log In":"Need to create an account? Sign Up"})]})},rF=i(6549),components_Dashboard=()=>{let[e,r]=(0,rM.useState)([]);(0,rM.useEffect)(()=>{if(rO.currentUser){let e=function(e,r,...i){let s=[];for(let o of(r instanceof AppliableConstraint&&s.push(r),function(e){let r=e.filter(e=>e instanceof QueryCompositeFilterConstraint).length,i=e.filter(e=>e instanceof QueryFieldFilterConstraint).length;if(r>1||r>0&&i>0)throw new FirestoreError(tw.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s=s.concat(i)),s))e=o._apply(e);return e}(function(e,r,...i){if(e=(0,eA.m9)(e),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,r,i){if(!i)throw new FirestoreError(tw.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${r}.`)}("collection","path",r),e instanceof Firestore$1){let s=ResourcePath.fromString(r,...i);return __PRIVATE_validateCollectionPath(s),new CollectionReference(e,null,s)}{if(!(e instanceof DocumentReference||e instanceof CollectionReference))throw new FirestoreError(tw.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let s=e._path.child(ResourcePath.fromString(r,...i));return __PRIVATE_validateCollectionPath(s),new CollectionReference(e.firestore,null,s)}}(rL,"snippets"),function(e,r,i){let s=__PRIVATE_fieldPathFromArgument("where",e);return QueryFieldFilterConstraint._create(s,"==",i)}("userId",0,rO.currentUser.uid),function(e,r="asc"){let i=__PRIVATE_fieldPathFromArgument("orderBy",e);return QueryOrderByConstraint._create(i,r)}("createdAt","desc")),i=function(e,...r){let i,s,o;e=(0,eA.m9)(e);let l={includeMetadataChanges:!1,source:"default"},h=0;"object"!=typeof r[0]||__PRIVATE_isPartialObserver(r[h])||(l=r[h++]);let d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(__PRIVATE_isPartialObserver(r[h])){let e=r[h];r[h]=e.next?.bind(e),r[h+1]=e.error?.bind(e),r[h+2]=e.complete?.bind(e)}if(e instanceof DocumentReference){var f;s=__PRIVATE_cast(e.firestore,Firestore),f=e._key.path,o=new __PRIVATE_QueryImpl(f),i={next:i=>{r[h]&&r[h](function(e,r,i){let s=i.docs.get(r._key),o=new __PRIVATE_ExpUserDataWriter(e);return new DocumentSnapshot(e,o,r._key,s,new SnapshotMetadata(i.hasPendingWrites,i.fromCache),r.converter)}(s,e,i))},error:r[h+1],complete:r[h+2]}}else{let l=__PRIVATE_cast(e,Query);s=__PRIVATE_cast(l.firestore,Firestore),o=l._query;let d=new __PRIVATE_ExpUserDataWriter(s);i={next:e=>{r[h]&&r[h](new QuerySnapshot(s,d,l,e))},error:r[h+1],complete:r[h+2]},/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new FirestoreError(tw.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query)}return function(e,r,i,s){let o=new __PRIVATE_AsyncObserver(s),l=new __PRIVATE_QueryListener(r,o,i);return e.asyncQueue.enqueueAndForget(async()=>__PRIVATE_eventManagerListen(await __PRIVATE_getEventManager(e),l)),()=>{o.Nu(),e.asyncQueue.enqueueAndForget(async()=>__PRIVATE_eventManagerUnlisten(await __PRIVATE_getEventManager(e),l))}}(function(e){if(e._terminated)throw new FirestoreError(tw.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var r,i,s;let o=e._freezeSettings(),l=(r=e._databaseId,i=e._app?.options.appId||"",s=e._persistenceKey,new DatabaseInfo(r,i,s,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,__PRIVATE_cloneLongPollingOptions(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator));e._componentsProvider||o.localCache?._offlineComponentProvider&&o.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),e._firestoreClient=new FirestoreClient(e._authCredentials,e._appCheckCredentials,e._queue,l,e._componentsProvider&&function(e){let r=e?._online.build();return{_offline:e?._offline.build(r),_online:r}}(e._componentsProvider))}(e),e._firestoreClient}(s),o,d,i)}(e,e=>{let i=[];e.forEach(e=>{i.push({id:e.id,...e.data()})}),r(i)});return()=>i()}},[]);let handleLogout=async()=>{try{await (0,eA.m9)(rO).signOut()}catch(e){console.error("Error logging out:",e)}};return(0,ev.jsxs)("div",{className:"w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8",children:[(0,ev.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,ev.jsx)("h2",{className:"text-3xl font-bold text-gray-800",children:"Dashboard"}),(0,ev.jsx)("button",{onClick:handleLogout,className:"bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg",children:"Logout"})]}),(0,ev.jsxs)("div",{children:[(0,ev.jsx)("h3",{className:"text-2xl font-semibold mb-4",children:"Your Saved Snippets"}),e.length>0?(0,ev.jsx)("div",{className:"space-y-4",children:e.map(e=>(0,ev.jsxs)("div",{className:"bg-gray-100 p-4 rounded-lg",children:[(0,ev.jsx)("p",{className:"font-semibold",children:e.prompt}),(0,ev.jsx)("pre",{className:"bg-gray-900 text-white p-4 rounded-md mt-2 whitespace-pre-wrap",children:(0,ev.jsx)("code",{children:e.code})})]},e.id))}):(0,ev.jsx)("p",{children:"You haven't generated any code snippets yet."})]})]})};(0,eP.ZF)(rk);var _app=function(e){let{Component:r,pageProps:i}=e,[s,o]=(0,rM.useState)(null);return(0,rM.useEffect)(()=>{let e=(0,eA.m9)(rO).onAuthStateChanged(e=>{o(e)},void 0,void 0);return()=>e()},[]),(0,ev.jsx)("div",{className:"min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4",children:s?(0,ev.jsxs)(ev.Fragment,{children:[(0,ev.jsx)(components_Dashboard,{}),(0,ev.jsx)(rF.Z,{})]}):(0,ev.jsx)(components_Auth,{})})}},1876:function(e){!function(){var r={675:function(e,r){"use strict";r.byteLength=function(e){var r=getLens(e),i=r[0],s=r[1];return(i+s)*3/4-s},r.toByteArray=function(e){var r,i,l=getLens(e),h=l[0],d=l[1],f=new o((h+d)*3/4-d),_=0,g=d>0?h-4:h;for(i=0;i<g;i+=4)r=s[e.charCodeAt(i)]<<18|s[e.charCodeAt(i+1)]<<12|s[e.charCodeAt(i+2)]<<6|s[e.charCodeAt(i+3)],f[_++]=r>>16&255,f[_++]=r>>8&255,f[_++]=255&r;return 2===d&&(r=s[e.charCodeAt(i)]<<2|s[e.charCodeAt(i+1)]>>4,f[_++]=255&r),1===d&&(r=s[e.charCodeAt(i)]<<10|s[e.charCodeAt(i+1)]<<4|s[e.charCodeAt(i+2)]>>2,f[_++]=r>>8&255,f[_++]=255&r),f},r.fromByteArray=function(e){for(var r,s=e.length,o=s%3,l=[],h=0,d=s-o;h<d;h+=16383)l.push(function(e,r,s){for(var o,l=[],h=r;h<s;h+=3)l.push(i[(o=(e[h]<<16&16711680)+(e[h+1]<<8&65280)+(255&e[h+2]))>>18&63]+i[o>>12&63]+i[o>>6&63]+i[63&o]);return l.join("")}(e,h,h+16383>d?d:h+16383));return 1===o?l.push(i[(r=e[s-1])>>2]+i[r<<4&63]+"=="):2===o&&l.push(i[(r=(e[s-2]<<8)+e[s-1])>>10]+i[r>>4&63]+i[r<<2&63]+"="),l.join("")};for(var i=[],s=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h=0,d=l.length;h<d;++h)i[h]=l[h],s[l.charCodeAt(h)]=h;function getLens(e){var r=e.length;if(r%4>0)throw Error("Invalid string. Length must be a multiple of 4");var i=e.indexOf("=");-1===i&&(i=r);var s=i===r?0:4-i%4;return[i,s]}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63},72:function(e,r,i){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var s=i(675),o=i(783),l="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function createBuffer(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');var r=new Uint8Array(e);return Object.setPrototypeOf(r,Buffer.prototype),r}function Buffer(e,r,i){if("number"==typeof e){if("string"==typeof r)throw TypeError('The "string" argument must be of type string. Received type number');return allocUnsafe(e)}return from(e,r,i)}function from(e,r,i){if("string"==typeof e)return function(e,r){if(("string"!=typeof r||""===r)&&(r="utf8"),!Buffer.isEncoding(r))throw TypeError("Unknown encoding: "+r);var i=0|byteLength(e,r),s=createBuffer(i),o=s.write(e,r);return o!==i&&(s=s.slice(0,o)),s}(e,r);if(ArrayBuffer.isView(e))return fromArrayLike(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(isInstance(e,ArrayBuffer)||e&&isInstance(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(isInstance(e,SharedArrayBuffer)||e&&isInstance(e.buffer,SharedArrayBuffer)))return function(e,r,i){var s;if(r<0||e.byteLength<r)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<r+(i||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(s=void 0===r&&void 0===i?new Uint8Array(e):void 0===i?new Uint8Array(e,r):new Uint8Array(e,r,i),Buffer.prototype),s}(e,r,i);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var s=e.valueOf&&e.valueOf();if(null!=s&&s!==e)return Buffer.from(s,r,i);var o=function(e){if(Buffer.isBuffer(e)){var r,i=0|checked(e.length),s=createBuffer(i);return 0===s.length||e.copy(s,0,0,i),s}return void 0!==e.length?"number"!=typeof e.length||(r=e.length)!=r?createBuffer(0):fromArrayLike(e):"Buffer"===e.type&&Array.isArray(e.data)?fromArrayLike(e.data):void 0}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return Buffer.from(e[Symbol.toPrimitive]("string"),r,i);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function assertSize(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function allocUnsafe(e){return assertSize(e),createBuffer(e<0?0:0|checked(e))}function fromArrayLike(e){for(var r=e.length<0?0:0|checked(e.length),i=createBuffer(r),s=0;s<r;s+=1)i[s]=255&e[s];return i}function checked(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function byteLength(e,r){if(Buffer.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||isInstance(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var i=e.length,s=arguments.length>2&&!0===arguments[2];if(!s&&0===i)return 0;for(var o=!1;;)switch(r){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return utf8ToBytes(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*i;case"hex":return i>>>1;case"base64":return base64ToBytes(e).length;default:if(o)return s?-1:utf8ToBytes(e).length;r=(""+r).toLowerCase(),o=!0}}function slowToString(e,r,i){var o,l,h=!1;if((void 0===r||r<0)&&(r=0),r>this.length||((void 0===i||i>this.length)&&(i=this.length),i<=0||(i>>>=0)<=(r>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,r,i){var s=e.length;(!r||r<0)&&(r=0),(!i||i<0||i>s)&&(i=s);for(var o="",l=r;l<i;++l)o+=d[e[l]];return o}(this,r,i);case"utf8":case"utf-8":return utf8Slice(this,r,i);case"ascii":return function(e,r,i){var s="";i=Math.min(e.length,i);for(var o=r;o<i;++o)s+=String.fromCharCode(127&e[o]);return s}(this,r,i);case"latin1":case"binary":return function(e,r,i){var s="";i=Math.min(e.length,i);for(var o=r;o<i;++o)s+=String.fromCharCode(e[o]);return s}(this,r,i);case"base64":return o=r,l=i,0===o&&l===this.length?s.fromByteArray(this):s.fromByteArray(this.slice(o,l));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,r,i){for(var s=e.slice(r,i),o="",l=0;l<s.length;l+=2)o+=String.fromCharCode(s[l]+256*s[l+1]);return o}(this,r,i);default:if(h)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),h=!0}}function swap(e,r,i){var s=e[r];e[r]=e[i],e[i]=s}function bidirectionalIndexOf(e,r,i,s,o){var l;if(0===e.length)return -1;if("string"==typeof i?(s=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),(l=i=+i)!=l&&(i=o?0:e.length-1),i<0&&(i=e.length+i),i>=e.length){if(o)return -1;i=e.length-1}else if(i<0){if(!o)return -1;i=0}if("string"==typeof r&&(r=Buffer.from(r,s)),Buffer.isBuffer(r))return 0===r.length?-1:arrayIndexOf(e,r,i,s,o);if("number"==typeof r)return(r&=255,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(e,r,i):Uint8Array.prototype.lastIndexOf.call(e,r,i):arrayIndexOf(e,[r],i,s,o);throw TypeError("val must be string, number or Buffer")}function arrayIndexOf(e,r,i,s,o){var l,h=1,d=e.length,f=r.length;if(void 0!==s&&("ucs2"===(s=String(s).toLowerCase())||"ucs-2"===s||"utf16le"===s||"utf-16le"===s)){if(e.length<2||r.length<2)return -1;h=2,d/=2,f/=2,i/=2}function read(e,r){return 1===h?e[r]:e.readUInt16BE(r*h)}if(o){var _=-1;for(l=i;l<d;l++)if(read(e,l)===read(r,-1===_?0:l-_)){if(-1===_&&(_=l),l-_+1===f)return _*h}else -1!==_&&(l-=l-_),_=-1}else for(i+f>d&&(i=d-f),l=i;l>=0;l--){for(var g=!0,A=0;A<f;A++)if(read(e,l+A)!==read(r,A)){g=!1;break}if(g)return l}return -1}function utf8Slice(e,r,i){i=Math.min(e.length,i);for(var s=[],o=r;o<i;){var l,h,d,f,_=e[o],g=null,A=_>239?4:_>223?3:_>191?2:1;if(o+A<=i)switch(A){case 1:_<128&&(g=_);break;case 2:(192&(l=e[o+1]))==128&&(f=(31&_)<<6|63&l)>127&&(g=f);break;case 3:l=e[o+1],h=e[o+2],(192&l)==128&&(192&h)==128&&(f=(15&_)<<12|(63&l)<<6|63&h)>2047&&(f<55296||f>57343)&&(g=f);break;case 4:l=e[o+1],h=e[o+2],d=e[o+3],(192&l)==128&&(192&h)==128&&(192&d)==128&&(f=(15&_)<<18|(63&l)<<12|(63&h)<<6|63&d)>65535&&f<1114112&&(g=f)}null===g?(g=65533,A=1):g>65535&&(g-=65536,s.push(g>>>10&1023|55296),g=56320|1023&g),s.push(g),o+=A}return function(e){var r=e.length;if(r<=4096)return String.fromCharCode.apply(String,e);for(var i="",s=0;s<r;)i+=String.fromCharCode.apply(String,e.slice(s,s+=4096));return i}(s)}function checkOffset(e,r,i){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+r>i)throw RangeError("Trying to access beyond buffer length")}function checkInt(e,r,i,s,o,l){if(!Buffer.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<l)throw RangeError('"value" argument is out of bounds');if(i+s>e.length)throw RangeError("Index out of range")}function checkIEEE754(e,r,i,s,o,l){if(i+s>e.length||i<0)throw RangeError("Index out of range")}function writeFloat(e,r,i,s,l){return r=+r,i>>>=0,l||checkIEEE754(e,r,i,4,34028234663852886e22,-34028234663852886e22),o.write(e,r,i,s,23,4),i+4}function writeDouble(e,r,i,s,l){return r=+r,i>>>=0,l||checkIEEE754(e,r,i,8,17976931348623157e292,-17976931348623157e292),o.write(e,r,i,s,52,8),i+8}r.Buffer=Buffer,r.SlowBuffer=function(e){return+e!=e&&(e=0),Buffer.alloc(+e)},r.INSPECT_MAX_BYTES=50,r.kMaxLength=2147483647,Buffer.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(e,r),42===e.foo()}catch(e){return!1}}(),Buffer.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Buffer.prototype,"parent",{enumerable:!0,get:function(){if(Buffer.isBuffer(this))return this.buffer}}),Object.defineProperty(Buffer.prototype,"offset",{enumerable:!0,get:function(){if(Buffer.isBuffer(this))return this.byteOffset}}),Buffer.poolSize=8192,Buffer.from=function(e,r,i){return from(e,r,i)},Object.setPrototypeOf(Buffer.prototype,Uint8Array.prototype),Object.setPrototypeOf(Buffer,Uint8Array),Buffer.alloc=function(e,r,i){return(assertSize(e),e<=0)?createBuffer(e):void 0!==r?"string"==typeof i?createBuffer(e).fill(r,i):createBuffer(e).fill(r):createBuffer(e)},Buffer.allocUnsafe=function(e){return allocUnsafe(e)},Buffer.allocUnsafeSlow=function(e){return allocUnsafe(e)},Buffer.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==Buffer.prototype},Buffer.compare=function(e,r){if(isInstance(e,Uint8Array)&&(e=Buffer.from(e,e.offset,e.byteLength)),isInstance(r,Uint8Array)&&(r=Buffer.from(r,r.offset,r.byteLength)),!Buffer.isBuffer(e)||!Buffer.isBuffer(r))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;for(var i=e.length,s=r.length,o=0,l=Math.min(i,s);o<l;++o)if(e[o]!==r[o]){i=e[o],s=r[o];break}return i<s?-1:s<i?1:0},Buffer.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Buffer.concat=function(e,r){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Buffer.alloc(0);if(void 0===r)for(i=0,r=0;i<e.length;++i)r+=e[i].length;var i,s=Buffer.allocUnsafe(r),o=0;for(i=0;i<e.length;++i){var l=e[i];if(isInstance(l,Uint8Array)&&(l=Buffer.from(l)),!Buffer.isBuffer(l))throw TypeError('"list" argument must be an Array of Buffers');l.copy(s,o),o+=l.length}return s},Buffer.byteLength=byteLength,Buffer.prototype._isBuffer=!0,Buffer.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<e;r+=2)swap(this,r,r+1);return this},Buffer.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<e;r+=4)swap(this,r,r+3),swap(this,r+1,r+2);return this},Buffer.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<e;r+=8)swap(this,r,r+7),swap(this,r+1,r+6),swap(this,r+2,r+5),swap(this,r+3,r+4);return this},Buffer.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?utf8Slice(this,0,e):slowToString.apply(this,arguments)},Buffer.prototype.toLocaleString=Buffer.prototype.toString,Buffer.prototype.equals=function(e){if(!Buffer.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===Buffer.compare(this,e)},Buffer.prototype.inspect=function(){var e="",i=r.INSPECT_MAX_BYTES;return e=this.toString("hex",0,i).replace(/(.{2})/g,"$1 ").trim(),this.length>i&&(e+=" ... "),"<Buffer "+e+">"},l&&(Buffer.prototype[l]=Buffer.prototype.inspect),Buffer.prototype.compare=function(e,r,i,s,o){if(isInstance(e,Uint8Array)&&(e=Buffer.from(e,e.offset,e.byteLength)),!Buffer.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===r&&(r=0),void 0===i&&(i=e?e.length:0),void 0===s&&(s=0),void 0===o&&(o=this.length),r<0||i>e.length||s<0||o>this.length)throw RangeError("out of range index");if(s>=o&&r>=i)return 0;if(s>=o)return -1;if(r>=i)return 1;if(r>>>=0,i>>>=0,s>>>=0,o>>>=0,this===e)return 0;for(var l=o-s,h=i-r,d=Math.min(l,h),f=this.slice(s,o),_=e.slice(r,i),g=0;g<d;++g)if(f[g]!==_[g]){l=f[g],h=_[g];break}return l<h?-1:h<l?1:0},Buffer.prototype.includes=function(e,r,i){return -1!==this.indexOf(e,r,i)},Buffer.prototype.indexOf=function(e,r,i){return bidirectionalIndexOf(this,e,r,i,!0)},Buffer.prototype.lastIndexOf=function(e,r,i){return bidirectionalIndexOf(this,e,r,i,!1)},Buffer.prototype.write=function(e,r,i,s){if(void 0===r)s="utf8",i=this.length,r=0;else if(void 0===i&&"string"==typeof r)s=r,i=this.length,r=0;else if(isFinite(r))r>>>=0,isFinite(i)?(i>>>=0,void 0===s&&(s="utf8")):(s=i,i=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,l,h,d,f,_,g,A,b,k,M,q,j=this.length-r;if((void 0===i||i>j)&&(i=j),e.length>0&&(i<0||r<0)||r>this.length)throw RangeError("Attempt to write outside buffer bounds");s||(s="utf8");for(var $=!1;;)switch(s){case"hex":return function(e,r,i,s){i=Number(i)||0;var o=e.length-i;s?(s=Number(s))>o&&(s=o):s=o;var l=r.length;s>l/2&&(s=l/2);for(var h=0;h<s;++h){var d=parseInt(r.substr(2*h,2),16);if(d!=d)break;e[i+h]=d}return h}(this,e,r,i);case"utf8":case"utf-8":return f=r,_=i,blitBuffer(utf8ToBytes(e,this.length-f),this,f,_);case"ascii":return g=r,A=i,blitBuffer(asciiToBytes(e),this,g,A);case"latin1":case"binary":return o=this,l=e,h=r,d=i,blitBuffer(asciiToBytes(l),o,h,d);case"base64":return b=r,k=i,blitBuffer(base64ToBytes(e),this,b,k);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return M=r,q=i,blitBuffer(function(e,r){for(var i,s,o=[],l=0;l<e.length&&!((r-=2)<0);++l)s=(i=e.charCodeAt(l))>>8,o.push(i%256),o.push(s);return o}(e,this.length-M),this,M,q);default:if($)throw TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),$=!0}},Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},Buffer.prototype.slice=function(e,r){var i=this.length;e=~~e,r=void 0===r?i:~~r,e<0?(e+=i)<0&&(e=0):e>i&&(e=i),r<0?(r+=i)<0&&(r=0):r>i&&(r=i),r<e&&(r=e);var s=this.subarray(e,r);return Object.setPrototypeOf(s,Buffer.prototype),s},Buffer.prototype.readUIntLE=function(e,r,i){e>>>=0,r>>>=0,i||checkOffset(e,r,this.length);for(var s=this[e],o=1,l=0;++l<r&&(o*=256);)s+=this[e+l]*o;return s},Buffer.prototype.readUIntBE=function(e,r,i){e>>>=0,r>>>=0,i||checkOffset(e,r,this.length);for(var s=this[e+--r],o=1;r>0&&(o*=256);)s+=this[e+--r]*o;return s},Buffer.prototype.readUInt8=function(e,r){return e>>>=0,r||checkOffset(e,1,this.length),this[e]},Buffer.prototype.readUInt16LE=function(e,r){return e>>>=0,r||checkOffset(e,2,this.length),this[e]|this[e+1]<<8},Buffer.prototype.readUInt16BE=function(e,r){return e>>>=0,r||checkOffset(e,2,this.length),this[e]<<8|this[e+1]},Buffer.prototype.readUInt32LE=function(e,r){return e>>>=0,r||checkOffset(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Buffer.prototype.readUInt32BE=function(e,r){return e>>>=0,r||checkOffset(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Buffer.prototype.readIntLE=function(e,r,i){e>>>=0,r>>>=0,i||checkOffset(e,r,this.length);for(var s=this[e],o=1,l=0;++l<r&&(o*=256);)s+=this[e+l]*o;return s>=(o*=128)&&(s-=Math.pow(2,8*r)),s},Buffer.prototype.readIntBE=function(e,r,i){e>>>=0,r>>>=0,i||checkOffset(e,r,this.length);for(var s=r,o=1,l=this[e+--s];s>0&&(o*=256);)l+=this[e+--s]*o;return l>=(o*=128)&&(l-=Math.pow(2,8*r)),l},Buffer.prototype.readInt8=function(e,r){return(e>>>=0,r||checkOffset(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},Buffer.prototype.readInt16LE=function(e,r){e>>>=0,r||checkOffset(e,2,this.length);var i=this[e]|this[e+1]<<8;return 32768&i?4294901760|i:i},Buffer.prototype.readInt16BE=function(e,r){e>>>=0,r||checkOffset(e,2,this.length);var i=this[e+1]|this[e]<<8;return 32768&i?4294901760|i:i},Buffer.prototype.readInt32LE=function(e,r){return e>>>=0,r||checkOffset(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Buffer.prototype.readInt32BE=function(e,r){return e>>>=0,r||checkOffset(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Buffer.prototype.readFloatLE=function(e,r){return e>>>=0,r||checkOffset(e,4,this.length),o.read(this,e,!0,23,4)},Buffer.prototype.readFloatBE=function(e,r){return e>>>=0,r||checkOffset(e,4,this.length),o.read(this,e,!1,23,4)},Buffer.prototype.readDoubleLE=function(e,r){return e>>>=0,r||checkOffset(e,8,this.length),o.read(this,e,!0,52,8)},Buffer.prototype.readDoubleBE=function(e,r){return e>>>=0,r||checkOffset(e,8,this.length),o.read(this,e,!1,52,8)},Buffer.prototype.writeUIntLE=function(e,r,i,s){if(e=+e,r>>>=0,i>>>=0,!s){var o=Math.pow(2,8*i)-1;checkInt(this,e,r,i,o,0)}var l=1,h=0;for(this[r]=255&e;++h<i&&(l*=256);)this[r+h]=e/l&255;return r+i},Buffer.prototype.writeUIntBE=function(e,r,i,s){if(e=+e,r>>>=0,i>>>=0,!s){var o=Math.pow(2,8*i)-1;checkInt(this,e,r,i,o,0)}var l=i-1,h=1;for(this[r+l]=255&e;--l>=0&&(h*=256);)this[r+l]=e/h&255;return r+i},Buffer.prototype.writeUInt8=function(e,r,i){return e=+e,r>>>=0,i||checkInt(this,e,r,1,255,0),this[r]=255&e,r+1},Buffer.prototype.writeUInt16LE=function(e,r,i){return e=+e,r>>>=0,i||checkInt(this,e,r,2,65535,0),this[r]=255&e,this[r+1]=e>>>8,r+2},Buffer.prototype.writeUInt16BE=function(e,r,i){return e=+e,r>>>=0,i||checkInt(this,e,r,2,65535,0),this[r]=e>>>8,this[r+1]=255&e,r+2},Buffer.prototype.writeUInt32LE=function(e,r,i){return e=+e,r>>>=0,i||checkInt(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=255&e,r+4},Buffer.prototype.writeUInt32BE=function(e,r,i){return e=+e,r>>>=0,i||checkInt(this,e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=255&e,r+4},Buffer.prototype.writeIntLE=function(e,r,i,s){if(e=+e,r>>>=0,!s){var o=Math.pow(2,8*i-1);checkInt(this,e,r,i,o-1,-o)}var l=0,h=1,d=0;for(this[r]=255&e;++l<i&&(h*=256);)e<0&&0===d&&0!==this[r+l-1]&&(d=1),this[r+l]=(e/h>>0)-d&255;return r+i},Buffer.prototype.writeIntBE=function(e,r,i,s){if(e=+e,r>>>=0,!s){var o=Math.pow(2,8*i-1);checkInt(this,e,r,i,o-1,-o)}var l=i-1,h=1,d=0;for(this[r+l]=255&e;--l>=0&&(h*=256);)e<0&&0===d&&0!==this[r+l+1]&&(d=1),this[r+l]=(e/h>>0)-d&255;return r+i},Buffer.prototype.writeInt8=function(e,r,i){return e=+e,r>>>=0,i||checkInt(this,e,r,1,127,-128),e<0&&(e=255+e+1),this[r]=255&e,r+1},Buffer.prototype.writeInt16LE=function(e,r,i){return e=+e,r>>>=0,i||checkInt(this,e,r,2,32767,-32768),this[r]=255&e,this[r+1]=e>>>8,r+2},Buffer.prototype.writeInt16BE=function(e,r,i){return e=+e,r>>>=0,i||checkInt(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=255&e,r+2},Buffer.prototype.writeInt32LE=function(e,r,i){return e=+e,r>>>=0,i||checkInt(this,e,r,4,2147483647,-2147483648),this[r]=255&e,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4},Buffer.prototype.writeInt32BE=function(e,r,i){return e=+e,r>>>=0,i||checkInt(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=255&e,r+4},Buffer.prototype.writeFloatLE=function(e,r,i){return writeFloat(this,e,r,!0,i)},Buffer.prototype.writeFloatBE=function(e,r,i){return writeFloat(this,e,r,!1,i)},Buffer.prototype.writeDoubleLE=function(e,r,i){return writeDouble(this,e,r,!0,i)},Buffer.prototype.writeDoubleBE=function(e,r,i){return writeDouble(this,e,r,!1,i)},Buffer.prototype.copy=function(e,r,i,s){if(!Buffer.isBuffer(e))throw TypeError("argument should be a Buffer");if(i||(i=0),s||0===s||(s=this.length),r>=e.length&&(r=e.length),r||(r=0),s>0&&s<i&&(s=i),s===i||0===e.length||0===this.length)return 0;if(r<0)throw RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw RangeError("Index out of range");if(s<0)throw RangeError("sourceEnd out of bounds");s>this.length&&(s=this.length),e.length-r<s-i&&(s=e.length-r+i);var o=s-i;if(this===e&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(r,i,s);else if(this===e&&i<r&&r<s)for(var l=o-1;l>=0;--l)e[l+r]=this[l+i];else Uint8Array.prototype.set.call(e,this.subarray(i,s),r);return o},Buffer.prototype.fill=function(e,r,i,s){if("string"==typeof e){if("string"==typeof r?(s=r,r=0,i=this.length):"string"==typeof i&&(s=i,i=this.length),void 0!==s&&"string"!=typeof s)throw TypeError("encoding must be a string");if("string"==typeof s&&!Buffer.isEncoding(s))throw TypeError("Unknown encoding: "+s);if(1===e.length){var o,l=e.charCodeAt(0);("utf8"===s&&l<128||"latin1"===s)&&(e=l)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(r<0||this.length<r||this.length<i)throw RangeError("Out of range index");if(i<=r)return this;if(r>>>=0,i=void 0===i?this.length:i>>>0,e||(e=0),"number"==typeof e)for(o=r;o<i;++o)this[o]=e;else{var h=Buffer.isBuffer(e)?e:Buffer.from(e,s),d=h.length;if(0===d)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<i-r;++o)this[o+r]=h[o%d]}return this};var h=/[^+/0-9A-Za-z-_]/g;function utf8ToBytes(e,r){r=r||1/0;for(var i,s=e.length,o=null,l=[],h=0;h<s;++h){if((i=e.charCodeAt(h))>55295&&i<57344){if(!o){if(i>56319||h+1===s){(r-=3)>-1&&l.push(239,191,189);continue}o=i;continue}if(i<56320){(r-=3)>-1&&l.push(239,191,189),o=i;continue}i=(o-55296<<10|i-56320)+65536}else o&&(r-=3)>-1&&l.push(239,191,189);if(o=null,i<128){if((r-=1)<0)break;l.push(i)}else if(i<2048){if((r-=2)<0)break;l.push(i>>6|192,63&i|128)}else if(i<65536){if((r-=3)<0)break;l.push(i>>12|224,i>>6&63|128,63&i|128)}else if(i<1114112){if((r-=4)<0)break;l.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}else throw Error("Invalid code point")}return l}function asciiToBytes(e){for(var r=[],i=0;i<e.length;++i)r.push(255&e.charCodeAt(i));return r}function base64ToBytes(e){return s.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(h,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function blitBuffer(e,r,i,s){for(var o=0;o<s&&!(o+i>=r.length)&&!(o>=e.length);++o)r[o+i]=e[o];return o}function isInstance(e,r){return e instanceof r||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===r.name}var d=function(){for(var e="0123456789abcdef",r=Array(256),i=0;i<16;++i)for(var s=16*i,o=0;o<16;++o)r[s+o]=e[i]+e[o];return r}()},783:function(e,r){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */r.read=function(e,r,i,s,o){var l,h,d=8*o-s-1,f=(1<<d)-1,_=f>>1,g=-7,A=i?o-1:0,b=i?-1:1,k=e[r+A];for(A+=b,l=k&(1<<-g)-1,k>>=-g,g+=d;g>0;l=256*l+e[r+A],A+=b,g-=8);for(h=l&(1<<-g)-1,l>>=-g,g+=s;g>0;h=256*h+e[r+A],A+=b,g-=8);if(0===l)l=1-_;else{if(l===f)return h?NaN:(k?-1:1)*(1/0);h+=Math.pow(2,s),l-=_}return(k?-1:1)*h*Math.pow(2,l-s)},r.write=function(e,r,i,s,o,l){var h,d,f,_=8*l-o-1,g=(1<<_)-1,A=g>>1,b=23===o?5960464477539062e-23:0,k=s?0:l-1,M=s?1:-1,q=r<0||0===r&&1/r<0?1:0;for(isNaN(r=Math.abs(r))||r===1/0?(d=isNaN(r)?1:0,h=g):(h=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-h))<1&&(h--,f*=2),h+A>=1?r+=b/f:r+=b*Math.pow(2,1-A),r*f>=2&&(h++,f/=2),h+A>=g?(d=0,h=g):h+A>=1?(d=(r*f-1)*Math.pow(2,o),h+=A):(d=r*Math.pow(2,A-1)*Math.pow(2,o),h=0));o>=8;e[i+k]=255&d,k+=M,d/=256,o-=8);for(h=h<<o|d,_+=o;_>0;e[i+k]=255&h,k+=M,h/=256,_-=8);e[i+k-M]|=128*q}}},i={};function __nccwpck_require__(e){var s=i[e];if(void 0!==s)return s.exports;var o=i[e]={exports:{}},l=!0;try{r[e](o,o.exports,__nccwpck_require__),l=!1}finally{l&&delete i[e]}return o.exports}__nccwpck_require__.ab="//";var s=__nccwpck_require__(72);e.exports=s}()},415:function(){},7663:function(e){!function(){var r={229:function(e){var r,i,s,o=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(r===setTimeout)return setTimeout(e,0);if((r===defaultSetTimout||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(i){try{return r.call(null,e,0)}catch(i){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){r=defaultSetTimout}try{i="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){i=defaultClearTimeout}}();var l=[],h=!1,d=-1;function cleanUpNextTick(){h&&s&&(h=!1,s.length?l=s.concat(l):d=-1,l.length&&drainQueue())}function drainQueue(){if(!h){var e=runTimeout(cleanUpNextTick);h=!0;for(var r=l.length;r;){for(s=l,l=[];++d<r;)s&&s[d].run();d=-1,r=l.length}s=null,h=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===defaultClearTimeout||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(r){try{return i.call(null,e)}catch(r){return i.call(this,e)}}}(e)}}function Item(e,r){this.fun=e,this.array=r}function noop(){}o.nextTick=function(e){var r=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)r[i-1]=arguments[i];l.push(new Item(e,r)),1!==l.length||h||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=noop,o.addListener=noop,o.once=noop,o.off=noop,o.removeListener=noop,o.removeAllListeners=noop,o.emit=noop,o.prependListener=noop,o.prependOnceListener=noop,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},i={};function __nccwpck_require__(e){var s=i[e];if(void 0!==s)return s.exports;var o=i[e]={exports:{}},l=!0;try{r[e](o,o.exports,__nccwpck_require__),l=!1}finally{l&&delete i[e]}return o.exports}__nccwpck_require__.ab="//";var s=__nccwpck_require__(229);e.exports=s}()},6771:function(e,r,i){"use strict";let s,o;i.d(r,{Jn:function(){return eu},qX:function(){return _getProvider},rh:function(){return _isFirebaseServerApp},Xd:function(){return _registerComponent},Mq:function(){return getApp},ZF:function(){return initializeApp},KN:function(){return registerVersion}});var l,h=i(75),d=i(4645),f=i(9711);let instanceOfAny=(e,r)=>r.some(r=>e instanceof r),_=new WeakMap,g=new WeakMap,A=new WeakMap,b=new WeakMap,k=new WeakMap,M={get(e,r,i){if(e instanceof IDBTransaction){if("done"===r)return g.get(e);if("objectStoreNames"===r)return e.objectStoreNames||A.get(e);if("store"===r)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return wrap_idb_value_wrap(e[r])},set:(e,r,i)=>(e[r]=i,!0),has:(e,r)=>e instanceof IDBTransaction&&("done"===r||"store"===r)||r in e};function wrap_idb_value_wrap(e){var r;if(e instanceof IDBRequest)return function(e){let r=new Promise((r,i)=>{let unlisten=()=>{e.removeEventListener("success",success),e.removeEventListener("error",error)},success=()=>{r(wrap_idb_value_wrap(e.result)),unlisten()},error=()=>{i(e.error),unlisten()};e.addEventListener("success",success),e.addEventListener("error",error)});return r.then(r=>{r instanceof IDBCursor&&_.set(r,e)}).catch(()=>{}),k.set(r,e),r}(e);if(b.has(e))return b.get(e);let i="function"==typeof(r=e)?r!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(r)?function(...e){return r.apply(unwrap(this),e),wrap_idb_value_wrap(_.get(this))}:function(...e){return wrap_idb_value_wrap(r.apply(unwrap(this),e))}:function(e,...i){let s=r.call(unwrap(this),e,...i);return A.set(s,e.sort?e.sort():[e]),wrap_idb_value_wrap(s)}:(r instanceof IDBTransaction&&function(e){if(g.has(e))return;let r=new Promise((r,i)=>{let unlisten=()=>{e.removeEventListener("complete",complete),e.removeEventListener("error",error),e.removeEventListener("abort",error)},complete=()=>{r(),unlisten()},error=()=>{i(e.error||new DOMException("AbortError","AbortError")),unlisten()};e.addEventListener("complete",complete),e.addEventListener("error",error),e.addEventListener("abort",error)});g.set(e,r)}(r),instanceOfAny(r,s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(r,M):r;return i!==e&&(b.set(e,i),k.set(i,e)),i}let unwrap=e=>k.get(e),q=["get","getKey","getAll","getAllKeys","count"],j=["put","add","delete","clear"],$=new Map;function getMethod(e,r){if(!(e instanceof IDBDatabase&&!(r in e)&&"string"==typeof r))return;if($.get(r))return $.get(r);let i=r.replace(/FromIndex$/,""),s=r!==i,o=j.includes(i);if(!(i in(s?IDBIndex:IDBObjectStore).prototype)||!(o||q.includes(i)))return;let method=async function(e,...r){let l=this.transaction(e,o?"readwrite":"readonly"),h=l.store;return s&&(h=h.index(r.shift())),(await Promise.all([h[i](...r),o&&l.done]))[0]};return $.set(r,method),method}M={...l=M,get:(e,r,i)=>getMethod(e,r)||l.get(e,r,i),has:(e,r)=>!!getMethod(e,r)||l.has(e,r)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PlatformLoggerServiceImpl=class PlatformLoggerServiceImpl{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let r=e.getComponent();return r?.type==="VERSION"}(e))return null;{let r=e.getImmediate();return`${r.library}/${r.version}`}}).filter(e=>e).join(" ")}};let ee="@firebase/app",et="0.14.4",er=new d.Yd("@firebase/app"),en="[DEFAULT]",ei={[ee]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/ai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},es=new Map,eo=new Map,ea=new Map;function _addComponent(e,r){try{e.container.addComponent(r)}catch(i){er.debug(`Component ${r.name} failed to register with FirebaseApp ${e.name}`,i)}}function _registerComponent(e){let r=e.name;if(ea.has(r))return er.debug(`There were multiple attempts to register component ${r}.`),!1;for(let i of(ea.set(r,e),es.values()))_addComponent(i,e);for(let r of eo.values())_addComponent(r,e);return!0}function _getProvider(e,r){let i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(r)}function _isFirebaseServerApp(e){return null!=e&&void 0!==e.settings}let el=new f.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FirebaseAppImpl=class FirebaseAppImpl{constructor(e,r,i){this._isDeleted=!1,this._options={...e},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new h.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw el.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu="12.4.0";function initializeApp(e,r={}){let i=e;if("object"!=typeof r){let e=r;r={name:e}}let s={name:en,automaticDataCollectionEnabled:!0,...r},o=s.name;if("string"!=typeof o||!o)throw el.create("bad-app-name",{appName:String(o)});if(i||(i=(0,f.aH)()),!i)throw el.create("no-options");let l=es.get(o);if(l){if((0,f.vZ)(i,l.options)&&(0,f.vZ)(s,l.config))return l;throw el.create("duplicate-app",{appName:o})}let d=new h.H0(o);for(let e of ea.values())d.addComponent(e);let _=new FirebaseAppImpl(i,s,d);return es.set(o,_),_}function getApp(e=en){let r=es.get(e);if(!r&&e===en&&(0,f.aH)())return initializeApp();if(!r)throw el.create("no-app",{appName:e});return r}function registerVersion(e,r,i){let s=ei[e]??e;i&&(s+=`-${i}`);let o=s.match(/\s|\//),l=r.match(/\s|\//);if(o||l){let e=[`Unable to register library "${s}" with version "${r}":`];o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&e.push("and"),l&&e.push(`version name "${r}" contains illegal characters (whitespace or "/")`),er.warn(e.join(" "));return}_registerComponent(new h.wA(`${s}-version`,()=>({library:s,version:r}),"VERSION"))}let eh="firebase-heartbeat-store",ed=null;function getDbPromise(){return ed||(ed=(function(e,r,{blocked:i,upgrade:s,blocking:o,terminated:l}={}){let h=indexedDB.open(e,1),d=wrap_idb_value_wrap(h);return s&&h.addEventListener("upgradeneeded",e=>{s(wrap_idb_value_wrap(h.result),e.oldVersion,e.newVersion,wrap_idb_value_wrap(h.transaction),e)}),i&&h.addEventListener("blocked",e=>i(e.oldVersion,e.newVersion,e)),d.then(e=>{l&&e.addEventListener("close",()=>l()),o&&e.addEventListener("versionchange",e=>o(e.oldVersion,e.newVersion,e))}).catch(()=>{}),d})("firebase-heartbeat-database",0,{upgrade:(e,r)=>{if(0===r)try{e.createObjectStore(eh)}catch(e){console.warn(e)}}}).catch(e=>{throw el.create("idb-open",{originalErrorMessage:e.message})})),ed}async function readHeartbeatsFromIndexedDB(e){try{let r=await getDbPromise(),i=r.transaction(eh),s=await i.objectStore(eh).get(computeKey(e));return await i.done,s}catch(e){if(e instanceof f.ZR)er.warn(e.message);else{let r=el.create("idb-get",{originalErrorMessage:e?.message});er.warn(r.message)}}}async function writeHeartbeatsToIndexedDB(e,r){try{let i=await getDbPromise(),s=i.transaction(eh,"readwrite"),o=s.objectStore(eh);await o.put(r,computeKey(e)),await s.done}catch(e){if(e instanceof f.ZR)er.warn(e.message);else{let r=el.create("idb-set",{originalErrorMessage:e?.message});er.warn(r.message)}}}function computeKey(e){return`${e.name}!${e.options.appId}`}let HeartbeatServiceImpl=class HeartbeatServiceImpl{constructor(e){this.container=e,this._heartbeatsCache=null;let r=this.container.getProvider("app").getImmediate();this._storage=new HeartbeatStorageImpl(r),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{let e=this.container.getProvider("platform-logger").getImmediate(),r=e.getPlatformInfoString(),i=getUTCDateString();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>30){let e=function(e){if(0===e.length)return -1;let r=0,i=e[0].date;for(let s=1;s<e.length;s++)e[s].date<i&&(i=e[s].date,r=s);return r}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){er.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||0===this._heartbeatsCache.heartbeats.length)return"";let e=getUTCDateString(),{heartbeatsToSend:r,unsentEntries:i}=function(e,r=1024){let i=[],s=e.slice();for(let o of e){let e=i.find(e=>e.agent===o.agent);if(e){if(e.dates.push(o.date),countBytes(i)>r){e.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),countBytes(i)>r){i.pop();break}s=s.slice(1)}return{heartbeatsToSend:i,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=(0,f.L)(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return er.warn(e),""}}};function getUTCDateString(){let e=new Date;return e.toISOString().substring(0,10)}let HeartbeatStorageImpl=class HeartbeatStorageImpl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,f.hl)()&&(0,f.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await readHeartbeatsFromIndexedDB(this.app);return e?.heartbeats?e:{heartbeats:[]}}}async overwrite(e){let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}};function countBytes(e){return(0,f.L)(JSON.stringify({version:2,heartbeats:e})).length}_registerComponent(new h.wA("platform-logger",e=>new PlatformLoggerServiceImpl(e),"PRIVATE")),_registerComponent(new h.wA("heartbeat",e=>new HeartbeatServiceImpl(e),"PRIVATE")),registerVersion(ee,et,""),registerVersion(ee,et,"esm2020"),registerVersion("fire-js","")},75:function(e,r,i){"use strict";i.d(r,{H0:function(){return ComponentContainer},wA:function(){return Component}});var s=i(9711);let Component=class Component{constructor(e,r,i){this.name=e,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Provider=class Provider{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){let e=new s.BH;if(this.instancesDeferred.set(r,e),this.isInitialized(r)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:r});i&&e.resolve(i)}catch(e){}}return this.instancesDeferred.get(r).promise}getImmediate(e){let r=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(i)return null;throw e}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(let[e,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:i});r.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:r={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let s=this.getOrInitializeService({instanceIdentifier:i,options:r});for(let[e,r]of this.instancesDeferred.entries()){let o=this.normalizeInstanceIdentifier(e);i===o&&r.resolve(s)}return s}onInit(e,r){let i=this.normalizeInstanceIdentifier(r),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);let o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,r){let i=this.onInitCallbacks.get(r);if(i)for(let s of i)try{s(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:e===o?void 0:e,options:r}),this.instances.set(e,i),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ComponentContainer=class ComponentContainer{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let r=this.getProvider(e.name);if(r.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){let r=this.getProvider(e.name);r.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let r=new Provider(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}},4645:function(e,r,i){"use strict";var s,o;i.d(r,{Yd:function(){return Logger},in:function(){return s}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l=[];(o=s||(s={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";let h={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},d=s.INFO,f={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},defaultLogHandler=(e,r,...i)=>{if(r<e.logLevel)return;let s=new Date().toISOString(),o=f[r];if(o)console[o](`[${s}]  ${e.name}:`,...i);else throw Error(`Attempted to log a message with an invalid logType (value: ${r})`)};let Logger=class Logger{constructor(e){this.name=e,this._logLevel=d,this._logHandler=defaultLogHandler,this._userLogHandler=null,l.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?h[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}}},function(e){var __webpack_exec__=function(r){return e(e.s=r)};e.O(0,[774,179],function(){return __webpack_exec__(6840),__webpack_exec__(9974)}),_N_E=e.O()}]);