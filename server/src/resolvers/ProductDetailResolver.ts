import { Resolver } from "type-graphql";
import Product from "../models/Product";

@Resolver(() => Product)
export default class ProductDetailResolver {}
