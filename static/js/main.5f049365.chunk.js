(this["webpackJsonpfriends-list"]=this["webpackJsonpfriends-list"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(8),c=n.n(i),o=(n(13),n(7)),u=n(6),s=n(3),l=(n(14),n(15),n(0));var d=function(t){var e=t.friend,n=t.handleFavourite,a=t.handleDelete;return Object(l.jsxs)("div",{className:"row-component",children:[Object(l.jsxs)("div",{className:"name",children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("h6",{children:"is your friend"})]}),Object(l.jsx)("img",{src:e.isFavourite?"./star-fill.png":"./star.png",alt:"Favourite Icon",onClick:function(t){n(t,e.id)}}),Object(l.jsx)("img",{src:"./delete.png",alt:"Bin Icon",onClick:function(t){a(t,e.id)}})]})};n(17);var f=function(t){var e=t.page,n=t.handlePagination;return Object(l.jsx)(l.Fragment,{children:e.totalPages>1&&Array.from(Array(e.totalPages)).map((function(t,e){return Object(l.jsx)("button",{id:e+1,onClick:n,className:"pagination-button",children:e+1},e)}))})};var j=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],r=e[1],i=Object(a.useState)([]),c=Object(s.a)(i,2),j=c[0],g=c[1],b=Object(a.useState)(""),h=Object(s.a)(b,2),v=h[0],O=h[1],m=Object(a.useState)({currPage:1,totalPages:1}),p=Object(s.a)(m,2),P=p[0],x=p[1],F=function(t,e){var a=Object(u.a)(n);a=function(t){return t.sort((function(t,e){return e.isFavourite-t.isFavourite}))}(a=a.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{isFavourite:!t.isFavourite}):t}))),x((function(t){return{currPage:1,totalPages:t.totalPages}})),r(a)},y=function(t,e){var a=n.filter((function(t){return t.id!==e}));r(a),x((function(t){return{currPage:t.currPage,totalPages:k(a)}}))},k=function(t){return Math.ceil(t.length/4)},w=function(t){return t.reduce((function(t,e,n){var a=Math.floor(n/4);return t[a]||(t[a]=[]),t[a].push(e),t}),[])[P.currPage-1]}(""===v?n:j);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("input",{className:"input-text",type:"text",onChange:function(t){var e=t.target.value;if(e.match(/^[A-Za-z ]+$/)||""===e){O(e);var a=n.filter((function(t){var n=!1;return t.name.split(" ").forEach((function(t){t.toLowerCase().includes(e.toLowerCase())&&(n=!0)})),n}));g(a)}},onKeyUp:function(t){if("Enter"===t.key&&""!==t.target.value){var e=t.target.value,a={id:Math.random(),name:e,isFavourite:!1},i=[].concat(Object(u.a)(n),[a]);x({currPage:1,totalPages:k(i)}),r(i),O("")}},value:v,placeholder:"Enter your friend's name"}),w?w.map((function(t){return Object(l.jsx)(d,{friend:t,handleFavourite:F,handleDelete:y},t.id)})):v&&Object(l.jsx)("label",{children:"Press Enter \u21b5 to add new friend"})]}),Object(l.jsx)(f,{page:P,handlePagination:function(t){x((function(e){return{currPage:t.target.id,totalPages:e.totalPages}}))}})]})};c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.5f049365.chunk.js.map