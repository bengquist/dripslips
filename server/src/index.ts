import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import { verify } from "jsonwebtoken";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import User from "./models/User";
import resolvers from "./resolvers";

const port = process.env.PORT || 4000;
const path = "/graphql";

(async () => {
  await createConnection();

  const app = express();
  app.use(cookieParser());

  // app.post("/refresh_token", refreshToken);

  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    context: async ({ req, res }) => {
      let user = null;

      const authorization = req.headers.authorization || "";
      const token = authorization?.split(" ")[1];

      if (token) {
        const { userId = "" } = verify(
          token,
          process.env.JWT_ACCESS_TOKEN_SECRET!
        ) as any;
        user = await User.findOne(userId);
      }

      return { req, res, user };
    },
  });

  server.applyMiddleware({ app, path });

  app.listen({ port }, () => {
    console.info(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
})();
