(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{15:function(e,t,a){},26:function(e,t,a){e.exports=a(50)},31:function(e,t,a){},32:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),c=(a(31),a(8)),s=(a(32),a(12)),l=a.n(s),m=a(19),u=function(e){var t=Object(n.useState)({data:null,isLoading:!0}),a=Object(c.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){var t=!0,a=new AbortController;o((function(e){return{data:e.data,isLoading:!0}})),Object(m.a)(l.a.mark((function n(){var r,i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(e,{signal:a.signal});case 3:return r=n.sent,n.next=6,r.json();case 6:if(i=n.sent,!t){n.next=9;break}return n.abrupt("return",o({data:i,isLoading:!1}));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),o({data:"Pokemon not found",isLoading:!1});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))();return function(){t=!1,a.abort()}}),[e]),r},p=a(6),d=a(21),f=(a(15),a(9)),h=function(e){var t,a=e.source,o=u(a.toLowerCase()),i=o.data,s=o.isLoading,l=Object(n.useState)(!1),m=Object(c.a)(l,2),h=m[0],v=m[1];if(!1===s)try{t=r.a.createElement(f.CSSTransitionGroup,{transitionName:"cardbox",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1},r.a.createElement(p.a,{className:"flexbox pokemon-item"},r.a.createElement(p.a.Img,{variant:"top",src:i.sprites.front_default,style:{width:"96px",height:"96px",marginTop:"1.25rem",transition:"all 300ms ease-in-out 300ms"}}),r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,null,i.name.charAt(0).toUpperCase()+i.name.slice(1)))))}catch(b){t=r.a.createElement(f.CSSTransitionGroup,{transitionName:"cardbox",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1},r.a.createElement(p.a,{className:"flexbox pokemon-item"},r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,null,i))))}else t=r.a.createElement(p.a,{className:"flexbox pokemon-item"},r.a.createElement("div",{style:{width:"96px",height:"96px",marginTop:"1.25rem",transition:"all 300ms ease-in-out 300ms"},className:"container-box"},r.a.createElement(d.a,{animation:"border",variant:"danger"})),r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,null,"Searching for Pok\xe9mon")));return r.a.createElement("div",{onMouseOut:function(){return v(!1)},onMouseOver:function(){return v(!0)},style:{transition:"all 300ms ease-in-out",transform:"".concat(h?"scale(1.2)":"scale(1)")}},t)},v=function(e){var t=e.pokemons;return r.a.createElement("div",{className:"grid-wrapper",style:{marginLeft:"10%",marginRight:"10%"}},t.map((function(e,t){return r.a.createElement(f.CSSTransitionGroup,{key:t,transitionName:"example",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1},r.a.createElement(h,{key:t,id:t,name:e.name,source:e.url}))})))},b=a(13),g=a(22),k=a(23),E=a(24),w=a(25);var x=function(){var e,t=Object(n.useState)("https://pokeapi.co/api/v2/pokemon/"),a=Object(c.a)(t,2),o=a[0],i=a[1],s=u(o),l=s.data,m=s.isLoading,p=Object(n.useState)(""),d=Object(c.a)(p,2),f=d[0],x=d[1],y=!1,N=!1;return!1===m&&(e=""!==f?r.a.createElement("div",{className:"container-box"},r.a.createElement(h,{className:"pokemon-item",source:"https://pokeapi.co/api/v2/pokemon/"+f})):r.a.createElement(v,{pokemons:l.results}),l.previous||(y=!0),l.next||(N=!0)),r.a.createElement("div",null,r.a.createElement(g.a,{fluid:!0,className:"text-white",id:"jumbotron-section"},r.a.createElement(k.a,null,r.a.createElement("h1",{className:"display-1",id:"jumbotron-title"},"Pok\xe9dex"),r.a.createElement("p",{className:"lead"},"I created this web page to practice React Hooks."),r.a.createElement("p",{className:"lead"},"This API used is made by"," ",r.a.createElement("a",{href:"https://pokeapi.co/",title:"pokeapi.co",className:"link-reference",target:"_blank",rel:"noopener noreferrer"},"Pok\xe9API"),". The Pokeball Icons used are made by"," ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/those-icons",title:"Those Icons",className:"link-reference",target:"_blank",rel:"noopener noreferrer"},"Those Icons")," ","from"," ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon",className:"link-reference",target:"_blank",rel:"noopener noreferrer"}," ","www.flaticon.com")))),r.a.createElement("div",{style:{marginLeft:"10%",marginRight:"10%"}},r.a.createElement(E.a,{className:"mb-3",size:"lg"},r.a.createElement(w.a,{id:"basic-url","aria-describedby":"basic-addon3",type:"search",placeholder:"Search a Pok\xe9mon",value:f,onChange:function(e){x(e.target.value)}}))),r.a.createElement("div",{className:"container-box"},r.a.createElement(b.a,{disabled:!(!y&&""===f),variant:"primary",size:"lg",id:"previous-button",onClick:function(){return i(l.previous)},className:"flexbox"},"Previous"),r.a.createElement(b.a,{disabled:!(!N&&""===f),variant:"primary",size:"lg",id:"next-button",onClick:function(){return i(l.next)},className:"flexbox"},"Next")),r.a.createElement("br",null),e)},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(49);i.a.render(r.a.createElement(x,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pokedex",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pokedex","/service-worker.js");y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.256b5ca2.chunk.js.map