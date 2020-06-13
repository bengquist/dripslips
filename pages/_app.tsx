import { ApolloProvider } from "@apollo/react-hooks";
import { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import { useApollo } from "../lib/apolloClient";
import theme from "../style/theme";

type AppProps = {
  Component: NextPage;
  pageProps: any;
};

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
