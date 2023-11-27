"use strict";(self.webpackChunknoah_blog=self.webpackChunknoah_blog||[]).push([[7310],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,f=s["".concat(c,".").concat(m)]||s[m]||g[m]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4285:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={slug:"fastapi-gunicorn",title:"[Fastapi] Gunicorn",authors:"noahNam",tags:["fastapi","gunicorn"]},o="Gunicorn",l={unversionedId:"fastapi/2021-04-30-gunicorn",id:"fastapi/2021-04-30-gunicorn",title:"[Fastapi] Gunicorn",description:"What is Gunicorn?",source:"@site/docs/fastapi/2021-04-30-gunicorn.md",sourceDirName:"fastapi",slug:"/fastapi/fastapi-gunicorn",permalink:"/noah-blog/docs/fastapi/fastapi-gunicorn",draft:!1,tags:[{label:"fastapi",permalink:"/noah-blog/docs/tags/fastapi"},{label:"gunicorn",permalink:"/noah-blog/docs/tags/gunicorn"}],version:"current",frontMatter:{slug:"fastapi-gunicorn",title:"[Fastapi] Gunicorn",authors:"noahNam",tags:["fastapi","gunicorn"]},sidebar:"tutorialSidebar",previous:{title:"[Design] Abstract Factory Pattern",permalink:"/noah-blog/docs/design/design-abstract-factory-pattern"},next:{title:"[Fastapi] Uvicorn",permalink:"/noah-blog/docs/fastapi/fastapi-uvicorn"}},c={},u=[{value:"What is Gunicorn?",id:"what-is-gunicorn",level:2},{value:"<strong>Gunicorn \ud2b9\uc9d5</strong>",id:"gunicorn-\ud2b9\uc9d5",level:2},{value:"<strong>Gunicorn \uae30\ub2a5 \uc694\uc57d</strong>",id:"gunicorn-\uae30\ub2a5-\uc694\uc57d",level:2},{value:"<strong>Uvicorn + Gunicorn</strong>",id:"uvicorn--gunicorn",level:2},{value:"\ucc38\uace0\uc790\ub8cc",id:"\ucc38\uace0\uc790\ub8cc",level:2}],p={toc:u},s="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gunicorn"},"Gunicorn"),(0,a.kt)("h2",{id:"what-is-gunicorn"},"What is Gunicorn?"),(0,a.kt)("p",null,"Gunicorn\uc740 \uc11c\ubc84\uc774\uc790 \ud504\ub85c\uc138\uc2a4 \uad00\ub9ac\uc790\uc774\ub2e4."),(0,a.kt)("p",null,"Python web application\uc744 production \ud658\uacbd\uc5d0 deployment \ud560 \ub54c \uc77c\ubc18\uc801\uc73c\ub85c \uc138\uac00\uc9c0\ub97c \uc11e\uc5b4\uc11c \uc0ac\uc6a9\ud55c\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Web server"),"\xa0(e.g. Nginx)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"WSGI (web) server"),"\xa0(e.g. Gunicorn)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Web application server"),"(web app or web framwork) (e.g. Django)")),(0,a.kt)("p",null,"Web server\ub294 \uc694\uccad\uc744 \uc218\ub77d\ud558\uace0 https \uc5f0\uacb0\uc744 \ucc98\ub9ac\ud55c\ub2e4. WSGI server\ub294 web server\uc758 \uc694\uccad\uc744 \ubc1b\uc544 web application server\uc5d0 \uc804\ub2ec\ud55c\ub2e4. Web application server\ub294 \ub2e8\uc77c \uc694\uccad\uc744 \ucc98\ub9ac \ud560 \uc218 \uc788\ub2e4\ub294 \uac83 \uc678\uc5d0\ub294 \uc544\ubb34\uac83\ub3c4 \uc2e0\uacbd \uc4f0\uc9c0 \uc54a\uc544\ub3c4 \ub41c\ub2e4."),(0,a.kt)("h2",{id:"gunicorn-\ud2b9\uc9d5"},(0,a.kt)("strong",{parentName:"h2"},"Gunicorn \ud2b9\uc9d5")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gunicorn\uc740 \ub2e4\uc591\ud55c web server\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uad6c\ucd95\ub418\uc5c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"Gunicorn\uc740 web server\uc640 web application \uc0ac\uc774\uc5d0\uc11c \uc77c\uc5b4\ub098\ub294 \ubaa8\ub4e0 \uc77c\uc744 \ucc98\ub9ac\ud55c\ub2e4. \ub530\ub77c\uc11c web application\uc744 \ucf54\ub529 \ud560 \ub54c  \uc544\ub798 \uc774\uc720 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \uc194\ub8e8\uc158\uc744 \ucc3e\uc744 \ud544\uc694\uac00 \uc5c6\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec web server\uc640 \ud1b5\uc2e0"),(0,a.kt)("li",{parentName:"ul"},"\ud55c \ubc88\uc5d0 \ub9ce\uc740 request\ub97c \ucc98\ub9ac\ud558\uace0 \ubd80\ud558\ub97c \ubd84\uc0b0"),(0,a.kt)("li",{parentName:"ul"},"\uc2e4\ud589\uc911\uc778 web application\uc758 multi process \uc720\uc9c0")))),(0,a.kt)("h2",{id:"gunicorn-\uae30\ub2a5-\uc694\uc57d"},(0,a.kt)("strong",{parentName:"h2"},"Gunicorn \uae30\ub2a5 \uc694\uc57d")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"worker\xa0processes/threads\xa0\ud480\uc744\xa0\uc0ac\uc6a9\ud558\uc5ec\xa0\ucf54\ub4dc\xa0\uc2e4\ud589"),(0,a.kt)("li",{parentName:"ul"},"Nginx\uac00\xa0\ubcf4\ub0b8\xa0request\ub97c\xa0WSGI\uc5d0\xa0\ub9de\uac8c\xa0\ubcc0\ud658(request\ub97c\xa0\uc6f9\xa0\ud504\ub808\uc784\uc6cc\ud06c\uac00\xa0\uc774\ud574\ud558\uace0\xa0\ucc98\ub9ac\ud560\xa0\uc218\xa0\uc788\ub294\xa0\ud615\uc2dd\uc73c\ub85c\xa0\ubcc0\ud658)"),(0,a.kt)("li",{parentName:"ul"},"request\uac00 \ub4e4\uc5b4\uc624\uba74 \uc2e4\uc81c\ub85c \ud30c\uc774\uc36c \ucf54\ub4dc \uc2e4\ud589\ud558\uae30"),(0,a.kt)("li",{parentName:"ul"},"\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c\xa0\ubcf4\ub0b8\xa0WSGI\xa0response\ub97c\xa0http\xa0response\ub85c\xa0\ubcc0\ud658")),(0,a.kt)("h2",{id:"uvicorn--gunicorn"},(0,a.kt)("strong",{parentName:"h2"},"Uvicorn + Gunicorn")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uvicorn\uc5d0\ub294 Gunicorn worker class\uac00 \ud3ec\ud568\ub418\uc5b4\uc788\uc5b4 Uvicorn\uc758 \ubaa8\ub4e0 \uc131\ub2a5 \uc774\uc810\uacfc \ud568\uaed8 ASGI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc989, Gunicorn\uc744 \uc0ac\uc6a9\ud558\uc5ec Uvicorn\uc744 \uad00\ub9ac\ud558\uace0 \uc774\ub97c \ud1b5\ud574 \ub3d9\uc2dc\uc5d0 \uc5ec\ub7ec process\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},'Uvicorn\uacfc Gunicorn\uc740 "',(0,a.kt)("strong",{parentName:"li"},'web server"')," \ubc94\uc8fc\uc5d0 \uc18d\ud55c\ub2e4.")),(0,a.kt)("h2",{id:"\ucc38\uace0\uc790\ub8cc"},"\ucc38\uace0\uc790\ub8cc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FastAPI\uc5d0\uc11c \uacf5\uc2dd\uc801\uc73c\ub85c \uc81c\uacf5\ud558\ub294 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker"},"\ub9c1\ud06c"))))}g.isMDXComponent=!0}}]);