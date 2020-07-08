import { concat } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { useMemo } from "react";
import authLink from "./authLink";
import errorLink from "./errorlink";
import httpLink from "./httplink";

let apolloClient: ApolloClient<any>;

const apolloLink = concat(errorLink, concat(authLink, httpLink));

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: apolloLink,
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
