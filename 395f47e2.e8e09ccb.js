(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(94)),o={title:"Advanced"},c={unversionedId:"advanced",id:"advanced",isDocsHomePage:!1,title:"Advanced",description:"Creating binary files",source:"@site/docs/advanced.md",slug:"/advanced",permalink:"/docs/advanced",editUrl:"https://github.com/milesj/packemon/edit/master/website/docs/advanced.md",version:"current",sidebar:"docs",previous:{title:"Watch",permalink:"/docs/watch"}},l=[{value:"Creating binary files",id:"creating-binary-files",children:[]},{value:"Referencing sibling inputs",id:"referencing-sibling-inputs",children:[]},{value:"Version constraints",id:"version-constraints",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"creating-binary-files"},"Creating binary files"),Object(i.b)("p",null,"A binary is an executable file distributed in an NPM package via the\n",Object(i.b)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json#bin"},"bin")," field. Packemon offers first class support for\nbinary files by:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Prepending a ",Object(i.b)("inlineCode",{parentName:"li"},"#!/usr/bin/env node")," shebang to the output file. Do not include this in the source\nfile!"),Object(i.b)("li",{parentName:"ul"},"Updating the ",Object(i.b)("inlineCode",{parentName:"li"},"bin")," field in ",Object(i.b)("inlineCode",{parentName:"li"},"package.json")," to the output file (if not already defined).")),Object(i.b)("p",null,"To make use of this functionality, you must define an ",Object(i.b)("a",{parentName:"p",href:"/docs/config#inputs"},"input")," with the name\n",Object(i.b)("inlineCode",{parentName:"p"},"bin"),", like so."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "name": "package",\n    "packemon": {\n        "inputs": {\n            "bin": "src/bin.ts"\n        },\n        "platform": "node"\n    }\n}\n')),Object(i.b)("p",null,"The contents of the binary source file can be whatever you want, but do be aware that code in the\nmodule scope will be executed immediately when the file is executed by Node.js."),Object(i.b)("h2",{id:"referencing-sibling-inputs"},"Referencing sibling inputs"),Object(i.b)("p",null,"Coming soon..."),Object(i.b)("h2",{id:"version-constraints"},"Version constraints"),Object(i.b)("p",null,"If you're using packemon as a global dependency and want to ensure all contributors of your project\nare using the correct packemon version, you can provide an ",Object(i.b)("inlineCode",{parentName:"p"},"engines")," constraint to your root\n",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "name": "package",\n    "engines": {\n        "packemon": "^1.0.0"\n    }\n}\n')))}p.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return t?a.a.createElement(f,c(c({ref:n},s),{},{components:t})):a.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);