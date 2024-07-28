import { ICategories } from "./category";

export interface IProduct {
  id?: number | string;
  name: string;
  price: number;
  image: string;
  category?: ICategories;
}
