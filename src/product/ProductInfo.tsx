import React from "react";
import styled from "styled-components";
import SquareButton from "../ui/SquareButton";
import { Product } from "./types";

type Props = {
  product: Product;
};

const ProductInfo: React.FC<Props> = ({ product }) => {
  return (
    <Container>
      <ModelId>{product.modelId}</ModelId>
      <h1>{product.title}</h1>
      <Button>
        <p>Size</p>
        <p>48</p>
      </Button>
      <h3>${product.price}</h3>
      <SquareButton>Place in Cart</SquareButton>
    </Container>
  );
};

export default ProductInfo;

const Container = styled.div`
  flex: 0.75;
  padding: 3rem;
`;

const ModelId = styled.h5`
  font-weight: normal;
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 1rem 0;
`;
