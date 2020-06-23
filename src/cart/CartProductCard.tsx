import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import formatCurrency from "../common/formatCurrency";
import { flexAlignCenter, gap, lightGrayOutline } from "../style/helpers";
import IconButton from "../ui/IconButton";
import { CartProduct } from "./types";

type Props = {
  product: CartProduct;
};

const CartProductCard: React.FC<Props> = (props) => {
  const { product, color, size, quantity } = props.product;

  return (
    <Container>
      <Image src={product.images[0]} alt="" />
      <Info css={gap({ bottom: 1 })}>
        <button>
          <h2>{product.title}</h2>
        </button>
        <p>Reference: {product.modelId}</p>
        <p>{color}</p>
        <p>Size: {size}</p>
        <IconButton onClick={() => console.log("delete it")}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </IconButton>
      </Info>
      <div css={[flexAlignCenter, gap({ right: 5 })]}>
        <Quantity>{quantity}</Quantity>
        <p>{formatCurrency(product.price)}</p>
      </div>
    </Container>
  );
};

export default CartProductCard;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  max-height: 18rem;
  background: ${({ theme }) => theme.colors.white};
  padding: 3rem;

  * > p {
    font-weight: normal;
  }
`;

const Info = styled.div`
  width: 100%;
`;

const Image = styled.img`
  max-height: 14.5rem;
  max-width: 14.5rem;
  margin-right: 2rem;
`;

const Quantity = styled.div`
  ${lightGrayOutline}
  padding: 1rem 1.5rem;
`;
