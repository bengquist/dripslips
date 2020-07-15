import React from "react";
import styled from "styled-components";
import Header, { headerHeight } from "./Header";

const SiteLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};

export const getSiteLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;

const Container = styled.div`
  height: 100%;
`;

const Main = styled.main`
  height: calc(100% - ${headerHeight});
`;
