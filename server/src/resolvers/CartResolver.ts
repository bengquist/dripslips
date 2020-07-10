import { AuthenticationError } from "apollo-server-express";
import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Resolver,
  Root,
} from "type-graphql";
import { Cart } from "../models/Cart";
import { CartItem } from "../models/CartItem";
import ProductDetail from "../models/ProductDetail";
import { AppContext } from "../types";

@Resolver(() => Cart)
export default class CartResolver {
  @Mutation(() => Cart)
  async addCartItem(
    @Arg("productDetailsId") productDetailsId: string,
    @Ctx() { user }: AppContext
  ): Promise<Cart> {
    if (!user) {
      throw new AuthenticationError(
        "Must be authenticated before adding item to cart"
      );
    }

    const productDetails = await ProductDetail.findOne(productDetailsId);

    let cart = await Cart.findOne({ where: { user }, relations: ["items"] });
    let cartItem = await CartItem.findOne({ where: { productDetails } });

    if (!cart) {
      cart = Cart.create({ user });
    }

    if (cartItem) {
      cartItem.quantity++;
      await cartItem.save();

      const cartItems = cart.items.filter((item) => item.id !== cartItem?.id);
      cart.items = [...cartItems, cartItem];

      return cart;
    }

    cartItem = CartItem.create({ cart, productDetails });
    cart.items.push(cartItem);
    await cartItem.save();

    return cart;
  }

  @Mutation(() => Cart)
  async removeCartItem(
    @Arg("cartItemId") cartItemId: string,
    @Ctx() { user }: AppContext
  ): Promise<Cart> {
    const item = await CartItem.findOne(cartItemId);

    if (!item) {
      throw new Error("No cart item found");
    }

    if (item.quantity > 1) {
      item.quantity--;
      await item.save();
    } else {
      await CartItem.delete(cartItemId);
    }

    const cart = await Cart.findOne({ where: { user } });

    if (!cart) {
      throw new Error("User has no cart");
    }

    return cart;
  }

  @FieldResolver()
  async items(@Root() cart: Cart): Promise<CartItem[]> {
    return CartItem.find({ where: { cart } });
  }

  @FieldResolver()
  async count(@Root() cart: Cart): Promise<number> {
    let count = 0;

    const cartItems = await CartItem.find({ where: { cart } });
    cartItems.forEach((item) => (count += item.quantity));

    return count;
  }

  @FieldResolver()
  async total(@Root() cart: Cart): Promise<number> {
    let total = 0;

    const cartItems = await CartItem.find({
      where: { cart },
      relations: ["productDetails", "productDetails.product"],
    });
    cartItems.forEach((item) => (total += item.productDetails.product.price));

    return total;
  }
}
