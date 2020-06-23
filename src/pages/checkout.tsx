import React from "react";
import styled from "styled-components";
import SEO from "../app/SEO";
import Loader from "../ui/Loader";

const checkout = () => {
  return (
    <Loader>
      <SEO title="Checkout" />
      <Container>
        <Left>yo</Left>
        <Right>hi</Right>
      </Container>
    </Loader>
  );
};

export default checkout;

const Container = styled.div`
  display: flex;
  min-height: 100%;
`;

const Left = styled.section`
  width: 100%;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.shadedWhite};
`;

const Right = styled.section`
  width: 100%;
  padding: 3rem;
`;
