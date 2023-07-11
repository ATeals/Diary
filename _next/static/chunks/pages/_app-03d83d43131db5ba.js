(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1675)}])},3991:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return f},ACTION_REFRESH:function(){return n},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return r},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return u},ACTION_FAST_REFRESH:function(){return i},ACTION_SERVER_ACTION:function(){return s}});const n="refresh",o="navigate",r="restore",l="server-patch",u="prefetch",i="fast-refresh",s="server-action";var f;!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(f||(f={})),("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}});function n(e,t,n,o){return!1}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});const o=n(2575)._(n(7294)),r=n(4532),l=n(3353),u=n(1410),i=n(9064),s=n(370),f=n(9955),c=n(4224),a=n(508),d=n(1516),p=n(4266),h=n(3991),b=new Set;function x(e,t,n,o,r,u){if(!u&&!(0,l.isLocalURL)(t))return;if(!o.bypassPrefetchedCheck){const r=t+"%"+n+"%"+("undefined"!==typeof o.locale?o.locale:"locale"in e?e.locale:void 0);if(b.has(r))return;b.add(r)}const i=u?e.prefetch(t,r):e.prefetch(t,n,o);Promise.resolve(i).catch((e=>{0}))}function y(e){return"string"===typeof e?e:(0,u.formatUrl)(e)}const _=o.default.forwardRef((function(e,t){let n;const{href:u,as:b,children:_,prefetch:j=null,passHref:v,replace:m,shallow:g,scroll:O,locale:C,onClick:E,onMouseEnter:P,onTouchStart:N,legacyBehavior:k=!1,...T}=e;n=_,!k||"string"!==typeof n&&"number"!==typeof n||(n=o.default.createElement("a",null,n));const M=!1!==j,R=null===j?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,A=o.default.useContext(f.RouterContext),w=o.default.useContext(c.AppRouterContext),I=null!=A?A:w,L=!A;const{href:S,as:U}=o.default.useMemo((()=>{if(!A){const e=y(u);return{href:e,as:b?y(b):e}}const[e,t]=(0,r.resolveHref)(A,u,!0);return{href:e,as:b?(0,r.resolveHref)(A,b):t||e}}),[A,u,b]),F=o.default.useRef(S),H=o.default.useRef(U);let K;k&&(K=o.default.Children.only(n));const D=k?K&&"object"===typeof K&&K.ref:t,[V,z,B]=(0,a.useIntersection)({rootMargin:"200px"}),X=o.default.useCallback((e=>{H.current===U&&F.current===S||(B(),H.current=U,F.current=S),V(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[U,D,S,B,V]);o.default.useEffect((()=>{I&&z&&M&&x(I,S,U,{locale:C},{kind:R},L)}),[U,S,z,C,M,null==A?void 0:A.locale,I,L,R]);const q={ref:X,onClick(e){k||"function"!==typeof E||E(e),k&&K.props&&"function"===typeof K.props.onClick&&K.props.onClick(e),I&&(e.defaultPrevented||function(e,t,n,r,u,i,s,f,c,a){const{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){const t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(n)))return;e.preventDefault();const p=()=>{"beforePopState"in t?t[u?"replace":"push"](n,r,{shallow:i,locale:f,scroll:s}):t[u?"replace":"push"](r||n,{forceOptimisticNavigation:!a})};c?o.default.startTransition(p):p()}(e,I,S,U,m,g,O,C,L,M))},onMouseEnter(e){k||"function"!==typeof P||P(e),k&&K.props&&"function"===typeof K.props.onMouseEnter&&K.props.onMouseEnter(e),I&&(!M&&L||x(I,S,U,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:R},L))},onTouchStart(e){k||"function"!==typeof N||N(e),k&&K.props&&"function"===typeof K.props.onTouchStart&&K.props.onTouchStart(e),I&&(!M&&L||x(I,S,U,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:R},L))}};if((0,i.isAbsoluteUrl)(U))q.href=U;else if(!k||v||"a"===K.type&&!("href"in K.props)){const e="undefined"!==typeof C?C:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,d.getDomainLocale)(U,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);q.href=t||(0,p.addBasePath)((0,s.addLocale)(U,e,null==A?void 0:A.defaultLocale))}return k?o.default.cloneElement(K,q):o.default.createElement("a",{...T,...q},n)}));("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return f}});const o=n(7294),r=n(29),l="function"===typeof IntersectionObserver,u=new Map,i=[];function s(e,t,n){const{id:o,observer:r,elements:l}=function(e){const t={root:e.root||null,margin:e.rootMargin||""},n=i.find((e=>e.root===t.root&&e.margin===t.margin));let o;if(n&&(o=u.get(n),o))return o;const r=new Map,l=new IntersectionObserver((e=>{e.forEach((e=>{const t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o={id:t,observer:l,elements:r},i.push(t),u.set(t,o),o}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(o);const e=i.findIndex((e=>e.root===o.root&&e.margin===o.margin));e>-1&&i.splice(e,1)}}}function f(e){let{rootRef:t,rootMargin:n,disabled:u}=e;const i=u||!l,[f,c]=(0,o.useState)(!1),a=(0,o.useRef)(null),d=(0,o.useCallback)((e=>{a.current=e}),[]);(0,o.useEffect)((()=>{if(l){if(i||f)return;const e=a.current;if(e&&e.tagName){return s(e,(e=>e&&c(e)),{root:null==t?void 0:t.current,rootMargin:n})}}else if(!f){const e=(0,r.requestIdleCallback)((()=>c(!0)));return()=>(0,r.cancelIdleCallback)(e)}}),[i,n,t,f,a.current]);const p=(0,o.useCallback)((()=>{c(!1)}),[]);return[d,f,p]}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1675:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var o=n(5893),r=n(1664),l=n.n(r),u=n(1163),i=n(7294),s=()=>{const{asPath:e}=(0,u.useRouter)(),[,t]=e.split("/"),[n,r]=(0,i.useState)("");return(0,i.useEffect)((()=>{r(t)}),[e]),(0,o.jsxs)("nav",{className:"w-full bg-white bottom-0 p-3 z-99 fixed  flex justify-around [&>*]:text-[gray]",children:[""===n||"thread"===n?(0,o.jsx)(l(),{href:"/",onClick:e=>{""===t&&(e.preventDefault(),window.scroll({top:0,behavior:"smooth"}))},children:(0,o.jsx)("i",{className:"bi bi-house-fill text-4xl "})}):(0,o.jsx)(l(),{href:"/",children:(0,o.jsx)("i",{className:"bi bi-house text-4xl "})}),"tag"===n?(0,o.jsx)(l(),{href:"/tag",children:(0,o.jsx)("i",{className:"bi bi-bookmarks-fill text-3xl"})}):(0,o.jsx)(l(),{href:"/tag",children:(0,o.jsx)("i",{className:"bi bi-bookmarks text-3xl"})}),"chat"===n?(0,o.jsx)(l(),{href:"/chat",children:(0,o.jsx)("i",{className:"bi bi-pen-fill text-3xl"})}):(0,o.jsx)(l(),{href:"/chat",children:(0,o.jsx)("i",{className:"bi bi-pen text-3xl"})}),(0,o.jsx)("i",{className:"bi bi-link-45deg text-4xl "}),"profile"===n?(0,o.jsx)(l(),{href:"/profile",children:(0,o.jsx)("i",{className:"bi bi-person-fill text-4xl "})}):(0,o.jsx)(l(),{href:"/profile",children:(0,o.jsx)("i",{className:"bi bi-person text-4xl "})})]})};n(7952);function f(e){let{Component:t,pageProps:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{...n}),(0,o.jsx)(s,{})]})}},7952:function(){},1664:function(e,t,n){e.exports=n(5569)},1163:function(e,t,n){e.exports=n(6885)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(6885)}));var n=e.O();_N_E=n}]);