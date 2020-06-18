import Link from "next/link";
import React from "react";
import styled from "styled-components";
import SideModal, { SideModalProps } from "../modal/SideModal";
import { flexSpaceBetweenAlignCenter } from "../style/helpers";
import SquareButton from "../ui/SquareButton";
import { useCart } from "./CartContext";
import CartProductCard from "./CartProductCard";

const CartSideModal: React.FC<SideModalProps> = (props) => {
  const { state } = useCart();

  const cartProducts = state.products.map(({ product, quantity }) => (
    <CartProductCard product={product} quantity={quantity} />
  ));

  const renderBody = () => {
    if (state.productCount > 0) {
      return (
        <>
          {cartProducts}

          <TotalPrice>
            <h3>TOTAL</h3>
            <h2 style={{ fontWeight: "normal" }}>${state.totalPrice}</h2>
          </TotalPrice>
          <Link href="/cart">
            <SquareButton onClick={props.onClose}>
              View Your Shopping Bag
            </SquareButton>
          </Link>
        </>
      );
    } else {
      return <div>Bag is empty</div>;
    }
  };

  return (
    <SideModal {...props}>
      <SideModal.Header onClose={props.onClose}>
        YOUR SHOPPING BAG {state.productCount ? `(${state.productCount})` : ""}
      </SideModal.Header>
      <SideModal.Body>{renderBody()}</SideModal.Body>
    </SideModal>
  );
};

export default CartSideModal;

const TotalPrice = styled.div`
  ${flexSpaceBetweenAlignCenter}
  height: 6rem;
`;
