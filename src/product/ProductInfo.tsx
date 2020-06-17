import React from "react";
import { Product } from "./types";

type Props = {
  product: Product;
};

const ProductInfo: React.FC<Props> = ({ product }) => {
  return <div>Info</div>;
};

export default ProductInfo;
