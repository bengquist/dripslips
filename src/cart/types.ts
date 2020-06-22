import { Product } from "../product/types";

export type CartProduct = {
  product: Product;
  color: string;
  size: number;
  quantity: number;
};
