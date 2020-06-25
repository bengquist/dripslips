import { IResolvers } from "graphql-tools";
import products from "./data/products";
import users from "./data/users";

const resolvers: IResolvers = {
  Query: {
    products: () => {
      return products;
    },
    product: (_, { id }) => {
      const item = products.find((item) => item.id === id);
      return item;
    },
    user: (_, { id }) => {
      const user = users.find((user) => user.id === id);
      return user;
    },
  },
};

export default resolvers;
