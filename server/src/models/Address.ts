import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Order from "./Order";
import User, { Title } from "./User";

@Entity()
@ObjectType()
export default class Address extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => Title)
  @Column()
  title: Title;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  phoneNumber: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  companyName?: string;

  @Field()
  @Column()
  addressPrimary: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  addressSecondary?: string;

  @Field()
  @Column()
  postalCode: number;

  @Field()
  @Column()
  city: string;

  @Field()
  @Column()
  state: string;

  @Field()
  @Column()
  country: string;

  @Field()
  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.address)
  user: User;

  @OneToMany(() => Order, (order) => order.address)
  orders: Order[];
}
