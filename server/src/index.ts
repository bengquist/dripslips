import { ApolloServer } from "apollo-server-express";
import "dotenv/config";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import resolvers from "./resolvers";

const port = process.env.PORT || 4000;

(async () => {
  await createConnection();

  const app = express();

  /* might use this later */

  // app.use("/refresh_token", cookieParser()).use(cors());
  // app.post("/refresh_token", refreshToken);

  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
  });

  server.applyMiddleware({ app, path: "/" });

  app.listen({ port }, () => {
    console.info(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
})();
