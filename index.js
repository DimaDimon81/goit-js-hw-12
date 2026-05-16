import{a as S,S as v,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const q="https://pixabay.com/api/",P="55818365-f46e85877dddde0fe9a7f00cb";async function p(s,t=1){return(await S.get(q,{params:{key:P,q:s,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),y=document.querySelector(".load-more"),R=new v(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const t=s.map(o=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}">
          <img
            class="gallery-image"
            src="${o.webformatURL}"
            alt="${o.tags}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b> ${o.likes}</p>
          <p><b>Views</b> ${o.views}</p>
          <p><b>Comments</b> ${o.comments}</p>
          <p><b>Downloads</b> ${o.downloads}</p>
        </div>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",t),R.refresh()}function B(){m.innerHTML=""}function L(){h.classList.remove("hidden")}function b(){h.classList.add("hidden")}function w(){y.classList.remove("hidden")}function l(){y.classList.add("hidden")}const f=document.querySelector(".form"),M=document.querySelector(".load-more");let a="",i=1,d=0;f.addEventListener("submit",async s=>{if(s.preventDefault(),a=s.target.elements["search-text"].value.trim(),!a){n.error({message:"Please fill in the field!",position:"topRight"});return}i=1,B(),l(),L();try{const t=await p(a,i);if(d=t.totalHits,t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),d>15&&w()}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{b(),f.reset()}});M.addEventListener("click",async()=>{i+=1,L(),l();try{const s=await p(a,i);g(s.hits);const t=Math.ceil(d/15);i>=t?(l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):w();const o=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
