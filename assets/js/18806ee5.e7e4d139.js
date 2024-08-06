/*! For license information please see 18806ee5.e7e4d139.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[851839],{128633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=t(824246),o=t(511151);const i={id:"frontend-plugin-api.extensionblueprint.make",title:"ExtensionBlueprint.make()",description:"API reference for ExtensionBlueprint.make()"},a=void 0,u={id:"reference/frontend-plugin-api.extensionblueprint.make",title:"ExtensionBlueprint.make()",description:"API reference for ExtensionBlueprint.make()",source:"@site/../docs/reference/frontend-plugin-api.extensionblueprint.make.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.extensionblueprint.make",permalink:"/docs/reference/frontend-plugin-api.extensionblueprint.make",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.extensionblueprint.make.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.extensionblueprint.make",title:"ExtensionBlueprint.make()",description:"API reference for ExtensionBlueprint.make()"}},s={},c=[{value:"Parameters",id:"parameters",level:2}];function f(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprint",children:(0,r.jsx)(n.code,{children:"ExtensionBlueprint"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprint.make",children:(0,r.jsx)(n.code,{children:"make"})})]}),"\n",(0,r.jsx)(n.p,{children:"Creates a new extension from the blueprint."}),"\n",(0,r.jsxs)(n.p,{children:["You must either pass ",(0,r.jsx)(n.code,{children:"params"})," directly, or define a ",(0,r.jsx)(n.code,{children:"factory"})," that can optionally call the original factory with the same params."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"make<TExtensionConfigSchema extends {\n        [key in string]: (zImpl: typeof z) => z.ZodType;\n    }, UFactoryOutput extends ExtensionDataValue<any, any>>(args: {\n        namespace?: string;\n        name?: string;\n        attachTo?: {\n            id: string;\n            input: string;\n        };\n        disabled?: boolean;\n        inputs?: TInputs;\n        output?: Array<UExtraOutput>;\n        config?: {\n            schema: TExtensionConfigSchema & {\n                [KName in keyof TConfig]?: `Error: Config key '${KName & string}' is already defined in parent schema`;\n            };\n        };\n    } & (({\n        factory(originalFactory: (params: TParams, context?: {\n            config?: TConfig;\n            inputs?: Expand<ResolvedExtensionInputs<TInputs>>;\n        }) => Iterable<ExtensionDataRefToValue<UOutput>>, context: {\n            node: AppNode;\n            config: TConfig & {\n                [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>;\n            };\n            inputs: Expand<ResolvedExtensionInputs<TInputs>>;\n        }): Iterable<UFactoryOutput>;\n    } & VerifyExtensionFactoryOutput<UOutput & UExtraOutput, UFactoryOutput>) | {\n        params: TParams;\n    })): ExtensionDefinition<{\n        [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>;\n    } & TConfig, z.input<z.ZodObject<{\n        [key in keyof TExtensionConfigSchema]: ReturnType<TExtensionConfigSchema[key]>;\n    }>> & TConfigInput>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"args"}),(0,r.jsxs)(n.td,{children:["{ namespace?: string; name?: string; attachTo?: { id: string; input: string; }; disabled?: boolean; inputs?: TInputs; output?: Array<UExtraOutput>; config?: { schema: TExtensionConfigSchema & { [KName in keyof TConfig]?: `Error: Config key '${KName & string}' is already defined in parent schema`; }; }; } & (({ factory(originalFactory: (params: TParams, context?: { config?: TConfig; inputs?: Expand<",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.resolvedextensioninputs",children:"ResolvedExtensionInputs"}),"<TInputs>>; }) => Iterable<",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondatareftovalue",children:"ExtensionDataRefToValue"}),"<UOutput>>, context: { node: ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnode",children:"AppNode"}),"; config: TConfig & { [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>; }; inputs: Expand<",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.resolvedextensioninputs",children:"ResolvedExtensionInputs"}),"<TInputs>>; }): Iterable<UFactoryOutput>; } & VerifyExtensionFactoryOutput<UOutput & UExtraOutput, UFactoryOutput>) | { params: TParams; })"]}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondefinition",children:"ExtensionDefinition"}),"<{ [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>; } & TConfig, z.input<z.ZodObject<{ [key in keyof TExtensionConfigSchema]: ReturnType<TExtensionConfigSchema[key]>; }>> & TConfigInput>"]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,f=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(f=n.ref),n)a.call(n,r)&&!s.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:f,props:i,_owner:u.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function x(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}function g(){}function b(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}x.prototype.isReactComponent={},x.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=x.prototype;var k=b.prototype=new g;k.constructor=b,h(k,x.prototype),k.isPureReactComponent=!0;var E=Array.isArray,_=Object.prototype.hasOwnProperty,v={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var o,i={},a=null,u=null;if(null!=n)for(o in void 0!==n.ref&&(u=n.ref),void 0!==n.key&&(a=""+n.key),n)_.call(n,o)&&!j.hasOwnProperty(o)&&(i[o]=n[o]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var c=Array(s),f=0;f<s;f++)c[f]=arguments[f+2];i.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return{$$typeof:t,type:e,key:a,ref:u,props:i,_owner:v.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var S=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function O(e,n,o,i,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case r:s=!0}}if(s)return a=a(s=e),e=""===i?"."+R(s,0):i,E(a)?(o="",null!=e&&(o=e.replace(S,"$&/")+"/"),O(a,n,o,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(S,"$&/")+"/")+e)),n.push(a)),1;if(s=0,i=""===i?".":i+":",E(e))for(var c=0;c<e.length;c++){var f=i+R(u=e[c],c);s+=O(u,n,o,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),c=0;!(u=e.next()).done;)s+=O(u=u.value,n,o,f=i+R(u,c++),a);else if("object"===u)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function I(e,n,t){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function w(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},$={transition:null},U={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:$,ReactCurrentOwner:v};n.Children={map:I,forEach:function(e,n,t){I(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return I(e,(function(){n++})),n},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=x,n.Fragment=o,n.Profiler=a,n.PureComponent=b,n.StrictMode=i,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),i=e.key,a=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,u=v.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in n)_.call(n,c)&&!j.hasOwnProperty(c)&&(o[c]=void 0===n[c]&&void 0!==s?s[c]:n[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){s=Array(c);for(var f=0;f<c;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:t,type:e.type,key:i,ref:a,props:o,_owner:u}},n.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},n.createElement=T,n.createFactory=function(e){var n=T.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:w}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=$.transition;$.transition={};try{e()}finally{$.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return P.current.useCallback(e,n)},n.useContext=function(e){return P.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return P.current.useDeferredValue(e)},n.useEffect=function(e,n){return P.current.useEffect(e,n)},n.useId=function(){return P.current.useId()},n.useImperativeHandle=function(e,n,t){return P.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return P.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return P.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return P.current.useMemo(e,n)},n.useReducer=function(e,n,t){return P.current.useReducer(e,n,t)},n.useRef=function(e){return P.current.useRef(e)},n.useState=function(e){return P.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return P.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return P.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>u,a:()=>a});var r=t(667294);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);