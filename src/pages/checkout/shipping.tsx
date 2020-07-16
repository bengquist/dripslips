import React from "react";
import styled from "styled-components";
import SEO from "../../app/SEO";
import CartSideBar from "../../cart/CartSideBar";
import AddressForm from "../../checkout/AddressForm";
import AddressSelect from "../../checkout/AddressSelect";
import CheckoutHeader from "../../checkout/CheckoutHeader";
import { useGetUserAddressQuery } from "../../generated/graphql";
import Loader from "../../ui/Loader";

const CheckoutShippingPage = () => {
  const { data, loading } = useGetUserAddressQuery();

  return (
    <Loader isLoading={loading}>
      <SEO title="Identification" />

      <CheckoutHeader />

      <Container>
        <Section>
          {data?.me?.address.length ? (
            <AddressSelect addresses={data.me.address} />
          ) : (
            <AddressForm />
          )}
        </Section>

        <CartSideBar />
      </Container>
    </Loader>
  );
};

export default CheckoutShippingPage;

const Container = styled.div`
  height: 100%;
  display: flex;
`;

const Section = styled.section`
  height: 100%;
  width: 65%;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.shadedWhite};
`;
