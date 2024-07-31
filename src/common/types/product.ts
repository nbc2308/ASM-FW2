export interface IProduct {
  id?: number | string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category_id?: string | number;
  description: string;
}
