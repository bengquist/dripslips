import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import formatCurrency from "../common/formatCurrency";
import CenterModal from "../modal/CenterModal";
import {
  flexAlignCenter,
  flexSpaceBetweenAlignCenter,
  gap,
  lightGrayOutline,
} from "../style/helpers";
import IconButton from "../ui/IconButton";
import SquareButton from "../ui/SquareButton";
import { useCart } from "./CartContext";
import { REMOVE_CART_ITEM } from "./useCartReducer";

type Props = {
  product: any;
};

const CartItemCard: React.FC<Props> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useCart();
  const { product, color, size, quantity } = props.product;

  const removeCartItem = () => {
    dispatch({ type: REMOVE_CART_ITEM, payload: product.id });
    setShowModal(false);
  };

  const modal = (
    <CenterModal onClose={() => setShowModal(false)} isVisible={showModal}>
      <CenterModal.Header onClose={() => setShowModal(false)}>
        REMOVE THIS PRODUCT
      </CenterModal.Header>
      <CenterModal.Body>
        <p>Do you wish to remove this product from your shopping bag?</p>
        <div css={[flexAlignCenter, gap({ right: 1 })]}>
          <SquareButton variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </SquareButton>
          <SquareButton onClick={removeCartItem}>Delete</SquareButton>
        </div>
      </CenterModal.Body>
    </CenterModal>
  );

  return (
    <>
      <Container>
        <Image src={product.details[0].productImages[0].url} alt="" />
        <Info css={gap({ bottom: 1 })}>
          <Link href="/product/[id]" as={`/product/${product.id}`}>
            <button>
              <h2>{product.title}</h2>
            </button>
          </Link>
          <p>Reference: {product.modelId}</p>
          <p>{color}</p>
          <p>Size: {size}</p>
          <IconButton onClick={() => setShowModal(true)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </IconButton>
        </Info>
        <Right>
          <Quantity>{quantity}</Quantity>
          <p>{formatCurrency(product.price)}</p>
        </Right>
      </Container>

      {modal}
    </>
  );
};

export default CartItemCard;

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

const Right = styled.div`
  ${flexSpaceBetweenAlignCenter}
  min-width: 10rem;
`;
