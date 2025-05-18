import{A as x,S as h,N as v,K as b,a as S,i as _}from"./assets/vendor-DQ7YkHXt.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(s){if(s.ep)return;s.ep=!0;const t=r(s);fetch(s.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const o=["HTML/CSS","JavaScript","React","Node.js","React Native","TypeScript"],e=[document.getElementById("techSkillsList1"),document.getElementById("techSkillsList2"),document.getElementById("techSkillsList3"),document.getElementById("techSkillsList4")],r="dark-theme-before-green-bg",c="dark-theme-white-before-bg dark-theme-green-color";function s(t,a,i){const m=[...a,...a];t.innerHTML="",m.forEach(w=>{const n=document.createElement("li");n.textContent=w,n.className="tech-skills-item",n.dataset.darkClass=i,t.appendChild(n)})}e.forEach((t,a)=>{const i=a<2?r:c;s(t,o,i)}),e.forEach(t=>{t.style.animation="none",t.offsetWidth}),e.forEach((t,a)=>{const i=a<2?"scroll":"scrollReverse";t.style.animation=`${i} 20s linear infinite`}),window.applyCurrentTheme&&window.applyCurrentTheme()});const k="/portfolio/assets/rectangle_10-1x-DS47dIhD.webp",y="/portfolio/assets/rectangle_10-2x-DU_ojPW7.webp",L="/portfolio/assets/rectangle_7-1x-BvQ2yhmP.webp",j="/portfolio/assets/rectangle_7-2x-hPsa5XuA.webp",J="/portfolio/assets/rectangle_8-1x-BtRtNHdl.webp",E="/portfolio/assets/rectangle_8-2x-OFPltsJc.webp",N="/portfolio/assets/rectangle_9-1x-CuQIrMwe.webp",C="/portfolio/assets/rectangle_9-2x-QRwMd70J.webp",R="/portfolio/assets/rectangle_11-1x-BuPXadzo.webp",B="/portfolio/assets/rectangle_11-2x-BhB0T2hc.webp",M="/portfolio/assets/rectangle_6-1x-D-2iLjCe.webp",G="/portfolio/assets/rectangle_6-2x-ChOxBkAb.webp",I="/portfolio/assets/rectangle_4-1x-DMed2GQT.webp",O="/portfolio/assets/rectangle_4-2x-DAFG9cjY.webp",P="/portfolio/assets/rectangle_5-1x-CvYOjpY5.webp",T="/portfolio/assets/rectangle_5-2x-C5onla4d.webp",q="/portfolio/assets/rectangle_12-1x-AQAIHBn9.webp",D="/portfolio/assets/rectangle_12-2x-DbiVpPmq.webp",$="/portfolio/assets/first_screen_1-1x-CcEroZ5o.webp",A="/portfolio/assets/first_screen_1-2x-DOLr-Tsf.webp",H="/portfolio/assets/icons-nD2TS3l1.svg",p=[{image1x:k,image2x:y,stack:"React, JavaScript, Node JS, Git",name:"power pulse webservice"},{image1x:L,image2x:j,stack:"React, JavaScript, Node JS, Git",name:"mimino website"},{image1x:J,image2x:E,stack:"React, JavaScript, Node JS, Git",name:"vyshyvanka vibes Landing Page"},{image1x:N,image2x:C,stack:"React, JavaScript, Node JS, Git",name:"green harvest online store"},{image1x:R,image2x:B,stack:"React, JavaScript, Node JS, Git",name:"wallet webservice"},{image1x:M,image2x:G,stack:"React, JavaScript, Node JS, Git",name:"chego jewelry website"},{image1x:I,image2x:O,stack:"React, JavaScript, Node JS, Git",name:"energy flow webservice"},{image1x:P,image2x:T,stack:"React, JavaScript, Node JS, Git",name:"fruitbox online store"},{image1x:q,image2x:D,stack:"React, JavaScript, Node JS, Git",name:"English excellence webservice"},{image1x:$,image2x:A,stack:"React, JavaScript, Node JS, Git",name:"starlight studio landing page"}],Q=document.querySelector(".projects-list"),g=document.getElementById("load-more");let l=0;const d=3;function V(o){return o.map(e=>`
      <li class="projects-item">
        <picture>
          <source srcset="${e.image1x} 1x, ${e.image2x} 2x" type="image/webp" />
          <img
            src="${e.image1x}"
            alt="${e.name}"
            class="projects-img"
            loading="lazy"
            width="320"
            height="184"
          />
        </picture>
        <div class="projects-info-container">
          <div class="projects-info">
            <p class="projects-item-stack">${e.stack}</p>
            <h3 class="projects-item-titel">${e.name}</h3>
          </div>
          <a
            href="https://github.com/VladKorniiko/portfolio"
            target="_blank"
            class="projects-btn"
          >
            VISIT
            <svg class="projects-icon" width="24" height="24">
              <use href="${H}#icon-diagonal-arrow"></use>
            </svg>
          </a>
        </div>
      </li>
    `).join("")}function u(){const o=p.slice(l,l+d);Q.insertAdjacentHTML("beforeend",V(o)),l+=d,l>=p.length&&(g.style.display="none")}u();g.addEventListener("click",u);const K=document.querySelector(".accordion-container");new x(K,{duration:500,showMultiple:!1,openOnInit:[0]});const z=document.querySelectorAll(".ac-header");z.forEach(o=>{o.addEventListener("click",()=>{const e=o.querySelector(".ac-trigger");e&&e.click()})});const f=document.querySelector(".swiper-wrapper"),F=document.querySelector(".reviews-section");new h(".swiper",{modules:[v,b],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1280:{slidesPerView:2,spaceBetween:32}},keyboard:{enabled:!0}});const W=new IntersectionObserver((o,e)=>{o.forEach(r=>{r.isIntersecting&&(X(),e.unobserve(r.target))})},{root:null,threshold:.5});async function Y(){try{return(await S.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch{_.show({title:"Error",message:"Something went wrong",backgroundColor:"red",titleColor:"#fff",messageColor:"#fff",position:"topRight"});const e=U();f.innerHTML=e}}async function X(){const e=(await Y()).map(r=>`<li class="swiper-slide">
      <blockquote class="swiper-slide-text">${r.review}</blockquote>
        <div class="swiper-slide-content-wrapper"><img
          src="${r.avatar_url}"
          alt="Blockquote author"
          class="swiper-slide-image"
        />
        <h3 class="swiper-slide-title">${r.author}</h3></div>
    </li>`);f.innerHTML=e.join("")}function U(){return'<li class="swiper-slide"><p>Not found</p></li>'}W.observe(F);
//# sourceMappingURL=index.js.map
