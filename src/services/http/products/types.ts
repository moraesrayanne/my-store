export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type Categories = {
  category: 'electronics' | 'jewelery' | "men's clothing" | "women's clothing";
};
