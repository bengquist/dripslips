import { FieldResolver, Resolver, Root } from "type-graphql";
import OrderItem from "../models/OrderItem";
import ProductDetail from "../models/ProductDetail";

@Resolver(() => OrderItem)
export default class OrderItemResolver {
  @FieldResolver()
  async productDetails(@Root() orderItem: OrderItem): Promise<ProductDetail> {
    const productDetail = await ProductDetail.findOne(
      orderItem.productDetailsId
    );

    if (!productDetail) {
      throw new Error("No product details found on order item");
    }

    return productDetail;
  }
}
