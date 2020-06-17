import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useRouter } from "next/dist/client/router";
import React from "react";
import SEO from "../../app/SEO";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

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
    <div>
      <SEO title="Home" />
      Yo
    </div>
  );
};

export default ProductPage;
