import React from "react";
import styled from "styled-components";
import { Product } from "./types";

type Props = {
  product: Product;
};

const ProductInfo: React.FC<Props> = ({ product }) => {
  return <Container>Info</Container>;
};

export default ProductInfo;

const Container = styled.div`
  flex: 1;
`;
