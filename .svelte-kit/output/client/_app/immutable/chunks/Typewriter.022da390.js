import{s as x,P as E,f as N,g as S,h as j,d as p,k as C,j as P,T as v,i as k,Q as A,R as L,S as M,U as q,o as D,q as I}from"./scheduler.98946c50.js";import{S as W,i as Q,a as R,t as U}from"./index.bf7cacb7.js";function V(r){let n,a;const d=r[6].default,s=E(d,r,r[5],null);return{c(){n=N("div"),s&&s.c(),this.h()},l(e){n=S(e,"DIV",{style:!0,class:!0});var i=j(n);s&&s.l(i),i.forEach(p),this.h()},h(){C(n,"--cursor-color",typeof r[0]=="string"?r[0]:"black"),P(n,"class","svelte-1371njd"),v(n,"cursor",r[0])},m(e,i){k(e,n,i),s&&s.m(n,null),r[7](n),a=!0},p(e,[i]){s&&s.p&&(!a||i&32)&&A(s,d,e,e[5],a?M(d,e[5],i,null):L(e[5]),null),(!a||i&1)&&C(n,"--cursor-color",typeof e[0]=="string"?e[0]:"black"),(!a||i&1)&&v(n,"cursor",e[0])},i(e){a||(R(s,e),a=!0)},o(e){U(s,e),a=!1},d(e){e&&p(n),s&&s.d(e),r[7](null)}}}function z(r,n,a){let{$$slots:d={},$$scope:s}=n,{interval:e=30}=n,{cascade:i=!1}=n,{loop:f=!1}=n,{cursor:m=!0}=n;const g=q();if(i&&f)throw new Error("`cascade` mode should not be used with `loop`!");const h=t=>new Promise(o=>setTimeout(o,t)),T=(t,o)=>Math.floor(Math.random()*(o-t)+t),w=async()=>Array.isArray(e)?await h(e[T(0,e.length)]):await h(e),_=async(t,{loopAnimation:o}={loopAnimation:!1})=>{const l=t.textContent.split("");t.textContent="",t.classList.add("typing");for(const u of l){if(t.textContent+=u,o&&t.textContent===l.join("")){for(typeof f=="number"?await h(f):await h(1500);t.textContent!=="";)t.textContent=t.textContent.slice(0,-1),await w();return}await w()}t.nextSibling!==null&&t.classList.remove("typing")};let c;D(async()=>{const t=[...c.children].map(o=>f?o.textContent.split(""):{el:o,text:o.textContent.split("")});if(i){t.forEach(({el:o})=>o.textContent="");for(const{el:o,text:l}of t)o.textContent=l.join(""),await _(o);g("done")}else if(f){const o=c.firstChild.tagName.toLowerCase(),l=document.createElement(o);for(c.childNodes.forEach(u=>u.remove()),c.appendChild(l);;)for(const u of t)l.textContent=u.join(""),await _(l,{loopAnimation:!0})}else(l=>l.childNodes.length===1&&l.childNodes[0].nodeType===3)(c)?await _(c):await new Promise(l=>{t.forEach(async({el:u},y)=>{await _(u),y+1===t.length&&l()})}),g("done")});function b(t){I[t?"unshift":"push"](()=>{c=t,a(1,c)})}return r.$$set=t=>{"interval"in t&&a(2,e=t.interval),"cascade"in t&&a(3,i=t.cascade),"loop"in t&&a(4,f=t.loop),"cursor"in t&&a(0,m=t.cursor),"$$scope"in t&&a(5,s=t.$$scope)},[m,c,e,i,f,s,d,b]}class G extends W{constructor(n){super(),Q(this,n,z,V,x,{interval:2,cascade:3,loop:4,cursor:0})}}export{G as T};
