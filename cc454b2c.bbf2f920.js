(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{101:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,f=s["".concat(l,".").concat(d)]||s[d]||b[d]||a;return t?o.a.createElement(f,i(i({ref:n},p),{},{components:t})):o.a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(101)),l={id:"loops-py",title:"Loops",sidebar_label:"For"},i={unversionedId:"python/loops-py",id:"python/loops-py",isDocsHomePage:!1,title:"Loops",description:"for",source:"@site/docs\\python\\loops-py.md",slug:"/python/loops-py",permalink:"/cs_learning/docs/python/loops-py",editUrl:"https://github.com/dhust/cs_learning/edit/master/docs/python/loops-py.md",version:"current",sidebar_label:"For",sidebar:"python",previous:{title:"Functions",permalink:"/cs_learning/docs/python/functions-py"}},c=[{value:"for",id:"for",children:[{value:"One Value",id:"one-value",children:[]},{value:"Two Values",id:"two-values",children:[]},{value:"Three Values",id:"three-values",children:[]}]}],p={toc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"for"},"for"),Object(a.b)("h3",{id:"one-value"},"One Value"),Object(a.b)("p",null,"If only one value is given, then that's the ending number."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Starts at 0"),Object(a.b)("li",{parentName:"ol"},"Ends one before the number in parentheses (e.g. 4 - 1 = 3)")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"  for i in range(4):\n    print(i)\n\n  ## Output: ##\n  # 0\n  # 1\n  # 2\n  # 3\n")),Object(a.b)("h3",{id:"two-values"},"Two Values"),Object(a.b)("p",null,"If two values are given,"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Starts at the first value"),Object(a.b)("li",{parentName:"ol"},"Ends one before the second value")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"  for i in range(2, 5):\n    print(i)\n\n  ## Output: ##\n  # 2\n  # 3\n  # 4\n")),Object(a.b)("h3",{id:"three-values"},"Three Values"),Object(a.b)("p",null,"If three values are given,"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Starts at the first value"),Object(a.b)("li",{parentName:"ol"},"Ends one before the second value"),Object(a.b)("li",{parentName:"ol"},"Third value is what it increments by")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"  for i in range(4, 13, 3):\n    print(i)\n\n  ## Output: ##\n  # 4\n  # 7\n  # 10\n\n  # Note: It didn't print 13 because it goes \"up to\" 13, but doesn't include it\n")))}u.isMDXComponent=!0}}]);