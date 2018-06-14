import axios from 'axios';

const BASE_URL = 'http://f0cba49d.ngrok.io/api/products/1';

export {getProductData};

function getProductData(username) {
  //const url = `${BASE_URL}/product/${username}`;
  const url = `${BASE_URL}`;
  return axios.get(url).then(response => response.data);

}