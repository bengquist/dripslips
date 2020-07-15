import React, { createContext, useContext, useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { useGetUserCartQuery } from "../generated/graphql";
import useCartReducer, {
  CartActionTypes,
  CartState,
  CLEAR_CART,
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
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn && data?.me?.cart) {
      dispatch({ type: RESTORE_CART, payload: data?.me.cart });
    } else {
      dispatch({ type: CLEAR_CART });
    }
  }, [data, isLoggedIn]);

  const value = { state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
