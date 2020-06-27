import { Arg, Mutation, Query, Resolver } from "type-graphql";
import products from "../data/products";
import Product from "../models/Product";
import ProductDetail from "../models/ProductDetail";
import AddProductInput from "./inputs/AddProductInput";

@Resolver()
export default class ProductResolver {
  @Query(() => Product)
  product(@Arg("id") id: string) {
    const product = products.find((product) => product.id === id);
    return product;
  }

  @Query(() => [Product])
  products() {
    const products = Product.find({ relations: ["productDetails"] });

    return products;
  }

  @Mutation(() => Product)
  addProduct(@Arg("data") { color, size, ...newProductData }: AddProductInput) {
    const product = Product.create(newProductData);
    ProductDetail.create({ color, size, product });

    return product;
  }
}
