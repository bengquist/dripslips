import { ApolloServer } from "apollo-server-express";
import compression from "compression";
import cors from "cors";
import express from "express";
import depthLimit from "graphql-depth-limit";
import schema from "./schema";

const port = process.env.PORT || 4000;

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
