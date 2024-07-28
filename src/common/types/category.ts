import { IProduct } from "./product";

export interface ICategories {
  id?: number | string;
  name: string;
  description: string;
  product: IProduct[];
}
