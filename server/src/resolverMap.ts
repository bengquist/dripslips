import { IResolvers } from "graphql-tools";
import items from "./data/items";

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
  },
};

export default resolverMap;
