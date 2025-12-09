import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  clearGallery();
  const query = form.elements['search-text'].value.trim();
  if (!query) {
    iziToast.warning({
      message: 'Please, enter a query!',
      position: 'topRight',
    });
    return;
  }
  showLoader();

  getImagesByQuery(query)
    .then(images => {
      hideLoader();
      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!.',
          position: 'topRight',
        });
        return;
      }
      createGallery(images);
      event.target.reset();
    })
    .catch(err => {
      hideLoader();
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
      console.error(err);
    });
});
