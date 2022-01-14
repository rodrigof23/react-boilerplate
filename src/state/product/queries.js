import axios from 'axios';

export const loadProducts = () => {
  return axios
    .get('https://5eb454842b81f700163084b3.mockapi.io/products')
    .then(res => res.data)
    .catch(err => err.response.data);
};
