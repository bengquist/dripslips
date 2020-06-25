import { Field, Float, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Product extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => ID)
  @Column("text")
  modelId: string;

  @Field(() => String)
  @Column("text")
  title: string;

  @Field(() => String)
  @Column("text")
  description: string;

  @Field(() => Float)
  @Column("text")
  price: number;

  @Field(() => Float)
  @Column("text")
  size: number;

  @Field(() => String)
  @Column("text")
  type: string;

  @Field(() => String)
  @Column("text")
  gender: string;

  @Field(() => String)
  @Column("text")
  colorGroup: string;

  @Field(() => [String])
  @Column("text")
  availableColors: string[];

  @Field(() => [String])
  @Column("text")
  availableSizes: string[];

  @Field(() => [String])
  @Column("text")
  images: string[];
}
