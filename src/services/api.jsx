import axios from 'axios';

const api = axios.create({
  baseURL: 'http://44.202.166.106:5000/api', // Backend API URL
});

export default api;
