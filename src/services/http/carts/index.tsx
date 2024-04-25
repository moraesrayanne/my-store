import api from '@/services/api';
import { BaseFilter, Carts } from '@/services/http/carts/types';
import { Products } from '../products/types';

export const CartsService = {
  getCarts: async (params?: BaseFilter) => {
    const response = await api.get<Carts[]>('/carts', { params });

    return response;
  },

  getCartsById: async (id: number) => {
    const response = await api.get<Carts>(`/carts/${id}`);

    return response;
  },

  getCartByUser: async (userId: number) => {
    const response = await api.get<Carts[]>(`/carts/user/${userId}`);

    return response;
  },

  addNewProduct: async (userId: number, products: Products[]) => {
    const date = new Date().toISOString();

    const response = await api.post<Carts>(`/carts`, {
      userId,
      date,
      products,
    });

    return response;
  },

  updateProduct: async (id: number, userId: number, products: Products[]) => {
    const date = new Date().toISOString();

    const response = await api.put<Carts>(`/carts/${id}`, {
      userId,
      date,
      products,
    });

    return response;
  },

  deleteProduct: async (id: number) => {
    const response = await api.delete<Carts>(`/carts/${id}`);

    return response;
  },
};
