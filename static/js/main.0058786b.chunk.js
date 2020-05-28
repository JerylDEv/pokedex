(this.webpackJsonppokedex_project_by_jeryldev=this.webpackJsonppokedex_project_by_jeryldev||[]).push([[0],{15:function(e,t,a){},24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},30:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),i=a.n(o),c=(a(29),a(7)),l=(a(30),a(10)),s=a.n(l),u=a(17),m=function(e){var t=Object(n.useState)({data:null,isLoading:!0}),a=Object(c.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){var t=!0,a=new AbortController;return o((function(e){return{data:e.data,isLoading:!0}})),t&&Object(u.a)(s.a.mark((function t(){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e,{signal:a.signal});case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",o({data:r,isLoading:!1}));case 10:t.prev=10,t.t0=t.catch(0),o({data:"Pokemon not found",isLoading:!1});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))(),function(){t=!1,a.abort()}}),[e]),r},d=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log("Error saving data locally::",n),t}})),r=Object(c.a)(a,2),o=r[0],i=r[1];return[o,function(t){try{var a=t instanceof Function?t(o):t;i(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log("setValue error has occurred::",n)}}]},f=a(6),p=a(19),h=(a(15),a(12)),g=function(e){var t,a=e.source,o=m(a.toLowerCase()),i=o.data,l=o.isLoading,s=Object(n.useState)(!1),u=Object(c.a)(s,2),d=u[0],g=u[1],v=Object(h.b)({opacity:1,from:{opacity:0}});if(!1===l)try{t=r.a.createElement(f.a,{className:"flex-child"},i.sprites.front_default?r.a.createElement(f.a.Img,{variant:"top",src:i.sprites.front_default,alt:i.name.charAt(0).toUpperCase()+i.name.slice(1),style:{width:"96px",height:"96px",marginTop:"1.25rem",transition:"all 300ms ease-in-out 300ms"}}):r.a.createElement(f.a.Img,{variant:"top",src:"/pokedex/logo512.png",alt:i.name.charAt(0).toUpperCase()+i.name.slice(1),style:{width:"96px",height:"96px",marginTop:"1.25rem",transition:"all 300ms ease-in-out 300ms"}}),r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,i.name.charAt(0).toUpperCase()+i.name.slice(1))))}catch(b){t=r.a.createElement(f.a,{className:"flex-child"},r.a.createElement(f.a.Img,{variant:"top",src:"/pokedex/logo512.png",alt:"pokeball image",style:{width:"96px",height:"96px"}}),r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,i)))}else t=r.a.createElement(f.a,{className:"flex-child"},r.a.createElement("div",{style:{width:"96px",height:"96px",transition:"all 300ms ease-in-out 300ms"},className:"container-box"},r.a.createElement(p.a,{animation:"border",variant:"danger"})),r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,"Searching for Pok\xe9mon")));return r.a.createElement("div",{onMouseOut:function(){return g(!1)},onMouseOver:function(){return g(!0)},style:{transition:"all 300ms ease-in-out",transform:"".concat(d?"scale(1.1)":"scale(1)")}},r.a.createElement(h.a.div,{style:v},t))},v=function(e){var t=e.pokemons;return r.a.createElement("div",{className:"container-box",style:{marginLeft:"10%",marginRight:"10%"}},t.map((function(e,t){return r.a.createElement(g,{key:t,id:t,name:e.name,source:e.url})})))},b=a(20),k=a(21),E=function(){return r.a.createElement("div",null," ",r.a.createElement(b.a,{fluid:!0,className:"text-white",id:"jumbotron-section"},r.a.createElement(k.a,null,r.a.createElement("h1",{className:"display-1",id:"jumbotron-title"},"Pok\xe9dex Project"),r.a.createElement("p",{className:"lead"},"Hello friend! I'm"," ",r.a.createElement("a",{href:"https://twitter.com/JerylDEv",title:"Jeryl",className:"link-reference",target:"_blank",rel:"noopener noreferrer"},"Jeryl"),"! I created this web site to practice"," ",r.a.createElement("a",{href:"https://reactjs.org/docs/hooks-intro.html",title:"React Hooks",className:"link-reference",target:"_blank",rel:"noopener noreferrer"},"React Hooks"),"."),r.a.createElement("p",{className:"lead"},"The API I used is made by"," ",r.a.createElement("a",{href:"https://pokeapi.co/",title:"pokeapi.co",className:"link-reference",target:"_blank",rel:"noopener noreferrer"},"Pok\xe9API")," ","while the Pok\xe9ball icons I used are created by"," ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/those-icons",title:"Those Icons",className:"link-reference",target:"_blank",rel:"noopener noreferrer"},"Those Icons")," ","from"," ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon",className:"link-reference",target:"_blank",rel:"noopener noreferrer"}," ","Flaticon"),"."))))},w=a(22),y=a(23),x=function(e){var t=e.searchValue,a=e.searchFunction;return r.a.createElement("div",{style:{marginLeft:"15%",marginRight:"15%"}},r.a.createElement(w.a,{className:"mb-3",size:"lg"},r.a.createElement(y.a,{id:"basic-url","aria-describedby":"basic-addon3",type:"search",placeholder:"Search a Pok\xe9mon",value:t,onChange:a})))},N=a(13),j=function(e){var t=e.previousOnClickFunction,a=e.nextOnClickFunction,n=e.disablePrevious,o=e.disableNext,i=e.searchValue;return r.a.createElement("div",{className:"container-box"},r.a.createElement(N.a,{disabled:!(!n&&""===i),variant:"primary",size:"lg",id:"previous-button",onClick:t,className:"pagination-box"},"Previous"),r.a.createElement(N.a,{disabled:!(!o&&""===i),variant:"primary",size:"lg",id:"next-button",onClick:a,className:"pagination-box"},"Next"))};var O=function(){var e,t=d("urlParams",{offset:0,limit:20}),a=Object(c.a)(t,2),o=a[0],i=a[1],l=d("url","https://pokeapi.co/api/v2/pokemon/"),s=Object(c.a)(l,2),u=s[0],f=s[1],p=m(u),h=p.data,b=p.isLoading,k=Object(n.useState)(""),w=Object(c.a)(k,2),y=w[0],N=w[1],O=!1,C=!1;return!1===b&&(e=""!==y?r.a.createElement("div",{className:"container-box"},r.a.createElement(g,{className:"pokemon-item",source:"https://pokeapi.co/api/v2/pokemon/"+y})):r.a.createElement(v,{pokemons:h.results}),h.previous||(O=!0),h.next||(C=!0)),r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(x,{searchValue:y,searchFunction:function(e){N(e.target.value)}}),r.a.createElement(j,{previousOnClickFunction:function(){i((function(e){return{offset:e.offset-20,limit:20}})),f("https://pokeapi.co/api/v2/pokemon/?offset=".concat(o.offset-20,"&limit=").concat(o.limit))},nextOnClickFunction:function(){i((function(e){return{offset:e.offset+20,limit:20}})),f("https://pokeapi.co/api/v2/pokemon/?offset=".concat(o.offset+20,"&limit=").concat(o.limit))},disablePrevious:O,disableNext:C,searchValue:y}),e)},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(37);i.a.render(r.a.createElement(O,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pokedex",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pokedex","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):P(t,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.0058786b.chunk.js.map