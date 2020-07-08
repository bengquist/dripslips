import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import formatCurrency from "../common/formatCurrency";
import { ProductFieldsFragment } from "../generated/graphql";
import { flexSpaceBetweenAlignStart, lightGrayOutline } from "../style/helpers";
import ProductCardOptions from "./ProductCardOptions";

type Props = {
  product: ProductFieldsFragment;
};

const ItemCard: React.FC<Props> = ({ product }) => {
  const [detailSelected, setDetailSelected] = useState(product.details[0].id);

  return (
    <Link href="product/[id]" as={`/product/${product.id}`}>
      <Container>
        <Image src={product.details[0].productImages[0].url} alt="" />

        <Info>
          <div>
            <h3>{product.title}</h3>
            <Price>{formatCurrency(product.price)}</Price>
          </div>

          <ProductCardOptions
            productDetails={product.details}
            selected={detailSelected}
            onSelect={(id) => setDetailSelected(id)}
          />
        </Info>
      </Container>
    </Link>
  );
};

export default ItemCard;

const Container = styled.button`
  ${lightGrayOutline};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  text-align: start;
  border: 5px solid transparent;
  transition: 0.2s ease-out;

  :hover,
  :focus {
    border: 5px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  margin-bottom: 2rem;
`;

const Price = styled.p`
  font-weight: normal;
  margin-top: 0.25rem;
`;

const Info = styled.div`
  width: 100%;
  ${flexSpaceBetweenAlignStart}
`;
