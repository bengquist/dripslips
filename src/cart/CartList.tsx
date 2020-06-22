import React from "react";
import styled from "styled-components";
import { flexAlignCenter, gap } from "../style/helpers";
import LinkButton from "../ui/LinkButton";
import SquareButton from "../ui/SquareButton";
import { useCart } from "./CartContext";
import CartProductCard from "./CartProductCard";

const CartList = () => {
  const { state } = useCart();

  const renderProducts = () => {
    return state.products.map((product) => (
      <CartProductCard product={product} />
    ));
  };

  return (
    <Container>
      <LinkButton>Fake Payment</LinkButton>

      <HeaderNav>
        <SquareButton variant="secondary">Continue Shopping</SquareButton>
        <SquareButton>Proceed</SquareButton>
      </HeaderNav>

      <Header>
        <h1>MY SHOPPING BAG</h1>
        <span>({state.productCount} items)</span>
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

const HeaderNav = styled.div`
  ${flexAlignCenter};
  ${gap({ right: 1 })};
`;
