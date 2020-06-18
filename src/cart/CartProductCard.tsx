import React from "react";
import styled from "styled-components";
import { Product } from "../product/types";
import { flexSpaceBetweenAlignCenter } from "../style/helpers";

type Props = {
  product: Product;
  quantity: number;
};

const CartProductCard: React.FC<Props> = ({ product, quantity }) => {
  return (
    <Container>
      <div css={flexSpaceBetweenAlignCenter}>
        <Image src={product.images[0]} />
        <h4>{product.title}</h4>
      </div>
      <p style={{ fontWeight: "normal" }}>${product.price}</p>
    </Container>
  );
};

export default CartProductCard;

const Container = styled.div`
  ${flexSpaceBetweenAlignCenter};
  width: 100%;
  text-transform: uppercase;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

const Image = styled.img`
  object-fit: contain;
  max-width: 5rem;
  max-height: 5rem;
  margin-right: 0.75rem;
`;
