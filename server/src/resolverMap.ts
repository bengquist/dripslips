import { IResolvers } from "graphql-tools";

const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, __: void): string {
      return `👋 Hello world! 👋`;
    },
  },
};

export default resolverMap;
