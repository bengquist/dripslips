import React from "react";
import styled from "styled-components";
import { flexAlignCenter, gap } from "../style/helpers";
import SquareButton from "../ui/SquareButton";
import { useCart } from "./CartContext";
import CartProductCard from "./CartProductCard";
import CartTotal from "./CartTotal";

const CartList = () => {
  const { state } = useCart();

  const cartHasProducts = state.productCount > 0;

  const products = (
    <div css={gap({ bottom: 1 })}>
      {state.products.map((product) => (
        <CartProductCard product={product} />
      ))}
    </div>
  );

  const cartFooter = (
    <CartFooter>
      <CartTotal />
      <BottomNav>
        <SquareButton>Proceed</SquareButton>
      </BottomNav>
    </CartFooter>
  );

  const emptyCart = (
    <EmptyState>
      <p>Your shopping bag is empty</p>
      <SquareButton variant="secondary" style={{ maxWidth: "15rem" }}>
        Start Shopping
      </SquareButton>
    </EmptyState>
  );

  return (
    <div css={gap({ bottom: 2 })}>
      {cartHasProducts && (
        <TopNav>
          <CartNav>
            <SquareButton variant="secondary">Continue Shopping</SquareButton>
            <SquareButton>Proceed</SquareButton>
          </CartNav>
        </TopNav>
      )}

      <Header>
        <h1>MY SHOPPING BAG</h1>
        <span>({state.productCount} products)</span>
      </Header>

      {products}

      {cartHasProducts ? cartFooter : emptyCart}
    </div>
  );
};

export default CartList;

const Header = styled.div`
  ${gap({ right: 0.5 })};
  display: flex;
  align-items: flex-end;

  > span {
    font-weight: normal;
  }
`;

const TopNav = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  ${gap({ bottom: 1.5 })}
`;

const BottomNav = styled.div`
  padding-top: 3rem;
  width: 100%;
  max-width: 15rem;
  align-self: flex-end;
`;

const CartNav = styled.div`
  ${flexAlignCenter};
  ${gap({ right: 1 })};
  width: 100%;
  max-width: 30rem;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${gap({ bottom: 2 })};
`;

const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
`;
