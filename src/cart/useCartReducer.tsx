import { useAuth } from "../auth/AuthContext";
import {
  useAddCartItemMutation,
  useGetCartQuery,
  useRemoveCartItemMutation,
} from "../generated/graphql";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RESTORE_CART = "RESTORE_CART";

export type CartState = {
  cart: any[];
  count: number;
  total: number;
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

const useCartReducer = () => {
  const { user, isLoggedIn } = useAuth();
  const { data } = useGetCartQuery();
  const [addCartItem] = useAddCartItemMutation();
  const [removeCartItem] = useRemoveCartItemMutation();

  const addProductToCart = (productDetailsId: string, state: CartState) => {
    return {
      cart: [],
      count: 0,
      total: 0,
    };
  };

  const removeProductFromCart = (cartItemId: string, state: CartState) => {
    return {
      cart: [],
      count: 0,
      total: 0,
    };
  };

  return (state: CartState, action: CartActionTypes) => {
    switch (action.type) {
      case ADD_PRODUCT:
        return addProductToCart(action.payload, state);
      case REMOVE_PRODUCT:
        return removeProductFromCart(action.payload, state);
      default:
        throw new Error(`Unknown action: ${action}`);
    }
  };
};

export default useCartReducer;
