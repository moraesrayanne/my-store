import api from '@/services/api';
import { Categories, Products } from './types';

export type BaseFilter = {
  limit?: number;
  sort?: string;
};

export const ProductsService = {
  getProducts: async (params?: BaseFilter) => {
    const response = await api.get<Products[]>('/products', { params });

    return response;
  },

  getProductById: async (id: number) => {
    const response = await api.get<Products>(`/products/${id}`);

    return response;
  },

  getProductByCategory: async (category: Categories) => {
    const response = await api.get<Products[]>(
      `/products/category/${category}`,
    );

    return response;
  },

  getCategory: async () => {
    const response = await api.get<Categories[]>('/products/category');

    return response;
  },

  createProduct: async (data: Products) => {
    const response = await api.post<Products>('/products', data);

    return response;
  },

  updateProduct: async (id: number, data: Products) => {
    const response = await api.put<Products>(`/products/${id}`, data);

    return response;
  },

  deleteProduct: async (id: number) => {
    const response = await api.delete<Products>(`/products/${id}`);

    return response;
  },
};
