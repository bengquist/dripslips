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
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  size: number;

  @Field()
  @Column()
  color: string;

  @ManyToOne(() => Product, (product) => product.productDetails)
  product: Product;
  @Column({ nullable: true })
  productId: string;

  @Field(() => [ProductImage])
  @OneToMany(() => ProductImage, (productImage) => productImage.productDetails)
  productImages: ProductImage[];
}
