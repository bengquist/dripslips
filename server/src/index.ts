import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import { verify } from "jsonwebtoken";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import User from "./models/User";
import resolvers from "./resolvers";
import refreshToken from "./utils/refreshToken";

const port = process.env.PORT || 4000;

(async () => {
  await createConnection();

  const app = express();

  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };

  app.use(cors(corsOptions));
  app.use("/refresh_token", cookieParser());
  app.post("/refresh_token", refreshToken);

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

      try {
        if (token) {
          const { userId = "" } = verify(
            token,
            process.env.JWT_ACCESS_TOKEN_SECRET!
          ) as any;
          user = await User.findOne(userId);
        }
      } catch (e) {
        console.error(e.message);
      }

      return { req, res, user };
    },
  });

  server.applyMiddleware({ app, cors: false });

  app.listen({ port }, () => {
    console.info(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
})();
