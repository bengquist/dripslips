import { Query, Resolver } from "type-graphql";
import ProductDetail from "../models/ProductDetail";

@Resolver(() => ProductDetail)
export default class ProductDetailResolver {
  @Query(() => [ProductDetail])
  productDetails() {
    const productDetails = ProductDetail.find({
      relations: ["product", "productImages"],
    });

    return productDetails;
  }
}
