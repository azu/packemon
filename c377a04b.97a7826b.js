(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(75)),i={title:"Introduction",slug:"/"},c={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Introduction",description:"Are you a library maintainer? Confused on how to build packages for consumers? Unsure of what",source:"@site/docs/index.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/milesj/packemon/edit/master/website/docs/index.md",version:"current",sidebar:"docs",next:{title:"Installation",permalink:"/docs/install"}},l=[{value:"Features",id:"features",children:[]},{value:"Requirements",id:"requirements",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Are you a library maintainer? Confused on how to build packages for consumers? Unsure of what\ntooling and plugins to use? What about CommonJS vs ECMAScript? TypeScript, JavaScript, or FlowType?\nForget that headache and let Packemon do the heavy lifting for you. No need to fiddle with Babel or\nRollup configurations!"),Object(a.b)("p",null,"Packemon will prepare each package for distribution by building with the proper tooling and plugins,\nprovide sane defaults and configurations, verify package requirements, and much more!"),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Configure packages for Node.js or Web browsers, with multiple output formats like CommonJS and\nECMAScript."),Object(a.b)("li",{parentName:"ul"},"Builds packages with Rollup to create self-contained and tree-shaken entry points. Provide the\nsmallest file sizes possible!"),Object(a.b)("li",{parentName:"ul"},"Transforms packages with Babel's ",Object(a.b)("inlineCode",{parentName:"li"},"preset-env")," and the configured platform targets. Only ship and\npolyfill what's truly necessary!"),Object(a.b)("li",{parentName:"ul"},"Generate and combine TypeScript declarations into a single public-only API representation."),Object(a.b)("li",{parentName:"ul"},"Generates compact source maps for browser based builds.")),Object(a.b)("h2",{id:"requirements"},"Requirements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Linux, OSX, Windows"),Object(a.b)("li",{parentName:"ul"},"Node 10.3+")))}s.isMDXComponent=!0},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);