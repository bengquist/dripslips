import { Product } from "../product/types";
import { CartProduct } from "./types";

export type CartState = {
  products: CartProduct[];
  productCount: number;
  totalPrice: number;
};

export type CartAction = {
  type: string;
  payload: Product;
};

export const cartReducer = (state: CartState, action: CartAction) => {
  const productsCopy = state.products.slice();

  switch (action.type) {
    case "ADD_PRODUCT":
      const productInCart = productsCopy.find(
        ({ product }) => product.id === action.payload.id
      );

      if (productInCart) {
        productInCart.quantity++;
      } else {
        productsCopy.push({
          product: action.payload,
          quantity: 1,
          size: 0,
          color: "black",
        });
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
