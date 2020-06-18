import React from "react";
import styled from "styled-components";
import SideModal, { SideModalProps } from "../modal.tsx/SideModal";
import { flexSpaceBetweenAlignCenter } from "../style/helpers";
import SquareButton from "../ui/SquareButton";
import { useCart } from "./CartContext";
import CartProductCard from "./CartProductCard";

const CartSideModal: React.FC<SideModalProps> = (props) => {
  const { state } = useCart();

  const cartProducts = state.products.map(({ product, quantity }) => (
    <CartProductCard product={product} quantity={quantity} />
  ));

  return (
    <SideModal {...props}>
      <SideModal.Header onClose={props.onClose}>Cart</SideModal.Header>
      <SideModal.Body>
        {cartProducts}

        <TotalPrice>
          <h3>TOTAL</h3>
          <h2 style={{ fontWeight: "normal" }}>$1,800.00</h2>
        </TotalPrice>
        <SquareButton>View Your Shopping Bag</SquareButton>
      </SideModal.Body>
    </SideModal>
  );
};

export default CartSideModal;

const TotalPrice = styled.div`
  ${flexSpaceBetweenAlignCenter}
  height: 6rem;
`;
