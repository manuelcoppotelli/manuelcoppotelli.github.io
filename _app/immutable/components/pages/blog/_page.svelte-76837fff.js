import{S as w,i as B,s as I,H as A,k as $,l as d,m as h,h as f,p,b as _,J as C,K as D,L as N,f as i,t as u,x as g,y as m,z as v,A as b,e as S,g as V,d as q,M as z}from"../../../chunks/index-2e64fc78.js";import{S as G,B as H}from"../../../chunks/section-7dc61734.js";function J(r){let e,n;const s=r[1].default,t=A(s,r,r[0],null);return{c(){e=$("div"),t&&t.c(),this.h()},l(l){e=d(l,"DIV",{class:!0});var o=h(e);t&&t.l(o),o.forEach(f),this.h()},h(){p(e,"class","grid-container svelte-1i7nkbm")},m(l,o){_(l,e,o),t&&t.m(e,null),n=!0},p(l,[o]){t&&t.p&&(!n||o&1)&&C(t,s,l,l[0],n?N(s,l[0],o,null):D(l[0]),null)},i(l){n||(i(t,l),n=!0)},o(l){u(t,l),n=!1},d(l){l&&f(e),t&&t.d(l)}}}function K(r,e,n){let{$$slots:s={},$$scope:t}=e;return r.$$set=l=>{"$$scope"in l&&n(0,t=l.$$scope)},[t,s]}class L extends w{constructor(e){super(),B(this,e,K,J,I,{})}}function y(r,e,n){const s=r.slice();return s[1]=e[n],s}function E(r){let e,n;return e=new H({props:{post:r[1]}}),{c(){g(e.$$.fragment)},l(s){m(e.$$.fragment,s)},m(s,t){v(e,s,t),n=!0},p(s,t){const l={};t&1&&(l.post=s[1]),e.$set(l)},i(s){n||(i(e.$$.fragment,s),n=!0)},o(s){u(e.$$.fragment,s),n=!1},d(s){b(e,s)}}}function M(r){let e,n,s=r[0].posts,t=[];for(let o=0;o<s.length;o+=1)t[o]=E(y(r,s,o));const l=o=>u(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();e=S()},l(o){for(let c=0;c<t.length;c+=1)t[c].l(o);e=S()},m(o,c){for(let a=0;a<t.length;a+=1)t[a].m(o,c);_(o,e,c),n=!0},p(o,c){if(c&1){s=o[0].posts;let a;for(a=0;a<s.length;a+=1){const k=y(o,s,a);t[a]?(t[a].p(k,c),i(t[a],1)):(t[a]=E(k),t[a].c(),i(t[a],1),t[a].m(e.parentNode,e))}for(V(),a=s.length;a<t.length;a+=1)l(a);q()}},i(o){if(!n){for(let c=0;c<s.length;c+=1)i(t[c]);n=!0}},o(o){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)u(t[c]);n=!1},d(o){z(t,o),o&&f(e)}}}function O(r){let e,n,s;return n=new L({props:{$$slots:{default:[M]},$$scope:{ctx:r}}}),{c(){e=$("div"),g(n.$$.fragment),this.h()},l(t){e=d(t,"DIV",{class:!0});var l=h(e);m(n.$$.fragment,l),l.forEach(f),this.h()},h(){p(e,"class","container")},m(t,l){_(t,e,l),v(n,e,null),s=!0},p(t,l){const o={};l&17&&(o.$$scope={dirty:l,ctx:t}),n.$set(o)},i(t){s||(i(n.$$.fragment,t),s=!0)},o(t){u(n.$$.fragment,t),s=!1},d(t){t&&f(e),b(n)}}}function P(r){let e,n,s;return n=new G({props:{align:"top",title:"All posts",$$slots:{default:[O]},$$scope:{ctx:r}}}),{c(){e=$("section"),g(n.$$.fragment),this.h()},l(t){e=d(t,"SECTION",{id:!0});var l=h(e);m(n.$$.fragment,l),l.forEach(f),this.h()},h(){p(e,"id","blog")},m(t,l){_(t,e,l),v(n,e,null),s=!0},p(t,[l]){const o={};l&17&&(o.$$scope={dirty:l,ctx:t}),n.$set(o)},i(t){s||(i(n.$$.fragment,t),s=!0)},o(t){u(n.$$.fragment,t),s=!1},d(t){t&&f(e),b(n)}}}function T(r,e,n){let{data:s}=e;return r.$$set=t=>{"data"in t&&n(0,s=t.data)},[s]}class F extends w{constructor(e){super(),B(this,e,T,P,I,{data:0})}}export{F as default};
