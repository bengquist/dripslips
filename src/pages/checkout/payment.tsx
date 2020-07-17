import React from "react";
import styled from "styled-components";
import SEO from "../../app/SEO";
import CartSideBar from "../../cart/CartSideBar";
import PaymentForm from "../../checkout/PaymentForm";
import { gap } from "../../style/helpers";
import HeaderTitle from "../../ui/HeaderTitle";
import Loader from "../../ui/Loader";

const CheckoutPaymentPage = () => {
  return (
    <Loader>
      <SEO title="Order Payment" />

      <Container>
        <Section>
          <HeaderTitle>PAYMENT</HeaderTitle>
          <PaymentForm />
        </Section>

        <CartSideBar />
      </Container>
    </Loader>
  );
};

export default CheckoutPaymentPage;

const Container = styled.div`
  display: flex;
`;

const Section = styled.section`
  ${gap({ bottom: 2 })};
  height: 100%;
  width: 65%;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.shadedWhite};
`;
