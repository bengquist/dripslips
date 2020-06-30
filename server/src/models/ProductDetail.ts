import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Product from "./Product";
import { ProductImage } from "./ProductImage";

@Entity()
@ObjectType()
export default class ProductDetail extends BaseEntity {
  @Field(() => Product)
  @ManyToOne(() => Product, (product) => product.productDetails)
  product: Product;

  @Field(() => [ProductImage])
  @OneToMany(() => ProductImage, (productImage) => productImage.productDetails)
  productImages: ProductImage[];

  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  size: number;

  @Field()
  @Column()
  color: string;
}
