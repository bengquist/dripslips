import React from "react";
import styled from "styled-components";
import formatCurrency from "../common/formatCurrency";
import { flexSpaceBetweenAlignCenter, gap } from "../style/helpers";
import { useCart } from "./CartContext";

const CartTotal = () => {
  const { state } = useCart();

  return (
    <Container css={gap({ bottom: 2 })}>
      <Row>
        <p>Subtotal:</p>
        <p>{formatCurrency(state.totalPrice)}</p>
      </Row>
      <Row>
        <p>Estimated Tax by Zip Code</p>
        <p>{formatCurrency(state.totalPrice)}</p>
      </Row>
      <Row>
        <h2>Total:</h2>
        <h2>{formatCurrency(state.totalPrice)}</h2>
      </Row>
    </Container>
  );
};

export default CartTotal;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 3rem;
`;

const Row = styled.div`
  ${flexSpaceBetweenAlignCenter};

  > p {
    font-size: 1.25rem;
    font-weight: normal;
  }
`;
