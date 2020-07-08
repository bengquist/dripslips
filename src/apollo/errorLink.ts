import { fromPromise } from "apollo-boost";
import { onError } from "apollo-link-error";

let isRefreshing = false;
let pendingRequests = [() => {}];

const resolvePendingRequests = () => {
  pendingRequests.map((callback) => callback());
  pendingRequests = [];
};

const getNewToken = async () => {
  const res = await fetch("http://localhost:4000/refresh_token", {
    method: "POST",
    credentials: "include",
  });

  return res.json();
};

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      switch (err.extensions?.code) {
        case "UNAUTHENTICATED":
          let forward$;

          if (!isRefreshing) {
            isRefreshing = true;
            forward$ = fromPromise(
              getNewToken()
                .then(({ accessToken, refreshToken }) => {
                  localStorage.setItem("token", accessToken);
                  resolvePendingRequests();
                  return accessToken;
                })
                .catch((error) => {
                  pendingRequests = [];
                  localStorage.removeItem("token");

                  return;
                })
                .finally(() => {
                  isRefreshing = false;
                })
            ).filter((value) => Boolean(value));
          } else {
            // Will only emit once the Promise is resolved
            forward$ = fromPromise(
              new Promise((resolve) => {
                pendingRequests.push(() => resolve());
              })
            );
          }

          return forward$.flatMap(() => forward(operation));
      }
    }
  }
});

export default errorLink;
