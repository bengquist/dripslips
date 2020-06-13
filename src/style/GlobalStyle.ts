import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Karla";
    src: url("/fonts/Karla-Bold.woff2");
    font-weight: bold;
    font-style: bold;
    font-display: swap;
  }
  @font-face {
    font-family: "Karla";
    src: url("/fonts/Karla-Regular.woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  html {
    font-family: "Karla", sans-serif;
    font-weight: bold;
  }
`;
