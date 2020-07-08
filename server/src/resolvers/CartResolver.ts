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

@Resolver(() => CartItem)
export default class CartResolver {
  @Mutation(() => CartItem)
  async addCartItem(
    @Arg("productDetailsId") productDetailsId: string,
    @Ctx() { user }: AppContext
  ): Promise<CartItem[]> {
    const productDetails = await ProductDetail.findOne(productDetailsId);

    const cartItem = CartItem.create({
      quantity: 1,
      user,
      productDetails,
    });

    await cartItem.save();

    return CartItem.find({ where: { user } });
  }

  @FieldResolver()
  async productDetails(@Root() cartItem: CartItem): Promise<ProductDetail> {
    const productDetail = await ProductDetail.findOne(
      cartItem.productDetailsId
    );

    if (!productDetail) {
      throw Error("No product detail found with provided id");
    } else {
    }

    return productDetail;
  }
}
