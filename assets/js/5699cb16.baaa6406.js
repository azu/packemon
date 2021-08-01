"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[978],{5318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9534:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(9603),a=n(120),o=(n(7378),n(5318)),i=["components"],c={title:"Pack",sidebar_label:"pack"},l={unversionedId:"pack",id:"pack",isDocsHomePage:!1,title:"Pack",description:"The pack command is a multi-step pre-release solution for preparing packages for distribution.",source:"@site/docs/pack.md",sourceDirName:".",slug:"/pack",permalink:"/docs/pack",editUrl:"https://github.com/milesj/packemon/edit/master/website/docs/pack.md",version:"current",sidebar_label:"pack",frontMatter:{title:"Pack",sidebar_label:"pack"},sidebar:"docs",previous:{title:"Init",permalink:"/docs/init"},next:{title:"Validate",permalink:"/docs/validate"}},p=[{value:"Options",id:"options",children:[]}],s={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"pack")," command is a multi-step pre-release solution for preparing packages for distribution.\nWhen ran, it begins by ",(0,o.kt)("a",{parentName:"p",href:"/docs/clean"},"cleaning workspaces"),", then ",(0,o.kt)("a",{parentName:"p",href:"/docs/build"},"building all packages"),",\nand finally ",(0,o.kt)("a",{parentName:"p",href:"/docs/validate"},"validating all packages")," before a release."),(0,o.kt)("p",null,"If any of the steps fail, a non-zero exit code will be triggered, allowing the release cycle to be\naborted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "scripts": {\n        "pack": "NODE_ENV=production packemon pack --addEngines --declaration=api",\n        "release": "yarn run pack && yarn publish"\n    }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When releasing, be sure to set ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," to production to remove all development and testing\nconfiguration settings.")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"Pack supports all the same command line options as ",(0,o.kt)("a",{parentName:"p",href:"/docs/build"},(0,o.kt)("inlineCode",{parentName:"a"},"build")),". The validation step cannot\nbe customized and will validate ",(0,o.kt)("em",{parentName:"p"},"everything")," by default."))}u.isMDXComponent=!0}}]);