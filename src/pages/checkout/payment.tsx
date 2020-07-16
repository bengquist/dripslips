import React, { useState } from "react";
import styled from "styled-components";
import SEO from "../../app/SEO";
import CartSideBar from "../../cart/CartSideBar";
import PaymentForm from "../../checkout/PaymentForm";
import { gap } from "../../style/helpers";
import Loader from "../../ui/Loader";
import Radio from "../../ui/Radio";

const CheckoutPaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <Loader>
      <SEO title="Identification" />

      <Container>
        <Section>
          <FormHeader>PAYMENT</FormHeader>
          <div css={gap({ bottom: 1.5 })}>
            <Radio
              name="paymentMethod"
              onChange={(e) => setPaymentMethod(e.target.value)}
              value="card"
              label="Credit Card"
              defaultChecked
            />
            <Radio
              name="paymentMethod"
              onChange={(e) => setPaymentMethod(e.target.value)}
              value="paypal"
              label="PayPal"
            />
          </div>
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
  width: 60%;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.shadedWhite};
`;

const FormHeader = styled.h1`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
