import { Field, InputType } from "type-graphql";
import Address from "../../models/Address";

@InputType()
export default class AddAddressInput implements Partial<Address> {
  @Field()
  userId: string;

  @Field({ nullable: true })
  companyName?: string;

  @Field()
  addressPrimary: string;

  @Field({ nullable: true })
  addressSecondary?: string;

  @Field()
  postalCode: number;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  country: string;
}
