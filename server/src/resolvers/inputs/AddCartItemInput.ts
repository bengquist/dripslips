import { Field, InputType } from "type-graphql";
import { CartItem } from "../../models/CartItem";

@InputType()
export default class AddCartItemInput implements Partial<CartItem> {
  @Field()
  quantity: number;

  @Field()
  productDetailsId: string;
}
