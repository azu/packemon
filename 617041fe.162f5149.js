(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),o=(n(0),n(76)),c=n(84),r=n(85),s={title:"Setup & requirements"},l={unversionedId:"setup",id:"setup",isDocsHomePage:!1,title:"Setup & requirements",description:"Package structure",source:"@site/docs/setup.mdx",slug:"/setup",permalink:"/docs/setup",editUrl:"https://github.com/milesj/packemon/edit/master/website/docs/setup.mdx",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/install"},next:{title:"Package configuration",permalink:"/docs/config"}},p=[{value:"Package structure",id:"package-structure",children:[]},{value:"TypeScript integration",id:"typescript-integration",children:[{value:"Update output directories",id:"update-output-directories",children:[]},{value:"Enable emitting",id:"enable-emitting",children:[]},{value:"Disable JSON resolving",id:"disable-json-resolving",children:[]},{value:"Supporting project references",id:"supporting-project-references",children:[]}]}],u={rightToc:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"package-structure"},"Package structure"),Object(o.b)("p",null,"Whether a solorepo (1 package) or a monorepo (many packages), Packemon makes the following\nassumptions, some of which are hard requirements."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Each package must contain a ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")," (of course)."),Object(o.b)("li",{parentName:"ul"},"Each package must have a source folder named ",Object(o.b)("inlineCode",{parentName:"li"},"src"),". Builds will output relative to this."),Object(o.b)("li",{parentName:"ul"},"Each package must have a source entry point, typically a ",Object(o.b)("inlineCode",{parentName:"li"},"src/index.ts")," file (or ",Object(o.b)("inlineCode",{parentName:"li"},"index.js")," if not\nusing TypeScript)."),Object(o.b)("li",{parentName:"ul"},"Each package may contain a ",Object(o.b)("inlineCode",{parentName:"li"},"tsconfig.json"),"."),Object(o.b)("li",{parentName:"ul"},"Each package should contain a ",Object(o.b)("inlineCode",{parentName:"li"},"LICENSE")," and ",Object(o.b)("inlineCode",{parentName:"li"},"README.md"),".")),Object(o.b)("p",null,"This would look something like the following."),Object(o.b)(c.a,{groupId:"package-structure",defaultValue:"solo",values:[{label:"Solorepo",value:"solo"},{label:"Monorepo",value:"mono"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"solo",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"/\n\u251c\u2500\u2500 src/\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 LICENSE\n\u2514\u2500\u2500 README.md\n"))),Object(o.b)(r.a,{value:"mono",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"/\n\u251c\u2500\u2500 packages/\n\u2502   \u251c\u2500\u2500 foo/\n\u2502   |   \u251c\u2500\u2500 src/\n\u2502   |   \u251c\u2500\u2500 package.json\n\u2502   |   \u251c\u2500\u2500 LICENSE\n\u2502   |   \u2514\u2500\u2500 README.md\n\u2502   \u251c\u2500\u2500 bar/\n\u2502   |   \u251c\u2500\u2500 src/\n\u2502   |   \u251c\u2500\u2500 package.json\n\u2502   |   \u251c\u2500\u2500 LICENSE\n\u2502   |   \u2514\u2500\u2500 README.md\n\u2502   \u2514\u2500\u2500 baz/\n\u2502       \u251c\u2500\u2500 src/\n\u2502       \u251c\u2500\u2500 package.json\n\u2502       \u251c\u2500\u2500 LICENSE\n\u2502       \u2514\u2500\u2500 README.md\n\u251c\u2500\u2500 lerna.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 LICENSE\n\u2514\u2500\u2500 README.md\n")))),Object(o.b)("h2",{id:"typescript-integration"},"TypeScript integration"),Object(o.b)("p",null,"Integrating with TypeScript can sometimes be tricky, and with Packemon, that is definitely the case.\nSince Packemon now handles the build process, TypeScript should be configured for type checking and\ndeclaration generation only."),Object(o.b)("h3",{id:"update-output-directories"},"Update output directories"),Object(o.b)("p",null,"Both the ",Object(o.b)("inlineCode",{parentName:"p"},"outDir")," and ",Object(o.b)("inlineCode",{parentName:"p"},"declarationDir")," settings should be updated to ",Object(o.b)("inlineCode",{parentName:"p"},"dts"),", and should ",Object(o.b)("em",{parentName:"p"},"not")," be set\nto ",Object(o.b)("inlineCode",{parentName:"p"},"lib"),", ",Object(o.b)("inlineCode",{parentName:"p"},"build"),", or some other variant. This is especially true if using project references."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'}),'{\n  "compilerOptions": {\n    "declarationDir": "dts",\n    "outDir": "dts"\n  }\n}\n')),Object(o.b)("h3",{id:"enable-emitting"},"Enable emitting"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"noEmit")," setting should only be used on the command line (via an NPM script) and should not be\nconfigured explicitly. We require emitting of declarations."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'}),'{\n  "compilerOptions": {\n    "noEmit": false\n  }\n}\n')),Object(o.b)("h3",{id:"disable-json-resolving"},"Disable JSON resolving"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"resolveJsonModule")," setting alters the output folder structure in such a way that it breaks the\nguarantees that Packemon needs for handling declarations."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'}),'{\n  "compilerOptions": {\n    "resolveJsonModule": false\n  }\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you really need to support this feature, please create an issue so that we can track it\nproperly.")),Object(o.b)("h3",{id:"supporting-project-references"},"Supporting project references"),Object(o.b)("p",null,"Alongside the requirements listed above, the ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json")," within each project reference package\nshould be updated to only emit declarations to ",Object(o.b)("inlineCode",{parentName:"p"},"dts"),", like so."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'}),'{\n  "compilerOptions": {\n    "declarationDir": "dts",\n    "outDir": "dts",\n    "rootDir": "src",\n    "emitDeclarationOnly": true\n  }\n}\n')))}b.isMDXComponent=!0},84:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(78),c=n(73),r=n(47),s=n.n(r);const l=37,p=39;t.a=function(e){const{block:t,children:n,defaultValue:r,values:u,groupId:b}=e,{tabGroupChoices:d,setTabGroupChoices:m}=Object(o.a)(),[j,g]=Object(a.useState)(r),[O,h]=Object(a.useState)(!1);if(null!=b){const e=d[b];null!=e&&e!==j&&u.some((t=>t.value===e))&&g(e)}const f=e=>{g(e),null!=b&&m(b,e)},k=[],N=e=>{e.metaKey||e.altKey||e.ctrlKey||h(!0)},v=()=>{h(!1)};return Object(a.useEffect)((()=>{window.addEventListener("keydown",N),window.addEventListener("mousedown",v)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},u.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===e}),style:O?{}:{outline:"none"},key:e,ref:e=>k.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(k,e.target,e),N(e)},onFocus:()=>f(e),onClick:()=>{f(e),h(!1)},onPointerDown:()=>h(!1)},t)))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((e=>e.props.value===j))[0]))}},85:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);