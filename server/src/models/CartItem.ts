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

  @Field()
  @Column()
  quantity: number;

  @ManyToOne(() => User, (user) => user.cart)
  user: User;

  @Field(() => ProductDetail)
  @OneToOne(() => ProductDetail)
  @JoinColumn()
  productDetails: ProductDetail;
  @Column({ nullable: true })
  productDetailsId: string;
}
