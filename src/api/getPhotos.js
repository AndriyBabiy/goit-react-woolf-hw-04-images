import axios from 'axios';

const API_KEY = '42185018-8d9cd3aefdae43a32ddab8929';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`?key=${API_KEY}&q=${query}&page=${page}`);

  return data;
};
