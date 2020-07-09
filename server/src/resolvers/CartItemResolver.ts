import { FieldResolver, Resolver, Root } from "type-graphql";
import { CartItem } from "../models/CartItem";
import ProductDetail from "../models/ProductDetail";

@Resolver(() => CartItem)
export default class CartItemResolver {
  @FieldResolver()
  async productDetails(@Root() cartItem: CartItem): Promise<ProductDetail> {
    const productDetail = await ProductDetail.findOne(
      cartItem.productDetailsId
    );

    if (!productDetail) {
      throw Error("No product detail found with provided id");
    }

    return productDetail;
  }
}
