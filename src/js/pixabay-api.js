import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55818365-f46e85877dddde0fe9a7f00cb';

export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      page,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}