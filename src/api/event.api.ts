import api from './axios';

export const getEventsApi = async () => {
  return api.post('/events-listing', {}, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};