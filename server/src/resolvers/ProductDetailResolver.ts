import { Arg, Query, Resolver } from "type-graphql";
import products from "../data/products";
import Product from "../models/Product";
import ProductDetail from "../models/ProductDetail";

@Resolver()
export default class ProductDetailResolver {
  @Query(() => ProductDetail)
  productDetail(@Arg("id") id: string) {
    console.log("hi");
    const product = products.find((product) => product.id === id);
    return product;
  }

  @Query(() => [ProductDetail])
  productDetails() {
    console.log("yo");
    const products = Product.find();
    return products;
  }
}
