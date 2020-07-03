import React from "react";
import styled from "styled-components";
import { ProductImage } from "../generated/graphql";
import { lightGrayOutline } from "../style/helpers";

type Props = {
  images: ProductImage[];
};

const ProductImages: React.FC<Props> = ({ images }) => {
  const productImages = images.map((image) => (
    <Image key={image.url} src={image.url} />
  ));

  return <Container>{productImages}</Container>;
};

export default ProductImages;

const Container = styled.div`
  flex: 0.7;
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${lightGrayOutline};

  img:nth-child(1) {
    grid-column: span 2;
  }
`;

const Image = styled.img`
  max-height: 30rem;
  ${lightGrayOutline};
`;
