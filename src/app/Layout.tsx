import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import ProfileHeader from "../profile/ProfileHeader";
import routes from "../routing/routes";
import Header, { headerHeight } from "./Header";

const Layout: React.FC = ({ children }) => {
  const router = useRouter();

  return (
    <Container>
      <Header />

      <Main>
        {router.pathname.startsWith(routes.MY_PROFILE) && <ProfileHeader />}
        {children}
      </Main>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  height: 100%;
`;

const Main = styled.main`
  height: calc(100% - ${headerHeight});
`;
