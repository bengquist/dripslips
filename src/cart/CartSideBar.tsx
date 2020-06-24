import React from "react";
import styled from "styled-components";
import { gap } from "../style/helpers";
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
