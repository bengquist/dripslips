import { ApolloProvider } from "@apollo/react-hooks";
import { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import { useApollo } from "../apollo/apolloClient";
import { getSiteLayout } from "../app/SiteLayout";
import { AuthProvider } from "../auth/AuthContext";
import { CartProvider } from "../cart/CartContext";
import GlobalStyle from "../style/GlobalStyle";
import theme from "../style/theme";

type AppProps = {
  Component: NextPage;
  pageProps: any;
};

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  const getLayout = Component.getLayout || getSiteLayout;

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <CartProvider>
              {getLayout(<Component {...pageProps} />)}
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
