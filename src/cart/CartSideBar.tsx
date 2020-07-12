import React from "react";
import styled from "styled-components";
import formatCurrency from "../common/formatCurrency";
import { headerHeight } from "../header/Header";
import { flexSpaceBetweenAlignCenter, gap } from "../style/helpers";
import { useCart } from "./CartContext";
import CartItemModalCard from "./CartItemModalCard";

const CartSideBar = () => {
  const { state } = useCart();

  return (
    <Container>
      <HeaderTitle>MY SHOPPING BAG ({state.count})</HeaderTitle>
      <div>
        {state.items.map((cartProduct) => (
          <CartItemModalCard {...cartProduct} />
        ))}
      </div>

      <PriceInfo>
        <Row>
          <p>Subtotal:</p>
          <p>{formatCurrency(state.total)}</p>
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
        <h2>{formatCurrency(state.total)}</h2>
      </Row>
    </Container>
  );
};

export default CartSideBar;

const Container = styled.aside`
  position: sticky;
  top: ${headerHeight};
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
  * {
    margin-bottom: 1rem;
  }
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
