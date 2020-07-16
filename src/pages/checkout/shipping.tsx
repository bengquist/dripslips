import React from "react";
import styled from "styled-components";
import SEO from "../../app/SEO";
import CartSideBar from "../../cart/CartSideBar";
import AddressForm from "../../checkout/AddressForm";
import Loader from "../../ui/Loader";

const CheckoutShippingPage = () => {
  return (
    <Loader>
      <SEO title="Identification" />

      <Container>
        <Section>
          <AddressForm />
        </Section>

        <CartSideBar />
      </Container>
    </Loader>
  );
};

export default CheckoutShippingPage;

const Container = styled.div`
  min-height: 100%;
  display: flex;
`;

const Section = styled.section`
  height: 100%;
  width: 65%;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.shadedWhite};
`;
