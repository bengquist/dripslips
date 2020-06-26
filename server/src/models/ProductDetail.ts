import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Product from "./Product";

@Entity()
@ObjectType()
export default class ProductDetail extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => Product)
  @ManyToOne(() => Product, (product) => product.details)
  product: Product;

  @Field()
  @Column()
  size: number;

  @Field()
  @Column()
  color: string;
}
