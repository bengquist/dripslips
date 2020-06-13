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
    color: "#19110B";
    min-height: 100vh;
  }

  body {
    margin: 0;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
