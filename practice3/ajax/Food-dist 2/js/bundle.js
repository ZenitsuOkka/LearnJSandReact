!function(){"use strict";window.addEventListener("DOMContentLoaded",(function(){(function(){let t=document.querySelectorAll(".tabheader__item"),e=document.querySelectorAll(".tabcontent"),n=document.querySelector(".tabheader__items");function o(){e.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),t.forEach((t=>{t.classList.remove("tabheader__item_active")}))}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e[n].classList.add("show","fade"),e[n].classList.remove("hide"),t[n].classList.add("tabheader__item_active")}o(),s(),n.addEventListener("click",(function(e){const n=e.target;n&&n.classList.contains("tabheader__item")&&t.forEach(((t,e)=>{n==t&&(o(),s(e))}))}))})(),function(){const t=document.querySelectorAll("[data-modal]"),e=document.querySelector(".modal");function n(){e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}function o(){e.classList.add("show"),e.classList.remove("hide"),document.body.style.overflow="hidden",clearInterval(s)}t.forEach((t=>{t.addEventListener("click",o)})),e.addEventListener("click",(t=>{t.target!==e&&""!=t.target.getAttribute("data-close")||n()})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&e.classList.contains("show")&&n()}));const s=setTimeout(o,3e5);window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(o(),window.removeEventListener("scroll",t))}))}(),function(){const t=document.querySelector(".calculating__result span");let e,n,o,s,a;function i(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function r(){t.textContent=e&&n&&o&&s&&a?"female"===e?Math.round((447.7+9.2*o+3.1*n-4.3*s)*a):Math.round((88.7+13.4*o+4.8*n-5.7*s)*a):"____"}function c(t,n){const o=document.querySelectorAll(t);o.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(a=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),o.forEach((t=>{t.classList.remove(n)})),t.target.classList.add(n),r()}))}))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":o=+e.value;break;case"age":s=+e.value}r()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?a=localStorage.getItem("ratio"):(e=1.375,localStorage.setItem("ratio",1.375)),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),r(),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(){class t{constructor(t,e,n,o,s,a){this.src=t,this.alt=e,this.title=n,this.descr=o,this.price=s;for(var i=arguments.length,r=new Array(i>6?i-6:0),c=6;c<i;c++)r[c-6]=arguments[c];this.classes=r,this.parent=document.querySelector(a),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");0===this.classes.length?(this.classes="menu__item",t.classList.add(this.classes)):this.classes.forEach((e=>t.classList.add(e))),t.innerHTML=`\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `,this.parent.append(t)}}(async function(t){let e=await fetch(t);if(!e.ok)throw new Error(`Could not fetch ${t}, status: ${e.status}`);return await e.json()})("http://localhost:3000/menu").then((e=>{e.forEach((e=>{let{img:n,altimg:o,title:s,descr:a,price:i}=e;new t(n,o,s,a,i,".menu .container").render()}))}))}(),function(){function t(t){const e=document.querySelector(".modal__dialog");e.classList.add("hide"),openModal();const n=document.createElement("div");n.classList.add("modal__dialog"),n.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${t}</div>\n            </div>\n        `,document.querySelector(".modal").append(n),setTimeout((()=>{n.remove(),e.classList.add("show"),e.classList.remove("hide"),closeModal()}),4e3)}document.querySelectorAll("form").forEach((e=>{var n;(n=e).addEventListener("submit",(e=>{e.preventDefault();let o=document.createElement("img");o.src="img/form/spinner.svg",o.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",n.insertAdjacentElement("afterend",o);const s=new FormData(n);(async(t,e)=>{let n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(s.entries()))).then((e=>{console.log(e),t("Спасибо! Скоро мы с вами свяжемся"),o.remove()})).catch((()=>{t("Что-то пошло не так...")})).finally((()=>{n.reset()}))}))}))}(),function(){const t=document.querySelectorAll(".offer__slide"),e=document.querySelector(".offer__slider"),n=document.querySelector(".offer__slider-prev"),o=document.querySelector(".offer__slider-next"),s=document.querySelector("#total"),a=document.querySelector("#current"),i=document.querySelector(".offer__slider-wrapper"),r=document.querySelector(".offer__slider-inner"),c=window.getComputedStyle(i).width;let l=1,d=0;t.length<10?(s.textContent=`0${t.length}`,a.textContent=`0${l}`):(s.textContent=t.length,a.textContent=l),r.style.width=100*t.length+"%",r.style.display="flex",r.style.transition="0.5s all",i.style.overflow="hidden",t.forEach((t=>{t.style.width=c})),e.style.position="relative";const u=document.createElement("ol");dots=[],u.classList.add("carousel-indicators"),u.style.cssText="\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n    ",e.append(u);for(let e=0;e<t.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.style.cssText="\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n        ",0==e&&(t.style.opacity=1),u.append(t),dots.push(t)}function m(t){return+t.replace(/\D/g,"")}function h(){dots.forEach((t=>t.style.opacity=".5")),dots[l-1].style.opacity=1}o.addEventListener("click",(()=>{d==m(c)*(t.length-1)?d=0:d+=m(c),r.style.transform=`translateX(-${d}px)`,l==t.length?l=1:l++,t.length<10?a.textContent=`0${l}`:a.textContent=l,h()})),n.addEventListener("click",(()=>{0==d?d=m(c)*(t.length-1):d-=m(c),r.style.transform=`translateX(-${d}px)`,1==l?l=t.length:l--,t.length<10?a.textContent=`0${l}`:a.textContent=l,h()})),dots.forEach((e=>{e.addEventListener("click",(e=>{const n=e.target.getAttribute("data-slide-to");l=n,d=m(c)*(n-1),r.style.transform=`translateX(-${d}px)`,t.length<10?a.textContent=`0${l}`:a.textContent=l,h()}))}))}(),function(){function t(t){return t>=0&&t<10?"0"+t:t}!function(e,n){const o=document.querySelector(".timer"),s=o.querySelector("#days"),a=o.querySelector("#hours"),i=o.querySelector("#minutes"),r=o.querySelector("#seconds"),c=setInterval(l,1e3);function l(){const e=function(t){const e=Date.parse("2022-06-11")-Date.parse(new Date),n=Math.floor(e/864e5),o=Math.floor(e/1e3%60),s=Math.floor(e/1e3/60%60);return{total:e,days:n,hours:Math.floor(e/36e5%24),minutes:s,seconds:o}}();s.innerHTML=t(e.days),a.innerHTML=t(e.hours),i.innerHTML=t(e.minutes),r.innerHTML=t(e.seconds),e.total<=0&&clearInterval(c)}l()}()}()}))}();
//# sourceMappingURL=bundle.js.map