(this["webpackJsonpeating-my-empire"]=this["webpackJsonpeating-my-empire"]||[]).push([[0],{17:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},50:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(31),a=c.n(s),i=(c(37),c(9)),r=(c(38),c(17),c(8)),o=c(1),j=function(){var e=Object(r.b)(),t=e.loginWithRedirect;return!e.isAuthenticated&&Object(o.jsx)("button",{className:"login",onClick:function(){t()},children:"Log In"})},l=function(){return Object(o.jsxs)("div",{className:"navbar",fixed:"top",children:[Object(o.jsx)("div",{className:"navbar-heading",children:Object(o.jsxs)("h1",{children:["Eating My Empire ",Object(o.jsx)("span",{children:"App"})]})}),Object(o.jsx)("div",{className:"navbar-links",children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)(i.b,{to:"/",children:[" ",Object(o.jsx)("li",{children:"Home"})]}),Object(o.jsxs)(i.b,{to:"/categories",children:[" ",Object(o.jsx)("li",{children:"Categories"})]}),Object(o.jsxs)(i.b,{to:"/random",children:[" ",Object(o.jsx)("li",{children:"Random"})]}),Object(o.jsxs)(i.b,{to:"/Contact",children:[" ",Object(o.jsx)("li",{children:"Contact"})]}),Object(o.jsx)(j,{})]})})]})},d=(c(50),function(){return Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsxs)("p",{children:["Eating My Empire ",Object(o.jsx)("span",{children:"App"})," 2022 \xa9"]}),Object(o.jsxs)("div",{className:"social",children:[Object(o.jsx)("a",{href:"facebook.com",children:"Facebook   "}),Object(o.jsx)("a",{href:"instagram.com",children:"Instagram   "}),Object(o.jsx)("a",{href:"twitter.com",children:"Twitter   "})]})]})}),b=c(12),h=c(14),u=c.n(h),O=Object(n.createContext)(),m=function(e){var t=e.children,c=Object(n.useState)([]),s=Object(b.a)(c,2),a=s[0],i=s[1],r=Object(n.useState)([]),j=Object(b.a)(r,2),l=j[0],d=j[1],h=Object(n.useState)([]),m=Object(b.a)(h,2),x=m[0],g=m[1],f=Object(n.useCallback)((function(e){u.a.get("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(e)).then((function(e){console.log(e.data.meals),i(e.data.meals)}))}),[]),p=Object(n.useCallback)((function(){u.a.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((function(e){console.log(e.data.categories),d(e.data.categories)}))}),[]),v=Object(n.useCallback)((function(){u.a.get("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){console.log(e.data.meals),g(e.data.meals)}))}),[]);return Object(o.jsx)(O.Provider,{value:{fetchHomePageMeals:f,meals:a,fetchCategories:p,categories:l,randomMeal:x,fetchRandomMeal:v},children:t})},x=(c(68),function(){var e=Object(n.useContext)(O),t=e.fetchCategories,c=e.categories;return Object(n.useEffect)((function(){t()}),[t]),Object(o.jsx)("div",{className:"categories",children:c.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:e.strCategoryThumb,alt:"#"}),Object(o.jsx)("h4",{children:e.strCategory})]},e.idCategory)}))})}),g=(c(69),function(){var e=Object(n.useContext)(O),t=e.randomMeal,c=e.fetchRandomMeal;return Object(n.useEffect)((function(){c()}),[c]),Object(o.jsx)("div",{className:"random",children:t.map((function(e){return Object(o.jsxs)("div",{className:"random-grid",children:[Object(o.jsxs)("div",{className:"random-grid-controls",children:[Object(o.jsx)("img",{src:e.strMealThumb,alt:"#"}),Object(o.jsx)("button",{onClick:c,children:" Generate Another Meal"})]}),Object(o.jsxs)("div",{className:"random-grid-instructions",children:[Object(o.jsx)("h4",{children:"Instructions"}),Object(o.jsx)("p",{children:e.strInstructions})]})]},e.idMeal)}))})}),f=(c(70),function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(O),i=a.fetchHomePageMeals,r=a.meals,j=Object(n.useCallback)((function(){i(c)}),[c,i]);return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsxs)("div",{className:"home-search",children:[Object(o.jsx)("input",{type:"text",placeholder:"Type a meal name...",value:c,onChange:function(e){return s(e.target.value)}}),Object(o.jsx)("button",{onClick:j,children:"Search Meal"})]}),Object(o.jsx)("div",{className:"home-grid",children:r?r.map((function(e){return Object(o.jsxs)("div",{className:"home-meal",children:[Object(o.jsx)("img",{src:e.strMealThumb,alt:"#"}),Object(o.jsx)("h4",{children:e.strMeal})]},e.idMeal)})):Object(o.jsx)("h2",{children:"No meals found! Try another word..."})})]})}),p=function(){var e=Object(r.b)(),t=e.logout;return e.isAuthenticated&&Object(o.jsx)("button",{className:"logout",onClick:function(){return t()},children:"Log Out"})},v=function(){var e=Object(r.b)(),t=e.user;return e.isAuthenticated&&Object(o.jsx)("div",{className:"form",children:Object(o.jsx)("span",{class:"text-right",children:Object(o.jsx)("span",{class:"float-end",children:Object(o.jsxs)("span",{class:"rounded float-end",alt:"...",children:[" ",Object(o.jsx)("img",{src:t.picture,class:"rounded-circle",width:"30",height:"30",alt:t.name}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"welcome",children:"Welcome "}),t.name," !"]})]})})})})},C=c(2);c(30);var N=function(){return Object(r.b)().isLoading?Object(o.jsx)("div",{children:"Loading..."}):Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)(i.a,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)(C.c,{children:[Object(o.jsx)(C.a,{exact:!0,path:"/",component:f}),Object(o.jsx)(C.a,{exact:!0,path:"/categories",component:x}),Object(o.jsx)(C.a,{exact:!0,path:"/random",component:g}),Object(o.jsx)(C.a,{exact:!0,path:"/login",component:j})]}),Object(o.jsx)(p,{})," ",Object(o.jsx)(v,{})]}),Object(o.jsx)(d,{})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};c(71);a.a.render(Object(o.jsx)(m,{children:Object(o.jsx)(r.a,{domain:"dev-s4a7o8oo.us.auth0.com",clientId:"fWw7QwWYNO4u5gOMYLr1MeMBEgyIA3Of",redirectUri:window.location.origin,children:Object(o.jsx)(N,{})})}),document.getElementById("root")),w()}},[[73,1,2]]]);
//# sourceMappingURL=main.47446a8b.chunk.js.map