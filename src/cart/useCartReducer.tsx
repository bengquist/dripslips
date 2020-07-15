import { useReducer } from "react";
import { useAuth } from "../auth/AuthContext";
import {
  useAddCartItemMutation,
  useGetUserCartQuery,
  useRemoveCartItemMutation,
} from "../generated/graphql";

export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const RESTORE_CART = "RESTORE_CART";
export const CLEAR_CART = "CLEAR_CART";

export type CartState = {
  items: any[];
  count: number;
  total: number;
};

export type AddCartItemAction = {
  type: typeof ADD_CART_ITEM;
  payload: string;
};

export type RemoveCartItemAction = {
  type: typeof REMOVE_CART_ITEM;
  payload: string;
};

export type RestoreCartAction = {
  type: typeof RESTORE_CART;
  payload: CartState;
};

export type ClearCartAction = {
  type: typeof CLEAR_CART;
};

export type CartActionTypes =
  | AddCartItemAction
  | RemoveCartItemAction
  | RestoreCartAction
  | ClearCartAction;

const defaultState = {
  items: [],
  count: 0,
  total: 0,
};

const useCartReducer = () => {
  const { user, isLoggedIn } = useAuth();
  const { data } = useGetUserCartQuery();
  const [addCartItem] = useAddCartItemMutation();
  const [removeCartItem] = useRemoveCartItemMutation();

  const addItemToCart = (productDetailsId: string, state: CartState) => {
    return state;
  };

  const removeItemFromCart = (cartItemId: string, state: CartState) => {
    return state;
  };

  const restoreCart = (newState: CartState, state: CartState) => {
    return newState;
  };

  const clearCart = () => {
    return defaultState;
  };

  const reducer = (state: CartState, action: CartActionTypes) => {
    switch (action.type) {
      case ADD_CART_ITEM:
        return addItemToCart(action.payload, state);
      case REMOVE_CART_ITEM:
        return removeItemFromCart(action.payload, state);
      case RESTORE_CART:
        return restoreCart(action.payload, state);
      case CLEAR_CART:
        return clearCart();
      default:
        throw new Error(`Unknown action: ${action}`);
    }
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return [state, dispatch];
};

export default useCartReducer;
