import axios from 'axios';

const BASE_URL = 'http://46358c60.ngrok.io/api/products/';

export {getProductData};

function getProductData(username) {
  debugger
  const url = `${BASE_URL}/${username}`;
  return axios.get(url).then(response => response.data);

}