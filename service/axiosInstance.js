import axios from 'axios';

export const instance = axios.create({
   baseURL: 'http://178.77.0.98:3000/',
   timeout: 3000,
   headers: {'X-Custom-Header': 'foobar'}
});