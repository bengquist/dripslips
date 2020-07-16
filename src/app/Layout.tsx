import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import CheckoutHeader from "../checkout/CheckoutHeader";
import ProfileHeader from "../profile/ProfileHeader";
import routes from "../routing/routes";
import Header, { headerHeightNum } from "./Header";

const Layout: React.FC = ({ children }) => {
  const router = useRouter();

  const onProfilePage = router.pathname.startsWith(routes.MY_PROFILE);
  const onCheckoutPage = router.pathname.startsWith(routes.CHECKOUT);

  const headerCount = onProfilePage || onCheckoutPage ? 2 : 1;

  return (
    <Container>
      <Header />
      {onProfilePage && <ProfileHeader />}
      {onCheckoutPage && <CheckoutHeader />}

      <Main headerCount={headerCount}>{children}</Main>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  height: 100%;
`;

const Main = styled.main<{ headerCount: number }>`
  height: calc(100% - ${({ headerCount }) => headerHeightNum * headerCount}px);
`;
