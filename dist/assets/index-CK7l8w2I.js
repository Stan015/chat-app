(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();window.$$=document.querySelectorAll.bind(document);window.$=document.querySelector.bind(document);Node.prototype.on=window.on=function(s,o){this.addEventListener(s,o)};NodeList.prototype.__proto__=Array.prototype;NodeList.prototype.on=NodeList.prototype.addEventListener=function(s,o){this.forEach(function(r,i){r.on(s,o)})};const d=$("header"),a=getComputedStyle(d),c=$("#toggle-header");c.on("click",()=>{d.classList.toggle("show-header"),a.display==="none"?(c.style.transition="left 290ms",c.style.left="0rem"):c.style.left="8rem"});document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("messageInput"),o=document.getElementById("sendButton"),r=document.getElementById("chats");o.addEventListener("click",function(e){e.preventDefault();const n=s.value.trim();n!==""&&(i(n),s.value="")});function i(e){const n=document.createElement("div");n.classList.add("message"),n.innerHTML=`
        <p>${e}</p>
        <span class="timestamp">${t()}</span>
        <span class="tick">&#10003;&#10003;</span>
      `,r.appendChild(n),r.scrollTop=r.scrollHeight}function t(){const e=new Date,n=e.getHours().toString().padStart(2,"0"),l=e.getMinutes().toString().padStart(2,"0");return`${n}:${l}`}});
