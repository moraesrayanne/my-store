import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
// import { NODE_ENV, uri } from '@/constants/environment-variables';

const axiosInstance = axios.create({
  // baseURL: uri[NODE_ENV],
  baseURL: 'https://fakestoreapi.com',
});

// axiosInstance.interceptors.request.use(async (config) => {
//   // Declaramos um token manualmente para teste.
//   const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9';

//   if (token) {
//     axiosInstance.defaults.headers.authorization = `Bearer ${token}`;
//   }

//   return config;
// });

const api = (axios: AxiosInstance) => {
  return {
    get: function <T>(url: string, config: AxiosRequestConfig = {}) {
      return axios.get<T>(url, config);
    },
    put: function <T>(
      url: string,
      body: unknown,
      config: AxiosRequestConfig = {},
    ) {
      return axios.put<T>(url, body, config);
    },
    post: function <T>(
      url: string,
      body: unknown,
      config: AxiosRequestConfig = {},
    ) {
      return axios.post<T>(url, body, config);
    },
    delete: function <T>(url: string, config: AxiosRequestConfig = {}) {
      return axios.delete<T>(url, config);
    },
  };
};

export default api(axiosInstance);
