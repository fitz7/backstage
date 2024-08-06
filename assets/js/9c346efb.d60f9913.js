/*! For license information please see 9c346efb.d60f9913.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[883139],{313776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(824246),o=n(511151);const s={id:"database",title:"Database",description:"How to set up PostgreSQL for your Backstage instance."},a=void 0,i={id:"getting-started/config/database",title:"Database",description:"How to set up PostgreSQL for your Backstage instance.",source:"@site/../docs/getting-started/config/database.md",sourceDirName:"getting-started/config",slug:"/getting-started/config/database",permalink:"/docs/getting-started/config/database",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/getting-started/config/database.md",tags:[],version:"current",frontMatter:{id:"database",title:"Database",description:"How to set up PostgreSQL for your Backstage instance."},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/getting-started/"},next:{title:"Authentication",permalink:"/docs/getting-started/config/authentication"}},c={},l=[{value:"Summary",id:"summary",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Install and configure PostgreSQL",id:"1-install-and-configure-postgresql",level:3},{value:"2. Configuring Backstage <code>pg</code> Client",id:"2-configuring-backstage-pg-client",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Further Reading",id:"further-reading",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Audience: Admins"}),"\n",(0,r.jsx)(t.h3,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(t.p,{children:["This guide walks through how to set up a PostgreSQL database to host your Backstage data. It assumes you've already have a scaffolded Backstage app from following the ",(0,r.jsx)(t.a,{href:"/docs/getting-started/",children:"Standalone Install"})," guide."]}),"\n",(0,r.jsx)(t.p,{children:"By the end of this tutorial, you will have a working PostgreSQL database hooked up to your Backstage install."}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:["This guide assumes a basic understanding of working on a Linux based operating system and have some experience with the terminal, specifically, these commands: ",(0,r.jsx)(t.code,{children:"apt-get"}),", ",(0,r.jsx)(t.code,{children:"psql"}),", ",(0,r.jsx)(t.code,{children:"yarn"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Access to a Linux-based operating system, such as Linux, MacOS or\n",(0,r.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/",children:"Windows Subsystem for Linux"})]}),"\n",(0,r.jsx)(t.li,{children:"An account with elevated rights to install prerequisites on your operating\nsystem"}),"\n",(0,r.jsxs)(t.li,{children:["If the database is not hosted on the same server as the Backstage app, the\nPostgreSQL port needs to be accessible (the default is ",(0,r.jsx)(t.code,{children:"5432"})," or ",(0,r.jsx)(t.code,{children:"5433"}),")"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"1-install-and-configure-postgresql",children:"1. Install and configure PostgreSQL"}),"\n",(0,r.jsx)(t.admonition,{title:"Already configured your database?",type:"tip",children:(0,r.jsxs)(t.p,{children:["If you've already installed PostgreSQL and created a schema and user, you can skip to ",(0,r.jsx)(t.a,{href:"#2-configuring-backstage-pg-client",children:"Step 2"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:"Let's install PostgreSQL and get it set up for our Backstage app. First, we'll need to actually install the SQL server."}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["The command below is for Linux. If you're not on Linux or having issues with package managers, check out ",(0,r.jsx)(t.a,{href:"https://www.postgresql.org/download/",children:"how to install PostgreSQL"})," to help you get sorted."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"sudo apt-get install postgresql\n"})}),"\n",(0,r.jsx)(t.p,{children:"To test if your database is working:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"sudo -u postgres psql\n"})}),"\n",(0,r.jsx)(t.p,{children:"You should see a very welcoming message, like:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'psql (12.9 (Ubuntu 12.9-0ubuntu0.20.04.1))\nType "help" for help.\n\npostgres=#\n'})}),"\n",(0,r.jsxs)(t.p,{children:["For this tutorial we're going to use the existing postgres user. The next step is to set the password for this user. You'll want to replace the ",(0,r.jsx)(t.code,{children:"<secret>"})," with a real password in the command below. Keep note of the password you choose here, you'll need it later."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"postgres=# ALTER USER postgres PASSWORD '<secret>';\n"})}),"\n",(0,r.jsxs)(t.p,{children:["That's enough database administration to get started. Type ",(0,r.jsx)(t.code,{children:"\\q"}),", followed by\npressing the enter key. Then again type ",(0,r.jsx)(t.code,{children:"exit"})," and press enter. Next, you need\nto install and configure the client."]}),"\n",(0,r.jsxs)(t.h3,{id:"2-configuring-backstage-pg-client",children:["2. Configuring Backstage ",(0,r.jsx)(t.code,{children:"pg"})," Client"]}),"\n",(0,r.jsx)(t.p,{children:"Go to the root directory of your freshly installed Backstage\nApp. Run the following to install the PostgreSQL client into your backend:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add pg\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Use your favorite editor to open ",(0,r.jsx)(t.code,{children:"app-config.yaml"})," and add your PostgreSQL\nconfiguration in the root directory of your Backstage app using the credentials from the previous steps."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"backend:\n  database:\n    # highlight-remove-start\n    client: better-sqlite3\n    connection: ':memory:'\n    # highlight-remove-end\n    # highlight-add-start\n    # config options: https://node-postgres.com/apis/client\n    client: pg\n    connection:\n      host: ${POSTGRES_HOST}\n      port: ${POSTGRES_PORT}\n      user: ${POSTGRES_USER}\n      password: ${POSTGRES_PASSWORD}\n    # highlight-add-end\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"${...}"})," syntax denotes environment variables, specifically,"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"POSTGRES_HOST"})," - The URL/IP to access your PostgreSQL database at. If you've installed PostgreSQL locally, this will likely be 127.0.0.1."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"POSTGRES_PORT"})," - The port to access your PostgreSQL database on. If you've installed PostgreSQL locally, this will be ",(0,r.jsx)(t.code,{children:"5432"})," or ",(0,r.jsx)(t.code,{children:"5433"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"POSTGRES_USER"})," - The user from the SQL command above, ",(0,r.jsx)(t.code,{children:"postgres"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"POSTGRES_PASSWORD"})," - The password you set in the SQL command above."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"When filling these out, you have 2 choices,"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Use environment variables when you launch Backstage, either using an environment variable injector like ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/dotenv-cli",children:(0,r.jsx)(t.code,{children:"dotenv-cli"})})," or ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/env-cmd",children:(0,r.jsx)(t.code,{children:"env-cmd"})})," or loading the variables directly with ",(0,r.jsx)(t.code,{children:"EXPORT POSTGRES_...=..."}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Replacing the entire ",(0,r.jsx)(t.code,{children:"${POSTGRES_...}"})," string with the value you identified earlier. This is the less secure option, but worth doing if you don't have much experience with environment variables."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"danger",children:(0,r.jsxs)(t.p,{children:["If you opt for the second option of replacing the entire string, take care to not commit your ",(0,r.jsx)(t.code,{children:"app-config.yaml"})," to source control. It may contain passwords that you don't want leaked."]})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/getting-started/#2-run-the-backstage-app",children:"Start the Backstage app"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"yarn dev\n"})}),"\n",(0,r.jsx)(t.p,{children:"After the Backstage frontend launches, you should notice that nothing has changed. This is a good sign. If everything is setup correctly above, this means that the data is flowing from the demo data files directly into your database!"}),"\n",(0,r.jsx)(t.p,{children:"We've now made your data persist in your Backstage database."}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsxs)(t.p,{children:["We recommend you read ",(0,r.jsx)(t.a,{href:"/docs/getting-started/config/authentication",children:"Setting up authentication"})," next."]}),"\n",(0,r.jsx)(t.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,r.jsx)(t.p,{children:"If you want to read more about the database configuration, here are some helpful links:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/tutorials/configuring-plugin-databases#privileges",children:"Configuring Plugin Databases"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"http://knexjs.org/",children:"Read more about Knex"}),", the database wrapper that we use."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function m(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function x(){}function j(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=m.prototype;var b=j.prototype=new x;b.constructor=j,g(b,m.prototype),b.isPureReactComponent=!0;var v=Array.isArray,S=Object.prototype.hasOwnProperty,w={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var o,s={},a=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,o)&&!k.hasOwnProperty(o)&&(s[o]=t[o]);var c=arguments.length-2;if(1===c)s.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===s[o]&&(s[o]=c[o]);return{$$typeof:n,type:e,key:a,ref:i,props:s,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,o,s,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===s?"."+E(c,0):s,v(a)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),T(a,t,o,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(R,"$&/")+"/")+e)),t.push(a)),1;if(c=0,s=""===s?".":s+":",v(e))for(var l=0;l<e.length;l++){var u=s+E(i=e[l],l);c+=T(i,t,o,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=T(i=i.value,t,o,u=s+E(i,l++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function O(e,t,n){if(null==e)return e;var r=[],o=0;return T(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function L(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},$={transition:null},I={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:$,ReactCurrentOwner:w};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=a,t.PureComponent=j,t.StrictMode=s,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),s=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=w.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)S.call(t,l)&&!k.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:n,type:e.type,key:s,ref:a,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:L}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return C.current.useCallback(e,t)},t.useContext=function(e){return C.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return C.current.useDeferredValue(e)},t.useEffect=function(e,t){return C.current.useEffect(e,t)},t.useId=function(){return C.current.useId()},t.useImperativeHandle=function(e,t,n){return C.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return C.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return C.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return C.current.useMemo(e,t)},t.useReducer=function(e,t,n){return C.current.useReducer(e,t,n)},t.useRef=function(e){return C.current.useRef(e)},t.useState=function(e){return C.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return C.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return C.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var r=n(667294);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);