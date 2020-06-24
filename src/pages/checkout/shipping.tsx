import React from "react";
import styled from "styled-components";
import SEO from "../../app/SEO";
import CartSideBar from "../../cart/CartSideBar";
import ShippingForm from "../../checkout/ShippingForm";
import { flexAlignCenter } from "../../style/helpers";
import Loader from "../../ui/Loader";

const CheckoutShippingPage = () => {
  return (
    <Loader>
      <SEO title="Identification" />
      <Container>
        <Section>
          <ShippingForm />
        </Section>
        <CartSideBar />
      </Container>
    </Loader>
  );
};

export default CheckoutShippingPage;

const Container = styled.div`
  ${flexAlignCenter}
  min-height: 100%;
`;

const Section = styled.section`
  height: 100%;
  width: 70%;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.shadedWhite};
`;
