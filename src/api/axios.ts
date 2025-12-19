import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.7.81.243/projects/plie-api/public/api',
  timeout: 10000,
});

export const setAuthToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default api;