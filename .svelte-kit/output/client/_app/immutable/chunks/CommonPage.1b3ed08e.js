import{s as P,q as V,P as j,a as v,f as T,c as C,g as S,h as k,d as u,j as q,i as b,J as w,$ as J,Q,R,S as z,l as A,m as B,p as F}from"./scheduler.98946c50.js";import{S as G,i as H,f as K,b as y,d as D,m as E,a as g,t as $,e as I}from"./index.bf7cacb7.js";import{M as L}from"./app.247d5b4e.js";import{T as N}from"./TabTitle.35e3da03.js";function O(i){let e;return{c(){e=A(i[0])},l(s){e=B(s,i[0])},m(s,m){b(s,e,m)},p(s,m){m&1&&F(e,s[0])},d(s){s&&u(e)}}}function U(i){let e,s,m,f,n,r,_,a;function M(t){i[3](t)}let h={};i[0]!==void 0&&(h.title=i[0]),e=new N({props:h}),V.push(()=>K(e,"title",M)),n=new L({props:{classes:i[1],$$slots:{default:[O]},$$scope:{ctx:i}}});const p=i[2].default,o=j(p,i,i[4],null);return{c(){y(e.$$.fragment),m=v(),f=T("div"),y(n.$$.fragment),r=v(),_=T("div"),o&&o.c(),this.h()},l(t){D(e.$$.fragment,t),m=C(t),f=S(t,"DIV",{class:!0});var l=k(f);D(n.$$.fragment,l),r=C(l),_=S(l,"DIV",{class:!0});var c=k(_);o&&o.l(c),c.forEach(u),l.forEach(u),this.h()},h(){q(_,"class","col gap-5 flex-1"),q(f,"class","flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12")},m(t,l){E(e,t,l),b(t,m,l),b(t,f,l),E(n,f,null),w(f,r),w(f,_),o&&o.m(_,null),a=!0},p(t,[l]){const c={};!s&&l&1&&(s=!0,c.title=t[0],J(()=>s=!1)),e.$set(c);const d={};l&2&&(d.classes=t[1]),l&17&&(d.$$scope={dirty:l,ctx:t}),n.$set(d),o&&o.p&&(!a||l&16)&&Q(o,p,t,t[4],a?z(p,t[4],l,null):R(t[4]),null)},i(t){a||(g(e.$$.fragment,t),g(n.$$.fragment,t),g(o,t),a=!0)},o(t){$(e.$$.fragment,t),$(n.$$.fragment,t),$(o,t),a=!1},d(t){t&&(u(m),u(f)),I(e,t),I(n),o&&o.d(t)}}}function W(i,e,s){let{$$slots:m={},$$scope:f}=e,{title:n="Title"}=e,{classe:r=""}=e;function _(a){n=a,s(0,n)}return i.$$set=a=>{"title"in a&&s(0,n=a.title),"classe"in a&&s(1,r=a.classe),"$$scope"in a&&s(4,f=a.$$scope)},[n,r,m,_,f]}class tt extends G{constructor(e){super(),H(this,e,W,U,P,{title:0,classe:1})}}export{tt as C};
