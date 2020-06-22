import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { CartProduct } from "./types";

type Props = {
  product: CartProduct;
};

const CartProductCard: React.FC<Props> = (props) => {
  const { product, color, size, quantity } = props.product;

  return (
    <Container>
      <Image src={product.images[0]} alt="" />
      <Info>
        <h3>{product.title}</h3>
        <p>{product.modelId}</p>
        <p>{color}</p>
        <p>{size}</p>
        <button>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </Info>
      <div>{quantity}</div>
      <div>{product.price}</div>
    </Container>
  );
};

export default CartProductCard;

const Container = styled.div`
  display: flex;
  max-height: 15rem;
  background: ${({ theme }) => theme.colors.white};
`;

const Info = styled.div`
  width: 100%;
`;

const Image = styled.img`
  max-width: 15rem;
`;
