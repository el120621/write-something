(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const f=document.getElementById("save-drawing"),r=document.getElementById("canvas"),o=r.getContext("2d"),i=document.getElementById("color-picker"),e=document.getElementById("pen-width");let t=!1,s=0,c=0;(async()=>{const l=await(await fetch("https://6480778ff061e6ec4d495544.mockapi.io/api/v1/drawing/1")).json(),a=new Image;a.src=l.drawing,a.onload=function(){o.drawImage(a,0,0)}})();function p(n){t=!0,[s,c]=[n.offsetX,n.offsetY]}function d(n){t&&(o.strokeStyle=i.value,o.lineWidth=e.value,o.lineJoin="round",o.lineCap="round",o.beginPath(),o.moveTo(s,c),o.lineTo(n.offsetX,n.offsetY),o.stroke(),[s,c]=[n.offsetX,n.offsetY])}function u(){t=!1}r.addEventListener("mousedown",p),r.addEventListener("mousemove",d),r.addEventListener("mouseup",u),r.addEventListener("mouseout",u),i.addEventListener("change",d),e.addEventListener("input",d),document.getElementById("save-drawing").addEventListener("submit",async function(n){if(n.preventDefault(),!grecaptcha.getResponse())return alert("pls answer recaptcha"),n.target.reset();try{const a=r.toDataURL(),m={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({drawing:a})},h=await(await fetch("https://6480778ff061e6ec4d495544.mockapi.io/api/v1/drawing/1",m)).json();grecaptcha.reset(),n.target.reset(),f.style.display="none"}catch(a){alert("Error saving",a.message)}})});
