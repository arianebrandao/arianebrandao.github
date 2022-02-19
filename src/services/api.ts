import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://arianebrandao-backend.herokuapp.com/api'
});
