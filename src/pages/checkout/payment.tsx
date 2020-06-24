import React from "react";
import styled from "styled-components";
import SEO from "../../app/SEO";
import CartSideBar from "../../cart/CartSideBar";
import CheckoutHeader from "../../checkout/CheckoutHeader";
import PaymentForm from "../../checkout/PaymentForm";
import Loader from "../../ui/Loader";

const CheckoutPaymentPage = () => {
  return (
    <Loader>
      <SEO title="Identification" />

      <CheckoutHeader />

      <Container>
        <Section>
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
  height: 100%;
  width: 60%;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.shadedWhite};
`;
