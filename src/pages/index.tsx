import React from "react";
import SEO from "../app/SEO";
import { useProductsQuery } from "../generated/graphql";
import ProductCard from "../product/ProductCard";
import ProductListNav from "../product/ProductListNav";
import { Product } from "../product/types";
import { fluidGrid } from "../style/helpers";
import Loader from "../ui/Loader";

const HomePage = () => {
  const { loading, data } = useProductsQuery();

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

export default HomePage;
