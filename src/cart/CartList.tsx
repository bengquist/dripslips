import Link from "next/link";
import React from "react";
import styled from "styled-components";
import routes from "../routing/routes";
import { flexAlignCenter, gap } from "../style/helpers";
import SquareButton from "../ui/SquareButton";
import { useCart } from "./CartContext";
import CartItemCard from "./CartItemCard";
import CartTotal from "./CartTotal";

const CartList = () => {
  const { state } = useCart();

  const cartHasProducts = state.count > 0;

  const cart = (
    <div css={gap({ bottom: 1 })}>
      {state.items.map((cartItem) => (
        <CartItemCard cartItem={cartItem} />
      ))}
    </div>
  );

  const cartFooter = (
    <CartFooter>
      <CartTotal />
      <BottomNav>
        <Link href={routes.CHECKOUT}>
          <SquareButton>Proceed</SquareButton>
        </Link>
      </BottomNav>
    </CartFooter>
  );

  const emptyCart = (
    <EmptyState>
      <p>Your shopping bag is empty</p>
      <Link href={routes.HOME}>
        <SquareButton variant="secondary" style={{ maxWidth: "15rem" }}>
          Start Shopping
        </SquareButton>
      </Link>
    </EmptyState>
  );

  return (
    <div css={gap({ bottom: 2 })}>
      {cartHasProducts && (
        <TopNav>
          <CartNav>
            <Link href={routes.HOME}>
              <SquareButton variant="secondary">Continue Shopping</SquareButton>
            </Link>
            <Link href={routes.CHECKOUT}>
              <SquareButton>Proceed</SquareButton>
            </Link>
          </CartNav>
        </TopNav>
      )}

      <Header>
        <h1>MY SHOPPING BAG</h1>
        <p>({state.count} products)</p>
      </Header>

      {cart}

      {cartHasProducts ? cartFooter : emptyCart}
    </div>
  );
};

export default CartList;

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

const Header = styled.div`
  ${gap({ right: 0.5 })};
  display: flex;
  align-items: flex-end;
`;
