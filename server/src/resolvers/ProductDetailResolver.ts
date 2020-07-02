import { FieldResolver, Resolver, Root } from "type-graphql";
import Product from "../models/Product";
import ProductDetail from "../models/ProductDetail";

@Resolver(() => ProductDetail)
export default class ProductDetailResolver {
  @FieldResolver()
  async product(@Root() productDetail: ProductDetail): Promise<Product> {
    const product = Product.findOne(productDetail.productId);

    if (!product) {
      throw Error("No product found with provided id");
    }

    //@ts-ignore
    return product;
  }
}
