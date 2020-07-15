import Link from "next/link";
import React from "react";
import styled from "styled-components";
import formatCurrency from "../common/formatCurrency";
import SideModal, { SideModalProps } from "../modal/SideModal";
import routes from "../routing/routes";
import { flexSpaceBetweenAlignCenter } from "../style/helpers";
import SquareButton from "../ui/SquareButton";
import { useCart } from "./CartContext";
import CartItemModalCard from "./CartItemModalCard";

const CartSideModal: React.FC<SideModalProps> = (props) => {
  const { state } = useCart();

  const cartProducts = state.items.map((cartItem) => (
    <CartItemModalCard onClick={props.onClose} cartItem={cartItem} />
  ));

  const renderBody = () => {
    if (state.count > 0) {
      return (
        <>
          {cartProducts}

          <TotalPrice>
            <h3>TOTAL</h3>
            <h2 style={{ fontWeight: "normal" }}>
              {formatCurrency(state.total)}
            </h2>
          </TotalPrice>
          <Link href={routes.CART}>
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
        YOUR SHOPPING BAG {state.count ? `(${state.count})` : ""}
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
