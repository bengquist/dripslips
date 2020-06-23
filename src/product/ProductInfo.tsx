import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "../cart/CartContext";
import { ADD_PRODUCT } from "../cart/reducer";
import formatCurrency from "../common/formatCurrency";
import { gap } from "../style/helpers";
import SquareButton from "../ui/SquareButton";
import ProductSizeModal from "./ProductSizeModal";
import { Product } from "./types";

type Props = {
  product: Product;
};

const ProductInfo: React.FC<Props> = ({ product }) => {
  const [showSizeSelect, setShowSizeSelect] = useState(false);
  const { dispatch } = useCart();

  const addProduct = () => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product,
    });
  };

  return (
    <Container css={gap({ bottom: 2 })}>
      <div>
        <ModelId>{product.modelId}</ModelId>
        <h1>{product.title}</h1>
      </div>

      <Button onClick={() => setShowSizeSelect(!showSizeSelect)}>
        <p>Size</p>
        <p>48 &#8250;</p>
      </Button>

      <div css={gap({ bottom: 1 })}>
        <h3>{formatCurrency(product.price)}</h3>
        <SquareButton onClick={addProduct}>Place in Cart</SquareButton>
        <SquareButton variant="secondary">
          <FontAwesomeIcon icon={faHeart} /> Add to Wishlist
        </SquareButton>
      </div>

      <ProductSizeModal
        isVisible={showSizeSelect}
        onClose={() => setShowSizeSelect(false)}
        sizes={product.availableSizes}
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
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 1.5rem 0;
`;
