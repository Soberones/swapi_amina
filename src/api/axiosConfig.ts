import axios from 'axios';

axios.defaults.baseURL = 'https://swapi.dev/api/';

const instance = axios.create();

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
