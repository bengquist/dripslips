import { IResolvers } from "graphql-tools";
import items from "./data/items";
import users from "./data/users";

const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, __: void): string {
      return `👋 Hello world! 👋`;
    },
    items: () => {
      return items;
    },
    item: (_, { id }) => {
      const item = items.find((item) => item.id === id);
      return item;
    },
    user: (_, { id }) => {
      const user = users.find((user) => user.id === id);
      return user;
    },
  },
};

export default resolverMap;
