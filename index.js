import{A as u}from"./assets/vendor-DftXzQBe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function l(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(o){if(o.ep)return;o.ep=!0;const e=l(o);fetch(o.href,e)}})();document.addEventListener("DOMContentLoaded",function(){const a=["HTML/CSS","JavaScript","React","Node.js","React Native","TypeScript"],t=[document.getElementById("techSkillsList1"),document.getElementById("techSkillsList2"),document.getElementById("techSkillsList3"),document.getElementById("techSkillsList4")],l="dark-theme-before-green-bg",r="dark-theme-white-before-bg dark-theme-green-color";function o(e,s,c){const f=[...s,...s];e.innerHTML="",f.forEach(x=>{const n=document.createElement("li");n.textContent=x,n.className="tech-skills-item",n.dataset.darkClass=c,e.appendChild(n)})}t.forEach((e,s)=>{const c=s<2?l:r;o(e,a,c)}),t.forEach(e=>{e.style.animation="none",e.offsetWidth}),t.forEach((e,s)=>{const c=s<2?"scroll":"scrollReverse";e.style.animation=`${c} 20s linear infinite`}),window.applyCurrentTheme&&window.applyCurrentTheme()});const h="/portfolio/assets/rectangle_10-1x-DS47dIhD.webp",w="/portfolio/assets/rectangle_10-2x-DU_ojPW7.webp",_="/portfolio/assets/rectangle_7-1x-BvQ2yhmP.webp",b="/portfolio/assets/rectangle_7-2x-hPsa5XuA.webp",S="/portfolio/assets/rectangle_8-1x-BtRtNHdl.webp",v="/portfolio/assets/rectangle_8-2x-OFPltsJc.webp",y="/portfolio/assets/rectangle_9-1x-CuQIrMwe.webp",k="/portfolio/assets/rectangle_9-2x-QRwMd70J.webp",J="/portfolio/assets/rectangle_11-1x-BuPXadzo.webp",L="/portfolio/assets/rectangle_11-2x-BhB0T2hc.webp",j="/portfolio/assets/rectangle_6-1x-D-2iLjCe.webp",N="/portfolio/assets/rectangle_6-2x-ChOxBkAb.webp",C="/portfolio/assets/rectangle_4-1x-DMed2GQT.webp",E="/portfolio/assets/rectangle_4-2x-DAFG9cjY.webp",R="/portfolio/assets/rectangle_5-1x-CvYOjpY5.webp",G="/portfolio/assets/rectangle_5-2x-C5onla4d.webp",B="/portfolio/assets/rectangle_12-1x-AQAIHBn9.webp",P="/portfolio/assets/rectangle_12-2x-DbiVpPmq.webp",I="/portfolio/assets/first_screen_1-1x-CcEroZ5o.webp",O="/portfolio/assets/first_screen_1-2x-DOLr-Tsf.webp",T="/portfolio/assets/icons-nD2TS3l1.svg",p=[{image1x:h,image2x:w,stack:"React, JavaScript, Node JS, Git",name:"power pulse webservice"},{image1x:_,image2x:b,stack:"React, JavaScript, Node JS, Git",name:"mimino website"},{image1x:S,image2x:v,stack:"React, JavaScript, Node JS, Git",name:"vyshyvanka vibes Landing Page"},{image1x:y,image2x:k,stack:"React, JavaScript, Node JS, Git",name:"green harvest online store"},{image1x:J,image2x:L,stack:"React, JavaScript, Node JS, Git",name:"wallet webservice"},{image1x:j,image2x:N,stack:"React, JavaScript, Node JS, Git",name:"chego jewelry website"},{image1x:C,image2x:E,stack:"React, JavaScript, Node JS, Git",name:"energy flow webservice"},{image1x:R,image2x:G,stack:"React, JavaScript, Node JS, Git",name:"fruitbox online store"},{image1x:B,image2x:P,stack:"React, JavaScript, Node JS, Git",name:"English excellence webservice"},{image1x:I,image2x:O,stack:"React, JavaScript, Node JS, Git",name:"starlight studio landing page"}],A=document.querySelector(".projects-list"),d=document.getElementById("load-more");let i=0;const g=3;function D(a){return a.map(t=>`
      <li class="projects-item">
        <picture>
          <source srcset="${t.image1x} 1x, ${t.image2x} 2x" type="image/webp" />
          <img
            src="${t.image1x}"
            alt="${t.name}"
            class="projects-img"
            loading="lazy"
            width="320"
            height="184"
          />
        </picture>
        <div class="projects-info-container">
          <div class="projects-info">
            <p class="projects-item-stack">${t.stack}</p>
            <h3 class="projects-item-titel">${t.name}</h3>
          </div>
          <a
            href="https://github.com/VladKorniiko/portfolio"
            target="_blank"
            class="projects-btn"
          >
            VISIT
            <svg class="projects-icon" width="24" height="24">
              <use href="${T}#icon-diagonal-arrow"></use>
            </svg>
          </a>
        </div>
      </li>
    `).join("")}function m(){const a=p.slice(i,i+g);A.insertAdjacentHTML("beforeend",D(a)),i+=g,i>=p.length&&(d.style.display="none")}m();d.addEventListener("click",m);const M=document.querySelector(".accordion-container");new u(M,{duration:500,showMultiple:!1,openOnInit:[0]});const $=document.querySelectorAll(".ac-header");$.forEach(a=>{a.addEventListener("click",()=>{const t=a.querySelector(".ac-trigger");t&&t.click()})});
//# sourceMappingURL=index.js.map
