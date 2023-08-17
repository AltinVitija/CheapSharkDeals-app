import axios from 'axios';

const gameAPI = axios.create({
  baseURL: 'https://www.cheapshark.com/api/',
});

export default gameAPI;
