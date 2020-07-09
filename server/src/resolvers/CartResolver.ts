import { AuthenticationError } from "apollo-server-express";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
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

    let cart = await Cart.findOne({ where: { user } });

    if (!cart) {
      cart = Cart.create({ user });
    }

    const cartItem = CartItem.create({
      quantity: 1,
      productDetails,
    });

    const items = await CartItem.find({ where: { cart } });
    items.push(cartItem);
    cart.items = items;

    console.log(cart);
    return cart.save();
  }
}
