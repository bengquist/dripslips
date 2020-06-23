import React from "react";
import styled from "styled-components";
import Header from "../header/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  min-height: 100%;
`;
