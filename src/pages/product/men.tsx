import React from "react";
import SEO from "../../app/SEO";
import {
  Gender,
  ProductFieldsFragment,
  useFilteredProductsQuery,
} from "../../generated/graphql";
import ProductCard from "../../product/ProductCard";
import ProductListHeader from "../../product/ProductListNav";
import { fluidGrid } from "../../style/helpers";
import Loader from "../../ui/Loader";

const MenPage = () => {
  const { loading, data } = useFilteredProductsQuery({
    variables: { gender: Gender.Male },
  });

  return (
    <Loader isLoading={loading}>
      <SEO title="Men" />
      <ProductListHeader
        title="Men"
        numberOfProducts={data?.products.length || 0}
      />

      <div css={fluidGrid({ maxWidth: 500 })}>
        {data?.products.map((product: ProductFieldsFragment) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Loader>
  );
};

export default MenPage;
