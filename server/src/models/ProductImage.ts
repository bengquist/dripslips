import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import ProductDetail from "./ProductDetail";

@Entity()
@ObjectType()
export class ProductImage extends BaseEntity {
  @Field(() => ProductDetail)
  @ManyToOne(
    () => ProductDetail,
    (productDetails) => productDetails.productImages
  )
  productDetails: ProductDetail;

  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  url: string;
}
