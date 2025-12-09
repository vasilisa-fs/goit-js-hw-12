import axios from 'axios';

const API_KEY = '53596027-14db46c58a21bf017fbb87848';
export const getImagesByQuery = async (query,page) => {
  try{ 
    const res = await axios.get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page:15
      },
    });
    return res.data;
  } catch (err){
    throw err
  }
};
