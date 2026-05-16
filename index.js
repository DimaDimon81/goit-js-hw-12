import{a as S,S as P,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const R="https://pixabay.com/api/",q="55818365-f46e85877dddde0fe9a7f00cb";async function h(s,o=1){return(await S.get(R,{params:{key:q,q:s,page:o,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const p=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".load-more"),M=new P(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b> ${t.likes}</p>
          <p><b>Views</b> ${t.views}</p>
          <p><b>Comments</b> ${t.comments}</p>
          <p><b>Downloads</b> ${t.downloads}</p>
        </div>
      </li>
    `).join("");p.insertAdjacentHTML("beforeend",o),M.refresh()}function B(){p.innerHTML=""}function L(){m.classList.remove("hidden")}function b(){m.classList.add("hidden")}function w(){g.classList.remove("hidden")}function c(){g.classList.add("hidden")}const f=document.querySelector(".form"),$=document.querySelector(".load-more"),v=15;let a="",i=1,d=0;f.addEventListener("submit",async s=>{if(s.preventDefault(),a=s.target.elements["search-text"].value.trim(),!a){n.error({message:"Please fill in the field!",position:"topRight"});return}i=1,B(),c(),L();try{const o=await h(a,i);if(d=o.totalHits,o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(o.hits);const t=Math.ceil(d/v);i>=t?(c(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):w()}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{b(),f.reset()}});$.addEventListener("click",async()=>{i+=1,L(),c();try{const s=await h(a,i);y(s.hits);const o=Math.ceil(d/v);i>=o?(c(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):w();const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
