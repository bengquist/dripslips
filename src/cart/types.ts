// import { Product } from "../product/types";

import { Product } from "../generated/graphql";

export type CartProduct = {
  product: Product;
  color: string;
  size: number;
  quantity: number;
};
