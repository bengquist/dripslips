import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";
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
        colors
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
        {data?.products.map((product: Product, index) => (
          <ProductCard key={product.id + index} product={product} />
        ))}
      </div>
    </Loader>
  );
};

export default IndexPage;
