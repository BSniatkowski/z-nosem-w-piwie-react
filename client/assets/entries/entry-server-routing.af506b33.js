import{_ as $e}from"../chunks/chunk-cf010ec4.js";function Te(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function D(e,t){let n;{var i=Error.stackTraceLimit;Error.stackTraceLimit=1/0,n=new Error(e),Error.stackTraceLimit=i}return Te()&&(n.stack=xe(n.stack,t)),n}function xe(e,t){if(!e)return e;const n=Pe(e);let i=0;return n.filter(s=>s.includes(" (internal/")||s.includes(" (node:internal")?!1:i<t&&ke(s)?(i++,!1):!0).join(`
`)}function ke(e){return e.startsWith("    at ")}function Pe(e){return e.split(/\r?\n/)}function k(e,t){const n=globalThis[M]=globalThis[M]||{};return n[e]=n[e]||t}const M="_vike";function v(e){return typeof e=="object"&&e!==null}function oe(e){return Array.from(new Set(e))}const b=k("assertPackageInstances.ts",{instances:[],alreadyLogged:new Set}),Re="The client runtime of Server Routing as well as the client runtime of Client Routing are both being loaded. Make sure they aren't loaded both at the same time for a given page. See https://vike.dev/client-runtimes-conflict",ae="Two vike client runtime instances are being loaded. Make sure your client-side bundles don't include vike twice. (In order to reduce the size of your client-side JavaScript bundles.)";function le(){{const e=oe(b.instances);je(e.length<=1,`Both vike@${e[0]} and vike@${e[1]} loaded. Only one version should be loaded.`)}b.checkSingleInstance&&b.instances.length>1&&W(!1,ae,{onlyOnce:!0,showStackTrace:!0})}function Ce(e){W(b.isClientRouting!==!0,Re,{onlyOnce:!0,showStackTrace:!0}),W(b.isClientRouting===void 0,ae,{onlyOnce:!0,showStackTrace:!0}),b.isClientRouting=!1,e&&(b.checkSingleInstance=!0),le()}function _e(e){b.instances.push(e),le()}function je(e,t){if(e)return;const n=`[vike][Wrong Usage] ${t}`;throw new Error(n)}function W(e,t,{onlyOnce:n,showStackTrace:i}){if(e)return;const r=`[vike][Warning] ${t}`;if(n){const{alreadyLogged:s}=b,l=n===!0?r:n;if(s.has(l))return;s.add(l)}console.warn(i?new Error(r):r)}const Ie="0.4.165",ce={projectName:"Vike",projectVersion:Ie};_e(ce.projectVersion);const ue=new Proxy(e=>e,{get:()=>ue}),E=ue,w=k("utils/assert.ts",{alreadyLogged:new Set,logger(e,t){t==="info"?console.log(e):console.warn(e)},showStackTraceList:new WeakSet}),Oe="[vike]",Fe=`[vike@${ce.projectVersion}]`,H=2;function o(e,t){var s;if(e)return;const n=(()=>{if(!t)return null;const l=typeof t=="string"?t:JSON.stringify(t);return E.dim(`Debug info (for Vike maintainers; you can ignore this): ${l}`)})();let i=["You stumbled upon a Vike bug.",`Go to ${E.blue("https://github.com/vikejs/vike/issues/new")} and copy-paste this error. A maintainer will fix the bug (usually under 24 hours).`,n].filter(Boolean).join(" ");i=O(i),i=I(i,"Bug"),i=F(i,!0);const r=D(i,H);throw(s=w.onBeforeLog)==null||s.call(w),r}function h(e,t,{showStackTrace:n}={}){var r;if(e)return;t=O(t),t=I(t,"Wrong Usage"),t=F(t);const i=D(t,H);throw n&&w.showStackTraceList.add(i),(r=w.onBeforeLog)==null||r.call(w),i}function Le(e){return e=O(e),e=I(e,"Error"),e=F(e),D(e,H)}function x(e,t,{onlyOnce:n,showStackTrace:i}){var r;if(!e){if(t=O(t),t=I(t,"Warning"),t=F(t),n){const{alreadyLogged:s}=w,l=n===!0?t:n;if(s.has(l))return;s.add(l)}if((r=w.onBeforeLog)==null||r.call(w),i){const s=new Error(t);w.showStackTraceList.add(s),w.logger(s,"warn")}else w.logger(t,"warn")}}function I(e,t){let n=`[${t}]`;const i=t==="Warning"?"yellow":"red";return n=E.bold(E[i](n)),`${n}${e}`}function O(e){return e.startsWith("[")?e:` ${e}`}function F(e,t=!1){return`${t?Fe:Oe}${e}`}function U(){return typeof window<"u"&&typeof window.scrollY=="number"}const X=k("utils/assertRouterType.ts",{});function We(){Ve(X.isClientRouting!==!0),X.isClientRouting=!1}function Ve(e){h(U(),`${E.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,{showStackTrace:!0}),x(e,"You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",{showStackTrace:!0,onlyOnce:!0})}const fe=["js","ts","cjs","cts","mjs","mts"],Ae=["jsx","tsx","cjsx","ctsx","mjsx","mtsx"],de=["vue","svelte","marko","md","mdx"],ze=[...fe,...Ae,...de];function ge(e){const t=ze.some(n=>e.endsWith("."+n));return Ne(e)&&o(t),t}function Ne(e){const t=/\.(c|m)?(j|t)s$/.test(e),n=fe.some(i=>e.endsWith("."+i));return o(t===n),t}function De(e){return de.some(t=>e.endsWith("."+t))}function _(e,t,n){return typeof e=="string"?q(e.split(""),t,n).join(""):q(e,t,n)}function q(e,t,n){const i=[];let r=t>=0?t:e.length+t;o(r>=0&&r<=e.length);let s=n>=0?n:e.length+n;for(o(s>=0&&s<=e.length);!(r===s||(r===e.length&&(r=0),r===s));){const l=e[r];o(l!==void 0),i.push(l),r++}return i}const he=["http://","https://","tauri://"];function He(e){return he.some(t=>e.startsWith(t))||e.startsWith("/")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function Ue(e,t){o(He(e)),o(t.startsWith("/"));const[n,...i]=e.split("#");o(n!==void 0);const r=["",...i].join("#")||null;o(r===null||r.startsWith("#"));const s=r===null?"":V(r.slice(1)),[l,...a]=n.split("?");o(l!==void 0);const c=["",...a].join("?")||null;o(c===null||c.startsWith("?"));const u={},f={};Array.from(new URLSearchParams(c||"")).forEach(([S,Y])=>{u[S]=Y,f[S]=[...f.hasOwnProperty(S)?f[S]:[],Y]});const{origin:d,pathname:y}=Ge(l,t);o(d===null||d===V(d)),o(y.startsWith("/")),o(d===null||e.startsWith(d));const g=l.slice((d||"").length);qe(e,d,g,c,r);let{pathname:m,hasBaseServer:$}=Me(y,t);return m=Be(m),o(m.startsWith("/")),{origin:d,pathname:m,pathnameOriginal:g,hasBaseServer:$,search:u,searchAll:f,searchOriginal:c,hash:s,hashOriginal:r}}function V(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function Be(e){return e=e.replace(/\s+$/,""),e=e.split("/").map(t=>V(t).split("/").join("%2F")).join("/"),e}function Ge(e,t){var n;o(!e.includes("?")&&!e.includes("#"));{const{origin:i,pathname:r}=K(e);if(i)return{origin:i,pathname:r};o(r===e)}if(e.startsWith("/"))return{origin:null,pathname:e};{const i=typeof window<"u"?(n=window==null?void 0:window.document)==null?void 0:n.baseURI:void 0;let r;return i?r=K(i.split("?")[0]).pathname:r=t,{origin:null,pathname:Je(e,r)}}}function K(e){if(he.some(t=>e.startsWith(t))){const[t,n,i,...r]=e.split("/"),s=[t,n,i].join("/"),l=["",...r].join("/")||"/";return{origin:s,pathname:l}}else return{pathname:e,origin:null}}function Je(e,t){const n=t.split("/"),i=e.split("/");let r=t.endsWith("/");e.startsWith(".")&&n.pop();for(const l in i){const a=i[l];a==""&&l==="0"||a!="."&&(a==".."?n.pop():(r=!1,n.push(a)))}let s=n.join("/");return r&&!s.endsWith("/")&&(s+="/"),s.startsWith("/")||(s="/"+s),s}function Ye(e){o(e.startsWith("/")),o(!e.includes("?")),o(!e.includes("#"))}function Me(e,t){Ye(e),o(Xe(t));let n=e;if(o(n.startsWith("/")),o(t.startsWith("/")),t==="/")return{pathname:e,hasBaseServer:!0};let i=t;return t.endsWith("/")&&n===_(t,0,-1)&&(i=_(t,0,-1),o(n===i)),n.startsWith(i)?(o(n.startsWith("/")||n.startsWith("http")),o(n.startsWith(i)),n=n.slice(i.length),n.startsWith("/")||(n="/"+n),o(n.startsWith("/")),{pathname:n,hasBaseServer:!0}):{pathname:e,hasBaseServer:!1}}function Xe(e){return e.startsWith("/")}function qe(e,t,n,i,r){const s=Ke(t,n,i,r);o(e===s)}function Ke(e,t,n,i){return`${e||""}${t}${n||""}${i||""}`}function P(e,t){t&&Object.defineProperties(e,Object.getOwnPropertyDescriptors(t))}function L(e){return e instanceof Function||typeof e=="function"}function Qe(e){return(t,n)=>{const i=e(t),r=e(n);if(o([!0,!1,null].includes(i)),o([!0,!1,null].includes(r)),i===r)return 0;if(i===!0||r===!1)return-1;if(r===!0||i===!1)return 1;o(!1)}}function Ze(e){return Qe(t=>{const n=e(t);return n===null?null:!n})}function p(e,t,n="unknown"){if(!v(e))return!1;if(!(t in e))return n==="undefined";if(n==="unknown")return!0;const i=e[t];return n==="array"?Array.isArray(i):n==="object"?v(i):n==="string[]"?Array.isArray(i)&&i.every(r=>typeof r=="string"):n==="function"?L(i):Array.isArray(n)?typeof i=="string"&&n.includes(i):n==="null"?i===null:n==="undefined"?i===void 0:n==="true"?i===!0:n==="false"?i===!1:typeof i===n}function et(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const tt=e=>e!=null;function pe(e){const t=n=>`Not a posix path: ${n}`;o(e!==null,t("null")),o(typeof e=="string",t(`typeof path === ${JSON.stringify(typeof e)}`)),o(e!=="",t("(empty string)")),o(e),o(!e.includes("\\"),t(e))}const nt=["clientRouting"];function it(e){nt.forEach(t=>{if(o(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;h(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),h(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const me=["render","clientRouting","prerender","doNotPrerender"];function rt(e,t){h(!me.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function st(e,t){if(!e)return null;let[n,...i]=e;if(!n||i.length===0&&["*","default",t].includes(n))return null;o(n!=="*");let r="",s="";return n==="default"?r="export default":(r="export",i=[n,...i]),i.forEach(a=>{r=`${r} { ${a}`,s=` }${s}`}),r+s}function ye(e,t,{definedAt:n}){const i=ot(n,t),r=i==="internally"?i:`at ${i}`;let s=`${t}`;return`${e} ${E.cyan(s)} defined ${r}`}function ot(e,t){if("isComputed"in e)return"internally";let n;return"files"in e?n=e.files:n=[e],o(n.length>=1),n.map(r=>{const{filePathToShowToUser:s,fileExportPathToShowToUser:l}=r;let a=s;const c=st(l,t);return c&&(a=`${a} > ${E.cyan(c)}`),a}).join(" / ")}function at({definedAt:e}){if("isComputed"in e||"files"in e)return null;const{filePathToShowToUser:t}=e;return o(t),t}function lt(e,t){const n={},i={},r={};e.forEach(a=>{ct(a).forEach(({exportName:u,exportValue:f,isFromDefaultExport:d})=>{o(u!=="default"),r[u]=r[u]??[],r[u].push({exportValue:f,exportSource:`${a.filePath} > ${d?`\`export default { ${u} }\``:`\`export { ${u} }\``}`,filePath:a.filePath,_filePath:a.filePath,_fileType:a.fileType,_isFromDefaultExport:d})})}),t&&Object.entries(t.configValues).forEach(([a,c])=>{const{value:u}=c,f=at(c),d=ye("Config",a,c);i[a]=i[a]??u,n[a]=n[a]??[],o(n[a].length===0),n[a].push({configValue:u,configDefinedAt:d,configDefinedByFile:f});const y=a;r[y]=r[y]??[],r[y].push({exportValue:u,exportSource:d,filePath:f,_filePath:f,_fileType:null,_isFromDefaultExport:null})});const s=ut(),l={};return Object.entries(r).forEach(([a,c])=>{c.forEach(({exportValue:u,_fileType:f,_isFromDefaultExport:d})=>{l[a]=l[a]??u,f===".page"&&!d&&(a in s||(s[a]=u))})}),o(!("default"in l)),o(!("default"in r)),{config:i,configEntries:n,exports:l,exportsAll:r,pageExports:s}}function ct(e){const{filePath:t,fileExports:n}=e;o(n),o(ge(t));const i=[];return Object.entries(n).sort(Ze(([r])=>r==="default")).forEach(([r,s])=>{let l=r==="default";if(l)if(De(t))r="Page";else{h(v(s),`The ${E.cyan("export default")} of ${t} should be an object.`),Object.entries(s).forEach(([a,c])=>{rt(a,t),i.push({exportName:a,exportValue:c,isFromDefaultExport:l})});return}i.push({exportName:r,exportValue:s,isFromDefaultExport:l})}),i.forEach(({exportName:r,isFromDefaultExport:s})=>{o(!(s&&me.includes(r)))}),i}function ut(){return new Proxy({},{get(...e){return U()||x(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function ft(e){const t=".page.",n=_(e.split(t),0,-1).join(t);return o(!n.includes("\\")),n}function R(e){pe(e)}function B(e,t){return o(!e.includes("\\")),e.includes("/_error")}function dt(e,t){if(t.length>0){const n=t.find(i=>i.pageId===e);return o(n),!!n.isErrorPage}else return B(e)}const gt=[".page",".page.server",".page.route",".page.client",".css"];function ht(e){if(pe(e),e.endsWith(".css"))return".css";o(ge(e),e);const n=e.split("/").slice(-1)[0].split("."),i=n.slice(-3)[0],r=n.slice(-2)[0];if(r==="page")return".page";if(o(i==="page",e),r==="server")return".page.server";if(r==="client")return".page.client";if(r==="route")return".page.route";o(!1,e)}function Ee(e){const t=s=>r.pageId===s||r.isDefaultPageFile&&(Q(r.filePath)||pt(s,r.filePath)),n=ht(e),r={filePath:e,fileType:n,isEnv:s=>{if(o(n!==".page.route"),s==="CLIENT_ONLY")return n===".page.client"||n===".css";if(s==="SERVER_ONLY")return n===".page.server";if(s==="CLIENT_AND_SERVER")return n===".page";o(!1)},isRelevant:t,isDefaultPageFile:A(e),isRendererPageFile:n!==".css"&&A(e)&&Q(e),isErrorPageFile:B(e),pageId:ft(e)};return r}function A(e){return R(e),B(e)?!1:e.includes("/_default")}function Q(e){return R(e),e.includes("/renderer/")}function pt(e,t){R(e),R(t),o(!e.endsWith("/")),o(!t.endsWith("/")),o(A(t));const n=_(t.split("/"),0,-1).filter(i=>i!=="_default").join("/");return e.startsWith(n)}function mt(e){o(Array.isArray(e)),e.forEach(t=>{o(v(t)),o(p(t,"pageId","string")),o(p(t,"routeFilesystem")),o(p(t,"configValuesSerialized")),o(p(t,"configValuesImported"))})}function yt(e){o(p(e,"configValuesImported"))}const Et=["$$registrations","_rerender_only"],wt=[".md",".mdx"];function vt(e,t,n){const i=Object.keys(e).filter(s=>!Et.includes(s)),r=i.filter(s=>s!=="default"&&s!==n);if(r.length===0){if(i.length===1)return;const s=E.cyan("export default"),l=E.cyan(`export { ${n} }`);i.length===0?h(!1,`${t} doesn't export any value, but it should have a ${l} or ${s}`):(o(i.length===2),x(!1,`${t} remove ${l} or ${s}`,{onlyOnce:!0}))}else{if(wt.some(s=>t.endsWith(s)))return;r.forEach(s=>{x(!1,`${t} should have only one export: move ${E.cyan(`export { ${s} }`)} to its own +${r}.js file`,{onlyOnce:!0})})}}function z(e){const t={};e.filter(i=>i.configName!=="client").forEach(i=>{if(i.isValueFile){const{exportValues:r,importPath:s,configName:l}=i;vt(r,s,l),Object.entries(r).forEach(([a,c])=>{const u=a!=="default",f=u?a:i.configName;t[f]??(t[f]=[]),t[f].push({value:c,importPath:s,exportName:a,isSideExport:u})})}else{const{configName:r,importPath:s,exportValue:l,exportName:a}=i;t[r]??(t[r]=[]),t[r].push({value:l,importPath:s,exportName:a,isSideExport:!1})}});const n={};return Object.entries(t).forEach(([i,r])=>{const s=r.filter(c=>!c.isSideExport),l=s.length>1,a=s.length===r.length;if(l)o(a),o(!1);else{const c=s[0]??r[0];o(c);const{value:u,importPath:f,exportName:d}=c;n[i]={value:u,definedAt:{filePathToShowToUser:f,fileExportPathToShowToUser:[i,"default"].includes(d)?[]:[d]}},St(u,i,f)}}),n}function St(e,t,n){o(!n.includes("+config."))}const bt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],i=t[2];return new RegExp(n,i)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function G(e){const t=JSON.parse(e);return we(t)}function we(e){return typeof e=="string"?$t(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=we(n)}),e)}function $t(e){for(const{match:t,deserialize:n}of bt)if(t(e))return n(e,G);return e}function ve(e){const t={};return Object.entries(e).forEach(([n,i])=>{const{valueSerialized:r,definedAt:s}=i;o(r),o(!t[n]),t[n]={value:G(r),definedAt:s}}),t}function Tt(e,t){const n=e.map(r=>{const s={};{const{configValuesSerialized:f}=r,d=ve(f);Object.assign(s,d)}{const{configValuesImported:f}=r,d=z(f);Object.assign(s,d)}const{pageId:l,isErrorPage:a,routeFilesystem:c,loadConfigValuesAll:u}=r;return xt(s),{pageId:l,isErrorPage:a,routeFilesystem:c,configValues:s,loadConfigValuesAll:u}}),i={configValues:{}};{const r=z(t.configValuesImported);Object.assign(i.configValues,r)}return{pageConfigs:n,pageConfigGlobal:i}}function xt(e){const t="route",n=e[t];if(!n)return;const{value:i}=n,r=typeof i,s=ye("Config",t,n);h(r==="string"||L(i),`${s} has an invalid type '${r}': it should be a string or a function instead, see https://vike.dev/route`)}function kt(e){o(p(e,"isGeneratedFile")),o(e.isGeneratedFile!==!1,"vike was re-installed(/re-built). Restart your app."),o(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),o(p(e,"pageFilesLazy","object")),o(p(e,"pageFilesEager","object")),o(p(e,"pageFilesExportNamesLazy","object")),o(p(e,"pageFilesExportNamesEager","object")),o(p(e.pageFilesLazy,".page")),o(p(e.pageFilesLazy,".page.client")||p(e.pageFilesLazy,".page.server")),o(p(e,"pageFilesList","string[]")),o(p(e,"pageConfigsSerialized")),o(p(e,"pageConfigGlobalSerialized"));const{pageConfigsSerialized:t,pageConfigGlobalSerialized:n}=e;mt(t),yt(n);const{pageConfigs:i,pageConfigGlobal:r}=Tt(t,n),s={};C(e.pageFilesLazy).forEach(({filePath:a,pageFile:c,globValue:u})=>{c=s[a]=s[a]??c;const f=u;Z(f),c.loadFile=async()=>{"fileExports"in c||(c.fileExports=await f(),it(c))}}),C(e.pageFilesExportNamesLazy).forEach(({filePath:a,pageFile:c,globValue:u})=>{c=s[a]=s[a]??c;const f=u;Z(f),c.loadExportNames=async()=>{if(!("exportNames"in c)){const d=await f();h("exportNames"in d,"You seem to be using Vite 2 but the latest vike versions only work with Vite 3"),o(p(d,"exportNames","string[]"),c.filePath),c.exportNames=d.exportNames}}}),C(e.pageFilesEager).forEach(({filePath:a,pageFile:c,globValue:u})=>{c=s[a]=s[a]??c;const f=u;o(v(f)),c.fileExports=f}),C(e.pageFilesExportNamesEager).forEach(({filePath:a,pageFile:c,globValue:u})=>{c=s[a]=s[a]??c;const f=u;o(v(f)),o(p(f,"exportNames","string[]"),c.filePath),c.exportNames=f.exportNames}),e.pageFilesList.forEach(a=>{s[a]=s[a]??Ee(a)});const l=Object.values(s);return l.forEach(({filePath:a})=>{o(!a.includes("\\"))}),{pageFiles:l,pageConfigs:i,pageConfigGlobal:r}}function C(e){const t=[];return Object.entries(e).forEach(([n,i])=>{o(gt.includes(n)),o(v(i)),Object.entries(i).forEach(([r,s])=>{const l=Ee(r);o(l.fileType===n),t.push({filePath:r,pageFile:l,globValue:s})})}),t}function Z(e){o(L(e))}const T=k("setPageFiles.ts",{});function Pt(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:i}=kt(e);T.pageFilesAll=t,T.pageConfigs=n,T.pageConfigGlobal=i}async function Rt(e,t){e?(o(!T.pageFilesGetter),o(t===void 0)):(o(T.pageFilesGetter),o(typeof t=="boolean"),(!T.pageFilesAll||!t)&&await T.pageFilesGetter());const{pageFilesAll:n,pageConfigs:i,pageConfigGlobal:r}=T;o(n&&i&&r);const s=Ct(n,i);return{pageFilesAll:n,allPageIds:s,pageConfigs:i,pageConfigGlobal:r}}function Ct(e,t){const n=e.filter(({isDefaultPageFile:s})=>!s).map(({pageId:s})=>s),i=oe(n),r=t.map(s=>s.pageId);return[...i,...r]}function _t(e,t){return jt(e,t,!0)}function jt(e,t,n){const i=n?"CLIENT_ONLY":"SERVER_ONLY",r=e.filter(g=>g.isRelevant(t)&&g.fileType!==".page.route").sort(It(n,t)),s=g=>{const m=r.filter(S=>S.pageId===t&&S.isEnv(g?"CLIENT_AND_SERVER":i));h(m.length<=1,`Merge the following files into a single file: ${m.map(S=>S.filePath).join(" ")}`);const $=m[0];return o($===void 0||!$.isDefaultPageFile),$},l=s(!1),a=s(!0),c=g=>r.filter(m=>m.isRendererPageFile&&m.isEnv(g?"CLIENT_AND_SERVER":i))[0],u=c(!1),f=c(!0),d=r.filter(g=>g.isDefaultPageFile&&!g.isRendererPageFile&&(g.isEnv(i)||g.isEnv("CLIENT_AND_SERVER")));return[l,a,...d,u,f].filter(tt)}function It(e,t){const n=e?"CLIENT_ONLY":"SERVER_ONLY",i=-1,r=1,s=0;return(l,a)=>{if(!l.isDefaultPageFile&&a.isDefaultPageFile)return i;if(!a.isDefaultPageFile&&l.isDefaultPageFile)return r;{const c=l.isRendererPageFile,u=a.isRendererPageFile;if(!c&&u)return i;if(!u&&c)return r;o(c===u)}{const c=ee(t,l.filePath),u=ee(t,a.filePath);if(c<u)return i;if(u<c)return r;o(c===u)}{if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return i;if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return r}return s}}function ee(e,t){R(e),R(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const i=e.slice(n),r=t.slice(n),s=i.split("/").length,l=r.split("/").length;return s+l}const J={},Ot={},Ft={},Lt={},Wt=[],Se={},Vt=!0,At=[{pageId:"/src/pages/index",isErrorPage:void 0,routeFilesystem:{routeString:"/",definedBy:"/src/pages/index/"},loadConfigValuesAll:()=>$e(()=>import("./src_pages_index.e7133cae.js"),["assets/entries/src_pages_index.e7133cae.js","assets/chunks/chunk-cf010ec4.js","assets/static/index.6b1f4f0f.css"]),configValuesSerialized:{isClientSideRenderable:{definedAt:{isComputed:!0},valueSerialized:"true"}},configValuesImported:[]}],zt={configValuesImported:[]},Nt=Object.assign({}),Dt={...Nt};J[".page"]=Dt;const Ht=Object.assign({}),Ut={...Ht};J[".page.client"]=Ut;const Bt=Object.assign({}),Gt={...Bt};Se[".page.server"]=Gt;const Jt=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:Vt,neverLoaded:Se,pageConfigGlobalSerialized:zt,pageConfigsSerialized:At,pageFilesEager:Ot,pageFilesExportNamesEager:Lt,pageFilesExportNamesLazy:Ft,pageFilesLazy:J,pageFilesList:Wt},Symbol.toStringTag,{value:"Module"}));Pt(Jt);function Yt(){o(U())}function Mt(){Yt()}function te(e){const t=e/1e3;if(t<120){const n=ne(t);return`${n} second${ie(n)}`}{const n=t/60,i=ne(n);return`${i} minute${ie(i)}`}}function ne(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function ie(e){return e==="1"?"":"s"}const Xt=k("utils/executeHook.ts",{userHookErrors:new WeakMap});function qt(e,t){const{hookName:n,hookFilePath:i,hookTimeout:{error:r,warning:s}}=t;let l,a;const c=new Promise((y,g)=>{l=m=>{u(),y(m)},a=m=>{u(),g(m)}}),u=()=>{f&&clearTimeout(f),d&&clearTimeout(d)},f=re(s)&&setTimeout(()=>{x(!1,`The ${n}() hook defined by ${i} is slow: it's taking more than ${te(s)} (https://vike.dev/hooksTimeout)`,{onlyOnce:!1})},s),d=re(r)&&setTimeout(()=>{const y=Le(`The ${n}() hook defined by ${i} timed out: it didn't finish after ${te(r)} (https://vike.dev/hooksTimeout)`);a(y)},r);return(async()=>{try{const y=await e();l(y)}catch(y){v(y)&&Xt.userHookErrors.set(y,{hookName:n,hookFilePath:i}),a(y)}})(),c}function re(e){return!!e&&e!==1/0}function be(e){const t=window.location.href,{searchOriginal:n,hashOriginal:i,pathname:r}=Ue(t,"/");let s;return e!=null&&e.withoutHash?s=`${r}${n||""}`:s=`${r}${n||""}${i||""}`,o(s.startsWith("/")),s}Mt();function Kt(){const e="vike_pageContext",t=document.getElementById(e);h(t,`Couldn't find #${e} (which Vike automatically injects in the HTML): make sure it exists (i.e. don't remove it and make sure your HTML isn't malformed)`);const n=t.textContent;o(n);const i=G(n);return o(p(i,"_pageId","string")),i}function Qt(e,t){const n=e.filter(r=>r.pageId===t);return o(n.length<=1),n[0]??null}async function Zt(e,t){if("isAllLoaded"in e&&!t)return e;const n=await e.loadConfigValuesAll();{const{configValuesImported:i}=n,r=z(i);Object.assign(e.configValues,r)}{const{configValuesSerialized:i}=n,r=ve(i);Object.assign(e.configValues,r)}return P(e,{isAllLoaded:!0}),e}const en="__whileFetchingAssets";async function tn(e,t,n){const i=_t(t,e),r=Qt(n,e);let s;const l=!1;try{s=(await Promise.all([r&&Zt(r,l),...i.map(m=>{var $;return($=m.loadFile)==null?void 0:$.call(m)})]))[0]}catch(g){throw nn(g)&&Object.assign(g,{[en]:!0}),g}const{config:a,configEntries:c,exports:u,exportsAll:f,pageExports:d}=lt(i,s);return{config:a,configEntries:c,exports:u,exportsAll:f,pageExports:d,_pageFilesLoaded:i}}function nn(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}const se=be({withoutHash:!0});async function rn(){const e=Kt();return P(e,{isHydration:!0,isBackwardNavigation:null,_hasPageContextFromServer:!0,_hasPageContextFromClient:!1}),P(e,await on(e._pageId)),sn(),e}function sn(){const e=be({withoutHash:!0});h(se===e,`The URL was manipulated before the hydration finished ('${se}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`)}async function on(e){const t={},{pageFilesAll:n,pageConfigs:i}=await Rt(!0);return P(t,{_pageFilesAll:n,_pageConfigs:i}),P(t,await tn(e,t._pageFilesAll,t._pageConfigs)),n.filter(r=>r.fileType!==".page.server").forEach(r=>{var s;x(!((s=r.fileExports)!=null&&s.onBeforeRender),`export { onBeforeRender } of ${r.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vike.dev/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),t}const an=k("getHook.ts",{isPrerendering:!1});function N(e,t){if(!(t in e.exports))return null;const{hooksTimeout:n}=e.config,i=un(n,t),r=e.exports[t],s=e.exportsAll[t][0];if(o(s.exportValue===r),r===null)return null;const l=s.filePath;return o(l),o(!l.endsWith(" ")),cn(r,{hookName:t,hookFilePath:l}),{hookFn:r,hookName:t,hookFilePath:l,hookTimeout:i}}function ln(e,t){N(e,t)}function cn(e,{hookName:t,hookFilePath:n}){o(t&&n),o(!t.endsWith(")")),h(L(e),`Hook ${t}() defined by ${n} should be a function`)}function un(e,t){const n=fn(e);if(n===!1)return{error:!1,warning:!1};const i=n[t],r=dn(t);return(i==null?void 0:i.error)!==void 0&&(r.error=i.error),(i==null?void 0:i.warning)!==void 0&&(r.warning=i.warning),r}function fn(e){if(e===void 0)return{};if(e===!1)return!1;h(v(e),`Setting ${E.cyan("hooksTimeout")} should be ${E.cyan("false")} or an object`);const t={};return Object.entries(e).forEach(([n,i])=>{if(i===!1){t[n]={error:!1,warning:!1};return}h(v(i),`Setting ${E.cyan(`hooksTimeout.${n}`)} should be ${E.cyan("false")} or an object`);const[r,s]=["error","warning"].map(l=>{const a=i[l];if(a===void 0||a===!1)return a;const c=`Setting ${E.cyan(`hooksTimeout.${n}.${l}`)} should be`;return h(typeof a=="number",`${c} ${E.cyan("false")} or a number`),h(a>0,`${c} a positive number`),a});t[n]={error:r,warning:s}}),t}function dn(e){return e==="onBeforeRoute"?{error:5*1e3,warning:1*1e3}:an.isPrerendering?{error:2*60*1e3,warning:30*1e3}:(o(!e.toLowerCase().includes("prerender")),{error:30*1e3,warning:4*1e3})}function gn(e){const t=Object.entries(e);for(const n in e)delete e[n];t.sort(([n],[i])=>et(n,i)).forEach(([n,i])=>{e[n]=i})}function hn(e){pn(e),mn(e)}function pn(e){dt(e._pageId,e._pageConfigs)&&o(p(e,"is404","boolean"))}function mn(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!v(t)){x(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}const yn="not-serializable",j=k("getPageContextProxyForUser.ts",{});function En(e){return o([!0,!1].includes(e._hasPageContextFromServer)),o([!0,!1].includes(e._hasPageContextFromClient)),new Proxy(e,{get(t,n){const i=e[n],r=JSON.stringify(n);return h(i!==yn,`pageContext[${r}] couldn't be serialized and, therefore, is missing on the client-side. Check the server logs for more information.`),wn(e,n),i}})}function wn(e,t){if(j.prev===t||j.prev==="__v_raw"||(bn(t),t in e)||Sn(t)||!e._hasPageContextFromServer)return;const n=JSON.stringify(t);e._hasPageContextFromClient?x(!1,[`pageContext[${n}] isn't defined on the client-side:`,`1. if it's defined by the server-side then add ${n} to passToClient (https://vike.dev/passToClient), or`,"2. if it's expected that it may not be defined:","   ```js","   // ❌ Replace code like this:",`   const val = pageContext[${n}] ?? someDefaultValue`,"   // ✅ With that:",`   const val = ${n} in pageContext ? pageContext[${n}] : someDefaultValue`,"   ```",`See stack track below to find where pageContext[${n}] is being accessed.`].join(`
`),{showStackTrace:!0,onlyOnce:!1}):h(!1,`pageContext[${n}] isn't available on the client-side because ${n} is missing in passToClient, see https://vike.dev/passToClient`)}const vn=["then","toJSON"];function Sn(e){return!!(vn.includes(e)||typeof e=="symbol"||typeof e!="string"||e.startsWith("__v_"))}function bn(e){j.prev=e,window.setTimeout(()=>{j.prev=void 0},0)}function $n(e,t){if(t){const r=e;o([!0,!1].includes(r.isHydration)),o([!0,!1,null].includes(r.isBackwardNavigation))}else{const r=e;o(r.isHydration===!0),o(r.isBackwardNavigation===null)}o("config"in e),o("configEntries"in e),o("exports"in e),o("exportsAll"in e),o("pageExports"in e),o(v(e.pageExports));const n=e.exports.Page;P(e,{Page:n}),Tn(e),gn(e);const i=En(e);return hn(e),i}function Tn(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}async function xn(e,t){const n=$n(e,t);let i=null,r;i=N(e,"render"),r="render";{const a=N(e,"onRenderClient");a&&(i=a,r="onRenderClient")}if(!i){const a=kn(e);if(o(a),e._pageConfigs.length>0)h(!1,`No onRenderClient() hook defined for URL '${a}', but it's needed, see https://vike.dev/onRenderClient`);else{const c=e._pageFilesLoaded.filter(f=>f.fileType===".page.client");let u;c.length===0?u="No file `*.page.client.*` found for URL "+a:u="One of the following files should export a render() hook: "+c.map(f=>f.filePath).join(" "),h(!1,u)}}o(i);const s=i.hookFn;o(r);const l=await qt(()=>s(n),i);h(l===void 0,`The ${r}() hook defined by ${i.hookFilePath} isn't allowed to return a value`)}function kn(e){let t;try{t=e.urlPathname??e.urlOriginal}catch{}return t=t??window.location.href,t}We();const Pn=!0;Ce(Pn);Rn();async function Rn(){var t,n;const e=await rn();await xn(e,!1),ln(e,"onHydrationEnd"),await((n=(t=e.exports).onHydrationEnd)==null?void 0:n.call(t,e))}
