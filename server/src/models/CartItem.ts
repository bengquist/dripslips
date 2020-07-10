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
import { Cart } from "./Cart";
import ProductDetail from "./ProductDetail";

@Entity()
@ObjectType()
export class CartItem extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ default: 1 })
  quantity: number;

  @ManyToOne(() => Cart, (cart) => cart.items)
  cart: Cart;
  @Column({ nullable: true })
  cartId: string;

  @Field(() => ProductDetail)
  @OneToOne(() => ProductDetail)
  @JoinColumn()
  productDetails: ProductDetail;
  @Column({ nullable: true })
  productDetailsId: string;
}
