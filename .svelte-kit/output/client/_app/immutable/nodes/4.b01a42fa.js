import{s as Ie,f as D,a as C,l as le,g as E,h as I,c as V,d as g,m as ne,j as k,i as N,J as p,p as Ve,L as he,e as _e,O as Fe,n as Le}from"../chunks/scheduler.98946c50.js";import{S as ye,i as Pe,b as P,d as M,m as j,a as v,t as x,e as F,g as se,c as ae}from"../chunks/index.bf7cacb7.js";import{g as oe,e as Q,u as Ne,b as Se}from"../chunks/index.9bc0ff5d.js";import{c as Ue,g as ve}from"../chunks/app.247d5b4e.js";import{C as Ae}from"../chunks/Card.8bc3a73a.js";import{C as Be}from"../chunks/CardLogo.c15db58d.js";import{C as Ge,a as Ye}from"../chunks/ChipIcon.c71847f7.js";import{b as ie}from"../chunks/paths.917c18bf.js";import{U as Z}from"../chunks/UIcon.72b28b9f.js";import{C as qe}from"../chunks/Chip.a238928b.js";import{C as be}from"../chunks/CardDivider.13f53dc1.js";import{C as ze}from"../chunks/CommonPage.1b3ed08e.js";/* empty css                                                    */import{t as He,i as Je}from"../chunks/experience.4745d99e.js";import{G as Oe}from"../chunks/GeneralFooter.35b8762c.js";function xe(i,t,r){const e=i.slice();return e[6]=t[r],e}function we(i,t,r){const e=i.slice();return e[9]=t[r],e}function Re(i){let t,r,e,l=i[9].label+"",n,c,f;return t=new Z({props:{icon:i[9].icon}}),{c(){P(t.$$.fragment),r=C(),e=D("span"),n=le(l),c=C(),this.h()},l(a){M(t.$$.fragment,a),r=V(a),e=E(a,"SPAN",{class:!0});var s=I(e);n=ne(s,l),s.forEach(g),c=V(a),this.h()},h(){k(e,"class","m-l-1")},m(a,s){j(t,a,s),N(a,r,s),N(a,e,s),p(e,n),N(a,c,s),f=!0},p(a,s){const m={};s&2&&(m.icon=a[9].icon),t.$set(m),(!f||s&2)&&l!==(l=a[9].label+"")&&Ve(n,l)},i(a){f||(v(t.$$.fragment,a),f=!0)},o(a){x(t.$$.fragment,a),f=!1},d(a){a&&(g(r),g(e),g(c)),F(t,a)}}}function ke(i){let t,r;return t=new qe({props:{$$slots:{default:[Re]},$$scope:{ctx:i}}}),{c(){P(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){j(t,e,l),r=!0},p(e,l){const n={};l&4098&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){x(t.$$.fragment,e),r=!1},d(e){F(t,e)}}}function De(i){let t,r;return t=new Ye({props:{logo:oe(i[6].logo),name:i[6].name,href:`${ie}/skills/${i[6].slug}`}}),{c(){P(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){j(t,e,l),r=!0},p(e,l){const n={};l&1&&(n.logo=oe(e[6].logo)),l&1&&(n.name=e[6].name),l&1&&(n.href=`${ie}/skills/${e[6].slug}`),t.$set(n)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){x(t.$$.fragment,e),r=!1},d(e){F(t,e)}}}function Te(i){let t,r,e,l,n,c,f,a,s,m,d,L,w,y,S,T,G,ce,U,Y,fe,me,ue,q,$e,K,W=i[0].shortDescription+"",ee,pe,z,X;r=new Be({props:{src:oe(i[0].logo),alt:i[0].company,size:55}}),f=new Ge({props:{title:`${i[0].name}`}});let H=Q(i[1]),h=[];for(let o=0;o<H.length;o+=1)h[o]=ke(we(i,H,o));const Me=o=>x(h[o],1,1,()=>{h[o]=null});w=new Z({props:{icon:"i-carbon-calendar",classes:"text-1.25em"}}),G=new be({}),Y=new Z({props:{icon:"i-carbon-time",classes:"text-1.25em"}}),q=new be({});let J=Q(i[0].skills),_=[];for(let o=0;o<J.length;o+=1)_[o]=De(xe(i,J,o));const je=o=>x(_[o],1,1,()=>{_[o]=null});return{c(){t=D("div"),P(r.$$.fragment),e=C(),l=D("div"),n=D("div"),c=D("h3"),P(f.$$.fragment),a=C(),s=D("div");for(let o=0;o<h.length;o+=1)h[o].c();m=C(),d=D("div"),L=D("div"),P(w.$$.fragment),y=C(),S=le(i[3]),T=C(),P(G.$$.fragment),ce=C(),U=D("div"),P(Y.$$.fragment),fe=C(),me=le(i[2]),ue=C(),P(q.$$.fragment),$e=C(),K=D("div"),ee=le(W),pe=C(),z=D("div");for(let o=0;o<_.length;o+=1)_[o].c();this.h()},l(o){t=E(o,"DIV",{class:!0});var $=I(t);M(r.$$.fragment,$),e=V($),l=E($,"DIV",{class:!0});var b=I(l);n=E(b,"DIV",{class:!0});var O=I(n);c=E(O,"H3",{class:!0});var u=I(c);M(f.$$.fragment,u),u.forEach(g),a=V(O),s=E(O,"DIV",{class:!0});var A=I(s);for(let R=0;R<h.length;R+=1)h[R].l(A);A.forEach(g),O.forEach(g),m=V(b),d=E(b,"DIV",{class:!0});var B=I(d);L=E(B,"DIV",{class:!0});var te=I(L);M(w.$$.fragment,te),y=V(te),S=ne(te,i[3]),te.forEach(g),T=V(B),M(G.$$.fragment,B),ce=V(B),U=E(B,"DIV",{class:!0});var re=I(U);M(Y.$$.fragment,re),fe=V(re),me=ne(re,i[2]),re.forEach(g),ue=V(B),M(q.$$.fragment,B),B.forEach(g),$e=V(b),K=E(b,"DIV",{class:!0});var ge=I(K);ee=ne(ge,W),ge.forEach(g),pe=V(b),z=E(b,"DIV",{class:!0});var de=I(z);for(let R=0;R<_.length;R+=1)_[R].l(de);de.forEach(g),b.forEach(g),$.forEach(g),this.h()},h(){k(c,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),k(s,"class","row flex-wrap items-start m-b-2 gap-1 text-0.9em font-300"),k(n,"class","col "),k(L,"class","row items-center gap-2"),k(U,"class","row items-center gap-2"),k(d,"class","text-[var(--text)] text-[0.9em]"),k(K,"class","experience-description text-[0.9em]"),k(z,"class","flex flex-row flex-wrap mt-5"),k(l,"class","col ml-0 md:ml-[20px] gap-3 w-full"),k(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(o,$){N(o,t,$),j(r,t,null),p(t,e),p(t,l),p(l,n),p(n,c),j(f,c,null),p(n,a),p(n,s);for(let b=0;b<h.length;b+=1)h[b]&&h[b].m(s,null);p(l,m),p(l,d),p(d,L),j(w,L,null),p(L,y),p(L,S),p(d,T),j(G,d,null),p(d,ce),p(d,U),j(Y,U,null),p(U,fe),p(U,me),p(d,ue),j(q,d,null),p(l,$e),p(l,K),p(K,ee),p(l,pe),p(l,z);for(let b=0;b<_.length;b+=1)_[b]&&_[b].m(z,null);X=!0},p(o,$){const b={};$&1&&(b.src=oe(o[0].logo)),$&1&&(b.alt=o[0].company),r.$set(b);const O={};if($&1&&(O.title=`${o[0].name}`),f.$set(O),$&2){H=Q(o[1]);let u;for(u=0;u<H.length;u+=1){const A=we(o,H,u);h[u]?(h[u].p(A,$),v(h[u],1)):(h[u]=ke(A),h[u].c(),v(h[u],1),h[u].m(s,null))}for(se(),u=H.length;u<h.length;u+=1)Me(u);ae()}if((!X||$&1)&&W!==(W=o[0].shortDescription+"")&&Ve(ee,W),$&1){J=Q(o[0].skills);let u;for(u=0;u<J.length;u+=1){const A=xe(o,J,u);_[u]?(_[u].p(A,$),v(_[u],1)):(_[u]=De(A),_[u].c(),v(_[u],1),_[u].m(z,null))}for(se(),u=J.length;u<_.length;u+=1)je(u);ae()}},i(o){if(!X){v(r.$$.fragment,o),v(f.$$.fragment,o);for(let $=0;$<H.length;$+=1)v(h[$]);v(w.$$.fragment,o),v(G.$$.fragment,o),v(Y.$$.fragment,o),v(q.$$.fragment,o);for(let $=0;$<J.length;$+=1)v(_[$]);X=!0}},o(o){x(r.$$.fragment,o),x(f.$$.fragment,o),h=h.filter(Boolean);for(let $=0;$<h.length;$+=1)x(h[$]);x(w.$$.fragment,o),x(G.$$.fragment,o),x(Y.$$.fragment,o),x(q.$$.fragment,o),_=_.filter(Boolean);for(let $=0;$<_.length;$+=1)x(_[$]);X=!1},d(o){o&&g(t),F(r),F(f),he(h,o),F(w),F(G),F(Y),F(q),he(_,o)}}}function Ke(i){let t,r;return t=new Ae({props:{margin:"0px 0px 20px 0px",tiltDegree:2,href:`${ie}/experience/${i[0].slug}`,color:i[0].color,$$slots:{default:[Te]},$$scope:{ctx:i}}}),{c(){P(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){j(t,e,l),r=!0},p(e,[l]){const n={};l&1&&(n.href=`${ie}/experience/${e[0].slug}`),l&1&&(n.color=e[0].color),l&4099&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){x(t.$$.fragment,e),r=!1},d(e){F(t,e)}}}function Qe(i,t,r){let e,{experience:l}=t;const n=Ue(l.period.from,l.period.to),c=`${ve(l.period.from.getMonth())} ${l.period.from.getFullYear()}`,f=l.period.to?`${ve(l.period.to.getMonth())} ${l.period.to.getFullYear()}`:"Presente",a=`${c} - ${f}`;return i.$$set=s=>{"experience"in s&&r(0,l=s.experience)},i.$$.update=()=>{i.$$.dirty&1&&r(1,e=[{label:l.company,icon:"i-carbon-building"},{label:l.location,icon:"i-carbon-location"},{label:l.contract,icon:"i-carbon-hourglass"}])},[l,e,n,a]}class We extends ye{constructor(t){super(),Pe(this,t,Qe,Ke,Ie,{experience:0})}}function Ee(i,t,r){const e=i.slice();return e[2]=t[r],e[4]=r,e}function Xe(i){let t,r,e=[],l=new Map,n,c,f=Q(i[0]);const a=s=>s[2].slug;for(let s=0;s<f.length;s+=1){let m=Ee(i,f,s),d=a(m);l.set(d,e[s]=Ce(d,m))}return{c(){t=D("div"),r=C();for(let s=0;s<e.length;s+=1)e[s].c();n=_e(),this.h()},l(s){t=E(s,"DIV",{class:!0}),I(t).forEach(g),r=V(s);for(let m=0;m<e.length;m+=1)e[m].l(s);n=_e(),this.h()},h(){k(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(s,m){N(s,t,m),N(s,r,m);for(let d=0;d<e.length;d+=1)e[d]&&e[d].m(s,m);N(s,n,m),c=!0},p(s,m){m&1&&(f=Q(s[0]),se(),e=Ne(e,m,a,1,s,f,l,n.parentNode,Se,Ce,n,Ee),ae())},i(s){if(!c){for(let m=0;m<f.length;m+=1)v(e[m]);c=!0}},o(s){for(let m=0;m<e.length;m+=1)x(e[m]);c=!1},d(s){s&&(g(t),g(r),g(n));for(let m=0;m<e.length;m+=1)e[m].d(s)}}}function Ze(i){let t,r,e,l,n="Could not find anything...",c;return r=new Z({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=D("div"),P(r.$$.fragment),e=C(),l=D("p"),l.textContent=n,this.h()},l(f){t=E(f,"DIV",{class:!0});var a=I(t);M(r.$$.fragment,a),e=V(a),l=E(a,"P",{class:!0,["data-svelte-h"]:!0}),Fe(l)!=="svelte-1jyyf6v"&&(l.textContent=n),a.forEach(g),this.h()},h(){k(l,"class","font-300"),k(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(f,a){N(f,t,a),j(r,t,null),p(t,e),p(t,l),c=!0},p:Le,i(f){c||(v(r.$$.fragment,f),c=!0)},o(f){x(r.$$.fragment,f),c=!1},d(f){f&&g(t),F(r)}}}function Ce(i,t){let r,e,l,n,c,f,a,s,m,d,L;return c=new Z({props:{icon:"i-carbon-condition-point",classes:""}}),s=new We({props:{experience:t[2]}}),{key:i,first:null,c(){r=D("div"),e=D("div"),l=C(),n=D("div"),P(c.$$.fragment),f=C(),a=D("div"),P(s.$$.fragment),m=C(),this.h()},l(w){r=E(w,"DIV",{class:!0});var y=I(r);e=E(y,"DIV",{class:!0}),I(e).forEach(g),l=V(y),n=E(y,"DIV",{class:!0});var S=I(n);M(c.$$.fragment,S),S.forEach(g),f=V(y),a=E(y,"DIV",{class:!0});var T=I(a);M(s.$$.fragment,T),T.forEach(g),m=V(y),y.forEach(g),this.h()},h(){k(e,"class","flex-1 hidden lg:flex"),k(n,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),k(a,"class","flex-1 col items-stretch"),k(r,"class",d=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(w,y){N(w,r,y),p(r,e),p(r,l),p(r,n),j(c,n,null),p(r,f),p(r,a),j(s,a,null),p(r,m),L=!0},p(w,y){t=w;const S={};y&1&&(S.experience=t[2]),s.$set(S),(!L||y&1&&d!==(d=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&k(r,"class",d)},i(w){L||(v(c.$$.fragment,w),v(s.$$.fragment,w),L=!0)},o(w){x(c.$$.fragment,w),x(s.$$.fragment,w),L=!1},d(w){w&&g(r),F(c),F(s)}}}function et(i){let t,r,e,l;const n=[Ze,Xe],c=[];function f(a,s){return a[0].length===0?0:1}return r=f(i),e=c[r]=n[r](i),{c(){t=D("div"),e.c(),this.h()},l(a){t=E(a,"DIV",{class:!0});var s=I(t);e.l(s),s.forEach(g),this.h()},h(){k(t,"class","col items-center relative mt-10 flex-1")},m(a,s){N(a,t,s),c[r].m(t,null),l=!0},p(a,s){let m=r;r=f(a),r===m?c[r].p(a,s):(se(),x(c[m],1,1,()=>{c[m]=null}),ae(),e=c[r],e?e.p(a,s):(e=c[r]=n[r](a),e.c()),v(e,1),e.m(t,null))},i(a){l||(v(e),l=!0)},o(a){x(e),l=!1},d(a){a&&g(t),c[r].d()}}}function tt(i){let t,r,e,l;return t=new ze({props:{title:He,$$slots:{default:[et]},$$scope:{ctx:i}}}),e=new Oe({}),{c(){P(t.$$.fragment),r=C(),P(e.$$.fragment)},l(n){M(t.$$.fragment,n),r=V(n),M(e.$$.fragment,n)},m(n,c){j(t,n,c),N(n,r,c),j(e,n,c),l=!0},p(n,[c]){const f={};c&33&&(f.$$scope={dirty:c,ctx:n}),t.$set(f)},i(n){l||(v(t.$$.fragment,n),v(e.$$.fragment,n),l=!0)},o(n){x(t.$$.fragment,n),x(e.$$.fragment,n),l=!1},d(n){n&&g(r),F(t,n),F(e,n)}}}function rt(i,t,r){return[[...Je]]}class _t extends ye{constructor(t){super(),Pe(this,t,rt,tt,Ie,{})}}export{_t as component};