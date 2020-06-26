import { Arg, Mutation, Query, Resolver } from "type-graphql";
import products from "../data/products";
import Product from "../models/Product";
import AddProductInput from "./inputs/AddProductInput";

@Resolver()
export default class ProductResolver {
  @Query(() => Product)
  product(@Arg("id") id: string) {
    const product = products.find((product) => product.id === id);
    return product;
  }

  @Query(() => [Product])
  products(@Arg("gender", { nullable: true }) gender?: string) {
    if (gender) {
      return products.filter((product) => product.gender === gender);
    }

    return products;
  }

  @Mutation(() => Product)
  addProduct(@Arg("data") { color, size, ...newProductData }: AddProductInput) {
    const product = Product.create({
      ...newProductData,
      productDetails: { color, size },
    });

    console.log(product);

    return product;
  }
}
