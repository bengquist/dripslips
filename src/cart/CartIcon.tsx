import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { flexCenter } from "../style/helpers";
import { useCart } from "./CartContext";

const CartIcon = () => {
  const { state } = useCart();

  return (
    <Container>
      <FontAwesomeIcon icon={faShoppingBasket} size="lg" />
      {state.productCount > 0 && <Count>{state.productCount}</Count>}
    </Container>
  );
};

export default CartIcon;

const Container = styled.div`
  position: relative;
`;

const Count = styled.div`
  ${flexCenter};

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  width: 0.8rem;
  height: 0.8rem;

  border-radius: 50%;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.55rem;
`;
