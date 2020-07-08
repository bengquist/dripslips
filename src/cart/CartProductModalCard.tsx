import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import formatCurrency from "../common/formatCurrency";
import { ProductFieldsFragment } from "../generated/graphql";
import { flexSpaceBetweenAlignCenter, gap } from "../style/helpers";

type Props = ComponentPropsWithoutRef<"button"> & {
  product: ProductFieldsFragment;
  quantity: number;
};

const CartProductModalCard: React.FC<Props> = ({
  product,
  quantity,
  ...props
}) => {
  return (
    <Link href="/product/[id]" as={`/product/${product.id}`}>
      <Container {...props}>
        <Info>
          <Image src={product.details[0].productImages[0].url} />
          <div css={gap({ bottom: 1 })}>
            <p>{product.title}</p>
            <p>Quantity: {quantity}</p>
            <p>{formatCurrency(product.price)}</p>
          </div>
        </Info>
      </Container>
    </Link>
  );
};

export default CartProductModalCard;

const Container = styled.button`
  ${flexSpaceBetweenAlignCenter};
  width: 100%;
  padding: 1rem 0;
  text-transform: uppercase;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  transition: 0.3s;

  :focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

const Info = styled.div`
  ${flexSpaceBetweenAlignCenter};
  text-align: left;
`;

const Image = styled.img`
  flex: 1;
  object-fit: contain;
  max-width: 6rem;
  max-height: 6rem;
  margin-right: 1.5rem;
`;
