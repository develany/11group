import axios from 'axios';
import { message } from 'antd';

const API = axios.create({
  baseURL: 'https://usuarios.ronierlima.dev',
});

API.interceptors.response.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    const errorMessage = error.response?.data?.error || 'Ocorreu um erro na requisição.';
    message.error(errorMessage);
    return Promise.reject(error);
  }
);


export { API };
