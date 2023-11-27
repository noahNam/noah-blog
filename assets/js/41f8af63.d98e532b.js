"use strict";(self.webpackChunknoah_blog=self.webpackChunknoah_blog||[]).push([[2045],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>s});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,s=u["".concat(o,".").concat(m)]||u[m]||c[m]||l;return a?r.createElement(s,i(i({ref:t},p),{},{components:a})):r.createElement(s,i({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[u]="string"==typeof e?e:n,i[1]=g;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4830:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>g,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={slug:"ddd-aggregate",title:"[DDD] Aggregate",authors:"noahNam",tags:["ddd","aggregate"]},i="Aggregate",g={unversionedId:"ddd/2022-01-24-aggregate",id:"ddd/2022-01-24-aggregate",title:"[DDD] Aggregate",description:"\uc0c1\uc704\ubaa8\ub378 \uad00\uacc4\ub3c4",source:"@site/docs/ddd/2022-01-24-aggregate.md",sourceDirName:"ddd",slug:"/ddd/ddd-aggregate",permalink:"/noah-blog/docs/ddd/ddd-aggregate",draft:!1,tags:[{label:"ddd",permalink:"/noah-blog/docs/tags/ddd"},{label:"aggregate",permalink:"/noah-blog/docs/tags/aggregate"}],version:"current",frontMatter:{slug:"ddd-aggregate",title:"[DDD] Aggregate",authors:"noahNam",tags:["ddd","aggregate"]},sidebar:"tutorialSidebar",previous:{title:"[DDD] Request processing flow & infrastructure",permalink:"/noah-blog/docs/ddd/ddd-flow"},next:{title:"[DDD] Aggregate Root",permalink:"/noah-blog/docs/ddd/ddd-aggregate-root"}},o={},d=[{value:"\uc0c1\uc704\ubaa8\ub378 \uad00\uacc4\ub3c4",id:"\uc0c1\uc704\ubaa8\ub378-\uad00\uacc4\ub3c4",level:2},{value:"\uac1d\uccb4\uc218\uc900 \ubaa8\ub378",id:"\uac1d\uccb4\uc218\uc900-\ubaa8\ub378",level:2},{value:"Aggregate",id:"aggregate-1",level:2},{value:"Aggregate \uacbd\uacc4",id:"aggregate-\uacbd\uacc4",level:3},{value:"Product\uc640 Review\ub85c \ubcf4\ub294 Aggreate",id:"product\uc640-review\ub85c-\ubcf4\ub294-aggreate",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...l}=e;return(0,n.kt)(u,(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aggregate"},"Aggregate"),(0,n.kt)("h2",{id:"\uc0c1\uc704\ubaa8\ub378-\uad00\uacc4\ub3c4"},"\uc0c1\uc704\ubaa8\ub378 \uad00\uacc4\ub3c4"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\uc0c1\uc704 \ubaa8\ub378 \uad00\uacc4\ub3c4",src:a(4944).Z,width:"1006",height:"604"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc628\ub77c\uc778 \uc1fc\ud551\ubab0 \uc2dc\uc2a4\ud15c\uc744 \uac1c\ubc1c\ud560 \ub54c \uc704\uc758 ",(0,n.kt)("inlineCode",{parentName:"li"},"\ub3c4\uba54\uc778 \uad00\uacc4\ub3c4"),"\uc640 \uac19\uc774 \uc0c1\uc704 \uc218\uc900 \uac1c\ub150\uc744 \uc774\uc6a9\ud574\uc11c \uc804\uccb4 \ubaa8\ub378\uc744 \uc815\ub9ac\ud558\uba74 \ub3c4\uba54\uc778 \uad00\uacc4\ub97c \uc774\ud574\ud558\ub294\ub370 \ub3c4\uc6c0\uc774 \ub41c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \uad00\uacc4\ub3c4\ub294 \ud68c\uc6d0, \uc0c1\ud488, \uacb0\uc81c\uc640 \uad00\ub828\uc774 \uc788\ub2e4\ub294 \uac83\uc744 \uc27d\uac8c \uc54c \uc218 \uc788\ub2e4.")),(0,n.kt)("h2",{id:"\uac1d\uccb4\uc218\uc900-\ubaa8\ub378"},"\uac1d\uccb4\uc218\uc900 \ubaa8\ub378"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\uac1d\uccb4\uc218\uc900\ubaa8\ub378",src:a(9240).Z,width:"2272",height:"1336"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"\uc0c1\uc704 \ubaa8\ub378 \uad00\uacc4\ub3c4"),"\uc758 \uc0c1\uc704 \uc218\uc900 \ubaa8\ub378\uc744 \uac1c\ubcc4 \uac1d\uccb4 \ub2e8\uc704\ub85c \ub098\ud0c0\ub0b8 \uadf8\ub9bc\uc774\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"\uac1d\uccb4\uc218\uc900 \ubaa8\ub378"),"\uc744 ",(0,n.kt)("inlineCode",{parentName:"li"},"\uc0c1\uc704 \ubaa8\ub378 \uad00\uacc4\ub3c4")," \uc5d0 \ub300\ud55c \uc774\ud574 \uc5c6\uc774 \ud30c\uc545\ud558\ub824\uba74 \uc624\ub79c\uc2dc\uac04\uc774 \uac78\ub9b0\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778\uc5d0\uc11c \uac1d\uccb4 \ubaa8\ub378\uc774 \ubcf5\uc7a1\ud574\uc9c0\uba74 \uac1c\ubcc4 \uad6c\uc131\uc694\uc18c \uc704\uc8fc\ub85c \ubaa8\ub378\uc744 \uc774\ud574\ud558\uac8c \ub418\uace0 \uc804\ubc18\uc801\uc778 \uad6c\uc870\ub098 \ud070 \uc218\uc900\uc5d0\uc11c \ub3c4\uba54\uc778 \uac04\uc758 \uad00\uacc4\ub97c \ud30c\uc545\ud558\uae30 \ud798\ub4e4\uc5b4\uc9c4\ub2e4.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc774\ub807\uac8c \uc138\ubd80\uc801\uc778 \ubaa8\ub378\ub9cc \uc774\ud574\ud55c \uc0c1\ud0dc\ub85c\ub294 \ucf54\ub4dc\ub97c \uc218\uc815\ud558\ub294 \uac83\uc774 \uaebc\ub824\uc9c0\uae30 \ub54c\ubb38\uc5d0 \ucf54\ub4dc \ubcc0\uacbd\uc744 \ucd5c\ub300\ud55c \ud68c\ud53c\ud558\ub294 \ucabd\uc73c\ub85c \uc694\uad6c\uc0ac\ud56d\uc744 \ud611\uc758\ud558\uac8c \ub41c\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},"\uc774\ub807\uac8c ",(0,n.kt)("strong",null,(0,n.kt)("inlineCode",{parentName:"li"},"\ubcf5\uc7a1\ud55c \ub3c4\uba54\uc778\uc744 \uc774\ud574\ud558\uace0 \uad00\ub9ac\ud558\uae30 \uc26c\uc6b4 \ub2e8\uc704\ub85c \ub9cc\ub4e4\ub824\uba74 \uc0c1\uc704 \uc218\uc900\uc5d0\uc11c \ubaa8\ub378\uc744 \uc870\ub9dd\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 \ud544\uc694\ud55c\ub370, \uadf8 \ubc29\ubc95\uc774 \ubc14\ub85c \uc560\uadf8\ub9ac\uac70\ud2b8")),"\uc774\ub2e4.")),(0,n.kt)("h2",{id:"aggregate-1"},"Aggregate"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Aggregate",src:a(6094).Z,width:"2008",height:"1262"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\uc704 \uadf8\ub9bc\uc740 ",(0,n.kt)("inlineCode",{parentName:"p"},"\uac1d\uccb4 \uc218\uc900 \ubaa8\ub378"),"\uc744 \uc560\uadf8\ub9ac\uac70\ud2b8 \ub2e8\uc704\ub85c \ubb36\uc5b4\uc11c \ub2e4\uc2dc \ud45c\ud604\ud55c \uac83\uc774\ub2e4. \ub3d9\uc77c\ud55c \ubaa8\ub378\uc774\uc9c0\ub9cc \uc560\uadf8\ub9ac\uac70\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ub378 \uac04\uc758 \uad00\uacc4\ub97c \uac1c\ubcc4 \ubaa8\ub378 \uc218\uc900\uacfc \uc0c1\uc704 \uc218\uc900\uc5d0\uc11c \ubaa8\ub450 \uc774\ud574\ud560 \uc218 \uc788\ub2e4.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\uc560\uadf8\ub9ac\uac70\ud2b8\ub294 \ubaa8\ub378\uc758 \uc774\ud574\uc5d0 \ub300\ud55c \ub3c4\uc6c0\ubfd0\ub9cc \uc544\ub2c8\ub77c, \uc77c\uad00\uc131\uc744 \uad00\ub9ac\ud558\ub294 \uae30\uc900\ub3c4 \ub41c\ub2e4.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\uc560\uadf8\ub9ac\uac70\ud2b8 \ub2e8\uc704\ub85c \uc77c\uad00\uc131\uc744 \uad00\ub9ac\ud558\uae30 \ub54c\ubb38\uc5d0 \uc560\uadf8\ub9ac\uac70\ud2b8\ub294 \ubcf5\uc7a1\ud55c \ub3c4\uba54\uc778\uc744 \ub2e8\uc21c\ud55c \uad6c\uc870\ub85c \ub9cc\ub4e4\uc5b4\uc900\ub2e4.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",null,"\uc560\uadf8\ub9ac\uac70\ud2b8\ub294 \uad00\ub828\ub41c \ubaa8\ub378\uc744 \ud558\ub098\ub85c \ubaa8\uc558\uae30 \ub54c\ubb38\uc5d0 \ud55c \uc560\uadf8\ub9ac\uac70\ud2b8\uc5d0 \uc18d\ud55c \uac1d\uccb4\ub294 \ub3d9\uc77c\ud55c \ub77c\uc774\ud504 \uc0ac\uc774\ud074\uc744 \uac16\ub294\ub2e4."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc8fc\ubb38 \uc560\uadf8\ub9ac\uac70\ud2b8\ub97c \ub9cc\ub4e4\ub824\uba74 Order, OrderLine, Orderer\uc640 \uac19\uc740 \uac1d\uccb4\ub97c \ud568\uaed8 \uc0dd\uc131\ud574\uc57c \ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Orderer\ub294 \uc0dd\uc131\ud588\ub294\ub370 ShppingInf\ub294 \ub9cc\ub4e4\uc9c0 \uc54a\uac70\ub098 ShippingInfo\ub97c \uc0dd\uc131\ud558\uba74\uc11c Orderer\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0\ub294 \uc5c6\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",null,"`\uc774\ub807\uac8c \ub3c4\uba54\uc778 \uaddc\uce59\uc5d0 \ub530\ub77c \ucd5c\ucd08 \uc8fc\ubb38 \uc2dc\uc810\uc5d0 \uc77c\ubd80 \uac1d\uccb4\ub97c \ub9cc\ub4e4 \ud544\uc694\uac00 \uc5c6\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc9c0\ub9cc \uc560\uadf8\ub9ac\uac70\ud2b8\uc5d0 \uc18d\ud55c \uad6c\uc131\uc694\uc18c\ub294 \ub300\ubd80\ubd84 \ud568\uaed8 \uc0dd\uc131\ud558\uace0 \ud568\uaed8 \uc81c\uac70\ub41c\ub2e4.`"))))),(0,n.kt)("h3",{id:"aggregate-\uacbd\uacc4"},"Aggregate \uacbd\uacc4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc560\uadf8\ub9ac\uac70\ud2b8\ub294 \uacbd\uacc4\ub97c \uac16\ub294\ub2e4.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud55c \uc560\uadf8\ub9ac\uac70\ud2b8\uc5d0 \uc18d\ud55c \uac1d\uccb4\ub294 \ub2e4\ub978 \uc560\uadf8\ub9ac\uac70\ud2b8\uc5d0 \uc18d\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",null,"`\uc560\uadf8\ub9ac\uac70\ud2b8\ub294 \ub3c5\ub9bd\ub41c \uac1d\uccb4 \uad70\uc774\uba70 \uac01 \uc560\uadf8\ub9ac\uac70\ud2b8\ub294 \uc790\uae30 \uc790\uc2e0\uc744 \uad00\ub9ac\ud560 \ubfd0 \ub2e4\ub978 \uc560\uadf8\ub9ac\uac70\ud2b8\ub97c \uad00\ub9ac\ud558\uc9c0 \uc54a\ub294\ub2e4.`")),(0,n.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4 \uc8fc\ubb38 \uc560\uadf8\ub9ac\uac70\ud2b8\ub294 \ubc30\uc1a1\uc9c0\ub97c \ubcc0\uacbd\ub4f1\uc740 \uc790\uc2e0\uc774 \uad00\ub9ac\ud558\uc9c0\ub9cc, \uc8fc\ubb38 \uc560\uadf8\ub9ac\uac70\ud2b8\uc5d0\uc11c \ud68c\uc6d0\uc758 \ube44\ubc00\ubc88\ud638\ub97c \ubcc0\uacbd\ud558\uac70\ub098 \uc0c1\ud488\uc758 \uac00\uaca9\uc744 \ubcc0\uacbd\ud558\uc9c0\ub294 \uc55f\ub294\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},"\uacbd\uacc4\ub97c \uc124\uc815\ud560 \ub54c \uae30\ubcf8\uc774 \ub418\ub294 \uac83\uc740 \ub3c4\uba54\uc778 \uaddc\uce59\uacfc \uc694\uad6c\uc0ac\ud56d\uc774\ub2e4.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 \uaddc\uce59\uc5d0 \ub530\ub77c \ud568\uaed8 \uc0dd\uc131\ub418\ub294 \uad6c\uc131\uc694\uc18c\ub294 \ud55c \uc560\uadf8\ub9ac\uac70\ud2b8\uc5d0 \uc18d\ud560 \uac00\ub2a5\uc131\uc774 \ub192\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4 \uc8fc\ubb38\ud560 \uc0c1\ud488 \uac2f\uc218, \ubc30\uc1a1\uc9c0 \uc815\ubcf4, \uc8fc\ubb38\uc790 \uc815\ubcf4\ub294 \uc8fc\ubb38 \uc2dc\uc810\uc5d0 \ud568\uaed8 \uc0dd\uc131\ub418\ubbc0\ub85c \uc774\ub4e4\uc740 \ud55c \uc560\uadf8\ub9ac\uac70\ud2b8\uc5d0 \uc18d\ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ub2e4\ub978 \uc608\ub85c OrderLine\uc758 \uc8fc\ubb38\uc0c1\ud488 \uac2f\uc218\ub97c \ubcc0\uacbd\ud558\uba74 \ub3c4\uba54\uc778 \uaddc\uce59\uc5d0 \ub530\ub77c Order\uc758 \ucd1d \uc8fc\ubb38 \uae08\uc561\uc744 \uc0c8\ub85c \uacc4\uc0b0\ud574\uc57c \ud55c\ub2e4. \uc774\ub807\uac8c \ud568\uaed8 \ubcc0\uacbd\ub418\ub294 \ube48\ub3c4\uac00 \ub192\uc740 \uac1d\uccb4\ub294 \ud55c \uc560\uadf8\ub9ac\uac70\ud2b8\uc5d0 \uc18d\ud560 \uac00\ub2a5\uc131\uc774 \ub192\ub2e4.")))),(0,n.kt)("h3",{id:"product\uc640-review\ub85c-\ubcf4\ub294-aggreate"},"Product\uc640 Review\ub85c \ubcf4\ub294 Aggreate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc0c1\ud488 \uc0c1\uc138 \ud398\uc774\uc9c0\uc5d0 \ub4e4\uc5b4\uac00\uba74 \uc0c1\ud488 \uc0c1\uc138 \uc815\ubcf4\uc640 \ud568\uaed8 \ub9ac\ubdf0 \ub0b4\uc6a9\uc744 \ubcf4\uc5ec\uc918\uc57c \ud55c\ub2e4\ub294 \uc694\uad6c\uc0ac\ud56d\uc774 \uc788\uc744 \ub54c ",(0,n.kt)("inlineCode",{parentName:"li"},"Product"),"\uc5d4\ud2f0\ud2f0\uc640 ",(0,n.kt)("inlineCode",{parentName:"li"},"Review"),"\uc5d4\ud2f0\ud2f0\ub294 \uac19\uc740 \uc560\uadf8\ub9ac\uac70\ud2b8\uc5d0 \uc18d\ud55c\ub2e4\uace0 \uc0dd\uac01\ud560 \uc218 \uc788\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc ",(0,n.kt)("inlineCode",{parentName:"li"},"Product"),"\uc640 ",(0,n.kt)("inlineCode",{parentName:"li"},"Review"),"\ub294 \ud568\uaed8 \uc0dd\uc131\ub418\uc9c0 \uc54a\uace0, \ud568\uaed8 \ubcc0\uacbd\ub418\uc9c0\ub3c4 \uc54a\ub294\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ub610\ud55c, ",(0,n.kt)("inlineCode",{parentName:"li"},"Proeuct"),"\ub97c \ubcc0\uacbd\ud558\ub294 \uc8fc\uccb4\ub294 \uad00\ub9ac\uc790\uc774\uc9c0\ub9cc ",(0,n.kt)("inlineCode",{parentName:"li"},"Review"),"\ub97c \uc0dd\uc131\ud558\uace0 \ubcc0\uacbd\ud558\ub294 \uc8fc\uccb4\ub294 \uace0\uac1d\uc774\ub2e4.\n",(0,n.kt)("img",{alt:".",src:a(2696).Z,width:"629",height:"274"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Review"),"\uc758 \ubcc0\uacbd\uc774 ",(0,n.kt)("inlineCode",{parentName:"li"},"Product"),"\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0\uc54a\uace0 \ubc18\ub300\uc758 \uacbd\uc6b0\ub3c4 \ub9c8\ucc2c\uac00\uc9c0\uc774\ubbc0\ub85c \uc774 \ub458\uc740 \uc11c\ub85c \ub2e4\ub978 \uc560\uadf8\ub9ac\uac70\ud2b8\ub85c \ubcfc \uc218 \uc788\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ucc98\uc74c \ub3c4\uba54\uc778 \ubaa8\ub378\uc744 \ub9cc\ub4e4\uae30 \uc2dc\uc791\ud558\uba74 \ud070 \uc560\uadf8\ub9ac\uac70\ud2b8\ub85c \ubcf4\uc774\ub294 \uac83\ub4e4\uc774 \ub9ce\uc9c0\ub9cc, \ub3c4\uba54\uc778\uc5d0 \ub300\ud55c \uacbd\ud5d8\uc774 \uc0dd\uae30\uba74 \uc560\uadf8\ub9ac\uac70\ud2b8\uc758 \uc2e4\uc81c \ud06c\uae30\ub294 \uc904\uc5b4\ub4e0\ub2e4.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",null,"`\uacbd\ud5d8\uc774 \uc313\uc77c\uc218\ub85d \ub2e4\uc218\uc758 \uc560\uadf8\ub9ac\uac70\ud2b8\uac00 \ud55c \uac1c\uc758 \uc5d4\ud2f0\ud2f0 \uac1d\uccb4\ub9cc \uac16\ub294 \uacbd\uc6b0\uac00 \ub9ce\uace0, \ub450 \uac1c \uc774\uc0c1\uc758 \uc5d4\ud2f0\ud2f0\ub85c \uad6c\uc131\ub418\ub294 \uc560\uadf8\ub9ac\uac70\ud2b8\ub294 \ub4dc\ubb3c\uc5b4\uc9c4\ub2e4\uace0 \ud55c\ub2e4.`"))))))}c.isMDXComponent=!0},2696:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Aggreate\uacbd\uacc4-7c7111a6abcb5079ad71d8cd6474b979.png"},6094:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Aggregate-16afcfef20182ef4c03a6b492422dea8.png"},9240:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/\uac1c\ubcc4\uac1d\uccb4\uc218\uc900-a2a41fe066946799bbe03e7483982bcc.png"},4944:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/\uc8fc\ubb38\uad00\uacc4-e0fe16eba4fea93b5150258eeb3ee9b4.png"}}]);