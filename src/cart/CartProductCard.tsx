import React from "react";
import { Product } from "../product/types";

type Props = {
  product: Product;
};

const CartProductCard: React.FC<Props> = ({ product }) => {
  return <div>{product.title}</div>;
};

export default CartProductCard;
