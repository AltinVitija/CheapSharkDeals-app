import axios from 'axios';

const gameAPI = axios.create({
  baseURL: 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15',
});

export default gameAPI;
