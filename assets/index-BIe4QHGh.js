import{ax as kh,ay as x,az as Oh,aA as Nt,aB as xt,aC as k,aD as ls,aE as Mh,aF as Lh,aG as Fh,aH as Uh,aI as jh,aJ as Bh,aK as qh,aL as $h,aM as zh,aN as us,aO as ia,aP as wc,aQ as Wh,aR as Gh}from"./vendor-BMh1wcQf.js";import"./walletconnect-W26M-LIP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var Ic,sa=kh;Ic=sa.createRoot,sa.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rn(){return Rn=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},Rn.apply(this,arguments)}var Xt;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Xt||(Xt={}));const oa="popstate";function Kh(n){n===void 0&&(n={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return ji("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function e(r,i){return typeof i=="string"?i:Ac(i)}return Qh(t,e,null,n)}function st(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function Tc(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hh(){return Math.random().toString(36).substr(2,8)}function aa(n,t){return{usr:n.state,key:n.key,idx:t}}function ji(n,t,e,r){return e===void 0&&(e=null),Rn({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof t=="string"?ze(t):t,{state:e,key:t&&t.key||r||Hh()})}function Ac(n){let{pathname:t="/",search:e="",hash:r=""}=n;return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ze(n){let t={};if(n){let e=n.indexOf("#");e>=0&&(t.hash=n.substr(e),n=n.substr(0,e));let r=n.indexOf("?");r>=0&&(t.search=n.substr(r),n=n.substr(0,r)),n&&(t.pathname=n)}return t}function Qh(n,t,e,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Xt.Pop,u=null,d=p();d==null&&(d=0,a.replaceState(Rn({},a.state,{idx:d}),""));function p(){return(a.state||{idx:null}).idx}function m(){l=Xt.Pop;let S=p(),F=S==null?null:S-d;d=S,u&&u({action:l,location:D.location,delta:F})}function T(S,F){l=Xt.Push;let j=ji(D.location,S,F);d=p()+1;let $=aa(j,d),Z=D.createHref(j);try{a.pushState($,"",Z)}catch(Tt){if(Tt instanceof DOMException&&Tt.name==="DataCloneError")throw Tt;i.location.assign(Z)}o&&u&&u({action:l,location:D.location,delta:1})}function C(S,F){l=Xt.Replace;let j=ji(D.location,S,F);d=p();let $=aa(j,d),Z=D.createHref(j);a.replaceState($,"",Z),o&&u&&u({action:l,location:D.location,delta:0})}function b(S){let F=i.location.origin!=="null"?i.location.origin:i.location.href,j=typeof S=="string"?S:Ac(S);return j=j.replace(/ $/,"%20"),st(F,"No window.location.(origin|href) available to create URL for href: "+j),new URL(j,F)}let D={get action(){return l},get location(){return n(i,a)},listen(S){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(oa,m),u=S,()=>{i.removeEventListener(oa,m),u=null}},createHref(S){return t(i,S)},createURL:b,encodeLocation(S){let F=b(S);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:T,replace:C,go(S){return a.go(S)}};return D}var ca;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(ca||(ca={}));function Yh(n,t,e){return e===void 0&&(e="/"),Xh(n,t,e,!1)}function Xh(n,t,e,r){let i=typeof t=="string"?ze(t):t,o=Sc(i.pathname||"/",e);if(o==null)return null;let a=Rc(n);Jh(a);let l=null;for(let u=0;l==null&&u<a.length;++u){let d=ld(o);l=ad(a[u],d,r)}return l}function Rc(n,t,e,r){t===void 0&&(t=[]),e===void 0&&(e=[]),r===void 0&&(r="");let i=(o,a,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};u.relativePath.startsWith("/")&&(st(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=me([r,u.relativePath]),p=e.concat(u);o.children&&o.children.length>0&&(st(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Rc(o.children,t,p,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:sd(d,o.index),routesMeta:p})};return n.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let u of Cc(o.path))i(o,a,u)}),t}function Cc(n){let t=n.split("/");if(t.length===0)return[];let[e,...r]=t,i=e.endsWith("?"),o=e.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Cc(r.join("/")),l=[];return l.push(...a.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...a),l.map(u=>n.startsWith("/")&&u===""?"/":u)}function Jh(n){n.sort((t,e)=>t.score!==e.score?e.score-t.score:od(t.routesMeta.map(r=>r.childrenIndex),e.routesMeta.map(r=>r.childrenIndex)))}const Zh=/^:[\w-]+$/,td=3,ed=2,nd=1,rd=10,id=-2,la=n=>n==="*";function sd(n,t){let e=n.split("/"),r=e.length;return e.some(la)&&(r+=id),t&&(r+=ed),e.filter(i=>!la(i)).reduce((i,o)=>i+(Zh.test(o)?td:o===""?nd:rd),r)}function od(n,t){return n.length===t.length&&n.slice(0,-1).every((r,i)=>r===t[i])?n[n.length-1]-t[t.length-1]:0}function ad(n,t,e){let{routesMeta:r}=n,i={},o="/",a=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,p=o==="/"?t:t.slice(o.length)||"/",m=ua({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},p),T=u.route;if(!m&&d&&e&&!r[r.length-1].route.index&&(m=ua({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},p)),!m)return null;Object.assign(i,m.params),a.push({params:i,pathname:me([o,m.pathname]),pathnameBase:fd(me([o,m.pathnameBase])),route:T}),m.pathnameBase!=="/"&&(o=me([o,m.pathnameBase]))}return a}function ua(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[e,r]=cd(n.path,n.caseSensitive,n.end),i=t.match(e);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,p,m)=>{let{paramName:T,isOptional:C}=p;if(T==="*"){let D=l[m]||"";a=o.slice(0,o.length-D.length).replace(/(.)\/+$/,"$1")}const b=l[m];return C&&!b?d[T]=void 0:d[T]=(b||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:a,pattern:n}}function cd(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!0),Tc(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):e?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ld(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Tc(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),n}}function Sc(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let e=t.endsWith("/")?t.length-1:t.length,r=n.charAt(e);return r&&r!=="/"?null:n.slice(e)||"/"}function ud(n,t){t===void 0&&(t="/");let{pathname:e,search:r="",hash:i=""}=typeof n=="string"?ze(n):n;return{pathname:e?e.startsWith("/")?e:hd(e,t):t,search:pd(r),hash:md(i)}}function hd(n,t){let e=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(i=>{i===".."?e.length>1&&e.pop():i!=="."&&e.push(i)}),e.length>1?e.join("/"):"/"}function Ci(n,t,e,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+e+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dd(n){return n.filter((t,e)=>e===0||t.route.path&&t.route.path.length>0)}function Pc(n,t){let e=dd(n);return t?e.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):e.map(r=>r.pathnameBase)}function bc(n,t,e,r){r===void 0&&(r=!1);let i;typeof n=="string"?i=ze(n):(i=Rn({},n),st(!i.pathname||!i.pathname.includes("?"),Ci("?","pathname","search",i)),st(!i.pathname||!i.pathname.includes("#"),Ci("#","pathname","hash",i)),st(!i.search||!i.search.includes("#"),Ci("#","search","hash",i)));let o=n===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=e;else{let m=t.length-1;if(!r&&a.startsWith("..")){let T=a.split("/");for(;T[0]==="..";)T.shift(),m-=1;i.pathname=T.join("/")}l=m>=0?t[m]:"/"}let u=ud(i,l),d=a&&a!=="/"&&a.endsWith("/"),p=(o||a===".")&&e.endsWith("/");return!u.pathname.endsWith("/")&&(d||p)&&(u.pathname+="/"),u}const me=n=>n.join("/").replace(/\/\/+/g,"/"),fd=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),pd=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,md=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function gd(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Vc=["post","put","patch","delete"];new Set(Vc);const _d=["get",...Vc];new Set(_d);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cn(){return Cn=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},Cn.apply(this,arguments)}const hs=x.createContext(null),yd=x.createContext(null),Mn=x.createContext(null),Fr=x.createContext(null),Ce=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Dc=x.createContext(null);function Ln(){return x.useContext(Fr)!=null}function ds(){return Ln()||st(!1),x.useContext(Fr).location}function xc(n){x.useContext(Mn).static||x.useLayoutEffect(n)}function fs(){let{isDataRoute:n}=x.useContext(Ce);return n?Dd():vd()}function vd(){Ln()||st(!1);let n=x.useContext(hs),{basename:t,future:e,navigator:r}=x.useContext(Mn),{matches:i}=x.useContext(Ce),{pathname:o}=ds(),a=JSON.stringify(Pc(i,e.v7_relativeSplatPath)),l=x.useRef(!1);return xc(()=>{l.current=!0}),x.useCallback(function(d,p){if(p===void 0&&(p={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let m=bc(d,JSON.parse(a),o,p.relative==="path");n==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:me([t,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[t,r,a,o,n])}function Ed(n,t){return wd(n,t)}function wd(n,t,e,r){Ln()||st(!1);let{navigator:i}=x.useContext(Mn),{matches:o}=x.useContext(Ce),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let d=ds(),p;if(t){var m;let S=typeof t=="string"?ze(t):t;u==="/"||(m=S.pathname)!=null&&m.startsWith(u)||st(!1),p=S}else p=d;let T=p.pathname||"/",C=T;if(u!=="/"){let S=u.replace(/^\//,"").split("/");C="/"+T.replace(/^\//,"").split("/").slice(S.length).join("/")}let b=Yh(n,{pathname:C}),D=Cd(b&&b.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:me([u,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?u:me([u,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,e,r);return t&&D?x.createElement(Fr.Provider,{value:{location:Cn({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Xt.Pop}},D):D}function Id(){let n=Vd(),t=gd(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),e=n instanceof Error?n.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),e?x.createElement("pre",{style:i},e):null,null)}const Td=x.createElement(Id,null);class Ad extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?x.createElement(Ce.Provider,{value:this.props.routeContext},x.createElement(Dc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Rd(n){let{routeContext:t,match:e,children:r}=n,i=x.useContext(hs);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),x.createElement(Ce.Provider,{value:t},r)}function Cd(n,t,e,r){var i;if(t===void 0&&(t=[]),e===void 0&&(e=null),r===void 0&&(r=null),n==null){var o;if(!e)return null;if(e.errors)n=e.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!e.initialized&&e.matches.length>0)n=e.matches;else return null}let a=n,l=(i=e)==null?void 0:i.errors;if(l!=null){let p=a.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);p>=0||st(!1),a=a.slice(0,Math.min(a.length,p+1))}let u=!1,d=-1;if(e&&r&&r.v7_partialHydration)for(let p=0;p<a.length;p++){let m=a[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:T,errors:C}=e,b=m.route.loader&&T[m.route.id]===void 0&&(!C||C[m.route.id]===void 0);if(m.route.lazy||b){u=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,m,T)=>{let C,b=!1,D=null,S=null;e&&(C=l&&m.route.id?l[m.route.id]:void 0,D=m.route.errorElement||Td,u&&(d<0&&T===0?(b=!0,S=null):d===T&&(b=!0,S=m.route.hydrateFallbackElement||null)));let F=t.concat(a.slice(0,T+1)),j=()=>{let $;return C?$=D:b?$=S:m.route.Component?$=x.createElement(m.route.Component,null):m.route.element?$=m.route.element:$=p,x.createElement(Rd,{match:m,routeContext:{outlet:p,matches:F,isDataRoute:e!=null},children:$})};return e&&(m.route.ErrorBoundary||m.route.errorElement||T===0)?x.createElement(Ad,{location:e.location,revalidation:e.revalidation,component:D,error:C,children:j(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):j()},null)}var Nc=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Nc||{}),Ir=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Ir||{});function Sd(n){let t=x.useContext(hs);return t||st(!1),t}function Pd(n){let t=x.useContext(yd);return t||st(!1),t}function bd(n){let t=x.useContext(Ce);return t||st(!1),t}function kc(n){let t=bd(),e=t.matches[t.matches.length-1];return e.route.id||st(!1),e.route.id}function Vd(){var n;let t=x.useContext(Dc),e=Pd(Ir.UseRouteError),r=kc(Ir.UseRouteError);return t!==void 0?t:(n=e.errors)==null?void 0:n[r]}function Dd(){let{router:n}=Sd(Nc.UseNavigateStable),t=kc(Ir.UseNavigateStable),e=x.useRef(!1);return xc(()=>{e.current=!0}),x.useCallback(function(i,o){o===void 0&&(o={}),e.current&&(typeof i=="number"?n.navigate(i):n.navigate(i,Cn({fromRouteId:t},o)))},[n,t])}function xd(n){let{to:t,replace:e,state:r,relative:i}=n;Ln()||st(!1);let{future:o,static:a}=x.useContext(Mn),{matches:l}=x.useContext(Ce),{pathname:u}=ds(),d=fs(),p=bc(t,Pc(l,o.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(p);return x.useEffect(()=>d(JSON.parse(m),{replace:e,state:r,relative:i}),[d,m,i,e,r]),null}function gr(n){st(!1)}function Nd(n){let{basename:t="/",children:e=null,location:r,navigationType:i=Xt.Pop,navigator:o,static:a=!1,future:l}=n;Ln()&&st(!1);let u=t.replace(/^\/*/,"/"),d=x.useMemo(()=>({basename:u,navigator:o,static:a,future:Cn({v7_relativeSplatPath:!1},l)}),[u,l,o,a]);typeof r=="string"&&(r=ze(r));let{pathname:p="/",search:m="",hash:T="",state:C=null,key:b="default"}=r,D=x.useMemo(()=>{let S=Sc(p,u);return S==null?null:{location:{pathname:S,search:m,hash:T,state:C,key:b},navigationType:i}},[u,p,m,T,C,b,i]);return D==null?null:x.createElement(Mn.Provider,{value:d},x.createElement(Fr.Provider,{children:e,value:D}))}function kd(n){let{children:t,location:e}=n;return Ed(Bi(t),e)}new Promise(()=>{});function Bi(n,t){t===void 0&&(t=[]);let e=[];return x.Children.forEach(n,(r,i)=>{if(!x.isValidElement(r))return;let o=[...t,i];if(r.type===x.Fragment){e.push.apply(e,Bi(r.props.children,o));return}r.type!==gr&&st(!1),!r.props.index||!r.props.children||st(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Bi(r.props.children,o)),e.push(a)}),e}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Od="6";try{window.__reactRouterVersion=Od}catch{}const Md="startTransition",ha=Oh[Md];function Ld(n){let{basename:t,children:e,future:r,window:i}=n,o=x.useRef();o.current==null&&(o.current=Kh({window:i,v5Compat:!0}));let a=o.current,[l,u]=x.useState({action:a.action,location:a.location}),{v7_startTransition:d}=r||{},p=x.useCallback(m=>{d&&ha?ha(()=>u(m)):u(m)},[u,d]);return x.useLayoutEffect(()=>a.listen(p),[a,p]),x.createElement(Nd,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:a,future:r})}var da;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(da||(da={}));var fa;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(fa||(fa={}));var pa={};/**
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
 */const Oc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Fd=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],l=n[e++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Mc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,p=o>>2,m=(o&3)<<4|l>>4;let T=(l&15)<<2|d>>6,C=d&63;u||(C=64,a||(T=64)),r.push(e[p],e[m],e[T],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Oc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Fd(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const m=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||m==null)throw new Ud;const T=o<<2|l>>4;if(r.push(T),d!==64){const C=l<<4&240|d>>2;if(r.push(C),m!==64){const b=d<<6&192|m;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ud extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jd=function(n){const t=Oc(n);return Mc.encodeByteArray(t,!0)},Tr=function(n){return jd(n).replace(/\./g,"")},Bd=function(n){try{return Mc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function qd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $d=()=>qd().__FIREBASE_DEFAULTS__,zd=()=>{if(typeof process>"u"||typeof pa>"u")return;const n=pa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Wd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Bd(n[1]);return t&&JSON.parse(t)},ps=()=>{try{return $d()||zd()||Wd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gd=n=>{var t,e;return(e=(t=ps())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Kd=n=>{const t=Gd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Lc=()=>{var n;return(n=ps())===null||n===void 0?void 0:n.config};/**
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
 */class Hd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Qd(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Tr(JSON.stringify(e)),Tr(JSON.stringify(a)),""].join(".")}/**
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
 */function Yd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xd(){var n;const t=(n=ps())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zd(){return!Xd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fc(){try{return typeof indexedDB=="object"}catch{return!1}}function Uc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function tf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ef="FirebaseError";class ae extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=ef,Object.setPrototypeOf(this,ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?nf(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new ae(i,l,r)}}function nf(n,t){return n.replace(rf,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const rf=/\{\$([^}]+)}/g;function Ar(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(ma(o)&&ma(a)){if(!Ar(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function ma(n){return n!==null&&typeof n=="object"}/**
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
 */const sf=1e3,of=2,af=4*60*60*1e3,cf=.5;function ga(n,t=sf,e=of){const r=t*Math.pow(e,n),i=Math.round(cf*r*(Math.random()-.5)*2);return Math.min(af,r+i)}/**
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
 */function qt(n){return n&&n._delegate?n._delegate:n}class $t{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const de="[DEFAULT]";/**
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
 */class lf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Hd;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(hf(t))try{this.getOrInitializeService({instanceIdentifier:de})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=de){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=de){return this.instances.has(t)}getOptions(t=de){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uf(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=de){return this.component?this.component.multipleInstances?t:de:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uf(n){return n===de?void 0:n}function hf(n){return n.instantiationMode==="EAGER"}/**
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
 */class df{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new lf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const ff={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},pf=G.INFO,mf={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},gf=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=mf[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ms{constructor(t){this.name=t,this._logLevel=pf,this._logHandler=gf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in G))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ff[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...t),this._logHandler(this,G.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...t),this._logHandler(this,G.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,G.INFO,...t),this._logHandler(this,G.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,G.WARN,...t),this._logHandler(this,G.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...t),this._logHandler(this,G.ERROR,...t)}}const _f=(n,t)=>t.some(e=>n instanceof e);let _a,ya;function yf(){return _a||(_a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vf(){return ya||(ya=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jc=new WeakMap,qi=new WeakMap,Bc=new WeakMap,Si=new WeakMap,gs=new WeakMap;function Ef(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Zt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&jc.set(e,n)}).catch(()=>{}),gs.set(t,n),t}function wf(n){if(qi.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});qi.set(n,t)}let $i={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return qi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Bc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Zt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function If(n){$i=n($i)}function Tf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Pi(this),t,...e);return Bc.set(r,t.sort?t.sort():[t]),Zt(r)}:vf().includes(n)?function(...t){return n.apply(Pi(this),t),Zt(jc.get(this))}:function(...t){return Zt(n.apply(Pi(this),t))}}function Af(n){return typeof n=="function"?Tf(n):(n instanceof IDBTransaction&&wf(n),_f(n,yf())?new Proxy(n,$i):n)}function Zt(n){if(n instanceof IDBRequest)return Ef(n);if(Si.has(n))return Si.get(n);const t=Af(n);return t!==n&&(Si.set(n,t),gs.set(t,n)),t}const Pi=n=>gs.get(n);function qc(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),l=Zt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Zt(a.result),u.oldVersion,u.newVersion,Zt(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Rf=["get","getKey","getAll","getAllKeys","count"],Cf=["put","add","delete","clear"],bi=new Map;function va(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(bi.get(t))return bi.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Cf.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Rf.includes(e)))return;const o=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),i&&u.done]))[0]};return bi.set(t,o),o}If(n=>({...n,get:(t,e,r)=>va(t,e)||n.get(t,e,r),has:(t,e)=>!!va(t,e)||n.has(t,e)}));/**
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
 */class Sf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Pf(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Pf(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const zi="@firebase/app",Ea="0.10.7";/**
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
 */const ye=new ms("@firebase/app"),bf="@firebase/app-compat",Vf="@firebase/analytics-compat",Df="@firebase/analytics",xf="@firebase/app-check-compat",Nf="@firebase/app-check",kf="@firebase/auth",Of="@firebase/auth-compat",Mf="@firebase/database",Lf="@firebase/database-compat",Ff="@firebase/functions",Uf="@firebase/functions-compat",jf="@firebase/installations",Bf="@firebase/installations-compat",qf="@firebase/messaging",$f="@firebase/messaging-compat",zf="@firebase/performance",Wf="@firebase/performance-compat",Gf="@firebase/remote-config",Kf="@firebase/remote-config-compat",Hf="@firebase/storage",Qf="@firebase/storage-compat",Yf="@firebase/firestore",Xf="@firebase/vertexai-preview",Jf="@firebase/firestore-compat",Zf="firebase",tp="10.12.4";/**
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
 */const Wi="[DEFAULT]",ep={[zi]:"fire-core",[bf]:"fire-core-compat",[Df]:"fire-analytics",[Vf]:"fire-analytics-compat",[Nf]:"fire-app-check",[xf]:"fire-app-check-compat",[kf]:"fire-auth",[Of]:"fire-auth-compat",[Mf]:"fire-rtdb",[Lf]:"fire-rtdb-compat",[Ff]:"fire-fn",[Uf]:"fire-fn-compat",[jf]:"fire-iid",[Bf]:"fire-iid-compat",[qf]:"fire-fcm",[$f]:"fire-fcm-compat",[zf]:"fire-perf",[Wf]:"fire-perf-compat",[Gf]:"fire-rc",[Kf]:"fire-rc-compat",[Hf]:"fire-gcs",[Qf]:"fire-gcs-compat",[Yf]:"fire-fst",[Jf]:"fire-fst-compat",[Xf]:"fire-vertex","fire-js":"fire-js",[Zf]:"fire-js-all"};/**
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
 */const Rr=new Map,np=new Map,Gi=new Map;function wa(n,t){try{n.container.addComponent(t)}catch(e){ye.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function re(n){const t=n.name;if(Gi.has(t))return ye.debug(`There were multiple attempts to register component ${t}.`),!1;Gi.set(t,n);for(const e of Rr.values())wa(e,n);for(const e of np.values())wa(e,n);return!0}function Fn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const rp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},te=new Ur("app","Firebase",rp);/**
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
 */class ip{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}}/**
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
 */const sp=tp;function $c(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Wi,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw te.create("bad-app-name",{appName:String(i)});if(e||(e=Lc()),!e)throw te.create("no-options");const o=Rr.get(i);if(o){if(Ar(e,o.options)&&Ar(r,o.config))return o;throw te.create("duplicate-app",{appName:i})}const a=new df(i);for(const u of Gi.values())a.addComponent(u);const l=new ip(e,r,a);return Rr.set(i,l),l}function zc(n=Wi){const t=Rr.get(n);if(!t&&n===Wi&&Lc())return $c();if(!t)throw te.create("no-app",{appName:n});return t}function kt(n,t,e){var r;let i=(r=ep[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ye.warn(l.join(" "));return}re(new $t(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const op="firebase-heartbeat-database",ap=1,Sn="firebase-heartbeat-store";let Vi=null;function Wc(){return Vi||(Vi=qc(op,ap,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Sn)}catch(e){console.warn(e)}}}}).catch(n=>{throw te.create("idb-open",{originalErrorMessage:n.message})})),Vi}async function cp(n){try{const e=(await Wc()).transaction(Sn),r=await e.objectStore(Sn).get(Gc(n));return await e.done,r}catch(t){if(t instanceof ae)ye.warn(t.message);else{const e=te.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ye.warn(e.message)}}}async function Ia(n,t){try{const r=(await Wc()).transaction(Sn,"readwrite");await r.objectStore(Sn).put(t,Gc(n)),await r.done}catch(e){if(e instanceof ae)ye.warn(e.message);else{const r=te.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ye.warn(r.message)}}}function Gc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const lp=1024,up=30*24*60*60*1e3;class hp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new fp(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ta();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=up}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ta(),{heartbeatsToSend:r,unsentEntries:i}=dp(this._heartbeatsCache.heartbeats),o=Tr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Ta(){return new Date().toISOString().substring(0,10)}function dp(n,t=lp){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Aa(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Aa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class fp{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fc()?Uc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await cp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ia(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ia(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Aa(n){return Tr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function pp(n){re(new $t("platform-logger",t=>new Sf(t),"PRIVATE")),re(new $t("heartbeat",t=>new hp(t),"PRIVATE")),kt(zi,Ea,n),kt(zi,Ea,"esm2017"),kt("fire-js","")}pp("");var Ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ge,Kc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,g){function y(){}y.prototype=g.prototype,w.D=g.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(v,E,A){for(var _=Array(arguments.length-2),Ft=2;Ft<arguments.length;Ft++)_[Ft-2]=arguments[Ft];return g.prototype[E].apply(v,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,y){y||(y=0);var v=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)v[E]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(E=0;16>E;++E)v[E]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=w.g[0],y=w.g[1],E=w.g[2];var A=w.g[3],_=g+(A^y&(E^A))+v[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=A+(E^g&(y^E))+v[1]+3905402710&4294967295,A=g+(_<<12&4294967295|_>>>20),_=E+(y^A&(g^y))+v[2]+606105819&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(g^E&(A^g))+v[3]+3250441966&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(A^y&(E^A))+v[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(E^g&(y^E))+v[5]+1200080426&4294967295,A=g+(_<<12&4294967295|_>>>20),_=E+(y^A&(g^y))+v[6]+2821735955&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(g^E&(A^g))+v[7]+4249261313&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(A^y&(E^A))+v[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(E^g&(y^E))+v[9]+2336552879&4294967295,A=g+(_<<12&4294967295|_>>>20),_=E+(y^A&(g^y))+v[10]+4294925233&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(g^E&(A^g))+v[11]+2304563134&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(A^y&(E^A))+v[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(E^g&(y^E))+v[13]+4254626195&4294967295,A=g+(_<<12&4294967295|_>>>20),_=E+(y^A&(g^y))+v[14]+2792965006&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(g^E&(A^g))+v[15]+1236535329&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(E^A&(y^E))+v[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(g^y))+v[6]+3225465664&4294967295,A=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(A^g))+v[11]+643717713&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(E^A))+v[0]+3921069994&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^A&(y^E))+v[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(g^y))+v[10]+38016083&4294967295,A=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(A^g))+v[15]+3634488961&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(E^A))+v[4]+3889429448&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^A&(y^E))+v[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(g^y))+v[14]+3275163606&4294967295,A=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(A^g))+v[3]+4107603335&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(E^A))+v[8]+1163531501&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^A&(y^E))+v[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(g^y))+v[2]+4243563512&4294967295,A=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(A^g))+v[7]+1735328473&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(E^A))+v[12]+2368359562&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(y^E^A)+v[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^E)+v[8]+2272392833&4294967295,A=g+(_<<11&4294967295|_>>>21),_=E+(A^g^y)+v[11]+1839030562&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^g)+v[14]+4259657740&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^A)+v[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^E)+v[4]+1272893353&4294967295,A=g+(_<<11&4294967295|_>>>21),_=E+(A^g^y)+v[7]+4139469664&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^g)+v[10]+3200236656&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^A)+v[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^E)+v[0]+3936430074&4294967295,A=g+(_<<11&4294967295|_>>>21),_=E+(A^g^y)+v[3]+3572445317&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^g)+v[6]+76029189&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^A)+v[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^E)+v[12]+3873151461&4294967295,A=g+(_<<11&4294967295|_>>>21),_=E+(A^g^y)+v[15]+530742520&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^g)+v[2]+3299628645&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(E^(y|~A))+v[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~E))+v[7]+1126891415&4294967295,A=g+(_<<10&4294967295|_>>>22),_=E+(g^(A|~y))+v[14]+2878612391&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~g))+v[5]+4237533241&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~A))+v[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~E))+v[3]+2399980690&4294967295,A=g+(_<<10&4294967295|_>>>22),_=E+(g^(A|~y))+v[10]+4293915773&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~g))+v[1]+2240044497&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~A))+v[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~E))+v[15]+4264355552&4294967295,A=g+(_<<10&4294967295|_>>>22),_=E+(g^(A|~y))+v[6]+2734768916&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~g))+v[13]+1309151649&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~A))+v[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~E))+v[11]+3174756917&4294967295,A=g+(_<<10&4294967295|_>>>22),_=E+(g^(A|~y))+v[2]+718787259&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~g))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var y=g-this.blockSize,v=this.B,E=this.h,A=0;A<g;){if(E==0)for(;A<=y;)i(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<g;)if(v[E++]=w.charCodeAt(A++),E==this.blockSize){i(this,v),E=0;break}}else for(;A<g;)if(v[E++]=w[A++],E==this.blockSize){i(this,v),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var y=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=y&255,y/=256;for(this.u(w),w=Array(16),g=y=0;4>g;++g)for(var v=0;32>v;v+=8)w[y++]=this.g[g]>>>v&255;return w};function o(w,g){var y=l;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=g(w)}function a(w,g){this.h=g;for(var y=[],v=!0,E=w.length-1;0<=E;E--){var A=w[E]|0;v&&A==g||(y[E]=A,v=!1)}this.g=y}var l={};function u(w){return-128<=w&&128>w?o(w,function(g){return new a([g|0],0>g?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return S(d(-w));for(var g=[],y=1,v=0;w>=y;v++)g[v]=w/y|0,y*=4294967296;return new a(g,0)}function p(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return S(p(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),v=m,E=0;E<w.length;E+=8){var A=Math.min(8,w.length-E),_=parseInt(w.substring(E,E+A),g);8>A?(A=d(Math.pow(g,A)),v=v.j(A).add(d(_))):(v=v.j(y),v=v.add(d(_)))}return v}var m=u(0),T=u(1),C=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-S(this).m();for(var w=0,g=1,y=0;y<this.g.length;y++){var v=this.i(y);w+=(0<=v?v:4294967296+v)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(b(this))return"0";if(D(this))return"-"+S(this).toString(w);for(var g=d(Math.pow(w,6)),y=this,v="";;){var E=Z(y,g).g;y=F(y,E.j(g));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=E,b(y))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function b(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function D(w){return w.h==-1}n.l=function(w){return w=F(this,w),D(w)?-1:b(w)?0:1};function S(w){for(var g=w.g.length,y=[],v=0;v<g;v++)y[v]=~w.g[v];return new a(y,~w.h).add(T)}n.abs=function(){return D(this)?S(this):this},n.add=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],v=0,E=0;E<=g;E++){var A=v+(this.i(E)&65535)+(w.i(E)&65535),_=(A>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);v=_>>>16,A&=65535,_&=65535,y[E]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function F(w,g){return w.add(S(g))}n.j=function(w){if(b(this)||b(w))return m;if(D(this))return D(w)?S(this).j(S(w)):S(S(this).j(w));if(D(w))return S(this.j(S(w)));if(0>this.l(C)&&0>w.l(C))return d(this.m()*w.m());for(var g=this.g.length+w.g.length,y=[],v=0;v<2*g;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var E=0;E<w.g.length;E++){var A=this.i(v)>>>16,_=this.i(v)&65535,Ft=w.i(E)>>>16,Ye=w.i(E)&65535;y[2*v+2*E]+=_*Ye,j(y,2*v+2*E),y[2*v+2*E+1]+=A*Ye,j(y,2*v+2*E+1),y[2*v+2*E+1]+=_*Ft,j(y,2*v+2*E+1),y[2*v+2*E+2]+=A*Ft,j(y,2*v+2*E+2)}for(v=0;v<g;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=g;v<2*g;v++)y[v]=0;return new a(y,0)};function j(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function $(w,g){this.g=w,this.h=g}function Z(w,g){if(b(g))throw Error("division by zero");if(b(w))return new $(m,m);if(D(w))return g=Z(S(w),g),new $(S(g.g),S(g.h));if(D(g))return g=Z(w,S(g)),new $(S(g.g),g.h);if(30<w.g.length){if(D(w)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var y=T,v=g;0>=v.l(w);)y=Tt(y),v=Tt(v);var E=ct(y,1),A=ct(v,1);for(v=ct(v,2),y=ct(y,2);!b(v);){var _=A.add(v);0>=_.l(w)&&(E=E.add(y),A=_),v=ct(v,1),y=ct(y,1)}return g=F(w,E.j(g)),new $(E,g)}for(E=m;0<=w.l(g);){for(y=Math.max(1,Math.floor(w.m()/g.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=d(y),_=A.j(g);D(_)||0<_.l(w);)y-=v,A=d(y),_=A.j(g);b(A)&&(A=T),E=E.add(A),w=F(w,_)}return new $(E,w)}n.A=function(w){return Z(this,w).h},n.and=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)&w.i(v);return new a(y,this.h&w.h)},n.or=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)|w.i(v);return new a(y,this.h|w.h)},n.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)^w.i(v);return new a(y,this.h^w.h)};function Tt(w){for(var g=w.g.length+1,y=[],v=0;v<g;v++)y[v]=w.i(v)<<1|w.i(v-1)>>>31;return new a(y,w.h)}function ct(w,g){var y=g>>5;g%=32;for(var v=w.g.length-y,E=[],A=0;A<v;A++)E[A]=0<g?w.i(A+y)>>>g|w.i(A+y+1)<<32-g:w.i(A+y);return new a(E,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Kc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,ge=a}).apply(typeof Ra<"u"?Ra:typeof self<"u"?self:typeof window<"u"?window:{});var lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hc,Qc,gn,Yc,_r,Ki,Xc,Jc,Zc;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,h){return s==Array.prototype||s==Object.prototype||(s[c]=h.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof lr=="object"&&lr];for(var c=0;c<s.length;++c){var h=s[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function i(s,c){if(c)t:{var h=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var I=s[f];if(!(I in h))break t;h=h[I]}s=s[s.length-1],f=h[s],c=c(f),c!=f&&c!=null&&t(h,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var h=0,f=!1,I={next:function(){if(!f&&h<s.length){var R=h++;return{value:c(R,s[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,h){return s.call.apply(s.bind,arguments)}function m(s,c,h){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),s.apply(c,I)}}return function(){return s.apply(c,arguments)}}function T(s,c,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,T.apply(null,arguments)}function C(s,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function b(s,c){function h(){}h.prototype=c.prototype,s.aa=c.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(f,I,R){for(var N=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)N[Q-2]=arguments[Q];return c.prototype[I].apply(f,N)}}function D(s){const c=s.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=s[f];return h}return[]}function S(s,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const I=s.length||0,R=f.length||0;s.length=I+R;for(let N=0;N<R;N++)s[I+N]=f[N]}else s.push(f)}}class F{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function j(s){return/^[\s\xa0]*$/.test(s)}function $(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function Z(s){return Z[" "](s),s}Z[" "]=function(){};var Tt=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function ct(s,c,h){for(const f in s)c.call(h,s[f],f,s)}function w(s,c){for(const h in s)c.call(void 0,s[h],h,s)}function g(s){const c={};for(const h in s)c[h]=s[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,c){let h,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(h in f)s[h]=f[h];for(let R=0;R<y.length;R++)h=y[R],Object.prototype.hasOwnProperty.call(f,h)&&(s[h]=f[h])}}function E(s){var c=1;s=s.split(":");const h=[];for(;0<c&&s.length;)h.push(s.shift()),c--;return s.length&&h.push(s.join(":")),h}function A(s){l.setTimeout(()=>{throw s},0)}function _(){var s=ni;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class Ft{constructor(){this.h=this.g=null}add(c,h){const f=Ye.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Ye=new F(()=>new Zu,s=>s.reset());class Zu{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Xe,Je=!1,ni=new Ft,ro=()=>{const s=l.Promise.resolve(void 0);Xe=()=>{s.then(th)}};var th=()=>{for(var s;s=_();){try{s.h.call(s.g)}catch(h){A(h)}var c=Ye;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}Je=!1};function Kt(){this.s=this.s,this.C=this.C}Kt.prototype.s=!1,Kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ft(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var eh=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return s}();function Ze(s,c){if(ft.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(Tt){t:{try{Z(c.nodeName);var I=!0;break t}catch{}I=!1}I||(c=null)}}else h=="mouseover"?c=s.fromElement:h=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:nh[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ze.aa.h.call(this)}}b(Ze,ft);var nh={2:"touch",3:"pen",4:"mouse"};Ze.prototype.h=function(){Ze.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Wn="closure_listenable_"+(1e6*Math.random()|0),rh=0;function ih(s,c,h,f,I){this.listener=s,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=I,this.key=++rh,this.da=this.fa=!1}function Gn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Kn(s){this.src=s,this.g={},this.h=0}Kn.prototype.add=function(s,c,h,f,I){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var N=ii(s,c,f,I);return-1<N?(c=s[N],h||(c.fa=!1)):(c=new ih(c,this.src,R,!!f,I),c.fa=h,s.push(c)),c};function ri(s,c){var h=c.type;if(h in s.g){var f=s.g[h],I=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=I)&&Array.prototype.splice.call(f,I,1),R&&(Gn(c),s.g[h].length==0&&(delete s.g[h],s.h--))}}function ii(s,c,h,f){for(var I=0;I<s.length;++I){var R=s[I];if(!R.da&&R.listener==c&&R.capture==!!h&&R.ha==f)return I}return-1}var si="closure_lm_"+(1e6*Math.random()|0),oi={};function io(s,c,h,f,I){if(Array.isArray(c)){for(var R=0;R<c.length;R++)io(s,c[R],h,f,I);return null}return h=ao(h),s&&s[Wn]?s.K(c,h,d(f)?!!f.capture:!!f,I):sh(s,c,h,!1,f,I)}function sh(s,c,h,f,I,R){if(!c)throw Error("Invalid event type");var N=d(I)?!!I.capture:!!I,Q=ci(s);if(Q||(s[si]=Q=new Kn(s)),h=Q.add(c,h,f,N,R),h.proxy)return h;if(f=oh(),h.proxy=f,f.src=s,f.listener=h,s.addEventListener)eh||(I=N),I===void 0&&(I=!1),s.addEventListener(c.toString(),f,I);else if(s.attachEvent)s.attachEvent(oo(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function oh(){function s(h){return c.call(s.src,s.listener,h)}const c=ah;return s}function so(s,c,h,f,I){if(Array.isArray(c))for(var R=0;R<c.length;R++)so(s,c[R],h,f,I);else f=d(f)?!!f.capture:!!f,h=ao(h),s&&s[Wn]?(s=s.i,c=String(c).toString(),c in s.g&&(R=s.g[c],h=ii(R,h,f,I),-1<h&&(Gn(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete s.g[c],s.h--)))):s&&(s=ci(s))&&(c=s.g[c.toString()],s=-1,c&&(s=ii(c,h,f,I)),(h=-1<s?c[s]:null)&&ai(h))}function ai(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[Wn])ri(c.i,s);else{var h=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(h,f,s.capture):c.detachEvent?c.detachEvent(oo(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=ci(c))?(ri(h,s),h.h==0&&(h.src=null,c[si]=null)):Gn(s)}}}function oo(s){return s in oi?oi[s]:oi[s]="on"+s}function ah(s,c){if(s.da)s=!0;else{c=new Ze(c,this);var h=s.listener,f=s.ha||s.src;s.fa&&ai(s),s=h.call(f,c)}return s}function ci(s){return s=s[si],s instanceof Kn?s:null}var li="__closure_events_fn_"+(1e9*Math.random()>>>0);function ao(s){return typeof s=="function"?s:(s[li]||(s[li]=function(c){return s.handleEvent(c)}),s[li])}function pt(){Kt.call(this),this.i=new Kn(this),this.M=this,this.F=null}b(pt,Kt),pt.prototype[Wn]=!0,pt.prototype.removeEventListener=function(s,c,h,f){so(this,s,c,h,f)};function wt(s,c){var h,f=s.F;if(f)for(h=[];f;f=f.F)h.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new ft(c,s);else if(c instanceof ft)c.target=c.target||s;else{var I=c;c=new ft(f,s),v(c,I)}if(I=!0,h)for(var R=h.length-1;0<=R;R--){var N=c.g=h[R];I=Hn(N,f,!0,c)&&I}if(N=c.g=s,I=Hn(N,f,!0,c)&&I,I=Hn(N,f,!1,c)&&I,h)for(R=0;R<h.length;R++)N=c.g=h[R],I=Hn(N,f,!1,c)&&I}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var h=s.g[c],f=0;f<h.length;f++)Gn(h[f]);delete s.g[c],s.h--}}this.F=null},pt.prototype.K=function(s,c,h,f){return this.i.add(String(s),c,!1,h,f)},pt.prototype.L=function(s,c,h,f){return this.i.add(String(s),c,!0,h,f)};function Hn(s,c,h,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var I=!0,R=0;R<c.length;++R){var N=c[R];if(N&&!N.da&&N.capture==h){var Q=N.listener,lt=N.ha||N.src;N.fa&&ri(s.i,N),I=Q.call(lt,f)!==!1&&I}}return I&&!f.defaultPrevented}function co(s,c,h){if(typeof s=="function")h&&(s=T(s,h));else if(s&&typeof s.handleEvent=="function")s=T(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function lo(s){s.g=co(()=>{s.g=null,s.i&&(s.i=!1,lo(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class ch extends Kt{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:lo(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tn(s){Kt.call(this),this.h=s,this.g={}}b(tn,Kt);var uo=[];function ho(s){ct(s.g,function(c,h){this.g.hasOwnProperty(h)&&ai(c)},s),s.g={}}tn.prototype.N=function(){tn.aa.N.call(this),ho(this)},tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ui=l.JSON.stringify,lh=l.JSON.parse,uh=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function hi(){}hi.prototype.h=null;function fo(s){return s.h||(s.h=s.i())}function po(){}var en={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function di(){ft.call(this,"d")}b(di,ft);function fi(){ft.call(this,"c")}b(fi,ft);var ce={},mo=null;function Qn(){return mo=mo||new pt}ce.La="serverreachability";function go(s){ft.call(this,ce.La,s)}b(go,ft);function nn(s){const c=Qn();wt(c,new go(c))}ce.STAT_EVENT="statevent";function _o(s,c){ft.call(this,ce.STAT_EVENT,s),this.stat=c}b(_o,ft);function It(s){const c=Qn();wt(c,new _o(c,s))}ce.Ma="timingevent";function yo(s,c){ft.call(this,ce.Ma,s),this.size=c}b(yo,ft);function rn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function sn(){this.g=!0}sn.prototype.xa=function(){this.g=!1};function hh(s,c,h,f,I,R){s.info(function(){if(s.g)if(R)for(var N="",Q=R.split("&"),lt=0;lt<Q.length;lt++){var K=Q[lt].split("=");if(1<K.length){var mt=K[0];K=K[1];var gt=mt.split("_");N=2<=gt.length&&gt[1]=="type"?N+(mt+"="+K+"&"):N+(mt+"=redacted&")}}else N=null;else N=R;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+c+`
`+h+`
`+N})}function dh(s,c,h,f,I,R,N){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+c+`
`+h+`
`+R+" "+N})}function be(s,c,h,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+ph(s,h)+(f?" "+f:"")})}function fh(s,c){s.info(function(){return"TIMEOUT: "+c})}sn.prototype.info=function(){};function ph(s,c){if(!s.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var f=h[s];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var N=1;N<I.length;N++)I[N]=""}}}}return ui(h)}catch{return c}}var Yn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pi;function Xn(){}b(Xn,hi),Xn.prototype.g=function(){return new XMLHttpRequest},Xn.prototype.i=function(){return{}},pi=new Xn;function Ht(s,c,h,f){this.j=s,this.i=c,this.l=h,this.R=f||1,this.U=new tn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Eo}function Eo(){this.i=null,this.g="",this.h=!1}var wo={},mi={};function gi(s,c,h){s.L=1,s.v=er(Ut(c)),s.m=h,s.P=!0,Io(s,null)}function Io(s,c){s.F=Date.now(),Jn(s),s.A=Ut(s.v);var h=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Mo(h.i,"t",f),s.C=0,h=s.j.J,s.h=new Eo,s.g=ta(s.j,h?c:null,!s.m),0<s.O&&(s.M=new ch(T(s.Y,s,s.g),s.O)),c=s.U,h=s.g,f=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(uo[0]=I.toString()),I=uo);for(var R=0;R<I.length;R++){var N=io(h,I[R],f||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=s.H?g(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),nn(),hh(s.i,s.u,s.A,s.l,s.R,s.m)}Ht.prototype.ca=function(s){s=s.target;const c=this.M;c&&jt(s)==3?c.j():this.Y(s)},Ht.prototype.Y=function(s){try{if(s==this.g)t:{const gt=jt(this.g);var c=this.g.Ba();const xe=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||$o(this.g)))){this.J||gt!=4||c==7||(c==8||0>=xe?nn(3):nn(2)),_i(this);var h=this.g.Z();this.X=h;e:if(To(this)){var f=$o(this.g);s="";var I=f.length,R=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){le(this),on(this);var N="";break e}this.h.i=new l.TextDecoder}for(c=0;c<I;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(R&&c==I-1)});f.length=0,this.h.g+=s,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,dh(this.i,this.u,this.A,this.l,this.R,gt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,lt=this.g;if((Q=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Q)){var K=Q;break e}}K=null}if(h=K)be(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yi(this,h);else{this.o=!1,this.s=3,It(12),le(this),on(this);break t}}if(this.P){h=!0;let bt;for(;!this.J&&this.C<N.length;)if(bt=mh(this,N),bt==mi){gt==4&&(this.s=4,It(14),h=!1),be(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==wo){this.s=4,It(15),be(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else be(this.i,this.l,bt,null),yi(this,bt);if(To(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||N.length!=0||this.h.h||(this.s=1,It(16),h=!1),this.o=this.o&&h,!h)be(this.i,this.l,N,"[Invalid Chunked Response]"),le(this),on(this);else if(0<N.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),Ai(mt),mt.M=!0,It(11))}}else be(this.i,this.l,N,null),yi(this,N);gt==4&&le(this),this.o&&!this.J&&(gt==4?Yo(this.j,this):(this.o=!1,Jn(this)))}else xh(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),le(this),on(this)}}}catch{}finally{}};function To(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function mh(s,c){var h=s.C,f=c.indexOf(`
`,h);return f==-1?mi:(h=Number(c.substring(h,f)),isNaN(h)?wo:(f+=1,f+h>c.length?mi:(c=c.slice(f,f+h),s.C=f+h,c)))}Ht.prototype.cancel=function(){this.J=!0,le(this)};function Jn(s){s.S=Date.now()+s.I,Ao(s,s.I)}function Ao(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=rn(T(s.ba,s),c)}function _i(s){s.B&&(l.clearTimeout(s.B),s.B=null)}Ht.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(fh(this.i,this.A),this.L!=2&&(nn(),It(17)),le(this),this.s=2,on(this)):Ao(this,this.S-s)};function on(s){s.j.G==0||s.J||Yo(s.j,s)}function le(s){_i(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,ho(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function yi(s,c){try{var h=s.j;if(h.G!=0&&(h.g==s||vi(h.h,s))){if(!s.K&&vi(h.h,s)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)or(h),ir(h);else break t;Ti(h),It(18)}}else h.za=I[1],0<h.za-h.T&&37500>I[2]&&h.F&&h.v==0&&!h.C&&(h.C=rn(T(h.Za,h),6e3));if(1>=So(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else he(h,11)}else if((s.K||h.g==s)&&or(h),!j(c))for(I=h.Da.g.parse(c),c=0;c<I.length;c++){let K=I[c];if(h.T=K[0],K=K[1],h.G==2)if(K[0]=="c"){h.K=K[1],h.ia=K[2];const mt=K[3];mt!=null&&(h.la=mt,h.j.info("VER="+h.la));const gt=K[4];gt!=null&&(h.Aa=gt,h.j.info("SVER="+h.Aa));const xe=K[5];xe!=null&&typeof xe=="number"&&0<xe&&(f=1.5*xe,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const bt=s.g;if(bt){const cr=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cr){var R=f.h;R.g||cr.indexOf("spdy")==-1&&cr.indexOf("quic")==-1&&cr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ei(R,R.h),R.h=null))}if(f.D){const Ri=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ri&&(f.ya=Ri,X(f.I,f.D,Ri))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var N=s;if(f.qa=Zo(f,f.J?f.ia:null,f.W),N.K){Po(f.h,N);var Q=N,lt=f.L;lt&&(Q.I=lt),Q.B&&(_i(Q),Jn(Q)),f.g=N}else Ho(f);0<h.i.length&&sr(h)}else K[0]!="stop"&&K[0]!="close"||he(h,7);else h.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?he(h,7):Ii(h):K[0]!="noop"&&h.l&&h.l.ta(K),h.v=0)}}nn(4)}catch{}}var gh=class{constructor(s,c){this.g=s,this.map=c}};function Ro(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Co(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function So(s){return s.h?1:s.g?s.g.size:0}function vi(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Ei(s,c){s.g?s.g.add(c):s.h=c}function Po(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Ro.prototype.cancel=function(){if(this.i=bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function bo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const h of s.g.values())c=c.concat(h.D);return c}return D(s.i)}function _h(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(u(s)){for(var c=[],h=s.length,f=0;f<h;f++)c.push(s[f]);return c}c=[],h=0;for(f in s)c[h++]=s[f];return c}function yh(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(u(s)||typeof s=="string"){var c=[];s=s.length;for(var h=0;h<s;h++)c.push(h);return c}c=[],h=0;for(const f in s)c[h++]=f;return c}}}function Vo(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(u(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var h=yh(s),f=_h(s),I=f.length,R=0;R<I;R++)c.call(void 0,f[R],h&&h[R],s)}var Do=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vh(s,c){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var f=s[h].indexOf("="),I=null;if(0<=f){var R=s[h].substring(0,f);I=s[h].substring(f+1)}else R=s[h];c(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function ue(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ue){this.h=s.h,Zn(this,s.j),this.o=s.o,this.g=s.g,tr(this,s.s),this.l=s.l;var c=s.i,h=new ln;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),xo(this,h),this.m=s.m}else s&&(c=String(s).match(Do))?(this.h=!1,Zn(this,c[1]||"",!0),this.o=an(c[2]||""),this.g=an(c[3]||"",!0),tr(this,c[4]),this.l=an(c[5]||"",!0),xo(this,c[6]||"",!0),this.m=an(c[7]||"")):(this.h=!1,this.i=new ln(null,this.h))}ue.prototype.toString=function(){var s=[],c=this.j;c&&s.push(cn(c,No,!0),":");var h=this.g;return(h||c=="file")&&(s.push("//"),(c=this.o)&&s.push(cn(c,No,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(cn(h,h.charAt(0)=="/"?Ih:wh,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",cn(h,Ah)),s.join("")};function Ut(s){return new ue(s)}function Zn(s,c,h){s.j=h?an(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function tr(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function xo(s,c,h){c instanceof ln?(s.i=c,Rh(s.i,s.h)):(h||(c=cn(c,Th)),s.i=new ln(c,s.h))}function X(s,c,h){s.i.set(c,h)}function er(s){return X(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function an(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function cn(s,c,h){return typeof s=="string"?(s=encodeURI(s).replace(c,Eh),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Eh(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var No=/[#\/\?@]/g,wh=/[#\?:]/g,Ih=/[#\?]/g,Th=/[#\?@]/g,Ah=/#/g;function ln(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function Qt(s){s.g||(s.g=new Map,s.h=0,s.i&&vh(s.i,function(c,h){s.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=ln.prototype,n.add=function(s,c){Qt(this),this.i=null,s=Ve(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(c),this.h+=1,this};function ko(s,c){Qt(s),c=Ve(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Oo(s,c){return Qt(s),c=Ve(s,c),s.g.has(c)}n.forEach=function(s,c){Qt(this),this.g.forEach(function(h,f){h.forEach(function(I){s.call(c,I,f,this)},this)},this)},n.na=function(){Qt(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const I=s[f];for(let R=0;R<I.length;R++)h.push(c[f])}return h},n.V=function(s){Qt(this);let c=[];if(typeof s=="string")Oo(this,s)&&(c=c.concat(this.g.get(Ve(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)c=c.concat(s[h])}return c},n.set=function(s,c){return Qt(this),this.i=null,s=Ve(this,s),Oo(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function Mo(s,c,h){ko(s,c),0<h.length&&(s.i=null,s.g.set(Ve(s,c),D(h)),s.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const R=encodeURIComponent(String(f)),N=this.V(f);for(f=0;f<N.length;f++){var I=R;N[f]!==""&&(I+="="+encodeURIComponent(String(N[f]))),s.push(I)}}return this.i=s.join("&")};function Ve(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Rh(s,c){c&&!s.j&&(Qt(s),s.i=null,s.g.forEach(function(h,f){var I=f.toLowerCase();f!=I&&(ko(this,f),Mo(this,I,h))},s)),s.j=c}function Ch(s,c){const h=new sn;if(l.Image){const f=new Image;f.onload=C(Yt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=C(Yt,h,"TestLoadImage: error",!1,c,f),f.onabort=C(Yt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=C(Yt,h,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function Sh(s,c){const h=new sn,f=new AbortController,I=setTimeout(()=>{f.abort(),Yt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(I),R.ok?Yt(h,"TestPingServer: ok",!0,c):Yt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(I),Yt(h,"TestPingServer: error",!1,c)})}function Yt(s,c,h,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(h)}catch{}}function Ph(){this.g=new uh}function bh(s,c,h){const f=h||"";try{Vo(s,function(I,R){let N=I;d(I)&&(N=ui(I)),c.push(f+R+"="+encodeURIComponent(N))})}catch(I){throw c.push(f+"type="+encodeURIComponent("_badmap")),I}}function un(s){this.l=s.Ub||null,this.j=s.eb||!1}b(un,hi),un.prototype.g=function(){return new nr(this.l,this.j)},un.prototype.i=function(s){return function(){return s}}({});function nr(s,c){pt.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(nr,pt),n=nr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,dn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,dn(this)),this.g&&(this.readyState=3,dn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?hn(this):dn(this),this.readyState==3&&Lo(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,hn(this))},n.Qa=function(s){this.g&&(this.response=s,hn(this))},n.ga=function(){this.g&&hn(this)};function hn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,dn(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=c.next();return s.join(`\r
`)};function dn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(nr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Fo(s){let c="";return ct(s,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function wi(s,c,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=Fo(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):X(s,c,h))}function et(s){pt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(et,pt);var Vh=/^https?$/i,Dh=["POST","PUT"];n=et.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pi.g(),this.v=this.o?fo(this.o):fo(pi),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(R){Uo(this,R);return}if(s=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)h.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),I=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Dh,c,void 0))||f||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,N]of h)this.g.setRequestHeader(R,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qo(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Uo(this,R)}};function Uo(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,jo(s),rr(s)}function jo(s){s.A||(s.A=!0,wt(s,"complete"),wt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,wt(this,"complete"),wt(this,"abort"),rr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rr(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Bo(this):this.bb())},n.bb=function(){Bo(this)};function Bo(s){if(s.h&&typeof a<"u"&&(!s.v[1]||jt(s)!=4||s.Z()!=2)){if(s.u&&jt(s)==4)co(s.Ea,0,s);else if(wt(s,"readystatechange"),jt(s)==4){s.h=!1;try{const N=s.Z();t:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var f;if(f=N===0){var I=String(s.D).match(Do)[1]||null;!I&&l.self&&l.self.location&&(I=l.self.location.protocol.slice(0,-1)),f=!Vh.test(I?I.toLowerCase():"")}h=f}if(h)wt(s,"complete"),wt(s,"success");else{s.m=6;try{var R=2<jt(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",jo(s)}}finally{rr(s)}}}}function rr(s,c){if(s.g){qo(s);const h=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||wt(s,"ready");try{h.onreadystatechange=f}catch{}}}function qo(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function jt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),lh(c)}};function $o(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function xh(s){const c={};s=(s.g&&2<=jt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(j(s[f]))continue;var h=E(s[f]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=c[I]||[];c[I]=R,R.push(h)}w(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fn(s,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||c}function zo(s){this.Aa=0,this.i=[],this.j=new sn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fn("baseRetryDelayMs",5e3,s),this.cb=fn("retryDelaySeedMs",1e4,s),this.Wa=fn("forwardChannelMaxRetries",2,s),this.wa=fn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ro(s&&s.concurrentRequestLimit),this.Da=new Ph,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=zo.prototype,n.la=8,n.G=1,n.connect=function(s,c,h,f){It(0),this.W=s,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Zo(this,null,this.W),sr(this)};function Ii(s){if(Wo(s),s.G==3){var c=s.U++,h=Ut(s.I);if(X(h,"SID",s.K),X(h,"RID",c),X(h,"TYPE","terminate"),pn(s,h),c=new Ht(s,s.j,c),c.L=2,c.v=er(Ut(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=ta(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Jn(c)}Jo(s)}function ir(s){s.g&&(Ai(s),s.g.cancel(),s.g=null)}function Wo(s){ir(s),s.u&&(l.clearTimeout(s.u),s.u=null),or(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function sr(s){if(!Co(s.h)&&!s.s){s.s=!0;var c=s.Ga;Xe||ro(),Je||(Xe(),Je=!0),ni.add(c,s),s.B=0}}function Nh(s,c){return So(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=rn(T(s.Ga,s,c),Xo(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Ht(this,this.j,s);let R=this.o;if(this.S&&(R?(R=g(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=Ko(this,I,c),h=Ut(this.I),X(h,"RID",s),X(h,"CVER",22),this.D&&X(h,"X-HTTP-Session-Id",this.D),pn(this,h),R&&(this.O?c="headers="+encodeURIComponent(String(Fo(R)))+"&"+c:this.m&&wi(h,this.m,R)),Ei(this.h,I),this.Ua&&X(h,"TYPE","init"),this.P?(X(h,"$req",c),X(h,"SID","null"),I.T=!0,gi(I,h,null)):gi(I,h,c),this.G=2}}else this.G==3&&(s?Go(this,s):this.i.length==0||Co(this.h)||Go(this))};function Go(s,c){var h;c?h=c.l:h=s.U++;const f=Ut(s.I);X(f,"SID",s.K),X(f,"RID",h),X(f,"AID",s.T),pn(s,f),s.m&&s.o&&wi(f,s.m,s.o),h=new Ht(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),c&&(s.i=c.D.concat(s.i)),c=Ko(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ei(s.h,h),gi(h,f,c)}function pn(s,c){s.H&&ct(s.H,function(h,f){X(c,f,h)}),s.l&&Vo({},function(h,f){X(c,f,h)})}function Ko(s,c,h){h=Math.min(s.i.length,h);var f=s.l?T(s.l.Na,s.l,s):null;t:{var I=s.i;let R=-1;for(;;){const N=["count="+h];R==-1?0<h?(R=I[0].g,N.push("ofs="+R)):R=0:N.push("ofs="+R);let Q=!0;for(let lt=0;lt<h;lt++){let K=I[lt].g;const mt=I[lt].map;if(K-=R,0>K)R=Math.max(0,I[lt].g-100),Q=!1;else try{bh(mt,N,"req"+K+"_")}catch{f&&f(mt)}}if(Q){f=N.join("&");break t}}}return s=s.i.splice(0,h),c.D=s,f}function Ho(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;Xe||ro(),Je||(Xe(),Je=!0),ni.add(c,s),s.v=0}}function Ti(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=rn(T(s.Fa,s),Xo(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Qo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=rn(T(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),ir(this),Qo(this))};function Ai(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Qo(s){s.g=new Ht(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=Ut(s.qa);X(c,"RID","rpc"),X(c,"SID",s.K),X(c,"AID",s.T),X(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&X(c,"TO",s.ja),X(c,"TYPE","xmlhttp"),pn(s,c),s.m&&s.o&&wi(c,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=er(Ut(c)),h.m=null,h.P=!0,Io(h,s)}n.Za=function(){this.C!=null&&(this.C=null,ir(this),Ti(this),It(19))};function or(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Yo(s,c){var h=null;if(s.g==c){or(s),Ai(s),s.g=null;var f=2}else if(vi(s.h,c))h=c.D,Po(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var I=s.B;f=Qn(),wt(f,new yo(f,h)),sr(s)}else Ho(s);else if(I=c.s,I==3||I==0&&0<c.X||!(f==1&&Nh(s,c)||f==2&&Ti(s)))switch(h&&0<h.length&&(c=s.h,c.i=c.i.concat(h)),I){case 1:he(s,5);break;case 4:he(s,10);break;case 3:he(s,6);break;default:he(s,2)}}}function Xo(s,c){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*c}function he(s,c){if(s.j.info("Error code "+c),c==2){var h=T(s.fb,s),f=s.Xa;const I=!f;f=new ue(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Zn(f,"https"),er(f),I?Ch(f.toString(),h):Sh(f.toString(),h)}else It(2);s.G=0,s.l&&s.l.sa(c),Jo(s),Wo(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Jo(s){if(s.G=0,s.ka=[],s.l){const c=bo(s.h);(c.length!=0||s.i.length!=0)&&(S(s.ka,c),S(s.ka,s.i),s.h.i.length=0,D(s.i),s.i.length=0),s.l.ra()}}function Zo(s,c,h){var f=h instanceof ue?Ut(h):new ue(h);if(f.g!="")c&&(f.g=c+"."+f.g),tr(f,f.s);else{var I=l.location;f=I.protocol,c=c?c+"."+I.hostname:I.hostname,I=+I.port;var R=new ue(null);f&&Zn(R,f),c&&(R.g=c),I&&tr(R,I),h&&(R.l=h),f=R}return h=s.D,c=s.ya,h&&c&&X(f,h,c),X(f,"VER",s.la),pn(s,f),f}function ta(s,c,h){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new et(new un({eb:h})):new et(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ea(){}n=ea.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ar(){}ar.prototype.g=function(s,c){return new At(s,c)};function At(s,c){pt.call(this),this.g=new zo(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!j(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!j(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new De(this)}b(At,pt),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Ii(this.g)},At.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=ui(s),s=h);c.i.push(new gh(c.Ya++,s)),c.G==3&&sr(c)},At.prototype.N=function(){this.g.l=null,delete this.j,Ii(this.g),delete this.g,At.aa.N.call(this)};function na(s){di.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){t:{for(const h in c){s=h;break t}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}b(na,di);function ra(){fi.call(this),this.status=1}b(ra,fi);function De(s){this.g=s}b(De,ea),De.prototype.ua=function(){wt(this.g,"a")},De.prototype.ta=function(s){wt(this.g,new na(s))},De.prototype.sa=function(s){wt(this.g,new ra)},De.prototype.ra=function(){wt(this.g,"b")},ar.prototype.createWebChannel=ar.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Zc=function(){return new ar},Jc=function(){return Qn()},Xc=ce,Ki={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yn.NO_ERROR=0,Yn.TIMEOUT=8,Yn.HTTP_ERROR=6,_r=Yn,vo.COMPLETE="complete",Yc=vo,po.EventType=en,en.OPEN="a",en.CLOSE="b",en.ERROR="c",en.MESSAGE="d",pt.prototype.listen=pt.prototype.K,gn=po,Qc=un,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,Hc=et}).apply(typeof lr<"u"?lr:typeof self<"u"?self:typeof window<"u"?window:{});const Ca="@firebase/firestore";/**
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
 */class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let We="10.12.3";/**
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
 */const ve=new ms("@firebase/firestore");function mn(){return ve.logLevel}function M(n,...t){if(ve.logLevel<=G.DEBUG){const e=t.map(_s);ve.debug(`Firestore (${We}): ${n}`,...e)}}function zt(n,...t){if(ve.logLevel<=G.ERROR){const e=t.map(_s);ve.error(`Firestore (${We}): ${n}`,...e)}}function Le(n,...t){if(ve.logLevel<=G.WARN){const e=t.map(_s);ve.warn(`Firestore (${We}): ${n}`,...e)}}function _s(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function U(n="Unexpected state"){const t=`FIRESTORE (${We}) INTERNAL ASSERTION FAILED: `+n;throw zt(t),new Error(t)}function Y(n,t){n||U()}function q(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ae{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ee{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class tl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(yt.UNAUTHENTICATED))}shutdown(){}}class gp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class _p{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let o=new ee;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ee,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=o;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ee)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new tl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string"),new yt(t)}}class yp{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vp{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new yp(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ep{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wp{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string"),this.R=e.token,new Ep(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ip(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class el{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Ip(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function H(n,t){return n<t?-1:n>t?1:0}function Fe(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class ot{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ot(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(t){this.timestamp=t}static fromTimestamp(t){return new B(t)}static min(){return new B(new ot(0,0))}static max(){return new B(new ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Pn{constructor(t,e,r){e===void 0?e=0:e>t.length&&U(),r===void 0?r=t.length-e:r>t.length-e&&U(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Pn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Pn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class J extends Pn{construct(t,e,r){return new J(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new J(e)}static emptyPath(){return new J([])}}const Tp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Pn{construct(t,e,r){return new ht(t,e,r)}static isValidIdentifier(t){return Tp.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(e)}static emptyPath(){return new ht([])}}/**
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
 */class L{constructor(t){this.path=t}static fromPath(t){return new L(J.fromString(t))}static fromName(t){return new L(J.fromString(t).popFirst(5))}static empty(){return new L(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&J.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new J(t.slice()))}}function Ap(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new ot(e+1,0):new ot(e,r));return new ie(i,L.empty(),t)}function Rp(n){return new ie(n.readTime,n.key,-1)}class ie{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ie(B.min(),L.empty(),-1)}static max(){return new ie(B.max(),L.empty(),-1)}}function Cp(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=L.comparator(n.documentKey,t.documentKey),e!==0?e:H(n.largestBatchId,t.largestBatchId))}/**
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
 */const Sp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Un(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Sp)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,r)=>{e(t)})}static reject(t){return new V((e,r)=>{r(t)})}static waitFor(t){return new V((e,r)=>{let i=0,o=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&e()},u=>r(u))}),a=!0,o===i&&e()})}static or(t){let e=V.resolve(!1);for(const r of t)e=e.next(i=>i?V.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new V((r,i)=>{const o=t.length,a=new Array(o);let l=0;for(let u=0;u<o;u++){const d=u;e(t[d]).next(p=>{a[d]=p,++l,l===o&&r(a)},p=>i(p))}})}static doWhile(t,e){return new V((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function bp(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function jn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ys{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ys.oe=-1;function jr(n){return n==null}function Cr(n){return n===0&&1/n==-1/0}function Vp(n){return typeof n=="number"&&Number.isInteger(n)&&!Cr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Sa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ge(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function nl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class tt{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ur(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ur(this.root,t,this.comparator,!1)}getReverseIterator(){return new ur(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ur(this.root,t,this.comparator,!0)}}class ur{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ut.RED,this.left=i??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ut(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const t=this.left.check();if(t!==this.right.check())throw U();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,r,i,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Pa(this.data.getIterator())}getIteratorFrom(t){return new Pa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof dt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new dt(this.comparator);return e.data=t,e}}class Pa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vt{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new Vt([])}unionWith(t){let e=new dt(ht.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Vt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Fe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class rl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Et{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new rl("Invalid base64 string: "+o):o}}(t);return new Et(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new Et(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const Dp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function se(n){if(Y(!!n),typeof n=="string"){let t=0;const e=Dp.exec(n);if(Y(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ee(n){return typeof n=="string"?Et.fromBase64String(n):Et.fromUint8Array(n)}/**
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
 */function vs(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Es(n){const t=n.mapValue.fields.__previous_value__;return vs(t)?Es(t):t}function bn(n){const t=se(n.mapValue.fields.__local_write_time__.timestampValue);return new ot(t.seconds,t.nanos)}/**
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
 */class xp{constructor(t,e,r,i,o,a,l,u,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Vn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Vn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Vn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const hr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function we(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vs(n)?4:Np(n)?9007199254740991:10:U()}function Lt(n,t){if(n===t)return!0;const e=we(n);if(e!==we(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return bn(n).isEqual(bn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=se(i.timestampValue),l=se(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return Ee(i.bytesValue).isEqual(Ee(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return rt(i.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(i.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return rt(i.integerValue)===rt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=rt(i.doubleValue),l=rt(o.doubleValue);return a===l?Cr(a)===Cr(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return Fe(n.arrayValue.values||[],t.arrayValue.values||[],Lt);case 10:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Sa(a)!==Sa(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Lt(a[u],l[u])))return!1;return!0}(n,t);default:return U()}}function Dn(n,t){return(n.values||[]).find(e=>Lt(e,t))!==void 0}function Ue(n,t){if(n===t)return 0;const e=we(n),r=we(t);if(e!==r)return H(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=rt(o.integerValue||o.doubleValue),u=rt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,t);case 3:return ba(n.timestampValue,t.timestampValue);case 4:return ba(bn(n),bn(t));case 5:return H(n.stringValue,t.stringValue);case 6:return function(o,a){const l=Ee(o),u=Ee(a);return l.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=H(l[d],u[d]);if(p!==0)return p}return H(l.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=H(rt(o.latitude),rt(a.latitude));return l!==0?l:H(rt(o.longitude),rt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,a){const l=o.values||[],u=a.values||[];for(let d=0;d<l.length&&d<u.length;++d){const p=Ue(l[d],u[d]);if(p)return p}return H(l.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,a){if(o===hr.mapValue&&a===hr.mapValue)return 0;if(o===hr.mapValue)return 1;if(a===hr.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const T=H(u[m],p[m]);if(T!==0)return T;const C=Ue(l[u[m]],d[p[m]]);if(C!==0)return C}return H(u.length,p.length)}(n.mapValue,t.mapValue);default:throw U()}}function ba(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return H(n,t);const e=se(n),r=se(t),i=H(e.seconds,r.seconds);return i!==0?i:H(e.nanos,r.nanos)}function je(n){return Hi(n)}function Hi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=se(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ee(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return L.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Hi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Hi(e.fields[a])}`;return i+"}"}(n.mapValue):U()}function Va(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Qi(n){return!!n&&"integerValue"in n}function ws(n){return!!n&&"arrayValue"in n}function Da(n){return!!n&&"nullValue"in n}function xa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yr(n){return!!n&&"mapValue"in n}function En(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ge(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=En(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=En(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Np(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class St{constructor(t){this.value=t}static empty(){return new St({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!yr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=En(e)}setAll(t){let e=ht.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=En(a):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());yr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];yr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Ge(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new St(En(this.value))}}function il(n){const t=[];return Ge(n.fields,(e,r)=>{const i=new ht([e]);if(yr(r)){const o=il(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Vt(t)}/**
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
 */class vt{constructor(t,e,r,i,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new vt(t,0,B.min(),B.min(),B.min(),St.empty(),0)}static newFoundDocument(t,e,r,i){return new vt(t,1,e,B.min(),r,i,0)}static newNoDocument(t,e){return new vt(t,2,e,B.min(),B.min(),St.empty(),0)}static newUnknownDocument(t,e){return new vt(t,3,e,B.min(),B.min(),St.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sr{constructor(t,e){this.position=t,this.inclusive=e}}function Na(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),e.key):r=Ue(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ka(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Lt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class xn{constructor(t,e="asc"){this.field=t,this.dir=e}}function kp(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class sl{}class it extends sl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Mp(t,e,r):e==="array-contains"?new Up(t,r):e==="in"?new jp(t,r):e==="not-in"?new Bp(t,r):e==="array-contains-any"?new qp(t,r):new it(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Lp(t,r):new Fp(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ue(e,this.value)):e!==null&&we(this.value)===we(e)&&this.matchesComparison(Ue(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends sl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Dt(t,e)}matches(t){return ol(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ol(n){return n.op==="and"}function al(n){return Op(n)&&ol(n)}function Op(n){for(const t of n.filters)if(t instanceof Dt)return!1;return!0}function Yi(n){if(n instanceof it)return n.field.canonicalString()+n.op.toString()+je(n.value);if(al(n))return n.filters.map(t=>Yi(t)).join(",");{const t=n.filters.map(e=>Yi(e)).join(",");return`${n.op}(${t})`}}function cl(n,t){return n instanceof it?function(r,i){return i instanceof it&&r.op===i.op&&r.field.isEqual(i.field)&&Lt(r.value,i.value)}(n,t):n instanceof Dt?function(r,i){return i instanceof Dt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&cl(a,i.filters[l]),!0):!1}(n,t):void U()}function ll(n){return n instanceof it?function(e){return`${e.field.canonicalString()} ${e.op} ${je(e.value)}`}(n):n instanceof Dt?function(e){return e.op.toString()+" {"+e.getFilters().map(ll).join(" ,")+"}"}(n):"Filter"}class Mp extends it{constructor(t,e,r){super(t,e,r),this.key=L.fromName(r.referenceValue)}matches(t){const e=L.comparator(t.key,this.key);return this.matchesComparison(e)}}class Lp extends it{constructor(t,e){super(t,"in",e),this.keys=ul("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Fp extends it{constructor(t,e){super(t,"not-in",e),this.keys=ul("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ul(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>L.fromName(r.referenceValue))}class Up extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ws(e)&&Dn(e.arrayValue,this.value)}}class jp extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Dn(this.value.arrayValue,e)}}class Bp extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(Dn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Dn(this.value.arrayValue,e)}}class qp extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ws(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Dn(this.value.arrayValue,r))}}/**
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
 */class $p{constructor(t,e=null,r=[],i=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function Oa(n,t=null,e=[],r=[],i=null,o=null,a=null){return new $p(n,t,e,r,i,o,a)}function Is(n){const t=q(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Yi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),jr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>je(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>je(r)).join(",")),t.ue=e}return t.ue}function Ts(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!kp(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!cl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ka(n.startAt,t.startAt)&&ka(n.endAt,t.endAt)}function Xi(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ke{constructor(t,e=null,r=[],i=[],o=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function zp(n,t,e,r,i,o,a,l){return new Ke(n,t,e,r,i,o,a,l)}function As(n){return new Ke(n)}function Ma(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hl(n){return n.collectionGroup!==null}function wn(n){const t=q(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new dt(ht.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new xn(o,r))}),e.has(ht.keyField().canonicalString())||t.ce.push(new xn(ht.keyField(),r))}return t.ce}function Ot(n){const t=q(n);return t.le||(t.le=Wp(t,wn(n))),t.le}function Wp(n,t){if(n.limitType==="F")return Oa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new xn(i.field,o)});const e=n.endAt?new Sr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Sr(n.startAt.position,n.startAt.inclusive):null;return Oa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ji(n,t){const e=n.filters.concat([t]);return new Ke(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Pr(n,t,e){return new Ke(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Br(n,t){return Ts(Ot(n),Ot(t))&&n.limitType===t.limitType}function dl(n){return`${Is(Ot(n))}|lt:${n.limitType}`}function Ne(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>ll(i)).join(", ")}]`),jr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>je(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>je(i)).join(",")),`Target(${r})`}(Ot(n))}; limitType=${n.limitType})`}function qr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of wn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=Na(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,wn(r),i)||r.endAt&&!function(a,l,u){const d=Na(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,wn(r),i))}(n,t)}function Gp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fl(n){return(t,e)=>{let r=!1;for(const i of wn(n)){const o=Kp(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Kp(n,t,e){const r=n.field.isKeyField()?L.comparator(t.key,e.key):function(o,a,l){const u=a.data.field(o),d=l.data.field(o);return u!==null&&d!==null?Ue(u,d):U()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
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
 */class He{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ge(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return nl(this.inner)}size(){return this.innerSize}}/**
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
 */const Hp=new tt(L.comparator);function Wt(){return Hp}const pl=new tt(L.comparator);function _n(...n){let t=pl;for(const e of n)t=t.insert(e.key,e);return t}function ml(n){let t=pl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function fe(){return In()}function gl(){return In()}function In(){return new He(n=>n.toString(),(n,t)=>n.isEqual(t))}const Qp=new tt(L.comparator),Yp=new dt(L.comparator);function z(...n){let t=Yp;for(const e of n)t=t.add(e);return t}const Xp=new dt(H);function Jp(){return Xp}/**
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
 */function _l(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cr(t)?"-0":t}}function yl(n){return{integerValue:""+n}}function Zp(n,t){return Vp(t)?yl(t):_l(n,t)}/**
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
 */class $r{constructor(){this._=void 0}}function tm(n,t,e){return n instanceof br?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&vs(o)&&(o=Es(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Nn?El(n,t):n instanceof kn?wl(n,t):function(i,o){const a=vl(i,o),l=La(a)+La(i.Pe);return Qi(a)&&Qi(i.Pe)?yl(l):_l(i.serializer,l)}(n,t)}function em(n,t,e){return n instanceof Nn?El(n,t):n instanceof kn?wl(n,t):e}function vl(n,t){return n instanceof Vr?function(r){return Qi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class br extends $r{}class Nn extends $r{constructor(t){super(),this.elements=t}}function El(n,t){const e=Il(t);for(const r of n.elements)e.some(i=>Lt(i,r))||e.push(r);return{arrayValue:{values:e}}}class kn extends $r{constructor(t){super(),this.elements=t}}function wl(n,t){let e=Il(t);for(const r of n.elements)e=e.filter(i=>!Lt(i,r));return{arrayValue:{values:e}}}class Vr extends $r{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function La(n){return rt(n.integerValue||n.doubleValue)}function Il(n){return ws(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function nm(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Nn&&i instanceof Nn||r instanceof kn&&i instanceof kn?Fe(r.elements,i.elements,Lt):r instanceof Vr&&i instanceof Vr?Lt(r.Pe,i.Pe):r instanceof br&&i instanceof br}(n.transform,t.transform)}class rm{constructor(t,e){this.version=t,this.transformResults=e}}class Bt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Bt}static exists(t){return new Bt(void 0,t)}static updateTime(t){return new Bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function vr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class zr{}function Tl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Rl(n.key,Bt.none()):new Bn(n.key,n.data,Bt.none());{const e=n.data,r=St.empty();let i=new dt(ht.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Se(n.key,r,new Vt(i.toArray()),Bt.none())}}function im(n,t,e){n instanceof Bn?function(i,o,a){const l=i.value.clone(),u=Ua(i.fieldTransforms,o,a.transformResults);l.setAll(u),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Se?function(i,o,a){if(!vr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Ua(i.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(Al(i)),u.setAll(l),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Tn(n,t,e,r){return n instanceof Bn?function(o,a,l,u){if(!vr(o.precondition,a))return l;const d=o.value.clone(),p=ja(o.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Se?function(o,a,l,u){if(!vr(o.precondition,a))return l;const d=ja(o.fieldTransforms,u,a),p=a.data;return p.setAll(Al(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(n,t,e,r):function(o,a,l){return vr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function sm(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=vl(r.transform,i||null);o!=null&&(e===null&&(e=St.empty()),e.set(r.field,o))}return e||null}function Fa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fe(r,i,(o,a)=>nm(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Bn extends zr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Se extends zr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Al(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ua(n,t,e){const r=new Map;Y(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,l=t.data.field(o.field);r.set(o.field,em(a,l,e[i]))}return r}function ja(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,tm(o,a,t))}return r}class Rl extends zr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class om extends zr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class am{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&im(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Tn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Tn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=gl();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(i.key)?null:l;const u=Tl(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),z())}isEqual(t){return this.batchId===t.batchId&&Fe(this.mutations,t.mutations,(e,r)=>Fa(e,r))&&Fe(this.baseMutations,t.baseMutations,(e,r)=>Fa(e,r))}}class Rs{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){Y(t.mutations.length===r.length);let i=function(){return Qp}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Rs(t,e,r,i)}}/**
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
 */class cm{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class lm{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var nt,W;function um(n){switch(n){default:return U();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Cl(n){if(n===void 0)return zt("GRPC error has no .code"),P.UNKNOWN;switch(n){case nt.OK:return P.OK;case nt.CANCELLED:return P.CANCELLED;case nt.UNKNOWN:return P.UNKNOWN;case nt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case nt.INTERNAL:return P.INTERNAL;case nt.UNAVAILABLE:return P.UNAVAILABLE;case nt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case nt.NOT_FOUND:return P.NOT_FOUND;case nt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case nt.ABORTED:return P.ABORTED;case nt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case nt.DATA_LOSS:return P.DATA_LOSS;default:return U()}}(W=nt||(nt={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hm(){return new TextEncoder}/**
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
 */const dm=new ge([4294967295,4294967295],0);function Ba(n){const t=hm().encode(n),e=new Kc;return e.update(t),new Uint8Array(e.digest())}function qa(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ge([e,r],0),new ge([i,o],0)]}class Cs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new yn(`Invalid padding: ${e}`);if(r<0)throw new yn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new yn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new yn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ge.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(ge.fromNumber(r)));return i.compare(dm)===1&&(i=new ge([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Ba(t),[r,i]=qa(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Cs(o,i,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=Ba(t),[r,i]=qa(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class yn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Wr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,qn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Wr(B.min(),i,new tt(H),Wt(),z())}}class qn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new qn(r,e,z(),z(),z())}}/**
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
 */class Er{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class Sl{constructor(t,e){this.targetId=t,this.me=e}}class Pl{constructor(t,e,r=Et.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class $a{constructor(){this.fe=0,this.ge=Wa(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=z(),e=z(),r=z();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:U()}}),new qn(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=Wa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class fm{constructor(t){this.Le=t,this.Be=new Map,this.ke=Wt(),this.qe=za(),this.Qe=new tt(H)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:U()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Xi(o))if(r===0){const a=new L(o.path);this.Ue(e,a,vt.newNoDocument(a,B.min()))}else Y(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),u=l?this.Xe(l,t,a):1;if(u!==0){this.je(e);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,l;try{a=Ee(r).toUint8Array()}catch(u){if(u instanceof rl)return Le("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Cs(a,i,o)}catch(u){return Le(u instanceof yn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&Xi(l.target)){const u=new L(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,vt.newNoDocument(u,t))}o.be&&(e.set(a,o.Ce()),o.ve())}});let r=z();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new Wr(t,e,this.Qe,this.ke,r);return this.ke=Wt(),this.qe=za(),this.Qe=new tt(H),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new $a,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new dt(H),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new $a),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function za(){return new tt(L.comparator)}function Wa(){return new tt(L.comparator)}const pm={asc:"ASCENDING",desc:"DESCENDING"},mm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gm={and:"AND",or:"OR"};class _m{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Zi(n,t){return n.useProto3Json||jr(t)?t:{value:t}}function Dr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ym(n,t){return Dr(n,t.toTimestamp())}function Mt(n){return Y(!!n),B.fromTimestamp(function(e){const r=se(e);return new ot(r.seconds,r.nanos)}(n))}function Ss(n,t){return ts(n,t).canonicalString()}function ts(n,t){const e=function(i){return new J(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Vl(n){const t=J.fromString(n);return Y(Ol(t)),t}function es(n,t){return Ss(n.databaseId,t.path)}function Di(n,t){const e=Vl(t);if(e.get(1)!==n.databaseId.projectId)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new L(xl(e))}function Dl(n,t){return Ss(n.databaseId,t)}function vm(n){const t=Vl(n);return t.length===4?J.emptyPath():xl(t)}function ns(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xl(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ga(n,t,e){return{name:es(n,t),fields:e.value.mapValue.fields}}function Em(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(Y(p===void 0||typeof p=="string"),Et.fromBase64String(p||"")):(Y(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Et.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(d){const p=d.code===void 0?P.UNKNOWN:Cl(d.code);return new O(p,d.message||"")}(a);e=new Pl(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Di(n,r.document.name),o=Mt(r.document.updateTime),a=r.document.createTime?Mt(r.document.createTime):B.min(),l=new St({mapValue:{fields:r.document.fields}}),u=vt.newFoundDocument(i,o,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];e=new Er(d,p,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Di(n,r.document),o=r.readTime?Mt(r.readTime):B.min(),a=vt.newNoDocument(i,o),l=r.removedTargetIds||[];e=new Er([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Di(n,r.document),o=r.removedTargetIds||[];e=new Er([],o,i,null)}else{if(!("filter"in t))return U();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new lm(i,o),l=r.targetId;e=new Sl(l,a)}}return e}function wm(n,t){let e;if(t instanceof Bn)e={update:Ga(n,t.key,t.value)};else if(t instanceof Rl)e={delete:es(n,t.key)};else if(t instanceof Se)e={update:Ga(n,t.key,t.data),updateMask:Vm(t.fieldMask)};else{if(!(t instanceof om))return U();e={verify:es(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof br)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Nn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof kn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Vr)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw U()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:ym(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U()}(n,t.precondition)),e}function Im(n,t){return n&&n.length>0?(Y(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?Mt(i.updateTime):Mt(o);return a.isEqual(B.min())&&(a=Mt(o)),new rm(a,i.transformResults||[])}(e,t))):[]}function Tm(n,t){return{documents:[Dl(n,t.path)]}}function Am(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Dl(n,i);const o=function(d){if(d.length!==0)return kl(Dt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(T){return{field:ke(T.field),direction:Sm(T.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Zi(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:i}}function Rm(n){let t=vm(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){Y(r===1);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(m){const T=Nl(m);return T instanceof Dt&&al(T)?T.getFilters():[T]}(e.where));let a=[];e.orderBy&&(a=function(m){return m.map(T=>function(b){return new xn(Oe(b.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(T))}(e.orderBy));let l=null;e.limit&&(l=function(m){let T;return T=typeof m=="object"?m.value:m,jr(T)?null:T}(e.limit));let u=null;e.startAt&&(u=function(m){const T=!!m.before,C=m.values||[];return new Sr(C,T)}(e.startAt));let d=null;return e.endAt&&(d=function(m){const T=!m.before,C=m.values||[];return new Sr(C,T)}(e.endAt)),zp(t,i,a,o,l,"F",u,d)}function Cm(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Nl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Oe(e.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Oe(e.unaryFilter.field);return it.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Oe(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Oe(e.unaryFilter.field);return it.create(a,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(e){return it.create(Oe(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Dt.create(e.compositeFilter.filters.map(r=>Nl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(n):U()}function Sm(n){return pm[n]}function Pm(n){return mm[n]}function bm(n){return gm[n]}function ke(n){return{fieldPath:n.canonicalString()}}function Oe(n){return ht.fromServerFormat(n.fieldPath)}function kl(n){return n instanceof it?function(e){if(e.op==="=="){if(xa(e.value))return{unaryFilter:{field:ke(e.field),op:"IS_NAN"}};if(Da(e.value))return{unaryFilter:{field:ke(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xa(e.value))return{unaryFilter:{field:ke(e.field),op:"IS_NOT_NAN"}};if(Da(e.value))return{unaryFilter:{field:ke(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ke(e.field),op:Pm(e.op),value:e.value}}}(n):n instanceof Dt?function(e){const r=e.getFilters().map(i=>kl(i));return r.length===1?r[0]:{compositeFilter:{op:bm(e.op),filters:r}}}(n):U()}function Vm(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ol(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Jt{constructor(t,e,r,i,o=B.min(),a=B.min(),l=Et.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new Jt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Dm{constructor(t){this.ct=t}}function xm(n){const t=Rm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Pr(t,t.limit,"L"):t}/**
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
 */class Nm{constructor(){this._n=new km}addToCollectionParentIndex(t,e){return this._n.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(ie.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(ie.min())}updateCollectionGroup(t,e,r){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class km{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new dt(J.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new dt(J.comparator)).toArray()}}/**
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
 */class Be{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Be(0)}static Ln(){return new Be(-1)}}/**
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
 */class Om{constructor(){this.changes=new He(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?V.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Mm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Lm{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Tn(r.mutation,i,Vt.empty(),ot.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,z()).next(()=>r))}getLocalViewOfDocuments(t,e,r=z()){const i=fe();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=_n();return o.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=fe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,z()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,i){let o=Wt();const a=In(),l=function(){return In()}();return e.forEach((u,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Se)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Tn(p.mutation,d,p.mutation.getFieldMask(),ot.now())):a.set(d.key,Vt.empty())}),this.recalculateAndSaveOverlays(t,o).next(u=>(u.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var m;return l.set(d,new Mm(p,(m=a.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(t,e){const r=In();let i=new tt((a,l)=>a-l),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=e.get(u);if(d===null)return;let p=r.get(u)||Vt.empty();p=l.applyToLocalView(d,p),r.set(u,p);const m=(i.get(l.batchId)||z()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,m=gl();p.forEach(T=>{if(!o.has(T)){const C=Tl(e.get(T),r.get(T));C!==null&&m.set(T,C),o=o.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,m))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):hl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):V.resolve(fe());let l=-1,u=o;return a.next(d=>V.forEach(d,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),o.get(p)?V.resolve():this.remoteDocumentCache.getEntry(t,p).next(T=>{u=u.insert(p,T)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,u,d,z())).next(p=>({batchId:l,changes:ml(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new L(e)).next(r=>{let i=_n();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=_n();return this.indexManager.getCollectionParents(t,o).next(l=>V.forEach(l,u=>{const d=function(m,T){return new Ke(T,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(e,u.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(p=>{p.forEach((m,T)=>{a=a.insert(m,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,vt.newInvalidDocument(p)))});let l=_n();return a.forEach((u,d)=>{const p=o.get(u);p!==void 0&&Tn(p.mutation,d,Vt.empty(),ot.now()),qr(e,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class Fm{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return V.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Mt(i.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:xm(i.bundledQuery),readTime:Mt(i.readTime)}}(e)),V.resolve()}}/**
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
 */class Um{constructor(){this.overlays=new tt(L.comparator),this.hr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const r=fe();return V.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),V.resolve()}getOverlaysForCollection(t,e,r){const i=fe(),o=e.length+1,a=new L(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new tt((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=fe(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=fe(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=i)););return V.resolve(l)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new cm(e,r));let o=this.hr.get(e);o===void 0&&(o=z(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
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
 */class Ps{constructor(){this.Pr=new dt(at.Ir),this.Tr=new dt(at.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new at(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new at(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new L(new J([])),r=new at(e,t),i=new at(e,t+1),o=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new L(new J([])),r=new at(e,t),i=new at(e,t+1);let o=z();return this.Tr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return L.comparator(t.key,e.key)||H(t.pr,e.pr)}static Er(t,e){return H(t.pr,e.pr)||L.comparator(t.key,e.key)}}/**
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
 */class jm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new dt(at.Ir)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new am(o,e,r,i);this.mutationQueue.push(a);for(const l of i)this.wr=this.wr.add(new at(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,e){return V.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),i=new at(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],a=>{const l=this.Sr(a.pr);o.push(l)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new dt(H);return e.forEach(i=>{const o=new at(i,0),a=new at(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],l=>{r=r.add(l.pr)})}),V.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const a=new at(new L(o),0);let l=new dt(H);return this.wr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.pr)),!0)},a),V.resolve(this.Dr(l))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){Y(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return V.forEach(e.mutations,i=>{const o=new at(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new at(e,0),i=this.wr.firstAfterOrEqual(r);return V.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Bm{constructor(t){this.vr=t,this.docs=function(){return new tt(L.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return V.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(e))}getEntries(t,e){let r=Wt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():vt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Wt();const a=e.path,l=new L(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Cp(Rp(p),r)<=0||(i.has(p.key)||qr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,r,i){U()}Fr(t,e){return V.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new qm(this)}getSize(t){return V.resolve(this.size)}}class qm extends Om{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),V.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class $m{constructor(t){this.persistence=t,this.Mr=new He(e=>Is(e),Ts),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ps,this.targetCount=0,this.Lr=Be.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),V.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Be(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.qn(e),V.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),V.waitFor(o).next(()=>i)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return V.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),V.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return V.resolve(r)}containsKey(t,e){return V.resolve(this.Nr.containsKey(e))}}/**
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
 */class zm{constructor(t,e){this.Br={},this.overlays={},this.kr=new ys(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new $m(this),this.indexManager=new Nm,this.remoteDocumentCache=function(i){return new Bm(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Dm(e),this.$r=new Fm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Um,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new jm(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){M("MemoryPersistence","Starting transaction:",t);const i=new Wm(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(t,e){return V.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class Wm extends Pp{constructor(t){super(),this.currentSequenceNumber=t}}class bs{constructor(t){this.persistence=t,this.zr=new Ps,this.jr=null}static Hr(t){return new bs(t)}get Jr(){if(this.jr)return this.jr;throw U()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),V.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),V.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Jr,r=>{const i=L.fromPath(r);return this.Yr(t,i).next(o=>{o||e.removeEntry(i,B.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return V.or([()=>V.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class Vs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=z(),i=z();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Vs(t,e.fromCache,r,i)}}/**
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
 */class Gm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Km{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Zd()?8:bp(Yd())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ji(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Gm;return this.Ji(t,e,a).next(l=>{if(o.result=l,this.Ui)return this.Yi(t,e,a,l.size)})}).next(()=>o.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(mn()<=G.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Ne(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),V.resolve()):(mn()<=G.DEBUG&&M("QueryEngine","Query:",Ne(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(mn()<=G.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Ne(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ot(e))):V.resolve())}ji(t,e){if(Ma(e))return V.resolve(null);let r=Ot(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Pr(e,null,"F"),r=Ot(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=z(...o);return this.zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const d=this.Zi(e,l);return this.Xi(e,d,a,u.readTime)?this.ji(t,Pr(e,null,"F")):this.es(t,d,e,u)}))})))}Hi(t,e,r,i){return Ma(e)||i.isEqual(B.min())?V.resolve(null):this.zi.getDocuments(t,r).next(o=>{const a=this.Zi(e,o);return this.Xi(e,a,r,i)?V.resolve(null):(mn()<=G.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ne(e)),this.es(t,a,e,Ap(i,-1)).next(l=>l))})}Zi(t,e){let r=new dt(fl(t));return e.forEach((i,o)=>{qr(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(t,e,r){return mn()<=G.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Ne(e)),this.zi.getDocumentsMatchingQuery(t,e,ie.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class Hm{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new tt(H),this.rs=new He(o=>Is(o),Ts),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Lm(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Qm(n,t,e,r){return new Hm(n,t,e,r)}async function Ml(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let u=z();for(const d of i){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return e.localDocuments.getDocuments(r,u).next(d=>({us:d,removedBatchIds:a,addedBatchIds:l}))})})}function Ym(n,t){const e=q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const m=d.batch,T=m.keys();let C=V.resolve();return T.forEach(b=>{C=C.next(()=>p.getEntry(u,b)).next(D=>{const S=d.docVersions.get(b);Y(S!==null),D.version.compareTo(S)<0&&(m.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=z();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Ll(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Xm(n,t){const e=q(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const l=[];t.targetChanges.forEach((p,m)=>{const T=i.get(m);if(!T)return;l.push(e.Qr.removeMatchingKeys(o,p.removedDocuments,m).next(()=>e.Qr.addMatchingKeys(o,p.addedDocuments,m)));let C=T.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(m)!==null?C=C.withResumeToken(Et.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,r)),i=i.insert(m,C),function(D,S,F){return D.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(T,C,p)&&l.push(e.Qr.updateTargetData(o,C))});let u=Wt(),d=z();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(Jm(o,a,t.documentUpdates).next(p=>{u=p.cs,d=p.ls})),!r.isEqual(B.min())){const p=e.Qr.getLastRemoteSnapshotVersion(o).next(m=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return V.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,u,d)).next(()=>u)}).then(o=>(e.ns=i,o))}function Jm(n,t,e){let r=z(),i=z();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Wt();return e.forEach((l,u)=>{const d=o.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(B.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):M("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{cs:a,ls:i}})}function Zm(n,t){const e=q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function tg(n,t){const e=q(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(o=>o?(i=o,V.resolve(i)):e.Qr.allocateTargetId(r).next(a=>(i=new Jt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function rs(n,t,e){const r=q(n),i=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!jn(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Ka(n,t,e){const r=q(n);let i=B.min(),o=z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const m=q(u),T=m.rs.get(p);return T!==void 0?V.resolve(m.ns.get(T)):m.Qr.getTargetData(d,p)}(r,a,Ot(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(u=>{o=u})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,e?i:B.min(),e?o:z())).next(l=>(eg(r,Gp(t),l),{documents:l,hs:o})))}function eg(n,t,e){let r=n.ss.get(t)||B.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class Ha{constructor(){this.activeTargetIds=Jp()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ng{constructor(){this.no=new Ha,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Ha,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class rg{io(t){}shutdown(){}}/**
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
 */class Qa{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let dr=null;function xi(){return dr===null?dr=function(){return 268435456+Math.round(2147483648*Math.random())}():dr++,"0x"+dr.toString(16)}/**
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
 */const ig={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sg{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const _t="WebChannelConnection";class og extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(e,r,i,o,a){const l=xi(),u=this.vo(e,r.toUriEncodedString());M("RestConnection",`Sending RPC '${e}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,o,a),this.Mo(e,u,d,i).then(p=>(M("RestConnection",`Received RPC '${e}' ${l}: `,p),p),p=>{throw Le("RestConnection",`RPC '${e}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}xo(e,r,i,o,a,l){return this.Co(e,r,i,o,a)}Fo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+We}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}vo(e,r){const i=ig[e];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,i){const o=xi();return new Promise((a,l)=>{const u=new Hc;u.setWithCredentials(!0),u.listenOnce(Yc.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case _r.NO_ERROR:const p=u.getResponseJson();M(_t,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case _r.TIMEOUT:M(_t,`RPC '${t}' ${o} timed out`),l(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case _r.HTTP_ERROR:const m=u.getStatus();if(M(_t,`RPC '${t}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let T=u.getResponseJson();Array.isArray(T)&&(T=T[0]);const C=T==null?void 0:T.error;if(C&&C.status&&C.message){const b=function(S){const F=S.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(F)>=0?F:P.UNKNOWN}(C.status);l(new O(b,C.message))}else l(new O(P.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new O(P.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{M(_t,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);M(_t,`RPC '${t}' ${o} sending request:`,i),u.send(e,"POST",d,r,15)})}Oo(t,e,r){const i=xi(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Zc(),l=Jc(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new Qc({})),this.Fo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const p=o.join("");M(_t,`Creating RPC '${t}' stream ${i}: ${p}`,u);const m=a.createWebChannel(p,u);let T=!1,C=!1;const b=new sg({lo:S=>{C?M(_t,`Not sending because RPC '${t}' stream ${i} is closed:`,S):(T||(M(_t,`Opening RPC '${t}' stream ${i} transport.`),m.open(),T=!0),M(_t,`RPC '${t}' stream ${i} sending:`,S),m.send(S))},ho:()=>m.close()}),D=(S,F,j)=>{S.listen(F,$=>{try{j($)}catch(Z){setTimeout(()=>{throw Z},0)}})};return D(m,gn.EventType.OPEN,()=>{C||(M(_t,`RPC '${t}' stream ${i} transport opened.`),b.mo())}),D(m,gn.EventType.CLOSE,()=>{C||(C=!0,M(_t,`RPC '${t}' stream ${i} transport closed`),b.po())}),D(m,gn.EventType.ERROR,S=>{C||(C=!0,Le(_t,`RPC '${t}' stream ${i} transport errored:`,S),b.po(new O(P.UNAVAILABLE,"The operation could not be completed")))}),D(m,gn.EventType.MESSAGE,S=>{var F;if(!C){const j=S.data[0];Y(!!j);const $=j,Z=$.error||((F=$[0])===null||F===void 0?void 0:F.error);if(Z){M(_t,`RPC '${t}' stream ${i} received error:`,Z);const Tt=Z.status;let ct=function(y){const v=nt[y];if(v!==void 0)return Cl(v)}(Tt),w=Z.message;ct===void 0&&(ct=P.INTERNAL,w="Unknown error status: "+Tt+" with message "+Z.message),C=!0,b.po(new O(ct,w)),m.close()}else M(_t,`RPC '${t}' stream ${i} received:`,j),b.yo(j)}}),D(l,Xc.STAT_EVENT,S=>{S.stat===Ki.PROXY?M(_t,`RPC '${t}' stream ${i} detected buffering proxy`):S.stat===Ki.NOPROXY&&M(_t,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.fo()},0),b}}function Ni(){return typeof document<"u"?document:null}/**
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
 */function Gr(n){return new _m(n,!0)}/**
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
 */class Fl{constructor(t,e,r=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,e-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Ul{constructor(t,e,r,i,o,a,l,u){this.oi=t,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Fl(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(zt(e.toString()),zt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===e&&this.u_(r,i)},r=>{t(()=>{const i=new O(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return M("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ag extends Ul{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=Em(this.serializer,t),r=function(o){if(!("targetChange"in o))return B.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Mt(a.readTime):B.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=ns(this.serializer),e.addTarget=function(o,a){let l;const u=a.target;if(l=Xi(u)?{documents:Tm(o,u)}:{query:Am(o,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=bl(o,a.resumeToken);const d=Zi(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){l.readTime=Dr(o,a.snapshotVersion.toTimestamp());const d=Zi(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const r=Cm(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=ns(this.serializer),e.removeTarget=t,this.i_(e)}}class cg extends Ul{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(Y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Im(t.writeResults,t.commitTime),r=Mt(t.commitTime);return this.listener.A_(r,e)}return Y(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=ns(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>wm(this.serializer,r))};this.i_(e)}}/**
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
 */class lg extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(t,ts(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(P.UNKNOWN,o.toString())})}xo(t,e,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(t,ts(e,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(P.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class ug{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(zt(e),this.y_=!1):M("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class hg{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{Pe(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=q(u);d.M_.add(4),await $n(d),d.N_.set("Unknown"),d.M_.delete(4),await Kr(d)}(this))})}),this.N_=new ug(r,i)}}async function Kr(n){if(Pe(n))for(const t of n.x_)await t(!0)}async function $n(n){for(const t of n.x_)await t(!1)}function jl(n,t){const e=q(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),ks(e)?Ns(e):Qe(e).Xo()&&xs(e,t))}function Ds(n,t){const e=q(n),r=Qe(e);e.F_.delete(t),r.Xo()&&Bl(e,t),e.F_.size===0&&(r.Xo()?r.n_():Pe(e)&&e.N_.set("Unknown"))}function xs(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(B.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Qe(n).P_(t)}function Bl(n,t){n.L_.xe(t),Qe(n).I_(t)}function Ns(n){n.L_=new fm({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Qe(n).start(),n.N_.w_()}function ks(n){return Pe(n)&&!Qe(n).Zo()&&n.F_.size>0}function Pe(n){return q(n).M_.size===0}function ql(n){n.L_=void 0}async function dg(n){n.N_.set("Online")}async function fg(n){n.F_.forEach((t,e)=>{xs(n,t)})}async function pg(n,t){ql(n),ks(n)?(n.N_.D_(t),Ns(n)):n.N_.set("Unknown")}async function mg(n,t,e){if(n.N_.set("Online"),t instanceof Pl&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.F_.delete(l),i.L_.removeTarget(l))}(n,t)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await xr(n,r)}else if(t instanceof Er?n.L_.Ke(t):t instanceof Sl?n.L_.He(t):n.L_.We(t),!e.isEqual(B.min()))try{const r=await Ll(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.L_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=o.F_.get(d);p&&o.F_.set(d,p.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const p=o.F_.get(u);if(!p)return;o.F_.set(u,p.withResumeToken(Et.EMPTY_BYTE_STRING,p.snapshotVersion)),Bl(o,u);const m=new Jt(p.target,u,d,p.sequenceNumber);xs(o,m)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await xr(n,r)}}async function xr(n,t,e){if(!jn(t))throw t;n.M_.add(1),await $n(n),n.N_.set("Offline"),e||(e=()=>Ll(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Kr(n)})}function $l(n,t){return t().catch(e=>xr(n,e,t))}async function Hr(n){const t=q(n),e=oe(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;gg(t);)try{const i=await Zm(t.localStore,r);if(i===null){t.v_.length===0&&e.n_();break}r=i.batchId,_g(t,i)}catch(i){await xr(t,i)}zl(t)&&Wl(t)}function gg(n){return Pe(n)&&n.v_.length<10}function _g(n,t){n.v_.push(t);const e=oe(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function zl(n){return Pe(n)&&!oe(n).Zo()&&n.v_.length>0}function Wl(n){oe(n).start()}async function yg(n){oe(n).V_()}async function vg(n){const t=oe(n);for(const e of n.v_)t.d_(e.mutations)}async function Eg(n,t,e){const r=n.v_.shift(),i=Rs.from(r,t,e);await $l(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Hr(n)}async function wg(n,t){t&&oe(n).E_&&await async function(r,i){if(function(a){return um(a)&&a!==P.ABORTED}(i.code)){const o=r.v_.shift();oe(r).t_(),await $l(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Hr(r)}}(n,t),zl(n)&&Wl(n)}async function Ya(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Pe(e);e.M_.add(3),await $n(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Kr(e)}async function Ig(n,t){const e=q(n);t?(e.M_.delete(2),await Kr(e)):t||(e.M_.add(2),await $n(e),e.N_.set("Unknown"))}function Qe(n){return n.B_||(n.B_=function(e,r,i){const o=q(e);return o.f_(),new ag(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:dg.bind(null,n),To:fg.bind(null,n),Ao:pg.bind(null,n),h_:mg.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),ks(n)?Ns(n):n.N_.set("Unknown")):(await n.B_.stop(),ql(n))})),n.B_}function oe(n){return n.k_||(n.k_=function(e,r,i){const o=q(e);return o.f_(),new cg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:yg.bind(null,n),Ao:wg.bind(null,n),R_:vg.bind(null,n),A_:Eg.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Hr(n)):(await n.k_.stop(),n.v_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class Os{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,l=new Os(t,e,a,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ms(n,t){if(zt("AsyncQueue",`${t}: ${n}`),jn(n))return new O(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Me{constructor(t){this.comparator=t?(e,r)=>t(e,r)||L.comparator(e.key,r.key):(e,r)=>L.comparator(e.key,r.key),this.keyedMap=_n(),this.sortedSet=new tt(this.comparator)}static emptySet(t){return new Me(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Me)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Me;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Xa{constructor(){this.q_=new tt(L.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):U():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class qe{constructor(t,e,r,i,o,a,l,u,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new qe(t,e,Me.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Br(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Tg{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Ag{constructor(){this.queries=new He(t=>dl(t),Br),this.onlineState="Unknown",this.z_=new Set}}async function Gl(n,t){const e=q(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.W_()&&t.G_()&&(r=2):(o=new Tg,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(i,!0);break;case 1:o.K_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=Ms(a,`Initialization of query '${Ne(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&Ls(e)}async function Kl(n,t){const e=q(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.U_.indexOf(t);a>=0&&(o.U_.splice(a,1),o.U_.length===0?i=t.G_()?0:1:!o.W_()&&t.G_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Rg(n,t){const e=q(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const l of a.U_)l.H_(i)&&(r=!0);a.K_=i}}r&&Ls(e)}function Cg(n,t,e){const r=q(n),i=r.queries.get(t);if(i)for(const o of i.U_)o.onError(e);r.queries.delete(t)}function Ls(n){n.z_.forEach(t=>{t.next()})}var is,Ja;(Ja=is||(is={})).J_="default",Ja.Cache="cache";class Hl{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new qe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=qe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==is.Cache}}/**
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
 */class Ql{constructor(t){this.key=t}}class Yl{constructor(t){this.key=t}}class Sg{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=z(),this.mutatedKeys=z(),this.Ia=fl(t),this.Ta=new Me(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new Xa,i=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,m)=>{const T=i.get(p),C=qr(this.query,m)?m:null,b=!!T&&this.mutatedKeys.has(T.key),D=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let S=!1;T&&C?T.data.isEqual(C.data)?b!==D&&(r.track({type:3,doc:C}),S=!0):this.Ra(T,C)||(r.track({type:2,doc:C}),S=!0,(u&&this.Ia(C,u)>0||d&&this.Ia(C,d)<0)&&(l=!0)):!T&&C?(r.track({type:0,doc:C}),S=!0):T&&!C&&(r.track({type:1,doc:T}),S=!0,(u||d)&&(l=!0)),S&&(C?(a=a.add(C),o=D?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((p,m)=>function(C,b){const D=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return D(C)-D(b)}(p.type,m.type)||this.Ia(p.doc,m.doc)),this.Va(r),i=i!=null&&i;const l=e&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,d=u!==this.ha;return this.ha=u,a.length!==0||d?{snapshot:new qe(this.query,t.Ta,o,a,t.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Xa,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=z(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new Yl(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new Ql(r))}),e}pa(t){this.la=t.hs,this.Pa=z();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return qe.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Pg{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class bg{constructor(t){this.key=t,this.wa=!1}}class Vg{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new He(l=>dl(l),Br),this.Da=new Map,this.Ca=new Set,this.va=new tt(L.comparator),this.Fa=new Map,this.Ma=new Ps,this.xa={},this.Oa=new Map,this.Na=Be.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Dg(n,t,e=!0){const r=nu(n);let i;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await Xl(r,t,e,!0),i}async function xg(n,t){const e=nu(n);await Xl(e,t,!0,!1)}async function Xl(n,t,e,r){const i=await tg(n.localStore,Ot(t)),o=i.targetId,a=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await Ng(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&jl(n.remoteStore,i),l}async function Ng(n,t,e,r,i){n.Ba=(m,T,C)=>async function(D,S,F,j){let $=S.view.da(F);$.Xi&&($=await Ka(D.localStore,S.query,!1).then(({documents:w})=>S.view.da(w,$)));const Z=j&&j.targetChanges.get(S.targetId),Tt=j&&j.targetMismatches.get(S.targetId)!=null,ct=S.view.applyChanges($,D.isPrimaryClient,Z,Tt);return tc(D,S.targetId,ct.fa),ct.snapshot}(n,m,T,C);const o=await Ka(n.localStore,t,!0),a=new Sg(t,o.hs),l=a.da(o.documents),u=qn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,u);tc(n,e,d.fa);const p=new Pg(t,e,a);return n.ba.set(t,p),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),d.snapshot}async function kg(n,t,e){const r=q(n),i=r.ba.get(t),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(a=>!Br(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await rs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Ds(r.remoteStore,i.targetId),ss(r,i.targetId)}).catch(Un)):(ss(r,i.targetId),await rs(r.localStore,i.targetId,!0))}async function Og(n,t){const e=q(n),r=e.ba.get(t),i=e.Da.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ds(e.remoteStore,r.targetId))}async function Mg(n,t,e){const r=$g(n);try{const i=await function(a,l){const u=q(a),d=ot.now(),p=l.reduce((C,b)=>C.add(b.key),z());let m,T;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let b=Wt(),D=z();return u.os.getEntries(C,p).next(S=>{b=S,b.forEach((F,j)=>{j.isValidDocument()||(D=D.add(F))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,b)).next(S=>{m=S;const F=[];for(const j of l){const $=sm(j,m.get(j.key).overlayedDocument);$!=null&&F.push(new Se(j.key,$,il($.value.mapValue),Bt.exists(!0)))}return u.mutationQueue.addMutationBatch(C,d,F,l)}).next(S=>{T=S;const F=S.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(C,S.batchId,F)})}).then(()=>({batchId:T.batchId,changes:ml(m)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let d=a.xa[a.currentUser.toKey()];d||(d=new tt(H)),d=d.insert(l,u),a.xa[a.currentUser.toKey()]=d}(r,i.batchId,e),await zn(r,i.changes),await Hr(r.remoteStore)}catch(i){const o=Ms(i,"Failed to persist write");e.reject(o)}}async function Jl(n,t){const e=q(n);try{const r=await Xm(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Fa.get(o);a&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?Y(a.wa):i.removedDocuments.size>0&&(Y(a.wa),a.wa=!1))}),await zn(e,r,t)}catch(r){await Un(r)}}function Za(n,t,e){const r=q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ba.forEach((o,a)=>{const l=a.view.j_(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=q(a);u.onlineState=l;let d=!1;u.queries.forEach((p,m)=>{for(const T of m.U_)T.j_(l)&&(d=!0)}),d&&Ls(u)}(r.eventManager,t),i.length&&r.Sa.h_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Lg(n,t,e){const r=q(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Fa.get(t),o=i&&i.key;if(o){let a=new tt(L.comparator);a=a.insert(o,vt.newNoDocument(o,B.min()));const l=z().add(o),u=new Wr(B.min(),new Map,new tt(H),a,l);await Jl(r,u),r.va=r.va.remove(o),r.Fa.delete(t),Fs(r)}else await rs(r.localStore,t,!1).then(()=>ss(r,t,e)).catch(Un)}async function Fg(n,t){const e=q(n),r=t.batch.batchId;try{const i=await Ym(e.localStore,t);tu(e,r,null),Zl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await zn(e,i)}catch(i){await Un(i)}}async function Ug(n,t,e){const r=q(n);try{const i=await function(a,l){const u=q(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(Y(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,t);tu(r,t,e),Zl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await zn(r,i)}catch(i){await Un(i)}}function Zl(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function tu(n,t,e){const r=q(n);let i=r.xa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.xa[r.currentUser.toKey()]=i}}function ss(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||eu(n,r)})}function eu(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(Ds(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),Fs(n))}function tc(n,t,e){for(const r of e)r instanceof Ql?(n.Ma.addReference(r.key,t),jg(n,r)):r instanceof Yl?(M("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||eu(n,r.key)):U()}function jg(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(M("SyncEngine","New document in limbo: "+e),n.Ca.add(r),Fs(n))}function Fs(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new L(J.fromString(t)),r=n.Na.next();n.Fa.set(r,new bg(e)),n.va=n.va.insert(e,r),jl(n.remoteStore,new Jt(Ot(As(e.path)),r,"TargetPurposeLimboResolution",ys.oe))}}async function zn(n,t,e){const r=q(n),i=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{a.push(r.Ba(u,t,e).then(d=>{var p;if((d||e)&&r.isPrimaryClient){const m=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=Vs.Ki(u.targetId,d);o.push(m)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(u,d){const p=q(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(d,T=>V.forEach(T.qi,C=>p.persistence.referenceDelegate.addReference(m,T.targetId,C)).next(()=>V.forEach(T.Qi,C=>p.persistence.referenceDelegate.removeReference(m,T.targetId,C)))))}catch(m){if(!jn(m))throw m;M("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const T=m.targetId;if(!m.fromCache){const C=p.ns.get(T),b=C.snapshotVersion,D=C.withLastLimboFreeSnapshotVersion(b);p.ns=p.ns.insert(T,D)}}}(r.localStore,o))}async function Bg(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){M("SyncEngine","User change. New user:",t.toKey());const r=await Ml(e.localStore,t);e.currentUser=t,function(o,a){o.Oa.forEach(l=>{l.forEach(u=>{u.reject(new O(P.CANCELLED,a))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await zn(e,r.us)}}function qg(n,t){const e=q(n),r=e.Fa.get(t);if(r&&r.wa)return z().add(r.key);{let i=z();const o=e.Da.get(t);if(!o)return i;for(const a of o){const l=e.ba.get(a);i=i.unionWith(l.view.Ea)}return i}}function nu(n){const t=q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Jl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=qg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Lg.bind(null,t),t.Sa.h_=Rg.bind(null,t.eventManager),t.Sa.ka=Cg.bind(null,t.eventManager),t}function $g(n){const t=q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Fg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ug.bind(null,t),t}class ec{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Gr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Qm(this.persistence,new Km,t.initialUser,this.serializer)}createPersistence(t){return new zm(bs.Hr,this.serializer)}createSharedClientState(t){return new ng}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zg{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Za(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bg.bind(null,this.syncEngine),await Ig(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ag}()}createDatastore(t){const e=Gr(t.databaseInfo.databaseId),r=function(o){return new og(o)}(t.databaseInfo);return function(o,a,l,u){return new lg(o,a,l,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,l){return new hg(r,i,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Za(this.syncEngine,e,0),function(){return Qa.D()?new Qa:new rg}())}createSyncEngine(t,e){return function(i,o,a,l,u,d,p){const m=new Vg(i,o,a,l,u,d);return p&&(m.La=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=q(r);M("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await $n(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class ru{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):zt("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Wg{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=el.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{M("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(M("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ms(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ki(n,t){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ml(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function nc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Kg(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ya(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ya(t.remoteStore,i)),n._onlineComponents=t}function Gg(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Kg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await ki(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Gg(e))throw e;Le("Error using user provided cache. Falling back to memory cache: "+e),await ki(n,new ec)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await ki(n,new ec);return n._offlineComponents}async function iu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await nc(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await nc(n,new zg))),n._onlineComponents}function Hg(n){return iu(n).then(t=>t.syncEngine)}async function os(n){const t=await iu(n),e=t.eventManager;return e.onListen=Dg.bind(null,t.syncEngine),e.onUnlisten=kg.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=xg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Og.bind(null,t.syncEngine),e}function Qg(n,t,e={}){const r=new ee;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,u,d){const p=new ru({next:T=>{a.enqueueAndForget(()=>Kl(o,m)),T.fromCache&&u.source==="server"?d.reject(new O(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),m=new Hl(l,p,{includeMetadataChanges:!0,ra:!0});return Gl(o,m)}(await os(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function su(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const rc=new Map;/**
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
 */function ou(n,t,e){if(!e)throw new O(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Yg(n,t,e,r){if(t===!0&&r===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ic(n){if(!L.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sc(n){if(L.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":U()}function _e(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Qr(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class oc{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Yg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=su((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Yr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oc(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mp;switch(r.type){case"firstParty":return new vp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=rc.get(e);r&&(M("ComponentProvider","Removing Datastore"),rc.delete(e),r.terminate())}(this),Promise.resolve()}}function Xg(n,t,e,r={}){var i;const o=(n=_e(n,Yr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Le("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=yt.MOCK_USER;else{l=Qd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new yt(d)}n._authCredentials=new gp(new tl(l,u))}}/**
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
 */class Gt{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Gt(this.firestore,t,this._query)}}class Rt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}}class ne extends Gt{constructor(t,e,r){super(t,e,As(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new L(t))}withConverter(t){return new ne(this.firestore,t,this._path)}}function Ie(n,t,...e){if(n=qt(n),ou("collection","path",t),n instanceof Yr){const r=J.fromString(t,...e);return sc(r),new ne(n,null,r)}{if(!(n instanceof Rt||n instanceof ne))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(t,...e));return sc(r),new ne(n.firestore,null,r)}}function Jg(n,t,...e){if(n=qt(n),arguments.length===1&&(t=el.newId()),ou("doc","path",t),n instanceof Yr){const r=J.fromString(t,...e);return ic(r),new Rt(n,null,new L(r))}{if(!(n instanceof Rt||n instanceof ne))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(t,...e));return ic(r),new Rt(n.firestore,n instanceof ne?n.converter:null,new L(r))}}/**
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
 */class Zg{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Fl(this,"async_queue_retry"),this.hu=()=>{const e=Ni();e&&M("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Ni();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Ni();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new ee;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!jn(t))throw t;M("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw zt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=Os.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&U()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}function ac(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class On extends Yr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Zg}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||au(this),this._firestoreClient.terminate()}}function t_(n,t){const e=typeof n=="object"?n:zc(),r=typeof n=="string"?n:"(default)",i=Fn(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Kd("firestore");o&&Xg(i,...o)}return i}function Us(n){return n._firestoreClient||au(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function au(n){var t,e,r;const i=n._freezeSettings(),o=function(l,u,d,p){return new xp(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,su(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Wg(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class $e{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $e(Et.fromBase64String(t))}catch(e){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new $e(Et.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class js{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class cu{constructor(t){this._methodName=t}}/**
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
 */class Bs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}}/**
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
 */const e_=/^__.*__$/;class n_{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Se(t,this.data,this.fieldMask,e,this.fieldTransforms):new Bn(t,this.data,e,this.fieldTransforms)}}function lu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class qs{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new qs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.wu(t),i}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Nr(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(lu(this.fu)&&e_.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class r_{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Gr(t)}Fu(t,e,r,i=!1){return new qs({fu:t,methodName:e,vu:r,path:ht.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uu(n){const t=n._freezeSettings(),e=Gr(n._databaseId);return new r_(n._databaseId,!!t.ignoreUndefinedProperties,e)}function i_(n,t,e,r,i,o={}){const a=n.Fu(o.merge||o.mergeFields?2:0,t,e,i);fu("Data must be an object, but it was:",a,r);const l=hu(r,a);let u,d;if(o.merge)u=new Vt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const m of o.mergeFields){const T=o_(t,m,e);if(!a.contains(T))throw new O(P.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);c_(p,T)||p.push(T)}u=new Vt(p),d=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=a.fieldTransforms;return new n_(new St(l),u,d)}function s_(n,t,e,r=!1){return $s(e,n.Fu(r?4:3,t))}function $s(n,t){if(du(n=qt(n)))return fu("Unsupported field value:",t,n),hu(n,t);if(n instanceof cu)return function(r,i){if(!lu(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const l of r){let u=$s(l,i.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Zp(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ot.fromDate(r);return{timestampValue:Dr(i.serializer,o)}}if(r instanceof ot){const o=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Dr(i.serializer,o)}}if(r instanceof Bs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $e)return{bytesValue:bl(i.serializer,r._byteString)};if(r instanceof Rt){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ss(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Qr(r)}`)}(n,t)}function hu(n,t){const e={};return nl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ge(n,(r,i)=>{const o=$s(i,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function du(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ot||n instanceof Bs||n instanceof $e||n instanceof Rt||n instanceof cu)}function fu(n,t,e){if(!du(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Qr(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function o_(n,t,e){if((t=qt(t))instanceof js)return t._internalPath;if(typeof t=="string")return pu(n,t);throw Nr("Field path arguments must be of type string or ",n,!1,void 0,e)}const a_=new RegExp("[~\\*/\\[\\]]");function pu(n,t,e){if(t.search(a_)>=0)throw Nr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new js(...t.split("."))._internalPath}catch{throw Nr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Nr(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new O(P.INVALID_ARGUMENT,l+n+u)}function c_(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class mu{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new l_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Xr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class l_ extends mu{data(){return super.data()}}function Xr(n,t){return typeof t=="string"?pu(n,t):t instanceof js?t._internalPath:t._delegate._internalPath}/**
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
 */function gu(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zs{}class Ws extends zs{}function Gs(n,t,...e){let r=[];t instanceof zs&&r.push(t),r=r.concat(e),function(o){const a=o.filter(u=>u instanceof Ks).length,l=o.filter(u=>u instanceof Jr).length;if(a>1||a>0&&l>0)throw new O(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Jr extends Ws{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Jr(t,e,r)}_apply(t){const e=this._parse(t);return yu(t._query,e),new Gt(t.firestore,t.converter,Ji(t._query,e))}_parse(t){const e=uu(t.firestore);return function(o,a,l,u,d,p,m){let T;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new O(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){lc(m,p);const C=[];for(const b of m)C.push(cc(u,o,b));T={arrayValue:{values:C}}}else T=cc(u,o,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||lc(m,p),T=s_(l,a,m,p==="in"||p==="not-in");return it.create(d,p,T)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function u_(n,t,e){const r=t,i=Xr("where",n);return Jr._create(i,r,e)}class Ks extends zs{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ks(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Dt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const l=o.getFlattenedFilters();for(const u of l)yu(a,u),a=Ji(a,u)}(t._query,e),new Gt(t.firestore,t.converter,Ji(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hs extends Ws{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Hs(t,e)}_apply(t){const e=function(i,o,a){if(i.startAt!==null)throw new O(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new O(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xn(o,a)}(t._query,this._field,this._direction);return new Gt(t.firestore,t.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new Ke(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function _u(n,t="asc"){const e=t,r=Xr("orderBy",n);return Hs._create(r,e)}class Qs extends Ws{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new Qs(t,e,r)}_apply(t){return new Gt(t.firestore,t.converter,Pr(t._query,this._limit,this._limitType))}}function h_(n){return Qs._create("limit",n,"F")}function cc(n,t,e){if(typeof(e=qt(e))=="string"){if(e==="")throw new O(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hl(t)&&e.indexOf("/")!==-1)throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(J.fromString(e));if(!L.isDocumentKey(r))throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Va(n,new L(r))}if(e instanceof Rt)return Va(n,e._key);throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qr(e)}.`)}function lc(n,t){if(!Array.isArray(n)||n.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function yu(n,t){const e=function(i,o){for(const a of i)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new O(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new O(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class d_{convertValue(t,e="none"){switch(we(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw U()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ge(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new Bs(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Es(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(bn(t));default:return null}}convertTimestamp(t){const e=se(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=J.fromString(t);Y(Ol(r));const i=new Vn(r.get(1),r.get(3)),o=new L(r.popFirst(5));return i.isEqual(e)||zt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function f_(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class vn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class vu extends mu{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Xr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class wr extends vu{data(t={}){return super.data(t)}}class Eu{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new vn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new wr(this._firestore,this._userDataWriter,r.key,r,new vn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new wr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new vn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const u=new wr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new vn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:p_(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function p_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}class Ys extends d_{constructor(t){super(),this.firestore=t}convertBytes(t){return new $e(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function Zr(n){n=_e(n,Gt);const t=_e(n.firestore,On),e=Us(t),r=new Ys(t);return gu(n._query),Qg(e,n._query).then(i=>new Eu(t,r,n,i))}function wu(n,t){const e=_e(n.firestore,On),r=Jg(n),i=f_(n.converter,t);return g_(e,[i_(uu(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function m_(n,...t){var e,r,i;n=qt(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||ac(t[a])||(o=t[a],a++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(ac(t[a])){const m=t[a];t[a]=(e=m.next)===null||e===void 0?void 0:e.bind(m),t[a+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),t[a+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,d,p;if(n instanceof Rt)d=_e(n.firestore,On),p=As(n._key.path),u={next:m=>{t[a]&&t[a](__(d,n,m))},error:t[a+1],complete:t[a+2]};else{const m=_e(n,Gt);d=_e(m.firestore,On),p=m._query;const T=new Ys(d);u={next:C=>{t[a]&&t[a](new Eu(d,T,m,C))},error:t[a+1],complete:t[a+2]},gu(n._query)}return function(T,C,b,D){const S=new ru(D),F=new Hl(C,S,b);return T.asyncQueue.enqueueAndForget(async()=>Gl(await os(T),F)),()=>{S.$a(),T.asyncQueue.enqueueAndForget(async()=>Kl(await os(T),F))}}(Us(d),p,l,u)}function g_(n,t){return function(r,i){const o=new ee;return r.asyncQueue.enqueueAndForget(async()=>Mg(await Hg(r),i,o)),o.promise}(Us(n),t)}function __(n,t,e){const r=e.docs.get(t._key),i=new Ys(n);return new vu(n,i,t._key,r,new vn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){We=i})(sp),re(new $t("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new On(new _p(r.getProvider("auth-internal")),new wp(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vn(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),kt(Ca,"4.6.4",t),kt(Ca,"4.6.4","esm2017")})();var Iu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},uc=Nt.createContext&&Nt.createContext(Iu),y_=["attr","size","title"];function v_(n,t){if(n==null)return{};var e=E_(n,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(e[r]=n[r])}return e}function E_(n,t){if(n==null)return{};var e={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(t.indexOf(r)>=0)continue;e[r]=n[r]}return e}function kr(){return kr=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},kr.apply(this,arguments)}function hc(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),e.push.apply(e,r)}return e}function Or(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?hc(Object(e),!0).forEach(function(r){w_(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):hc(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}function w_(n,t,e){return t=I_(t),t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function I_(n){var t=T_(n,"string");return typeof t=="symbol"?t:t+""}function T_(n,t){if(typeof n!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var r=e.call(n,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Tu(n){return n&&n.map((t,e)=>Nt.createElement(t.tag,Or({key:e},t.attr),Tu(t.child)))}function Xs(n){return t=>Nt.createElement(A_,kr({attr:Or({},n.attr)},t),Tu(n.child))}function A_(n){var t=e=>{var{attr:r,size:i,title:o}=n,a=v_(n,y_),l=i||e.size||"1em",u;return e.className&&(u=e.className),n.className&&(u=(u?u+" ":"")+n.className),Nt.createElement("svg",kr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,a,{className:u,style:Or(Or({color:n.color||e.color},e.style),n.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&Nt.createElement("title",null,o),n.children)};return uc!==void 0?Nt.createElement(uc.Consumer,null,e=>t(e)):t(Iu)}function R_(n){return Xs({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm181.008-630.016c-12.496-12.496-32.752-12.496-45.248 0L512 466.752l-135.76-135.76c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248L466.736 512l-135.76 135.76c-12.496 12.48-12.496 32.769 0 45.249 12.496 12.496 32.752 12.496 45.264 0L512 557.249l135.76 135.76c12.496 12.496 32.752 12.496 45.248 0 12.496-12.48 12.496-32.769 0-45.249L557.248 512l135.76-135.76c12.512-12.512 12.512-32.768 0-45.248z"},child:[]}]})(n)}function C_(n){return Xs({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M532.528 661.408c-12.512 12.496-12.513 32.752-.001 45.248 6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376l189.008-194L577.775 318.64c-12.496-12.496-32.752-12.496-45.248 0-12.512 12.496-12.512 32.752 0 45.248l115.744 115.76H31.839c-17.68 0-32 14.336-32 32s14.32 32 32 32h618.448zM960.159 0h-576c-35.36 0-64.017 28.656-64.017 64v288h64.432V103.024c0-21.376 17.344-38.72 38.72-38.72h496.704c21.408 0 38.72 17.344 38.72 38.72l1.007 818.288c0 21.376-17.311 38.72-38.72 38.72H423.31c-21.376 0-38.72-17.344-38.72-38.72V670.944l-64.432.08V960c0 35.344 28.656 64 64.017 64h576c35.344 0 64-28.656 64-64V64c-.016-35.344-28.672-64-64.016-64z"},child:[]}]})(n)}var S_="firebase",P_="10.12.4";/**
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
 */kt(S_,P_,"app");/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const b_={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function fr(n){return Object.isFrozen(n)&&Object.isFrozen(n.raw)}function pr(n){return n.toString().indexOf("`")===-1}pr(n=>n``)||pr(n=>n`\0`)||pr(n=>n`\n`)||pr(n=>n`\u0000`);fr``&&fr`\0`&&fr`\n`&&fr`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Au="google#safe";function V_(){if(typeof window<"u")return window.trustedTypes}function Ru(){var n;return Au!==""&&(n=V_())!==null&&n!==void 0?n:null}let mr;function D_(){var n,t;if(mr===void 0)try{mr=(t=(n=Ru())===null||n===void 0?void 0:n.createPolicy(Au,{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e}))!==null&&t!==void 0?t:null}catch{mr=null}return mr}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class Cu{constructor(t,e){this.privateDoNotAccessOrElseWrappedResourceUrl=t}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function dc(n){var t;const e=n,r=(t=D_())===null||t===void 0?void 0:t.createScriptURL(e);return r??new Cu(e,b_)}function x_(n){var t;if(!((t=Ru())===null||t===void 0)&&t.isScriptURL(n))return n;if(n instanceof Cu)return n.privateDoNotAccessOrElseWrappedResourceUrl;{let e="";throw new Error(e)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function N_(n,...t){if(t.length===0)return dc(n[0]);n[0].toLowerCase();let e=n[0];for(let r=0;r<t.length;r++)e+=encodeURIComponent(t[r])+n[r+1];return dc(e)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function k_(n){return O_("script",n)}function O_(n,t){var e;const r=t.document,i=(e=r.querySelector)===null||e===void 0?void 0:e.call(r,`${n}[nonce]`);return i&&(i.nonce||i.getAttribute("nonce"))||""}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function M_(n){const t=n.ownerDocument&&n.ownerDocument.defaultView,e=k_(t||window);e&&n.setAttribute("nonce",e)}function L_(n,t,e){n.src=x_(t),M_(n)}const Su="@firebase/installations",Js="0.6.8";/**
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
 */const Pu=1e4,bu=`w:${Js}`,Vu="FIS_v2",F_="https://firebaseinstallations.googleapis.com/v1",U_=60*60*1e3,j_="installations",B_="Installations";/**
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
 */const q_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Te=new Ur(j_,B_,q_);function Du(n){return n instanceof ae&&n.code.includes("request-failed")}/**
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
 */function xu({projectId:n}){return`${F_}/projects/${n}/installations`}function Nu(n){return{token:n.token,requestStatus:2,expiresIn:z_(n.expiresIn),creationTime:Date.now()}}async function ku(n,t){const r=(await t.json()).error;return Te.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ou({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function $_(n,{refreshToken:t}){const e=Ou(n);return e.append("Authorization",W_(t)),e}async function Mu(n){const t=await n();return t.status>=500&&t.status<600?n():t}function z_(n){return Number(n.replace("s","000"))}function W_(n){return`${Vu} ${n}`}/**
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
 */async function G_({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=xu(n),i=Ou(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:e,authVersion:Vu,appId:n.appId,sdkVersion:bu},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await Mu(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:Nu(d.authToken)}}else throw await ku("Create Installation",u)}/**
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
 */function Lu(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function K_(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const H_=/^[cdef][\w-]{21}$/,as="";function Q_(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Y_(n);return H_.test(e)?e:as}catch{return as}}function Y_(n){return K_(n).substr(0,22)}/**
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
 */function ti(n){return`${n.appName}!${n.appId}`}/**
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
 */const Fu=new Map;function Uu(n,t){const e=ti(n);ju(e,t),X_(e,t)}function ju(n,t){const e=Fu.get(n);if(e)for(const r of e)r(t)}function X_(n,t){const e=J_();e&&e.postMessage({key:n,fid:t}),Z_()}let pe=null;function J_(){return!pe&&"BroadcastChannel"in self&&(pe=new BroadcastChannel("[Firebase] FID Change"),pe.onmessage=n=>{ju(n.data.key,n.data.fid)}),pe}function Z_(){Fu.size===0&&pe&&(pe.close(),pe=null)}/**
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
 */const ty="firebase-installations-database",ey=1,Ae="firebase-installations-store";let Oi=null;function Zs(){return Oi||(Oi=qc(ty,ey,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Ae)}}})),Oi}async function Mr(n,t){const e=ti(n),i=(await Zs()).transaction(Ae,"readwrite"),o=i.objectStore(Ae),a=await o.get(e);return await o.put(t,e),await i.done,(!a||a.fid!==t.fid)&&Uu(n,t.fid),t}async function Bu(n){const t=ti(n),r=(await Zs()).transaction(Ae,"readwrite");await r.objectStore(Ae).delete(t),await r.done}async function ei(n,t){const e=ti(n),i=(await Zs()).transaction(Ae,"readwrite"),o=i.objectStore(Ae),a=await o.get(e),l=t(a);return l===void 0?await o.delete(e):await o.put(l,e),await i.done,l&&(!a||a.fid!==l.fid)&&Uu(n,l.fid),l}/**
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
 */async function to(n){let t;const e=await ei(n.appConfig,r=>{const i=ny(r),o=ry(n,i);return t=o.registrationPromise,o.installationEntry});return e.fid===as?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function ny(n){const t=n||{fid:Q_(),registrationStatus:0};return qu(t)}function ry(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Te.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=iy(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:sy(n)}:{installationEntry:t}}async function iy(n,t){try{const e=await G_(n,t);return Mr(n.appConfig,e)}catch(e){throw Du(e)&&e.customData.serverCode===409?await Bu(n.appConfig):await Mr(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function sy(n){let t=await fc(n.appConfig);for(;t.registrationStatus===1;)await Lu(100),t=await fc(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await to(n);return r||e}return t}function fc(n){return ei(n,t=>{if(!t)throw Te.create("installation-not-found");return qu(t)})}function qu(n){return oy(n)?{fid:n.fid,registrationStatus:0}:n}function oy(n){return n.registrationStatus===1&&n.registrationTime+Pu<Date.now()}/**
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
 */async function ay({appConfig:n,heartbeatServiceProvider:t},e){const r=cy(n,e),i=$_(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:bu,appId:n.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await Mu(()=>fetch(r,l));if(u.ok){const d=await u.json();return Nu(d)}else throw await ku("Generate Auth Token",u)}function cy(n,{fid:t}){return`${xu(n)}/${t}/authTokens:generate`}/**
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
 */async function eo(n,t=!1){let e;const r=await ei(n.appConfig,o=>{if(!$u(o))throw Te.create("not-registered");const a=o.authToken;if(!t&&hy(a))return o;if(a.requestStatus===1)return e=ly(n,t),o;{if(!navigator.onLine)throw Te.create("app-offline");const l=fy(o);return e=uy(n,l),l}});return e?await e:r.authToken}async function ly(n,t){let e=await pc(n.appConfig);for(;e.authToken.requestStatus===1;)await Lu(100),e=await pc(n.appConfig);const r=e.authToken;return r.requestStatus===0?eo(n,t):r}function pc(n){return ei(n,t=>{if(!$u(t))throw Te.create("not-registered");const e=t.authToken;return py(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function uy(n,t){try{const e=await ay(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Mr(n.appConfig,r),e}catch(e){if(Du(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Bu(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Mr(n.appConfig,r)}throw e}}function $u(n){return n!==void 0&&n.registrationStatus===2}function hy(n){return n.requestStatus===2&&!dy(n)}function dy(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+U_}function fy(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function py(n){return n.requestStatus===1&&n.requestTime+Pu<Date.now()}/**
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
 */async function my(n){const t=n,{installationEntry:e,registrationPromise:r}=await to(t);return r?r.catch(console.error):eo(t).catch(console.error),e.fid}/**
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
 */async function gy(n,t=!1){const e=n;return await _y(e),(await eo(e,t)).token}async function _y(n){const{registrationPromise:t}=await to(n);t&&await t}/**
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
 */function yy(n){if(!n||!n.options)throw Mi("App Configuration");if(!n.name)throw Mi("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Mi(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Mi(n){return Te.create("missing-app-config-values",{valueName:n})}/**
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
 */const zu="installations",vy="installations-internal",Ey=n=>{const t=n.getProvider("app").getImmediate(),e=yy(t),r=Fn(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},wy=n=>{const t=n.getProvider("app").getImmediate(),e=Fn(t,zu).getImmediate();return{getId:()=>my(e),getToken:i=>gy(e,i)}};function Iy(){re(new $t(zu,Ey,"PUBLIC")),re(new $t(vy,wy,"PRIVATE"))}Iy();kt(Su,Js);kt(Su,Js,"esm2017");/**
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
 */const Lr="analytics",Ty="firebase_id",Ay="origin",Ry=60*1e3,Cy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Sy="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ct=new ms("@firebase/analytics");/**
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
 */function Wu(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function Py(n,t){const e=document.createElement("script"),r=N_`https://www.googletagmanager.com/gtag/js?l=${n}&id=${t}`;L_(e,r),e.async=!0,document.head.appendChild(e)}function by(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Vy(n,t,e,r,i,o){const a=r[i];try{if(a)await t[a];else{const u=(await Wu(e)).find(d=>d.measurementId===i);u&&await t[u.appId]}}catch(l){Ct.error(l)}n("config",i,o)}async function Dy(n,t,e,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await Wu(e);for(const u of a){const d=l.find(m=>m.measurementId===u),p=d&&t[d.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,i||{})}catch(o){Ct.error(o)}}function xy(n,t,e,r){async function i(o,...a){try{if(o==="event"){const[l,u]=a;await Dy(n,t,e,l,u)}else if(o==="config"){const[l,u]=a;await Vy(n,t,e,r,l,u)}else if(o==="consent"){const[l,u]=a;n("consent",l,u)}else if(o==="get"){const[l,u,d]=a;n("get",l,u,d)}else if(o==="set"){const[l]=a;n("set",l)}else n(o,...a)}catch(l){Ct.error(l)}}return i}function Ny(n,t,e,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=xy(o,n,t,e),{gtagCore:o,wrappedGtag:window[i]}}function ky(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Sy)&&e.src.includes(n))return e;return null}/**
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
 */const Oy={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Pt=new Ur("analytics","Analytics",Oy);/**
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
 */const My=30,Ly=1e3;class Fy{constructor(t={},e=Ly){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Gu=new Fy;function Uy(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function jy(n){var t;const{appId:e,apiKey:r}=n,i={method:"GET",headers:Uy(r)},o=Cy.replace("{app-id}",e),a=await fetch(o,i);if(a.status!==200&&a.status!==304){let l="";try{const u=await a.json();!((t=u.error)===null||t===void 0)&&t.message&&(l=u.error.message)}catch{}throw Pt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function By(n,t=Gu,e){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw Pt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Pt.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new zy;return setTimeout(async()=>{l.abort()},Ry),Ku({appId:r,apiKey:i,measurementId:o},a,l,t)}async function Ku(n,{throttleEndTimeMillis:t,backoffCount:e},r,i=Gu){var o;const{appId:a,measurementId:l}=n;try{await qy(r,t)}catch(u){if(l)return Ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw u}try{const u=await jy(n);return i.deleteThrottleMetadata(a),u}catch(u){const d=u;if(!$y(d)){if(i.deleteThrottleMetadata(a),l)return Ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:l};throw u}const p=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?ga(e,i.intervalMillis,My):ga(e,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+p,backoffCount:e+1};return i.setThrottleMetadata(a,m),Ct.debug(`Calling attemptFetch again in ${p} millis`),Ku(n,m,r,i)}}function qy(n,t){return new Promise((e,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(e,i);n.addEventListener(()=>{clearTimeout(o),r(Pt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function $y(n){if(!(n instanceof ae)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class zy{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Wy(n,t,e,r,i){if(i&&i.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
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
 */async function Gy(){if(Fc())try{await Uc()}catch(n){return Ct.warn(Pt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ct.warn(Pt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ky(n,t,e,r,i,o,a){var l;const u=By(n);u.then(C=>{e[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&Ct.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>Ct.error(C)),t.push(u);const d=Gy().then(C=>{if(C)return r.getId()}),[p,m]=await Promise.all([u,d]);ky(o)||Py(o,p.measurementId),i("js",new Date);const T=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return T[Ay]="firebase",T.update=!0,m!=null&&(T[Ty]=m),i("config",p.measurementId,T),p.measurementId}/**
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
 */class Hy{constructor(t){this.app=t}_delete(){return delete An[this.app.options.appId],Promise.resolve()}}let An={},mc=[];const gc={};let Li="dataLayer",Qy="gtag",_c,Hu,yc=!1;function Yy(){const n=[];if(Jd()&&n.push("This is a browser extension environment."),tf()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),e=Pt.create("invalid-analytics-context",{errorInfo:t});Ct.warn(e.message)}}function Xy(n,t,e){Yy();const r=n.options.appId;if(!r)throw Pt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Pt.create("no-api-key");if(An[r]!=null)throw Pt.create("already-exists",{id:r});if(!yc){by(Li);const{wrappedGtag:o,gtagCore:a}=Ny(An,mc,gc,Li,Qy);Hu=o,_c=a,yc=!0}return An[r]=Ky(n,mc,gc,t,_c,Li,e),new Hy(n)}function Jy(n=zc()){n=qt(n);const t=Fn(n,Lr);return t.isInitialized()?t.getImmediate():Zy(n)}function Zy(n,t={}){const e=Fn(n,Lr);if(e.isInitialized()){const i=e.getImmediate();if(Ar(t,e.getOptions()))return i;throw Pt.create("already-initialized")}return e.initialize({options:t})}function tv(n,t,e,r){n=qt(n),Wy(Hu,An[n.app.options.appId],t,e,r).catch(i=>Ct.error(i))}const vc="@firebase/analytics",Ec="0.10.6";function ev(){re(new $t(Lr,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Xy(r,i,e)},"PUBLIC")),re(new $t("analytics-internal",n,"PRIVATE")),kt(vc,Ec),kt(vc,Ec,"esm2017");function n(t){try{const e=t.getProvider(Lr).getImmediate();return{logEvent:(r,i,o)=>tv(e,r,i,o)}}catch(e){throw Pt.create("interop-component-reg-failed",{reason:e})}}}ev();const nv={apiKey:"AIzaSyBRDBbrJbmLwb3YTI_YBmMdTjLEd8KjS2E",authDomain:"tokenchat-b8673.firebaseapp.com",projectId:"tokenchat-b8673",storageBucket:"tokenchat-b8673.appspot.com",messagingSenderId:"593980787293",appId:"1:593980787293:web:7c58ff7656a3fa31b19bb4",measurementId:"G-RB9WJLVQC0"},Qu=$c(nv);Jy(Qu);const Re=t_(Qu);function rv(){const{address:n}=xt(),[t,e]=x.useState(null),r=fs(),i=async o=>{const a=Ie(Re,"users"),l=Gs(a,u_("wallet","==",o));try{const d=!(await Zr(l)).empty;console.log("User found:",d),e(d),r(d?"/chat":"/signup")}catch(u){console.error("Error checking user:",u),e(!1),r("/signup")}};return k.jsxs("div",{children:[k.jsxs("button",{className:"proceedButton",onClick:()=>{n?i(n):console.error("Address is undefined")},children:[k.jsx(C_,{size:28}),k.jsx("span",{children:"Proceed"})]}),t!==null&&k.jsx("p",{children:t?"User exists":"User does not exist"})]})}function iv(){const{address:n,isConnected:t}=xt(),{disconnect:e}=ls(),r=async()=>{localStorage.removeItem("walletconnect"),localStorage.removeItem("walletConnected"),localStorage.removeItem("connectorId"),e()};return k.jsx("div",{className:"wallet-button",children:t&&n?k.jsxs("div",{className:"walletBubble",children:[k.jsxs("div",{className:"address",children:[n.slice(0,6),"...",n.slice(-4)]}),k.jsx("button",{onClick:r,children:k.jsx(R_,{size:25})})]}):k.jsx("w3m-connect-button",{})})}function sv(){const{address:n,isConnected:t,connector:e}=xt(),{connect:r,connectors:i}=Mh();ls();const[o,a]=x.useState(t);return fs(),x.useEffect(()=>{if(localStorage.getItem("walletConnected")==="true"&&!t){console.log("Attempting to reconnect wallet automatically...");const u=localStorage.getItem("connectorId");if(console.log("Last used connector:",u),u){const d=i.find(p=>p.id===u);d&&(console.log("Reconnecting with saved connector:",u),r({connector:d}))}else{const d=i.find(p=>p.id==="injected");d&&(console.log("No saved connector, trying injected..."),r({connector:d}))}}},[r,i,t]),x.useEffect(()=>{console.log("Connection state changed:",t?"connected":"disconnected"),console.log("Current connector:",e==null?void 0:e.id),a(t),t&&!o&&console.log("Wallet newly connected:",n),!t&&o&&console.log("Wallet disconnected")},[t,n,o,e]),x.useEffect(()=>{const l=()=>{o&&!t&&(console.log("Connection lost while page was inactive, updating UI"),a(!1))};return window.addEventListener("focus",l),()=>{window.removeEventListener("focus",l)}},[o,t]),k.jsxs("div",{className:"homepage",children:[k.jsxs("div",{className:"title",children:[k.jsx("h1",{children:"Chat 3.0 is here."}),k.jsx("h2",{children:"Your personal web3 companion."})]}),k.jsx("div",{children:k.jsxs("div",{className:"login",children:[k.jsx("h3",{children:o?`Connected ${e!=null&&e.id?`(${e.id})`:""}`:"Connect your wallet"}),k.jsx(iv,{}),o&&k.jsx(rv,{})]})})]})}let Fi;function ov(n){return Fi||(Fi=new Lh({...n,_sdkVersion:`react-wagmi-${Fh.VERSION}`})),Fi}function av(){const{address:n}=xt(),[t,e]=x.useState(""),[r,i]=x.useState(null),o=async()=>{const l=Ie(Re,"users"),u=Gs(l,_u("name"),h_(10)),p=(await Zr(u)).docs.map(m=>({id:m.id,...m.data()}));i({users:p}),console.log("Fetched data:",p)};x.useEffect(()=>{o()},[]);const a=async()=>{console.log("Writing data:",n,t);try{await wu(Ie(Re,"users"),{wallet:n,name:t}),console.log("Data written successfully"),o()}catch(l){console.error("Error writing data:",l)}};return k.jsxs("div",{className:"centered-div",children:[k.jsx("div",{className:"title",children:k.jsx("h3",{children:"Register User"})}),k.jsxs("p",{children:["Wallet Address: ",n]}),k.jsx("input",{type:"text",placeholder:"Enter name",value:t,onChange:l=>e(l.target.value)}),k.jsx("button",{onClick:a,children:"Register"}),k.jsx("pre",{children:JSON.stringify(r,null,2)})]})}const Yu=({eth:n})=>k.jsx("div",{children:k.jsx("img",{src:`https://effigy.im/a/${n}.svg`,alt:"Profile picture",className:"profilePic"})});function cv(){const{address:n}=xt();return k.jsx("div",{className:"ChatSidebar",children:k.jsx("div",{className:"profilePicture",children:n&&k.jsx(Yu,{eth:n})})})}function lv({setSelectedChatId:n,users:t,getWalletById:e}){const{address:r}=xt(),[i,o]=x.useState([]),[a,l]=x.useState(null);x.useEffect(()=>{if(!r)return;(async()=>{try{const D=Ie(Re,"privateChats"),F=(await Zr(D)).docs.map(j=>{const $=j.data();return{id:j.id,pid:$.pid||[]}});o(F)}catch(D){l("Failed to fetch data. Please check your internet connection."),console.error("Fetch error:",D)}})()},[r]);const u=t.find(b=>b.wallet===r),d=u?i.filter(b=>b.pid.includes(u.id)):[],p=b=>{const D=t.find(S=>S.id===b);return D?D.name:b},m=b=>u&&b.find(D=>D!==u.id)||"",T=b=>{const D=m(b);return p(D)},C=b=>{n(b)};return k.jsxs("div",{className:"chatSelector",children:[a&&k.jsx("p",{className:"error",children:a}),d.length>0?d.map(b=>k.jsxs("div",{className:"contactBox",onClick:()=>C(b.id),children:[k.jsx(Yu,{eth:e(m(b.pid))}),k.jsxs("div",{className:"contactTextBox",children:[k.jsx("h3",{children:T(b.pid)}),k.jsx("h3",{children:"latest message"})]})]},b.id)):k.jsx("p",{children:"No chatrooms available"})]})}const Xu=x.createContext(void 0),uv=({children:n})=>{const[t,e]=x.useState(void 0);return k.jsx(Xu.Provider,{value:{currentUser:t,setCurrentUser:e},children:n})},no=()=>{const n=x.useContext(Xu);if(!n)throw new Error("useUser must be used within a UserProvider");return n};function hv(n){return Xs({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"},child:[]}]})(n)}const dv=async(n,t,e)=>{try{const r=Ie(Re,"privateChats",e,"msg");await wu(r,{txt:n,from:t,ts:new Date}),console.log("Message sent successfully")}catch(r){console.error("Error sending message:",r)}},fv=({selectedChatId:n})=>{const[t,e]=Nt.useState(""),{currentUser:r}=no(),i=a=>{e(a.target.value)},o=()=>{if(!n||!r||!t.trim()){console.error("Missing required data:",{selectedChatId:n,currentUser:r,inputValue:t});return}dv(t,r.id,n),e("")};return k.jsxs("div",{className:"chatBottomBar",children:[k.jsx("input",{type:"text",className:"messageInput",placeholder:"Type your message",value:t,onChange:i}),k.jsx("button",{className:"sendMessageButton",onClick:o,disabled:!n||!r,title:"Send message",children:k.jsx(hv,{size:20})})]})};function pv({children:n,selectedChatId:t}){return k.jsxs("div",{className:"chatWindow",children:[k.jsx("div",{className:"chatContent",children:n})," ",k.jsx(fv,{selectedChatId:t})]})}const mv=({text:n,timeStamp:t,from:e,own:r})=>k.jsx("div",{className:"messageBox",children:k.jsxs("div",{className:`message ${r?"own":""}`,children:[k.jsx("p",{className:"message-text",children:n}),k.jsx("p",{className:"message-timestamp",children:new Date(t).toLocaleString()})]})});function gv({selectedChatId:n,users:t,getWalletById:e}){const[r,i]=x.useState([]);xt();const{currentUser:o}=no(),a=x.useRef(null),l=()=>{var u;(u=a.current)==null||u.scrollIntoView({behavior:"smooth"})};return x.useEffect(()=>{l()},[r]),x.useEffect(()=>{if(!n)return;const u=Ie(Re,"privateChats",n,"msg"),d=Gs(u,_u("ts","asc")),p=m_(d,m=>{const T=[];m.forEach(C=>{const b=C.data();b.txt&&b.ts&&b.from?T.push(b):console.log("Missing fields in document:",C.id)}),console.log("Real-time Messages Update:",T),i(T)},m=>{console.error("Error fetching messages:",m)});return()=>p()},[n]),k.jsxs("div",{className:"chatContent",children:[r.map((u,d)=>{const p=o!=null&&o.id?u.from===o.id:!1;return k.jsx(mv,{text:u.txt,timeStamp:u.ts.toMillis(),from:u.from,own:p},d)}),k.jsx("div",{ref:a})," "]})}function _v(){const{address:n}=xt(),[t,e]=x.useState(null),[r,i]=x.useState([]),{setCurrentUser:o}=no();x.useEffect(()=>{(async()=>{const d=Ie(Re,"users"),m=(await Zr(d)).docs.map(T=>({id:T.id,name:T.data().name,wallet:T.data().wallet}));i(m)})()},[]),x.useEffect(()=>{if(r.length>0&&n){const u=r.find(d=>d.wallet===n);console.log("Current User:",u),o(u)}},[r,n,o]);const a=u=>{e(u)},l=u=>{const d=r.find(p=>p.id===u);return d?d.wallet:""};return k.jsxs("div",{className:"chat",children:[k.jsx(cv,{}),k.jsx(lv,{setSelectedChatId:a,users:r,getWalletById:l}),k.jsx(pv,{selectedChatId:t||void 0,children:t&&k.jsx(gv,{selectedChatId:t,users:r,getWalletById:l})})]})}const yv=()=>{const{address:n,isConnected:t,status:e,connector:r}=xt(),{disconnect:i}=ls(),o=x.useRef(t),a=x.useRef(null);return x.useEffect(()=>{console.log("Connection status changed:",e),console.log("Is connected:",t),console.log("Current connector:",r==null?void 0:r.id),o.current&&!t&&(console.log("Detected disconnection, updating app state"),localStorage.removeItem("walletConnected"),localStorage.removeItem("lastConnectedAddress")),t&&n?(localStorage.setItem("walletConnected","true"),localStorage.setItem("lastConnectedAddress",n),localStorage.setItem("connectorId",(r==null?void 0:r.id)||""),console.log("Saved connection state to localStorage")):t||(localStorage.removeItem("walletConnected"),localStorage.removeItem("lastConnectedAddress"),localStorage.removeItem("connectorId"),console.log("Removed connection state from localStorage")),o.current=t},[t,n,e,r]),x.useEffect(()=>{const l=async()=>{try{if(t){const u=localStorage.getItem("walletConnected")==="true";(r==null?void 0:r.id)==="walletConnect"&&!(await r.getProvider()).session&&t&&(console.log("WalletConnect session lost, disconnecting in app"),i())}}catch(u){console.error("Error checking connection status:",u),t&&(console.log("Error verifying connection, force disconnecting"),i())}};return a.current||(l(),a.current=window.setInterval(l,5e3)),()=>{a.current&&(window.clearInterval(a.current),a.current=null)}},[t,i,r]),x.useEffect(()=>{const l=()=>{document.visibilityState==="visible"&&(console.log("Page is now visible, verifying wallet connection"),t&&(async()=>{try{(r==null?void 0:r.id)==="walletConnect"&&((await r.getProvider()).session||(console.log("WalletConnect session lost while page was inactive"),i()))}catch(d){console.error("Error checking connection on visibility change:",d),i()}})())};return window.addEventListener("visibilitychange",l),()=>{window.removeEventListener("visibilitychange",l)}},[t,i,r]),null},vv=new Uh,cs="02ee764d5cc25cff6387d6d3f7943fd6",Ui={name:"TokenChat",description:"Web3 Chat Application",url:window.location.origin,icons:["https://avatars.githubusercontent.com/u/37784886"]},Ev=[us,wc],wv=[jh({projectId:cs,metadata:Ui,showQrModal:!1,qrModalOptions:{themeMode:"dark",themeVariables:{"--wcm-z-index":"1000","--wcm-accent-color":"#50b458"},explorerRecommendedWalletIds:["c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96"],explorerExcludedWalletIds:[],enableExplorer:!0}}),Bh({shimDisconnect:!0}),qh({appName:Ui.name,appLogoUrl:Ui.icons[0]}),$h({options:{projectId:cs},socials:["google","x","github","discord","apple"],showWallets:!0,email:!0,walletFeatures:!1})],Ju=zh({chains:Ev,transports:{[us.id]:ia(),[wc.id]:ia()},connectors:wv,syncConnectedChain:!0});ov({wagmiConfig:Ju,projectId:cs,defaultChain:us,themeMode:"dark",enableAnalytics:!1,enableOnramp:!1});function Iv({children:n}){const{isConnected:t}=xt();return t?k.jsx(k.Fragment,{children:n}):k.jsx(xd,{to:"/"})}function Tv(){const{isConnected:n}=xt();return x.useEffect(()=>{console.log("App initialized, connection status:",n),typeof window.ethereum>"u"&&console.log("MetaMask not detected, but WalletConnect can still be used")},[n]),null}function Av(){return k.jsx(Nt.StrictMode,{children:k.jsx(Wh,{config:Ju,children:k.jsx(Gh,{client:vv,children:k.jsxs(Ld,{children:[k.jsx(yv,{}),k.jsx(Tv,{}),k.jsxs(kd,{children:[k.jsx(gr,{path:"/",element:k.jsx(sv,{})}),k.jsx(gr,{path:"/signup",element:k.jsx(av,{})}),k.jsx(gr,{path:"/chat",element:k.jsx(Iv,{children:k.jsx(uv,{children:k.jsx(_v,{})})})})]})]})})})})}const Rv=document.getElementById("root"),Cv=Ic(Rv);Cv.render(k.jsx(Nt.StrictMode,{children:k.jsx(Av,{})}));
