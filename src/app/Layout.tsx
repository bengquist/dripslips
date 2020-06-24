import React from "react";
import styled from "styled-components";
import Header, { headerHeight } from "../header/Header";

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
  min-height: 100%;
`;

const Main = styled.main`
  height: calc(100% - ${headerHeight});
`;
