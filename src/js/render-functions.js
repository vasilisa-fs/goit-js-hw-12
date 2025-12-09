import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.btn');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
export const createGallery = images => {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" />
          </a>
          <ul class="stats-list">
  <li class="stats-item">
    <span class="stats-title">Likes</span>
    <span class="stats-value">${likes}</span>
  </li>
  <li class="stats-item">
    <span class="stats-title">Views</span>
    <span class="stats-value">${views}</span>
  </li>
  <li class="stats-item">
    <span class="stats-title">Comments</span>
    <span class="stats-value">${comments}</span>
  </li>
  <li class="stats-item">
    <span class="stats-title">Downloads</span>
    <span class="stats-value">${downloads}</span>
  </li>
</ul>
</li>
    `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
};
export const clearGallery = () => {
  gallery.innerHTML = '';
};

export const showLoader = () => {
  loader.classList.remove('hidden');
};

export const hideLoader = () => {
  loader.classList.add('hidden');
};
export const showLoadMoreButton = () => {
  loadMoreBtn.classList.remove('hidden');
};

export const hideLoadMoreButton = () => {
  loadMoreBtn.classList.add('hidden');
};
