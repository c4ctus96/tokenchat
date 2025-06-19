import{aS as is,aT as rs,aU as os,aV as ns,aW as $0,aX as as,aY as ss,aZ as ls,a_ as qo,a$ as cr,b0 as Wr,b1 as cs,b2 as qr,b3 as X0,b4 as Oo,b5 as t1,b6 as us,b7 as hs}from"./vendor-DIbIWTTu.js";import"./walletconnect-DR4TkNmi.js";var W1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ds(i){var t=i.default;if(typeof t=="function"){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(i).forEach(function(r){var n=Object.getOwnPropertyDescriptor(i,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return i[r]}})}),e}var fs={exports:{}};/**
* [js-sha3]{@link https://github.com/emn178/js-sha3}
*
* @version 0.8.0
* @author Chen, Yi-Cyuan [emn178@gmail.com]
* @copyright Chen, Yi-Cyuan 2015-2018
* @license MIT
*/(function(i){(function(){var t="input is invalid type",e="finalize already called",r=typeof window=="object",n=r?window:{};n.JS_SHA3_NO_WINDOW&&(r=!1);var o=!r&&typeof self=="object",a=!n.JS_SHA3_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;a?n=W1:o&&(n=self);var l=!n.JS_SHA3_NO_COMMON_JS&&!0&&i.exports,f=!n.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",m="0123456789abcdef".split(""),x=[31,7936,2031616,520093696],C=[4,1024,262144,67108864],$=[1,256,65536,16777216],_=[6,1536,393216,100663296],R=[0,8,16,24],T=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],I=[224,256,384,512],F=[128,256],V=["hex","buffer","arrayBuffer","array","digest"],J={128:168,256:136};(n.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(h){return Object.prototype.toString.call(h)==="[object Array]"}),f&&(n.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(h){return typeof h=="object"&&h.buffer&&h.buffer.constructor===ArrayBuffer});for(var q=function(h,E,S){return function(k){return new g(h,E,h).update(k)[S]()}},K=function(h,E,S){return function(k,D){return new g(h,E,D).update(k)[S]()}},et=function(h,E,S){return function(k,D,N,H){return u["cshake"+h].update(k,D,N,H)[S]()}},Ht=function(h,E,S){return function(k,D,N,H){return u["kmac"+h].update(k,D,N,H)[S]()}},ot=function(h,E,S,k){for(var D=0;D<V.length;++D){var N=V[D];h[N]=E(S,k,N)}return h},Vt=function(h,E){var S=q(h,E,"hex");return S.create=function(){return new g(h,E,h)},S.update=function(k){return S.create().update(k)},ot(S,q,h,E)},ne=function(h,E){var S=K(h,E,"hex");return S.create=function(k){return new g(h,E,k)},S.update=function(k,D){return S.create(D).update(k)},ot(S,K,h,E)},rt=function(h,E){var S=J[h],k=et(h,E,"hex");return k.create=function(D,N,H){return!N&&!H?u["shake"+h].create(D):new g(h,E,D).bytepad([N,H],S)},k.update=function(D,N,H,U){return k.create(N,H,U).update(D)},ot(k,et,h,E)},ae=function(h,E){var S=J[h],k=Ht(h,E,"hex");return k.create=function(D,N,H){return new W(h,E,N).bytepad(["KMAC",H],S).bytepad([D],S)},k.update=function(D,N,H,U){return k.create(D,H,U).update(N)},ot(k,Ht,h,E)},s=[{name:"keccak",padding:$,bits:I,createMethod:Vt},{name:"sha3",padding:_,bits:I,createMethod:Vt},{name:"shake",padding:x,bits:F,createMethod:ne},{name:"cshake",padding:C,bits:F,createMethod:rt},{name:"kmac",padding:C,bits:F,createMethod:ae}],u={},d=[],v=0;v<s.length;++v)for(var b=s[v],y=b.bits,M=0;M<y.length;++M){var w=b.name+"_"+y[M];if(d.push(w),u[w]=b.createMethod(y[M],b.padding),b.name!=="sha3"){var c=b.name+y[M];d.push(c),u[c]=u[w]}}function g(h,E,S){this.blocks=[],this.s=[],this.padding=E,this.outputBits=S,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(h<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=S>>5,this.extraBytes=(S&31)>>3;for(var k=0;k<50;++k)this.s[k]=0}g.prototype.update=function(h){if(this.finalized)throw new Error(e);var E,S=typeof h;if(S!=="string"){if(S==="object"){if(h===null)throw new Error(t);if(f&&h.constructor===ArrayBuffer)h=new Uint8Array(h);else if(!Array.isArray(h)&&(!f||!ArrayBuffer.isView(h)))throw new Error(t)}else throw new Error(t);E=!0}for(var k=this.blocks,D=this.byteCount,N=h.length,H=this.blockCount,U=0,Y=this.s,j,nt;U<N;){if(this.reset)for(this.reset=!1,k[0]=this.block,j=1;j<H+1;++j)k[j]=0;if(E)for(j=this.start;U<N&&j<D;++U)k[j>>2]|=h[U]<<R[j++&3];else for(j=this.start;U<N&&j<D;++U)nt=h.charCodeAt(U),nt<128?k[j>>2]|=nt<<R[j++&3]:nt<2048?(k[j>>2]|=(192|nt>>6)<<R[j++&3],k[j>>2]|=(128|nt&63)<<R[j++&3]):nt<55296||nt>=57344?(k[j>>2]|=(224|nt>>12)<<R[j++&3],k[j>>2]|=(128|nt>>6&63)<<R[j++&3],k[j>>2]|=(128|nt&63)<<R[j++&3]):(nt=65536+((nt&1023)<<10|h.charCodeAt(++U)&1023),k[j>>2]|=(240|nt>>18)<<R[j++&3],k[j>>2]|=(128|nt>>12&63)<<R[j++&3],k[j>>2]|=(128|nt>>6&63)<<R[j++&3],k[j>>2]|=(128|nt&63)<<R[j++&3]);if(this.lastByteIndex=j,j>=D){for(this.start=j-D,this.block=k[H],j=0;j<H;++j)Y[j]^=k[j];Z(Y),this.reset=!0}else this.start=j}return this},g.prototype.encode=function(h,E){var S=h&255,k=1,D=[S];for(h=h>>8,S=h&255;S>0;)D.unshift(S),h=h>>8,S=h&255,++k;return E?D.push(k):D.unshift(k),this.update(D),D.length},g.prototype.encodeString=function(h){var E,S=typeof h;if(S!=="string"){if(S==="object"){if(h===null)throw new Error(t);if(f&&h.constructor===ArrayBuffer)h=new Uint8Array(h);else if(!Array.isArray(h)&&(!f||!ArrayBuffer.isView(h)))throw new Error(t)}else throw new Error(t);E=!0}var k=0,D=h.length;if(E)k=D;else for(var N=0;N<h.length;++N){var H=h.charCodeAt(N);H<128?k+=1:H<2048?k+=2:H<55296||H>=57344?k+=3:(H=65536+((H&1023)<<10|h.charCodeAt(++N)&1023),k+=4)}return k+=this.encode(k*8),this.update(h),k},g.prototype.bytepad=function(h,E){for(var S=this.encode(E),k=0;k<h.length;++k)S+=this.encodeString(h[k]);var D=E-S%E,N=[];return N.length=D,this.update(N),this},g.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var h=this.blocks,E=this.lastByteIndex,S=this.blockCount,k=this.s;if(h[E>>2]|=this.padding[E&3],this.lastByteIndex===this.byteCount)for(h[0]=h[S],E=1;E<S+1;++E)h[E]=0;for(h[S-1]|=2147483648,E=0;E<S;++E)k[E]^=h[E];Z(k)}},g.prototype.toString=g.prototype.hex=function(){this.finalize();for(var h=this.blockCount,E=this.s,S=this.outputBlocks,k=this.extraBytes,D=0,N=0,H="",U;N<S;){for(D=0;D<h&&N<S;++D,++N)U=E[D],H+=m[U>>4&15]+m[U&15]+m[U>>12&15]+m[U>>8&15]+m[U>>20&15]+m[U>>16&15]+m[U>>28&15]+m[U>>24&15];N%h===0&&(Z(E),D=0)}return k&&(U=E[D],H+=m[U>>4&15]+m[U&15],k>1&&(H+=m[U>>12&15]+m[U>>8&15]),k>2&&(H+=m[U>>20&15]+m[U>>16&15])),H},g.prototype.arrayBuffer=function(){this.finalize();var h=this.blockCount,E=this.s,S=this.outputBlocks,k=this.extraBytes,D=0,N=0,H=this.outputBits>>3,U;k?U=new ArrayBuffer(S+1<<2):U=new ArrayBuffer(H);for(var Y=new Uint32Array(U);N<S;){for(D=0;D<h&&N<S;++D,++N)Y[N]=E[D];N%h===0&&Z(E)}return k&&(Y[D]=E[D],U=U.slice(0,H)),U},g.prototype.buffer=g.prototype.arrayBuffer,g.prototype.digest=g.prototype.array=function(){this.finalize();for(var h=this.blockCount,E=this.s,S=this.outputBlocks,k=this.extraBytes,D=0,N=0,H=[],U,Y;N<S;){for(D=0;D<h&&N<S;++D,++N)U=N<<2,Y=E[D],H[U]=Y&255,H[U+1]=Y>>8&255,H[U+2]=Y>>16&255,H[U+3]=Y>>24&255;N%h===0&&Z(E)}return k&&(U=N<<2,Y=E[D],H[U]=Y&255,k>1&&(H[U+1]=Y>>8&255),k>2&&(H[U+2]=Y>>16&255)),H};function W(h,E,S){g.call(this,h,E,S)}W.prototype=new g,W.prototype.finalize=function(){return this.encode(this.outputBits,!0),g.prototype.finalize.call(this)};var Z=function(h){var E,S,k,D,N,H,U,Y,j,nt,at,st,Ai,lt,ct,Mi,ut,ht,$i,dt,ft,Si,pt,gt,_i,vt,wt,Ei,mt,bt,ki,yt,xt,Bi,Ct,At,Ri,Mt,$t,Ii,St,_t,zi,Et,kt,Pi,Bt,Rt,Oi,It,zt,Li,Pt,Ot,Ni,Lt,Nt,ei,ii,ri,oi,ni,ai;for(k=0;k<48;k+=2)D=h[0]^h[10]^h[20]^h[30]^h[40],N=h[1]^h[11]^h[21]^h[31]^h[41],H=h[2]^h[12]^h[22]^h[32]^h[42],U=h[3]^h[13]^h[23]^h[33]^h[43],Y=h[4]^h[14]^h[24]^h[34]^h[44],j=h[5]^h[15]^h[25]^h[35]^h[45],nt=h[6]^h[16]^h[26]^h[36]^h[46],at=h[7]^h[17]^h[27]^h[37]^h[47],st=h[8]^h[18]^h[28]^h[38]^h[48],Ai=h[9]^h[19]^h[29]^h[39]^h[49],E=st^(H<<1|U>>>31),S=Ai^(U<<1|H>>>31),h[0]^=E,h[1]^=S,h[10]^=E,h[11]^=S,h[20]^=E,h[21]^=S,h[30]^=E,h[31]^=S,h[40]^=E,h[41]^=S,E=D^(Y<<1|j>>>31),S=N^(j<<1|Y>>>31),h[2]^=E,h[3]^=S,h[12]^=E,h[13]^=S,h[22]^=E,h[23]^=S,h[32]^=E,h[33]^=S,h[42]^=E,h[43]^=S,E=H^(nt<<1|at>>>31),S=U^(at<<1|nt>>>31),h[4]^=E,h[5]^=S,h[14]^=E,h[15]^=S,h[24]^=E,h[25]^=S,h[34]^=E,h[35]^=S,h[44]^=E,h[45]^=S,E=Y^(st<<1|Ai>>>31),S=j^(Ai<<1|st>>>31),h[6]^=E,h[7]^=S,h[16]^=E,h[17]^=S,h[26]^=E,h[27]^=S,h[36]^=E,h[37]^=S,h[46]^=E,h[47]^=S,E=nt^(D<<1|N>>>31),S=at^(N<<1|D>>>31),h[8]^=E,h[9]^=S,h[18]^=E,h[19]^=S,h[28]^=E,h[29]^=S,h[38]^=E,h[39]^=S,h[48]^=E,h[49]^=S,lt=h[0],ct=h[1],Pi=h[11]<<4|h[10]>>>28,Bt=h[10]<<4|h[11]>>>28,Ei=h[20]<<3|h[21]>>>29,mt=h[21]<<3|h[20]>>>29,ri=h[31]<<9|h[30]>>>23,oi=h[30]<<9|h[31]>>>23,_t=h[40]<<18|h[41]>>>14,zi=h[41]<<18|h[40]>>>14,Bi=h[2]<<1|h[3]>>>31,Ct=h[3]<<1|h[2]>>>31,Mi=h[13]<<12|h[12]>>>20,ut=h[12]<<12|h[13]>>>20,Rt=h[22]<<10|h[23]>>>22,Oi=h[23]<<10|h[22]>>>22,bt=h[33]<<13|h[32]>>>19,ki=h[32]<<13|h[33]>>>19,ni=h[42]<<2|h[43]>>>30,ai=h[43]<<2|h[42]>>>30,Ot=h[5]<<30|h[4]>>>2,Ni=h[4]<<30|h[5]>>>2,At=h[14]<<6|h[15]>>>26,Ri=h[15]<<6|h[14]>>>26,ht=h[25]<<11|h[24]>>>21,$i=h[24]<<11|h[25]>>>21,It=h[34]<<15|h[35]>>>17,zt=h[35]<<15|h[34]>>>17,yt=h[45]<<29|h[44]>>>3,xt=h[44]<<29|h[45]>>>3,gt=h[6]<<28|h[7]>>>4,_i=h[7]<<28|h[6]>>>4,Lt=h[17]<<23|h[16]>>>9,Nt=h[16]<<23|h[17]>>>9,Mt=h[26]<<25|h[27]>>>7,$t=h[27]<<25|h[26]>>>7,dt=h[36]<<21|h[37]>>>11,ft=h[37]<<21|h[36]>>>11,Li=h[47]<<24|h[46]>>>8,Pt=h[46]<<24|h[47]>>>8,Et=h[8]<<27|h[9]>>>5,kt=h[9]<<27|h[8]>>>5,vt=h[18]<<20|h[19]>>>12,wt=h[19]<<20|h[18]>>>12,ei=h[29]<<7|h[28]>>>25,ii=h[28]<<7|h[29]>>>25,Ii=h[38]<<8|h[39]>>>24,St=h[39]<<8|h[38]>>>24,Si=h[48]<<14|h[49]>>>18,pt=h[49]<<14|h[48]>>>18,h[0]=lt^~Mi&ht,h[1]=ct^~ut&$i,h[10]=gt^~vt&Ei,h[11]=_i^~wt&mt,h[20]=Bi^~At&Mt,h[21]=Ct^~Ri&$t,h[30]=Et^~Pi&Rt,h[31]=kt^~Bt&Oi,h[40]=Ot^~Lt&ei,h[41]=Ni^~Nt&ii,h[2]=Mi^~ht&dt,h[3]=ut^~$i&ft,h[12]=vt^~Ei&bt,h[13]=wt^~mt&ki,h[22]=At^~Mt&Ii,h[23]=Ri^~$t&St,h[32]=Pi^~Rt&It,h[33]=Bt^~Oi&zt,h[42]=Lt^~ei&ri,h[43]=Nt^~ii&oi,h[4]=ht^~dt&Si,h[5]=$i^~ft&pt,h[14]=Ei^~bt&yt,h[15]=mt^~ki&xt,h[24]=Mt^~Ii&_t,h[25]=$t^~St&zi,h[34]=Rt^~It&Li,h[35]=Oi^~zt&Pt,h[44]=ei^~ri&ni,h[45]=ii^~oi&ai,h[6]=dt^~Si&lt,h[7]=ft^~pt&ct,h[16]=bt^~yt&gt,h[17]=ki^~xt&_i,h[26]=Ii^~_t&Bi,h[27]=St^~zi&Ct,h[36]=It^~Li&Et,h[37]=zt^~Pt&kt,h[46]=ri^~ni&Ot,h[47]=oi^~ai&Ni,h[8]=Si^~lt&Mi,h[9]=pt^~ct&ut,h[18]=yt^~gt&vt,h[19]=xt^~_i&wt,h[28]=_t^~Bi&At,h[29]=zi^~Ct&Ri,h[38]=Li^~Et&Pi,h[39]=Pt^~kt&Bt,h[48]=ni^~Ot&Lt,h[49]=ai^~Ni&Nt,h[0]^=T[k],h[1]^=T[k+1]};if(l)i.exports=u;else for(v=0;v<d.length;++v)n[d[v]]=u[d[v]]})()})(fs);const ps="logger/5.7.0";let e1=!1,i1=!1;const Do={debug:1,default:2,info:2,warning:3,error:4,off:5};let r1=Do.default,Dn=null;function gs(){try{const i=[];if(["NFD","NFC","NFKD","NFKC"].forEach(t=>{try{if("test".normalize(t)!=="test")throw new Error("bad normalize")}catch{i.push(t)}}),i.length)throw new Error("missing "+i.join(", "));if("é".normalize("NFD")!=="é")throw new Error("broken implementation")}catch(i){return i.message}return null}const o1=gs();var h0;(function(i){i.DEBUG="DEBUG",i.INFO="INFO",i.WARNING="WARNING",i.ERROR="ERROR",i.OFF="OFF"})(h0||(h0={}));var we;(function(i){i.UNKNOWN_ERROR="UNKNOWN_ERROR",i.NOT_IMPLEMENTED="NOT_IMPLEMENTED",i.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",i.NETWORK_ERROR="NETWORK_ERROR",i.SERVER_ERROR="SERVER_ERROR",i.TIMEOUT="TIMEOUT",i.BUFFER_OVERRUN="BUFFER_OVERRUN",i.NUMERIC_FAULT="NUMERIC_FAULT",i.MISSING_NEW="MISSING_NEW",i.INVALID_ARGUMENT="INVALID_ARGUMENT",i.MISSING_ARGUMENT="MISSING_ARGUMENT",i.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",i.CALL_EXCEPTION="CALL_EXCEPTION",i.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",i.NONCE_EXPIRED="NONCE_EXPIRED",i.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",i.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",i.TRANSACTION_REPLACED="TRANSACTION_REPLACED",i.ACTION_REJECTED="ACTION_REJECTED"})(we||(we={}));const n1="0123456789abcdef";let Kt=class jt{constructor(t){Object.defineProperty(this,"version",{enumerable:!0,value:t,writable:!1})}_log(t,e){const r=t.toLowerCase();Do[r]==null&&this.throwArgumentError("invalid log level name","logLevel",t),!(r1>Do[r])&&console.log.apply(console,e)}debug(...t){this._log(jt.levels.DEBUG,t)}info(...t){this._log(jt.levels.INFO,t)}warn(...t){this._log(jt.levels.WARNING,t)}makeError(t,e,r){if(i1)return this.makeError("censored error",e,{});e||(e=jt.errors.UNKNOWN_ERROR),r||(r={});const n=[];Object.keys(r).forEach(f=>{const m=r[f];try{if(m instanceof Uint8Array){let x="";for(let C=0;C<m.length;C++)x+=n1[m[C]>>4],x+=n1[m[C]&15];n.push(f+"=Uint8Array(0x"+x+")")}else n.push(f+"="+JSON.stringify(m))}catch{n.push(f+"="+JSON.stringify(r[f].toString()))}}),n.push(`code=${e}`),n.push(`version=${this.version}`);const o=t;let a="";switch(e){case we.NUMERIC_FAULT:{a="NUMERIC_FAULT";const f=t;switch(f){case"overflow":case"underflow":case"division-by-zero":a+="-"+f;break;case"negative-power":case"negative-width":a+="-unsupported";break;case"unbound-bitwise-result":a+="-unbound-result";break}break}case we.CALL_EXCEPTION:case we.INSUFFICIENT_FUNDS:case we.MISSING_NEW:case we.NONCE_EXPIRED:case we.REPLACEMENT_UNDERPRICED:case we.TRANSACTION_REPLACED:case we.UNPREDICTABLE_GAS_LIMIT:a=e;break}a&&(t+=" [ See: https://links.ethers.org/v5-errors-"+a+" ]"),n.length&&(t+=" ("+n.join(", ")+")");const l=new Error(t);return l.reason=o,l.code=e,Object.keys(r).forEach(function(f){l[f]=r[f]}),l}throwError(t,e,r){throw this.makeError(t,e,r)}throwArgumentError(t,e,r){return this.throwError(t,jt.errors.INVALID_ARGUMENT,{argument:e,value:r})}assert(t,e,r,n){t||this.throwError(e,r,n)}assertArgument(t,e,r,n){t||this.throwArgumentError(e,r,n)}checkNormalize(t){o1&&this.throwError("platform missing String.prototype.normalize",jt.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:o1})}checkSafeUint53(t,e){typeof t=="number"&&(e==null&&(e="value not safe"),(t<0||t>=9007199254740991)&&this.throwError(e,jt.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:t}),t%1&&this.throwError(e,jt.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:t}))}checkArgumentCount(t,e,r){r?r=": "+r:r="",t<e&&this.throwError("missing argument"+r,jt.errors.MISSING_ARGUMENT,{count:t,expectedCount:e}),t>e&&this.throwError("too many arguments"+r,jt.errors.UNEXPECTED_ARGUMENT,{count:t,expectedCount:e})}checkNew(t,e){(t===Object||t==null)&&this.throwError("missing new",jt.errors.MISSING_NEW,{name:e.name})}checkAbstract(t,e){t===e?this.throwError("cannot instantiate abstract class "+JSON.stringify(e.name)+" directly; use a sub-class",jt.errors.UNSUPPORTED_OPERATION,{name:t.name,operation:"new"}):(t===Object||t==null)&&this.throwError("missing new",jt.errors.MISSING_NEW,{name:e.name})}static globalLogger(){return Dn||(Dn=new jt(ps)),Dn}static setCensorship(t,e){if(!t&&e&&this.globalLogger().throwError("cannot permanently disable censorship",jt.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),e1){if(!t)return;this.globalLogger().throwError("error censorship permanent",jt.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}i1=!!t,e1=!!e}static setLogLevel(t){const e=Do[t.toLowerCase()];if(e==null){jt.globalLogger().warn("invalid log level - "+t);return}r1=e}static from(t){return new jt(t)}};Kt.errors=we,Kt.levels=h0;const vs="bytes/5.7.0",di=new Kt(vs);function q1(i){return!!i.toHexString}function Zo(i){return i.slice||(i.slice=function(){const t=Array.prototype.slice.call(arguments);return Zo(new Uint8Array(Array.prototype.slice.apply(i,t)))}),i}function a1(i){return typeof i=="number"&&i==i&&i%1===0}function Ao(i){if(i==null)return!1;if(i.constructor===Uint8Array)return!0;if(typeof i=="string"||!a1(i.length)||i.length<0)return!1;for(let t=0;t<i.length;t++){const e=i[t];if(!a1(e)||e<0||e>=256)return!1}return!0}function G1(i,t){if(t||(t={}),typeof i=="number"){di.checkSafeUint53(i,"invalid arrayify value");const e=[];for(;i;)e.unshift(i&255),i=parseInt(String(i/256));return e.length===0&&e.push(0),Zo(new Uint8Array(e))}if(t.allowMissingPrefix&&typeof i=="string"&&i.substring(0,2)!=="0x"&&(i="0x"+i),q1(i)&&(i=i.toHexString()),vr(i)){let e=i.substring(2);e.length%2&&(t.hexPad==="left"?e="0"+e:t.hexPad==="right"?e+="0":di.throwArgumentError("hex data is odd-length","value",i));const r=[];for(let n=0;n<e.length;n+=2)r.push(parseInt(e.substring(n,n+2),16));return Zo(new Uint8Array(r))}return Ao(i)?Zo(new Uint8Array(i)):di.throwArgumentError("invalid arrayify value","value",i)}function vr(i,t){return!(typeof i!="string"||!i.match(/^0x[0-9A-Fa-f]*$/)||t)}const Zn="0123456789abcdef";function Q1(i,t){if(t||(t={}),typeof i=="number"){di.checkSafeUint53(i,"invalid hexlify value");let e="";for(;i;)e=Zn[i&15]+e,i=Math.floor(i/16);return e.length?(e.length%2&&(e="0"+e),"0x"+e):"0x00"}if(typeof i=="bigint")return i=i.toString(16),i.length%2?"0x0"+i:"0x"+i;if(t.allowMissingPrefix&&typeof i=="string"&&i.substring(0,2)!=="0x"&&(i="0x"+i),q1(i))return i.toHexString();if(vr(i))return i.length%2&&(t.hexPad==="left"?i="0x0"+i.substring(2):t.hexPad==="right"?i+="0":di.throwArgumentError("hex data is odd-length","value",i)),i.toLowerCase();if(Ao(i)){let e="0x";for(let r=0;r<i.length;r++){let n=i[r];e+=Zn[(n&240)>>4]+Zn[n&15]}return e}return di.throwArgumentError("invalid hexlify value","value",i)}function Go(i,t){for(typeof i!="string"?i=Q1(i):vr(i)||di.throwArgumentError("invalid hex string","value",i),i.length>2*t+2&&di.throwArgumentError("value out of range","value",arguments[1]);i.length<2*t+2;)i="0x0"+i.substring(2);return i}var Y1={exports:{}},ws={},ms=Object.freeze({__proto__:null,default:ws}),bs=ds(ms);(function(i){(function(t,e){function r(s,u){if(!s)throw new Error(u||"Assertion failed")}function n(s,u){s.super_=u;var d=function(){};d.prototype=u.prototype,s.prototype=new d,s.prototype.constructor=s}function o(s,u,d){if(o.isBN(s))return s;this.negative=0,this.words=null,this.length=0,this.red=null,s!==null&&((u==="le"||u==="be")&&(d=u,u=10),this._init(s||0,u||10,d||"be"))}typeof t=="object"?t.exports=o:e.BN=o,o.BN=o,o.wordSize=26;var a;try{typeof window<"u"&&typeof window.Buffer<"u"?a=window.Buffer:a=bs.Buffer}catch{}o.isBN=function(s){return s instanceof o?!0:s!==null&&typeof s=="object"&&s.constructor.wordSize===o.wordSize&&Array.isArray(s.words)},o.max=function(s,u){return s.cmp(u)>0?s:u},o.min=function(s,u){return s.cmp(u)<0?s:u},o.prototype._init=function(s,u,d){if(typeof s=="number")return this._initNumber(s,u,d);if(typeof s=="object")return this._initArray(s,u,d);u==="hex"&&(u=16),r(u===(u|0)&&u>=2&&u<=36),s=s.toString().replace(/\s+/g,"");var v=0;s[0]==="-"&&(v++,this.negative=1),v<s.length&&(u===16?this._parseHex(s,v,d):(this._parseBase(s,u,v),d==="le"&&this._initArray(this.toArray(),u,d)))},o.prototype._initNumber=function(s,u,d){s<0&&(this.negative=1,s=-s),s<67108864?(this.words=[s&67108863],this.length=1):s<4503599627370496?(this.words=[s&67108863,s/67108864&67108863],this.length=2):(r(s<9007199254740992),this.words=[s&67108863,s/67108864&67108863,1],this.length=3),d==="le"&&this._initArray(this.toArray(),u,d)},o.prototype._initArray=function(s,u,d){if(r(typeof s.length=="number"),s.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(s.length/3),this.words=new Array(this.length);for(var v=0;v<this.length;v++)this.words[v]=0;var b,y,M=0;if(d==="be")for(v=s.length-1,b=0;v>=0;v-=3)y=s[v]|s[v-1]<<8|s[v-2]<<16,this.words[b]|=y<<M&67108863,this.words[b+1]=y>>>26-M&67108863,M+=24,M>=26&&(M-=26,b++);else if(d==="le")for(v=0,b=0;v<s.length;v+=3)y=s[v]|s[v+1]<<8|s[v+2]<<16,this.words[b]|=y<<M&67108863,this.words[b+1]=y>>>26-M&67108863,M+=24,M>=26&&(M-=26,b++);return this._strip()};function l(s,u){var d=s.charCodeAt(u);if(d>=48&&d<=57)return d-48;if(d>=65&&d<=70)return d-55;if(d>=97&&d<=102)return d-87;r(!1,"Invalid character in "+s)}function f(s,u,d){var v=l(s,d);return d-1>=u&&(v|=l(s,d-1)<<4),v}o.prototype._parseHex=function(s,u,d){this.length=Math.ceil((s.length-u)/6),this.words=new Array(this.length);for(var v=0;v<this.length;v++)this.words[v]=0;var b=0,y=0,M;if(d==="be")for(v=s.length-1;v>=u;v-=2)M=f(s,u,v)<<b,this.words[y]|=M&67108863,b>=18?(b-=18,y+=1,this.words[y]|=M>>>26):b+=8;else{var w=s.length-u;for(v=w%2===0?u+1:u;v<s.length;v+=2)M=f(s,u,v)<<b,this.words[y]|=M&67108863,b>=18?(b-=18,y+=1,this.words[y]|=M>>>26):b+=8}this._strip()};function m(s,u,d,v){for(var b=0,y=0,M=Math.min(s.length,d),w=u;w<M;w++){var c=s.charCodeAt(w)-48;b*=v,c>=49?y=c-49+10:c>=17?y=c-17+10:y=c,r(c>=0&&y<v,"Invalid character"),b+=y}return b}o.prototype._parseBase=function(s,u,d){this.words=[0],this.length=1;for(var v=0,b=1;b<=67108863;b*=u)v++;v--,b=b/u|0;for(var y=s.length-d,M=y%v,w=Math.min(y,y-M)+d,c=0,g=d;g<w;g+=v)c=m(s,g,g+v,u),this.imuln(b),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c);if(M!==0){var W=1;for(c=m(s,g,s.length,u),g=0;g<M;g++)W*=u;this.imuln(W),this.words[0]+c<67108864?this.words[0]+=c:this._iaddn(c)}this._strip()},o.prototype.copy=function(s){s.words=new Array(this.length);for(var u=0;u<this.length;u++)s.words[u]=this.words[u];s.length=this.length,s.negative=this.negative,s.red=this.red};function x(s,u){s.words=u.words,s.length=u.length,s.negative=u.negative,s.red=u.red}if(o.prototype._move=function(s){x(s,this)},o.prototype.clone=function(){var s=new o(null);return this.copy(s),s},o.prototype._expand=function(s){for(;this.length<s;)this.words[this.length++]=0;return this},o.prototype._strip=function(){for(;this.length>1&&this.words[this.length-1]===0;)this.length--;return this._normSign()},o.prototype._normSign=function(){return this.length===1&&this.words[0]===0&&(this.negative=0),this},typeof Symbol<"u"&&typeof Symbol.for=="function")try{o.prototype[Symbol.for("nodejs.util.inspect.custom")]=C}catch{o.prototype.inspect=C}else o.prototype.inspect=C;function C(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}var $=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],_=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],R=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];o.prototype.toString=function(s,u){s=s||10,u=u|0||1;var d;if(s===16||s==="hex"){d="";for(var v=0,b=0,y=0;y<this.length;y++){var M=this.words[y],w=((M<<v|b)&16777215).toString(16);b=M>>>24-v&16777215,v+=2,v>=26&&(v-=26,y--),b!==0||y!==this.length-1?d=$[6-w.length]+w+d:d=w+d}for(b!==0&&(d=b.toString(16)+d);d.length%u!==0;)d="0"+d;return this.negative!==0&&(d="-"+d),d}if(s===(s|0)&&s>=2&&s<=36){var c=_[s],g=R[s];d="";var W=this.clone();for(W.negative=0;!W.isZero();){var Z=W.modrn(g).toString(s);W=W.idivn(g),W.isZero()?d=Z+d:d=$[c-Z.length]+Z+d}for(this.isZero()&&(d="0"+d);d.length%u!==0;)d="0"+d;return this.negative!==0&&(d="-"+d),d}r(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var s=this.words[0];return this.length===2?s+=this.words[1]*67108864:this.length===3&&this.words[2]===1?s+=4503599627370496+this.words[1]*67108864:this.length>2&&r(!1,"Number can only safely store up to 53 bits"),this.negative!==0?-s:s},o.prototype.toJSON=function(){return this.toString(16,2)},a&&(o.prototype.toBuffer=function(s,u){return this.toArrayLike(a,s,u)}),o.prototype.toArray=function(s,u){return this.toArrayLike(Array,s,u)};var T=function(s,u){return s.allocUnsafe?s.allocUnsafe(u):new s(u)};o.prototype.toArrayLike=function(s,u,d){this._strip();var v=this.byteLength(),b=d||Math.max(1,v);r(v<=b,"byte array longer than desired length"),r(b>0,"Requested array length <= 0");var y=T(s,b),M=u==="le"?"LE":"BE";return this["_toArrayLike"+M](y,v),y},o.prototype._toArrayLikeLE=function(s,u){for(var d=0,v=0,b=0,y=0;b<this.length;b++){var M=this.words[b]<<y|v;s[d++]=M&255,d<s.length&&(s[d++]=M>>8&255),d<s.length&&(s[d++]=M>>16&255),y===6?(d<s.length&&(s[d++]=M>>24&255),v=0,y=0):(v=M>>>24,y+=2)}if(d<s.length)for(s[d++]=v;d<s.length;)s[d++]=0},o.prototype._toArrayLikeBE=function(s,u){for(var d=s.length-1,v=0,b=0,y=0;b<this.length;b++){var M=this.words[b]<<y|v;s[d--]=M&255,d>=0&&(s[d--]=M>>8&255),d>=0&&(s[d--]=M>>16&255),y===6?(d>=0&&(s[d--]=M>>24&255),v=0,y=0):(v=M>>>24,y+=2)}if(d>=0)for(s[d--]=v;d>=0;)s[d--]=0},Math.clz32?o.prototype._countBits=function(s){return 32-Math.clz32(s)}:o.prototype._countBits=function(s){var u=s,d=0;return u>=4096&&(d+=13,u>>>=13),u>=64&&(d+=7,u>>>=7),u>=8&&(d+=4,u>>>=4),u>=2&&(d+=2,u>>>=2),d+u},o.prototype._zeroBits=function(s){if(s===0)return 26;var u=s,d=0;return u&8191||(d+=13,u>>>=13),u&127||(d+=7,u>>>=7),u&15||(d+=4,u>>>=4),u&3||(d+=2,u>>>=2),u&1||d++,d},o.prototype.bitLength=function(){var s=this.words[this.length-1],u=this._countBits(s);return(this.length-1)*26+u};function I(s){for(var u=new Array(s.bitLength()),d=0;d<u.length;d++){var v=d/26|0,b=d%26;u[d]=s.words[v]>>>b&1}return u}o.prototype.zeroBits=function(){if(this.isZero())return 0;for(var s=0,u=0;u<this.length;u++){var d=this._zeroBits(this.words[u]);if(s+=d,d!==26)break}return s},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(s){return this.negative!==0?this.abs().inotn(s).iaddn(1):this.clone()},o.prototype.fromTwos=function(s){return this.testn(s-1)?this.notn(s).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return this.negative!==0},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(s){for(;this.length<s.length;)this.words[this.length++]=0;for(var u=0;u<s.length;u++)this.words[u]=this.words[u]|s.words[u];return this._strip()},o.prototype.ior=function(s){return r((this.negative|s.negative)===0),this.iuor(s)},o.prototype.or=function(s){return this.length>s.length?this.clone().ior(s):s.clone().ior(this)},o.prototype.uor=function(s){return this.length>s.length?this.clone().iuor(s):s.clone().iuor(this)},o.prototype.iuand=function(s){var u;this.length>s.length?u=s:u=this;for(var d=0;d<u.length;d++)this.words[d]=this.words[d]&s.words[d];return this.length=u.length,this._strip()},o.prototype.iand=function(s){return r((this.negative|s.negative)===0),this.iuand(s)},o.prototype.and=function(s){return this.length>s.length?this.clone().iand(s):s.clone().iand(this)},o.prototype.uand=function(s){return this.length>s.length?this.clone().iuand(s):s.clone().iuand(this)},o.prototype.iuxor=function(s){var u,d;this.length>s.length?(u=this,d=s):(u=s,d=this);for(var v=0;v<d.length;v++)this.words[v]=u.words[v]^d.words[v];if(this!==u)for(;v<u.length;v++)this.words[v]=u.words[v];return this.length=u.length,this._strip()},o.prototype.ixor=function(s){return r((this.negative|s.negative)===0),this.iuxor(s)},o.prototype.xor=function(s){return this.length>s.length?this.clone().ixor(s):s.clone().ixor(this)},o.prototype.uxor=function(s){return this.length>s.length?this.clone().iuxor(s):s.clone().iuxor(this)},o.prototype.inotn=function(s){r(typeof s=="number"&&s>=0);var u=Math.ceil(s/26)|0,d=s%26;this._expand(u),d>0&&u--;for(var v=0;v<u;v++)this.words[v]=~this.words[v]&67108863;return d>0&&(this.words[v]=~this.words[v]&67108863>>26-d),this._strip()},o.prototype.notn=function(s){return this.clone().inotn(s)},o.prototype.setn=function(s,u){r(typeof s=="number"&&s>=0);var d=s/26|0,v=s%26;return this._expand(d+1),u?this.words[d]=this.words[d]|1<<v:this.words[d]=this.words[d]&~(1<<v),this._strip()},o.prototype.iadd=function(s){var u;if(this.negative!==0&&s.negative===0)return this.negative=0,u=this.isub(s),this.negative^=1,this._normSign();if(this.negative===0&&s.negative!==0)return s.negative=0,u=this.isub(s),s.negative=1,u._normSign();var d,v;this.length>s.length?(d=this,v=s):(d=s,v=this);for(var b=0,y=0;y<v.length;y++)u=(d.words[y]|0)+(v.words[y]|0)+b,this.words[y]=u&67108863,b=u>>>26;for(;b!==0&&y<d.length;y++)u=(d.words[y]|0)+b,this.words[y]=u&67108863,b=u>>>26;if(this.length=d.length,b!==0)this.words[this.length]=b,this.length++;else if(d!==this)for(;y<d.length;y++)this.words[y]=d.words[y];return this},o.prototype.add=function(s){var u;return s.negative!==0&&this.negative===0?(s.negative=0,u=this.sub(s),s.negative^=1,u):s.negative===0&&this.negative!==0?(this.negative=0,u=s.sub(this),this.negative=1,u):this.length>s.length?this.clone().iadd(s):s.clone().iadd(this)},o.prototype.isub=function(s){if(s.negative!==0){s.negative=0;var u=this.iadd(s);return s.negative=1,u._normSign()}else if(this.negative!==0)return this.negative=0,this.iadd(s),this.negative=1,this._normSign();var d=this.cmp(s);if(d===0)return this.negative=0,this.length=1,this.words[0]=0,this;var v,b;d>0?(v=this,b=s):(v=s,b=this);for(var y=0,M=0;M<b.length;M++)u=(v.words[M]|0)-(b.words[M]|0)+y,y=u>>26,this.words[M]=u&67108863;for(;y!==0&&M<v.length;M++)u=(v.words[M]|0)+y,y=u>>26,this.words[M]=u&67108863;if(y===0&&M<v.length&&v!==this)for(;M<v.length;M++)this.words[M]=v.words[M];return this.length=Math.max(this.length,M),v!==this&&(this.negative=1),this._strip()},o.prototype.sub=function(s){return this.clone().isub(s)};function F(s,u,d){d.negative=u.negative^s.negative;var v=s.length+u.length|0;d.length=v,v=v-1|0;var b=s.words[0]|0,y=u.words[0]|0,M=b*y,w=M&67108863,c=M/67108864|0;d.words[0]=w;for(var g=1;g<v;g++){for(var W=c>>>26,Z=c&67108863,h=Math.min(g,u.length-1),E=Math.max(0,g-s.length+1);E<=h;E++){var S=g-E|0;b=s.words[S]|0,y=u.words[E]|0,M=b*y+Z,W+=M/67108864|0,Z=M&67108863}d.words[g]=Z|0,c=W|0}return c!==0?d.words[g]=c|0:d.length--,d._strip()}var V=function(s,u,d){var v=s.words,b=u.words,y=d.words,M=0,w,c,g,W=v[0]|0,Z=W&8191,h=W>>>13,E=v[1]|0,S=E&8191,k=E>>>13,D=v[2]|0,N=D&8191,H=D>>>13,U=v[3]|0,Y=U&8191,j=U>>>13,nt=v[4]|0,at=nt&8191,st=nt>>>13,Ai=v[5]|0,lt=Ai&8191,ct=Ai>>>13,Mi=v[6]|0,ut=Mi&8191,ht=Mi>>>13,$i=v[7]|0,dt=$i&8191,ft=$i>>>13,Si=v[8]|0,pt=Si&8191,gt=Si>>>13,_i=v[9]|0,vt=_i&8191,wt=_i>>>13,Ei=b[0]|0,mt=Ei&8191,bt=Ei>>>13,ki=b[1]|0,yt=ki&8191,xt=ki>>>13,Bi=b[2]|0,Ct=Bi&8191,At=Bi>>>13,Ri=b[3]|0,Mt=Ri&8191,$t=Ri>>>13,Ii=b[4]|0,St=Ii&8191,_t=Ii>>>13,zi=b[5]|0,Et=zi&8191,kt=zi>>>13,Pi=b[6]|0,Bt=Pi&8191,Rt=Pi>>>13,Oi=b[7]|0,It=Oi&8191,zt=Oi>>>13,Li=b[8]|0,Pt=Li&8191,Ot=Li>>>13,Ni=b[9]|0,Lt=Ni&8191,Nt=Ni>>>13;d.negative=s.negative^u.negative,d.length=19,w=Math.imul(Z,mt),c=Math.imul(Z,bt),c=c+Math.imul(h,mt)|0,g=Math.imul(h,bt);var ei=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(ei>>>26)|0,ei&=67108863,w=Math.imul(S,mt),c=Math.imul(S,bt),c=c+Math.imul(k,mt)|0,g=Math.imul(k,bt),w=w+Math.imul(Z,yt)|0,c=c+Math.imul(Z,xt)|0,c=c+Math.imul(h,yt)|0,g=g+Math.imul(h,xt)|0;var ii=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(ii>>>26)|0,ii&=67108863,w=Math.imul(N,mt),c=Math.imul(N,bt),c=c+Math.imul(H,mt)|0,g=Math.imul(H,bt),w=w+Math.imul(S,yt)|0,c=c+Math.imul(S,xt)|0,c=c+Math.imul(k,yt)|0,g=g+Math.imul(k,xt)|0,w=w+Math.imul(Z,Ct)|0,c=c+Math.imul(Z,At)|0,c=c+Math.imul(h,Ct)|0,g=g+Math.imul(h,At)|0;var ri=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(ri>>>26)|0,ri&=67108863,w=Math.imul(Y,mt),c=Math.imul(Y,bt),c=c+Math.imul(j,mt)|0,g=Math.imul(j,bt),w=w+Math.imul(N,yt)|0,c=c+Math.imul(N,xt)|0,c=c+Math.imul(H,yt)|0,g=g+Math.imul(H,xt)|0,w=w+Math.imul(S,Ct)|0,c=c+Math.imul(S,At)|0,c=c+Math.imul(k,Ct)|0,g=g+Math.imul(k,At)|0,w=w+Math.imul(Z,Mt)|0,c=c+Math.imul(Z,$t)|0,c=c+Math.imul(h,Mt)|0,g=g+Math.imul(h,$t)|0;var oi=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(oi>>>26)|0,oi&=67108863,w=Math.imul(at,mt),c=Math.imul(at,bt),c=c+Math.imul(st,mt)|0,g=Math.imul(st,bt),w=w+Math.imul(Y,yt)|0,c=c+Math.imul(Y,xt)|0,c=c+Math.imul(j,yt)|0,g=g+Math.imul(j,xt)|0,w=w+Math.imul(N,Ct)|0,c=c+Math.imul(N,At)|0,c=c+Math.imul(H,Ct)|0,g=g+Math.imul(H,At)|0,w=w+Math.imul(S,Mt)|0,c=c+Math.imul(S,$t)|0,c=c+Math.imul(k,Mt)|0,g=g+Math.imul(k,$t)|0,w=w+Math.imul(Z,St)|0,c=c+Math.imul(Z,_t)|0,c=c+Math.imul(h,St)|0,g=g+Math.imul(h,_t)|0;var ni=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(ni>>>26)|0,ni&=67108863,w=Math.imul(lt,mt),c=Math.imul(lt,bt),c=c+Math.imul(ct,mt)|0,g=Math.imul(ct,bt),w=w+Math.imul(at,yt)|0,c=c+Math.imul(at,xt)|0,c=c+Math.imul(st,yt)|0,g=g+Math.imul(st,xt)|0,w=w+Math.imul(Y,Ct)|0,c=c+Math.imul(Y,At)|0,c=c+Math.imul(j,Ct)|0,g=g+Math.imul(j,At)|0,w=w+Math.imul(N,Mt)|0,c=c+Math.imul(N,$t)|0,c=c+Math.imul(H,Mt)|0,g=g+Math.imul(H,$t)|0,w=w+Math.imul(S,St)|0,c=c+Math.imul(S,_t)|0,c=c+Math.imul(k,St)|0,g=g+Math.imul(k,_t)|0,w=w+Math.imul(Z,Et)|0,c=c+Math.imul(Z,kt)|0,c=c+Math.imul(h,Et)|0,g=g+Math.imul(h,kt)|0;var ai=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(ai>>>26)|0,ai&=67108863,w=Math.imul(ut,mt),c=Math.imul(ut,bt),c=c+Math.imul(ht,mt)|0,g=Math.imul(ht,bt),w=w+Math.imul(lt,yt)|0,c=c+Math.imul(lt,xt)|0,c=c+Math.imul(ct,yt)|0,g=g+Math.imul(ct,xt)|0,w=w+Math.imul(at,Ct)|0,c=c+Math.imul(at,At)|0,c=c+Math.imul(st,Ct)|0,g=g+Math.imul(st,At)|0,w=w+Math.imul(Y,Mt)|0,c=c+Math.imul(Y,$t)|0,c=c+Math.imul(j,Mt)|0,g=g+Math.imul(j,$t)|0,w=w+Math.imul(N,St)|0,c=c+Math.imul(N,_t)|0,c=c+Math.imul(H,St)|0,g=g+Math.imul(H,_t)|0,w=w+Math.imul(S,Et)|0,c=c+Math.imul(S,kt)|0,c=c+Math.imul(k,Et)|0,g=g+Math.imul(k,kt)|0,w=w+Math.imul(Z,Bt)|0,c=c+Math.imul(Z,Rt)|0,c=c+Math.imul(h,Bt)|0,g=g+Math.imul(h,Rt)|0;var En=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(En>>>26)|0,En&=67108863,w=Math.imul(dt,mt),c=Math.imul(dt,bt),c=c+Math.imul(ft,mt)|0,g=Math.imul(ft,bt),w=w+Math.imul(ut,yt)|0,c=c+Math.imul(ut,xt)|0,c=c+Math.imul(ht,yt)|0,g=g+Math.imul(ht,xt)|0,w=w+Math.imul(lt,Ct)|0,c=c+Math.imul(lt,At)|0,c=c+Math.imul(ct,Ct)|0,g=g+Math.imul(ct,At)|0,w=w+Math.imul(at,Mt)|0,c=c+Math.imul(at,$t)|0,c=c+Math.imul(st,Mt)|0,g=g+Math.imul(st,$t)|0,w=w+Math.imul(Y,St)|0,c=c+Math.imul(Y,_t)|0,c=c+Math.imul(j,St)|0,g=g+Math.imul(j,_t)|0,w=w+Math.imul(N,Et)|0,c=c+Math.imul(N,kt)|0,c=c+Math.imul(H,Et)|0,g=g+Math.imul(H,kt)|0,w=w+Math.imul(S,Bt)|0,c=c+Math.imul(S,Rt)|0,c=c+Math.imul(k,Bt)|0,g=g+Math.imul(k,Rt)|0,w=w+Math.imul(Z,It)|0,c=c+Math.imul(Z,zt)|0,c=c+Math.imul(h,It)|0,g=g+Math.imul(h,zt)|0;var kn=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(kn>>>26)|0,kn&=67108863,w=Math.imul(pt,mt),c=Math.imul(pt,bt),c=c+Math.imul(gt,mt)|0,g=Math.imul(gt,bt),w=w+Math.imul(dt,yt)|0,c=c+Math.imul(dt,xt)|0,c=c+Math.imul(ft,yt)|0,g=g+Math.imul(ft,xt)|0,w=w+Math.imul(ut,Ct)|0,c=c+Math.imul(ut,At)|0,c=c+Math.imul(ht,Ct)|0,g=g+Math.imul(ht,At)|0,w=w+Math.imul(lt,Mt)|0,c=c+Math.imul(lt,$t)|0,c=c+Math.imul(ct,Mt)|0,g=g+Math.imul(ct,$t)|0,w=w+Math.imul(at,St)|0,c=c+Math.imul(at,_t)|0,c=c+Math.imul(st,St)|0,g=g+Math.imul(st,_t)|0,w=w+Math.imul(Y,Et)|0,c=c+Math.imul(Y,kt)|0,c=c+Math.imul(j,Et)|0,g=g+Math.imul(j,kt)|0,w=w+Math.imul(N,Bt)|0,c=c+Math.imul(N,Rt)|0,c=c+Math.imul(H,Bt)|0,g=g+Math.imul(H,Rt)|0,w=w+Math.imul(S,It)|0,c=c+Math.imul(S,zt)|0,c=c+Math.imul(k,It)|0,g=g+Math.imul(k,zt)|0,w=w+Math.imul(Z,Pt)|0,c=c+Math.imul(Z,Ot)|0,c=c+Math.imul(h,Pt)|0,g=g+Math.imul(h,Ot)|0;var Bn=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(Bn>>>26)|0,Bn&=67108863,w=Math.imul(vt,mt),c=Math.imul(vt,bt),c=c+Math.imul(wt,mt)|0,g=Math.imul(wt,bt),w=w+Math.imul(pt,yt)|0,c=c+Math.imul(pt,xt)|0,c=c+Math.imul(gt,yt)|0,g=g+Math.imul(gt,xt)|0,w=w+Math.imul(dt,Ct)|0,c=c+Math.imul(dt,At)|0,c=c+Math.imul(ft,Ct)|0,g=g+Math.imul(ft,At)|0,w=w+Math.imul(ut,Mt)|0,c=c+Math.imul(ut,$t)|0,c=c+Math.imul(ht,Mt)|0,g=g+Math.imul(ht,$t)|0,w=w+Math.imul(lt,St)|0,c=c+Math.imul(lt,_t)|0,c=c+Math.imul(ct,St)|0,g=g+Math.imul(ct,_t)|0,w=w+Math.imul(at,Et)|0,c=c+Math.imul(at,kt)|0,c=c+Math.imul(st,Et)|0,g=g+Math.imul(st,kt)|0,w=w+Math.imul(Y,Bt)|0,c=c+Math.imul(Y,Rt)|0,c=c+Math.imul(j,Bt)|0,g=g+Math.imul(j,Rt)|0,w=w+Math.imul(N,It)|0,c=c+Math.imul(N,zt)|0,c=c+Math.imul(H,It)|0,g=g+Math.imul(H,zt)|0,w=w+Math.imul(S,Pt)|0,c=c+Math.imul(S,Ot)|0,c=c+Math.imul(k,Pt)|0,g=g+Math.imul(k,Ot)|0,w=w+Math.imul(Z,Lt)|0,c=c+Math.imul(Z,Nt)|0,c=c+Math.imul(h,Lt)|0,g=g+Math.imul(h,Nt)|0;var Rn=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(Rn>>>26)|0,Rn&=67108863,w=Math.imul(vt,yt),c=Math.imul(vt,xt),c=c+Math.imul(wt,yt)|0,g=Math.imul(wt,xt),w=w+Math.imul(pt,Ct)|0,c=c+Math.imul(pt,At)|0,c=c+Math.imul(gt,Ct)|0,g=g+Math.imul(gt,At)|0,w=w+Math.imul(dt,Mt)|0,c=c+Math.imul(dt,$t)|0,c=c+Math.imul(ft,Mt)|0,g=g+Math.imul(ft,$t)|0,w=w+Math.imul(ut,St)|0,c=c+Math.imul(ut,_t)|0,c=c+Math.imul(ht,St)|0,g=g+Math.imul(ht,_t)|0,w=w+Math.imul(lt,Et)|0,c=c+Math.imul(lt,kt)|0,c=c+Math.imul(ct,Et)|0,g=g+Math.imul(ct,kt)|0,w=w+Math.imul(at,Bt)|0,c=c+Math.imul(at,Rt)|0,c=c+Math.imul(st,Bt)|0,g=g+Math.imul(st,Rt)|0,w=w+Math.imul(Y,It)|0,c=c+Math.imul(Y,zt)|0,c=c+Math.imul(j,It)|0,g=g+Math.imul(j,zt)|0,w=w+Math.imul(N,Pt)|0,c=c+Math.imul(N,Ot)|0,c=c+Math.imul(H,Pt)|0,g=g+Math.imul(H,Ot)|0,w=w+Math.imul(S,Lt)|0,c=c+Math.imul(S,Nt)|0,c=c+Math.imul(k,Lt)|0,g=g+Math.imul(k,Nt)|0;var In=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(In>>>26)|0,In&=67108863,w=Math.imul(vt,Ct),c=Math.imul(vt,At),c=c+Math.imul(wt,Ct)|0,g=Math.imul(wt,At),w=w+Math.imul(pt,Mt)|0,c=c+Math.imul(pt,$t)|0,c=c+Math.imul(gt,Mt)|0,g=g+Math.imul(gt,$t)|0,w=w+Math.imul(dt,St)|0,c=c+Math.imul(dt,_t)|0,c=c+Math.imul(ft,St)|0,g=g+Math.imul(ft,_t)|0,w=w+Math.imul(ut,Et)|0,c=c+Math.imul(ut,kt)|0,c=c+Math.imul(ht,Et)|0,g=g+Math.imul(ht,kt)|0,w=w+Math.imul(lt,Bt)|0,c=c+Math.imul(lt,Rt)|0,c=c+Math.imul(ct,Bt)|0,g=g+Math.imul(ct,Rt)|0,w=w+Math.imul(at,It)|0,c=c+Math.imul(at,zt)|0,c=c+Math.imul(st,It)|0,g=g+Math.imul(st,zt)|0,w=w+Math.imul(Y,Pt)|0,c=c+Math.imul(Y,Ot)|0,c=c+Math.imul(j,Pt)|0,g=g+Math.imul(j,Ot)|0,w=w+Math.imul(N,Lt)|0,c=c+Math.imul(N,Nt)|0,c=c+Math.imul(H,Lt)|0,g=g+Math.imul(H,Nt)|0;var zn=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(zn>>>26)|0,zn&=67108863,w=Math.imul(vt,Mt),c=Math.imul(vt,$t),c=c+Math.imul(wt,Mt)|0,g=Math.imul(wt,$t),w=w+Math.imul(pt,St)|0,c=c+Math.imul(pt,_t)|0,c=c+Math.imul(gt,St)|0,g=g+Math.imul(gt,_t)|0,w=w+Math.imul(dt,Et)|0,c=c+Math.imul(dt,kt)|0,c=c+Math.imul(ft,Et)|0,g=g+Math.imul(ft,kt)|0,w=w+Math.imul(ut,Bt)|0,c=c+Math.imul(ut,Rt)|0,c=c+Math.imul(ht,Bt)|0,g=g+Math.imul(ht,Rt)|0,w=w+Math.imul(lt,It)|0,c=c+Math.imul(lt,zt)|0,c=c+Math.imul(ct,It)|0,g=g+Math.imul(ct,zt)|0,w=w+Math.imul(at,Pt)|0,c=c+Math.imul(at,Ot)|0,c=c+Math.imul(st,Pt)|0,g=g+Math.imul(st,Ot)|0,w=w+Math.imul(Y,Lt)|0,c=c+Math.imul(Y,Nt)|0,c=c+Math.imul(j,Lt)|0,g=g+Math.imul(j,Nt)|0;var Pn=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(Pn>>>26)|0,Pn&=67108863,w=Math.imul(vt,St),c=Math.imul(vt,_t),c=c+Math.imul(wt,St)|0,g=Math.imul(wt,_t),w=w+Math.imul(pt,Et)|0,c=c+Math.imul(pt,kt)|0,c=c+Math.imul(gt,Et)|0,g=g+Math.imul(gt,kt)|0,w=w+Math.imul(dt,Bt)|0,c=c+Math.imul(dt,Rt)|0,c=c+Math.imul(ft,Bt)|0,g=g+Math.imul(ft,Rt)|0,w=w+Math.imul(ut,It)|0,c=c+Math.imul(ut,zt)|0,c=c+Math.imul(ht,It)|0,g=g+Math.imul(ht,zt)|0,w=w+Math.imul(lt,Pt)|0,c=c+Math.imul(lt,Ot)|0,c=c+Math.imul(ct,Pt)|0,g=g+Math.imul(ct,Ot)|0,w=w+Math.imul(at,Lt)|0,c=c+Math.imul(at,Nt)|0,c=c+Math.imul(st,Lt)|0,g=g+Math.imul(st,Nt)|0;var On=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(On>>>26)|0,On&=67108863,w=Math.imul(vt,Et),c=Math.imul(vt,kt),c=c+Math.imul(wt,Et)|0,g=Math.imul(wt,kt),w=w+Math.imul(pt,Bt)|0,c=c+Math.imul(pt,Rt)|0,c=c+Math.imul(gt,Bt)|0,g=g+Math.imul(gt,Rt)|0,w=w+Math.imul(dt,It)|0,c=c+Math.imul(dt,zt)|0,c=c+Math.imul(ft,It)|0,g=g+Math.imul(ft,zt)|0,w=w+Math.imul(ut,Pt)|0,c=c+Math.imul(ut,Ot)|0,c=c+Math.imul(ht,Pt)|0,g=g+Math.imul(ht,Ot)|0,w=w+Math.imul(lt,Lt)|0,c=c+Math.imul(lt,Nt)|0,c=c+Math.imul(ct,Lt)|0,g=g+Math.imul(ct,Nt)|0;var Ln=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(Ln>>>26)|0,Ln&=67108863,w=Math.imul(vt,Bt),c=Math.imul(vt,Rt),c=c+Math.imul(wt,Bt)|0,g=Math.imul(wt,Rt),w=w+Math.imul(pt,It)|0,c=c+Math.imul(pt,zt)|0,c=c+Math.imul(gt,It)|0,g=g+Math.imul(gt,zt)|0,w=w+Math.imul(dt,Pt)|0,c=c+Math.imul(dt,Ot)|0,c=c+Math.imul(ft,Pt)|0,g=g+Math.imul(ft,Ot)|0,w=w+Math.imul(ut,Lt)|0,c=c+Math.imul(ut,Nt)|0,c=c+Math.imul(ht,Lt)|0,g=g+Math.imul(ht,Nt)|0;var Nn=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(Nn>>>26)|0,Nn&=67108863,w=Math.imul(vt,It),c=Math.imul(vt,zt),c=c+Math.imul(wt,It)|0,g=Math.imul(wt,zt),w=w+Math.imul(pt,Pt)|0,c=c+Math.imul(pt,Ot)|0,c=c+Math.imul(gt,Pt)|0,g=g+Math.imul(gt,Ot)|0,w=w+Math.imul(dt,Lt)|0,c=c+Math.imul(dt,Nt)|0,c=c+Math.imul(ft,Lt)|0,g=g+Math.imul(ft,Nt)|0;var Tn=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(Tn>>>26)|0,Tn&=67108863,w=Math.imul(vt,Pt),c=Math.imul(vt,Ot),c=c+Math.imul(wt,Pt)|0,g=Math.imul(wt,Ot),w=w+Math.imul(pt,Lt)|0,c=c+Math.imul(pt,Nt)|0,c=c+Math.imul(gt,Lt)|0,g=g+Math.imul(gt,Nt)|0;var Hn=(M+w|0)+((c&8191)<<13)|0;M=(g+(c>>>13)|0)+(Hn>>>26)|0,Hn&=67108863,w=Math.imul(vt,Lt),c=Math.imul(vt,Nt),c=c+Math.imul(wt,Lt)|0,g=Math.imul(wt,Nt);var jn=(M+w|0)+((c&8191)<<13)|0;return M=(g+(c>>>13)|0)+(jn>>>26)|0,jn&=67108863,y[0]=ei,y[1]=ii,y[2]=ri,y[3]=oi,y[4]=ni,y[5]=ai,y[6]=En,y[7]=kn,y[8]=Bn,y[9]=Rn,y[10]=In,y[11]=zn,y[12]=Pn,y[13]=On,y[14]=Ln,y[15]=Nn,y[16]=Tn,y[17]=Hn,y[18]=jn,M!==0&&(y[19]=M,d.length++),d};Math.imul||(V=F);function J(s,u,d){d.negative=u.negative^s.negative,d.length=s.length+u.length;for(var v=0,b=0,y=0;y<d.length-1;y++){var M=b;b=0;for(var w=v&67108863,c=Math.min(y,u.length-1),g=Math.max(0,y-s.length+1);g<=c;g++){var W=y-g,Z=s.words[W]|0,h=u.words[g]|0,E=Z*h,S=E&67108863;M=M+(E/67108864|0)|0,S=S+w|0,w=S&67108863,M=M+(S>>>26)|0,b+=M>>>26,M&=67108863}d.words[y]=w,v=M,M=b}return v!==0?d.words[y]=v:d.length--,d._strip()}function q(s,u,d){return J(s,u,d)}o.prototype.mulTo=function(s,u){var d,v=this.length+s.length;return this.length===10&&s.length===10?d=V(this,s,u):v<63?d=F(this,s,u):v<1024?d=J(this,s,u):d=q(this,s,u),d},o.prototype.mul=function(s){var u=new o(null);return u.words=new Array(this.length+s.length),this.mulTo(s,u)},o.prototype.mulf=function(s){var u=new o(null);return u.words=new Array(this.length+s.length),q(this,s,u)},o.prototype.imul=function(s){return this.clone().mulTo(s,this)},o.prototype.imuln=function(s){var u=s<0;u&&(s=-s),r(typeof s=="number"),r(s<67108864);for(var d=0,v=0;v<this.length;v++){var b=(this.words[v]|0)*s,y=(b&67108863)+(d&67108863);d>>=26,d+=b/67108864|0,d+=y>>>26,this.words[v]=y&67108863}return d!==0&&(this.words[v]=d,this.length++),u?this.ineg():this},o.prototype.muln=function(s){return this.clone().imuln(s)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(s){var u=I(s);if(u.length===0)return new o(1);for(var d=this,v=0;v<u.length&&u[v]===0;v++,d=d.sqr());if(++v<u.length)for(var b=d.sqr();v<u.length;v++,b=b.sqr())u[v]!==0&&(d=d.mul(b));return d},o.prototype.iushln=function(s){r(typeof s=="number"&&s>=0);var u=s%26,d=(s-u)/26,v=67108863>>>26-u<<26-u,b;if(u!==0){var y=0;for(b=0;b<this.length;b++){var M=this.words[b]&v,w=(this.words[b]|0)-M<<u;this.words[b]=w|y,y=M>>>26-u}y&&(this.words[b]=y,this.length++)}if(d!==0){for(b=this.length-1;b>=0;b--)this.words[b+d]=this.words[b];for(b=0;b<d;b++)this.words[b]=0;this.length+=d}return this._strip()},o.prototype.ishln=function(s){return r(this.negative===0),this.iushln(s)},o.prototype.iushrn=function(s,u,d){r(typeof s=="number"&&s>=0);var v;u?v=(u-u%26)/26:v=0;var b=s%26,y=Math.min((s-b)/26,this.length),M=67108863^67108863>>>b<<b,w=d;if(v-=y,v=Math.max(0,v),w){for(var c=0;c<y;c++)w.words[c]=this.words[c];w.length=y}if(y!==0)if(this.length>y)for(this.length-=y,c=0;c<this.length;c++)this.words[c]=this.words[c+y];else this.words[0]=0,this.length=1;var g=0;for(c=this.length-1;c>=0&&(g!==0||c>=v);c--){var W=this.words[c]|0;this.words[c]=g<<26-b|W>>>b,g=W&M}return w&&g!==0&&(w.words[w.length++]=g),this.length===0&&(this.words[0]=0,this.length=1),this._strip()},o.prototype.ishrn=function(s,u,d){return r(this.negative===0),this.iushrn(s,u,d)},o.prototype.shln=function(s){return this.clone().ishln(s)},o.prototype.ushln=function(s){return this.clone().iushln(s)},o.prototype.shrn=function(s){return this.clone().ishrn(s)},o.prototype.ushrn=function(s){return this.clone().iushrn(s)},o.prototype.testn=function(s){r(typeof s=="number"&&s>=0);var u=s%26,d=(s-u)/26,v=1<<u;if(this.length<=d)return!1;var b=this.words[d];return!!(b&v)},o.prototype.imaskn=function(s){r(typeof s=="number"&&s>=0);var u=s%26,d=(s-u)/26;if(r(this.negative===0,"imaskn works only with positive numbers"),this.length<=d)return this;if(u!==0&&d++,this.length=Math.min(d,this.length),u!==0){var v=67108863^67108863>>>u<<u;this.words[this.length-1]&=v}return this._strip()},o.prototype.maskn=function(s){return this.clone().imaskn(s)},o.prototype.iaddn=function(s){return r(typeof s=="number"),r(s<67108864),s<0?this.isubn(-s):this.negative!==0?this.length===1&&(this.words[0]|0)<=s?(this.words[0]=s-(this.words[0]|0),this.negative=0,this):(this.negative=0,this.isubn(s),this.negative=1,this):this._iaddn(s)},o.prototype._iaddn=function(s){this.words[0]+=s;for(var u=0;u<this.length&&this.words[u]>=67108864;u++)this.words[u]-=67108864,u===this.length-1?this.words[u+1]=1:this.words[u+1]++;return this.length=Math.max(this.length,u+1),this},o.prototype.isubn=function(s){if(r(typeof s=="number"),r(s<67108864),s<0)return this.iaddn(-s);if(this.negative!==0)return this.negative=0,this.iaddn(s),this.negative=1,this;if(this.words[0]-=s,this.length===1&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var u=0;u<this.length&&this.words[u]<0;u++)this.words[u]+=67108864,this.words[u+1]-=1;return this._strip()},o.prototype.addn=function(s){return this.clone().iaddn(s)},o.prototype.subn=function(s){return this.clone().isubn(s)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(s,u,d){var v=s.length+d,b;this._expand(v);var y,M=0;for(b=0;b<s.length;b++){y=(this.words[b+d]|0)+M;var w=(s.words[b]|0)*u;y-=w&67108863,M=(y>>26)-(w/67108864|0),this.words[b+d]=y&67108863}for(;b<this.length-d;b++)y=(this.words[b+d]|0)+M,M=y>>26,this.words[b+d]=y&67108863;if(M===0)return this._strip();for(r(M===-1),M=0,b=0;b<this.length;b++)y=-(this.words[b]|0)+M,M=y>>26,this.words[b]=y&67108863;return this.negative=1,this._strip()},o.prototype._wordDiv=function(s,u){var d=this.length-s.length,v=this.clone(),b=s,y=b.words[b.length-1]|0,M=this._countBits(y);d=26-M,d!==0&&(b=b.ushln(d),v.iushln(d),y=b.words[b.length-1]|0);var w=v.length-b.length,c;if(u!=="mod"){c=new o(null),c.length=w+1,c.words=new Array(c.length);for(var g=0;g<c.length;g++)c.words[g]=0}var W=v.clone()._ishlnsubmul(b,1,w);W.negative===0&&(v=W,c&&(c.words[w]=1));for(var Z=w-1;Z>=0;Z--){var h=(v.words[b.length+Z]|0)*67108864+(v.words[b.length+Z-1]|0);for(h=Math.min(h/y|0,67108863),v._ishlnsubmul(b,h,Z);v.negative!==0;)h--,v.negative=0,v._ishlnsubmul(b,1,Z),v.isZero()||(v.negative^=1);c&&(c.words[Z]=h)}return c&&c._strip(),v._strip(),u!=="div"&&d!==0&&v.iushrn(d),{div:c||null,mod:v}},o.prototype.divmod=function(s,u,d){if(r(!s.isZero()),this.isZero())return{div:new o(0),mod:new o(0)};var v,b,y;return this.negative!==0&&s.negative===0?(y=this.neg().divmod(s,u),u!=="mod"&&(v=y.div.neg()),u!=="div"&&(b=y.mod.neg(),d&&b.negative!==0&&b.iadd(s)),{div:v,mod:b}):this.negative===0&&s.negative!==0?(y=this.divmod(s.neg(),u),u!=="mod"&&(v=y.div.neg()),{div:v,mod:y.mod}):this.negative&s.negative?(y=this.neg().divmod(s.neg(),u),u!=="div"&&(b=y.mod.neg(),d&&b.negative!==0&&b.isub(s)),{div:y.div,mod:b}):s.length>this.length||this.cmp(s)<0?{div:new o(0),mod:this}:s.length===1?u==="div"?{div:this.divn(s.words[0]),mod:null}:u==="mod"?{div:null,mod:new o(this.modrn(s.words[0]))}:{div:this.divn(s.words[0]),mod:new o(this.modrn(s.words[0]))}:this._wordDiv(s,u)},o.prototype.div=function(s){return this.divmod(s,"div",!1).div},o.prototype.mod=function(s){return this.divmod(s,"mod",!1).mod},o.prototype.umod=function(s){return this.divmod(s,"mod",!0).mod},o.prototype.divRound=function(s){var u=this.divmod(s);if(u.mod.isZero())return u.div;var d=u.div.negative!==0?u.mod.isub(s):u.mod,v=s.ushrn(1),b=s.andln(1),y=d.cmp(v);return y<0||b===1&&y===0?u.div:u.div.negative!==0?u.div.isubn(1):u.div.iaddn(1)},o.prototype.modrn=function(s){var u=s<0;u&&(s=-s),r(s<=67108863);for(var d=(1<<26)%s,v=0,b=this.length-1;b>=0;b--)v=(d*v+(this.words[b]|0))%s;return u?-v:v},o.prototype.modn=function(s){return this.modrn(s)},o.prototype.idivn=function(s){var u=s<0;u&&(s=-s),r(s<=67108863);for(var d=0,v=this.length-1;v>=0;v--){var b=(this.words[v]|0)+d*67108864;this.words[v]=b/s|0,d=b%s}return this._strip(),u?this.ineg():this},o.prototype.divn=function(s){return this.clone().idivn(s)},o.prototype.egcd=function(s){r(s.negative===0),r(!s.isZero());var u=this,d=s.clone();u.negative!==0?u=u.umod(s):u=u.clone();for(var v=new o(1),b=new o(0),y=new o(0),M=new o(1),w=0;u.isEven()&&d.isEven();)u.iushrn(1),d.iushrn(1),++w;for(var c=d.clone(),g=u.clone();!u.isZero();){for(var W=0,Z=1;!(u.words[0]&Z)&&W<26;++W,Z<<=1);if(W>0)for(u.iushrn(W);W-- >0;)(v.isOdd()||b.isOdd())&&(v.iadd(c),b.isub(g)),v.iushrn(1),b.iushrn(1);for(var h=0,E=1;!(d.words[0]&E)&&h<26;++h,E<<=1);if(h>0)for(d.iushrn(h);h-- >0;)(y.isOdd()||M.isOdd())&&(y.iadd(c),M.isub(g)),y.iushrn(1),M.iushrn(1);u.cmp(d)>=0?(u.isub(d),v.isub(y),b.isub(M)):(d.isub(u),y.isub(v),M.isub(b))}return{a:y,b:M,gcd:d.iushln(w)}},o.prototype._invmp=function(s){r(s.negative===0),r(!s.isZero());var u=this,d=s.clone();u.negative!==0?u=u.umod(s):u=u.clone();for(var v=new o(1),b=new o(0),y=d.clone();u.cmpn(1)>0&&d.cmpn(1)>0;){for(var M=0,w=1;!(u.words[0]&w)&&M<26;++M,w<<=1);if(M>0)for(u.iushrn(M);M-- >0;)v.isOdd()&&v.iadd(y),v.iushrn(1);for(var c=0,g=1;!(d.words[0]&g)&&c<26;++c,g<<=1);if(c>0)for(d.iushrn(c);c-- >0;)b.isOdd()&&b.iadd(y),b.iushrn(1);u.cmp(d)>=0?(u.isub(d),v.isub(b)):(d.isub(u),b.isub(v))}var W;return u.cmpn(1)===0?W=v:W=b,W.cmpn(0)<0&&W.iadd(s),W},o.prototype.gcd=function(s){if(this.isZero())return s.abs();if(s.isZero())return this.abs();var u=this.clone(),d=s.clone();u.negative=0,d.negative=0;for(var v=0;u.isEven()&&d.isEven();v++)u.iushrn(1),d.iushrn(1);do{for(;u.isEven();)u.iushrn(1);for(;d.isEven();)d.iushrn(1);var b=u.cmp(d);if(b<0){var y=u;u=d,d=y}else if(b===0||d.cmpn(1)===0)break;u.isub(d)}while(!0);return d.iushln(v)},o.prototype.invm=function(s){return this.egcd(s).a.umod(s)},o.prototype.isEven=function(){return(this.words[0]&1)===0},o.prototype.isOdd=function(){return(this.words[0]&1)===1},o.prototype.andln=function(s){return this.words[0]&s},o.prototype.bincn=function(s){r(typeof s=="number");var u=s%26,d=(s-u)/26,v=1<<u;if(this.length<=d)return this._expand(d+1),this.words[d]|=v,this;for(var b=v,y=d;b!==0&&y<this.length;y++){var M=this.words[y]|0;M+=b,b=M>>>26,M&=67108863,this.words[y]=M}return b!==0&&(this.words[y]=b,this.length++),this},o.prototype.isZero=function(){return this.length===1&&this.words[0]===0},o.prototype.cmpn=function(s){var u=s<0;if(this.negative!==0&&!u)return-1;if(this.negative===0&&u)return 1;this._strip();var d;if(this.length>1)d=1;else{u&&(s=-s),r(s<=67108863,"Number is too big");var v=this.words[0]|0;d=v===s?0:v<s?-1:1}return this.negative!==0?-d|0:d},o.prototype.cmp=function(s){if(this.negative!==0&&s.negative===0)return-1;if(this.negative===0&&s.negative!==0)return 1;var u=this.ucmp(s);return this.negative!==0?-u|0:u},o.prototype.ucmp=function(s){if(this.length>s.length)return 1;if(this.length<s.length)return-1;for(var u=0,d=this.length-1;d>=0;d--){var v=this.words[d]|0,b=s.words[d]|0;if(v!==b){v<b?u=-1:v>b&&(u=1);break}}return u},o.prototype.gtn=function(s){return this.cmpn(s)===1},o.prototype.gt=function(s){return this.cmp(s)===1},o.prototype.gten=function(s){return this.cmpn(s)>=0},o.prototype.gte=function(s){return this.cmp(s)>=0},o.prototype.ltn=function(s){return this.cmpn(s)===-1},o.prototype.lt=function(s){return this.cmp(s)===-1},o.prototype.lten=function(s){return this.cmpn(s)<=0},o.prototype.lte=function(s){return this.cmp(s)<=0},o.prototype.eqn=function(s){return this.cmpn(s)===0},o.prototype.eq=function(s){return this.cmp(s)===0},o.red=function(s){return new rt(s)},o.prototype.toRed=function(s){return r(!this.red,"Already a number in reduction context"),r(this.negative===0,"red works only with positives"),s.convertTo(this)._forceRed(s)},o.prototype.fromRed=function(){return r(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(s){return this.red=s,this},o.prototype.forceRed=function(s){return r(!this.red,"Already a number in reduction context"),this._forceRed(s)},o.prototype.redAdd=function(s){return r(this.red,"redAdd works only with red numbers"),this.red.add(this,s)},o.prototype.redIAdd=function(s){return r(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,s)},o.prototype.redSub=function(s){return r(this.red,"redSub works only with red numbers"),this.red.sub(this,s)},o.prototype.redISub=function(s){return r(this.red,"redISub works only with red numbers"),this.red.isub(this,s)},o.prototype.redShl=function(s){return r(this.red,"redShl works only with red numbers"),this.red.shl(this,s)},o.prototype.redMul=function(s){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,s),this.red.mul(this,s)},o.prototype.redIMul=function(s){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,s),this.red.imul(this,s)},o.prototype.redSqr=function(){return r(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return r(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return r(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return r(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return r(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(s){return r(this.red&&!s.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,s)};var K={k256:null,p224:null,p192:null,p25519:null};function et(s,u){this.name=s,this.p=new o(u,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}et.prototype._tmp=function(){var s=new o(null);return s.words=new Array(Math.ceil(this.n/13)),s},et.prototype.ireduce=function(s){var u=s,d;do this.split(u,this.tmp),u=this.imulK(u),u=u.iadd(this.tmp),d=u.bitLength();while(d>this.n);var v=d<this.n?-1:u.ucmp(this.p);return v===0?(u.words[0]=0,u.length=1):v>0?u.isub(this.p):u.strip!==void 0?u.strip():u._strip(),u},et.prototype.split=function(s,u){s.iushrn(this.n,0,u)},et.prototype.imulK=function(s){return s.imul(this.k)};function Ht(){et.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}n(Ht,et),Ht.prototype.split=function(s,u){for(var d=4194303,v=Math.min(s.length,9),b=0;b<v;b++)u.words[b]=s.words[b];if(u.length=v,s.length<=9){s.words[0]=0,s.length=1;return}var y=s.words[9];for(u.words[u.length++]=y&d,b=10;b<s.length;b++){var M=s.words[b]|0;s.words[b-10]=(M&d)<<4|y>>>22,y=M}y>>>=22,s.words[b-10]=y,y===0&&s.length>10?s.length-=10:s.length-=9},Ht.prototype.imulK=function(s){s.words[s.length]=0,s.words[s.length+1]=0,s.length+=2;for(var u=0,d=0;d<s.length;d++){var v=s.words[d]|0;u+=v*977,s.words[d]=u&67108863,u=v*64+(u/67108864|0)}return s.words[s.length-1]===0&&(s.length--,s.words[s.length-1]===0&&s.length--),s};function ot(){et.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}n(ot,et);function Vt(){et.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}n(Vt,et);function ne(){et.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}n(ne,et),ne.prototype.imulK=function(s){for(var u=0,d=0;d<s.length;d++){var v=(s.words[d]|0)*19+u,b=v&67108863;v>>>=26,s.words[d]=b,u=v}return u!==0&&(s.words[s.length++]=u),s},o._prime=function(s){if(K[s])return K[s];var u;if(s==="k256")u=new Ht;else if(s==="p224")u=new ot;else if(s==="p192")u=new Vt;else if(s==="p25519")u=new ne;else throw new Error("Unknown prime "+s);return K[s]=u,u};function rt(s){if(typeof s=="string"){var u=o._prime(s);this.m=u.p,this.prime=u}else r(s.gtn(1),"modulus must be greater than 1"),this.m=s,this.prime=null}rt.prototype._verify1=function(s){r(s.negative===0,"red works only with positives"),r(s.red,"red works only with red numbers")},rt.prototype._verify2=function(s,u){r((s.negative|u.negative)===0,"red works only with positives"),r(s.red&&s.red===u.red,"red works only with red numbers")},rt.prototype.imod=function(s){return this.prime?this.prime.ireduce(s)._forceRed(this):(x(s,s.umod(this.m)._forceRed(this)),s)},rt.prototype.neg=function(s){return s.isZero()?s.clone():this.m.sub(s)._forceRed(this)},rt.prototype.add=function(s,u){this._verify2(s,u);var d=s.add(u);return d.cmp(this.m)>=0&&d.isub(this.m),d._forceRed(this)},rt.prototype.iadd=function(s,u){this._verify2(s,u);var d=s.iadd(u);return d.cmp(this.m)>=0&&d.isub(this.m),d},rt.prototype.sub=function(s,u){this._verify2(s,u);var d=s.sub(u);return d.cmpn(0)<0&&d.iadd(this.m),d._forceRed(this)},rt.prototype.isub=function(s,u){this._verify2(s,u);var d=s.isub(u);return d.cmpn(0)<0&&d.iadd(this.m),d},rt.prototype.shl=function(s,u){return this._verify1(s),this.imod(s.ushln(u))},rt.prototype.imul=function(s,u){return this._verify2(s,u),this.imod(s.imul(u))},rt.prototype.mul=function(s,u){return this._verify2(s,u),this.imod(s.mul(u))},rt.prototype.isqr=function(s){return this.imul(s,s.clone())},rt.prototype.sqr=function(s){return this.mul(s,s)},rt.prototype.sqrt=function(s){if(s.isZero())return s.clone();var u=this.m.andln(3);if(r(u%2===1),u===3){var d=this.m.add(new o(1)).iushrn(2);return this.pow(s,d)}for(var v=this.m.subn(1),b=0;!v.isZero()&&v.andln(1)===0;)b++,v.iushrn(1);r(!v.isZero());var y=new o(1).toRed(this),M=y.redNeg(),w=this.m.subn(1).iushrn(1),c=this.m.bitLength();for(c=new o(2*c*c).toRed(this);this.pow(c,w).cmp(M)!==0;)c.redIAdd(M);for(var g=this.pow(c,v),W=this.pow(s,v.addn(1).iushrn(1)),Z=this.pow(s,v),h=b;Z.cmp(y)!==0;){for(var E=Z,S=0;E.cmp(y)!==0;S++)E=E.redSqr();r(S<h);var k=this.pow(g,new o(1).iushln(h-S-1));W=W.redMul(k),g=k.redSqr(),Z=Z.redMul(g),h=S}return W},rt.prototype.invm=function(s){var u=s._invmp(this.m);return u.negative!==0?(u.negative=0,this.imod(u).redNeg()):this.imod(u)},rt.prototype.pow=function(s,u){if(u.isZero())return new o(1).toRed(this);if(u.cmpn(1)===0)return s.clone();var d=4,v=new Array(1<<d);v[0]=new o(1).toRed(this),v[1]=s;for(var b=2;b<v.length;b++)v[b]=this.mul(v[b-1],s);var y=v[0],M=0,w=0,c=u.bitLength()%26;for(c===0&&(c=26),b=u.length-1;b>=0;b--){for(var g=u.words[b],W=c-1;W>=0;W--){var Z=g>>W&1;if(y!==v[0]&&(y=this.sqr(y)),Z===0&&M===0){w=0;continue}M<<=1,M|=Z,w++,!(w!==d&&(b!==0||W!==0))&&(y=this.mul(y,v[M]),w=0,M=0)}c=26}return y},rt.prototype.convertTo=function(s){var u=s.umod(this.m);return u===s?u.clone():u},rt.prototype.convertFrom=function(s){var u=s.clone();return u.red=null,u},o.mont=function(s){return new ae(s)};function ae(s){rt.call(this,s),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}n(ae,rt),ae.prototype.convertTo=function(s){return this.imod(s.ushln(this.shift))},ae.prototype.convertFrom=function(s){var u=this.imod(s.mul(this.rinv));return u.red=null,u},ae.prototype.imul=function(s,u){if(s.isZero()||u.isZero())return s.words[0]=0,s.length=1,s;var d=s.imul(u),v=d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),b=d.isub(v).iushrn(this.shift),y=b;return b.cmp(this.m)>=0?y=b.isub(this.m):b.cmpn(0)<0&&(y=b.iadd(this.m)),y._forceRed(this)},ae.prototype.mul=function(s,u){if(s.isZero()||u.isZero())return new o(0)._forceRed(this);var d=s.mul(u),v=d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),b=d.isub(v).iushrn(this.shift),y=b;return b.cmp(this.m)>=0?y=b.isub(this.m):b.cmpn(0)<0&&(y=b.iadd(this.m)),y._forceRed(this)},ae.prototype.invm=function(s){var u=this.imod(s._invmp(this.m).mul(this.r2));return u._forceRed(this)}})(i,W1)})(Y1);var Q=Y1.exports;const K1="bignumber/5.7.0";var d0=Q.BN;const Ze=new Kt(K1),Un={},s1=9007199254740991;function ys(i){return i!=null&&(Gt.isBigNumber(i)||typeof i=="number"&&i%1===0||typeof i=="string"&&!!i.match(/^-?[0-9]+$/)||vr(i)||typeof i=="bigint"||Ao(i))}let l1=!1,Gt=class ve{constructor(t,e){t!==Un&&Ze.throwError("cannot call constructor directly; use BigNumber.from",Kt.errors.UNSUPPORTED_OPERATION,{operation:"new (BigNumber)"}),this._hex=e,this._isBigNumber=!0,Object.freeze(this)}fromTwos(t){return Yt(X(this).fromTwos(t))}toTwos(t){return Yt(X(this).toTwos(t))}abs(){return this._hex[0]==="-"?ve.from(this._hex.substring(1)):this}add(t){return Yt(X(this).add(X(t)))}sub(t){return Yt(X(this).sub(X(t)))}div(t){return ve.from(t).isZero()&&se("division-by-zero","div"),Yt(X(this).div(X(t)))}mul(t){return Yt(X(this).mul(X(t)))}mod(t){const e=X(t);return e.isNeg()&&se("division-by-zero","mod"),Yt(X(this).umod(e))}pow(t){const e=X(t);return e.isNeg()&&se("negative-power","pow"),Yt(X(this).pow(e))}and(t){const e=X(t);return(this.isNegative()||e.isNeg())&&se("unbound-bitwise-result","and"),Yt(X(this).and(e))}or(t){const e=X(t);return(this.isNegative()||e.isNeg())&&se("unbound-bitwise-result","or"),Yt(X(this).or(e))}xor(t){const e=X(t);return(this.isNegative()||e.isNeg())&&se("unbound-bitwise-result","xor"),Yt(X(this).xor(e))}mask(t){return(this.isNegative()||t<0)&&se("negative-width","mask"),Yt(X(this).maskn(t))}shl(t){return(this.isNegative()||t<0)&&se("negative-width","shl"),Yt(X(this).shln(t))}shr(t){return(this.isNegative()||t<0)&&se("negative-width","shr"),Yt(X(this).shrn(t))}eq(t){return X(this).eq(X(t))}lt(t){return X(this).lt(X(t))}lte(t){return X(this).lte(X(t))}gt(t){return X(this).gt(X(t))}gte(t){return X(this).gte(X(t))}isNegative(){return this._hex[0]==="-"}isZero(){return X(this).isZero()}toNumber(){try{return X(this).toNumber()}catch{se("overflow","toNumber",this.toString())}return null}toBigInt(){try{return BigInt(this.toString())}catch{}return Ze.throwError("this platform does not support BigInt",Kt.errors.UNSUPPORTED_OPERATION,{value:this.toString()})}toString(){return arguments.length>0&&(arguments[0]===10?l1||(l1=!0,Ze.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")):arguments[0]===16?Ze.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",Kt.errors.UNEXPECTED_ARGUMENT,{}):Ze.throwError("BigNumber.toString does not accept parameters",Kt.errors.UNEXPECTED_ARGUMENT,{})),X(this).toString(10)}toHexString(){return this._hex}toJSON(t){return{type:"BigNumber",hex:this.toHexString()}}static from(t){if(t instanceof ve)return t;if(typeof t=="string")return t.match(/^-?0x[0-9a-f]+$/i)?new ve(Un,eo(t)):t.match(/^-?[0-9]+$/)?new ve(Un,eo(new d0(t))):Ze.throwArgumentError("invalid BigNumber string","value",t);if(typeof t=="number")return t%1&&se("underflow","BigNumber.from",t),(t>=s1||t<=-s1)&&se("overflow","BigNumber.from",t),ve.from(String(t));const e=t;if(typeof e=="bigint")return ve.from(e.toString());if(Ao(e))return ve.from(Q1(e));if(e)if(e.toHexString){const r=e.toHexString();if(typeof r=="string")return ve.from(r)}else{let r=e._hex;if(r==null&&e.type==="BigNumber"&&(r=e.hex),typeof r=="string"&&(vr(r)||r[0]==="-"&&vr(r.substring(1))))return ve.from(r)}return Ze.throwArgumentError("invalid BigNumber value","value",t)}static isBigNumber(t){return!!(t&&t._isBigNumber)}};function eo(i){if(typeof i!="string")return eo(i.toString(16));if(i[0]==="-")return i=i.substring(1),i[0]==="-"&&Ze.throwArgumentError("invalid hex","value",i),i=eo(i),i==="0x00"?i:"-"+i;if(i.substring(0,2)!=="0x"&&(i="0x"+i),i==="0x")return"0x00";for(i.length%2&&(i="0x0"+i.substring(2));i.length>4&&i.substring(0,4)==="0x00";)i="0x"+i.substring(4);return i}function Yt(i){return Gt.from(eo(i))}function X(i){const t=Gt.from(i).toHexString();return t[0]==="-"?new d0("-"+t.substring(3),16):new d0(t.substring(2),16)}function se(i,t,e){const r={fault:i,operation:t};return e!=null&&(r.value=e),Ze.throwError(i,Kt.errors.NUMERIC_FAULT,r)}const qt=new Kt(K1),Gr={},J1=Gt.from(0),X1=Gt.from(-1);function ta(i,t,e,r){const n={fault:t,operation:e};return r!==void 0&&(n.value=r),qt.throwError(i,Kt.errors.NUMERIC_FAULT,n)}let Qr="0";for(;Qr.length<256;)Qr+=Qr;function S0(i){if(typeof i!="number")try{i=Gt.from(i).toNumber()}catch{}return typeof i=="number"&&i>=0&&i<=256&&!(i%1)?"1"+Qr.substring(0,i):qt.throwArgumentError("invalid decimal size","decimals",i)}function Fn(i,t){t==null&&(t=0);const e=S0(t);i=Gt.from(i);const r=i.lt(J1);r&&(i=i.mul(X1));let n=i.mod(e).toString();for(;n.length<e.length-1;)n="0"+n;n=n.match(/^([0-9]*[1-9]|0)(0*)/)[1];const o=i.div(e).toString();return e.length===1?i=o:i=o+"."+n,r&&(i="-"+i),i}function je(i,t){t==null&&(t=0);const e=S0(t);(typeof i!="string"||!i.match(/^-?[0-9.]+$/))&&qt.throwArgumentError("invalid decimal value","value",i);const r=i.substring(0,1)==="-";r&&(i=i.substring(1)),i==="."&&qt.throwArgumentError("missing value","value",i);const n=i.split(".");n.length>2&&qt.throwArgumentError("too many decimal points","value",i);let o=n[0],a=n[1];for(o||(o="0"),a||(a="0");a[a.length-1]==="0";)a=a.substring(0,a.length-1);for(a.length>e.length-1&&ta("fractional component exceeds decimals","underflow","parseFixed"),a===""&&(a="0");a.length<e.length-1;)a+="0";const l=Gt.from(o),f=Gt.from(a);let m=l.mul(e).add(f);return r&&(m=m.mul(X1)),m}class fr{constructor(t,e,r,n){t!==Gr&&qt.throwError("cannot use FixedFormat constructor; use FixedFormat.from",Kt.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=e,this.width=r,this.decimals=n,this.name=(e?"":"u")+"fixed"+String(r)+"x"+String(n),this._multiplier=S0(n),Object.freeze(this)}static from(t){if(t instanceof fr)return t;typeof t=="number"&&(t=`fixed128x${t}`);let e=!0,r=128,n=18;if(typeof t=="string"){if(t!=="fixed")if(t==="ufixed")e=!1;else{const o=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);o||qt.throwArgumentError("invalid fixed format","format",t),e=o[1]!=="u",r=parseInt(o[2]),n=parseInt(o[3])}}else if(t){const o=(a,l,f)=>t[a]==null?f:(typeof t[a]!==l&&qt.throwArgumentError("invalid fixed format ("+a+" not "+l+")","format."+a,t[a]),t[a]);e=o("signed","boolean",e),r=o("width","number",r),n=o("decimals","number",n)}return r%8&&qt.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",r),n>80&&qt.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",n),new fr(Gr,e,r,n)}}class Ft{constructor(t,e,r,n){t!==Gr&&qt.throwError("cannot use FixedNumber constructor; use FixedNumber.from",Kt.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=n,this._hex=e,this._value=r,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&qt.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);const e=je(this._value,this.format.decimals),r=je(t._value,t.format.decimals);return Ft.fromValue(e.add(r),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);const e=je(this._value,this.format.decimals),r=je(t._value,t.format.decimals);return Ft.fromValue(e.sub(r),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);const e=je(this._value,this.format.decimals),r=je(t._value,t.format.decimals);return Ft.fromValue(e.mul(r).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);const e=je(this._value,this.format.decimals),r=je(t._value,t.format.decimals);return Ft.fromValue(e.mul(this.format._multiplier).div(r),this.format.decimals,this.format)}floor(){const t=this.toString().split(".");t.length===1&&t.push("0");let e=Ft.from(t[0],this.format);const r=!t[1].match(/^(0*)$/);return this.isNegative()&&r&&(e=e.subUnsafe(c1.toFormat(e.format))),e}ceiling(){const t=this.toString().split(".");t.length===1&&t.push("0");let e=Ft.from(t[0],this.format);const r=!t[1].match(/^(0*)$/);return!this.isNegative()&&r&&(e=e.addUnsafe(c1.toFormat(e.format))),e}round(t){t==null&&(t=0);const e=this.toString().split(".");if(e.length===1&&e.push("0"),(t<0||t>80||t%1)&&qt.throwArgumentError("invalid decimal count","decimals",t),e[1].length<=t)return this;const r=Ft.from("1"+Qr.substring(0,t),this.format),n=xs.toFormat(this.format);return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r)}isZero(){return this._value==="0.0"||this._value==="0"}isNegative(){return this._value[0]==="-"}toString(){return this._value}toHexString(t){if(t==null)return this._hex;t%8&&qt.throwArgumentError("invalid byte width","width",t);const e=Gt.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return Go(e,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return Ft.fromString(this._value,t)}static fromValue(t,e,r){return r==null&&e!=null&&!ys(e)&&(r=e,e=null),e==null&&(e=0),r==null&&(r="fixed"),Ft.fromString(Fn(t,e),fr.from(r))}static fromString(t,e){e==null&&(e="fixed");const r=fr.from(e),n=je(t,r.decimals);!r.signed&&n.lt(J1)&&ta("unsigned value cannot be negative","overflow","value",t);let o=null;r.signed?o=n.toTwos(r.width).toHexString():(o=n.toHexString(),o=Go(o,r.width/8));const a=Fn(n,r.decimals);return new Ft(Gr,o,a,r)}static fromBytes(t,e){e==null&&(e="fixed");const r=fr.from(e);if(G1(t).length>r.width/8)throw new Error("overflow");let n=Gt.from(t);r.signed&&(n=n.fromTwos(r.width));const o=n.toTwos((r.signed?0:1)+r.width).toHexString(),a=Fn(n,r.decimals);return new Ft(Gr,o,a,r)}static from(t,e){if(typeof t=="string")return Ft.fromString(t,e);if(Ao(t))return Ft.fromBytes(t,e);try{return Ft.fromValue(t,0,e)}catch(r){if(r.code!==Kt.errors.INVALID_ARGUMENT)throw r}return qt.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!!(t&&t._isFixedNumber)}}const c1=Ft.from(1),xs=Ft.from("0.5");var u1;(function(i){i.current="",i.NFC="NFC",i.NFD="NFD",i.NFKC="NFKC",i.NFKD="NFKD"})(u1||(u1={}));var h1;(function(i){i.UNEXPECTED_CONTINUE="unexpected continuation byte",i.BAD_PREFIX="bad codepoint prefix",i.OVERRUN="string overrun",i.MISSING_CONTINUE="missing continuation byte",i.OUT_OF_RANGE="out of UTF-8 range",i.UTF16_SURROGATE="UTF-16 surrogate",i.OVERLONG="overlong representation"})(h1||(h1={}));function Cs(i){if(i.length%4!==0)throw new Error("bad data");let t=[];for(let e=0;e<i.length;e+=4)t.push(parseInt(i.substring(e,e+4),16));return t}function Vn(i,t){t||(t=function(n){return[parseInt(n,16)]});let e=0,r={};return i.split(",").forEach(n=>{let o=n.split(":");e+=parseInt(o[0],16),r[e]=t(o[1])}),r}function d1(i){let t=0;return i.split(",").map(e=>{let r=e.split("-");r.length===1?r[1]="0":r[1]===""&&(r[1]="1");let n=t+parseInt(r[0],16);return t=parseInt(r[1],16),{l:n,h:t}})}d1("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"),"ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(i=>parseInt(i,16)),Vn("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"),Vn("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"),Vn("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",Cs),d1("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");function As(i){i=atob(i);const t=[];for(let e=0;e<i.length;e++)t.push(i.charCodeAt(e));return G1(t)}function ea(i,t){t==null&&(t=1);const e=[],r=e.forEach,n=function(o,a){r.call(o,function(l){a>0&&Array.isArray(l)?n(l,a-1):e.push(l)})};return n(i,t),e}function Ms(i){const t={};for(let e=0;e<i.length;e++){const r=i[e];t[r[0]]=r[1]}return t}function $s(i){let t=0;function e(){return i[t++]<<8|i[t++]}let r=e(),n=1,o=[0,1];for(let K=1;K<r;K++)o.push(n+=e());let a=e(),l=t;t+=a;let f=0,m=0;function x(){return f==0&&(m=m<<8|i[t++],f=8),m>>--f&1}const C=31,$=Math.pow(2,C),_=$>>>1,R=_>>1,T=$-1;let I=0;for(let K=0;K<C;K++)I=I<<1|x();let F=[],V=0,J=$;for(;;){let K=Math.floor(((I-V+1)*n-1)/J),et=0,Ht=r;for(;Ht-et>1;){let ne=et+Ht>>>1;K<o[ne]?Ht=ne:et=ne}if(et==0)break;F.push(et);let ot=V+Math.floor(J*o[et]/n),Vt=V+Math.floor(J*o[et+1]/n)-1;for(;!((ot^Vt)&_);)I=I<<1&T|x(),ot=ot<<1&T,Vt=Vt<<1&T|1;for(;ot&~Vt&R;)I=I&_|I<<1&T>>>1|x(),ot=ot<<1^_,Vt=(Vt^_)<<1|_|1;V=ot,J=1+Vt-ot}let q=r-4;return F.map(K=>{switch(K-q){case 3:return q+65792+(i[l++]<<16|i[l++]<<8|i[l++]);case 2:return q+256+(i[l++]<<8|i[l++]);case 1:return q+i[l++];default:return K-1}})}function Ss(i){let t=0;return()=>i[t++]}function _s(i){return Ss($s(i))}function Es(i){return i&1?~i>>1:i>>1}function ks(i,t){let e=Array(i);for(let r=0;r<i;r++)e[r]=1+t();return e}function f1(i,t){let e=Array(i);for(let r=0,n=-1;r<i;r++)e[r]=n+=1+t();return e}function Bs(i,t){let e=Array(i);for(let r=0,n=0;r<i;r++)e[r]=n+=Es(t());return e}function Qo(i,t){let e=f1(i(),i),r=i(),n=f1(r,i),o=ks(r,i);for(let a=0;a<r;a++)for(let l=0;l<o[a];l++)e.push(n[a]+l);return t?e.map(a=>t[a]):e}function Rs(i){let t=[];for(;;){let e=i();if(e==0)break;t.push(zs(e,i))}for(;;){let e=i()-1;if(e<0)break;t.push(Ps(e,i))}return Ms(ea(t))}function Is(i){let t=[];for(;;){let e=i();if(e==0)break;t.push(e)}return t}function ia(i,t,e){let r=Array(i).fill(void 0).map(()=>[]);for(let n=0;n<t;n++)Bs(i,e).forEach((o,a)=>r[a].push(o));return r}function zs(i,t){let e=1+t(),r=t(),n=Is(t),o=ia(n.length,1+i,t);return ea(o.map((a,l)=>{const f=a[0],m=a.slice(1);return Array(n[l]).fill(void 0).map((x,C)=>{let $=C*r;return[f+C*e,m.map(_=>_+$)]})}))}function Ps(i,t){let e=1+t();return ia(e,1+i,t).map(r=>[r[0],r.slice(1)])}function Os(i){let t=Qo(i).sort((r,n)=>r-n);return e();function e(){let r=[];for(;;){let m=Qo(i,t);if(m.length==0)break;r.push({set:new Set(m),node:e()})}r.sort((m,x)=>x.set.size-m.set.size);let n=i(),o=n%3;n=n/3|0;let a=!!(n&1);n>>=1;let l=n==1,f=n==2;return{branches:r,valid:o,fe0f:a,save:l,check:f}}}function Ls(){return _s(As("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="))}const Lo=Ls();new Set(Qo(Lo)),new Set(Qo(Lo)),Rs(Lo),Os(Lo);const Ns=new Uint8Array(32);Ns.fill(0);const Ts=new Uint8Array(32);Ts.fill(0),Gt.from(-1);const Hs=Gt.from(0),js=Gt.from(1);Gt.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),Go(js.toHexString(),32),Go(Hs.toHexString(),32);var Me={},tt={},Mo=ra;function ra(i,t){if(!i)throw new Error(t||"Assertion failed")}ra.equal=function(i,t,e){if(i!=t)throw new Error(e||"Assertion failed: "+i+" != "+t)};var f0={exports:{}};typeof Object.create=="function"?f0.exports=function(i,t){t&&(i.super_=t,i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}))}:f0.exports=function(i,t){if(t){i.super_=t;var e=function(){};e.prototype=t.prototype,i.prototype=new e,i.prototype.constructor=i}};var Ds=Mo,Zs=f0.exports;tt.inherits=Zs;function Us(i,t){return(i.charCodeAt(t)&64512)!==55296||t<0||t+1>=i.length?!1:(i.charCodeAt(t+1)&64512)===56320}function Fs(i,t){if(Array.isArray(i))return i.slice();if(!i)return[];var e=[];if(typeof i=="string")if(t){if(t==="hex")for(i=i.replace(/[^a-z0-9]+/ig,""),i.length%2!==0&&(i="0"+i),n=0;n<i.length;n+=2)e.push(parseInt(i[n]+i[n+1],16))}else for(var r=0,n=0;n<i.length;n++){var o=i.charCodeAt(n);o<128?e[r++]=o:o<2048?(e[r++]=o>>6|192,e[r++]=o&63|128):Us(i,n)?(o=65536+((o&1023)<<10)+(i.charCodeAt(++n)&1023),e[r++]=o>>18|240,e[r++]=o>>12&63|128,e[r++]=o>>6&63|128,e[r++]=o&63|128):(e[r++]=o>>12|224,e[r++]=o>>6&63|128,e[r++]=o&63|128)}else for(n=0;n<i.length;n++)e[n]=i[n]|0;return e}tt.toArray=Fs;function Vs(i){for(var t="",e=0;e<i.length;e++)t+=na(i[e].toString(16));return t}tt.toHex=Vs;function oa(i){var t=i>>>24|i>>>8&65280|i<<8&16711680|(i&255)<<24;return t>>>0}tt.htonl=oa;function Ws(i,t){for(var e="",r=0;r<i.length;r++){var n=i[r];t==="little"&&(n=oa(n)),e+=aa(n.toString(16))}return e}tt.toHex32=Ws;function na(i){return i.length===1?"0"+i:i}tt.zero2=na;function aa(i){return i.length===7?"0"+i:i.length===6?"00"+i:i.length===5?"000"+i:i.length===4?"0000"+i:i.length===3?"00000"+i:i.length===2?"000000"+i:i.length===1?"0000000"+i:i}tt.zero8=aa;function qs(i,t,e,r){var n=e-t;Ds(n%4===0);for(var o=new Array(n/4),a=0,l=t;a<o.length;a++,l+=4){var f;r==="big"?f=i[l]<<24|i[l+1]<<16|i[l+2]<<8|i[l+3]:f=i[l+3]<<24|i[l+2]<<16|i[l+1]<<8|i[l],o[a]=f>>>0}return o}tt.join32=qs;function Gs(i,t){for(var e=new Array(i.length*4),r=0,n=0;r<i.length;r++,n+=4){var o=i[r];t==="big"?(e[n]=o>>>24,e[n+1]=o>>>16&255,e[n+2]=o>>>8&255,e[n+3]=o&255):(e[n+3]=o>>>24,e[n+2]=o>>>16&255,e[n+1]=o>>>8&255,e[n]=o&255)}return e}tt.split32=Gs;function Qs(i,t){return i>>>t|i<<32-t}tt.rotr32=Qs;function Ys(i,t){return i<<t|i>>>32-t}tt.rotl32=Ys;function Ks(i,t){return i+t>>>0}tt.sum32=Ks;function Js(i,t,e){return i+t+e>>>0}tt.sum32_3=Js;function Xs(i,t,e,r){return i+t+e+r>>>0}tt.sum32_4=Xs;function tl(i,t,e,r,n){return i+t+e+r+n>>>0}tt.sum32_5=tl;function el(i,t,e,r){var n=i[t],o=i[t+1],a=r+o>>>0,l=(a<r?1:0)+e+n;i[t]=l>>>0,i[t+1]=a}tt.sum64=el;function il(i,t,e,r){var n=t+r>>>0,o=(n<t?1:0)+i+e;return o>>>0}tt.sum64_hi=il;function rl(i,t,e,r){var n=t+r;return n>>>0}tt.sum64_lo=rl;function ol(i,t,e,r,n,o,a,l){var f=0,m=t;m=m+r>>>0,f+=m<t?1:0,m=m+o>>>0,f+=m<o?1:0,m=m+l>>>0,f+=m<l?1:0;var x=i+e+n+a+f;return x>>>0}tt.sum64_4_hi=ol;function nl(i,t,e,r,n,o,a,l){var f=t+r+o+l;return f>>>0}tt.sum64_4_lo=nl;function al(i,t,e,r,n,o,a,l,f,m){var x=0,C=t;C=C+r>>>0,x+=C<t?1:0,C=C+o>>>0,x+=C<o?1:0,C=C+l>>>0,x+=C<l?1:0,C=C+m>>>0,x+=C<m?1:0;var $=i+e+n+a+f+x;return $>>>0}tt.sum64_5_hi=al;function sl(i,t,e,r,n,o,a,l,f,m){var x=t+r+o+l+m;return x>>>0}tt.sum64_5_lo=sl;function ll(i,t,e){var r=t<<32-e|i>>>e;return r>>>0}tt.rotr64_hi=ll;function cl(i,t,e){var r=i<<32-e|t>>>e;return r>>>0}tt.rotr64_lo=cl;function ul(i,t,e){return i>>>e}tt.shr64_hi=ul;function hl(i,t,e){var r=i<<32-e|t>>>e;return r>>>0}tt.shr64_lo=hl;var Pr={},p1=tt,dl=Mo;function No(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}Pr.BlockHash=No,No.prototype.update=function(i,t){if(i=p1.toArray(i,t),this.pending?this.pending=this.pending.concat(i):this.pending=i,this.pendingTotal+=i.length,this.pending.length>=this._delta8){i=this.pending;var e=i.length%this._delta8;this.pending=i.slice(i.length-e,i.length),this.pending.length===0&&(this.pending=null),i=p1.join32(i,0,i.length-e,this.endian);for(var r=0;r<i.length;r+=this._delta32)this._update(i,r,r+this._delta32)}return this},No.prototype.digest=function(i){return this.update(this._pad()),dl(this.pending===null),this._digest(i)},No.prototype._pad=function(){var i=this.pendingTotal,t=this._delta8,e=t-(i+this.padLength)%t,r=new Array(e+this.padLength);r[0]=128;for(var n=1;n<e;n++)r[n]=0;if(i<<=3,this.endian==="big"){for(var o=8;o<this.padLength;o++)r[n++]=0;r[n++]=0,r[n++]=0,r[n++]=0,r[n++]=0,r[n++]=i>>>24&255,r[n++]=i>>>16&255,r[n++]=i>>>8&255,r[n++]=i&255}else for(r[n++]=i&255,r[n++]=i>>>8&255,r[n++]=i>>>16&255,r[n++]=i>>>24&255,r[n++]=0,r[n++]=0,r[n++]=0,r[n++]=0,o=8;o<this.padLength;o++)r[n++]=0;return r};var ur={},Le={},fl=tt,Ee=fl.rotr32;function pl(i,t,e,r){if(i===0)return sa(t,e,r);if(i===1||i===3)return ca(t,e,r);if(i===2)return la(t,e,r)}Le.ft_1=pl;function sa(i,t,e){return i&t^~i&e}Le.ch32=sa;function la(i,t,e){return i&t^i&e^t&e}Le.maj32=la;function ca(i,t,e){return i^t^e}Le.p32=ca;function gl(i){return Ee(i,2)^Ee(i,13)^Ee(i,22)}Le.s0_256=gl;function vl(i){return Ee(i,6)^Ee(i,11)^Ee(i,25)}Le.s1_256=vl;function wl(i){return Ee(i,7)^Ee(i,18)^i>>>3}Le.g0_256=wl;function ml(i){return Ee(i,17)^Ee(i,19)^i>>>10}Le.g1_256=ml;var wr=tt,bl=Pr,yl=Le,Wn=wr.rotl32,Dr=wr.sum32,xl=wr.sum32_5,Cl=yl.ft_1,ua=bl.BlockHash,Al=[1518500249,1859775393,2400959708,3395469782];function Se(){if(!(this instanceof Se))return new Se;ua.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}wr.inherits(Se,ua);var Ml=Se;Se.blockSize=512,Se.outSize=160,Se.hmacStrength=80,Se.padLength=64,Se.prototype._update=function(i,t){for(var e=this.W,r=0;r<16;r++)e[r]=i[t+r];for(;r<e.length;r++)e[r]=Wn(e[r-3]^e[r-8]^e[r-14]^e[r-16],1);var n=this.h[0],o=this.h[1],a=this.h[2],l=this.h[3],f=this.h[4];for(r=0;r<e.length;r++){var m=~~(r/20),x=xl(Wn(n,5),Cl(m,o,a,l),f,e[r],Al[m]);f=l,l=a,a=Wn(o,30),o=n,n=x}this.h[0]=Dr(this.h[0],n),this.h[1]=Dr(this.h[1],o),this.h[2]=Dr(this.h[2],a),this.h[3]=Dr(this.h[3],l),this.h[4]=Dr(this.h[4],f)},Se.prototype._digest=function(i){return i==="hex"?wr.toHex32(this.h,"big"):wr.split32(this.h,"big")};var mr=tt,$l=Pr,Or=Le,Sl=Mo,ge=mr.sum32,_l=mr.sum32_4,El=mr.sum32_5,kl=Or.ch32,Bl=Or.maj32,Rl=Or.s0_256,Il=Or.s1_256,zl=Or.g0_256,Pl=Or.g1_256,ha=$l.BlockHash,Ol=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function _e(){if(!(this instanceof _e))return new _e;ha.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=Ol,this.W=new Array(64)}mr.inherits(_e,ha);var da=_e;_e.blockSize=512,_e.outSize=256,_e.hmacStrength=192,_e.padLength=64,_e.prototype._update=function(i,t){for(var e=this.W,r=0;r<16;r++)e[r]=i[t+r];for(;r<e.length;r++)e[r]=_l(Pl(e[r-2]),e[r-7],zl(e[r-15]),e[r-16]);var n=this.h[0],o=this.h[1],a=this.h[2],l=this.h[3],f=this.h[4],m=this.h[5],x=this.h[6],C=this.h[7];for(Sl(this.k.length===e.length),r=0;r<e.length;r++){var $=El(C,Il(f),kl(f,m,x),this.k[r],e[r]),_=ge(Rl(n),Bl(n,o,a));C=x,x=m,m=f,f=ge(l,$),l=a,a=o,o=n,n=ge($,_)}this.h[0]=ge(this.h[0],n),this.h[1]=ge(this.h[1],o),this.h[2]=ge(this.h[2],a),this.h[3]=ge(this.h[3],l),this.h[4]=ge(this.h[4],f),this.h[5]=ge(this.h[5],m),this.h[6]=ge(this.h[6],x),this.h[7]=ge(this.h[7],C)},_e.prototype._digest=function(i){return i==="hex"?mr.toHex32(this.h,"big"):mr.split32(this.h,"big")};var p0=tt,fa=da;function Ue(){if(!(this instanceof Ue))return new Ue;fa.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}p0.inherits(Ue,fa);var Ll=Ue;Ue.blockSize=512,Ue.outSize=224,Ue.hmacStrength=192,Ue.padLength=64,Ue.prototype._digest=function(i){return i==="hex"?p0.toHex32(this.h.slice(0,7),"big"):p0.split32(this.h.slice(0,7),"big")};var Jt=tt,Nl=Pr,Tl=Mo,ke=Jt.rotr64_hi,Be=Jt.rotr64_lo,pa=Jt.shr64_hi,ga=Jt.shr64_lo,si=Jt.sum64,qn=Jt.sum64_hi,Gn=Jt.sum64_lo,Hl=Jt.sum64_4_hi,jl=Jt.sum64_4_lo,Dl=Jt.sum64_5_hi,Zl=Jt.sum64_5_lo,va=Nl.BlockHash,Ul=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function me(){if(!(this instanceof me))return new me;va.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=Ul,this.W=new Array(160)}Jt.inherits(me,va);var wa=me;me.blockSize=1024,me.outSize=512,me.hmacStrength=192,me.padLength=128,me.prototype._prepareBlock=function(i,t){for(var e=this.W,r=0;r<32;r++)e[r]=i[t+r];for(;r<e.length;r+=2){var n=t2(e[r-4],e[r-3]),o=e2(e[r-4],e[r-3]),a=e[r-14],l=e[r-13],f=Jl(e[r-30],e[r-29]),m=Xl(e[r-30],e[r-29]),x=e[r-32],C=e[r-31];e[r]=Hl(n,o,a,l,f,m,x,C),e[r+1]=jl(n,o,a,l,f,m,x,C)}},me.prototype._update=function(i,t){this._prepareBlock(i,t);var e=this.W,r=this.h[0],n=this.h[1],o=this.h[2],a=this.h[3],l=this.h[4],f=this.h[5],m=this.h[6],x=this.h[7],C=this.h[8],$=this.h[9],_=this.h[10],R=this.h[11],T=this.h[12],I=this.h[13],F=this.h[14],V=this.h[15];Tl(this.k.length===e.length);for(var J=0;J<e.length;J+=2){var q=F,K=V,et=Yl(C,$),Ht=Kl(C,$),ot=Fl(C,$,_,R,T),Vt=Vl(C,$,_,R,T,I),ne=this.k[J],rt=this.k[J+1],ae=e[J],s=e[J+1],u=Dl(q,K,et,Ht,ot,Vt,ne,rt,ae,s),d=Zl(q,K,et,Ht,ot,Vt,ne,rt,ae,s);q=Gl(r,n),K=Ql(r,n),et=Wl(r,n,o,a,l),Ht=ql(r,n,o,a,l,f);var v=qn(q,K,et,Ht),b=Gn(q,K,et,Ht);F=T,V=I,T=_,I=R,_=C,R=$,C=qn(m,x,u,d),$=Gn(x,x,u,d),m=l,x=f,l=o,f=a,o=r,a=n,r=qn(u,d,v,b),n=Gn(u,d,v,b)}si(this.h,0,r,n),si(this.h,2,o,a),si(this.h,4,l,f),si(this.h,6,m,x),si(this.h,8,C,$),si(this.h,10,_,R),si(this.h,12,T,I),si(this.h,14,F,V)},me.prototype._digest=function(i){return i==="hex"?Jt.toHex32(this.h,"big"):Jt.split32(this.h,"big")};function Fl(i,t,e,r,n){var o=i&e^~i&n;return o<0&&(o+=4294967296),o}function Vl(i,t,e,r,n,o){var a=t&r^~t&o;return a<0&&(a+=4294967296),a}function Wl(i,t,e,r,n){var o=i&e^i&n^e&n;return o<0&&(o+=4294967296),o}function ql(i,t,e,r,n,o){var a=t&r^t&o^r&o;return a<0&&(a+=4294967296),a}function Gl(i,t){var e=ke(i,t,28),r=ke(t,i,2),n=ke(t,i,7),o=e^r^n;return o<0&&(o+=4294967296),o}function Ql(i,t){var e=Be(i,t,28),r=Be(t,i,2),n=Be(t,i,7),o=e^r^n;return o<0&&(o+=4294967296),o}function Yl(i,t){var e=ke(i,t,14),r=ke(i,t,18),n=ke(t,i,9),o=e^r^n;return o<0&&(o+=4294967296),o}function Kl(i,t){var e=Be(i,t,14),r=Be(i,t,18),n=Be(t,i,9),o=e^r^n;return o<0&&(o+=4294967296),o}function Jl(i,t){var e=ke(i,t,1),r=ke(i,t,8),n=pa(i,t,7),o=e^r^n;return o<0&&(o+=4294967296),o}function Xl(i,t){var e=Be(i,t,1),r=Be(i,t,8),n=ga(i,t,7),o=e^r^n;return o<0&&(o+=4294967296),o}function t2(i,t){var e=ke(i,t,19),r=ke(t,i,29),n=pa(i,t,6),o=e^r^n;return o<0&&(o+=4294967296),o}function e2(i,t){var e=Be(i,t,19),r=Be(t,i,29),n=ga(i,t,6),o=e^r^n;return o<0&&(o+=4294967296),o}var g0=tt,ma=wa;function Fe(){if(!(this instanceof Fe))return new Fe;ma.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}g0.inherits(Fe,ma);var i2=Fe;Fe.blockSize=1024,Fe.outSize=384,Fe.hmacStrength=192,Fe.padLength=128,Fe.prototype._digest=function(i){return i==="hex"?g0.toHex32(this.h.slice(0,12),"big"):g0.split32(this.h.slice(0,12),"big")},ur.sha1=Ml,ur.sha224=Ll,ur.sha256=da,ur.sha384=i2,ur.sha512=wa;var ba={},Zi=tt,r2=Pr,To=Zi.rotl32,g1=Zi.sum32,Zr=Zi.sum32_3,v1=Zi.sum32_4,ya=r2.BlockHash;function $e(){if(!(this instanceof $e))return new $e;ya.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}Zi.inherits($e,ya),ba.ripemd160=$e,$e.blockSize=512,$e.outSize=160,$e.hmacStrength=192,$e.padLength=64,$e.prototype._update=function(i,t){for(var e=this.h[0],r=this.h[1],n=this.h[2],o=this.h[3],a=this.h[4],l=e,f=r,m=n,x=o,C=a,$=0;$<80;$++){var _=g1(To(v1(e,w1($,r,n,o),i[a2[$]+t],o2($)),l2[$]),a);e=a,a=o,o=To(n,10),n=r,r=_,_=g1(To(v1(l,w1(79-$,f,m,x),i[s2[$]+t],n2($)),c2[$]),C),l=C,C=x,x=To(m,10),m=f,f=_}_=Zr(this.h[1],n,x),this.h[1]=Zr(this.h[2],o,C),this.h[2]=Zr(this.h[3],a,l),this.h[3]=Zr(this.h[4],e,f),this.h[4]=Zr(this.h[0],r,m),this.h[0]=_},$e.prototype._digest=function(i){return i==="hex"?Zi.toHex32(this.h,"little"):Zi.split32(this.h,"little")};function w1(i,t,e,r){return i<=15?t^e^r:i<=31?t&e|~t&r:i<=47?(t|~e)^r:i<=63?t&r|e&~r:t^(e|~r)}function o2(i){return i<=15?0:i<=31?1518500249:i<=47?1859775393:i<=63?2400959708:2840853838}function n2(i){return i<=15?1352829926:i<=31?1548603684:i<=47?1836072691:i<=63?2053994217:0}var a2=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],s2=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],l2=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],c2=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],u2=tt,h2=Mo;function pr(i,t,e){if(!(this instanceof pr))return new pr(i,t,e);this.Hash=i,this.blockSize=i.blockSize/8,this.outSize=i.outSize/8,this.inner=null,this.outer=null,this._init(u2.toArray(t,e))}var d2=pr;pr.prototype._init=function(i){i.length>this.blockSize&&(i=new this.Hash().update(i).digest()),h2(i.length<=this.blockSize);for(var t=i.length;t<this.blockSize;t++)i.push(0);for(t=0;t<i.length;t++)i[t]^=54;for(this.inner=new this.Hash().update(i),t=0;t<i.length;t++)i[t]^=106;this.outer=new this.Hash().update(i)},pr.prototype.update=function(i,t){return this.inner.update(i,t),this},pr.prototype.digest=function(i){return this.outer.update(this.inner.digest()),this.outer.digest(i)},function(i){var t=i;t.utils=tt,t.common=Pr,t.sha=ur,t.ripemd=ba,t.hmac=d2,t.sha1=t.sha.sha1,t.sha256=t.sha.sha256,t.sha224=t.sha.sha224,t.sha384=t.sha.sha384,t.sha512=t.sha.sha512,t.ripemd160=t.ripemd.ripemd160}(Me);function Lr(i,t,e){return e={path:t,exports:{},require:function(r,n){return f2(r,n??e.path)}},i(e,e.exports),e.exports}function f2(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var _0=xa;function xa(i,t){if(!i)throw new Error(t||"Assertion failed")}xa.equal=function(i,t,e){if(i!=t)throw new Error(e||"Assertion failed: "+i+" != "+t)};var be=Lr(function(i,t){var e=t;function r(a,l){if(Array.isArray(a))return a.slice();if(!a)return[];var f=[];if(typeof a!="string"){for(var m=0;m<a.length;m++)f[m]=a[m]|0;return f}if(l==="hex"){a=a.replace(/[^a-z0-9]+/ig,""),a.length%2!==0&&(a="0"+a);for(var m=0;m<a.length;m+=2)f.push(parseInt(a[m]+a[m+1],16))}else for(var m=0;m<a.length;m++){var x=a.charCodeAt(m),C=x>>8,$=x&255;C?f.push(C,$):f.push($)}return f}e.toArray=r;function n(a){return a.length===1?"0"+a:a}e.zero2=n;function o(a){for(var l="",f=0;f<a.length;f++)l+=n(a[f].toString(16));return l}e.toHex=o,e.encode=function(a,l){return l==="hex"?o(a):a}}),ee=Lr(function(i,t){var e=t;e.assert=_0,e.toArray=be.toArray,e.zero2=be.zero2,e.toHex=be.toHex,e.encode=be.encode;function r(f,m,x){var C=new Array(Math.max(f.bitLength(),x)+1);C.fill(0);for(var $=1<<m+1,_=f.clone(),R=0;R<C.length;R++){var T,I=_.andln($-1);_.isOdd()?(I>($>>1)-1?T=($>>1)-I:T=I,_.isubn(T)):T=0,C[R]=T,_.iushrn(1)}return C}e.getNAF=r;function n(f,m){var x=[[],[]];f=f.clone(),m=m.clone();for(var C=0,$=0,_;f.cmpn(-C)>0||m.cmpn(-$)>0;){var R=f.andln(3)+C&3,T=m.andln(3)+$&3;R===3&&(R=-1),T===3&&(T=-1);var I;R&1?(_=f.andln(7)+C&7,(_===3||_===5)&&T===2?I=-R:I=R):I=0,x[0].push(I);var F;T&1?(_=m.andln(7)+$&7,(_===3||_===5)&&R===2?F=-T:F=T):F=0,x[1].push(F),2*C===I+1&&(C=1-C),2*$===F+1&&($=1-$),f.iushrn(1),m.iushrn(1)}return x}e.getJSF=n;function o(f,m,x){var C="_"+m;f.prototype[m]=function(){return this[C]!==void 0?this[C]:this[C]=x.call(this)}}e.cachedProperty=o;function a(f){return typeof f=="string"?e.toArray(f,"hex"):f}e.parseBytes=a;function l(f){return new Q(f,"hex","le")}e.intFromLE=l}),Ho=ee.getNAF,p2=ee.getJSF,Yo=ee.assert;function li(i,t){this.type=i,this.p=new Q(t.p,16),this.red=t.prime?Q.red(t.prime):Q.mont(this.p),this.zero=new Q(0).toRed(this.red),this.one=new Q(1).toRed(this.red),this.two=new Q(2).toRed(this.red),this.n=t.n&&new Q(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4),this._bitLength=this.n?this.n.bitLength():0;var e=this.n&&this.p.div(this.n);!e||e.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}var tr=li;li.prototype.point=function(){throw new Error("Not implemented")},li.prototype.validate=function(){throw new Error("Not implemented")},li.prototype._fixedNafMul=function(i,t){Yo(i.precomputed);var e=i._getDoubles(),r=Ho(t,1,this._bitLength),n=(1<<e.step+1)-(e.step%2===0?2:1);n/=3;var o=[],a,l;for(a=0;a<r.length;a+=e.step){l=0;for(var f=a+e.step-1;f>=a;f--)l=(l<<1)+r[f];o.push(l)}for(var m=this.jpoint(null,null,null),x=this.jpoint(null,null,null),C=n;C>0;C--){for(a=0;a<o.length;a++)l=o[a],l===C?x=x.mixedAdd(e.points[a]):l===-C&&(x=x.mixedAdd(e.points[a].neg()));m=m.add(x)}return m.toP()},li.prototype._wnafMul=function(i,t){var e=4,r=i._getNAFPoints(e);e=r.wnd;for(var n=r.points,o=Ho(t,e,this._bitLength),a=this.jpoint(null,null,null),l=o.length-1;l>=0;l--){for(var f=0;l>=0&&o[l]===0;l--)f++;if(l>=0&&f++,a=a.dblp(f),l<0)break;var m=o[l];Yo(m!==0),i.type==="affine"?m>0?a=a.mixedAdd(n[m-1>>1]):a=a.mixedAdd(n[-m-1>>1].neg()):m>0?a=a.add(n[m-1>>1]):a=a.add(n[-m-1>>1].neg())}return i.type==="affine"?a.toP():a},li.prototype._wnafMulAdd=function(i,t,e,r,n){var o=this._wnafT1,a=this._wnafT2,l=this._wnafT3,f=0,m,x,C;for(m=0;m<r;m++){C=t[m];var $=C._getNAFPoints(i);o[m]=$.wnd,a[m]=$.points}for(m=r-1;m>=1;m-=2){var _=m-1,R=m;if(o[_]!==1||o[R]!==1){l[_]=Ho(e[_],o[_],this._bitLength),l[R]=Ho(e[R],o[R],this._bitLength),f=Math.max(l[_].length,f),f=Math.max(l[R].length,f);continue}var T=[t[_],null,null,t[R]];t[_].y.cmp(t[R].y)===0?(T[1]=t[_].add(t[R]),T[2]=t[_].toJ().mixedAdd(t[R].neg())):t[_].y.cmp(t[R].y.redNeg())===0?(T[1]=t[_].toJ().mixedAdd(t[R]),T[2]=t[_].add(t[R].neg())):(T[1]=t[_].toJ().mixedAdd(t[R]),T[2]=t[_].toJ().mixedAdd(t[R].neg()));var I=[-3,-1,-5,-7,0,7,5,1,3],F=p2(e[_],e[R]);for(f=Math.max(F[0].length,f),l[_]=new Array(f),l[R]=new Array(f),x=0;x<f;x++){var V=F[0][x]|0,J=F[1][x]|0;l[_][x]=I[(V+1)*3+(J+1)],l[R][x]=0,a[_]=T}}var q=this.jpoint(null,null,null),K=this._wnafT4;for(m=f;m>=0;m--){for(var et=0;m>=0;){var Ht=!0;for(x=0;x<r;x++)K[x]=l[x][m]|0,K[x]!==0&&(Ht=!1);if(!Ht)break;et++,m--}if(m>=0&&et++,q=q.dblp(et),m<0)break;for(x=0;x<r;x++){var ot=K[x];ot!==0&&(ot>0?C=a[x][ot-1>>1]:ot<0&&(C=a[x][-ot-1>>1].neg()),C.type==="affine"?q=q.mixedAdd(C):q=q.add(C))}}for(m=0;m<r;m++)a[m]=null;return n?q:q.toP()};function le(i,t){this.curve=i,this.type=t,this.precomputed=null}li.BasePoint=le,le.prototype.eq=function(){throw new Error("Not implemented")},le.prototype.validate=function(){return this.curve.validate(this)},li.prototype.decodePoint=function(i,t){i=ee.toArray(i,t);var e=this.p.byteLength();if((i[0]===4||i[0]===6||i[0]===7)&&i.length-1===2*e){i[0]===6?Yo(i[i.length-1]%2===0):i[0]===7&&Yo(i[i.length-1]%2===1);var r=this.point(i.slice(1,1+e),i.slice(1+e,1+2*e));return r}else if((i[0]===2||i[0]===3)&&i.length-1===e)return this.pointFromX(i.slice(1,1+e),i[0]===3);throw new Error("Unknown point format")},le.prototype.encodeCompressed=function(i){return this.encode(i,!0)},le.prototype._encode=function(i){var t=this.curve.p.byteLength(),e=this.getX().toArray("be",t);return i?[this.getY().isEven()?2:3].concat(e):[4].concat(e,this.getY().toArray("be",t))},le.prototype.encode=function(i,t){return ee.encode(this._encode(t),i)},le.prototype.precompute=function(i){if(this.precomputed)return this;var t={doubles:null,naf:null,beta:null};return t.naf=this._getNAFPoints(8),t.doubles=this._getDoubles(4,i),t.beta=this._getBeta(),this.precomputed=t,this},le.prototype._hasDoubles=function(i){if(!this.precomputed)return!1;var t=this.precomputed.doubles;return t?t.points.length>=Math.ceil((i.bitLength()+1)/t.step):!1},le.prototype._getDoubles=function(i,t){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var e=[this],r=this,n=0;n<t;n+=i){for(var o=0;o<i;o++)r=r.dbl();e.push(r)}return{step:i,points:e}},le.prototype._getNAFPoints=function(i){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var t=[this],e=(1<<i)-1,r=e===1?null:this.dbl(),n=1;n<e;n++)t[n]=t[n-1].add(r);return{wnd:i,points:t}},le.prototype._getBeta=function(){return null},le.prototype.dblp=function(i){for(var t=this,e=0;e<i;e++)t=t.dbl();return t};var E0=Lr(function(i){typeof Object.create=="function"?i.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:i.exports=function(t,e){if(e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}}}),g2=ee.assert;function ue(i){tr.call(this,"short",i),this.a=new Q(i.a,16).toRed(this.red),this.b=new Q(i.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=this.a.fromRed().cmpn(0)===0,this.threeA=this.a.fromRed().sub(this.p).cmpn(-3)===0,this.endo=this._getEndomorphism(i),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}E0(ue,tr);var v2=ue;ue.prototype._getEndomorphism=function(i){if(!(!this.zeroA||!this.g||!this.n||this.p.modn(3)!==1)){var t,e;if(i.beta)t=new Q(i.beta,16).toRed(this.red);else{var r=this._getEndoRoots(this.p);t=r[0].cmp(r[1])<0?r[0]:r[1],t=t.toRed(this.red)}if(i.lambda)e=new Q(i.lambda,16);else{var n=this._getEndoRoots(this.n);this.g.mul(n[0]).x.cmp(this.g.x.redMul(t))===0?e=n[0]:(e=n[1],g2(this.g.mul(e).x.cmp(this.g.x.redMul(t))===0))}var o;return i.basis?o=i.basis.map(function(a){return{a:new Q(a.a,16),b:new Q(a.b,16)}}):o=this._getEndoBasis(e),{beta:t,lambda:e,basis:o}}},ue.prototype._getEndoRoots=function(i){var t=i===this.p?this.red:Q.mont(i),e=new Q(2).toRed(t).redInvm(),r=e.redNeg(),n=new Q(3).toRed(t).redNeg().redSqrt().redMul(e),o=r.redAdd(n).fromRed(),a=r.redSub(n).fromRed();return[o,a]},ue.prototype._getEndoBasis=function(i){for(var t=this.n.ushrn(Math.floor(this.n.bitLength()/2)),e=i,r=this.n.clone(),n=new Q(1),o=new Q(0),a=new Q(0),l=new Q(1),f,m,x,C,$,_,R,T=0,I,F;e.cmpn(0)!==0;){var V=r.div(e);I=r.sub(V.mul(e)),F=a.sub(V.mul(n));var J=l.sub(V.mul(o));if(!x&&I.cmp(t)<0)f=R.neg(),m=n,x=I.neg(),C=F;else if(x&&++T===2)break;R=I,r=e,e=I,a=n,n=F,l=o,o=J}$=I.neg(),_=F;var q=x.sqr().add(C.sqr()),K=$.sqr().add(_.sqr());return K.cmp(q)>=0&&($=f,_=m),x.negative&&(x=x.neg(),C=C.neg()),$.negative&&($=$.neg(),_=_.neg()),[{a:x,b:C},{a:$,b:_}]},ue.prototype._endoSplit=function(i){var t=this.endo.basis,e=t[0],r=t[1],n=r.b.mul(i).divRound(this.n),o=e.b.neg().mul(i).divRound(this.n),a=n.mul(e.a),l=o.mul(r.a),f=n.mul(e.b),m=o.mul(r.b),x=i.sub(a).sub(l),C=f.add(m).neg();return{k1:x,k2:C}},ue.prototype.pointFromX=function(i,t){i=new Q(i,16),i.red||(i=i.toRed(this.red));var e=i.redSqr().redMul(i).redIAdd(i.redMul(this.a)).redIAdd(this.b),r=e.redSqrt();if(r.redSqr().redSub(e).cmp(this.zero)!==0)throw new Error("invalid point");var n=r.fromRed().isOdd();return(t&&!n||!t&&n)&&(r=r.redNeg()),this.point(i,r)},ue.prototype.validate=function(i){if(i.inf)return!0;var t=i.x,e=i.y,r=this.a.redMul(t),n=t.redSqr().redMul(t).redIAdd(r).redIAdd(this.b);return e.redSqr().redISub(n).cmpn(0)===0},ue.prototype._endoWnafMulAdd=function(i,t,e){for(var r=this._endoWnafT1,n=this._endoWnafT2,o=0;o<i.length;o++){var a=this._endoSplit(t[o]),l=i[o],f=l._getBeta();a.k1.negative&&(a.k1.ineg(),l=l.neg(!0)),a.k2.negative&&(a.k2.ineg(),f=f.neg(!0)),r[o*2]=l,r[o*2+1]=f,n[o*2]=a.k1,n[o*2+1]=a.k2}for(var m=this._wnafMulAdd(1,r,n,o*2,e),x=0;x<o*2;x++)r[x]=null,n[x]=null;return m};function Dt(i,t,e,r){tr.BasePoint.call(this,i,"affine"),t===null&&e===null?(this.x=null,this.y=null,this.inf=!0):(this.x=new Q(t,16),this.y=new Q(e,16),r&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}E0(Dt,tr.BasePoint),ue.prototype.point=function(i,t,e){return new Dt(this,i,t,e)},ue.prototype.pointFromJSON=function(i,t){return Dt.fromJSON(this,i,t)},Dt.prototype._getBeta=function(){if(this.curve.endo){var i=this.precomputed;if(i&&i.beta)return i.beta;var t=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(i){var e=this.curve,r=function(n){return e.point(n.x.redMul(e.endo.beta),n.y)};i.beta=t,t.precomputed={beta:null,naf:i.naf&&{wnd:i.naf.wnd,points:i.naf.points.map(r)},doubles:i.doubles&&{step:i.doubles.step,points:i.doubles.points.map(r)}}}return t}},Dt.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},Dt.fromJSON=function(i,t,e){typeof t=="string"&&(t=JSON.parse(t));var r=i.point(t[0],t[1],e);if(!t[2])return r;function n(a){return i.point(a[0],a[1],e)}var o=t[2];return r.precomputed={beta:null,doubles:o.doubles&&{step:o.doubles.step,points:[r].concat(o.doubles.points.map(n))},naf:o.naf&&{wnd:o.naf.wnd,points:[r].concat(o.naf.points.map(n))}},r},Dt.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},Dt.prototype.isInfinity=function(){return this.inf},Dt.prototype.add=function(i){if(this.inf)return i;if(i.inf)return this;if(this.eq(i))return this.dbl();if(this.neg().eq(i))return this.curve.point(null,null);if(this.x.cmp(i.x)===0)return this.curve.point(null,null);var t=this.y.redSub(i.y);t.cmpn(0)!==0&&(t=t.redMul(this.x.redSub(i.x).redInvm()));var e=t.redSqr().redISub(this.x).redISub(i.x),r=t.redMul(this.x.redSub(e)).redISub(this.y);return this.curve.point(e,r)},Dt.prototype.dbl=function(){if(this.inf)return this;var i=this.y.redAdd(this.y);if(i.cmpn(0)===0)return this.curve.point(null,null);var t=this.curve.a,e=this.x.redSqr(),r=i.redInvm(),n=e.redAdd(e).redIAdd(e).redIAdd(t).redMul(r),o=n.redSqr().redISub(this.x.redAdd(this.x)),a=n.redMul(this.x.redSub(o)).redISub(this.y);return this.curve.point(o,a)},Dt.prototype.getX=function(){return this.x.fromRed()},Dt.prototype.getY=function(){return this.y.fromRed()},Dt.prototype.mul=function(i){return i=new Q(i,16),this.isInfinity()?this:this._hasDoubles(i)?this.curve._fixedNafMul(this,i):this.curve.endo?this.curve._endoWnafMulAdd([this],[i]):this.curve._wnafMul(this,i)},Dt.prototype.mulAdd=function(i,t,e){var r=[this,t],n=[i,e];return this.curve.endo?this.curve._endoWnafMulAdd(r,n):this.curve._wnafMulAdd(1,r,n,2)},Dt.prototype.jmulAdd=function(i,t,e){var r=[this,t],n=[i,e];return this.curve.endo?this.curve._endoWnafMulAdd(r,n,!0):this.curve._wnafMulAdd(1,r,n,2,!0)},Dt.prototype.eq=function(i){return this===i||this.inf===i.inf&&(this.inf||this.x.cmp(i.x)===0&&this.y.cmp(i.y)===0)},Dt.prototype.neg=function(i){if(this.inf)return this;var t=this.curve.point(this.x,this.y.redNeg());if(i&&this.precomputed){var e=this.precomputed,r=function(n){return n.neg()};t.precomputed={naf:e.naf&&{wnd:e.naf.wnd,points:e.naf.points.map(r)},doubles:e.doubles&&{step:e.doubles.step,points:e.doubles.points.map(r)}}}return t},Dt.prototype.toJ=function(){if(this.inf)return this.curve.jpoint(null,null,null);var i=this.curve.jpoint(this.x,this.y,this.curve.one);return i};function Ut(i,t,e,r){tr.BasePoint.call(this,i,"jacobian"),t===null&&e===null&&r===null?(this.x=this.curve.one,this.y=this.curve.one,this.z=new Q(0)):(this.x=new Q(t,16),this.y=new Q(e,16),this.z=new Q(r,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}E0(Ut,tr.BasePoint),ue.prototype.jpoint=function(i,t,e){return new Ut(this,i,t,e)},Ut.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var i=this.z.redInvm(),t=i.redSqr(),e=this.x.redMul(t),r=this.y.redMul(t).redMul(i);return this.curve.point(e,r)},Ut.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},Ut.prototype.add=function(i){if(this.isInfinity())return i;if(i.isInfinity())return this;var t=i.z.redSqr(),e=this.z.redSqr(),r=this.x.redMul(t),n=i.x.redMul(e),o=this.y.redMul(t.redMul(i.z)),a=i.y.redMul(e.redMul(this.z)),l=r.redSub(n),f=o.redSub(a);if(l.cmpn(0)===0)return f.cmpn(0)!==0?this.curve.jpoint(null,null,null):this.dbl();var m=l.redSqr(),x=m.redMul(l),C=r.redMul(m),$=f.redSqr().redIAdd(x).redISub(C).redISub(C),_=f.redMul(C.redISub($)).redISub(o.redMul(x)),R=this.z.redMul(i.z).redMul(l);return this.curve.jpoint($,_,R)},Ut.prototype.mixedAdd=function(i){if(this.isInfinity())return i.toJ();if(i.isInfinity())return this;var t=this.z.redSqr(),e=this.x,r=i.x.redMul(t),n=this.y,o=i.y.redMul(t).redMul(this.z),a=e.redSub(r),l=n.redSub(o);if(a.cmpn(0)===0)return l.cmpn(0)!==0?this.curve.jpoint(null,null,null):this.dbl();var f=a.redSqr(),m=f.redMul(a),x=e.redMul(f),C=l.redSqr().redIAdd(m).redISub(x).redISub(x),$=l.redMul(x.redISub(C)).redISub(n.redMul(m)),_=this.z.redMul(a);return this.curve.jpoint(C,$,_)},Ut.prototype.dblp=function(i){if(i===0)return this;if(this.isInfinity())return this;if(!i)return this.dbl();var t;if(this.curve.zeroA||this.curve.threeA){var e=this;for(t=0;t<i;t++)e=e.dbl();return e}var r=this.curve.a,n=this.curve.tinv,o=this.x,a=this.y,l=this.z,f=l.redSqr().redSqr(),m=a.redAdd(a);for(t=0;t<i;t++){var x=o.redSqr(),C=m.redSqr(),$=C.redSqr(),_=x.redAdd(x).redIAdd(x).redIAdd(r.redMul(f)),R=o.redMul(C),T=_.redSqr().redISub(R.redAdd(R)),I=R.redISub(T),F=_.redMul(I);F=F.redIAdd(F).redISub($);var V=m.redMul(l);t+1<i&&(f=f.redMul($)),o=T,l=V,m=F}return this.curve.jpoint(o,m.redMul(n),l)},Ut.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},Ut.prototype._zeroDbl=function(){var i,t,e;if(this.zOne){var r=this.x.redSqr(),n=this.y.redSqr(),o=n.redSqr(),a=this.x.redAdd(n).redSqr().redISub(r).redISub(o);a=a.redIAdd(a);var l=r.redAdd(r).redIAdd(r),f=l.redSqr().redISub(a).redISub(a),m=o.redIAdd(o);m=m.redIAdd(m),m=m.redIAdd(m),i=f,t=l.redMul(a.redISub(f)).redISub(m),e=this.y.redAdd(this.y)}else{var x=this.x.redSqr(),C=this.y.redSqr(),$=C.redSqr(),_=this.x.redAdd(C).redSqr().redISub(x).redISub($);_=_.redIAdd(_);var R=x.redAdd(x).redIAdd(x),T=R.redSqr(),I=$.redIAdd($);I=I.redIAdd(I),I=I.redIAdd(I),i=T.redISub(_).redISub(_),t=R.redMul(_.redISub(i)).redISub(I),e=this.y.redMul(this.z),e=e.redIAdd(e)}return this.curve.jpoint(i,t,e)},Ut.prototype._threeDbl=function(){var i,t,e;if(this.zOne){var r=this.x.redSqr(),n=this.y.redSqr(),o=n.redSqr(),a=this.x.redAdd(n).redSqr().redISub(r).redISub(o);a=a.redIAdd(a);var l=r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),f=l.redSqr().redISub(a).redISub(a);i=f;var m=o.redIAdd(o);m=m.redIAdd(m),m=m.redIAdd(m),t=l.redMul(a.redISub(f)).redISub(m),e=this.y.redAdd(this.y)}else{var x=this.z.redSqr(),C=this.y.redSqr(),$=this.x.redMul(C),_=this.x.redSub(x).redMul(this.x.redAdd(x));_=_.redAdd(_).redIAdd(_);var R=$.redIAdd($);R=R.redIAdd(R);var T=R.redAdd(R);i=_.redSqr().redISub(T),e=this.y.redAdd(this.z).redSqr().redISub(C).redISub(x);var I=C.redSqr();I=I.redIAdd(I),I=I.redIAdd(I),I=I.redIAdd(I),t=_.redMul(R.redISub(i)).redISub(I)}return this.curve.jpoint(i,t,e)},Ut.prototype._dbl=function(){var i=this.curve.a,t=this.x,e=this.y,r=this.z,n=r.redSqr().redSqr(),o=t.redSqr(),a=e.redSqr(),l=o.redAdd(o).redIAdd(o).redIAdd(i.redMul(n)),f=t.redAdd(t);f=f.redIAdd(f);var m=f.redMul(a),x=l.redSqr().redISub(m.redAdd(m)),C=m.redISub(x),$=a.redSqr();$=$.redIAdd($),$=$.redIAdd($),$=$.redIAdd($);var _=l.redMul(C).redISub($),R=e.redAdd(e).redMul(r);return this.curve.jpoint(x,_,R)},Ut.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var i=this.x.redSqr(),t=this.y.redSqr(),e=this.z.redSqr(),r=t.redSqr(),n=i.redAdd(i).redIAdd(i),o=n.redSqr(),a=this.x.redAdd(t).redSqr().redISub(i).redISub(r);a=a.redIAdd(a),a=a.redAdd(a).redIAdd(a),a=a.redISub(o);var l=a.redSqr(),f=r.redIAdd(r);f=f.redIAdd(f),f=f.redIAdd(f),f=f.redIAdd(f);var m=n.redIAdd(a).redSqr().redISub(o).redISub(l).redISub(f),x=t.redMul(m);x=x.redIAdd(x),x=x.redIAdd(x);var C=this.x.redMul(l).redISub(x);C=C.redIAdd(C),C=C.redIAdd(C);var $=this.y.redMul(m.redMul(f.redISub(m)).redISub(a.redMul(l)));$=$.redIAdd($),$=$.redIAdd($),$=$.redIAdd($);var _=this.z.redAdd(a).redSqr().redISub(e).redISub(l);return this.curve.jpoint(C,$,_)},Ut.prototype.mul=function(i,t){return i=new Q(i,t),this.curve._wnafMul(this,i)},Ut.prototype.eq=function(i){if(i.type==="affine")return this.eq(i.toJ());if(this===i)return!0;var t=this.z.redSqr(),e=i.z.redSqr();if(this.x.redMul(e).redISub(i.x.redMul(t)).cmpn(0)!==0)return!1;var r=t.redMul(this.z),n=e.redMul(i.z);return this.y.redMul(n).redISub(i.y.redMul(r)).cmpn(0)===0},Ut.prototype.eqXToP=function(i){var t=this.z.redSqr(),e=i.toRed(this.curve.red).redMul(t);if(this.x.cmp(e)===0)return!0;for(var r=i.clone(),n=this.curve.redN.redMul(t);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1;if(e.redIAdd(n),this.x.cmp(e)===0)return!0}},Ut.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},Ut.prototype.isInfinity=function(){return this.z.cmpn(0)===0};var Uo=Lr(function(i,t){var e=t;e.base=tr,e.short=v2,e.mont=null,e.edwards=null}),Fo=Lr(function(i,t){var e=t,r=ee.assert;function n(l){l.type==="short"?this.curve=new Uo.short(l):l.type==="edwards"?this.curve=new Uo.edwards(l):this.curve=new Uo.mont(l),this.g=this.curve.g,this.n=this.curve.n,this.hash=l.hash,r(this.g.validate(),"Invalid curve"),r(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}e.PresetCurve=n;function o(l,f){Object.defineProperty(e,l,{configurable:!0,enumerable:!0,get:function(){var m=new n(f);return Object.defineProperty(e,l,{configurable:!0,enumerable:!0,value:m}),m}})}o("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:Me.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),o("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:Me.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),o("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:Me.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),o("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:Me.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),o("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:Me.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),o("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:Me.sha256,gRed:!1,g:["9"]}),o("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:Me.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});var a;try{a=null.crash()}catch{a=void 0}o("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:Me.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",a]})});function ci(i){if(!(this instanceof ci))return new ci(i);this.hash=i.hash,this.predResist=!!i.predResist,this.outLen=this.hash.outSize,this.minEntropy=i.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=be.toArray(i.entropy,i.entropyEnc||"hex"),e=be.toArray(i.nonce,i.nonceEnc||"hex"),r=be.toArray(i.pers,i.persEnc||"hex");_0(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,e,r)}var m1=ci;ci.prototype._init=function(i,t,e){var r=i.concat(t).concat(e);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var n=0;n<this.V.length;n++)this.K[n]=0,this.V[n]=1;this._update(r),this._reseed=1,this.reseedInterval=281474976710656},ci.prototype._hmac=function(){return new Me.hmac(this.hash,this.K)},ci.prototype._update=function(i){var t=this._hmac().update(this.V).update([0]);i&&(t=t.update(i)),this.K=t.digest(),this.V=this._hmac().update(this.V).digest(),i&&(this.K=this._hmac().update(this.V).update([1]).update(i).digest(),this.V=this._hmac().update(this.V).digest())},ci.prototype.reseed=function(i,t,e,r){typeof t!="string"&&(r=e,e=t,t=null),i=be.toArray(i,t),e=be.toArray(e,r),_0(i.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(i.concat(e||[])),this._reseed=1},ci.prototype.generate=function(i,t,e,r){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");typeof t!="string"&&(r=e,e=t,t=null),e&&(e=be.toArray(e,r||"hex"),this._update(e));for(var n=[];n.length<i;)this.V=this._hmac().update(this.V).digest(),n=n.concat(this.V);var o=n.slice(0,i);return this._update(e),this._reseed++,be.encode(o,t)};var Qn=ee.assert;function Wt(i,t){this.ec=i,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}var Yn=Wt;Wt.fromPublic=function(i,t,e){return t instanceof Wt?t:new Wt(i,{pub:t,pubEnc:e})},Wt.fromPrivate=function(i,t,e){return t instanceof Wt?t:new Wt(i,{priv:t,privEnc:e})},Wt.prototype.validate=function(){var i=this.getPublic();return i.isInfinity()?{result:!1,reason:"Invalid public key"}:i.validate()?i.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},Wt.prototype.getPublic=function(i,t){return typeof i=="string"&&(t=i,i=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),t?this.pub.encode(t,i):this.pub},Wt.prototype.getPrivate=function(i){return i==="hex"?this.priv.toString(16,2):this.priv},Wt.prototype._importPrivate=function(i,t){this.priv=new Q(i,t||16),this.priv=this.priv.umod(this.ec.curve.n)},Wt.prototype._importPublic=function(i,t){if(i.x||i.y){this.ec.curve.type==="mont"?Qn(i.x,"Need x coordinate"):(this.ec.curve.type==="short"||this.ec.curve.type==="edwards")&&Qn(i.x&&i.y,"Need both x and y coordinate"),this.pub=this.ec.curve.point(i.x,i.y);return}this.pub=this.ec.curve.decodePoint(i,t)},Wt.prototype.derive=function(i){return i.validate()||Qn(i.validate(),"public point not validated"),i.mul(this.priv).getX()},Wt.prototype.sign=function(i,t,e){return this.ec.sign(i,this,t,e)},Wt.prototype.verify=function(i,t){return this.ec.verify(i,t,this)},Wt.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"};var w2=ee.assert;function dn(i,t){if(i instanceof dn)return i;this._importDER(i,t)||(w2(i.r&&i.s,"Signature without r or s"),this.r=new Q(i.r,16),this.s=new Q(i.s,16),i.recoveryParam===void 0?this.recoveryParam=null:this.recoveryParam=i.recoveryParam)}var jo=dn;function m2(){this.place=0}function Kn(i,t){var e=i[t.place++];if(!(e&128))return e;var r=e&15;if(r===0||r>4)return!1;for(var n=0,o=0,a=t.place;o<r;o++,a++)n<<=8,n|=i[a],n>>>=0;return n<=127?!1:(t.place=a,n)}function b1(i){for(var t=0,e=i.length-1;!i[t]&&!(i[t+1]&128)&&t<e;)t++;return t===0?i:i.slice(t)}dn.prototype._importDER=function(i,t){i=ee.toArray(i,t);var e=new m2;if(i[e.place++]!==48)return!1;var r=Kn(i,e);if(r===!1||r+e.place!==i.length||i[e.place++]!==2)return!1;var n=Kn(i,e);if(n===!1)return!1;var o=i.slice(e.place,n+e.place);if(e.place+=n,i[e.place++]!==2)return!1;var a=Kn(i,e);if(a===!1||i.length!==a+e.place)return!1;var l=i.slice(e.place,a+e.place);if(o[0]===0)if(o[1]&128)o=o.slice(1);else return!1;if(l[0]===0)if(l[1]&128)l=l.slice(1);else return!1;return this.r=new Q(o),this.s=new Q(l),this.recoveryParam=null,!0};function Jn(i,t){if(t<128){i.push(t);return}var e=1+(Math.log(t)/Math.LN2>>>3);for(i.push(e|128);--e;)i.push(t>>>(e<<3)&255);i.push(t)}dn.prototype.toDER=function(i){var t=this.r.toArray(),e=this.s.toArray();for(t[0]&128&&(t=[0].concat(t)),e[0]&128&&(e=[0].concat(e)),t=b1(t),e=b1(e);!e[0]&&!(e[1]&128);)e=e.slice(1);var r=[2];Jn(r,t.length),r=r.concat(t),r.push(2),Jn(r,e.length);var n=r.concat(e),o=[48];return Jn(o,n.length),o=o.concat(n),ee.encode(o,i)};var b2=function(){throw new Error("unsupported")},Ca=ee.assert;function ce(i){if(!(this instanceof ce))return new ce(i);typeof i=="string"&&(Ca(Object.prototype.hasOwnProperty.call(Fo,i),"Unknown curve "+i),i=Fo[i]),i instanceof Fo.PresetCurve&&(i={curve:i}),this.curve=i.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=i.curve.g,this.g.precompute(i.curve.n.bitLength()+1),this.hash=i.hash||i.curve.hash}var y2=ce;ce.prototype.keyPair=function(i){return new Yn(this,i)},ce.prototype.keyFromPrivate=function(i,t){return Yn.fromPrivate(this,i,t)},ce.prototype.keyFromPublic=function(i,t){return Yn.fromPublic(this,i,t)},ce.prototype.genKeyPair=function(i){i||(i={});for(var t=new m1({hash:this.hash,pers:i.pers,persEnc:i.persEnc||"utf8",entropy:i.entropy||b2(this.hash.hmacStrength),entropyEnc:i.entropy&&i.entropyEnc||"utf8",nonce:this.n.toArray()}),e=this.n.byteLength(),r=this.n.sub(new Q(2));;){var n=new Q(t.generate(e));if(!(n.cmp(r)>0))return n.iaddn(1),this.keyFromPrivate(n)}},ce.prototype._truncateToN=function(i,t){var e=i.byteLength()*8-this.n.bitLength();return e>0&&(i=i.ushrn(e)),!t&&i.cmp(this.n)>=0?i.sub(this.n):i},ce.prototype.sign=function(i,t,e,r){typeof e=="object"&&(r=e,e=null),r||(r={}),t=this.keyFromPrivate(t,e),i=this._truncateToN(new Q(i,16));for(var n=this.n.byteLength(),o=t.getPrivate().toArray("be",n),a=i.toArray("be",n),l=new m1({hash:this.hash,entropy:o,nonce:a,pers:r.pers,persEnc:r.persEnc||"utf8"}),f=this.n.sub(new Q(1)),m=0;;m++){var x=r.k?r.k(m):new Q(l.generate(this.n.byteLength()));if(x=this._truncateToN(x,!0),!(x.cmpn(1)<=0||x.cmp(f)>=0)){var C=this.g.mul(x);if(!C.isInfinity()){var $=C.getX(),_=$.umod(this.n);if(_.cmpn(0)!==0){var R=x.invm(this.n).mul(_.mul(t.getPrivate()).iadd(i));if(R=R.umod(this.n),R.cmpn(0)!==0){var T=(C.getY().isOdd()?1:0)|($.cmp(_)!==0?2:0);return r.canonical&&R.cmp(this.nh)>0&&(R=this.n.sub(R),T^=1),new jo({r:_,s:R,recoveryParam:T})}}}}}},ce.prototype.verify=function(i,t,e,r){i=this._truncateToN(new Q(i,16)),e=this.keyFromPublic(e,r),t=new jo(t,"hex");var n=t.r,o=t.s;if(n.cmpn(1)<0||n.cmp(this.n)>=0||o.cmpn(1)<0||o.cmp(this.n)>=0)return!1;var a=o.invm(this.n),l=a.mul(i).umod(this.n),f=a.mul(n).umod(this.n),m;return this.curve._maxwellTrick?(m=this.g.jmulAdd(l,e.getPublic(),f),m.isInfinity()?!1:m.eqXToP(n)):(m=this.g.mulAdd(l,e.getPublic(),f),m.isInfinity()?!1:m.getX().umod(this.n).cmp(n)===0)},ce.prototype.recoverPubKey=function(i,t,e,r){Ca((3&e)===e,"The recovery param is more than two bits"),t=new jo(t,r);var n=this.n,o=new Q(i),a=t.r,l=t.s,f=e&1,m=e>>1;if(a.cmp(this.curve.p.umod(this.curve.n))>=0&&m)throw new Error("Unable to find sencond key candinate");m?a=this.curve.pointFromX(a.add(this.curve.n),f):a=this.curve.pointFromX(a,f);var x=t.r.invm(n),C=n.sub(o).mul(x).umod(n),$=l.mul(x).umod(n);return this.g.mulAdd(C,a,$)},ce.prototype.getKeyRecoveryParam=function(i,t,e,r){if(t=new jo(t,r),t.recoveryParam!==null)return t.recoveryParam;for(var n=0;n<4;n++){var o;try{o=this.recoverPubKey(i,t,n)}catch{continue}if(o.eq(e))return n}throw new Error("Unable to find valid recovery factor")};var x2=Lr(function(i,t){var e=t;e.version="6.5.4",e.utils=ee,e.rand=function(){throw new Error("unsupported")},e.curve=Uo,e.curves=Fo,e.ec=y2,e.eddsa=null});x2.ec;var y1;(function(i){i[i.legacy=0]="legacy",i[i.eip2930=1]="eip2930",i[i.eip1559=2]="eip1559"})(y1||(y1={}));const C2="did:pkh:",Aa=i=>i==null?void 0:i.split(":"),Vh=i=>{const t=i&&Aa(i);if(t)return i.includes(C2)?t[3]:t[1]},Wh=i=>{const t=i&&Aa(i);if(t)return t.pop()},te=is({status:"uninitialized"}),Ur={state:te,subscribeKey(i,t){return rs(te,i,t)},subscribe(i){return os(te,()=>i(te))},_getClient(){if(!te._client)throw new Error("SIWEController client not set");return te._client},async getNonce(i){const e=await this._getClient().getNonce(i);return this.setNonce(e),e},async getSession(){try{const t=await this._getClient().getSession();return t&&(this.setSession(t),this.setStatus("success")),t}catch{return}},createMessage(i){const e=this._getClient().createMessage(i);return this.setMessage(e),e},async verifyMessage(i){return await this._getClient().verifyMessage(i)},async signIn(){return await this._getClient().signIn()},async signOut(){var t;const i=this._getClient();await i.signOut(),this.setStatus("ready"),this.setSession(void 0),(t=i.onSignOut)==null||t.call(i)},onSignIn(i){var e;const t=this._getClient();(e=t.onSignIn)==null||e.call(t,i)},onSignOut(){var t;const i=this._getClient();(t=i.onSignOut)==null||t.call(i)},setSIWEClient(i){te._client=ns(i),te.status="ready",$0.setIsSiweEnabled(i.options.enabled)},setNonce(i){te.nonce=i},setStatus(i){te.status=i},setMessage(i){te.message=i},setSession(i){te.session=i,te.status=i?"success":"ready"}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vo=globalThis,k0=Vo.ShadowRoot&&(Vo.ShadyCSS===void 0||Vo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B0=Symbol(),x1=new WeakMap;let Ma=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==B0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(k0&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=x1.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&x1.set(e,t))}return t}toString(){return this.cssText}};const A2=i=>new Ma(typeof i=="string"?i:i+"",void 0,B0),P=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,n,o)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[o+1],i[0]);return new Ma(e,i,B0)},M2=(i,t)=>{if(k0)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),n=Vo.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,i.appendChild(r)}},C1=k0?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return A2(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$2,defineProperty:S2,getOwnPropertyDescriptor:_2,getOwnPropertyNames:E2,getOwnPropertySymbols:k2,getPrototypeOf:B2}=Object,fi=globalThis,A1=fi.trustedTypes,R2=A1?A1.emptyScript:"",Xn=fi.reactiveElementPolyfillSupport,Yr=(i,t)=>i,Ko={toAttribute(i,t){switch(t){case Boolean:i=i?R2:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},R0=(i,t)=>!$2(i,t),M1={attribute:!0,type:String,converter:Ko,reflect:!1,hasChanged:R0};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),fi.litPropertyMetadata??(fi.litPropertyMetadata=new WeakMap);let hr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=M1){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);n!==void 0&&S2(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:o}=_2(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get(){return n==null?void 0:n.call(this)},set(a){const l=n==null?void 0:n.call(this);o.call(this,a),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??M1}static _$Ei(){if(this.hasOwnProperty(Yr("elementProperties")))return;const t=B2(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Yr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yr("properties"))){const e=this.properties,r=[...E2(e),...k2(e)];for(const n of r)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,n]of e)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const n=this._$Eu(e,r);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(C1(n))}else t!==void 0&&e.push(C1(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return M2(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var o;const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(n!==void 0&&r.reflect===!0){const a=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Ko).toAttribute(e,r.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,e){var o;const r=this.constructor,n=r._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=r.getPropertyOptions(n),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:Ko;this._$Em=n,this[n]=l.fromAttribute(e,a.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??R0)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,a]of n)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(e)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};hr.elementStyles=[],hr.shadowRootOptions={mode:"open"},hr[Yr("elementProperties")]=new Map,hr[Yr("finalized")]=new Map,Xn==null||Xn({ReactiveElement:hr}),(fi.reactiveElementVersions??(fi.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kr=globalThis,Jo=Kr.trustedTypes,$1=Jo?Jo.createPolicy("lit-html",{createHTML:i=>i}):void 0,$a="$lit$",ui=`lit$${Math.random().toFixed(9).slice(2)}$`,Sa="?"+ui,I2=`<${Sa}>`,Ui=document,io=()=>Ui.createComment(""),ro=i=>i===null||typeof i!="object"&&typeof i!="function",_a=Array.isArray,z2=i=>_a(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",t0=`[ 	
\f\r]`,Fr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S1=/-->/g,_1=/>/g,Ti=RegExp(`>|${t0}(?:([^\\s"'>=/]+)(${t0}*=${t0}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),E1=/'/g,k1=/"/g,Ea=/^(?:script|style|textarea|title)$/i,ka=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),A=ka(1),B=ka(2),Fi=Symbol.for("lit-noChange"),Tt=Symbol.for("lit-nothing"),B1=new WeakMap,ji=Ui.createTreeWalker(Ui,129);function Ba(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return $1!==void 0?$1.createHTML(t):t}const P2=(i,t)=>{const e=i.length-1,r=[];let n,o=t===2?"<svg>":"",a=Fr;for(let l=0;l<e;l++){const f=i[l];let m,x,C=-1,$=0;for(;$<f.length&&(a.lastIndex=$,x=a.exec(f),x!==null);)$=a.lastIndex,a===Fr?x[1]==="!--"?a=S1:x[1]!==void 0?a=_1:x[2]!==void 0?(Ea.test(x[2])&&(n=RegExp("</"+x[2],"g")),a=Ti):x[3]!==void 0&&(a=Ti):a===Ti?x[0]===">"?(a=n??Fr,C=-1):x[1]===void 0?C=-2:(C=a.lastIndex-x[2].length,m=x[1],a=x[3]===void 0?Ti:x[3]==='"'?k1:E1):a===k1||a===E1?a=Ti:a===S1||a===_1?a=Fr:(a=Ti,n=void 0);const _=a===Ti&&i[l+1].startsWith("/>")?" ":"";o+=a===Fr?f+I2:C>=0?(r.push(m),f.slice(0,C)+$a+f.slice(C)+ui+_):f+ui+(C===-2?l:_)}return[Ba(i,o+(i[e]||"<?>")+(t===2?"</svg>":"")),r]};let v0=class Ra{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let o=0,a=0;const l=t.length-1,f=this.parts,[m,x]=P2(t,e);if(this.el=Ra.createElement(m,r),ji.currentNode=this.el.content,e===2){const C=this.el.content.firstChild;C.replaceWith(...C.childNodes)}for(;(n=ji.nextNode())!==null&&f.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const C of n.getAttributeNames())if(C.endsWith($a)){const $=x[a++],_=n.getAttribute(C).split(ui),R=/([.?@])?(.*)/.exec($);f.push({type:1,index:o,name:R[2],strings:_,ctor:R[1]==="."?L2:R[1]==="?"?N2:R[1]==="@"?T2:fn}),n.removeAttribute(C)}else C.startsWith(ui)&&(f.push({type:6,index:o}),n.removeAttribute(C));if(Ea.test(n.tagName)){const C=n.textContent.split(ui),$=C.length-1;if($>0){n.textContent=Jo?Jo.emptyScript:"";for(let _=0;_<$;_++)n.append(C[_],io()),ji.nextNode(),f.push({type:2,index:++o});n.append(C[$],io())}}}else if(n.nodeType===8)if(n.data===Sa)f.push({type:2,index:o});else{let C=-1;for(;(C=n.data.indexOf(ui,C+1))!==-1;)f.push({type:7,index:o}),C+=ui.length-1}o++}}static createElement(t,e){const r=Ui.createElement("template");return r.innerHTML=t,r}};function br(i,t,e=i,r){var a,l;if(t===Fi)return t;let n=r!==void 0?(a=e._$Co)==null?void 0:a[r]:e._$Cl;const o=ro(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==o&&((l=n==null?void 0:n._$AO)==null||l.call(n,!1),o===void 0?n=void 0:(n=new o(i),n._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=n:e._$Cl=n),n!==void 0&&(t=br(i,n._$AS(i,t.values),n,r)),t}let O2=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=((t==null?void 0:t.creationScope)??Ui).importNode(e,!0);ji.currentNode=n;let o=ji.nextNode(),a=0,l=0,f=r[0];for(;f!==void 0;){if(a===f.index){let m;f.type===2?m=new I0(o,o.nextSibling,this,t):f.type===1?m=new f.ctor(o,f.name,f.strings,this,t):f.type===6&&(m=new H2(o,this,t)),this._$AV.push(m),f=r[++l]}a!==(f==null?void 0:f.index)&&(o=ji.nextNode(),a++)}return ji.currentNode=Ui,n}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},I0=class Ia{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=Tt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=br(this,t,e),ro(t)?t===Tt||t==null||t===""?(this._$AH!==Tt&&this._$AR(),this._$AH=Tt):t!==this._$AH&&t!==Fi&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):z2(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Tt&&ro(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ui.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=v0.createElement(Ba(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===n)this._$AH.p(e);else{const a=new O2(n,this),l=a.u(this.options);a.p(e),this.T(l),this._$AH=a}}_$AC(t){let e=B1.get(t.strings);return e===void 0&&B1.set(t.strings,e=new v0(t)),e}k(t){_a(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const o of t)n===e.length?e.push(r=new Ia(this.S(io()),this.S(io()),this,this.options)):r=e[n],r._$AI(o),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},fn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,o){this.type=1,this._$AH=Tt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Tt}_$AI(t,e=this,r,n){const o=this.strings;let a=!1;if(o===void 0)t=br(this,t,e,0),a=!ro(t)||t!==this._$AH&&t!==Fi,a&&(this._$AH=t);else{const l=t;let f,m;for(t=o[0],f=0;f<o.length-1;f++)m=br(this,l[r+f],e,f),m===Fi&&(m=this._$AH[f]),a||(a=!ro(m)||m!==this._$AH[f]),m===Tt?t=Tt:t!==Tt&&(t+=(m??"")+o[f+1]),this._$AH[f]=m}a&&!n&&this.j(t)}j(t){t===Tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},L2=class extends fn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Tt?void 0:t}},N2=class extends fn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Tt)}},T2=class extends fn{constructor(t,e,r,n,o){super(t,e,r,n,o),this.type=5}_$AI(t,e=this){if((t=br(this,t,e,0)??Tt)===Fi)return;const r=this._$AH,n=t===Tt&&r!==Tt||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==Tt&&(r===Tt||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},H2=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){br(this,t)}};const e0=Kr.litHtmlPolyfillSupport;e0==null||e0(v0,I0),(Kr.litHtmlVersions??(Kr.litHtmlVersions=[])).push("3.1.4");const j2=(i,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let n=r._$litPart$;if(n===void 0){const o=(e==null?void 0:e.renderBefore)??null;r._$litPart$=n=new I0(t.insertBefore(io(),o),o,void 0,e??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let z=class extends hr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j2(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Fi}};var F1;z._$litElement$=!0,z.finalized=!0,(F1=globalThis.litElementHydrateSupport)==null||F1.call(globalThis,{LitElement:z});const i0=globalThis.litElementPolyfillSupport;i0==null||i0({LitElement:z});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");const L=P`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,G=P`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,pn=P`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function D2(i,t){const{kind:e,elements:r}=t;return{kind:e,elements:r,finisher(n){customElements.get(i)||customElements.define(i,n)}}}function Z2(i,t){return customElements.get(i)||customElements.define(i,t),t}function O(i){return function(e){return typeof e=="function"?Z2(i,e):D2(i,e)}}const U2=P`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var F2=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let w0=class extends z{render(){return A`<slot></slot>`}};w0.styles=[L,U2];w0=F2([O("wui-card")],w0);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V2={attribute:!0,type:String,converter:Ko,reflect:!1,hasChanged:R0},W2=(i=V2,t,e)=>{const{kind:r,metadata:n}=e;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(e.name,i),r==="accessor"){const{name:a}=e;return{set(l){const f=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,f,i)},init(l){return l!==void 0&&this.P(a,void 0,i),l}}}if(r==="setter"){const{name:a}=e;return function(l){const f=this[a];t.call(this,l),this.requestUpdate(a,f,i)}}throw Error("Unsupported decorator location: "+r)};function p(i){return(t,e)=>typeof e=="object"?W2(i,t,e):((r,n,o)=>{const a=n.hasOwnProperty(o);return n.constructor.createProperty(o,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(n,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $o(i){return p({...i,state:!0,attribute:!1})}const q2=P`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,G2=B`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`,Q2=B`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,Y2=B`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,K2=B`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,J2=B`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,X2=B`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,tc=B`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,ec=B`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ic=B`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,rc=B`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,oc=B`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,nc=B`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,ac=B`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`,sc=B`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="#26D962"/>
</svg>
`,lc=B`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,cc=B`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,uc=B`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,hc=B`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,dc=B`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,fc=B`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`,pc=B`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,gc=B`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,vc=B`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,wc=B`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,mc=B` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,bc=B`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,yc=B`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,xc=B`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Cc=B`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Ac=B`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,Mc=B`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,$c=B`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Sc=B`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,_c=B`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,Ec=B`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,kc=B`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Bc=B`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,Rc=B`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,Ic=B`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`,zc=B`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,Pc=B`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,Oc=B`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,Lc=B`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`,Nc=B`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,Tc=B`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,Hc=B`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,jc=B` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,Dc=B`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,Zc=B`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,Uc=B`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,Fc=B`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,Vc=B`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,Wc=B`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,qc=B`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,Gc=B`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,Qc=B`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,Yc=B`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,Kc=B`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Jc=B`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,Xc=B`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`,tu=B`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eu=B`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,iu=B`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,ru=B`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,ou=B`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,nu=B`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,au=B`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,su=B`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,lu=B`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`,cu=B`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`,R1=B`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var gn=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};const uu={add:G2,allWallets:Q2,arrowBottomCircle:Y2,appStore:K2,apple:J2,arrowBottom:X2,arrowLeft:tc,arrowRight:ec,arrowTop:ic,bank:rc,browser:oc,card:nc,checkmark:sc,checkmarkBold:ac,chevronBottom:lc,chevronLeft:cc,chevronRight:uc,chevronTop:hc,chromeStore:dc,clock:fc,close:pc,compass:vc,coinPlaceholder:gc,copy:wc,cursor:mc,cursorTransparent:bc,desktop:yc,disconnect:xc,discord:Cc,etherscan:Ac,extension:Mc,externalLink:$c,facebook:Sc,farcaster:_c,filters:Ec,github:kc,google:Bc,helpCircle:Rc,image:Ic,id:cu,infoCircle:zc,lightbulb:lu,mail:Pc,mobile:Oc,more:Lc,networkPlaceholder:Nc,nftPlaceholder:Tc,off:Hc,playStore:jc,plus:Dc,qrCode:Zc,recycleHorizontal:Uc,refresh:Fc,search:Vc,send:Wc,swapHorizontal:qc,swapHorizontalMedium:Qc,swapHorizontalBold:Gc,swapHorizontalRoundedBold:Yc,swapVertical:Kc,telegram:Jc,threeDots:Xc,twitch:tu,twitter:R1,twitterIcon:eu,verify:iu,verifyFilled:ru,wallet:nu,walletConnect:au,walletPlaceholder:ou,warningCircle:su,x:R1};let yr=class extends z{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,A`${uu[this.name]}`}};yr.styles=[L,pn,q2];gn([p()],yr.prototype,"size",void 0);gn([p()],yr.prototype,"name",void 0);gn([p()],yr.prototype,"color",void 0);yr=gn([O("wui-icon")],yr);const hu=P`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var vn=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let xr=class extends z{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,A`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};xr.styles=[L,pn,hu];vn([p()],xr.prototype,"src",void 0);vn([p()],xr.prototype,"alt",void 0);vn([p()],xr.prototype,"size",void 0);xr=vn([O("wui-image")],xr);const du=P`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var fu=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let m0=class extends z{render(){return A`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};m0.styles=[L,du];m0=fu([O("wui-loading-hexagon")],m0);const pu=P`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var z0=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let oo=class extends z{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,A`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};oo.styles=[L,pu];z0([p()],oo.prototype,"color",void 0);z0([p()],oo.prototype,"size",void 0);oo=z0([O("wui-loading-spinner")],oo);const gu=P`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var za=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Xo=class extends z{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,r=36-t,n=116+r,o=245+r,a=360+r*1.75;return A`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${n} ${o}"
          stroke-dashoffset=${a}
        />
      </svg>
    `}};Xo.styles=[L,gu];za([p({type:Number})],Xo.prototype,"radius",void 0);Xo=za([O("wui-loading-thumbnail")],Xo);const vu=P`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var So=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Vi=class extends z{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,A`<slot></slot>`}};Vi.styles=[vu];So([p()],Vi.prototype,"width",void 0);So([p()],Vi.prototype,"height",void 0);So([p()],Vi.prototype,"borderRadius",void 0);So([p()],Vi.prototype,"variant",void 0);Vi=So([O("wui-shimmer")],Vi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pa={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Oa=i=>(...t)=>({_$litDirective$:i,values:t});let La=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Na=Oa(class extends La{constructor(i){var t;if(super(i),i.type!==Pa.ATTRIBUTE||i.name!=="class"||((t=i.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var r,n;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.nt)!=null&&r.has(o))&&this.st.add(o);return this.render(t)}const e=i.element.classList;for(const o of this.st)o in t||(e.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||(n=this.nt)!=null&&n.has(o)||(a?(e.add(o),this.st.add(o)):(e.remove(o),this.st.delete(o)))}return Fi}}),wu=P`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var _o=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Wi=class extends z{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,A`<slot class=${Na(t)}></slot>`}};Wi.styles=[L,wu];_o([p()],Wi.prototype,"variant",void 0);_o([p()],Wi.prototype,"color",void 0);_o([p()],Wi.prototype,"align",void 0);_o([p()],Wi.prototype,"lineClamp",void 0);Wi=_o([O("wui-text")],Wi);const mu=B`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,bu=B`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,yu=B`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,xu=B`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Cu=B`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Au=B`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Mu=B`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,$u=B`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,Su=B`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,_u=B`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,Eu=B`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,ku=B`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,Bu=B`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,Ru=B`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,Iu=B`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,zu=B`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Pu=B`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Ou=B`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,Lu=B`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,Nu=B`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Tu=B`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Hu=B`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`,ju=P`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var P0=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};const Du={browser:mu,dao:bu,defi:yu,defiAlt:xu,eth:Cu,layers:Au,lock:Mu,login:$u,network:Su,nft:_u,noun:Eu,profile:ku,system:Bu,coinbase:Ru,meld:Hu,onrampCard:Ou,moonpay:Iu,stripe:zu,paypal:Pu,google:Lu,pencil:Nu,lightbulb:Tu};let no=class extends z{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,A`${Du[this.name]}`}};no.styles=[L,ju];P0([p()],no.prototype,"name",void 0);P0([p()],no.prototype,"size",void 0);no=P0([O("wui-visual")],no);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=i=>i??Tt,it={getSpacingStyles(i,t){if(Array.isArray(i))return i[t]?`var(--wui-spacing-${i[t]})`:void 0;if(typeof i=="string")return`var(--wui-spacing-${i})`},getFormattedDate(i){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(i)},getHostName(i){try{return new URL(i).hostname}catch{return""}},getTruncateString({string:i,charsStart:t,charsEnd:e,truncate:r}){return i.length<=t+e?i:r==="end"?`${i.substring(0,t)}...`:r==="start"?`...${i.substring(i.length-e)}`:`${i.substring(0,Math.floor(t))}...${i.substring(i.length-Math.floor(e))}`},generateAvatarColors(i){const e=i.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(e),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),a=100-3*Number(n==null?void 0:n.replace("px","")),l=`${a}% ${a}% at 65% 40%`,f=[];for(let m=0;m<5;m+=1){const x=this.tintColor(r,.15*m);f.push(`rgb(${x[0]}, ${x[1]}, ${x[2]})`)}return`
    --local-color-1: ${f[0]};
    --local-color-2: ${f[1]};
    --local-color-3: ${f[2]};
    --local-color-4: ${f[3]};
    --local-color-5: ${f[4]};
    --local-radial-circle: ${l}
   `},hexToRgb(i){const t=parseInt(i,16),e=t>>16&255,r=t>>8&255,n=t&255;return[e,r,n]},tintColor(i,t){const[e,r,n]=i,o=Math.round(e+(255-e)*t),a=Math.round(r+(255-r)*t),l=Math.round(n+(255-n)*t);return[o,a,l]},isNumber(i){return{number:/^[0-9]+$/u}.number.test(i)},getColorTheme(i){return i||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},splitBalance(i){const t=i.split(".");return t.length===2?[t[0],t[1]]:["0","00"]},roundNumber(i,t,e){return i.toString().length>=t?Number(i).toFixed(e):i},formatNumberToLocalString(i,t=2){return i===void 0?"0.00":typeof i=="number"?i.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(i).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})}},Zu=P`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var oe=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Qt=class extends z{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&it.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&it.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&it.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&it.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&it.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&it.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&it.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&it.getSpacingStyles(this.margin,3)};
    `,A`<slot></slot>`}};Qt.styles=[L,Zu];oe([p()],Qt.prototype,"flexDirection",void 0);oe([p()],Qt.prototype,"flexWrap",void 0);oe([p()],Qt.prototype,"flexBasis",void 0);oe([p()],Qt.prototype,"flexGrow",void 0);oe([p()],Qt.prototype,"flexShrink",void 0);oe([p()],Qt.prototype,"alignItems",void 0);oe([p()],Qt.prototype,"justifyContent",void 0);oe([p()],Qt.prototype,"columnGap",void 0);oe([p()],Qt.prototype,"rowGap",void 0);oe([p()],Qt.prototype,"gap",void 0);oe([p()],Qt.prototype,"padding",void 0);oe([p()],Qt.prototype,"margin",void 0);Qt=oe([O("wui-flex")],Qt);const Uu=P`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Eo=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let qi=class extends z{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `,A`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",A`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const t=it.generateAvatarColors(this.address);return this.style.cssText+=`
 ${t}`,null}return this.dataset.variant="default",null}};qi.styles=[L,Uu];Eo([p()],qi.prototype,"imageSrc",void 0);Eo([p()],qi.prototype,"alt",void 0);Eo([p()],qi.prototype,"address",void 0);Eo([p()],qi.prototype,"size",void 0);qi=Eo([O("wui-avatar")],qi);const Fu=P`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var Xe=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let ye=class extends z{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e=this.size==="lg",r=this.size==="xl",n=e?"12%":"16%",o=e?"xxs":r?"s":"3xl",a=this.background==="gray",l=this.background==="opaque",f=this.backgroundColor==="accent-100"&&l||this.backgroundColor==="success-100"&&l||this.backgroundColor==="error-100"&&l||this.backgroundColor==="inverse-100"&&l;let m=`var(--wui-color-${this.backgroundColor})`;return f?m=`var(--wui-icon-box-bg-${this.backgroundColor})`:a&&(m=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${m};
       --local-bg-mix: ${f||a?"100%":n};
       --local-border-radius: var(--wui-border-radius-${o});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,A` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};ye.styles=[L,G,Fu];Xe([p()],ye.prototype,"size",void 0);Xe([p()],ye.prototype,"backgroundColor",void 0);Xe([p()],ye.prototype,"iconColor",void 0);Xe([p()],ye.prototype,"iconSize",void 0);Xe([p()],ye.prototype,"background",void 0);Xe([p({type:Boolean})],ye.prototype,"border",void 0);Xe([p()],ye.prototype,"borderColor",void 0);Xe([p()],ye.prototype,"icon",void 0);ye=Xe([O("wui-icon-box")],ye);const Vu=P`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Ne=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let he=class extends z{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return A`
      <button
        ?disabled=${this.disabled}
        class=${Re(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?it.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return A` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const t=this.networkSrc?A`<wui-image src=${this.networkSrc}></wui-image>`:A`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return A`
        ${t}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};he.styles=[L,G,Vu];Ne([p()],he.prototype,"networkSrc",void 0);Ne([p()],he.prototype,"avatarSrc",void 0);Ne([p()],he.prototype,"balance",void 0);Ne([p({type:Boolean})],he.prototype,"isUnsupportedChain",void 0);Ne([p({type:Boolean})],he.prototype,"disabled",void 0);Ne([p()],he.prototype,"address",void 0);Ne([p()],he.prototype,"profileName",void 0);Ne([p()],he.prototype,"charsStart",void 0);Ne([p()],he.prototype,"charsEnd",void 0);he=Ne([O("wui-account-button")],he);const Wu=P`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var er=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Ve=class extends z{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),A`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?A`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?A`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:A`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Ve.styles=[L,Wu];er([p()],Ve.prototype,"size",void 0);er([p()],Ve.prototype,"name",void 0);er([p()],Ve.prototype,"imageSrc",void 0);er([p()],Ve.prototype,"walletIcon",void 0);er([p({type:Boolean})],Ve.prototype,"installed",void 0);er([p()],Ve.prototype,"badgeSize",void 0);Ve=er([O("wui-wallet-image")],Ve);const qu=P`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Ta=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};const r0=4;let tn=class extends z{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<r0;return A`${this.walletImages.slice(0,r0).map(({src:e,walletName:r})=>A`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${Re(r)}
            ></wui-wallet-image>
          `)}
      ${t?[...Array(r0-this.walletImages.length)].map(()=>A` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};tn.styles=[L,qu];Ta([p({type:Array})],tn.prototype,"walletImages",void 0);tn=Ta([O("wui-all-wallets-image")],tn);const Gu=P`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var Te=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};const I1={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},Qu={lg:"paragraph-600",md:"small-600"},Yu={lg:"md",md:"md"};let de=class extends z{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const t=this.textVariant??Qu[this.size];return A`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=Yu[this.size],e=this.disabled?I1.disabled:I1[this.variant];return A`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return A``}};de.styles=[L,G,Gu];Te([p()],de.prototype,"size",void 0);Te([p({type:Boolean})],de.prototype,"disabled",void 0);Te([p({type:Boolean})],de.prototype,"fullWidth",void 0);Te([p({type:Boolean})],de.prototype,"loading",void 0);Te([p()],de.prototype,"variant",void 0);Te([p({type:Boolean})],de.prototype,"hasIconLeft",void 0);Te([p({type:Boolean})],de.prototype,"hasIconRight",void 0);Te([p()],de.prototype,"borderRadius",void 0);Te([p()],de.prototype,"textVariant",void 0);de=Te([O("wui-button")],de);const Ha=B`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Ku=P`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }
`;var ja=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let en=class extends z{constructor(){super(...arguments),this.type="wallet"}render(){return A`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?A` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Ha}`:A`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};en.styles=[L,G,Ku];ja([p()],en.prototype,"type",void 0);en=ja([O("wui-card-select-loader")],en);const Ju=B`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,Xu=B`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,t3=P`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var ir=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let We=class extends z{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:Ju,md:Ha,lg:Xu},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--wui-spacing-3xl);
      --local-height: var(--wui-spacing-3xl);
      --local-icon-size: var(--wui-spacing-l);
    `):this.style.cssText=`

      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,A`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?A`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:A`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};We.styles=[L,t3];ir([p()],We.prototype,"size",void 0);ir([p()],We.prototype,"name",void 0);ir([p({type:Object})],We.prototype,"networkImagesBySize",void 0);ir([p()],We.prototype,"imageSrc",void 0);ir([p({type:Boolean})],We.prototype,"selected",void 0);ir([p({type:Boolean})],We.prototype,"round",void 0);We=ir([O("wui-network-image")],We);const e3=P`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`;var rr=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let qe=class extends z{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return A`
      <button data-selected=${Re(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?A`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${Re(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:A`
      <wui-wallet-image
        size="md"
        imageSrc=${Re(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};qe.styles=[L,G,e3];rr([p()],qe.prototype,"name",void 0);rr([p()],qe.prototype,"type",void 0);rr([p()],qe.prototype,"imageSrc",void 0);rr([p({type:Boolean})],qe.prototype,"disabled",void 0);rr([p({type:Boolean})],qe.prototype,"selected",void 0);rr([p({type:Boolean})],qe.prototype,"installed",void 0);qe=rr([O("wui-card-select")],qe);const i3=P`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var or=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Ge=class extends z{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const e=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return A`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${this.title?this.title:it.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?A`<wui-image src=${this.imageSrc}></wui-image>`:null}};Ge.styles=[L,G,i3];or([p()],Ge.prototype,"variant",void 0);or([p()],Ge.prototype,"imageSrc",void 0);or([p({type:Boolean})],Ge.prototype,"disabled",void 0);or([p()],Ge.prototype,"icon",void 0);or([p()],Ge.prototype,"href",void 0);or([p()],Ge.prototype,"text",void 0);Ge=or([O("wui-chip")],Ge);const r3=P`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var O0=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let ao=class extends z{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const t=this.size==="md"?"paragraph-600":"small-600";return A`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${t} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?A`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};ao.styles=[L,G,r3];O0([p()],ao.prototype,"size",void 0);O0([p({type:Boolean})],ao.prototype,"loading",void 0);ao=O0([O("wui-connect-button")],ao);const o3=P`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var wn=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Cr=class extends z{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return A`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Cr.styles=[L,G,o3];wn([p({type:Boolean})],Cr.prototype,"disabled",void 0);wn([p()],Cr.prototype,"label",void 0);wn([p()],Cr.prototype,"buttonLabel",void 0);Cr=wn([O("wui-cta-button")],Cr);const n3=P`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;var a3=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let b0=class extends z{render(){return A`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};b0.styles=[L,G,n3];b0=a3([O("wui-details-group")],b0);const s3=P`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`;var Da=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let rn=class extends z{constructor(){super(...arguments),this.name=""}render(){return A`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};rn.styles=[L,G,s3];Da([p()],rn.prototype,"name",void 0);rn=Da([O("wui-details-group-item")],rn);const l3=P`
  :host {
    z-index: calc(var(--w3m-z-index) + 1);
    width: 200px;
    padding: var(--wui-spacing-3xs);
    align-items: center;
    display: inherit;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-fg-base-125);
    /* Dark/Elevation/L */
    box-shadow:
      0px 8px 22px -6px rgba(0, 0, 0, 0.12),
      0px 14px 64px -4px rgba(0, 0, 0, 0.12);
  }
`;var L0=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let so=class extends z{constructor(){super(...arguments),this.actions=[],this.isOpen=!1}render(){return this.isOpen?A`
      <wui-flex flexDirection="column" gap="4xs">
        ${this.actions.map(t=>A`
            <wui-list-item
              icon=${t.icon}
              iconSize="sm"
              variant="icon"
              @click=${t.onClick}
            >
              <wui-text variant="small-400" color="fg-100">${t.label}</wui-text>
            </wui-list-item>
          `)}
      </wui-flex>
    `:null}};so.styles=[L,G,l3];L0([p({type:Array})],so.prototype,"actions",void 0);L0([p({type:Boolean})],so.prototype,"isOpen",void 0);so=L0([O("wui-dropdown-menu")],so);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c3=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jr=(i,t)=>{var r;const e=i._$AN;if(e===void 0)return!1;for(const n of e)(r=n._$AO)==null||r.call(n,t,!1),Jr(n,t);return!0},on=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},Za=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),d3(t)}};function u3(i){this._$AN!==void 0?(on(this),this._$AM=i,Za(this)):this._$AM=i}function h3(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let o=e;o<r.length;o++)Jr(r[o],!1),on(r[o]);else r!=null&&(Jr(r,!1),on(r));else Jr(this,i)}const d3=i=>{i.type==Pa.CHILD&&(i._$AP??(i._$AP=h3),i._$AQ??(i._$AQ=u3))};let f3=class extends La{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),Za(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,n;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(n=this.disconnected)==null||n.call(this)),e&&(Jr(this,t),on(this))}setValue(t){if(c3(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N0=()=>new p3;let p3=class{};const o0=new WeakMap,T0=Oa(class extends f3{render(i){return Tt}update(i,[t]){var r;const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=(r=i.options)==null?void 0:r.host,this.rt(this.ct=i.element)),Tt}rt(i){if(this.isConnected||(i=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=o0.get(t);e===void 0&&(e=new WeakMap,o0.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=o0.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),g3=P`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var ti=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let xe=class extends z{constructor(){super(...arguments),this.inputElementRef=N0(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,r={[`wui-size-${this.size}`]:!0,[t]:!!this.inputRightPadding};return A`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${T0(this.inputElementRef)}
        class=${Na(r)}
        type=${this.type}
        enterkeyhint=${Re(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?A`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};xe.styles=[L,G,g3];ti([p()],xe.prototype,"size",void 0);ti([p()],xe.prototype,"icon",void 0);ti([p({type:Boolean})],xe.prototype,"disabled",void 0);ti([p()],xe.prototype,"placeholder",void 0);ti([p()],xe.prototype,"type",void 0);ti([p()],xe.prototype,"keyHint",void 0);ti([p()],xe.prototype,"value",void 0);ti([p()],xe.prototype,"inputRightPadding",void 0);xe=ti([O("wui-input-text")],xe);const v3=P`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var mn=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Ar=class extends z{constructor(){super(...arguments),this.disabled=!1}render(){return A`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?A`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Ar.styles=[L,v3];mn([p()],Ar.prototype,"errorMessage",void 0);mn([p({type:Boolean})],Ar.prototype,"disabled",void 0);mn([p()],Ar.prototype,"value",void 0);Ar=mn([O("wui-email-input")],Ar);const w3=P`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var ko=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Gi=class extends z{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return A`
      <wui-input-text
        value=${Re(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return A`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${as.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?A`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?A`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};Gi.styles=[L,w3];ko([p()],Gi.prototype,"errorMessage",void 0);ko([p({type:Boolean})],Gi.prototype,"disabled",void 0);ko([p()],Gi.prototype,"value",void 0);ko([p({type:Boolean})],Gi.prototype,"loading",void 0);Gi=ko([O("wui-ens-input")],Gi);const m3=P`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var Bo=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Qi=class extends z{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const t=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",e=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${t});
    --local-padding: var(${e});
`,A`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Qi.styles=[L,G,pn,m3];Bo([p()],Qi.prototype,"size",void 0);Bo([p({type:Boolean})],Qi.prototype,"disabled",void 0);Bo([p()],Qi.prototype,"icon",void 0);Bo([p()],Qi.prototype,"iconColor",void 0);Qi=Bo([O("wui-icon-link")],Qi);const b3=P`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var Ua=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let nn=class extends z{constructor(){super(...arguments),this.icon="copy"}render(){return A`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};nn.styles=[L,G,b3];Ua([p()],nn.prototype,"icon",void 0);nn=Ua([O("wui-input-element")],nn);const y3=P`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var H0=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let lo=class extends z{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return A`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};lo.styles=[L,G,y3];H0([p({type:Boolean})],lo.prototype,"disabled",void 0);H0([p({type:String})],lo.prototype,"value",void 0);lo=H0([O("wui-input-numeric")],lo);const x3=P`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var j0=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let co=class extends z{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return A`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};co.styles=[L,G,x3];j0([p({type:Boolean})],co.prototype,"disabled",void 0);j0([p()],co.prototype,"color",void 0);co=j0([O("wui-link")],co);const C3=P`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var He=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let fe=class extends z{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return A`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${Re(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return A`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return A`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:e;return A`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?A`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:A``}chevronTemplate(){return this.chevron?A`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};fe.styles=[L,G,C3];He([p()],fe.prototype,"icon",void 0);He([p()],fe.prototype,"iconSize",void 0);He([p()],fe.prototype,"variant",void 0);He([p()],fe.prototype,"iconVariant",void 0);He([p({type:Boolean})],fe.prototype,"disabled",void 0);He([p()],fe.prototype,"imageSrc",void 0);He([p()],fe.prototype,"alt",void 0);He([p({type:Boolean})],fe.prototype,"chevron",void 0);He([p({type:Boolean})],fe.prototype,"loading",void 0);fe=He([O("wui-list-item")],fe);var y0;(function(i){i.approve="approved",i.bought="bought",i.borrow="borrowed",i.burn="burnt",i.cancel="canceled",i.claim="claimed",i.deploy="deployed",i.deposit="deposited",i.execute="executed",i.mint="minted",i.receive="received",i.repay="repaid",i.send="sent",i.sell="sold",i.stake="staked",i.trade="swapped",i.unstake="unstaked",i.withdraw="withdrawn"})(y0||(y0={}));const A3=P`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var nr=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Qe=class extends z{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,e]=this.images,r=(t==null?void 0:t.type)==="NFT",n=e!=null&&e.url?e.type==="NFT":r,o=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",a=n?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${o};
    --local-right-border-radius: ${a};
    `,A`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,e]=this.images,r=t==null?void 0:t.type;return this.images.length===2&&(t!=null&&t.url||e!=null&&e.url)?A`<div class="swap-images-container">
        ${t!=null&&t.url?A`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${e!=null&&e.url?A`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t!=null&&t.url?A`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:r==="NFT"?A`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:A`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t="accent-100",e;return e=this.getIcon(),this.status&&(t=this.getStatusColor()),e?A`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Qe.styles=[A3];nr([p()],Qe.prototype,"type",void 0);nr([p()],Qe.prototype,"status",void 0);nr([p()],Qe.prototype,"direction",void 0);nr([p({type:Boolean})],Qe.prototype,"onlyDirectionIcon",void 0);nr([p({type:Array})],Qe.prototype,"images",void 0);nr([p({type:Object})],Qe.prototype,"secondImage",void 0);Qe=nr([O("wui-transaction-visual")],Qe);const M3=P`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Ce=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let ie=class extends z{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return A`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${Re(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${Re(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${y0[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var e;const t=(e=this.descriptions)==null?void 0:e[0];return t?A`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var e;const t=(e=this.descriptions)==null?void 0:e[1];return t?A`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};ie.styles=[L,M3];Ce([p()],ie.prototype,"type",void 0);Ce([p({type:Array})],ie.prototype,"descriptions",void 0);Ce([p()],ie.prototype,"date",void 0);Ce([p({type:Boolean})],ie.prototype,"onlyDirectionIcon",void 0);Ce([p()],ie.prototype,"status",void 0);Ce([p()],ie.prototype,"direction",void 0);Ce([p({type:Array})],ie.prototype,"images",void 0);Ce([p({type:Array})],ie.prototype,"price",void 0);Ce([p({type:Array})],ie.prototype,"amount",void 0);Ce([p({type:Array})],ie.prototype,"symbol",void 0);ie=Ce([O("wui-transaction-list-item")],ie);const $3=P`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var S3=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let x0=class extends z{render(){return A`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};x0.styles=[L,$3];x0=S3([O("wui-transaction-list-item-loader")],x0);const _3=P`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var D0=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let uo=class extends z{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t=this.size==="md"?"mini-700":"micro-700";return A`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};uo.styles=[L,_3];D0([p()],uo.prototype,"variant",void 0);D0([p()],uo.prototype,"size",void 0);uo=D0([O("wui-tag")],uo);const E3=P`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var Ae=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let re=class extends z{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return A`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?A` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?A` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?A`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?A`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?A`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?A`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};re.styles=[L,G,E3];Ae([p({type:Array})],re.prototype,"walletImages",void 0);Ae([p()],re.prototype,"imageSrc",void 0);Ae([p()],re.prototype,"name",void 0);Ae([p()],re.prototype,"tagLabel",void 0);Ae([p()],re.prototype,"tagVariant",void 0);Ae([p()],re.prototype,"icon",void 0);Ae([p()],re.prototype,"walletIcon",void 0);Ae([p({type:Boolean})],re.prototype,"installed",void 0);Ae([p({type:Boolean})],re.prototype,"disabled",void 0);Ae([p({type:Boolean})],re.prototype,"showAllWallets",void 0);re=Ae([O("wui-list-wallet")],re);const k3=P`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var Fa=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let an=class extends z{constructor(){super(...arguments),this.logo="google"}render(){return A`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};an.styles=[L,k3];Fa([p()],an.prototype,"logo",void 0);an=Fa([O("wui-logo")],an);const B3=P`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Z0=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let ho=class extends z{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return A`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};ho.styles=[L,G,B3];Z0([p()],ho.prototype,"logo",void 0);Z0([p({type:Boolean})],ho.prototype,"disabled",void 0);ho=Z0([O("wui-logo-select")],ho);const R3=P`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var bn=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Mr=class extends z{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return A`
      <button data-testid="w3m-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?A`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?A`<wui-image src=${this.imageSrc}></wui-image>`:A`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Mr.styles=[L,G,R3];bn([p()],Mr.prototype,"imageSrc",void 0);bn([p({type:Boolean})],Mr.prototype,"isUnsupportedChain",void 0);bn([p({type:Boolean})],Mr.prototype,"disabled",void 0);Mr=bn([O("wui-network-button")],Mr);const I3=P`
  :host {
    position: relative;
    display: block;
  }
`;var yn=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let $r=class extends z{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=t=>this.values.slice(0,t).every(r=>r!==""),this.handleKeyDown=(t,e)=>{const r=t.target,n=this.getInputElement(r),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!n)return;o.includes(t.key)&&t.preventDefault();const a=n.selectionStart;switch(t.key){case"ArrowLeft":a&&n.setSelectionRange(a+1,a+1),this.focusInputField("prev",e);break;case"ArrowRight":this.focusInputField("next",e);break;case"Shift":this.focusInputField("next",e);break;case"Delete":n.value===""?this.focusInputField("prev",e):this.updateInput(n,e,"");break;case"Backspace":n.value===""?this.focusInputField("prev",e):this.updateInput(n,e,"");break}},this.focusInputField=(t,e)=>{if(t==="next"){const r=e+1;if(!this.shouldInputBeEnabled(r))return;const n=this.numerics[r<this.length?r:e],o=n?this.getInputElement(n):void 0;o&&(o.disabled=!1,o.focus())}if(t==="prev"){const r=e-1,n=this.numerics[r>-1?r:e],o=n?this.getInputElement(n):void 0;o&&o.focus()}}}firstUpdated(){var e,r;this.otp&&(this.values=this.otp.split(""));const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t)),(r=this.numerics[0])==null||r.focus()}render(){return A`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((t,e)=>A`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,e)}
              @click=${r=>this.selectInput(r)}
              @keydown=${r=>this.handleKeyDown(r,e)}
              .disabled=${!this.shouldInputBeEnabled(e)}
              .value=${this.values[e]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(t,e,r){const n=this.numerics[e],o=t||(n?this.getInputElement(n):void 0);o&&(o.value=r,this.values=this.values.map((a,l)=>l===e?r:a))}selectInput(t){const e=t.target;if(e){const r=this.getInputElement(e);r==null||r.select()}}handleInput(t,e){const r=t.target,n=this.getInputElement(r);if(n){const o=n.value;t.inputType==="insertFromPaste"?this.handlePaste(n,o,e):it.isNumber(o)&&t.data?(this.updateInput(n,e,t.data),this.focusInputField("next",e)):this.updateInput(n,e,"")}this.dispatchInputChangeEvent()}handlePaste(t,e,r){const n=e[0];if(n&&it.isNumber(n)){this.updateInput(t,r,n);const a=e.substring(1);if(r+1<this.length&&a.length){const l=this.numerics[r+1],f=l?this.getInputElement(l):void 0;f&&this.handlePaste(f,a,r+1)}else this.focusInputField("next",r)}else this.updateInput(t,r,"")}getInputElement(t){var e;return(e=t.shadowRoot)!=null&&e.querySelector("input")?t.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const t=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:t,bubbles:!0,composed:!0}))}};$r.styles=[L,I3];yn([p({type:Number})],$r.prototype,"length",void 0);yn([p({type:String})],$r.prototype,"otp",void 0);yn([$o()],$r.prototype,"values",void 0);$r=yn([O("wui-otp")],$r);const z3=.1,z1=2.5,De=7;function n0(i,t,e){return i===t?!1:(i-t<0?t-i:i-t)<=e+z3}function P3(i,t){const e=Array.prototype.slice.call(ss.create(i,{errorCorrectionLevel:t}).modules.data,0),r=Math.sqrt(e.length);return e.reduce((n,o,a)=>(a%r===0?n.push([o]):n[n.length-1].push(o))&&n,[])}const O3={generate(i,t,e){const r="#141414",n="transparent",a=[],l=P3(i,"Q"),f=t/l.length,m=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];m.forEach(({x:T,y:I})=>{const F=(l.length-De)*f*T,V=(l.length-De)*f*I,J=.45;for(let q=0;q<m.length;q+=1){const K=f*(De-q*2);a.push(B`
            <rect
              fill=${q===2?r:n}
              width=${q===0?K-5:K}
              rx= ${q===0?(K-5)*J:K*J}
              ry= ${q===0?(K-5)*J:K*J}
              stroke=${r}
              stroke-width=${q===0?5:0}
              height=${q===0?K-5:K}
              x= ${q===0?V+f*q+5/2:V+f*q}
              y= ${q===0?F+f*q+5/2:F+f*q}
            />
          `)}});const x=Math.floor((e+25)/f),C=l.length/2-x/2,$=l.length/2+x/2-1,_=[];l.forEach((T,I)=>{T.forEach((F,V)=>{if(l[I][V]&&!(I<De&&V<De||I>l.length-(De+1)&&V<De||I<De&&V>l.length-(De+1))&&!(I>C&&I<$&&V>C&&V<$)){const J=I*f+f/2,q=V*f+f/2;_.push([J,q])}})});const R={};return _.forEach(([T,I])=>{var F;R[T]?(F=R[T])==null||F.push(I):R[T]=[I]}),Object.entries(R).map(([T,I])=>{const F=I.filter(V=>I.every(J=>!n0(V,J,f)));return[Number(T),F]}).forEach(([T,I])=>{I.forEach(F=>{a.push(B`<circle cx=${T} cy=${F} fill=${r} r=${f/z1} />`)})}),Object.entries(R).filter(([T,I])=>I.length>1).map(([T,I])=>{const F=I.filter(V=>I.some(J=>n0(V,J,f)));return[Number(T),F]}).map(([T,I])=>{I.sort((V,J)=>V<J?-1:1);const F=[];for(const V of I){const J=F.find(q=>q.some(K=>n0(V,K,f)));J?J.push(V):F.push([V])}return[T,F.map(V=>[V[0],V[V.length-1]])]}).forEach(([T,I])=>{I.forEach(([F,V])=>{a.push(B`
              <line
                x1=${T}
                x2=${T}
                y1=${F}
                y2=${V}
                stroke=${r}
                stroke-width=${f/(z1/2)}
                stroke-linecap="round"
              />
            `)})}),a}},L3=P`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var bi=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Ie=class extends z{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,A`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return B`
      <svg height=${t} width=${t}>
        ${O3.generate(this.uri,t,this.arenaClear?0:t/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?A`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?A`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:A`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Ie.styles=[L,L3];bi([p()],Ie.prototype,"uri",void 0);bi([p({type:Number})],Ie.prototype,"size",void 0);bi([p()],Ie.prototype,"theme",void 0);bi([p()],Ie.prototype,"imageSrc",void 0);bi([p()],Ie.prototype,"alt",void 0);bi([p({type:Boolean})],Ie.prototype,"arenaClear",void 0);bi([p({type:Boolean})],Ie.prototype,"farcaster",void 0);Ie=bi([O("wui-qr-code")],Ie);const N3=P`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var T3=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let C0=class extends z{constructor(){super(...arguments),this.inputComponentRef=N0()}render(){return A`
      <wui-input-text
        ${T0(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,e=t==null?void 0:t.inputElementRef.value;e&&(e.value="",e.focus(),e.dispatchEvent(new Event("input")))}};C0.styles=[L,N3];C0=T3([O("wui-search-bar")],C0);const H3=P`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var Nr=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let gi=class extends z{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1}render(){return A`
      ${this.loading?A`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:A`<wui-icon-box
            size="sm"
            iconSize="xs"
            iconColor=${this.iconColor}
            backgroundColor=${this.backgroundColor}
            icon=${this.icon}
            background="opaque"
          ></wui-icon-box>`}
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};gi.styles=[L,H3];Nr([p()],gi.prototype,"backgroundColor",void 0);Nr([p()],gi.prototype,"iconColor",void 0);Nr([p()],gi.prototype,"icon",void 0);Nr([p()],gi.prototype,"message",void 0);Nr([p()],gi.prototype,"loading",void 0);gi=Nr([O("wui-snackbar")],gi);const j3=P`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var yi=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let ze=class extends z{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,e)=>{var n;const r=e===this.activeTab;return A`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(e)}
          data-active=${r}
          data-testid="tab-${(n=t.label)==null?void 0:n.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(t){return t.icon?A`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,e){const r=this.buttons[this.activeTab],n=this.buttons[t],o=r==null?void 0:r.querySelector("wui-text"),a=n==null?void 0:n.querySelector("wui-text"),l=n==null?void 0:n.getBoundingClientRect(),f=a==null?void 0:a.getBoundingClientRect();r&&o&&!e&&t!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),n&&l&&f&&a&&(t!==this.activeTab||e)&&(this.localTabWidth=`${Math.round(l.width+f.width)+6}px`,n.animate([{width:`${l.width+f.width}px`}],{duration:e?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:e?0:125,delay:e?0:200,fill:"forwards",easing:"ease"}))}};ze.styles=[L,G,j3];yi([p({type:Array})],ze.prototype,"tabs",void 0);yi([p()],ze.prototype,"onTabChange",void 0);yi([p({type:Array})],ze.prototype,"buttons",void 0);yi([p({type:Boolean})],ze.prototype,"disabled",void 0);yi([p()],ze.prototype,"localTabWidth",void 0);yi([$o()],ze.prototype,"activeTab",void 0);yi([$o()],ze.prototype,"isDense",void 0);ze=yi([O("wui-tabs")],ze);const D3=P`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var U0=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let fo=class extends z{constructor(){super(...arguments),this.text=""}render(){return A`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?A`<wui-image src=${this.imageSrc}></wui-image>`:A`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};fo.styles=[L,G,D3];U0([p()],fo.prototype,"imageSrc",void 0);U0([p()],fo.prototype,"text",void 0);fo=U0([O("wui-token-button")],fo);const Z3=P`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var xn=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Sr=class extends z{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,A`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Sr.styles=[L,G,Z3];xn([p()],Sr.prototype,"placement",void 0);xn([p()],Sr.prototype,"variant",void 0);xn([p()],Sr.prototype,"message",void 0);Sr=xn([O("wui-tooltip")],Sr);const U3=P`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var xi=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Pe=class extends z{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e;if(!this.visible)return null;const t=this.amount&&this.price?(e=ls.multiply(this.price,this.amount))==null?void 0:e.toFixed(3):null;return A`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${t?A`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${it.formatNumberToLocalString(t,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?A`<wui-text variant="small-400" color="fg-200">
                  ${it.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?A`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?A`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};Pe.styles=[L,G,U3];xi([p()],Pe.prototype,"imageSrc",void 0);xi([p()],Pe.prototype,"name",void 0);xi([p()],Pe.prototype,"symbol",void 0);xi([p()],Pe.prototype,"price",void 0);xi([p()],Pe.prototype,"amount",void 0);xi([$o()],Pe.prototype,"visible",void 0);xi([$o()],Pe.prototype,"imageError",void 0);Pe=xi([O("wui-token-list-item")],Pe);const F3=P`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Cn=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let _r=class extends z{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,A`${this.templateVisual()}`}templateVisual(){return this.imageSrc?A`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:A`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};_r.styles=[L,F3];Cn([p()],_r.prototype,"imageSrc",void 0);Cn([p()],_r.prototype,"alt",void 0);Cn([p({type:Boolean})],_r.prototype,"borderRadiusFull",void 0);_r=Cn([O("wui-visual-thumbnail")],_r);const V3=P`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var An=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Er=class extends z{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return A`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Er.styles=[L,G,V3];An([p()],Er.prototype,"label",void 0);An([p()],Er.prototype,"description",void 0);An([p()],Er.prototype,"icon",void 0);Er=An([O("wui-notice-card")],Er);const W3=P`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-150), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var F0=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};const a0=100;let po=class extends z{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(t){super.updated(t),(t.has("textTitle")||t.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{var r,n;const t=(r=this.shadowRoot)==null?void 0:r.querySelector(".heightContent"),e=(n=this.shadowRoot)==null?void 0:n.querySelector(".textContent");if(t&&e){this.scrollElement=t;const o=e==null?void 0:e.scrollHeight;o&&o>a0&&(this.enableAccordion=!0,this.scrollHeightElement=o,this.requestUpdate())}})}render(){return A`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${a0}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${a0}px`}],{duration:300,fill:"forwards",easing:"ease"}),t&&t.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?A` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};po.styles=[L,G,W3];F0([p()],po.prototype,"textTitle",void 0);F0([p()],po.prototype,"overflowedContent",void 0);po=F0([O("wui-list-accordion")],po);const q3=P`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Mn=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let kr=class extends z{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return A`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?A`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?A` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:A`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};kr.styles=[L,G,q3];Mn([p()],kr.prototype,"imageSrc",void 0);Mn([p()],kr.prototype,"textTitle",void 0);Mn([p()],kr.prototype,"textValue",void 0);kr=Mn([O("wui-list-content")],kr);const G3=P`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Tr=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let vi=class extends z{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return A`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?A`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?A`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:A`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};vi.styles=[L,G,G3];Tr([p()],vi.prototype,"imageSrc",void 0);Tr([p()],vi.prototype,"name",void 0);Tr([p({type:Boolean})],vi.prototype,"disabled",void 0);Tr([p({type:Boolean})],vi.prototype,"selected",void 0);Tr([p({type:Boolean})],vi.prototype,"transparent",void 0);vi=Tr([O("wui-list-network")],vi);const Q3=P`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Hr=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let wi=class extends z{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return A`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?A`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:A`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};wi.styles=[L,G,Q3];Hr([p()],wi.prototype,"amount",void 0);Hr([p()],wi.prototype,"networkCurreny",void 0);Hr([p()],wi.prototype,"networkImageUrl",void 0);Hr([p()],wi.prototype,"receiverAddress",void 0);Hr([p()],wi.prototype,"addressExplorerUrl",void 0);wi=Hr([O("wui-list-wallet-transaction")],wi);const Y3=P`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-060);
    }
  }
`;var Va=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let sn=class extends z{constructor(){super(...arguments),this.text=""}render(){return A`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};sn.styles=[L,G,Y3];Va([p()],sn.prototype,"text",void 0);sn=Va([O("wui-promo")],sn);const K3=P`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var V0=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let go=class extends z{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return A`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};go.styles=[L,K3];V0([p()],go.prototype,"dollars",void 0);V0([p()],go.prototype,"pennies",void 0);go=V0([O("wui-balance")],go);const J3=P`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var jr=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let mi=class extends z{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return A`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${it.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?A`<wui-image src=${this.networkSrc}></wui-image>`:A`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};mi.styles=[L,G,J3];jr([p()],mi.prototype,"networkSrc",void 0);jr([p()],mi.prototype,"avatarSrc",void 0);jr([p()],mi.prototype,"profileName",void 0);jr([p()],mi.prototype,"address",void 0);jr([p()],mi.prototype,"icon",void 0);mi=jr([O("wui-profile-button")],mi);const X3=P`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var ar=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Ye=class extends z{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail",this.connectedConnector=qo.getConnectedConnector(),this.shouldShowIcon=this.connectedConnector==="AUTH"}render(){return A`<button ontouchstart data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.shouldShowIcon?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${it.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(t){var e,r;if(t.target instanceof HTMLElement&&t.target.id==="copy-address"){(e=this.onCopyClick)==null||e.call(this,t);return}(r=this.onProfileClick)==null||r.call(this,t)}getIconTemplate(t){return A`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${t||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};Ye.styles=[L,G,X3];ar([p()],Ye.prototype,"avatarSrc",void 0);ar([p()],Ye.prototype,"profileName",void 0);ar([p()],Ye.prototype,"address",void 0);ar([p()],Ye.prototype,"icon",void 0);ar([p()],Ye.prototype,"onProfileClick",void 0);ar([p()],Ye.prototype,"onCopyClick",void 0);Ye=ar([O("wui-profile-button-v2")],Ye);const th=P`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var sr=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Ke=class extends z{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t=this.size==="sm"?"small-600":"paragraph-600";return A`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?A`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};Ke.styles=[L,G,th];sr([p()],Ke.prototype,"variant",void 0);sr([p()],Ke.prototype,"imageSrc",void 0);sr([p({type:Boolean})],Ke.prototype,"disabled",void 0);sr([p()],Ke.prototype,"icon",void 0);sr([p()],Ke.prototype,"size",void 0);sr([p()],Ke.prototype,"text",void 0);Ke=sr([O("wui-chip-button")],Ke);const eh=P`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var W0=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let vo=class extends z{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return A`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const t=this.networkImages.slice(0,5);return A` <wui-flex class="networks">
      ${t==null?void 0:t.map(e=>A` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`)}
    </wui-flex>`}};vo.styles=[L,G,eh];W0([p({type:Array})],vo.prototype,"networkImages",void 0);W0([p()],vo.prototype,"text",void 0);vo=W0([O("wui-compatible-network")],vo);const ih=P`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var q0=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let wo=class extends z{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return A`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};wo.styles=[L,G,ih];q0([p()],wo.prototype,"icon",void 0);q0([p()],wo.prototype,"text",void 0);wo=q0([O("wui-banner")],wo);const rh=P`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var $n=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Br=class extends z{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return A`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Br.styles=[L,G,rh];$n([p()],Br.prototype,"imageSrc",void 0);$n([p()],Br.prototype,"text",void 0);$n([p()],Br.prototype,"size",void 0);Br=$n([O("wui-banner-img")],Br);const oh=P`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var lr=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Je=class extends z{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return A`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${it.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?A`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:A`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};Je.styles=[L,G,oh];lr([p()],Je.prototype,"tokenName",void 0);lr([p()],Je.prototype,"tokenImageUrl",void 0);lr([p({type:Number})],Je.prototype,"tokenValue",void 0);lr([p()],Je.prototype,"tokenAmount",void 0);lr([p()],Je.prototype,"tokenCurrency",void 0);lr([p({type:Boolean})],Je.prototype,"clickable",void 0);Je=lr([O("wui-list-token")],Je);const nh=P`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var Ci=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Oe=class extends z{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return A`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?A` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:A`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};Oe.styles=[L,G,nh];Ci([p()],Oe.prototype,"icon",void 0);Ci([p()],Oe.prototype,"text",void 0);Ci([p()],Oe.prototype,"description",void 0);Ci([p()],Oe.prototype,"tag",void 0);Ci([p()],Oe.prototype,"iconBackgroundColor",void 0);Ci([p()],Oe.prototype,"iconColor",void 0);Ci([p({type:Boolean})],Oe.prototype,"disabled",void 0);Oe=Ci([O("wui-list-description")],Oe);const ah=P`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,sh=/[.*+?^${}()|[\]\\]/gu,lh=/[0-9,.]/u;var Sn=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Rr=class extends z{constructor(){super(...arguments),this.inputElementRef=N0(),this.disabled=!1,this.value="",this.placeholder="0"}render(){var t;return(t=this.inputElementRef)!=null&&t.value&&this.value&&(this.inputElementRef.value.value=this.value),A`<input
      ${T0(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(t){var r,n;const e=t.data;if(e&&((r=this.inputElementRef)!=null&&r.value))if(e===","){const o=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=o,this.value=`${this.value}${o}`}else lh.test(e)||(this.inputElementRef.value.value=this.value.replace(new RegExp(e.replace(sh,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:(n=this.inputElementRef.value)==null?void 0:n.value,bubbles:!0,composed:!0}))}};Rr.styles=[L,G,ah];Sn([p({type:Boolean})],Rr.prototype,"disabled",void 0);Sn([p({type:String})],Rr.prototype,"value",void 0);Sn([p({type:String})],Rr.prototype,"placeholder",void 0);Rr=Sn([O("wui-input-amount")],Rr);const ch=P`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`;var Ro=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Yi=class extends z{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return A`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?A`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?A`<wui-image src=${this.imageSrc}></wui-image>`:A`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Yi.styles=[L,G,ch];Ro([p()],Yi.prototype,"text",void 0);Ro([p()],Yi.prototype,"address",void 0);Ro([p()],Yi.prototype,"imageSrc",void 0);Ro([p({type:Boolean})],Yi.prototype,"isAddress",void 0);Yi=Ro([O("wui-preview-item")],Yi);const uh=P`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var Io=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Ki=class extends z{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.connectedConnector=qo.getConnectedConnector(),this.labels=cr.state.addressLabels,this.caipNetwork=Wr.state.caipNetwork,this.socialProvider=qo.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){var t;super.connectedCallback(),cs.getBalance(this.accountAddress,(t=this.caipNetwork)==null?void 0:t.id).then(e=>{let r=this.balance;e.balances.length>0&&(r=e.balances.reduce((n,o)=>n+((o==null?void 0:o.value)||0),0)),this.balance=r,this.fetchingBalance=!1,this.requestUpdate()})}render(){const t=this.getLabel();return this.shouldShowIcon=this.connectedConnector==="AUTH",A`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?A`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===qr.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:A`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${it.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${t}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${this.fetchingBalance?A`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:A` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
          <slot name="action"></slot>
        </wui-flex>
      </wui-flex>
    `}getLabel(){var e;let t=(e=this.labels)==null?void 0:e.get(this.accountAddress);return!t&&this.connectedConnector==="AUTH"?t=`${this.accountType==="eoa"?this.socialProvider??"Email":"Smart"} Account`:!t&&this.connectedConnector==="INJECTED"||this.connectedConnector==="ANNOUNCED"?t="Injected Account":t||(t="EOA"),t}};Ki.styles=[L,G,uh];Io([p()],Ki.prototype,"accountAddress",void 0);Io([p()],Ki.prototype,"accountType",void 0);Io([p({type:Boolean})],Ki.prototype,"selected",void 0);Io([p({type:Function})],Ki.prototype,"onSelect",void 0);Ki=Io([O("wui-list-account")],Ki);const hh=P`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var G0=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let mo=class extends z{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return A`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};mo.styles=[L,G,hh];G0([p()],mo.prototype,"text",void 0);G0([p()],mo.prototype,"icon",void 0);mo=G0([O("wui-icon-button")],mo);const dh=P`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Q0=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let bo=class extends z{constructor(){super(...arguments),this.text="",this.disabled=!1}render(){return A`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};bo.styles=[L,G,dh];Q0([p()],bo.prototype,"text",void 0);Q0([p({type:Boolean})],bo.prototype,"disabled",void 0);bo=Q0([O("wui-list-button")],bo);const fh=P`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var zo=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Ji=class extends z{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return A`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return this.align==="center"?A` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};Ji.styles=[L,G,fh];zo([p()],Ji.prototype,"logo",void 0);zo([p()],Ji.prototype,"name",void 0);zo([p()],Ji.prototype,"align",void 0);zo([p({type:Boolean})],Ji.prototype,"disabled",void 0);Ji=zo([O("wui-list-social")],Ji);const ph=P`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var Wa=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let ln=class extends z{constructor(){super(...arguments),this.imageSrc=""}render(){return A`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?A`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:A`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};ln.styles=[L,G,pn,ph];Wa([p()],ln.prototype,"imageSrc",void 0);ln=Wa([O("wui-select")],ln);const gh=P`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var pe=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let Xt=class extends z{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&it.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&it.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&it.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&it.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&it.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&it.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&it.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&it.getSpacingStyles(this.margin,3)};
    `,A`<slot></slot>`}};Xt.styles=[L,gh];pe([p()],Xt.prototype,"gridTemplateRows",void 0);pe([p()],Xt.prototype,"gridTemplateColumns",void 0);pe([p()],Xt.prototype,"justifyItems",void 0);pe([p()],Xt.prototype,"alignItems",void 0);pe([p()],Xt.prototype,"justifyContent",void 0);pe([p()],Xt.prototype,"alignContent",void 0);pe([p()],Xt.prototype,"columnGap",void 0);pe([p()],Xt.prototype,"rowGap",void 0);pe([p()],Xt.prototype,"gap",void 0);pe([p()],Xt.prototype,"padding",void 0);pe([p()],Xt.prototype,"margin",void 0);Xt=pe([O("wui-grid")],Xt);const vh=P`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var qa=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let cn=class extends z{constructor(){super(...arguments),this.text=""}render(){return A`${this.template()}`}template(){return this.text?A`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};cn.styles=[L,vh];qa([p()],cn.prototype,"text",void 0);cn=qa([O("wui-separator")],cn);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wo=globalThis,Y0=Wo.ShadowRoot&&(Wo.ShadyCSS===void 0||Wo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K0=Symbol(),P1=new WeakMap;let Ga=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==K0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Y0&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=P1.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&P1.set(e,t))}return t}toString(){return this.cssText}};const wh=i=>new Ga(typeof i=="string"?i:i+"",void 0,K0),mh=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,n,o)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[o+1],i[0]);return new Ga(e,i,K0)},bh=(i,t)=>{if(Y0)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),n=Wo.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,i.appendChild(r)}},O1=Y0?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return wh(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yh,defineProperty:xh,getOwnPropertyDescriptor:Ch,getOwnPropertyNames:Ah,getOwnPropertySymbols:Mh,getPrototypeOf:$h}=Object,pi=globalThis,L1=pi.trustedTypes,Sh=L1?L1.emptyScript:"",s0=pi.reactiveElementPolyfillSupport,Xr=(i,t)=>i,un={toAttribute(i,t){switch(t){case Boolean:i=i?Sh:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},J0=(i,t)=>!yh(i,t),N1={attribute:!0,type:String,converter:un,reflect:!1,hasChanged:J0};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),pi.litPropertyMetadata??(pi.litPropertyMetadata=new WeakMap);class dr extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=N1){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);n!==void 0&&xh(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:o}=Ch(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get(){return n==null?void 0:n.call(this)},set(a){const l=n==null?void 0:n.call(this);o.call(this,a),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??N1}static _$Ei(){if(this.hasOwnProperty(Xr("elementProperties")))return;const t=$h(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Xr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xr("properties"))){const e=this.properties,r=[...Ah(e),...Mh(e)];for(const n of r)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,n]of e)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const n=this._$Eu(e,r);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(O1(n))}else t!==void 0&&e.push(O1(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bh(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var o;const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(n!==void 0&&r.reflect===!0){const a=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:un).toAttribute(e,r.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,e){var o;const r=this.constructor,n=r._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=r.getPropertyOptions(n),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:un;this._$Em=n,this[n]=l.fromAttribute(e,a.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??J0)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,a]of n)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(e)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}dr.elementStyles=[],dr.shadowRootOptions={mode:"open"},dr[Xr("elementProperties")]=new Map,dr[Xr("finalized")]=new Map,s0==null||s0({ReactiveElement:dr}),(pi.reactiveElementVersions??(pi.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const to=globalThis,hn=to.trustedTypes,T1=hn?hn.createPolicy("lit-html",{createHTML:i=>i}):void 0,Qa="$lit$",hi=`lit$${Math.random().toFixed(9).slice(2)}$`,Ya="?"+hi,_h=`<${Ya}>`,Xi=document,yo=()=>Xi.createComment(""),xo=i=>i===null||typeof i!="object"&&typeof i!="function",Ka=Array.isArray,Eh=i=>Ka(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",l0=`[ 	
\f\r]`,Vr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H1=/-->/g,j1=/>/g,Hi=RegExp(`>|${l0}(?:([^\\s"'>=/]+)(${l0}*=${l0}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),D1=/'/g,Z1=/"/g,Ja=/^(?:script|style|textarea|title)$/i,kh=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),Xa=kh(1),Ir=Symbol.for("lit-noChange"),Zt=Symbol.for("lit-nothing"),U1=new WeakMap,Di=Xi.createTreeWalker(Xi,129);function ts(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return T1!==void 0?T1.createHTML(t):t}const Bh=(i,t)=>{const e=i.length-1,r=[];let n,o=t===2?"<svg>":"",a=Vr;for(let l=0;l<e;l++){const f=i[l];let m,x,C=-1,$=0;for(;$<f.length&&(a.lastIndex=$,x=a.exec(f),x!==null);)$=a.lastIndex,a===Vr?x[1]==="!--"?a=H1:x[1]!==void 0?a=j1:x[2]!==void 0?(Ja.test(x[2])&&(n=RegExp("</"+x[2],"g")),a=Hi):x[3]!==void 0&&(a=Hi):a===Hi?x[0]===">"?(a=n??Vr,C=-1):x[1]===void 0?C=-2:(C=a.lastIndex-x[2].length,m=x[1],a=x[3]===void 0?Hi:x[3]==='"'?Z1:D1):a===Z1||a===D1?a=Hi:a===H1||a===j1?a=Vr:(a=Hi,n=void 0);const _=a===Hi&&i[l+1].startsWith("/>")?" ":"";o+=a===Vr?f+_h:C>=0?(r.push(m),f.slice(0,C)+Qa+f.slice(C)+hi+_):f+hi+(C===-2?l:_)}return[ts(i,o+(i[e]||"<?>")+(t===2?"</svg>":"")),r]};class Co{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let o=0,a=0;const l=t.length-1,f=this.parts,[m,x]=Bh(t,e);if(this.el=Co.createElement(m,r),Di.currentNode=this.el.content,e===2){const C=this.el.content.firstChild;C.replaceWith(...C.childNodes)}for(;(n=Di.nextNode())!==null&&f.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const C of n.getAttributeNames())if(C.endsWith(Qa)){const $=x[a++],_=n.getAttribute(C).split(hi),R=/([.?@])?(.*)/.exec($);f.push({type:1,index:o,name:R[2],strings:_,ctor:R[1]==="."?Ih:R[1]==="?"?zh:R[1]==="@"?Ph:_n}),n.removeAttribute(C)}else C.startsWith(hi)&&(f.push({type:6,index:o}),n.removeAttribute(C));if(Ja.test(n.tagName)){const C=n.textContent.split(hi),$=C.length-1;if($>0){n.textContent=hn?hn.emptyScript:"";for(let _=0;_<$;_++)n.append(C[_],yo()),Di.nextNode(),f.push({type:2,index:++o});n.append(C[$],yo())}}}else if(n.nodeType===8)if(n.data===Ya)f.push({type:2,index:o});else{let C=-1;for(;(C=n.data.indexOf(hi,C+1))!==-1;)f.push({type:7,index:o}),C+=hi.length-1}o++}}static createElement(t,e){const r=Xi.createElement("template");return r.innerHTML=t,r}}function zr(i,t,e=i,r){var a,l;if(t===Ir)return t;let n=r!==void 0?(a=e._$Co)==null?void 0:a[r]:e._$Cl;const o=xo(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==o&&((l=n==null?void 0:n._$AO)==null||l.call(n,!1),o===void 0?n=void 0:(n=new o(i),n._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=n:e._$Cl=n),n!==void 0&&(t=zr(i,n._$AS(i,t.values),n,r)),t}class Rh{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=((t==null?void 0:t.creationScope)??Xi).importNode(e,!0);Di.currentNode=n;let o=Di.nextNode(),a=0,l=0,f=r[0];for(;f!==void 0;){if(a===f.index){let m;f.type===2?m=new Po(o,o.nextSibling,this,t):f.type===1?m=new f.ctor(o,f.name,f.strings,this,t):f.type===6&&(m=new Oh(o,this,t)),this._$AV.push(m),f=r[++l]}a!==(f==null?void 0:f.index)&&(o=Di.nextNode(),a++)}return Di.currentNode=Xi,n}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Po{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=Zt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=zr(this,t,e),xo(t)?t===Zt||t==null||t===""?(this._$AH!==Zt&&this._$AR(),this._$AH=Zt):t!==this._$AH&&t!==Ir&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Eh(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Zt&&xo(this._$AH)?this._$AA.nextSibling.data=t:this.T(Xi.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Co.createElement(ts(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===n)this._$AH.p(e);else{const a=new Rh(n,this),l=a.u(this.options);a.p(e),this.T(l),this._$AH=a}}_$AC(t){let e=U1.get(t.strings);return e===void 0&&U1.set(t.strings,e=new Co(t)),e}k(t){Ka(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const o of t)n===e.length?e.push(r=new Po(this.S(yo()),this.S(yo()),this,this.options)):r=e[n],r._$AI(o),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class _n{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,o){this.type=1,this._$AH=Zt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Zt}_$AI(t,e=this,r,n){const o=this.strings;let a=!1;if(o===void 0)t=zr(this,t,e,0),a=!xo(t)||t!==this._$AH&&t!==Ir,a&&(this._$AH=t);else{const l=t;let f,m;for(t=o[0],f=0;f<o.length-1;f++)m=zr(this,l[r+f],e,f),m===Ir&&(m=this._$AH[f]),a||(a=!xo(m)||m!==this._$AH[f]),m===Zt?t=Zt:t!==Zt&&(t+=(m??"")+o[f+1]),this._$AH[f]=m}a&&!n&&this.j(t)}j(t){t===Zt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ih extends _n{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Zt?void 0:t}}class zh extends _n{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Zt)}}class Ph extends _n{constructor(t,e,r,n,o){super(t,e,r,n,o),this.type=5}_$AI(t,e=this){if((t=zr(this,t,e,0)??Zt)===Ir)return;const r=this._$AH,n=t===Zt&&r!==Zt||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==Zt&&(r===Zt||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Oh{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){zr(this,t)}}const c0=to.litHtmlPolyfillSupport;c0==null||c0(Co,Po),(to.litHtmlVersions??(to.litHtmlVersions=[])).push("3.1.4");const Lh=(i,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let n=r._$litPart$;if(n===void 0){const o=(e==null?void 0:e.renderBefore)??null;r._$litPart$=n=new Po(t.insertBefore(yo(),o),o,void 0,e??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class gr extends dr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lh(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Ir}}var V1;gr._$litElement$=!0,gr.finalized=!0,(V1=globalThis.litElementHydrateSupport)==null||V1.call(globalThis,{LitElement:gr});const u0=globalThis.litElementPolyfillSupport;u0==null||u0({LitElement:gr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");const Nh=mh`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var Th=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let A0=class extends gr{constructor(){var t;super(...arguments),this.dappImageUrl=(t=$0.state.metadata)==null?void 0:t.icons,this.walletImageUrl=qo.getConnectedWalletImageUrl()}firstUpdated(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll("wui-visual-thumbnail");t!=null&&t[0]&&this.createAnimation(t[0],"translate(18px)"),t!=null&&t[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){var t;return Xa`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(t=this.dappImageUrl)==null?void 0:t[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,e){t.animate([{transform:"translateX(0px)"},{transform:e}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};A0.styles=Nh;A0=Th([O("w3m-connecting-siwe")],A0);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hh={attribute:!0,type:String,converter:un,reflect:!1,hasChanged:J0},jh=(i=Hh,t,e)=>{const{kind:r,metadata:n}=e;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(e.name,i),r==="accessor"){const{name:a}=e;return{set(l){const f=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,f,i)},init(l){return l!==void 0&&this.P(a,void 0,i),l}}}if(r==="setter"){const{name:a}=e;return function(l){const f=this[a];t.call(this,l),this.requestUpdate(a,f,i)}}throw Error("Unsupported decorator location: "+r)};function Dh(i){return(t,e)=>typeof e=="object"?jh(i,t,e):((r,n,o)=>{const a=n.hasOwnProperty(o);return n.constructor.createProperty(o,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(n,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zh(i){return Dh({...i,state:!0,attribute:!1})}var es=function(i,t,e,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,t,e,r);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let M0=class extends gr{constructor(){var t;super(...arguments),this.dappName=(t=$0.state.metadata)==null?void 0:t.name,this.isSigning=!1}render(){return this.onRender(),Xa`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onRender(){Ur.state.session&&X0.close()}async onSign(){var t,e,r;this.isSigning=!0,Oo.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:((t=Wr.state.caipNetwork)==null?void 0:t.id)||"",isSmartAccount:cr.state.preferredAccountType===qr.ACCOUNT_TYPES.SMART_ACCOUNT}});try{Ur.setStatus("loading");const n=await Ur.signIn();return Ur.setStatus("success"),Oo.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:((e=Wr.state.caipNetwork)==null?void 0:e.id)||"",isSmartAccount:cr.state.preferredAccountType===qr.ACCOUNT_TYPES.SMART_ACCOUNT}}),n}catch{const a=cr.state.preferredAccountType===qr.ACCOUNT_TYPES.SMART_ACCOUNT;return a?t1.showError("This application might not support Smart Accounts"):t1.showError("Signature declined"),Ur.setStatus("error"),Oo.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:((r=Wr.state.caipNetwork)==null?void 0:r.id)||"",isSmartAccount:a}})}finally{this.isSigning=!1}}async onCancel(){var e;cr.state.isConnected?(await us.disconnect(),X0.close()):hs.push("Connect"),Oo.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:((e=Wr.state.caipNetwork)==null?void 0:e.id)||"",isSmartAccount:cr.state.preferredAccountType===qr.ACCOUNT_TYPES.SMART_ACCOUNT}})}};es([Zh()],M0.prototype,"isSigning",void 0);M0=es([O("w3m-connecting-siwe-view")],M0);export{Ur as SIWEController,A0 as W3mConnectingSiwe,M0 as W3mConnectingSiweView,Wh as getDidAddress,Vh as getDidChainId};
