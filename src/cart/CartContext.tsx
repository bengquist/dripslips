import React, { createContext, useContext, useReducer } from "react";
import { useAuth } from "../auth/AuthContext";
import { CartActionTypes, cartReducer, CartState } from "./reducer";

type ContextProps = {
  state: CartState;
  dispatch: (action: CartActionTypes) => void;
};

const CartContext = createContext({} as ContextProps);

export const CartProvider: React.FC = ({ children }) => {
  const { isLoggedIn } = useAuth();

  const [state, dispatch] = useReducer(
    (state: CartState, action: CartActionTypes) =>
      cartReducer(state, action, isLoggedIn),
    {
      cart: [],
      productCount: 0,
      totalPrice: 0,
    }
  );

  const value = { state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
