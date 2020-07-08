import { HttpLink } from "apollo-boost";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});

export default httpLink;
