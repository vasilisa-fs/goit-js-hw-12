import{a as f,S as g,i as n}from"./assets/vendor-Cq7ZUixy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="53596027-14db46c58a21bf017fbb87848",y=r=>f.get("https://pixabay.com/api/",{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data.hits),u=document.querySelector(".gallery"),p=document.querySelector(".loader"),L=new g(".gallery a",{captionsData:"alt",captionDelay:250}),b=r=>{const s=r.map(({webformatURL:a,largeImageURL:i,tags:e,likes:t,views:o,comments:d,downloads:m})=>`
        <li class="gallery-item">
          <a href="${i}">
            <img src="${a}" alt="${e}" />
          </a>
          <ul class="stats-list">
  <li class="stats-item">
    <span class="stats-title">Likes</span>
    <span class="stats-value">${t}</span>
  </li>
  <li class="stats-item">
    <span class="stats-title">Views</span>
    <span class="stats-value">${o}</span>
  </li>
  <li class="stats-item">
    <span class="stats-title">Comments</span>
    <span class="stats-value">${d}</span>
  </li>
  <li class="stats-item">
    <span class="stats-title">Downloads</span>
    <span class="stats-value">${m}</span>
  </li>
</ul>
</li>
    `).join("");u.insertAdjacentHTML("beforeend",s),L.refresh()};function v(){u.innerHTML=""}function q(){p.classList.remove("hidden")}function l(){p.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",r=>{r.preventDefault(),v();const s=c.elements["search-text"].value.trim();if(!s){n.warning({message:"Please, enter a query!",position:"topRight"});return}q(),y(s).then(a=>{if(l(),a.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!.",position:"topRight"});return}b(a),r.target.reset()}).catch(a=>{l(),n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(a)})});
//# sourceMappingURL=index.js.map
