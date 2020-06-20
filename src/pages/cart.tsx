import React from "react";
import styled from "styled-components";
import SEO from "../app/SEO";
import CartList from "../cart/CartList";
import Loader from "../ui/Loader";

const CartPage = () => {
  return (
    <Loader>
      <SEO title="My Shopping Bag" />
      <Container>
        <CartList />
      </Container>
    </Loader>
  );
};

export default CartPage;

const Container = styled.div`
  height: 100%;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.shadedWhite};
`;
