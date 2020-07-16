import axios from 'axios';

const BASE_URL = 'http://localhost:9090/';

export {getProductData, getTwitterOAUTH, getTwitterFeed, getLeaderboardData};

function getProductData(productId) {
  const url = `${BASE_URL}/api/products/${productId}`;
  return axios.get(url).then(response => response.data);
}

function getTwitterOAUTH() {	
	const url = `${BASE_URL}/api/twitter/oauth`;
	return axios.get(url).then(response=>response.data)
}

function getTwitterFeed(productId){
	const url = `${BASE_URL}/api/socialreview/${productId}`;
    return axios.get(url).then(response => response.data);	
}

function getLeaderboardData(fetchSize) {
  const url = `${BASE_URL}/api/leaderboard/${fetchSize}`;
  debugger
  console.log(url)
  return axios.get(url).then(response => response.data);
}