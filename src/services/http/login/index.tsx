import api from '@/services/api';
import { Auth } from './type';

export const LoginService = {
  login: async (data: Auth) => {
    const response = await api.post<Auth>('/auth/login', {
      data,
    });

    return response;
  },
};
