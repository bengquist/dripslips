import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";
import SEO from "../app/SEO";
import ProductCard from "../product/productCard";
import ProductListNav from "../product/productListNav";
import { fluidGrid } from "../style/helpers";

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SEO title="Home" />

      <ProductListNav />

      <div css={fluidGrid({ maxWidth: 500 })}>
        {data.products.map((item: any) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            images={item.images}
          />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
