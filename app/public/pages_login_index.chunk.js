(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(122),s=a.n(r),c=a(146),o=a.n(c),i=a(23),l=a(150),m=a(134),u=a(163),d=a.n(u),b=a(373),p=a(161);function g(){var e=Object(n.useState)({}),t=e[0],a=e[1];return Object(n.createElement)(s.a,{className:"rax-demo-home"},Object(n.createElement)(p.a,{uri:"//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png"}),Object(n.createElement)(o.a,{className:"rax-demo-title"},"Login"),Object(n.createElement)(s.a,{className:"demo-content",style:{padding:0}},Object(n.createElement)(l.d,{onSubmit:function e(t,n){null===n&&(a(t),fetch(m.a+"login",{method:"POST",body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(e){console.log(e),0===e.err?(l.h.success(e.message),d.a.save("Authorization",""+e.token),d.a.save("username",t.username),d.a.save("sex",t.sex),i.history.push("/mainAction")):l.h.error(e.message)})))}},Object(n.createElement)(l.d.Item,{label:"UserName",required:!0,requiredMessage:"Must Input User Name"},Object(n.createElement)(l.f,{outline:!1,name:"username",placeholder:"Please Input User Name"})),Object(n.createElement)(l.d.Item,{label:"Password",required:!0,requiredMessage:"Must Input Password",minLength:6,maxLength:16,minmaxMessage:"Password must between 6 and 16"},Object(n.createElement)(l.f,{name:"password",type:"password",password:!0,clear:!0,placeholder:"Please Input Password"})),Object(n.createElement)(l.d.Item,{label:"sex",required:!0},Object(n.createElement)(l.i.Group,{direction:"hoz",dataSource:["\u7537","\u5973"],name:"sex"})),Object(n.createElement)(s.a,{style:{marginTop:"10rpx"}},Object(n.createElement)(l.d.Reset,{block:!0},"Reset"),Object(n.createElement)(l.d.Submit,{block:!0,type:"primary"},"Login"))),Object(n.createElement)(s.a,{style:{marginTop:"20rpx"}},Object(n.createElement)(o.a,{onClick:function e(){return i.history.push("/register")},style:{color:"blue"}},"No account, click me to register"))))}var j=g,h=t.default=j},134:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n="http://82.156.80.131:7001/"},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(180),c=a.n(s),o=a(162),i=a.n(o);t.a=function(e){var t=e.uri;return Object(n.createElement)(c.a,{className:"rax-demo-logo",source:{uri:t}})}},162:function(e,t,a){},373:function(e,t,a){}}]);