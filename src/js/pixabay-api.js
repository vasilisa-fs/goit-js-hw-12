import axios from 'axios';

const API_KEY = '53596027-14db46c58a21bf017fbb87848';
export const getImagesByQuery = query => {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => res.data.hits);
};
