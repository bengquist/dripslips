import { ApolloProvider } from "@apollo/react-hooks";
import { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import { useApollo } from "../apollo/apolloClient";
import Layout from "../app/Layout";
import { AuthProvider } from "../auth/AuthContext";
import { CartProvider } from "../cart/CartContext";
import { CheckoutProvider } from "../checkout/CheckoutContext";
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
          <AuthProvider>
            <CartProvider>
              <CheckoutProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </CheckoutProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
