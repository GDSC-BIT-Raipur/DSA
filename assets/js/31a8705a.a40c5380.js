"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[550],{3905:(r,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>f});var n=t(7294);function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function s(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var c=n.createContext({}),l=function(r){var e=n.useContext(c),t=e;return r&&(t="function"==typeof r?r(e):i(i({},e),r)),t},p=function(r){var e=l(r.components);return n.createElement(c.Provider,{value:e},r.children)},u="mdxType",y={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(r,e){var t=r.components,a=r.mdxType,o=r.originalType,c=r.parentName,p=s(r,["components","mdxType","originalType","parentName"]),u=l(t),d=a,f=u["".concat(c,".").concat(d)]||u[d]||y[d]||o;return t?n.createElement(f,i(i({ref:e},p),{},{components:t})):n.createElement(f,i({ref:e},p))}));function f(r,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=r,s[u]="string"==typeof r?r:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3867:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const o={},i="Array Rotation method",s={unversionedId:"python/linear_data_structures/array/basic_operations/array_rotation",id:"python/linear_data_structures/array/basic_operations/array_rotation",title:"Array Rotation method",description:"Using reversal algorithm here we reverse two arrays",source:"@site/docs/python/linear_data_structures/array/basic_operations/array_rotation.md",sourceDirName:"python/linear_data_structures/array/basic_operations",slug:"/python/linear_data_structures/array/basic_operations/array_rotation",permalink:"/DSA/docs/python/linear_data_structures/array/basic_operations/array_rotation",draft:!1,editUrl:"https://github.com/GDSC-BIT-Raipur/DSA/tree/main/docs/python/linear_data_structures/array/basic_operations/array_rotation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Operations",permalink:"/DSA/docs/category/basic-operations"},next:{title:"Array Searching",permalink:"/DSA/docs/python/linear_data_structures/array/basic_operations/searching"}},c={},l=[],p={toc:l},u="wrapper";function y(r){let{components:e,...t}=r;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"array-rotation-method"},"Array Rotation method"),(0,a.kt)("p",null,"Using reversal algorithm here we reverse two arrays"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"arr = [1,2,3,4,5,6,7]\n\ndef reverse(arr:list,start:int,end:int)->list:\n    while start < end:\n        arr[start],arr[end] = arr[end],arr[start]\n        start+=1\n        end-=1\n    return arr\n\n# d = 3 \ndef rightRotateByJuggling(arr:list,d:int)->list:\n    reverse(arr,0,d)\n    reverse(arr,d+1,len(arr)-1)\n    reverse(arr,0,len(arr)-1)\n    return arr   \n\n        \nprint(rightRotateByJuggling(arr,3))\n")))}y.isMDXComponent=!0}}]);