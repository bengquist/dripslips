import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SEO from "../../app/SEO";
import { useProductQuery } from "../../generated/graphql";
import ProductImages from "../../product/ProductImages";
import ProductInfo from "../../product/ProductInfo";
import BackButton from "../../ui/BackButton";
import Loader from "../../ui/Loader";

const ProductPage = () => {
  const router = useRouter();
  const [selectedDetailId, setSelectedDetailId] = useState("");

  const { id = "" } = router.query;

  const { loading, error, data } = useProductQuery({ variables: { id } });

  useEffect(() => {
    setSelectedDetailId(data?.product.details[0].id ?? "");
  }, [data]);

  if (!data?.product) {
    return <div>No product with that id</div>;
  }

  const detail =
    data.product.details.find((details) => details.id === selectedDetailId) ||
    data?.product.details[0];

  return (
    <Loader isLoading={loading} error={error}>
      <Container>
        <SEO title={data?.product.title} />
        <BackButtonContainer>
          <BackButton />
        </BackButtonContainer>
        <ProductImages images={detail.productImages.map(({ url }) => url)} />
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

const BackButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
