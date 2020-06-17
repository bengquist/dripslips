import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";
import SEO from "../../app/SEO";
import ProductImages from "../../product/ProductImages";
import ProductInfo from "../../product/ProductInfo";
import BackButton from "../../ui/BackButton";
import Loader from "../../ui/Loader";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(
    gql`
      query getProduct($id: ID!) {
        product(id: $id) {
          id
          modelId
          title
          description
          type
          colorGroup
          availableColors
          availableSizes
          gender
          price
          images
        }
      }
    `,
    { variables: { id } }
  );

  return (
    <Loader isLoading={loading} error={error}>
      <Container>
        <SEO title={data?.product.title} />
        <BackButton />
        <ProductImages images={data?.product.images} />
        <ProductInfo product={data?.product} />
      </Container>
    </Loader>
  );
};

export default ProductPage;

const Container = styled.div`
  position: relative;
  display: flex;
`;
