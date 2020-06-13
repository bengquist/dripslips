import { ApolloServer } from "apollo-server-express";
import compression from "compression";
import cors from "cors";
import express from "express";
import { GraphQLSchema } from "graphql";
import depthLimit from "graphql-depth-limit";
import "graphql-import-node";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";
import * as typeDefs from "./schema/schema.graphql";

const port = process.env.PORT || 4000;

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
app.use("*", cors());
app.use(compression());

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
});
server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port }, (): void =>
  console.log(`🚀 We're in boys @ http://localhost:${port}/graphql 🚀`)
);
