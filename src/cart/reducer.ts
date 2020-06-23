import { Product } from "../product/types";
import { CartProduct } from "./types";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export type CartState = {
  cart: CartProduct[];
  productCount: number;
  totalPrice: number;
};

export type CartAction = {
  type: string;
  payload: Product;
};

const addProductToCart = (product: Product, state: CartState) => {
  const cartCopy = [...state.cart];

  const productInCart = cartCopy.find(
    (cartProduct) => cartProduct.product.id === product.id
  );

  if (productInCart) {
    productInCart.quantity++;
  } else {
    cartCopy.push({
      product: product,
      quantity: 1,
      size: 0,
      color: "black",
    });
  }

  return {
    cart: cartCopy,
    productCount: ++state.productCount,
    totalPrice: state.totalPrice + product.price,
  };
};

const removeProductFromCart = (product: Product, state: CartState) => {
  const cartCopy = [...state.cart];

  const updatedProductIndex = cartCopy.findIndex(
    (cartProduct) => cartProduct.product.id === product.id
  );
  const updatedProduct = {
    ...cartCopy[updatedProductIndex],
  };

  updatedProduct.quantity--;

  if (updatedProduct.quantity <= 0) {
    cartCopy.splice(updatedProductIndex, 1);
  } else {
    cartCopy[updatedProductIndex] = updatedProduct;
  }

  return {
    cart: cartCopy,
    productCount: --state.productCount,
    totalPrice: 0,
  };
};

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.payload, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.payload, state);
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};
