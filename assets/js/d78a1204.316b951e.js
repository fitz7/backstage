/*! For license information please see d78a1204.316b951e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[533953],{875928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(824246),a=r(511151);const s={id:"v1.9.0",title:"v1.9.0",description:"Backstage Release v1.9.0"},o=void 0,i={id:"releases/v1.9.0",title:"v1.9.0",description:"Backstage Release v1.9.0",source:"@site/../docs/releases/v1.9.0.md",sourceDirName:"releases",slug:"/releases/v1.9.0",permalink:"/docs/releases/v1.9.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.9.0.md",tags:[],version:"current",frontMatter:{id:"v1.9.0",title:"v1.9.0",description:"Backstage Release v1.9.0"},sidebar:"releases",previous:{title:"v1.10.0",permalink:"/docs/releases/v1.10.0"},next:{title:"v1.8.0",permalink:"/docs/releases/v1.8.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"Catalog Batch Fetching",id:"catalog-batch-fetching",level:3},{value:"New plugin: AWS Credentials Provider",id:"new-plugin-aws-credentials-provider",level:3},{value:"Events",id:"events",level:3},{value:"New Plugin: Incremental Ingestion",id:"new-plugin-incremental-ingestion",level:3},{value:"Scaffolder Custom Field Explorer",id:"scaffolder-custom-field-explorer",level:3},{value:"Scaffolder concurrent task execution",id:"scaffolder-concurrent-task-execution",level:3},{value:"Deprecating Catalog Prometheus metrics for OpenTelemetry",id:"deprecating-catalog-prometheus-metrics-for-opentelemetry",level:3},{value:"Updated API for <code>createApp</code>",id:"updated-api-for-createapp",level:3},{value:"Advancements on the New Backend System",id:"advancements-on-the-new-backend-system",level:3},{value:"New package: <code>@backstage/repo-tools</code>",id:"new-package-backstagerepo-tools",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["These are the release notes for the v1.9.0 release of ",(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,n.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,n.jsx)(t.h3,{id:"catalog-batch-fetching",children:"Catalog Batch Fetching"}),"\n",(0,n.jsxs)(t.p,{children:["The catalog client has a new ",(0,n.jsx)(t.code,{children:"getEntitiesByRefs"})," method, and the catalog backend has a corresponding new ",(0,n.jsxs)(t.a,{href:"https://backstage.io/docs/features/software-catalog/software-catalog-api",children:[(0,n.jsx)(t.code,{children:"/entities/by-refs"})," endpoint"]}),". These allow for the efficient batch fetching of entities by their refs, which may be useful e.g. in GraphQL resolvers or similar contexts where you need to fetch large numbers of entities at the same time."]}),"\n",(0,n.jsx)(t.h3,{id:"new-plugin-aws-credentials-provider",children:"New plugin: AWS Credentials Provider"}),"\n",(0,n.jsxs)(t.p,{children:["The management of AWS credentials in the backend saw some significant improvement, through the introduction of the ",(0,n.jsx)(t.code,{children:"@backstage/integration-aws-node"})," package and its corresponding ",(0,n.jsx)(t.code,{children:"AwsCredentialsManager"})," interface. This is leveraged e.g. in the ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/using-cloud-storage",children:"TechDocs S3 publisher"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/clareliguori",children:"@clareliguori"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/14125",children:"#14125"})]}),"\n",(0,n.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,n.jsxs)(t.p,{children:["There was further work to advance the ",(0,n.jsxs)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend",children:[(0,n.jsx)(t.code,{children:"events"})," backend"]})," functionality, which propagates and processes events such as webhooks. It has modules for ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-aws-sqs",children:"AWS SQS"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-azure",children:"Azure"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-bitbucket-cloud",children:"Bitbucket Cloud"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-gerrit",children:"Gerrit"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-github",children:"GitHub"}),", and ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend-module-gitlab",children:"Gitlab"}),", along with other improvements."]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/pjungermann",children:"@pjungermann"})," and others in the community."]}),"\n",(0,n.jsx)(t.h3,{id:"new-plugin-incremental-ingestion",children:"New Plugin: Incremental Ingestion"}),"\n",(0,n.jsx)(t.p,{children:"Introduces incremental entity providers, which are used for streaming very large data sources into the catalog."}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/dekoding",children:"@dekoding"})," ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/14356",children:"#14356"})]}),"\n",(0,n.jsx)(t.h3,{id:"scaffolder-custom-field-explorer",children:"Scaffolder Custom Field Explorer"}),"\n",(0,n.jsx)(t.p,{children:"The new custom field explorer lets you view and play around with available installed custom field extensions."}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/kuangp",children:"@kuangp"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/14008",children:"#14008"})]}),"\n",(0,n.jsx)(t.h3,{id:"scaffolder-concurrent-task-execution",children:"Scaffolder concurrent task execution"}),"\n",(0,n.jsxs)(t.p,{children:["Individual Scaffolder task workers can now run multiple (defaults to 10) tasks concurrently using the ",(0,n.jsx)(t.code,{children:"concurrentTasksLimit"})," option, leading to more efficient resource usage."]}),"\n",(0,n.jsxs)(t.p,{children:["Contributed by ",(0,n.jsx)(t.a,{href:"https://github.com/howlowck",children:"@howlowck"})," in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/13817",children:"#13817"})]}),"\n",(0,n.jsx)(t.h3,{id:"deprecating-catalog-prometheus-metrics-for-opentelemetry",children:"Deprecating Catalog Prometheus metrics for OpenTelemetry"}),"\n",(0,n.jsxs)(t.p,{children:["We have started working on phasing out the Prometheus Metrics exposed using the ",(0,n.jsx)(t.code,{children:"prom-client"})," in favor of replacement metrics using ",(0,n.jsx)(t.a,{href:"https://opentelemetry.io/",children:"OpenTelemetery"}),". The ",(0,n.jsx)(t.code,{children:"prom-client"})," metrics have always been a band-aid and never fully established but we want to notify existing users of their future removal. Backstage does not provide any default exporter or instructions on how to export the new metrics yet but you should expect documentation shortly. We hope to fully incorporate OpenTelemetry into other plugins once we gain confidence and establish patterns. Added in ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/15145",children:"#15145"}),"."]}),"\n",(0,n.jsxs)(t.h3,{id:"updated-api-for-createapp",children:["Updated API for ",(0,n.jsx)(t.code,{children:"createApp"})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"getProvider"})," and ",(0,n.jsx)(t.code,{children:"getRouter"})," methods of the main app instance from ",(0,n.jsx)(t.code,{children:"@backstage/core-app-api"})," have been deprecated. Instead, there is now an ",(0,n.jsx)(t.code,{children:"AppRouter"})," component that is a drop-in replacement for the router, and a new ",(0,n.jsx)(t.code,{children:"createRoot"})," method for creating the root app component. This change will simplify the internal logic of the app, and also makes it more clear that the app is created from a React element tree."]}),"\n",(0,n.jsx)(t.h3,{id:"advancements-on-the-new-backend-system",children:"Advancements on the New Backend System"}),"\n",(0,n.jsx)(t.p,{children:"Work has progressed with the new system and we have been able to add a couple of new features, most notable are shutdown lifecycle events and stop functionality to the Backend."}),"\n",(0,n.jsxs)(t.p,{children:["All core service references are now exported via a single ",(0,n.jsx)(t.code,{children:"coreServices"})," object. For example, the ",(0,n.jsx)(t.code,{children:"loggerServiceRef"})," is now accessed via ",(0,n.jsx)(t.code,{children:"coreServices.logger"})," instead, ",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/14986",children:"#14986"}),".\nAll service interfaces are now suffixed with ",(0,n.jsx)(t.code,{children:"*Service"}),". Root scoped services are now always initialized, whether they are depended directly on by others or not; this allows features such as the metrics exporter to work correctly."]}),"\n",(0,n.jsxs)(t.h3,{id:"new-package-backstagerepo-tools",children:["New package: ",(0,n.jsx)(t.code,{children:"@backstage/repo-tools"})]}),"\n",(0,n.jsx)(t.p,{children:"This new package is part of an ongoing effort to make more of the repository tooling in the main Backstage repository available to the rest of the community. The main piece that has been added so far is the tooling needed to use API reports."}),"\n",(0,n.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,n.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,n.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,n.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage's ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.9.0-changelog.md",children:"Changelog"})}),"\n",(0,n.jsxs)(t.li,{children:["Backstage ",(0,n.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,n.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Sign up for our ",(0,n.jsx)(t.a,{href:"https://mailchi.mp/spotify/backstage-community",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},371426:(e,t,r)=>{var n=r(827378),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}function y(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var k=v.prototype=new y;k.constructor=v,g(k,b.prototype),k.isPureReactComponent=!0;var x=Array.isArray,j=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var a,s={},o=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)j.call(t,a)&&!_.hasOwnProperty(a)&&(s[a]=t[a]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===s[a]&&(s[a]=c[a]);return{$$typeof:r,type:e,key:o,ref:i,props:s,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,a,s,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return o=o(c=e),e=""===s?"."+E(c,0):s,x(o)?(a="",null!=e&&(a=e.replace(R,"$&/")+"/"),P(o,t,a,"",(function(e){return e}))):null!=o&&(C(o)&&(o=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(R,"$&/")+"/")+e)),t.push(o)),1;if(c=0,s=""===s?".":s+":",x(e))for(var l=0;l<e.length;l++){var u=s+E(i=e[l],l);c+=P(i,t,a,u,o)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=P(i=i.value,t,a,u=s+E(i,l++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function T(e,t,r){if(null==e)return e;var n=[],a=0;return P(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var B={current:null},O={transition:null},$={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:O,ReactCurrentOwner:w};t.Children={map:T,forEach:function(e,t,r){T(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=a,t.Profiler=o,t.PureComponent=v,t.StrictMode=s,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=g({},e.props),s=e.key,o=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,i=w.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!_.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}return{$$typeof:r,type:e.type,key:s,ref:o,props:a,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return B.current.useCallback(e,t)},t.useContext=function(e){return B.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return B.current.useDeferredValue(e)},t.useEffect=function(e,t){return B.current.useEffect(e,t)},t.useId=function(){return B.current.useId()},t.useImperativeHandle=function(e,t,r){return B.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return B.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return B.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return B.current.useMemo(e,t)},t.useReducer=function(e,t,r){return B.current.useReducer(e,t,r)},t.useRef=function(e){return B.current.useRef(e)},t.useState=function(e){return B.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return B.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return B.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var n=r(667294);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);