import React from "react";
import styled from "styled-components";
import SEO from "../../app/SEO";
import Loader from "../../ui/Loader";

const CheckoutPaymentPage = () => {
  return (
    <Loader>
      <SEO title="Order Review" />

      <Container>Review</Container>
    </Loader>
  );
};

export default CheckoutPaymentPage;

const Container = styled.div``;
