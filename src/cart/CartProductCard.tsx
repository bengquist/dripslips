import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { Product } from "../product/types";
import { flexSpaceBetweenAlignCenter } from "../style/helpers";

type Props = ComponentPropsWithoutRef<"button"> & {
  product: Product;
  quantity: number;
};

const CartProductCard: React.FC<Props> = ({ product, quantity, ...props }) => {
  const count = quantity > 1 ? `(${quantity})` : "";

  return (
    <Link href="/product/[id]" as={`/product/${product.id}`}>
      <Container {...props}>
        <Inner>
          <Image src={product.images[0]} />
          <h3>
            {product.title} ajkdshfk lajsdlhfa kljfshkajlsdf {count}
          </h3>
        </Inner>
        <h3 style={{ fontWeight: "normal" }}>${product.price}</h3>
      </Container>
    </Link>
  );
};

export default CartProductCard;

const Container = styled.button`
  ${flexSpaceBetweenAlignCenter};
  width: 100%;
  text-transform: uppercase;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  transition: 0.3s;

  :focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

const Inner = styled.div`
  ${flexSpaceBetweenAlignCenter};
  padding-right: 1.5rem;
  text-align: left;
`;

const Image = styled.img`
  flex: 1;
  object-fit: contain;
  max-width: 6rem;
  max-height: 6rem;
  margin-right: 1.5rem;
`;
