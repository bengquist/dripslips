import { useAuth } from "../auth/AuthContext";
import {
  Product,
  useAddCartItemMutation,
  useGetCartQuery,
} from "../generated/graphql";
import { CartProduct } from "./types";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RESTORE_CART = "RESTORE_CART";

export type CartState = {
  cart: CartProduct[];
  productCount: number;
  totalPrice: number;
};

export type AddProductAction = {
  type: typeof ADD_PRODUCT;
  payload: string;
};

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT;
  payload: string;
};

export type CartActionTypes = AddProductAction | RemoveProductAction;

const addProductToCart = (product: Product, state: CartState) => {
  return {
    cart: [],
    productCount: 0,
    totalPrice: 0,
  };
};

const removeProductFromCart = (productId: string, state: CartState) => {
  return {
    cart: [],
    productCount: 0,
    totalPrice: 0,
  };
};

const useCartReducer = () => {
  const { user } = useAuth();
  const { data } = useGetCartQuery();
  const [addCartItem] = useAddCartItemMutation();

  console.log(user, data?.me?.cart);

  return (state: CartState, action: CartActionTypes) => {
    switch (action.type) {
      case ADD_PRODUCT:
        return addProductToCart(action.payload, state, user);
      case REMOVE_PRODUCT:
        return removeProductFromCart(action.payload, state, user);
      default:
        throw new Error(`Unknown action: ${action}`);
    }
  };
};

export default useCartReducer;
