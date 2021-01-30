(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(l,".").concat(d)]||s[d]||b[d]||a;return n?o.a.createElement(f,i(i({ref:t},p),{},{components:n})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(101)),l={id:"loops-py",title:"Loops",sidebar_label:"For"},i={unversionedId:"python/loops-py",id:"python/loops-py",isDocsHomePage:!1,title:"Loops",description:"for",source:"@site/docs\\python\\loops-py.md",slug:"/python/loops-py",permalink:"/cs_learning/docs/python/loops-py",editUrl:"https://github.com/dhust/cs_learning/edit/master/website/docs/python/loops-py.md",version:"current",sidebar_label:"For",sidebar:"python",previous:{title:"Functions",permalink:"/cs_learning/docs/python/functions-py"}},c=[{value:"for",id:"for",children:[{value:"One Value",id:"one-value",children:[]},{value:"Two Values",id:"two-values",children:[]},{value:"Three Values",id:"three-values",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"for"},"for"),Object(a.b)("h3",{id:"one-value"},"One Value"),Object(a.b)("p",null,"If only one value is given, then that's the ending number."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Starts at 0"),Object(a.b)("li",{parentName:"ol"},"Ends one before the number in parentheses (e.g. 4 - 1 = 3)")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"  for i in range(4):\n    print(i)\n\n  ## Output: ##\n  # 0\n  # 1\n  # 2\n  # 3\n")),Object(a.b)("h3",{id:"two-values"},"Two Values"),Object(a.b)("p",null,"If two values are given,"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Starts at the first value"),Object(a.b)("li",{parentName:"ol"},"Ends one before the second value")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"  for i in range(2, 5):\n    print(i)\n\n  ## Output: ##\n  # 2\n  # 3\n  # 4\n")),Object(a.b)("h3",{id:"three-values"},"Three Values"),Object(a.b)("p",null,"If three values are given,"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Starts at the first value"),Object(a.b)("li",{parentName:"ol"},"Ends one before the second value"),Object(a.b)("li",{parentName:"ol"},"Third value is what it increments by")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"  for i in range(4, 13, 3):\n    print(i)\n\n  ## Output: ##\n  # 4\n  # 7\n  # 10\n\n  # Note: It didn't print 13 because it goes \"up to\" 13, but doesn't include it\n")))}u.isMDXComponent=!0}}]);