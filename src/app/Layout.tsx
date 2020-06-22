import React from "react";
import styled from "styled-components";
import Header from "../header/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  height: 100%;
`;

const Main = styled.main`
  height: 100%;
`;
