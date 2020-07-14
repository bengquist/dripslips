import React from "react";
import styled from "styled-components";
import formatCurrency from "../common/formatCurrency";
import {
  flexAlignCenter,
  flexSpaceBetweenAlignCenter,
  gap,
} from "../style/helpers";
import Input from "../ui/Input";
import { useCart } from "./CartContext";

const CartTotal = () => {
  const { state } = useCart();

  return (
    <Container css={gap({ bottom: 2 })}>
      <Row>
        <p>Subtotal:</p>
        <p>{formatCurrency(state.total)}</p>
      </Row>
      <Row>
        <div css={[flexAlignCenter, gap({ right: 1 })]}>
          <p>Estimated Tax by Zip Code</p>
          <Input type="number" />
        </div>
        <p>{formatCurrency(state.total)}</p>
      </Row>
      <Row>
        <h2>Total:</h2>
        <h2>{formatCurrency(state.total)}</h2>
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

  p {
    font-size: 1.2rem;
    font-weight: normal;
  }
`;
