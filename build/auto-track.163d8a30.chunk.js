"use strict";(self.webpackChunkmedia_products=self.webpackChunkmedia_products||[]).push([[119],{33488:(t,e,n)=>{n.r(e),n.d(e,{form:()=>c,link:()=>u});var r=n(27127);function o(t){return!!t.ctrlKey||!!t.shiftKey||!!t.metaKey||!!t.button&&1==t.button}function i(t,e){return"_blank"===t.target&&!!e}function u(t,e,n,u){var c=this;return t&&(t instanceof Element?[t]:"toArray"in t?t.toArray():t).forEach(function(t){t.addEventListener("click",function(a){var s,l,f=e instanceof Function?e(t):e,h=n instanceof Function?n(t):n,m=t.getAttribute("href")||t.getAttributeNS("http://www.w3.org/1999/xlink","href")||t.getAttribute("xlink:href")||(null===(s=t.getElementsByTagName("a")[0])||void 0===s?void 0:s.getAttribute("href")),d=(0,r.FJ)(c.track(f,h,null!=u?u:{}),null!==(l=c.settings.timeout)&&void 0!==l?l:500);i(t,m)||o(a)||!m||(a.preventDefault?a.preventDefault():a.returnValue=!1,d.catch(console.error).then(function(){window.location.href=m}).catch(console.error))},!1)}),this}function c(t,e,n,o){var i=this;return t&&(t instanceof HTMLFormElement&&(t=[t]),t.forEach(function(t){if(!(t instanceof Element))throw TypeError("Must pass HTMLElement to trackForm/trackSubmit.");var u=function(u){u.preventDefault?u.preventDefault():u.returnValue=!1;var c,a=e instanceof Function?e(t):e,s=n instanceof Function?n(t):n;(0,r.FJ)(i.track(a,s,null!=o?o:{}),null!==(c=i.settings.timeout)&&void 0!==c?c:500).catch(console.error).then(function(){t.submit()}).catch(console.error)},c=window.jQuery||window.Zepto;c?c(t).submit(u):t.addEventListener("submit",u,!1)})),this}}}]);