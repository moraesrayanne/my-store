import { CartsService } from '@/services/http/carts';
import { Products } from '@/services/http/products/types';

export const getCarts = async () => {
  try {
    const { data } = await CartsService.getCarts();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCartsById = async (id: number) => {
  try {
    const { data } = await CartsService.getCartsById(id);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCartByUser = async (userId: number) => {
  try {
    const { data } = await CartsService.getCartByUser(userId);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addNewProduct = async (userId: number, products: Products[]) => {
  try {
    const { data } = await CartsService.addNewProduct(userId, products);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async (
  id: number,
  userId: number,
  products: Products[],
) => {
  try {
    const { data } = await CartsService.updateProduct(id, userId, products);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const { data } = await CartsService.deleteProduct(id);

    return data;
  } catch (error) {
    console.error(error);
  }
};
