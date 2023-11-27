"use strict";(self.webpackChunknoah_blog=self.webpackChunknoah_blog||[]).push([[5406],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=l,f=p["".concat(s,".").concat(d)]||p[d]||g[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(7462),l=(t(7294),t(3905));const a={slug:"design-singleton-usage",title:"[Design] Singleton usage",authors:"noahNam",tags:["design","singleton"]},i="\uc2f1\uae00\ud1a4 \uc0ac\uc6a9 \uc0ac\ub840\ub85c \uc0b4\ud3b4\ubcf8 \uc7a5\uc810\uacfc \ub2e8\uc810",o={unversionedId:"design/2021-09-29-singleton-usage",id:"design/2021-09-29-singleton-usage",title:"[Design] Singleton usage",description:"\uc2f1\uae00\ud1a4 \ud328\ud134 \uc0ac\uc6a9 \uc0ac\ub8401",source:"@site/docs/design/2021-09-29-singleton-usage.md",sourceDirName:"design",slug:"/design/design-singleton-usage",permalink:"/noah-blog/docs/design/design-singleton-usage",draft:!1,tags:[{label:"design",permalink:"/noah-blog/docs/tags/design"},{label:"singleton",permalink:"/noah-blog/docs/tags/singleton"}],version:"current",frontMatter:{slug:"design-singleton-usage",title:"[Design] Singleton usage",authors:"noahNam",tags:["design","singleton"]},sidebar:"tutorialSidebar",previous:{title:"[Design] Singleton metaclass",permalink:"/noah-blog/docs/design/design-singleton-metaclass"},next:{title:"[Design] Factory Pattern",permalink:"/noah-blog/docs/design/design-factory"}},s={},c=[{value:"\uc2f1\uae00\ud1a4 \ud328\ud134 \uc0ac\uc6a9 \uc0ac\ub8401",id:"\uc2f1\uae00\ud1a4-\ud328\ud134-\uc0ac\uc6a9-\uc0ac\ub8401",level:2},{value:"\uadf8\ub807\ub2e4\uba74 \ud558\ub098\uc758 \uc571 \uc11c\ube44\uc2a4\uac00 \uc544\ub2cc \uc5ec\ub7ec \uc571 \uc11c\ube44\uc2a4\uac00 \uac19\uc740 DB\uc5d0 \uc811\uc18d\ud558\ub294 \uc0c1\ud669\uc5d0\uc11c\ub294?",id:"\uadf8\ub807\ub2e4\uba74-\ud558\ub098\uc758-\uc571-\uc11c\ube44\uc2a4\uac00-\uc544\ub2cc-\uc5ec\ub7ec-\uc571-\uc11c\ube44\uc2a4\uac00-\uac19\uc740-db\uc5d0-\uc811\uc18d\ud558\ub294-\uc0c1\ud669\uc5d0\uc11c\ub294",level:3},{value:"Connection pooling \ud2b9\uc9d5",id:"connection-pooling-\ud2b9\uc9d5",level:3},{value:"\uc2f1\uae00\ud1a4 \ud328\ud134 \uc0ac\uc6a9 \uc0ac\ub8402",id:"\uc2f1\uae00\ud1a4-\ud328\ud134-\uc0ac\uc6a9-\uc0ac\ub8402",level:2},{value:"\uc2f1\uae00\ud1a4 \ud328\ud134\uc758 \uc7a5\uc810",id:"\uc2f1\uae00\ud1a4-\ud328\ud134\uc758-\uc7a5\uc810",level:2},{value:"\uc2f1\uae00\ud1a4 \ud328\ud134\uc758 \ub2e8\uc810",id:"\uc2f1\uae00\ud1a4-\ud328\ud134\uc758-\ub2e8\uc810",level:2}],u={toc:c},p="wrapper";function g(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\uc2f1\uae00\ud1a4-\uc0ac\uc6a9-\uc0ac\ub840\ub85c-\uc0b4\ud3b4\ubcf8-\uc7a5\uc810\uacfc-\ub2e8\uc810"},"\uc2f1\uae00\ud1a4 \uc0ac\uc6a9 \uc0ac\ub840\ub85c \uc0b4\ud3b4\ubcf8 \uc7a5\uc810\uacfc \ub2e8\uc810"),(0,l.kt)("h2",{id:"\uc2f1\uae00\ud1a4-\ud328\ud134-\uc0ac\uc6a9-\uc0ac\ub8401"},"\uc2f1\uae00\ud1a4 \ud328\ud134 \uc0ac\uc6a9 \uc0ac\ub8401"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc6b0\ub4dc \uc11c\ube44\uc2a4\uc5d0\uc11c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc811\uadfc\ud558\ub294 \ud558\ub098\uc758 \uc571 \uc11c\ube44\uc2a4\uac00 \uc788\ub2e4\uace0 \uac00\uc815\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uc801\uc73c\ub85c \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub294 \uc77c\uad00\uc131\uc774 \uc720\uc9c0\ub418\uc5b4\uc57c \ud558\uba70, \uc791\uc5c5 \uac04 \ucda9\ub3cc\uc774 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc544\uc57c \ud55c\ub2e4. \ub610\ud55c, \ub2e4\uc218\uc758 DB\uc5f0\uc0b0\uc744 \ucc98\ub9ac\ud558\ub824\uba74 \uba54\ubaa8\ub9ac\uc640 CPU\ub97c \ud6a8\uc728\uc801\uc744 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import sqlite3\n\nclass MetaSingleton(type):\n    _instances = {}\n\n    def __call__(cls, *args, **kwargs):\n        print("__call__")\n        if cls not in cls._instances:\n            cls._instances[cls] = super().__call__(*args, **kwargs)\n        return cls._instances[cls]\n\nclass Database(metaclass=MetaSingleton):\n    connection = None\n\n    def connect(self):\n        if not self.connection:\n            self.connection = sqlite3.connect("db.sqlite3")\n            self.cursor = self.connection.cursor()\n        return self.cursor\n\ndb1 = Database().connect()\ndb2 = Database().connect()\n\nprint(f"Database Objects DB1 : {db1}")\nprint(f"Database Objects DB1 : {db2}")\n\n---------------\nresult\n---------------\n__call__\n__call__\nDatabase Objects DB1 : <sqlite3.Cursor object at 0x7ff0278152d0>\nDatabase Objects DB1 : <sqlite3.Cursor object at 0x7ff0278152d0>\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MetaSingleton")," \uba54\ud0c0\ud074\ub798\uc2a4\uac00 ",(0,l.kt)("inlineCode",{parentName:"li"},"__call__")," \ud2b9\uc218\uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud574 \uc2f1\uae00\ud1a4 \ubc29\uc2dd\uc73c\ub85c \uac1d\uccb4\ub97c \uc0dd\uc131\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Database")," \ud074\ub798\uc2a4\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"MetaSingleton")," \ub97c \uba54\ud0c0\ud074\ub798\uc2a4\ub85c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \uc571\uc5d0\uc11c DB\uc5f0\uc0b0\uc744 \uc694\uccad\ud560 \ub54c\ub9c8\ub2e4 \ud074\ub798\uc2a4\uac00 \ucd08\uae30\ud654 \ub418\uc9c0\ub9cc \ub0b4\ubd80\uc801\uc73c\ub85c \ud558\ub098\uc758 \uac1d\uccb4\ub9cc \uc0dd\uc131\ub41c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub530\ub77c\uc11c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \ub300\ud55c \uc791\uc5c5\uc740 \ubaa8\ub450 \ub3d9\uae30\ud654\ub418\uace0, \ube48\ubc88\ud55c DB\uc5f0\uc0b0 \ud638\ucd9c\uc5d0\ub3c4 \uba54\ubaa8\ub9ac\uc640 CPU\uc0ac\uc6a9\ub7c9\uc774 \ub192\uc9c0 \uc54a\ub2e4.")),(0,l.kt)("h3",{id:"\uadf8\ub807\ub2e4\uba74-\ud558\ub098\uc758-\uc571-\uc11c\ube44\uc2a4\uac00-\uc544\ub2cc-\uc5ec\ub7ec-\uc571-\uc11c\ube44\uc2a4\uac00-\uac19\uc740-db\uc5d0-\uc811\uc18d\ud558\ub294-\uc0c1\ud669\uc5d0\uc11c\ub294"},"\uadf8\ub807\ub2e4\uba74 \ud558\ub098\uc758 \uc571 \uc11c\ube44\uc2a4\uac00 \uc544\ub2cc \uc5ec\ub7ec \uc571 \uc11c\ube44\uc2a4\uac00 \uac19\uc740 DB\uc5d0 \uc811\uc18d\ud558\ub294 \uc0c1\ud669\uc5d0\uc11c\ub294?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774 \uacbd\uc6b0 \uac01 \uc571 \uc11c\ube44\uc2a4\uac00 DB\uc5d0 \uc811\uadfc\ud558\ub294 \uc2f1\uae00\ud1a4\uc744 \uc0dd\uc131\ud558\uae30 \ub54c\ubb38\uc5d0 \uc2f1\uae00\ud1a4 \ud328\ud134\uc5d0 \uc801\ud569\ud558\uc9c0 \uc54a\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"DB \uc791\uc5c5\uc774 \ub3d9\uae30\ud654 \ub418\uc9c0 \uc54a\uace0 \ub9ac\uc18c\uc2a4 \uc0ac\uc6a9\ub7c9\uc774 \uc99d\uac00\ud55c\ub2e4. \uc2f1\uae00\ud1a4 \ud328\ud134\ubcf4\ub2e4\ub294 Connection pooling \uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ub354 \ud6a8\uc728\uc801\uc774\ub2e4.")),(0,l.kt)("h3",{id:"connection-pooling-\ud2b9\uc9d5"},"Connection pooling \ud2b9\uc9d5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc6f9 \ucee8\ud14c\uc774\ub108\uac00 \uc2e4\ud589\ub418\uba74\uc11c Connection(connection) \uac1d\uccb4\ub97c \ubbf8\ub9ac Pool(pool)\uc5d0 \uc0dd\uc131\ud574 \ub454\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"DB\uc640 \uc5f0\uacb0\ub41c Connection(connection)\uc744 \ubbf8\ub9ac \uc0dd\uc131\ud574\uc11c Pool(pool) \uc18d\uc5d0 \uc800\uc7a5\ud574 \ub450\uace0 \uc788\ub2e4\uac00 \ud544\uc694\ud560 \ub54c\uc5d0 \uac00\uc838\ub2e4 \uc4f0\uace0 \ubc18\ud658\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubbf8\ub9ac \uc0dd\uc131\ud574\ub450\uae30 \ub54c\ubb38\uc5d0 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \ubd80\ud558\ub97c \uc904\uc774\uace0 \uc720\ub3d9\uc801\uc73c\ub85c \uc5f0\uacb0\uc744 \uad00\ub9ac \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Pool \uc18d\uc5d0 \ubbf8\ub9ac Connection\uc774 \uc0dd\uc131\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 Connection\uc744 \uc0dd\uc131\ud558\ub294 \ub370 \ub4dc\ub294 \uc5f0\uacb0 \uc2dc\uac04\uc774 \uc18c\ube44\ub418\uc9c0 \uc54a\ub294\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Connection\uc744 \uacc4\uc18d\ud574\uc11c \uc7ac\uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \uc0dd\uc131\ub418\ub294 Connection \uc218\uac00 \ub9ce\uc9c0 \uc54a\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Connection Pool\uc744 \uc0ac\uc6a9\ud558\uba74 Connection\uc744 \uc0dd\uc131\ud558\uace0 \ub2eb\ub294 \uc2dc\uac04\uc774 \uc18c\ubaa8\ub418\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uadf8\ub9cc\ud07c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc2e4\ud589 \uc18d\ub3c4\uac00 \ube68\ub77c\uc9c0\uba70, \ub610\ud55c \ud55c \ubc88\uc5d0 \uc0dd\uc131\ub420 \uc218 \uc788\ub294 Connection \uc218\ub97c \uc81c\uc5b4\ud558\uae30 \ub54c\ubb38\uc5d0 \ub3d9\uc2dc \uc811\uc18d\uc790 \uc218\uac00 \ubab0\ub824\ub3c4 \uc6f9 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc27d\uac8c \ub2e4\uc6b4\ub418\uc9c0 \uc54a\ub294\ub2e4.")),(0,l.kt)("h2",{id:"\uc2f1\uae00\ud1a4-\ud328\ud134-\uc0ac\uc6a9-\uc0ac\ub8402"},"\uc2f1\uae00\ud1a4 \ud328\ud134 \uc0ac\uc6a9 \uc0ac\ub8402"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"AWS\uc5d0\uc11c \uc11c\ubc84 \uc0c1\ud0dc\ub97c \uccb4\ud06c\ud558\ub294 Health Check \uc11c\ube44\uc2a4\ub3c4 \uc2f1\uae00\ud1a4\uc73c\ub85c \uad6c\ud604\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4 LB\uc758 \uc2f1\uae00\ud1a4 \ud074\ub798\uc2a4\uac00 \uc11c\ubc84\uc758 \ubaa9\ub85d\uc744 \ub9cc\ub4e4\uace0 \ubaa9\ub85d\uc5d0\uc11c \uc81c\uac70\ub41c \uc11c\ubc84\uc758 \uc0c1\ud0dc\ub294 \ud655\uc778\ud558\uc9c0 \uc54a\ub294 \uac04\ub2e8\ud55c \ucf54\ub4dc\ub97c \uad6c\ud604\ud574 \ubcf4\uc558\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'class HealthCheck:\n    _instances = None\n\n    def __new__(cls, *args, **kwargs):\n        if not hasattr(cls, "instance"):\n            cls.instance = super().__new__(cls)\n        return cls.instance\n\n    def __init__(self):\n        self._servers = []\n\n    def add_server(self):\n        self._servers.append("Server 1")\n        self._servers.append("Server 2")\n        self._servers.append("Server 3")\n        self._servers.append("Server 4")\n\n    def change_server(self):\n        self._servers.pop()\n        self._servers.append("Server 5")\n\nhc1 = HealthCheck()\nhc2 = HealthCheck()\n\nhc1.add_server()\nprint("Schedule health check for servers (1)..")\n\nfor i in range(4):\n    print(f"Checking {hc1._servers[i]}")\n\nhc2.change_server()\nprint("Schedule health check for servers (2)..")\n\nfor i in range(4):\n    print(f"Checking {hc2._servers[i]}")\n\n---------------\nresult\n---------------\nSchedule health check for servers (1)..\nChecking Server 1\nChecking Server 2\nChecking Server 3\nChecking Server 4\nSchedule health check for servers (2)..\nChecking Server 1\nChecking Server 2\nChecking Server 3\nChecking Server 5\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"change_server()")," \uc5d0 \uc758\ud574 \uc81c\uac70 \ub41c \uc11c\ubc84\ub294 \ub450 \ubc88\uc9f8 \uc11c\ube44\uc2a4\uac00 \uc2e4\ud589 \ub420 \ub54c\ub294 \ubc14\ub010 \ubaa9\ub85d\uc744 \ucc38\uc870\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc0c1\ud0dc\uac12\uc744 \uacf5\uc720\ud558\ub294 \ubaa8\ub178\uc2a4\ud14c\uc774\ud2b8 \uc2f1\uae00\ud1a4 \ud328\ud134\uc744 \uc0ac\uc6a9\ud574\ub3c4 \ub418\uc9c0\ub9cc, Health Check\uac00 \ube48\ubc88\ud560 \uacbd\uc6b0 \ub9ac\uc18c\uc2a4 \uc18c\ubaa8\uac00 \ud074 \uac83\uc73c\ub85c \uc608\uc0c1\ub418\uc5b4 \uc801\uc808\ud558\uc9c0 \uc54a\uc544 \ubcf4\uc778\ub2e4.")),(0,l.kt)("h2",{id:"\uc2f1\uae00\ud1a4-\ud328\ud134\uc758-\uc7a5\uc810"},"\uc2f1\uae00\ud1a4 \ud328\ud134\uc758 \uc7a5\uc810"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud560 \ub54c \uc2a4\ub808\ub4dc \ud480\uacfc \uce90\uc2dc, \ub300\ud654 \uc0c1\uc790, \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc124\uc815 \ub4f1 \ud55c \uac1c\uc758 \uac1d\uccb4\ub9cc \ud544\uc694\ud55c \uacbd\uc6b0\uac00 \ub9ce\uc740\ub370 \uc774\ub7ec\ud55c \uacbd\uc6b0\uc5d0 \uc5ec\ub7ec \uac1c\uc758 \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\ub294 \uac83\uc740 \ub9ac\uc18c\uc2a4 \ub0ad\ube44\uc774\uace0, \uc2f1\uae00\ud1a4 \ud328\ud134\uc774 \uc720\ub9ac\ud558\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc2f1\uae00\ud1a4\uc740 \uae00\ub85c\ubc8c \uc561\uc138\uc2a4 \uc9c0\uc810\uc744 \uc81c\uacf5\ud558\ub294, \ub2e8\uc810\uc774 \uac70\uc758 \uc5c6\ub294 \uac80\uc99d\ub41c \ud328\ud134\uc774\ub2e4.")),(0,l.kt)("h2",{id:"\uc2f1\uae00\ud1a4-\ud328\ud134\uc758-\ub2e8\uc810"},"\uc2f1\uae00\ud1a4 \ud328\ud134\uc758 \ub2e8\uc810"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc804\uc5ed \ubcc0\uc218\uc758 \uac12\uc774 \ubcc0\uacbd\ub418\uc5c8\uc744 \ub54c \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8\uac00 \ub9e4\uc6b0 \ud074 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud558\ub098\uc758 \uac1d\uccb4\ub9cc\uc744 \uc0dd\uc131\ud558\uae30 \ub54c\ubb38\uc5d0 \uac19\uc740 \uac1d\uccb4\ub97c \ucc38\uc870\ud558\ub294 \uc5ec\ub7ec\uac1c\uc758 \ucc38\uc870\uc790\uac00 \uc0dd\uae34\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"a = A()"),(0,l.kt)("li",{parentName:"ul"},"b = A()"),(0,l.kt)("li",{parentName:"ul"},"c = A()")))))}g.isMDXComponent=!0}}]);