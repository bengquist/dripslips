import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";
import SEO from "../../app/SEO";
import ProductImages from "../../product/ProductImages";
import ProductInfo from "../../product/ProductInfo";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, data } = useQuery(
    gql`
      query getProduct($id: ID!) {
        product(id: $id) {
          id
          title
          description
          type
          colors
          gender
          price
          images
        }
      }
    `,
    { variables: { id } }
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <Container>
      <SEO title={data.product.title} />
      <ProductImages images={data.product.images} />
      <ProductInfo product={data.product} />
    </Container>
  );
};

export default ProductPage;

const Container = styled.div``;
