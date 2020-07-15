import { Field, InputType } from "type-graphql";
import Product, { Gender } from "../../models/Product";

@InputType()
export default class ProductInput implements Partial<Product> {
  @Field(() => Gender, { nullable: true })
  gender?: Gender;
}
