import{s as Ie,f as B,g as U,h as F,d as m,j as w,i as C,a as q,l as ne,c as M,m as se,J as I,p as oe,L as ve,o as Qe,e as Be,O as We,n as Xe}from"../chunks/scheduler.98946c50.js";import{S as Se,i as Ve,b as S,d as V,m as P,a as $,t as g,e as y,g as ae,c as ie}from"../chunks/index.bf7cacb7.js";import{g as be,e as T}from"../chunks/index.f1f206f5.js";import{t as Ze,i as Ue}from"../chunks/projects.f84966ff.js";import{i as xe}from"../chunks/skills.1b02ae6c.js";import{C as Pe}from"../chunks/Chip.a238928b.js";import{d as et,c as tt,g as Fe}from"../chunks/app.247d5b4e.js";import{C as rt}from"../chunks/Card.260ed3a0.js";import{C as lt,a as nt}from"../chunks/ChipIcon.825ba06e.js";import{U as ke}from"../chunks/UIcon.72b28b9f.js";/* empty css                                                       */import{C as de}from"../chunks/CardDivider.13f53dc1.js";import{C as st}from"../chunks/CardLogo.c15db58d.js";import{b as we}from"../chunks/paths.64485a91.js";import{C as ot}from"../chunks/CommonPage.1b3ed08e.js";/* empty css                                                    *//* empty css                                                            */function at(s){let t,l,e;return l=new ke({props:{icon:"i-carbon-link",classes:"text-[var(--secondary-text)]"}}),{c(){t=B("a"),S(l.$$.fragment),this.h()},l(r){t=U(r,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0,"data-help":!0});var a=F(t);V(l.$$.fragment,a),a.forEach(m),this.h()},h(){w(t,"class","card-link row-center relative m-x-2.5px border-1px border-solid border-[var(--border)] p-5px rounded-10px text-inherit svelte-18qy750"),w(t,"href",s[1]),w(t,"title",s[0]),w(t,"target","_blank"),w(t,"rel","noreferrer"),w(t,"data-help",s[0])},m(r,a){C(r,t,a),P(l,t,null),e=!0},p(r,[a]){(!e||a&2)&&w(t,"href",r[1]),(!e||a&1)&&w(t,"title",r[0]),(!e||a&1)&&w(t,"data-help",r[0])},i(r){e||($(l.$$.fragment,r),e=!0)},o(r){g(l.$$.fragment,r),e=!1},d(r){r&&m(t),y(l)}}}function it(s,t,l){let{label:e}=t,{to:r}=t;return s.$$set=a=>{"label"in a&&l(0,e=a.label),"to"in a&&l(1,r=a.to)},[e,r]}class ft extends Se{constructor(t){super(),Ve(this,t,it,at,Ie,{label:0,to:1})}}function ze(s,t,l){const e=s.slice();return e[5]=t[l],e}function Ae(s,t,l){const e=s.slice();return e[8]=t[l],e}function Ne(s){let t,l;return t=new ft({props:{label:s[8].label??"",to:s[8].to}}),{c(){S(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){P(t,e,r),l=!0},p(e,r){const a={};r&1&&(a.label=e[8].label??""),r&1&&(a.to=e[8].to),t.$set(a)},i(e){l||($(t.$$.fragment,e),l=!0)},o(e){g(t.$$.fragment,e),l=!1},d(e){y(t,e)}}}function ct(s){let t;return{c(){t=ne(s[2])},l(l){t=se(l,s[2])},m(l,e){C(l,t,e)},p(l,e){e&4&&oe(t,l[2])},d(l){l&&m(t)}}}function Re(s){let t,l;return t=new Pe({props:{$$slots:{default:[ut]},$$scope:{ctx:s}}}),{c(){S(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){P(t,e,r),l=!0},p(e,r){const a={};r&2050&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){l||($(t.$$.fragment,e),l=!0)},o(e){g(t.$$.fragment,e),l=!1},d(e){y(t,e)}}}function ut(s){let t;return{c(){t=ne(s[1])},l(l){t=se(l,s[1])},m(l,e){C(l,t,e)},p(l,e){e&2&&oe(t,l[1])},d(l){l&&m(t)}}}function Ye(s){let t,l;return t=new nt({props:{logo:be(s[5].logo),name:s[5].name,href:`${we}/skills/${s[5].slug}`}}),{c(){S(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){P(t,e,r),l=!0},p(e,r){const a={};r&1&&(a.logo=be(e[5].logo)),r&1&&(a.name=e[5].name),r&1&&(a.href=`${we}/skills/${e[5].slug}`),t.$set(a)},i(e){l||($(t.$$.fragment,e),l=!0)},o(e){g(t.$$.fragment,e),l=!1},d(e){y(t,e)}}}function mt(s){let t,l,e,r,a,i,c,o,k,h,d,z,u,_,D=s[0].type+"",j,re,G,Ce,Y,H,je,fe,ue,Ee,K,me,Q,le,ce=s[0].shortDescription+"",$e,pe,N,J,De,ge,W,he,O,X;t=new st({props:{alt:s[0].name,src:be(s[0].logo),size:40,radius:"0"}}),r=new lt({props:{title:s[0].name}});let Z=T(s[0].links),v=[];for(let n=0;n<Z.length;n+=1)v[n]=Ne(Ae(s,Z,n));const He=n=>g(v[n],1,1,()=>{v[n]=null});o=new de({}),z=new ke({props:{icon:"i-carbon-assembly-cluster",classes:"text-1.25em"}}),G=new de({}),H=new ke({props:{icon:"i-carbon-time",classes:"text-1.25em"}}),K=new de({}),J=new Pe({props:{$$slots:{default:[ct]},$$scope:{ctx:s}}});let E=s[2]!==s[1]&&Re(s);W=new de({});let x=T(s[0].skills),b=[];for(let n=0;n<x.length;n+=1)b[n]=Ye(ze(s,x,n));const Ke=n=>g(b[n],1,1,()=>{b[n]=null});return{c(){S(t.$$.fragment),l=q(),e=B("div"),S(r.$$.fragment),a=q(),i=B("div");for(let n=0;n<v.length;n+=1)v[n].c();c=q(),S(o.$$.fragment),k=q(),h=B("div"),d=B("div"),S(z.$$.fragment),u=q(),_=B("p"),j=ne(D),re=q(),S(G.$$.fragment),Ce=q(),Y=B("div"),S(H.$$.fragment),je=q(),fe=B("p"),ue=ne(s[3]),Ee=q(),S(K.$$.fragment),me=q(),Q=B("div"),le=B("p"),$e=ne(ce),pe=q(),N=B("div"),S(J.$$.fragment),De=q(),E&&E.c(),ge=q(),S(W.$$.fragment),he=q(),O=B("div");for(let n=0;n<b.length;n+=1)b[n].c();this.h()},l(n){V(t.$$.fragment,n),l=M(n),e=U(n,"DIV",{class:!0});var f=F(e);V(r.$$.fragment,f),a=M(f),i=U(f,"DIV",{class:!0});var L=F(i);for(let te=0;te<v.length;te+=1)v[te].l(L);L.forEach(m),f.forEach(m),c=M(n),V(o.$$.fragment,n),k=M(n),h=U(n,"DIV",{class:!0});var A=F(h);d=U(A,"DIV",{class:!0});var ee=F(d);V(z.$$.fragment,ee),u=M(ee),_=U(ee,"P",{});var p=F(_);j=se(p,D),p.forEach(m),ee.forEach(m),re=M(A),V(G.$$.fragment,A),Ce=M(A),Y=U(A,"DIV",{class:!0});var R=F(Y);V(H.$$.fragment,R),je=M(R),fe=U(R,"P",{});var ye=F(fe);ue=se(ye,s[3]),ye.forEach(m),R.forEach(m),Ee=M(A),V(K.$$.fragment,A),A.forEach(m),me=M(n),Q=U(n,"DIV",{class:!0});var Le=F(Q);le=U(Le,"P",{class:!0});var qe=F(le);$e=se(qe,ce),qe.forEach(m),Le.forEach(m),pe=M(n),N=U(n,"DIV",{class:!0});var _e=F(N);V(J.$$.fragment,_e),De=M(_e),E&&E.l(_e),_e.forEach(m),ge=M(n),V(W.$$.fragment,n),he=M(n),O=U(n,"DIV",{class:!0});var Me=F(O);for(let te=0;te<b.length;te+=1)b[te].l(Me);Me.forEach(m),this.h()},h(){w(i,"class","row"),w(e,"class","m-t-20px row justify-between items-center"),w(d,"class","row items-center gap-2"),w(Y,"class","row items-center gap-2"),w(h,"class","col m-b-15px justify-between text-[var(--secondary-text)] text-0.85em"),w(le,"class","text-[0.9em] text-[var(--secondary-text)] m-t-20px m-b-40px flex-1 line-clamp-3"),w(Q,"class","col sm:h-100px md:h-160px"),w(N,"class","row justify-between text-0.8em font-400"),w(O,"class","row flex-wrap")},m(n,f){P(t,n,f),C(n,l,f),C(n,e,f),P(r,e,null),I(e,a),I(e,i);for(let L=0;L<v.length;L+=1)v[L]&&v[L].m(i,null);C(n,c,f),P(o,n,f),C(n,k,f),C(n,h,f),I(h,d),P(z,d,null),I(d,u),I(d,_),I(_,j),I(h,re),P(G,h,null),I(h,Ce),I(h,Y),P(H,Y,null),I(Y,je),I(Y,fe),I(fe,ue),I(h,Ee),P(K,h,null),C(n,me,f),C(n,Q,f),I(Q,le),I(le,$e),C(n,pe,f),C(n,N,f),P(J,N,null),I(N,De),E&&E.m(N,null),C(n,ge,f),P(W,n,f),C(n,he,f),C(n,O,f);for(let L=0;L<b.length;L+=1)b[L]&&b[L].m(O,null);X=!0},p(n,f){const L={};f&1&&(L.alt=n[0].name),f&1&&(L.src=be(n[0].logo)),t.$set(L);const A={};if(f&1&&(A.title=n[0].name),r.$set(A),f&1){Z=T(n[0].links);let p;for(p=0;p<Z.length;p+=1){const R=Ae(n,Z,p);v[p]?(v[p].p(R,f),$(v[p],1)):(v[p]=Ne(R),v[p].c(),$(v[p],1),v[p].m(i,null))}for(ae(),p=Z.length;p<v.length;p+=1)He(p);ie()}(!X||f&1)&&D!==(D=n[0].type+"")&&oe(j,D),(!X||f&8)&&oe(ue,n[3]),(!X||f&1)&&ce!==(ce=n[0].shortDescription+"")&&oe($e,ce);const ee={};if(f&2052&&(ee.$$scope={dirty:f,ctx:n}),J.$set(ee),n[2]!==n[1]?E?(E.p(n,f),f&6&&$(E,1)):(E=Re(n),E.c(),$(E,1),E.m(N,null)):E&&(ae(),g(E,1,1,()=>{E=null}),ie()),f&1){x=T(n[0].skills);let p;for(p=0;p<x.length;p+=1){const R=ze(n,x,p);b[p]?(b[p].p(R,f),$(b[p],1)):(b[p]=Ye(R),b[p].c(),$(b[p],1),b[p].m(O,null))}for(ae(),p=x.length;p<b.length;p+=1)Ke(p);ie()}},i(n){if(!X){$(t.$$.fragment,n),$(r.$$.fragment,n);for(let f=0;f<Z.length;f+=1)$(v[f]);$(o.$$.fragment,n),$(z.$$.fragment,n),$(G.$$.fragment,n),$(H.$$.fragment,n),$(K.$$.fragment,n),$(J.$$.fragment,n),$(E),$(W.$$.fragment,n);for(let f=0;f<x.length;f+=1)$(b[f]);X=!0}},o(n){g(t.$$.fragment,n),g(r.$$.fragment,n),v=v.filter(Boolean);for(let f=0;f<v.length;f+=1)g(v[f]);g(o.$$.fragment,n),g(z.$$.fragment,n),g(G.$$.fragment,n),g(H.$$.fragment,n),g(K.$$.fragment,n),g(J.$$.fragment,n),g(E),g(W.$$.fragment,n),b=b.filter(Boolean);for(let f=0;f<b.length;f+=1)g(b[f]);X=!1},d(n){n&&(m(l),m(e),m(c),m(k),m(h),m(me),m(Q),m(pe),m(N),m(ge),m(he),m(O)),y(t,n),y(r),ve(v,n),y(o,n),y(z),y(G),y(H),y(K),y(J),E&&E.d(),y(W,n),ve(b,n)}}}function $t(s){let t,l;return t=new rt({props:{color:s[0].color,href:`${we}/projects/${s[0].slug}`,$$slots:{default:[mt]},$$scope:{ctx:s}}}),{c(){S(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){P(t,e,r),l=!0},p(e,[r]){const a={};r&1&&(a.color=e[0].color),r&1&&(a.href=`${we}/projects/${e[0].slug}`),r&2063&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){l||($(t.$$.fragment,e),l=!0)},o(e){g(t.$$.fragment,e),l=!1},d(e){y(t,e)}}}function pt(s,t,l){let e,r,a,{project:i}=t;return s.$$set=c=>{"project"in c&&l(0,i=c.project)},s.$$.update=()=>{s.$$.dirty&1&&et(i.period.from,i.period.to),s.$$.dirty&1&&l(3,e=tt(i.period.from,i.period.to)),s.$$.dirty&1&&l(2,r=`${Fe(i.period.from.getMonth())} ${i.period.from.getFullYear()}`),s.$$.dirty&1&&l(1,a=i.period.to?`${Fe(i.period.to.getMonth())} ${i.period.to.getFullYear()}`:"now")},[i,a,r,e]}class gt extends Se{constructor(t){super(),Ve(this,t,pt,$t,Ie,{project:0})}}function Je(s,t,l){const e=s.slice();return e[7]=t[l],e}function Oe(s,t,l){const e=s.slice();return e[10]=t[l],e}function ht(s){let t=s[10].name+"",l;return{c(){l=ne(t)},l(e){l=se(e,t)},m(e,r){C(e,l,r)},p(e,r){r&1&&t!==(t=e[10].name+"")&&oe(l,t)},d(e){e&&m(l)}}}function Te(s){let t,l;function e(){return s[4](s[10])}return t=new Pe({props:{active:s[10].isSelected,classes:"text-0.8em",$$slots:{default:[ht]},$$scope:{ctx:s}}}),t.$on("click",e),{c(){S(t.$$.fragment)},l(r){V(t.$$.fragment,r)},m(r,a){P(t,r,a),l=!0},p(r,a){s=r;const i={};a&1&&(i.active=s[10].isSelected),a&8193&&(i.$$scope={dirty:a,ctx:s}),t.$set(i)},i(r){l||($(t.$$.fragment,r),l=!0)},o(r){g(t.$$.fragment,r),l=!1},d(r){y(t,r)}}}function _t(s){let t,l,e=T(s[1]),r=[];for(let i=0;i<e.length;i+=1)r[i]=Ge(Je(s,e,i));const a=i=>g(r[i],1,1,()=>{r[i]=null});return{c(){t=B("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){t=U(i,"DIV",{class:!0});var c=F(t);for(let o=0;o<r.length;o+=1)r[o].l(c);c.forEach(m),this.h()},h(){w(t,"class","projects-list mt-5 svelte-f4z73x")},m(i,c){C(i,t,c);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(t,null);l=!0},p(i,c){if(c&2){e=T(i[1]);let o;for(o=0;o<e.length;o+=1){const k=Je(i,e,o);r[o]?(r[o].p(k,c),$(r[o],1)):(r[o]=Ge(k),r[o].c(),$(r[o],1),r[o].m(t,null))}for(ae(),o=e.length;o<r.length;o+=1)a(o);ie()}},i(i){if(!l){for(let c=0;c<e.length;c+=1)$(r[c]);l=!0}},o(i){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)g(r[c]);l=!1},d(i){i&&m(t),ve(r,i)}}}function dt(s){let t,l,e,r,a="Could not find anything...",i;return l=new ke({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){t=B("div"),S(l.$$.fragment),e=q(),r=B("p"),r.textContent=a,this.h()},l(c){t=U(c,"DIV",{class:!0});var o=F(t);V(l.$$.fragment,o),e=M(o),r=U(o,"P",{class:!0,["data-svelte-h"]:!0}),We(r)!=="svelte-1jyyf6v"&&(r.textContent=a),o.forEach(m),this.h()},h(){w(r,"class","font-300"),w(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(c,o){C(c,t,o),P(l,t,null),I(t,e),I(t,r),i=!0},p:Xe,i(c){i||($(l.$$.fragment,c),i=!0)},o(c){g(l.$$.fragment,c),i=!1},d(c){c&&m(t),y(l)}}}function Ge(s){let t,l;return t=new gt({props:{project:s[7]}}),{c(){S(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){P(t,e,r),l=!0},p(e,r){const a={};r&2&&(a.project=e[7]),t.$set(a)},i(e){l||($(t.$$.fragment,e),l=!0)},o(e){g(t.$$.fragment,e),l=!1},d(e){y(t,e)}}}function vt(s){let t,l,e,r,a,i,c=T(s[0]),o=[];for(let u=0;u<c.length;u+=1)o[u]=Te(Oe(s,c,u));const k=u=>g(o[u],1,1,()=>{o[u]=null}),h=[dt,_t],d=[];function z(u,_){return u[1].length===0?0:1}return e=z(s),r=d[e]=h[e](s),{c(){t=B("div");for(let u=0;u<o.length;u+=1)o[u].c();l=q(),r.c(),a=Be(),this.h()},l(u){t=U(u,"DIV",{class:!0});var _=F(t);for(let D=0;D<o.length;D+=1)o[D].l(_);_.forEach(m),l=M(u),r.l(u),a=Be(),this.h()},h(){w(t,"class","projects-filters")},m(u,_){C(u,t,_);for(let D=0;D<o.length;D+=1)o[D]&&o[D].m(t,null);C(u,l,_),d[e].m(u,_),C(u,a,_),i=!0},p(u,_){if(_&5){c=T(u[0]);let j;for(j=0;j<c.length;j+=1){const re=Oe(u,c,j);o[j]?(o[j].p(re,_),$(o[j],1)):(o[j]=Te(re),o[j].c(),$(o[j],1),o[j].m(t,null))}for(ae(),j=c.length;j<o.length;j+=1)k(j);ie()}let D=e;e=z(u),e===D?d[e].p(u,_):(ae(),g(d[D],1,1,()=>{d[D]=null}),ie(),r=d[e],r?r.p(u,_):(r=d[e]=h[e](u),r.c()),$(r,1),r.m(a.parentNode,a))},i(u){if(!i){for(let _=0;_<c.length;_+=1)$(o[_]);$(r),i=!0}},o(u){o=o.filter(Boolean);for(let _=0;_<o.length;_+=1)g(o[_]);g(r),i=!1},d(u){u&&(m(t),m(l),m(a)),ve(o,u),d[e].d(u)}}}function bt(s){let t,l;return t=new ot({props:{title:Ze,$$slots:{default:[vt]},$$scope:{ctx:s}}}),{c(){S(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){P(t,e,r),l=!0},p(e,[r]){const a={};r&8195&&(a.$$scope={dirty:r,ctx:e}),t.$set(a)},i(e){l||($(t.$$.fragment,e),l=!0)},o(e){g(t.$$.fragment,e),l=!1},d(e){y(t,e)}}}function kt(s,t,l){let e=xe.filter(k=>Ue.some(h=>h.skills.some(d=>d.slug===k.slug))),r="",a=[];const i=k=>e.some(h=>h.slug===k&&h.isSelected),c=k=>{l(0,e=e.map(h=>(h.slug===k&&(h.isSelected=!i(k)),h)))};Qe(()=>{if(location.search){const d=new URLSearchParams(location.search).get("item");d&&l(3,r=d)}});const o=k=>c(k.slug);return s.$$.update=()=>{s.$$.dirty&9&&l(1,a=Ue.filter(k=>{const h=e.every(z=>!z.isSelected)||k.skills.some(z=>e.some(u=>u.isSelected&&u.slug===z.slug)),d=r.trim().length===0||k.name.trim().toLowerCase().includes(r.trim().toLowerCase());return h&&d}))},[e,a,c,r,o]}class At extends Se{constructor(t){super(),Ve(this,t,kt,bt,Ie,{})}}export{At as component};