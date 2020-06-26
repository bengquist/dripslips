import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import ProductDetail from "./ProductDetail";
import User from "./User";

@Entity()
@ObjectType()
export class CartItem extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user.cartItems)
  @Column(() => User)
  user: User;

  @OneToOne(() => ProductDetail)
  @JoinColumn()
  productDetails: ProductDetail;

  @Field()
  @Column()
  quantity: number;
}
