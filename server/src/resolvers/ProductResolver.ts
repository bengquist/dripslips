import { Arg, Query, Resolver } from "type-graphql";
import products from "../data/products";
import { Product } from "../models/Product";

@Resolver()
export class ProductResolver {
  @Query(() => [Product])
  product(@Arg("id") id: string) {
    const product = products.find((product) => product.id === id);
    return product;
  }

  @Query(() => [Product])
  products() {
    return products;
  }
}
