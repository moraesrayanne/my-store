import api from '@/services/api';
import { BaseFilter, Users } from './types';

export const UsersService = {
  getUsers: async (params?: BaseFilter) => {
    const response = await api.get<Users[]>('/users', { params });

    return response;
  },

  getUserById: async (id: number) => {
    const response = await api.get<Users>(`/users/${id}`);

    return response;
  },

  createUser: async (data: Users) => {
    const response = await api.post<Users>('/users', data);

    return response;
  },

  updateUser: async (id: number, data: Users) => {
    const response = await api.put<Users>(`/users/${id}`, data);

    return response;
  },

  deleteUser: async (id: number) => {
    const response = await api.delete<Users>(`/users/${id}`);

    return response;
  },
};
