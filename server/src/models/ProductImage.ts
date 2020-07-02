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
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  url: string;

  @ManyToOne(
    () => ProductDetail,
    (productDetails) => productDetails.productImages
  )
  productDetails: ProductDetail;
  @Column({ nullable: true })
  productDetailsId: string;
}
