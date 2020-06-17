import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { lightGrayOutline } from "../style/helpers";
import { Product } from "./types";

type Props = {
  product: Product;
};

const ItemCard: React.FC<Props> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <Container>
        <Image src={product.images[0]} alt="" />

        <div>
          <h3>{product.title}</h3>
          <Price>${product.price}</Price>
        </div>
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
