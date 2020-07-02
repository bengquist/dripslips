import { FieldResolver, Resolver, Root } from "type-graphql";
import OrderItem from "../models/OrderItem";
import ProductDetail from "../models/ProductDetail";

@Resolver(() => OrderItem)
export default class OrderItemResolver {
  @FieldResolver()
  async productDetails(@Root() orderItem: OrderItem): Promise<ProductDetail> {
    //@ts-ignore
    return ProductDetail.findOne(orderItem.productDetailsId);
  }
}
