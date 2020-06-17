import Link from "next/link";
import React from "react";
import styled from "styled-components";

type Props = {
  id: string;
  title: string;
  price: number;
  images: string[];
};

const ItemCard: React.FC<Props> = ({ id, title, price, images }) => {
  return (
    <Link href={`/product/${id}`}>
      <Container>
        <Image src={images[0]} alt="" />

        <div>
          <h3>{title}</h3>
          <Price>${price}</Price>
        </div>
      </Container>
    </Link>
  );
};

export default ItemCard;

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  text-align: start;
  border: 5px solid transparent;
  outline: 1px solid ${({ theme }) => theme.colors.lightGray};
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
