import React from "react";
import styled from "styled-components";
import formatCurrency from "../common/formatCurrency";
import { flexSpaceBetweenAlignCenter, gap } from "../style/helpers";
import { useCart } from "./CartContext";
import CartProductModalCard from "./CartProductModalCard";

const CartSideBar = () => {
  const { state } = useCart();

  return (
    <Container>
      <HeaderTitle>MY SHOPPING BAG ({state.productCount})</HeaderTitle>
      <div>
        {state.cart.map((cartProduct) => (
          <CartProductModalCard {...cartProduct} />
        ))}
      </div>

      <PriceInfo>
        <Row>
          <p>Subtotal:</p>
          <p>{formatCurrency(state.totalPrice)}</p>
        </Row>
        <Row>
          <p>Shipping:</p>
          <p>{formatCurrency(0)}</p>
        </Row>
        <Row>
          <p>Tax:</p>
          <p>{formatCurrency(0)}</p>
        </Row>
      </PriceInfo>

      <Row>
        <h2>Total:</h2>
        <h2>{formatCurrency(state.totalPrice)}</h2>
      </Row>
    </Container>
  );
};

export default CartSideBar;

const Container = styled.aside`
  width: 40%;
  height: 100%;
  padding: 3rem;
  ${gap({ bottom: 1 })}
`;

const HeaderTitle = styled.h2`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

const Row = styled.div`
  ${flexSpaceBetweenAlignCenter}
`;

const PriceInfo = styled.div`
  ${gap({ bottom: 1 })}
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
