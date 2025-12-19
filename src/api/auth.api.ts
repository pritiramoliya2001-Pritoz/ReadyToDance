import api from './axios';

export const loginApi = async (email: string, password: string) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  return api.post('/login', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};