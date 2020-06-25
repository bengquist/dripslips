import React from "react";
import SEO from "../app/SEO";
import { useFilteredProductsQuery } from "../generated/graphql";
import ProductCard from "../product/ProductCard";
import ProductListHeader from "../product/ProductListNav";
import { Product } from "../product/types";
import { fluidGrid } from "../style/helpers";
import Loader from "../ui/Loader";

const WomenPage = () => {
  const { loading, data } = useFilteredProductsQuery({
    variables: { gender: "Female" },
  });

  return (
    <Loader isLoading={loading}>
      <SEO title="Women" />
      <ProductListHeader
        title="Women"
        numberOfProducts={data?.products.length}
      />

      <div css={fluidGrid({ maxWidth: 500 })}>
        {data?.products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Loader>
  );
};

export default WomenPage;
