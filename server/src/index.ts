import { ApolloServer } from "apollo-server-express";
import compression from "compression";
import cors from "cors";
import express from "express";
import { GraphQLSchema } from "graphql";
import depthLimit from "graphql-depth-limit";
import "graphql-import-node";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolverMap";
import * as typeDefs from "./schema/schema.graphql";

const port = process.env.PORT || 4000;

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
});

app.use("*", cors());
app.use(compression());
server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port }, (): void =>
  console.log(`🚀 We're in boys @ http://localhost:${port}/graphql 🚀`)
);
