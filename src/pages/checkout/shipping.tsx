import React from "react";
import styled from "styled-components";
import { flexAlignCenter } from "../../style/helpers";

const CheckoutShippingPage = () => {
  return (
    <Container>
      <Section>yo</Section>
      <Aside>aside</Aside>
    </Container>
  );
};

export default CheckoutShippingPage;

const Container = styled.div`
  ${flexAlignCenter}
  height: 100%;
`;

const Section = styled.section`
  height: 100%;
  width: 70%;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.shadedWhite};
`;

const Aside = styled.aside`
  width: 30%;
  height: 100%;
`;
