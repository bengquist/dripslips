import { Field, InputType } from "type-graphql";
import User, { Title } from "../../models/User";

@InputType()
export default class SignupInput implements Partial<User> {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => Title)
  title: Title;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  phoneNumber: string;

  @Field({ nullable: true })
  isAdmin?: boolean;
}
