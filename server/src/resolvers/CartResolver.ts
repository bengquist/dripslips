import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Resolver,
  Root,
} from "type-graphql";
import { CartItem } from "../models/CartItem";
import ProductDetail from "../models/ProductDetail";
import { AppContext } from "../types";
import AddCartItemInput from "./inputs/AddCartItemInput";

@Resolver(() => CartItem)
export default class CartResolver {
  @Mutation(() => CartItem)
  async addCartItem(
    @Arg("data") { quantity, productDetailsId }: AddCartItemInput,
    @Ctx() { user }: AppContext
  ) {
    console.log(user);
    const productDetails = await ProductDetail.findOne(productDetailsId);

    const cartItem = CartItem.create({
      quantity,
      user,
      productDetails,
    });

    console.log(cartItem);
    await cartItem.save();

    return cartItem;
  }

  @FieldResolver()
  async productDetails(@Root() cartItem: CartItem): Promise<ProductDetail> {
    console.log(cartItem);
    const productDetail = ProductDetail.findOne(
      "e5647dd2-a5c4-493b-ba23-299ead6f8a35"
    );

    if (productDetail) {
      throw Error("No product detail found with provided id");
    }

    return productDetail;
  }
}
