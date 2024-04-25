import { ProductsService } from '@/services/http/products';
import { Categories, Products } from '@/services/http/products/types';

export const getProducts = async () => {
  try {
    const { data } = await ProductsService.getProducts();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id: number) => {
  try {
    const { data } = await ProductsService.getProductById(id);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductByCategory = async ({ category }: Categories) => {
  try {
    const { data } = await ProductsService.getProductByCategory({
      category,
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategory = async () => {
  try {
    const { data } = await ProductsService.getCategory();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = async (newProduct: Products) => {
  try {
    const { data } = await ProductsService.createProduct(newProduct);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async (id: number, product: Products) => {
  try {
    const { data } = await ProductsService.updateProduct(id, product);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const { data } = await ProductsService.deleteProduct(id);

    return data;
  } catch (error) {
    console.error(error);
  }
};
