import{a as q,S as P,i}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const $="53596027-14db46c58a21bf017fbb87848",p=async(r,t)=>{try{return(await q.get("https://pixabay.com/api/",{params:{key:$,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}catch(a){throw a}},m=document.querySelector(".gallery"),g=document.querySelector(".loader"),y=document.querySelector(".btn"),B=new P(".gallery a",{captionsData:"alt",captionDelay:250}),h=r=>{const t=r.map(({webformatURL:a,largeImageURL:l,tags:e,likes:s,views:o,comments:v,downloads:S})=>`
        <li class="gallery-item">
          <a href="${l}">
            <img src="${a}" alt="${e}" />
          </a>
          <ul class="stats-list">
  <li class="stats-item">
    <span class="stats-title">Likes</span>
    <span class="stats-value">${s}</span>
  </li>
  <li class="stats-item">
    <span class="stats-title">Views</span>
    <span class="stats-value">${o}</span>
  </li>
  <li class="stats-item">
    <span class="stats-title">Comments</span>
    <span class="stats-value">${v}</span>
  </li>
  <li class="stats-item">
    <span class="stats-title">Downloads</span>
    <span class="stats-value">${S}</span>
  </li>
</ul>
</li>
    `).join("");m.insertAdjacentHTML("beforeend",t),B.refresh()},M=()=>{m.innerHTML=""},f=()=>{g.classList.remove("hidden")},L=()=>{g.classList.add("hidden")},w=()=>{y.classList.remove("hidden")},b=()=>{y.classList.add("hidden")},d=document.querySelector(".form"),E=document.querySelector(".btn");let n,c,u;d.addEventListener("submit",async r=>{if(r.preventDefault(),M(),b(),c=d.elements["search-text"].value.trim(),n=1,!c){i.warning({message:"Please, enter a query!",position:"topRight"});return}f();try{const t=await p(c,n);if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!.",position:"topRight"});return}u=t.totalHits,h(t.hits),u>15&&w()}catch(t){i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(t)}finally{L(),r.target.reset()}});E.addEventListener("click",async()=>{n++,b(),f();try{const r=await p(c,n);h(r.hits);let a=document.querySelector(".gallery-item").getBoundingClientRect();if(window.scrollBy(0,(a.height+24)*2),n*15>=u){i.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}w()}catch(r){i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(r)}finally{L()}});
//# sourceMappingURL=index.js.map
