import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import ProductDetail from "./ProductDetail";

export enum Gender {
  Male,
  Female,
}

registerEnumType(Gender, {
  name: "Gender",
});

@Entity()
@ObjectType()
export default class Product extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
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

  @Field(() => Gender)
  @Column()
  gender: Gender;

  @Field(() => [ProductDetail])
  @OneToMany(() => ProductDetail, (productDetail) => productDetail.product)
  details: ProductDetail[];
}
