import { Field, InputType } from "type-graphql";
import Product, { Gender } from "../../models/Product";

@InputType()
export default class AddProductInput implements Partial<Product> {
  @Field()
  modelId: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field(() => Gender)
  gender: Gender;

  @Field()
  color: string;

  @Field()
  size: number;

  @Field(() => [String])
  images: string[];
}
