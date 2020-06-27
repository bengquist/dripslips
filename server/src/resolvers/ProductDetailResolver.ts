import { Query, Resolver } from "type-graphql";
import Product from "../models/Product";
import ProductDetail from "../models/ProductDetail";

@Resolver()
export default class ProductDetailResolver {
  @Query(() => Product)
  product() {
    console.log("yo");
    const product = ProductDetail.find({ relations: ["product"] });
    return product;
  }

  @Query(() => ProductDetail)
  productDetails() {
    console.log("yo");
    const product = ProductDetail.find({ relations: ["product"] });
    return product;
  }
}
