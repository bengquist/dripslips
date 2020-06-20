import React from "react";
import styled from "styled-components";
import { gap } from "../style/helpers";
import { useCart } from "./CartContext";
import CartProductCard from "./CartProductCard";

const CartList = () => {
  const { state } = useCart();

  const renderProducts = () => {
    return state.products.map(({ product }) => (
      <CartProductCard product={product} />
    ));
  };

  return (
    <Container>
      <Header>
        <h1>MY SHOPPING BAG</h1>
        <span>(3 items)</span>
      </Header>

      {renderProducts()}
    </Container>
  );
};

export default CartList;

const Container = styled.div``;

const Header = styled.div`
  ${gap({ right: 0.5 })};
  display: flex;
  align-items: flex-end;
  margin: 0;
  padding: 0;

  > span {
    font-weight: normal;
  }
`;
