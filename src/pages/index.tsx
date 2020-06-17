import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";
import { initializeApollo } from "../apollo/apolloClient";
import SEO from "../app/SEO";
import ProductCard from "../product/ProductCard";
import ProductListNav from "../product/ProductListNav";
import { Product } from "../product/types";
import { fluidGrid } from "../style/helpers";
import Loader from "../ui/Loader";

const IndexPage = () => {
  const { loading, data } = useQuery(gql`
    {
      products {
        id
        title
        description
        type
        gender
        price
        images
      }
    }
  `);

  return (
    <Loader isLoading={loading}>
      <SEO title="Home" />
      <ProductListNav />

      <div css={fluidGrid({ maxWidth: 500 })}>
        {data?.products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Loader>
  );
};

IndexPage.getInitialProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: gql`
      {
        products {
          id
          title
          description
          type
          gender
          price
          images
        }
      }
    `,
  });

  return apolloClient.cache.extract();
};

export default IndexPage;
