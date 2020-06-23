import React, { createContext, useContext, useReducer } from "react";
import { CartAction, cartReducer, CartState } from "./reducer";

type ContextProps = {
  state: CartState;
  dispatch: (action: CartAction) => void;
};

const CartContext = createContext({} as ContextProps);

export const CartProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    productCount: 0,
    totalPrice: 0,
  });

  const value = { state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
