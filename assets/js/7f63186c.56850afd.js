(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[874],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return c}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),c=i,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return t?a.createElement(k,r(r({ref:n},u),{},{components:t})):a.createElement(k,r({ref:n},u))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6061:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=t(2122),i=t(9756),l=(t(7294),t(3905)),r=["components"],o={title:"Build",sidebar_label:"build"},s={unversionedId:"build",id:"build",isDocsHomePage:!1,title:"Build",description:"Packemon was primarily designed and engineered for building packages. But what is building you ask?",source:"@site/docs/build.md",sourceDirName:".",slug:"/build",permalink:"/docs/build",editUrl:"https://github.com/milesj/packemon/edit/master/website/docs/build.md",version:"current",sidebar_label:"build",frontMatter:{title:"Build",sidebar_label:"build"},sidebar:"docs",previous:{title:"Package configuration",permalink:"/docs/config"},next:{title:"Clean",permalink:"/docs/clean"}},p=[{value:"Options",id:"options",children:[]},{value:"How it works",id:"how-it-works",children:[]},{value:"Babel configuration",id:"babel-configuration",children:[{value:"Presets",id:"presets",children:[]},{value:"Plugins",id:"plugins",children:[]}]},{value:"Rollup configuration",id:"rollup-configuration",children:[{value:"Plugins",id:"plugins-1",children:[]}]}],u={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Packemon was primarily designed and engineered for building packages. But what is building you ask?\nBuilding is the process of parsing, transforming, and bundling a package's source code into\ndistributable and consumable files for NPM, using community favorite tools like ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io"},"Babel")," and\n",(0,l.kt)("a",{parentName:"p",href:"https://rollupjs.org"},"Rollup"),"."),(0,l.kt)("p",null,"With that being said, the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," command can be used to build all packages in a project according\nto their configured build targets (platform, formats, etc)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "scripts": {\n        "build": "packemon build --addEngines"\n    }\n}\n')),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"Build supports the following command line options."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--addEngines")," - Add Node.js and NPM ",(0,l.kt)("inlineCode",{parentName:"li"},"engine")," versions to each ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," when ",(0,l.kt)("inlineCode",{parentName:"li"},"platform")," is\n",(0,l.kt)("inlineCode",{parentName:"li"},"node"),". Uses the ",(0,l.kt)("inlineCode",{parentName:"li"},"support")," setting to determine the version range."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--addExports")," - Add ",(0,l.kt)("inlineCode",{parentName:"li"},"exports")," fields to each ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," according to the respective ",(0,l.kt)("inlineCode",{parentName:"li"},"inputs"),"\nsetting. This is an experimental Node.js feature and may not work correctly\n(",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/api/packages.html#packages_package_entry_points"},"more information"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--analyze")," - Analyze and visualize all generated builds. Will open a browser visualization for\neach bundle in one of the following formats.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sunburst")," - Displays an inner circle surrounded by rings of deeper hierarchy levels."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"treemap")," - Displays hierarchy levels as top-level and nested rectangles of varying size."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"network")," - Displays files as nodes with the relationship between files."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--concurrency")," - Number of builds to run in parallel. Defaults to operating system CPU count."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--declaration")," - Generate TypeScript declarations for each package. Accepts one of the following\nvalues.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"standard")," - Generates multiple ",(0,l.kt)("inlineCode",{parentName:"li"},"d.ts")," files with ",(0,l.kt)("inlineCode",{parentName:"li"},"tsc"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"api")," - Generates a single ",(0,l.kt)("inlineCode",{parentName:"li"},"d.ts")," file for each input. Uses\n",(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@microsoft/api-extractor"},"@microsoft/api-extractor")," to ",(0,l.kt)("em",{parentName:"li"},"only"),"\ngenerate the public API. ",(0,l.kt)("em",{parentName:"li"},"(NOTE: this is quite slow)")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--declarationConfig")," - Path to a custom ",(0,l.kt)("inlineCode",{parentName:"li"},"tsconfig")," for declaration building."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--filter")," - Filter packages to build based on their name in ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--formats"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"-f")," - Only generate specific output ",(0,l.kt)("inlineCode",{parentName:"li"},"format"),"s."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--platforms"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"-p")," - Only target specific ",(0,l.kt)("inlineCode",{parentName:"li"},"platform"),"s."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--skipPrivate")," - Skip ",(0,l.kt)("inlineCode",{parentName:"li"},"private")," packages from being built."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--timeout")," - Timeout in milliseconds before a build is cancelled. Defaults to no timeout.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"All filtering options support standard patterns (",(0,l.kt)("inlineCode",{parentName:"p"},"foo-*"),"), comma separated lists (",(0,l.kt)("inlineCode",{parentName:"p"},"foo,bar"),"), or\nboth.")),(0,l.kt)("h2",{id:"how-it-works"},"How it works"),(0,l.kt)("p",null,"When the build process is ran, Packemon will find all viable packages within the current project and\ngenerate build artifacts. A build artifact is an output file that ",(0,l.kt)("em",{parentName:"p"},"will be")," distributed with the NPM\npackage, but ",(0,l.kt)("em",{parentName:"p"},"will ",(0,l.kt)("strong",{parentName:"em"},"not")," be")," committed to the project (ideally git ignored)."),(0,l.kt)("p",null,"To demonstrate this, let's assume we have a package with the following folder structure and file\ncontents (not exhaustive)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/\n\u251c\u2500\u2500 src/\n|   \u251c\u2500\u2500 index.ts\n|   \u2514\u2500\u2500 *.ts\n\u251c\u2500\u2500 tests/\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 LICENSE\n\u2514\u2500\u2500 README.md\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "name": "package",\n    "packemon": {\n        "inputs": { "index": "src/index.ts" },\n        "platform": ["node", "browser"],\n        "formats": ["lib", "esm", "umd"],\n        "namespace": "Example"\n    }\n}\n')),(0,l.kt)("p",null,"Based on the package configuration above, our build will target both Node.js and web browsers, while\ngenerating multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"index")," outputs across both platforms. The resulting folder structure will look\nlike the following (when also using ",(0,l.kt)("inlineCode",{parentName:"p"},"--declaration"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/\n\u251c\u2500\u2500 dts/\n|   \u2514\u2500\u2500 index.d.ts\n\u251c\u2500\u2500 esm/\n|   \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 lib/\n|   \u2514\u2500\u2500 browser/index.js\n|   \u2514\u2500\u2500 node/index.js\n\u251c\u2500\u2500 src/\n|   \u251c\u2500\u2500 index.ts\n|   \u2514\u2500\u2500 *.ts\n\u251c\u2500\u2500 tests/\n\u251c\u2500\u2500 umd/\n|   \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 LICENSE\n\u2514\u2500\u2500 README.md\n")),(0,l.kt)("p",null,"Furthermore, the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," will automatically be updated with our build artifact entry points\nand files list, as demonstrated below. This can further be expanded upon using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--addEngines"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"--addExports")," options."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "name": "package",\n    "main": "./lib/index.js",\n    "module": "./esm/index.js",\n    "browser": "./umd/index.js",\n    "types": "./dts/index.d.ts",\n    "files": ["dts/", "esm/", "lib/", "src/", "umd/"],\n    "packemon": {\n        "inputs": { "index": "src/index.ts" },\n        "platform": ["node", "browser"],\n        "formats": ["lib", "esm", "umd"],\n        "namespace": "Example"\n    }\n}\n')),(0,l.kt)("p",null,"Amazing, we now have self-contained and tree-shaken build artifacts for consumption. However, to\nensure ",(0,l.kt)("em",{parentName:"p"},"only")," build artifacts are packaged and distributed to NPM, we rely on the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"files")," property. Based on the list above, the files published to NPM would be the following (pretty\nmuch everything except tests)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/\n\u251c\u2500\u2500 dts/\n\u251c\u2500\u2500 esm/\n\u251c\u2500\u2500 lib/\n\u251c\u2500\u2500 src/\n\u251c\u2500\u2500 umd/\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 LICENSE\n\u2514\u2500\u2500 README.md\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Why are source files published? For source maps! Packemon will always generate source maps\nregardless of format, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," directory is necessary for proper linking.")),(0,l.kt)("h2",{id:"babel-configuration"},"Babel configuration"),(0,l.kt)("p",null,"All packages are parsed and transpiled with ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io"},"Babel")," (through Rollup). The presets and plugins\nused are automatically determined on a package-by-package basis, by inspecting the package's root\nfiles and respective ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," (and root ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," if using workspaces)."),(0,l.kt)("h3",{id:"presets"},"Presets"),(0,l.kt)("p",null,"The environment preset is always enabled and configures the following."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@babel/preset-env"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Defines ",(0,l.kt)("inlineCode",{parentName:"li"},"modules")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"targets")," based on the chosen ",(0,l.kt)("a",{parentName:"li",href:"/docs/config#platforms"},"platform")," and\n",(0,l.kt)("a",{parentName:"li",href:"/docs/config#formats"},"format"),"."),(0,l.kt)("li",{parentName:"ul"},"Enables ",(0,l.kt)("inlineCode",{parentName:"li"},"spec")," in development for testing compliance."),(0,l.kt)("li",{parentName:"ul"},"Enables ",(0,l.kt)("inlineCode",{parentName:"li"},"bugfixes")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"shippedProposals")," for smaller file sizes."),(0,l.kt)("li",{parentName:"ul"},"Disables ",(0,l.kt)("inlineCode",{parentName:"li"},"useBuiltIns")," as consumers of the package should polyfill accordingly.")))),(0,l.kt)("p",null,"The following presets are enabled when one of their conditions are met."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@babel/preset-flow"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Package or root contains a ",(0,l.kt)("inlineCode",{parentName:"li"},"flow-bin")," dependency."),(0,l.kt)("li",{parentName:"ul"},"Project contains a ",(0,l.kt)("inlineCode",{parentName:"li"},".flowconfig"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@babel/preset-typescript"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Package or root contains a ",(0,l.kt)("inlineCode",{parentName:"li"},"typescript")," dependency."),(0,l.kt)("li",{parentName:"ul"},"Package contains a ",(0,l.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@babel/preset-react"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Package or root contains a ",(0,l.kt)("inlineCode",{parentName:"li"},"react")," dependency.")))),(0,l.kt)("h3",{id:"plugins"},"Plugins"),(0,l.kt)("p",null,"The following plugins are enabled when one of their conditions are met."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@babel/plugin-proposal-decorators"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Enabled when package is TypeScript aware and defines ",(0,l.kt)("inlineCode",{parentName:"li"},"experimentalDecorators")," in\n",(0,l.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@babel/plugin-transform-runtime"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Enabled when package ",(0,l.kt)("a",{parentName:"li",href:"/docs/config#platforms"},"platform")," is configured to ",(0,l.kt)("inlineCode",{parentName:"li"},"browser")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"native"),".\nWill transform generators to ",(0,l.kt)("inlineCode",{parentName:"li"},"regnerator-runtime")," for legacy versions."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"babel-plugin-transform-async-to-promises"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Enabled when package ",(0,l.kt)("a",{parentName:"li",href:"/docs/config#platforms"},"platform")," is configured to ",(0,l.kt)("inlineCode",{parentName:"li"},"browser")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"native"),".\nWill transform async/await to promises for legacy versions."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Custom"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Always enabled. Will transform ",(0,l.kt)("inlineCode",{parentName:"li"},"__DEV__"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"__PROD__"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"__TEST__")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"process.env.NODE_ENV"),"\nconditionals.")))),(0,l.kt)("h2",{id:"rollup-configuration"},"Rollup configuration"),(0,l.kt)("p",null,"While Babel handles the parsing and transformation of source files, ",(0,l.kt)("a",{parentName:"p",href:"https://rollupjs.org"},"Rollup")," bundles all\nentry point dependent source files into a single tree-shaken distributable file. This vastly reduces\nthe file size, require/import times, evaluation speed, and more."),(0,l.kt)("p",null,'However, configuring Rollup can be quite daunting. Because of this, the entire layer is abstracted\naway behind Packemon, and should just "work" when packages are configured correctly. Our abstraction\nabides the following:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For every input in a package's ",(0,l.kt)("a",{parentName:"li",href:"/docs/config#inputs"},"inputs")," setting, an output file will be\ncreated."),(0,l.kt)("li",{parentName:"ul"},"For every ",(0,l.kt)("a",{parentName:"li",href:"/docs/config#platforms"},"platform")," and ",(0,l.kt)("a",{parentName:"li",href:"/docs/config#formats"},"format")," in a package, a\nunique output file will be created."),(0,l.kt)("li",{parentName:"ul"},"Every Node.js built-in module is configured as external."),(0,l.kt)("li",{parentName:"ul"},"Every package dependency is configured as external."),(0,l.kt)("li",{parentName:"ul"},"Always reduces file size as much as possible by utilizing tree-shaking."),(0,l.kt)("li",{parentName:"ul"},'Allows input files to reference other input files to mitigate "instance of" and "reference"\nissues.')),(0,l.kt)("h3",{id:"plugins-1"},"Plugins"),(0,l.kt)("p",null,"The following plugins are enabled per package."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@rollup/plugin-node-resolve"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Resolves imports using Node.js module resolution."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@rollup/plugin-commonjs"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Converts CommonJS externals to ECMAScript for bundling capabilities."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@rollup/plugin-json"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Allows JSON files to be imported (default export only)."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@rollup/plugin-babel"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Parses and transforms source code using Babel."),(0,l.kt)("li",{parentName:"ul"},"Excludes test related files from transformation."),(0,l.kt)("li",{parentName:"ul"},"Inlines runtime helpers in the output file."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rollup-plugin-node-externals"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Defines ",(0,l.kt)("inlineCode",{parentName:"li"},"externals")," based on ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," dependencies."),(0,l.kt)("li",{parentName:"ul"},"Includes ",(0,l.kt)("inlineCode",{parentName:"li"},"dependencies"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"devDependencies"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"peerDependencies"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"optionalDependencies"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rollup-plugin-polyfill-node"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Polyfills Node.js built-in modules when platform is ",(0,l.kt)("inlineCode",{parentName:"li"},"browser")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"native"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rollup-plugin-visualizer"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Analyzes and generates a bundle size visualizer."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Custom"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Prepend a Node.js shebang to ",(0,l.kt)("inlineCode",{parentName:"li"},"bin.*")," output files.")))))}d.isMDXComponent=!0}}]);