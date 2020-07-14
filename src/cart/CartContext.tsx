import React, { createContext, useContext, useEffect } from "react";
import { useGetUserCartQuery } from "../generated/graphql";
import useCartReducer, {
  CartActionTypes,
  CartState,
  RESTORE_CART,
} from "./useCartReducer";

type ContextProps = {
  state: CartState;
  dispatch: (action: CartActionTypes) => void;
};

const CartContext = createContext({} as ContextProps);

export const CartProvider: React.FC = ({ children }) => {
  const { data } = useGetUserCartQuery();
  const [state, dispatch] = useCartReducer();

  useEffect(() => {
    if (data?.me?.cart) {
      dispatch({ type: RESTORE_CART, payload: data?.me.cart });
    }
  }, [data]);

  const value = { state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
