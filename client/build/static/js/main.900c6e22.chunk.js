(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{50:function(n,e,t){},80:function(n,e,t){"use strict";t.r(e);var r,a,c,o,i,s,b=t(1),l=t.n(b),d=t(21),p=t.n(d),u=(t(50),t(9)),j=t(8),m=t(3),O=t(2),x=t.p+"static/media/1.400e7447.png",h=t.p+"static/media/descarga.83ed7ce5.jpeg",g=t(0),f=Object(O.a)(r||(r=Object(m.a)(["\n  body {\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n"])),h),k=O.b.button(a||(a=Object(m.a)(['\n  color: white;\n  font-size: 3.5rem;\n  font-weight: bold;\n  transition: all 0.2s ease-in-out;\n  position: relative;\n  overflow: hidden;\n  padding: 1rem 1rem;\n  border-radius: 10px;\n \n  background-color: black;\n\n  &:before {\n    content: "";\n    background-color: rgba(255,255,255,0.5);\n    height: 100%;\n    width: 3em;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: -4.5em;\n    transform: skewX(-45deg) translateX(0);\n    transition: none;\n  }\n  &:hover {\n\n    background-color: black;\n    border: 3px solid black;\n    color: white;\n    border-bottom: 4px solid darken(#FCA311, 10%);\n    &:before {\n      transform: skewX(-45deg) translateX(13.5em);\n     transition: all 0.9s ease-in-out;\n       }\n    }']))),v=O.b.h1(c||(c=Object(m.a)(["\n      font-size: 3.5rem;\n      margin-bottom: 0.7rem;\n"]))),y=O.b.div(o||(o=Object(m.a)(["\n       display: block;\n       text-align: center;\n       @media (max-width: 992px) {\n        display: block;\n       text-align: center;\n       margin-top: 25rem;\n       }\n"]))),w=O.b.h1(i||(i=Object(m.a)(["\n      font-size: 2rem;\n      margin: .5rem;\n\n"]))),E=O.b.img(s||(s=Object(m.a)(["\nposition:absolute; \ntop: 27%;\nleft: 10%;\nz-index:1;\nmargin-left: 2rem;\n   \n"]))),C=function(){return Object(g.jsxs)(b.Fragment,{children:[Object(g.jsx)(f,{}),Object(g.jsx)(E,{src:"".concat(x),alt:"pokemon"}),";",Object(g.jsxs)(y,{children:[Object(g.jsx)(v,{children:"Welcome!"}),Object(g.jsx)(w,{children:"Find your favorite Pokemon character or create one"}),Object(g.jsx)(u.b,{to:"/pokemon",children:Object(g.jsx)(k,{children:"HOME"})})]})]})},F=t(5),A=t(4),S=t(7),D=t.n(S),_=t(11),z="GET_POKEMONS_SUCCESS",P="GET_POKEMON_DETAIL",T="GET_POKEMON_NAME",N="GET_ALL_POKEMONS",M="GET_POKEMONS_SUCCESS",R="GET_POKEMONS_ERROR",K="GET_TYPES",B="GET_TYPES_POKEMONS",I="ORDER_NAME_ASC",L="ORDER_NAME_DESC",Y="ORDER_ATTACK_ASC",G="ORDER_ATTACK_DESC",X="FILT_API_POKEMON",H="FILT_OWN_POKEMON",U=t(43),W=t.n(U).a.create({baseURL:"https://quiet-beyond-42912.herokuapp.com/"});function J(){return function(){var n=Object(_.a)(D.a.mark((function n(e){var t;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,W.get("/pokemon/");case 3:t=n.sent,e({type:z,payload:t.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),e({type:z,payload:null});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}var V,q,Q=function(){return{type:N,payload:!0}},Z=function(n,e){return{type:M,payload:{pokemon:n,type:e}}},$=function(n){return{type:R,payload:n}};function nn(n){return function(){var e=Object(_.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:B,payload:n})}catch(r){console.log(r)}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}var en,tn,rn,an,cn,on,sn,bn,ln,dn,pn,un,jn,mn,On,xn,hn,gn,fn,kn,vn,yn,wn,En,Cn,Fn,An,Sn,Dn,_n,zn,Pn,Tn,Nn=O.b.div(V||(V=Object(m.a)(["\n   background: #DDD4E6;\n   padding: 1rem;\n   max-width: 100%;\n   display: flex;\n justify-content: center;\n margin-bottom: 0;\n"]))),Mn=O.b.p(q||(q=Object(m.a)(["\n    text-align: center;\n    padding: 1rem 1rem;\n    font-size: 1.7rem;\n    background-color: #C197FF;\n    display:inline-block;\n    border: 1px solid #000000;\n    border-radius:5px;\n    box-sizing: border-box;\n    font-weight:700;\n    color:#000000;\n    text-align:center;\n    transition: all 0.15s;\n\n    :hover{\n      color: #FFFFFF;\n      border-color:#FFFFFF;\n      background-color: #1C1018;\n        transform: translateY(0) scale(1.1);\n    }\n"]))),Rn=function(){return Object(g.jsx)(Nn,{children:Object(g.jsx)(u.b,{to:"/pokemon",children:Object(g.jsx)(Mn,{children:"Pokemon App"})})})},Kn=t.p+"static/media/pok.88ce61a9.png",Bn=t.p+"static/media/pato.687b63b9.png",In=Object(O.a)(en||(en=Object(m.a)(["\n  body {\n    background: #FAFAA0;\n  }\n"]))),Ln=O.b.div(tn||(tn=Object(m.a)(["\n    background-color:#B39CD0;\n    display: block;\n    margin: 1rem;\n    border-radius: 15px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    margin-top: 2rem;\n    @media (min-width: 768px) {\n    width: 50%;\n    transform: translate(-50%, -50%);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    }\n"]))),Yn=O.b.div(rn||(rn=Object(m.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 2rem;\n    :hover{\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9);\n  }\n"]))),Gn=O.b.button(an||(an=Object(m.a)(["\n    position: absolute;\n    left: 4%;\n    top: 75%;\n    margin-top: 1rem;\n    padding: 1rem 2rem;\n    border-radius: 7px;\n    font-size: 1.5rem;\n    font-weight: 700;\n    background-color: #00C9A7;\n    color: black;\n    border: 1px solid black;\n    text-decoration: none;\n    :hover{\n        transform: translateY(0) scale(1.1);\n        background-color: #F6F83E;\n    }\n    @media (min-width: 768px) {\n    position: absolute;\n    left: 1%;\n    top: 0;\n    }\n\n"]))),Xn=O.b.div(cn||(cn=Object(m.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),Hn=O.b.p(on||(on=Object(m.a)(["\n    margin: 2rem 2rem;\n    background-color: #00C9A7;\n    padding: 1rem 2rem;\n    border-radius: 7px;\n    font-size: 1.5rem;\n    text-transform: uppercase;\n    font-weight: 700;\n    border: 1px solid black;\n    :hover{\n      -webkit-transform: scale(0.9);\n      transform: scale(0.9);\n    }\n"]))),Un=O.b.span(sn||(sn=Object(m.a)(["\n    color: black;\n    display: block;\n    background-color: #B39CD0;\n    padding: 1rem 2rem;\n    border-radius: 7px;\n    font-size: 1.5rem;\n    text-transform: uppercase;\n    font-weight: 700;\n    margin-top: 1rem;\n    border: 1px solid black;\n"]))),Wn=O.b.p(bn||(bn=Object(m.a)(["\n    text-align: center;\n    padding: 1rem 1rem;\n    border-radius: 7px;\n    font-size: 1.5rem;\n"]))),Jn=O.b.div(ln||(ln=Object(m.a)(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    margin: 0;\n    background-color: #845EC2;\n    border-radius: 15px;\n    border: 1px solid black;\n"]))),Vn=O.b.img(dn||(dn=Object(m.a)(["\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5rem;\n    margin-bottom: 5rem;\n    width: 200px;\n    height: 100px;\n"]))),qn=O.b.img(pn||(pn=Object(m.a)(["\n  width: 200px;\n  height: 200px;\n  @media (min-width: 768px) {\n    width: 230px;\n    height: 230px;\n  }\n"]))),Qn=O.b.img(un||(un=Object(m.a)(["\n    width: 350px;\n    height: 500px;\n    position: absolute;\n    top: 20%;\n    left: 40%;\n"]))),Zn=O.b.h2(jn||(jn=Object(m.a)(["\n    font-size: 2.5rem;\n    position: absolute;\n    top: 10%;\n    left: 35%;\n"]))),$n=function(){var n=Object(F.b)(),e=Object(F.c)((function(n){return n.pokemonDetail})),t=Object(j.g)().id;if(Object(b.useEffect)((function(){n(function(n){return function(){var e=Object(_.a)(D.a.mark((function e(t){var r,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.get("/pokemon/".concat(n));case 3:r=e.sent,t({type:P,payload:r.data}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),404!==(null===(a=e.t0.response)||void 0===a?void 0:a.status)&&alert("Something went wrong"),t({type:P,payload:null});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}(t))}),[n,t]),null===e||void 0===e)return Object(g.jsxs)("div",{children:[Object(g.jsx)(In,{}),Object(g.jsx)(u.b,{to:"/pokemon",children:Object(g.jsx)(Gn,{children:"\xab BACK TO MAIN PAGE"})}),Object(g.jsx)(Zn,{children:"Ups.. There isn't a pokemon with that name"}),Object(g.jsx)(Qn,{src:Bn,alt:"pokemon character"})]});var r=e.type.split(","),a=r[0],c=r[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(In,{}),Object(g.jsx)(Rn,{}),Object(g.jsx)(u.b,{to:"/pokemon",children:Object(g.jsx)(Gn,{children:"\xab BACK"})}),Object(g.jsxs)(Ln,{children:[Object(g.jsx)(Yn,{children:e.img?Object(g.jsx)(qn,{src:e.img,alt:"pokemon character"}):Object(g.jsx)(Vn,{src:Kn,alt:"pokemon character"})}),Object(g.jsxs)(Xn,{children:[Object(g.jsx)(Hn,{children:a}),c?Object(g.jsx)(Hn,{children:c}):null]}),Object(g.jsxs)(Jn,{children:[Object(g.jsxs)("div",{children:[Object(g.jsxs)(Wn,{children:["Name",Object(g.jsx)(Un,{children:e.name})]}),Object(g.jsxs)(Wn,{children:["HP",Object(g.jsx)(Un,{children:e.HP})]})]}),Object(g.jsxs)("div",{children:[Object(g.jsxs)(Wn,{children:["Attack",Object(g.jsx)(Un,{children:e.attack})]}),Object(g.jsxs)(Wn,{children:["Defense",Object(g.jsx)(Un,{children:e.defense})]})]}),Object(g.jsxs)("div",{children:[Object(g.jsxs)(Wn,{children:["Height",Object(g.jsx)(Un,{children:e.height})]}),Object(g.jsxs)(Wn,{children:["Weight",Object(g.jsx)(Un,{children:e.weight})]})]})]})]})]})},ne=t(17),ee=t(16),te=O.b.input(mn||(mn=Object(m.a)(["   \n    padding: 1rem 1rem;\n    border: 1px solid #000000;\n    border-radius:5px;\n    font-size: 1.3rem;\n    background-color: #DDD4E6;\n    :hover{\n      background-color: white;\n    }\n"]))),re=O.b.button(On||(On=Object(m.a)(["  \n    background-color: #C197FF;\n    border: 1px solid #000000;\n    border-radius:5px;\n    font-size: 1.3rem;\n    padding: 1rem 1rem;\n    :hover{\n        background-color: #95E06C;\n        text-decoration: underline #95E06C;\n    }\n"]))),ae=O.b.div(xn||(xn=Object(m.a)(["  \n    padding: 1rem 1rem;\n    text-align: center;\n    @media (min-width: 768px) {\n    position: absolute;\n    left: 1%;\n    top: 0;\n    }\n"]))),ce=function(){var n=Object(F.b)(),e=Object(j.f)(),t=Object(b.useState)({name:""}),r=Object(ee.a)(t,2),a=r[0],c=r[1],o=a.name;return Object(g.jsx)("div",{children:Object(g.jsx)("form",{onSubmit:function(t){t.preventDefault(),n(function(n){return function(){var e=Object(_.a)(D.a.mark((function e(t){var r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.get("/pokemon/".concat(n));case 3:r=e.sent,t({type:T,payload:r.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}(o)),e.push("/pokemon/".concat(o))},children:Object(g.jsxs)(ae,{children:[Object(g.jsx)(te,{name:"name",type:"text",value:o,placeholder:"Type to search",onChange:function(n){c(Object(A.a)(Object(A.a)({},a),{},Object(ne.a)({},n.target.name,n.target.value)))}}),Object(g.jsx)(re,{type:"submit",children:"Search"})]})})})},oe=t.p+"static/media/bal.15384c47.png",ie=O.b.img(hn||(hn=Object(m.a)(["\n    margin-top: 3rem;\n      width: 180px;\n      height: 180px;\n      -webkit-animation:spin 4s linear infinite;\n      -moz-animation:spin 4s linear infinite;\n      animation:spin 4s linear infinite;\n      @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }\n      @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }\n      @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }\n"]))),se=O.b.p(gn||(gn=Object(m.a)(["\n    font-size: 2rem;\n    font-weight: 700;\n    border-radius:5px;\n    text-align: center;\n"]))),be=O.b.div(fn||(fn=Object(m.a)(["\n    margin-top: 2rem;\n    position: absolute;\n    left: 26%;\n    @media (min-width: 768px) {\n    left: 40%;\n    }\n\n\n"]))),le=function(){return Object(g.jsxs)(be,{children:[Object(g.jsx)(se,{children:"Loading..."}),Object(g.jsx)(ie,{src:"".concat(oe),alt:"pokemon"}),";"]})},de=O.b.div(kn||(kn=Object(m.a)(["\n    display: flex;\n    justify-content: center;\n    margin: 1rem;\n\n"]))),pe=O.b.div(vn||(vn=Object(m.a)(["\n    box-shadow: 2px 2px 10px #666;\n    padding: 1rem;\n    background-color: #4B4453;\n    border-radius: 10px;\n    :hover{\n        transform: translateY(0) scale(1.07);\n    }\n"]))),ue=O.b.img(yn||(yn=Object(m.a)(["\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 200px;\n    height: 200px;\n"]))),je=O.b.img(wn||(wn=Object(m.a)(["\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5rem;\n    margin-bottom: 5rem;\n    width: 200px;\n    height: 100px;\n"]))),me=O.b.p(En||(En=Object(m.a)(["\n    display: block;\n    color: white;\n    font-size: 1.5rem;\n    margin: 1rem 0;\n    text-align: center;\n    text-decoration: underline #4B4453 ;\n"]))),Oe=O.b.span(Cn||(Cn=Object(m.a)(["\n    text-transform: uppercase;\n    font-weight: 700;\n    text-decoration: none;\n"]))),xe=O.b.p(Fn||(Fn=Object(m.a)(["\n    background-color: #C197FF;\n    border-radius: 5px;\n    font-size: 1.5rem;\n    text-decoration: underline #C197FF;\n    color: black;\n    margin: 0 2rem;\n    padding: 1rem 1.5rem;\n    :hover{\n        background-color: #95E06C;\n        text-decoration: underline #95E06C;\n    }\n"]))),he=function(n){var e=n.pokemon,t=e.name,r=e.type,a=e.id,c=e.img;return Object(g.jsx)("div",{children:Object(g.jsx)(u.b,{to:"/pokemon/".concat(a),children:Object(g.jsxs)(pe,{children:[Object(g.jsxs)(me,{children:["# ",a]}),Object(g.jsx)(me,{children:Object(g.jsx)(Oe,{children:t})}),c?Object(g.jsx)(ue,{src:c,alt:"pokemon character"}):Object(g.jsx)(je,{src:Kn,alt:"pokemon character"}),Object(g.jsxs)(de,{children:[Object(g.jsx)(xe,{children:r[0]}),r[1]?Object(g.jsx)(xe,{children:r[1]}):null]})]})})})},ge=O.b.div(An||(An=Object(m.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    position: static;\n    padding: .5rem;\n    border-radius: 8px;\n"]))),fe=O.b.a(Sn||(Sn=Object(m.a)(["\n    background-color: #C197FF;\n    font-size: 2rem;\n    border: 1px solid #000000;\n    border-radius: 5px;\n    margin: .5rem;\n    padding: .5rem 1rem; \n    text-decoration: none;\n\n"]))),ke=O.b.p(Dn||(Dn=Object(m.a)(["\n    background-color: #845EC2;\n    font-size: 2rem;\n    opacity: 0.6;\n    border: 1px solid #000000;\n    border-radius: 5px;\n    margin: .5rem;\n    padding: .5rem 1rem;\n    :hover{\n      background-color: #00C9A7;\n    }\n\n"]))),ve=function(n){for(var e=n.pokemonsPerPage,t=n.paginate,r=[],a=1;a<=Math.ceil(40/e);a++)r.push(a);return Object(g.jsx)(ge,{children:r.map((function(n){return Object(g.jsx)(ke,{children:Object(g.jsx)(fe,{onClick:function(){return t(n)},href:"#!",children:n})},n)}))})},ye=O.b.button(_n||(_n=Object(m.a)(["\n    background-color: #00C9A7;\n    margin: 1.5rem .5rem;\n    padding: 1rem; \n    border-radius: 7px;\n    font-size: 1.2rem;\n    font-weight: 700;\n    color: black;\n    border: 1px solid black;\n    text-decoration: none;\n    @media (min-width: 768px) {\n        font-size: 1.5rem;\n    }\n    :hover{\n        transform: translateY(0) scale(1.1);\n        background-color: #95E06C;\n    }\n"]))),we=function(){var n=Object(F.b)();return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(function(){var n=Object(_.a)(D.a.mark((function n(e){var t;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,W.get("/pokemon/");case 3:t=n.sent,e({type:I,payload:t.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}())},children:Object(g.jsx)(ye,{type:"submit",children:"Name \u2191"})})})},Ee=function(){var n=Object(F.b)();return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(function(){var n=Object(_.a)(D.a.mark((function n(e){var t;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,W.get("/pokemon/");case 3:t=n.sent,e({type:L,payload:t.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}())},children:Object(g.jsx)(ye,{type:"submit",children:"Name \u2193"})})})},Ce=function(){var n=Object(F.b)();return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(function(){var n=Object(_.a)(D.a.mark((function n(e){var t;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,W.get("/pokemon/orderAsc");case 3:t=n.sent,e({type:Y,payload:t.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}())},children:Object(g.jsx)(ye,{type:"submit",children:"Attack \u2191"})})})},Fe=function(){var n=Object(F.b)();return Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(function(){var n=Object(_.a)(D.a.mark((function n(e){var t;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,W.get("/pokemon/orderDesc");case 3:t=n.sent,e({type:G,payload:t.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}())},children:Object(g.jsx)(ye,{type:"submit",children:"Attack \u2193"})})},Ae=function(){var n=Object(F.b)();return Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(function(){var n=Object(_.a)(D.a.mark((function n(e){var t;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,W.get("/pokemon/filtOwn");case 3:t=n.sent,e({type:H,payload:t.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}())},children:Object(g.jsx)(ye,{type:"submit",children:"Pokemons created by users"})})},Se=function(){var n=Object(F.b)();return Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(function(){var n=Object(_.a)(D.a.mark((function n(e){var t;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,W.get("/pokemon/filtAPI");case 3:t=n.sent,e({type:X,payload:t.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}())},children:Object(g.jsx)(ye,{type:"submit",children:"Original Pokemons"})})};function De(){return function(){var n=Object(_.a)(D.a.mark((function n(e){var t;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,W.get("/type/");case 3:t=n.sent,e({type:K,payload:t.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}var _e,ze,Pe,Te,Ne,Me=O.b.button(zn||(zn=Object(m.a)(["\n    padding: 1rem 1.5rem;\n    background-color: #00C9A7;\n    border-radius: 7px;\n    font-size: 1.2rem;\n    font-weight: 700;\n    color: black;\n    border: 1px solid black;\n    text-decoration: none;\n    :hover{\n        background-color: #95E06C;\n    }\n    @media (min-width: 768px) {\n        font-size: 1.5rem;\n    }\n"]))),Re=O.b.select(Pn||(Pn=Object(m.a)(["\n    padding: 1rem 1.5rem;\n    color: black;\n    font-size: 1.2rem;\n    border-radius: 7px;\n    border: 1px solid black;\n    -webkit-appearance: button;\n    appearance: button;\n    outline: none;\n\n  "]))),Ke=O.b.div(Tn||(Tn=Object(m.a)(["\n    margin: 1.5rem .5rem;\n    @media (min-width: 768px) {\n        font-size: 1.5rem;\n }\n"]))),Be=function(){var n=Object(b.useState)(""),e=Object(ee.a)(n,2),t=e[0],r=e[1],a=Object(F.b)(),c=Object(F.c)((function(n){return n.types}));Object(b.useEffect)((function(){a(De()),a(nn(Object.values(t).toString()))}),[a]);return Object(g.jsx)("form",{onSubmit:function(n){n.preventDefault(),console.log(a(nn(Object.values(t).toString())))},children:Object(g.jsxs)(Ke,{children:[Object(g.jsxs)(Re,{name:"type",onChange:function(n){r(Object(A.a)(Object(A.a)({},t),{},Object(ne.a)({},n.target.name,n.target.value)))},children:[Object(g.jsx)("option",{value:"",children:"-- Select a type --"}),Array.isArray(c)?c.map((function(n){return Object(g.jsx)("option",{value:n.name,children:n.name},n.id)})):null]}),Object(g.jsx)(Me,{type:"submit",children:"Filt"})]})})},Ie=function(){var n=Object(F.b)();return Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(J())},children:Object(g.jsx)(ye,{type:"submit",children:"Reset Filters"})})},Le=Object(O.a)(_e||(_e=Object(m.a)(["\n  body {\n    background: #B0A8B9;\n  }\n"]))),Ye=O.b.div(ze||(ze=Object(m.a)(["\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    gap: 2rem;\n    margin: 2rem;\n    @media (min-width: 768px) {\n        grid-template-columns: repeat(4, 1fr);\n        margin: 4rem;\n    }\n"]))),Ge=O.b.div(Pe||(Pe=Object(m.a)(["\n  display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 1rem;\n    @media (min-width: 768px) {\n    display: grid;\n    grid-template-columns: 1fr 2r;\n \n   \n    margin: 1.5rem; \n}\n"]))),Xe=O.b.fieldset(Te||(Te=Object(m.a)(["\n    display: grid;\n    grid-template-columns:1fr;\n    column-gap: 1rem;\n    background-color: #4B4453;\n    border: 1px solid black;\n\n    @media (min-width: 768px) {\n      display: flex;\n      justify-content: center;\n\n   \n    }\n"]))),He=O.b.p(Ne||(Ne=Object(m.a)(["\n    text-decoration: underline #C197FF;\n    margin: 1rem 1rem;\n    text-align: center;\n    padding: 1rem;\n    font-size: 1.5rem;\n    border: 1px solid #000000;\n    border-radius:5px;\n    box-sizing: border-box;\n    color:#000000;\n    background-color: #C197FF;\n    :hover{\n        transform: translateY(0) scale(1.1);\n        background-color: #95E06C;\n        text-decoration: underline #95E06C;\n    }\n    @media (min-width: 768px) {\n      font-size: 1.3rem;\n      padding: 1rem 1rem;\n      position: absolute;\n      right: 1%;\n      top: 0;\n     \n    }\n    \n"]))),Ue=function(){var n=Object(F.b)(),e=Object(b.useState)(1),t=Object(ee.a)(e,2),r=t[0],a=t[1],c=Object(b.useState)(12),o=Object(ee.a)(c,1)[0];Object(b.useEffect)((function(){n(J())}),[n]);var i=Object(F.c)((function(n){return n.pokemons})),s=r*o,l=s-o;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Le,{}),Object(g.jsx)(Rn,{}),Object(g.jsxs)(Ge,{children:[Object(g.jsxs)(Xe,{children:[Object(g.jsx)(we,{}),Object(g.jsx)(Ee,{}),Object(g.jsx)(Ce,{}),Object(g.jsx)(Fe,{})]}),Object(g.jsxs)(Xe,{children:[Object(g.jsx)(Ae,{}),Object(g.jsx)(Se,{}),Object(g.jsx)(Be,{}),Object(g.jsx)(Ie,{})]})]}),Object(g.jsx)(u.b,{to:"/new",children:Object(g.jsx)(He,{children:"New Pokemon"})}),Object(g.jsx)(ce,{}),Object(g.jsx)(Ye,{children:Array.isArray(i)?i.slice(l,s).map((function(n){return Object(g.jsx)(he,{pokemon:n},n.id)})):Object(g.jsx)(le,{})}),Array.isArray(i)&&i.length<12?null:Array.isArray(i)?Object(g.jsx)(ve,{pokemonsPerPage:o,paginate:function(n){return a(n)}}):null]})},We=t(23),Je={pokemons:void 0,error:null,loading:!1,pokemonDetail:void 0,types:void 0,pokemonName:void 0};var Ve,qe,Qe,Ze,$e,nt,et,tt,rt,at,ct,ot,it,st=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N:return Object(A.a)(Object(A.a)({},n),{},{loading:e.payload});case H:case X:case G:case Y:case z:return Object(A.a)(Object(A.a)({},n),{},{pokemons:e.payload});case R:return Object(A.a)(Object(A.a)({},n),{},{loading:!1,error:e.payload});case M:return Object(A.a)(Object(A.a)({},n),{},{loading:!1,pokemons:e.payload});case P:return Object(A.a)(Object(A.a)({},n),{},{pokemonDetail:e.payload});case T:return Object(A.a)(Object(A.a)({},n),{},{pokemonName:e.payload});case K:return Object(A.a)(Object(A.a)({},n),{},{types:e.payload});case B:return Object(A.a)(Object(A.a)({},n),{},{pokemons:n.pokemons.filter((function(n){return 1===n.type.length?n.type[0].includes(e.payload):2===n.type.length?n.type[0].includes(e.payload)||n.type[1].includes(e.payload):null}))});case I:return Object(A.a)(Object(A.a)({},n),{},{pokemons:e.payload.sort((function(n,e){return n.name>e.name?1:e.name>n.name?-1:0}))});case L:return Object(A.a)(Object(A.a)({},n),{},{pokemons:e.payload.sort((function(n,e){return n.name<e.name?1:e.name<n.name?-1:0}))});default:return n}},bt=t(44),lt=Object(We.c)(st,Object(We.b)(Object(We.a)(bt.a),"object"===typeof window&&"undefined"!==typeof window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(n){return n})),dt=t(45),pt=t.p+"static/media/pika.6c943090.png",ut=Object(O.a)(Ve||(Ve=Object(m.a)(["\n  body {\n    background-color: #D9EDDF;\n  }\n"]))),jt=O.b.img(qe||(qe=Object(m.a)(["\n    width: 200px;\n    height: 200px;\n    :hover{\n        transform: translateY(0) scale(1.1);\n    }\n    @media (min-width: 768px) {\n      width: 480px;\n      height: 500px;\n }\n"]))),mt=O.b.div(Qe||(Qe=Object(m.a)(["\n    @media (min-width: 768px) {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-radius: 5px;\n}\n  \n"]))),Ot=O.b.div(Ze||(Ze=Object(m.a)(["\n    margin: .5rem;\n    font-size: 1.3rem;\n"]))),xt=O.b.h2($e||($e=Object(m.a)(["\n    margin: 1rem 0;\n    text-align: center;\n    font-weight: 900;\n    font-size: 2rem;\n"]))),ht=O.b.p(nt||(nt=Object(m.a)(["\n    margin: 1rem 0;\n    text-align: center;\n    font-size: 1.6rem;\n"]))),gt=O.b.div(et||(et=Object(m.a)(["\n    margin: 1rem 2rem;\n    background-color: #FEFEDF;\n    border-radius: 20px;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    @media (min-width: 768px) {\n      width: 500px;\n    }\n"]))),ft=O.b.div(tt||(tt=Object(m.a)(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    margin: 1.5rem;\n    background-color: #C493FF;\n    border-radius: 5px;\n\n"]))),kt=O.b.input(rt||(rt=Object(m.a)(["\n    margin-left: 2rem;\n    margin-bottom: 1rem;\n    font-size: 1.5rem;\n    padding: .5rem;\n    background-color: #C493FF;\n    border: 1px solid #845EC2;\n    border-radius: 5px;\n    ::placeholder { \n    color: black;\n    opacity: 1; \n}\n"]))),vt=O.b.input(at||(at=Object(m.a)(["\n    list-style: none;\n    float: left;\n"]))),yt=O.b.p(ct||(ct=Object(m.a)(["\n    color: red;\n    font-weight: 700;\n    text-align: center;\n"]))),wt=O.b.button(ot||(ot=Object(m.a)(["\n    background-color: #00C9A7;\n    margin-top: 1rem;\n    padding: 1rem 3rem;\n    border-radius: 7px;\n    font-size: 1.5rem;\n    font-weight: 700;\n    color: black;\n    border: 1px solid black;\n    text-decoration: none;\n    margin-left: 35%;\n    :hover{\n        transform: translateY(0) scale(1.1);\n        background-color: #F6F83E;\n    }\n    @media (min-width: 768px) {\n    position: absolute;\n    top: 87%;\n    right: 65%;\n    }\n"]))),Et=O.b.button(it||(it=Object(m.a)(["\n    margin-top: 1rem;\n    border-radius: 7px;\n    font-size: 1.5rem;\n    font-weight: 700;\n    background-color: #00C9A7;\n    color: black;\n    border: 1px solid black;\n    padding: 1rem 2rem;\n    :hover{\n        transform: translateY(0) scale(1.1);\n        background-color: #F6F83E;\n    }\n    position: absolute;\n        left: 1%;\n        top: 0;\n"]))),Ct=function(n){var e=n.history,t=Object(F.b)(),r=Object(F.c)((function(n){return n.types}));Object(b.useEffect)((function(){t(De())}),[t]);var a=Object(b.useState)({name:"",healthpoints:null,attack:null,defense:null,speed:null,height:null,weight:null,img:""}),c=Object(ee.a)(a,2),o=c[0],i=c[1],s=Object(b.useState)([]),l=Object(ee.a)(s,2),d=l[0],p=l[1],j=o.name,m=o.healthpoints,O=o.attack,x=o.defense,h=o.speed,f=o.height,k=o.weight,v=o.img,y=function(n){i(Object(A.a)(Object(A.a)({},o),{},Object(ne.a)({},n.target.name,n.target.value)))},w=function(n){var e,t;p([].concat(Object(dt.a)(d),[(e=n.target.value,t=Object(ee.a)(e,1),n.target.name=t[0],e)]))};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Rn,{}),Object(g.jsxs)(mt,{children:[Object(g.jsx)(ut,{}),Object(g.jsx)(u.b,{to:"/pokemon",children:Object(g.jsx)(Et,{children:"\xab BACK"})}),Object(g.jsxs)(gt,{children:[Object(g.jsx)(xt,{children:"Create your Pokemon"}),Object(g.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==j?(alert("Pokemon Created!"),t(function(n,e){return function(){var t=Object(_.a)(D.a.mark((function t(r){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(Q()),t.prev=1,t.next=4,W.post("/pokemon",Object(A.a)(Object(A.a)({},n),{},{type:e}));case 4:r(Z(n,e)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0),r($(!0));case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(n){return t.apply(this,arguments)}}()}(o,d)),e.push("/pokemon")):alert("The name is obligatory")},children:[Object(g.jsx)(kt,{type:"text",placeholder:"Name",onChange:y,name:"name",value:j}),Object(g.jsx)(kt,{type:"number",placeholder:"Health Points",onChange:y,name:"healthpoints",value:m}),Object(g.jsx)(kt,{type:"number",placeholder:"Attack",onChange:y,name:"attack",value:O}),Object(g.jsx)(kt,{type:"number",placeholder:"Speed",onChange:y,name:"speed",value:h}),Object(g.jsx)(kt,{type:"number",placeholder:"Defense",onChange:y,name:"defense",value:x}),Object(g.jsx)(kt,{type:"number",placeholder:"Height",onChange:y,name:"height",value:f}),Object(g.jsx)(kt,{type:"number",placeholder:"Weight",onChange:y,name:"weight",value:k}),Object(g.jsx)(kt,{type:"url",placeholder:"Image url",onChange:y,name:"img",value:v}),Object(g.jsx)(ht,{children:"Choose a type"}),d.length<2?Object(g.jsx)(yt,{children:"You can select only two"}):null,Object(g.jsx)(ft,{children:Array.isArray(r)?r.map((function(n){return Object(g.jsxs)(Ot,{children:[n.name,Object(g.jsx)(vt,{type:"checkbox",value:n.name,name:"type",onChange:w},n.id)]})})):null}),Object(g.jsx)(wt,{type:"submit",children:"Create"})]})]}),Object(g.jsx)(jt,{src:"".concat(pt),alt:"Pokemon"})]})]})};var Ft=function(){return Object(g.jsx)(u.a,{children:Object(g.jsx)(F.a,{store:lt,children:Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{exact:!0,path:"/",component:C}),Object(g.jsx)(j.a,{exact:!0,path:"/pokemon",component:Ue}),Object(g.jsx)(j.a,{exact:!0,path:"/pokemon/:id",component:$n}),Object(g.jsx)(j.a,{exact:!0,path:"/pokemon/:name",component:ce}),Object(g.jsx)(j.a,{exact:!0,path:"/new",component:Ct})]})})})},At=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,81)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),c(n),o(n)}))};p.a.render(Object(g.jsx)(l.a.StrictMode,{children:Object(g.jsx)(F.a,{store:lt,children:Object(g.jsx)(Ft,{})})}),document.getElementById("root")),At()}},[[80,1,2]]]);
//# sourceMappingURL=main.900c6e22.chunk.js.map