import React, { createContext, useContext, useReducer } from "react";
import { Product } from "../product/types";

type State = {
  products: {
    product: Product;
    quantity: number;
  }[];
  productCount: number;
  totalPrice: number;
};

type Action = {
  type: string;
  payload: Product;
};

type ContextProps = {
  state: State;
  dispatch: (action: Action) => void;
};

const CartContext = createContext({} as ContextProps);

const reducer = (state: State, action: Action) => {
  const productsCopy = state.products.slice();

  switch (action.type) {
    case "ADD_PRODUCT":
      const productInCart = productsCopy.find(
        ({ product }) => product.id === action.payload.id
      );

      if (productInCart) {
        productInCart.quantity++;
      } else {
        productsCopy.push({ product: action.payload, quantity: 1 });
      }

      return {
        products: productsCopy,
        productCount: ++state.productCount,
        totalPrice: state.totalPrice + action.payload.price,
      };
    case "REMOVE_PRODUCT":
      return {
        products: productsCopy.filter(
          ({ product }) => product.id !== action.payload.id
        ),
        productCount: --state.productCount,
        totalPrice: 0,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const CartProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    productCount: 0,
    totalPrice: 0,
  });

  const value = { state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
