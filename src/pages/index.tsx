import React from "react";
import SEO from "../app/SEO";
import { ProductFieldsFragment, useProductsQuery } from "../generated/graphql";
import ProductCard from "../product/ProductCard";
import ProductListHeader from "../product/ProductListNav";
import { fluidGrid } from "../style/helpers";
import Loader from "../ui/Loader";

const HomePage = () => {
  const { loading, data } = useProductsQuery();

  return (
    <Loader isLoading={loading}>
      <SEO title="Home" />
      <ProductListHeader
        title="The Essentials"
        numberOfProducts={data?.products.length ?? 0}
      />

      <div css={fluidGrid({ maxWidth: 500 })}>
        {data?.products.map((product: ProductFieldsFragment) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Loader>
  );
};

export default HomePage;
