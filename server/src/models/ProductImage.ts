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
export class ProductImage extends BaseEntity {
  @Field(() => Product)
  @ManyToOne(() => Product, (product) => product.productImages)
  product: Product;

  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  url: string;
}
