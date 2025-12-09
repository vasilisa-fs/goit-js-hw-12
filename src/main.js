import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  hideLoadMoreButton,
  showLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.btn');
let page;
let query;
let totalHits;

form.addEventListener('submit', async event => {
  event.preventDefault();
  clearGallery();
  hideLoadMoreButton();
  query = form.elements['search-text'].value.trim();
  page = 1;
  if (!query) {
    iziToast.warning({
      message: 'Please, enter a query!',
      position: 'topRight',
    });
    return;
  }
  showLoader();
  try {
    const images = await getImagesByQuery(query, page);
    if (images.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!.',
        position: 'topRight',
      });
      return;
    }
    totalHits = images.totalHits;
    createGallery(images.hits);
    if (totalHits > 15) showLoadMoreButton();
  } catch (err) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
    console.error(err);
  } finally {
    hideLoader();
    event.target.reset();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page++;
  hideLoadMoreButton();
  showLoader();

  try {
    const images = await getImagesByQuery(query, page);
    createGallery(images.hits);

    const itemEl = document.querySelector('.gallery-item');
    let rect = itemEl.getBoundingClientRect();
    window.scrollBy(0, (rect.height + 24) * 2);

    if (page * 15 >= totalHits) {
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      return;
    }
    showLoadMoreButton();
  } catch (err) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
    console.error(err);
  } finally {
    hideLoader();
  }
});
