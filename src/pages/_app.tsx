import { ApolloProvider } from "@apollo/react-hooks";
import { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import { useApollo } from "../apollo/apolloClient";
import Layout from "../app/Layout";
import GlobalStyle from "../style/GlobalStyle";
import theme from "../style/theme";

type AppProps = {
  Component: NextPage;
  pageProps: any;
};

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
