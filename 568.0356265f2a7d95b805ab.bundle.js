"use strict";(self.webpackChunkslides=self.webpackChunkslides||[]).push([[568],{4568:(e,t,n)=>{function s(e){let t=null,n=null;document.addEventListener("touchstart",(e=>{const{clientX:s,clientY:l}=e.touches[0];t=s,n=l}),!1),document.addEventListener("touchmove",(s=>{if(!t||!n)return;const l=s.touches[0];let c=t-l.clientX,u=n-l.clientY;Math.abs(c)>Math.abs(u)&&e(c>0?"+":"-"),t=null,n=null}),!1)}n.r(t),n.d(t,{swipeEvent:()=>s})}}]);