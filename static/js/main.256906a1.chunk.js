(this["webpackJsonponline-shop"]=this["webpackJsonponline-shop"]||[]).push([[0],{29:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(24),s=c.n(r),a=(c(29),c(8)),i=c(3),j=c(0),l=function(){return Object(j.jsx)("nav",{className:"deep-purple",children:Object(j.jsx)("div",{className:"nav-wrapper",children:Object(j.jsx)(a.b,{to:"/",className:"brand-logo",children:Object(j.jsx)("span",{className:"black-text",children:"Food Project"})})})})},o=function(){return Object(j.jsx)("footer",{className:"page-footer deep-purple",children:Object(j.jsx)("div",{className:"footer-copyright",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("b",{className:"black-text",children:[" \xa9 ",(new Date).getFullYear()," Created by Nory Baichorov "]})})})})},u=c(12),b=c(13),d=c.n(b),h=c(18),O="https://www.themealdb.com/api/json/v1/".concat("1","/"),x=function(){var e=Object(h.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O+"lookup.php?i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(h.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O+"filter.php?c="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.cb,c=void 0===t?Function.prototype:t,r=Object(n.useState)(""),s=Object(u.a)(r,2),a=s[0],i=s[1],l=function(){c(a)};return Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"search",id:"search-field",placeholder:"\u041f\u043e\u0438\u0441\u043a",onKeyDown:function(e){"Enter"===e.key&&l()},onChange:function(e){return i(e.target.value)},value:a}),Object(j.jsx)("button",{onClick:l,className:"btn pulse blue-grey",children:"\u0418\u0441\u043a\u0430\u0442\u044c"})]})})},g=c.p+"static/media/ZKZx.4ace5f17.gif",v=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:g,alt:"",style:{width:"40px"}})})},y=c(17),N=function(e){var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(j.jsxs)("div",{className:"card blue lighten-3",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("img",{src:c,alt:t})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("span",{className:"card-title",children:t}),Object(j.jsxs)("p",{children:[n.slice(0,60),"..."]})]}),Object(j.jsx)("div",{className:"card-action",children:Object(j.jsx)(a.b,{to:"/category/".concat(t),className:"btn blue-grey",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"})})]})},w=function(e){var t=e.catalog,c=void 0===t?[]:t;return Object(j.jsx)("div",{className:"list",children:c.map((function(e){return Object(j.jsx)(N,Object(y.a)({},e),e.idCategory)}))})},C=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(u.a)(s,2),l=a[0],o=a[1],b=Object(i.g)(),d=b.pathname,h=b.search,O=Object(i.f)().push;return Object(n.useEffect)((function(){p().then((function(e){r(e.categories),o(h?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(h.split("=")[1].toLowerCase())})):e.categories)}))}),[h]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{cb:function(e){o(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O({pathname:d,search:"?search=".concat(e)})}}),c.length?Object(j.jsx)(w,{catalog:l}):Object(j.jsx)(v,{})]})},k=function(e){var t=e.strMeal,c=e.idMeal,n=e.strMealThumb;return Object(j.jsxs)("div",{className:"card blue lighten-3",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("img",{src:n,alt:t})}),Object(j.jsx)("div",{className:"card-content",children:Object(j.jsx)("span",{className:"card-title",children:t})}),Object(j.jsx)("div",{className:"card-action",children:Object(j.jsx)(a.b,{to:"/meal/".concat(c),className:"btn blue-grey",children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u0446\u0435\u043f\u0442"})})]})},F=function(e){var t=e.meals;return Object(j.jsx)("div",{className:"list",children:t.map((function(e){return Object(j.jsx)(k,Object(y.a)({},e),e.idMeal)}))})},M=function(){var e=Object(i.h)().name,t=Object(n.useState)([]),c=Object(u.a)(t,2),r=c[0],s=c[1],a=Object(i.f)().goBack;return Object(n.useEffect)((function(){m(e).then((function(e){return s(e.meals)}))}),[e]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"btn pulse blue-grey",onClick:a,children:"\u041d\u0430\u0437\u0430\u0434"}),r.length?Object(j.jsx)(F,{meals:r}):Object(j.jsx)(v,{})]})},L=function(){return Object(j.jsx)("h1",{children:"Page not found"})},S=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(i.h)().id,a=Object(i.f)().goBack;return Object(n.useEffect)((function(){x(s).then((function(e){return r(e.meals[0])}))}),[s]),Object(j.jsxs)(j.Fragment,{children:[c.idMeal?Object(j.jsxs)("div",{className:"recipe",children:[Object(j.jsx)("img",{src:c.strMealThumb,alt:c.strMeal}),Object(j.jsx)("h1",{children:c.strMeal}),Object(j.jsxs)("h6",{children:["Category: ",c.strCategory]}),c.strArea?Object(j.jsxs)("h6",{children:["Area: ",c.strArea]}):null,Object(j.jsx)("p",{children:c.strInstructions}),Object(j.jsxs)("table",{className:"centered",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Ingredient"}),Object(j.jsx)("th",{children:"Measure"})]})}),Object(j.jsx)("tbody",{children:Object.keys(c).map((function(e){return e.includes("Ingredient")&&c[e]?Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:c[e]}),Object(j.jsx)("td",{children:c["strMeasure".concat(e.slice(13))]})]},e):null}))})]}),c.strYoutube?Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h5",{style:{margin:"2rem 0 1.5rem"},children:"\u0412\u0438\u0434\u0435\u043e \u0440\u0435\u0446\u0435\u043f\u0442"}),Object(j.jsx)("iframe",{title:s,src:"https://www.youtube.com/embed/".concat(c.strYoutube.slice(-11)),allowfullscreen:!0})]}):null]}):Object(j.jsx)(v,{}),Object(j.jsx)("button",{className:"btn pulse blue-grey",onClick:a,children:"\u041d\u0430\u0437\u0430\u0434"})]})},B=(c(37),function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)(l,{}),Object(j.jsx)("main",{className:"container content",children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",children:Object(j.jsx)(C,{})}),Object(j.jsx)(i.a,{path:"/category/:name",component:M}),Object(j.jsx)(i.a,{path:"/meal/:id",component:S}),Object(j.jsx)(i.a,{component:L})]})}),Object(j.jsx)(o,{})]})})}),E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))},I=c(52),T=c(53);s.a.render(Object(j.jsxs)(I.a,{children:[Object(j.jsx)(T.a,{}),Object(j.jsx)(B,{})]}),document.getElementById("root")),E()}},[[38,1,2]]]);
//# sourceMappingURL=main.256906a1.chunk.js.map