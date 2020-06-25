import React from "react";
import styled from "styled-components";
import { headerHeight } from "../header/Header";
import { lightGrayOutline } from "../style/helpers";
import ProductListFilter from "./ProductListFilter";

type Props = {
  title: string;
  numberOfProducts: number;
};

const ProductListHeader: React.FC<Props> = ({ title, numberOfProducts }) => {
  return (
    <Container>
      <p>
        <strong>{title}</strong>{" "}
        <ItemCount>({numberOfProducts} looks)</ItemCount>
      </p>

      <ProductListFilter />
    </Container>
  );
};

export default ProductListHeader;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${headerHeight};
  background: white;
  padding-left: 3rem;
  ${lightGrayOutline};

  position: sticky;
  top: ${headerHeight};
`;

const ItemCount = styled.span`
  font-weight: normal;
`;
