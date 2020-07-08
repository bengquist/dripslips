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
    font-weight: bold;
    color: "#19110B";
    overflow-y: scroll;

    * > * {
      font-family: "Karla", sans-serif;
      font-weight: bold;
      box-sizing: border-box;
    }
  }

  body {
    height: 100vh;
    margin: 0;
  }

  body > div {
    height: 100%;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
  }

  h1 {
    font-size: 3rem;
    line-height: 3rem;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    color: "#19110B";
  }

  p {
    font-weight: normal;
    line-height: 1rem;
  }

  img {
    height: auto;
    width: 100%; 
    object-fit: contain;
  }

  input {
    margin: 0;
    padding: 0;
  }
`;
