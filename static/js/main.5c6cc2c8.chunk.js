(this["webpackJsonpbing-web"]=this["webpackJsonpbing-web"]||[]).push([[0],{112:function(e,t,a){e.exports=a(204)},117:function(e,t,a){},135:function(e,t,a){},201:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),o=a.n(r),l=(a(117),a(70)),i=a(66),s=a.n(i),u=a(90),m=a(48),p=a(41),h=a(208),f=a(209),g=a(205),d=a(91),b=a.n(d),v=a(5);a(135);var E=Object(v.f)((function(e){console.log(e);var t=Object(n.useState)({data:[]}),a=Object(m.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)((function(){return{page:1,pageSize:12}})),d=Object(m.a)(i,2),v=d[0],E=d[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://localhost:3212",{params:v});case 2:t=e.sent,console.log(t),o(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[v]);var w=r.data.map((function(e,t){return c.a.createElement(h.a,{span:8,key:e.hsh},c.a.createElement(p.b,{to:"/detail/".concat(e.hsh)},c.a.createElement("div",{className:"content"},c.a.createElement("img",{className:"aa",style:{width:"100%",height:"100%"},src:e.url,alt:e.copyright}),c.a.createElement("div",{className:"desc"},c.a.createElement("h3",null,e.copyright),c.a.createElement("p",null,e.enddate)))))}));return c.a.createElement("div",{className:"Index"},c.a.createElement(f.a,null,w),c.a.createElement(g.a,{className:"pageStyle",onChange:function(e){E(Object(l.a)(Object(l.a)({},v),{},{page:e}))},current:v.page,pageSize:v.pageSize,total:r.total}))}));a(201),a(202);var w=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(206);a(203);var j=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){var t="http://bing.shanch.cn/".concat(e.match.params.id);o(t)}),[e,r]),c.a.createElement("div",{style:{height:"100vh"}},c.a.createElement(y.a,{onClick:function(){e.history.goBack()},style:{position:"absolute",top:"10px",left:"10px"}},"\u8fd4\u56de"),c.a.createElement("div",{className:"backImgStyle",style:{backgroundImage:"url(".concat(r,")")}}))};o.a.render(c.a.createElement(p.a,null,c.a.createElement(v.c,null,c.a.createElement(v.a,{path:"/",exact:!0,component:w}),c.a.createElement(v.a,{path:"/detail/:id",component:j}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[112,1,2]]]);
//# sourceMappingURL=main.5c6cc2c8.chunk.js.map