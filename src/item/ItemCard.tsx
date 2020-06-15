import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  price: number;
  images: string[];
};

const ItemCard: React.FC<Props> = ({ title, price, images }) => {
  return (
    <Container>
      <Image src={images[0]} alt="" />
      <h1>{title}</h1>
      <p>{price}</p>
    </Container>
  );
};

export default ItemCard;

const Container = styled.button`
  outline: none;
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
`;
