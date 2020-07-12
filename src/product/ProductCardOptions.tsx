import React from "react";
import styled from "styled-components";
import { stopPropagation } from "../common/eventHelpers";
import { ProductDetailsFragment } from "../generated/graphql";

type Props = {
  productDetails: ProductDetailsFragment[];
  selected: string;
  onSelect: (id: string) => void;
};

const ProductCardOptions: React.FC<Props> = ({
  productDetails,
  selected,
  onSelect,
}) => {
  const colorOptions = productDetails.map((details) => {
    return (
      <Block
        onClick={stopPropagation(() => onSelect(details.id))}
        isSelected={selected === details.id}
        color={details.color}
      />
    );
  });

  return <Container>{colorOptions}</Container>;
};

export default ProductCardOptions;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));
  grid-gap: 1rem;
`;

const Block = styled.button<{ color: string; isSelected: boolean }>`
  background-color: ${({ color }) => color};
  padding: 1rem;
  transition: 0.3;

  border: 0.2rem solid white;
  outline: 2px solid transparent;

  outline: ${({ isSelected, theme }) =>
    isSelected && `2px solid ${theme.colors.black}`};
`;
