export type Carts = {
  id: number;
  userId: number;
  date: string;
  products: ProductsCart[];
};

export type ProductsCart = {
  productId: number;
  quantity: number;
};

export type BaseFilter = {
  limit?: number;
  offset?: number;
  startDate?: string;
  endDate?: string;
};
