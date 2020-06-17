import React from "react";
import styled from "styled-components";

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
`;

const Image = styled.img``;
