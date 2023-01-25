import axios from 'axios';
console.log('object :>> ');

const API_KEY = '32386885-8dbf1bc36075d10a6eaf5580b';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const Searchbar = () => {
  return axios(
    `/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(data => );
};
