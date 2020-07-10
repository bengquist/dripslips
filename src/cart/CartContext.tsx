import React, { createContext, useContext, useReducer } from "react";
import useCartReducer, { CartActionTypes, CartState } from "./useCartReducer";

type ContextProps = {
  state: CartState;
  dispatch: (action: CartActionTypes) => void;
};

const CartContext = createContext({} as ContextProps);

export const CartProvider: React.FC = ({ children }) => {
  const cartReducer = useCartReducer();

  const reducer = (state: CartState, action: CartActionTypes) => {
    return cartReducer(state, action);
  };

  const [state, dispatch] = useReducer(reducer, {
    cart: [],
    count: 0,
    total: 0,
  });

  console.log(state);

  const value = { state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
