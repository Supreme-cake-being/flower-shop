(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();$(".responsive").slick({prevArrow:'<button type="button" class="my-slick-prev"><svg class="arrow-left-icon" width="61" height="61"><use href="./img/icons.svg#icon-arrow-left"></use></svg></button>',nextArrow:'<button type="button" class="my-slick-next"><svg class="arrow-right-icon" width="61" height="61"><use href="./img/icons.svg#icon-arrow-right"></use></svg></button>',infinite:!0,speed:300,slidesToScroll:1,adaptiveHeight:!0,slidesToShow:3,variableWidth:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]});(()=>{const s=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),r=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),s.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};o.addEventListener("click",r),n.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(s.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(function(s){typeof s.matches!="function"&&(s.matches=s.msMatchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||function(o){for(var n=this,r=(n.document||n.ownerDocument).querySelectorAll(o),e=0;r[e]&&r[e]!==n;)++e;return Boolean(r[e])}),typeof s.closest!="function"&&(s.closest=function(o){for(var n=this;n&&n.nodeType===1;){if(n.matches(o))return n;n=n.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var s=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");s.forEach(function(r){r.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("data-modal"),c=document.querySelector('.modal[data-modal="'+t+'"]');c.classList.add("active"),o.classList.add("active")})}),n.forEach(function(r){r.addEventListener("click",function(e){var t=this.closest(".modal");t.classList.remove("active"),o.classList.remove("active")})}),document.body.addEventListener("keyup",function(r){var e=r.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),o.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});
