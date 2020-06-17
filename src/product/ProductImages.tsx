import React from "react";
import styled from "styled-components";
import { lightGrayOutline } from "../style/helpers";

type Props = {
  images: string[];
};

const ProductImages: React.FC<Props> = ({ images }) => {
  const productImages = images.map((image) => (
    <Image key={image} src={image} />
  ));

  return <Container>{productImages}</Container>;
};

export default ProductImages;

const Container = styled.div`
  flex: 2;
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
