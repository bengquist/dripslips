import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import ProductDetail from "./ProductDetail";

@Entity()
@ObjectType()
export default class Product extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => [ProductDetail])
  @OneToMany(() => ProductDetail, (productDetail) => productDetail.product)
  productDetails: ProductDetail;

  @Field(() => ID)
  @Column()
  modelId: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column()
  gender: string;
}
