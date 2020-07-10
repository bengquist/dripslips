import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "../cart/CartContext";
import { ADD_PRODUCT } from "../cart/useCartReducer";
import exists from "../common/exists";
import formatCurrency from "../common/formatCurrency";
import { ProductInfoFragment } from "../generated/graphql";
import { gap } from "../style/helpers";
import SquareButton from "../ui/SquareButton";
import ProductOptionModal from "./ProductOptionModal";

type Props = {
  product: ProductInfoFragment;
};

const ProductInfo: React.FC<Props> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.details[0].color);
  const [selectedSize, setSelectedSize] = useState(product.details[0].size);
  const [showSizeSelect, setShowSizeSelect] = useState(false);
  const [showColorSelect, setShowColorSelect] = useState(false);
  const { dispatch } = useCart();

  const addProduct = () => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product,
    });
  };

  const colors = product.details
    .map((details) => {
      if (details.size === selectedSize) {
        return details.color;
      }
    })
    .filter(exists);

  const sizes = product.details
    .map((details) => {
      if (details.color === selectedColor) {
        return details.size.toString();
      }
    })
    .filter(exists)
    .sort((a, b) => +b - +a);

  return (
    <Container css={gap({ bottom: 2 })}>
      <div css={gap({ bottom: 0.25 })}>
        <ModelId>{product.modelId}</ModelId>
        <h1>{product.title}</h1>
      </div>

      <div>
        <Button onClick={() => setShowColorSelect(!showColorSelect)}>
          <strong>Color</strong>
          <p>{selectedColor}</p>
        </Button>
        <Button onClick={() => setShowSizeSelect(!showSizeSelect)}>
          <strong>Size</strong>
          <p>{selectedSize}</p>
        </Button>
      </div>

      <div css={gap({ bottom: 1 })}>
        <h3>{formatCurrency(product.price)}</h3>
        <SquareButton onClick={addProduct}>Place in Cart</SquareButton>
        <SquareButton variant="secondary">
          <FontAwesomeIcon icon={faHeart} /> Add to Wishlist
        </SquareButton>
      </div>

      <ProductOptionModal
        isVisible={showColorSelect}
        onClose={() => setShowColorSelect(false)}
        onSelect={(value) => setSelectedColor(value)}
        sizes={colors}
      />
      <ProductOptionModal
        isVisible={showSizeSelect}
        onClose={() => setShowSizeSelect(false)}
        onSelect={(value) => setSelectedSize(Number(value))}
        sizes={sizes}
      />
    </Container>
  );
};

export default ProductInfo;

const Container = styled.div`
  flex: 0.3;
  padding: 3rem;
`;

const ModelId = styled.h5`
  font-weight: normal;
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 1.5rem 0;
  transition: 0.3s;

  :hover,
  :focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
