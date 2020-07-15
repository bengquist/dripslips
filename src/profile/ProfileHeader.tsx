import React from "react";
import styled from "styled-components";
import { headerStyles } from "../app/Header";
import ActiveLink from "../routing/ActiveLink";
import routes from "../routing/routes";

const ProfileHeader = () => {
  return (
    <Container>
      <ActiveLink href={routes.MY_PROFILE}>
        <Button>My Profile</Button>
      </ActiveLink>
      <ActiveLink href={routes.MY_ORDERS}>
        <Button>My Orders</Button>
      </ActiveLink>
      <ActiveLink href={routes.MY_WISHLIST}>
        <Button>My Wishlist</Button>
      </ActiveLink>
    </Container>
  );
};

export default ProfileHeader;

const Container = styled.header`
  ${headerStyles};
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 0 3rem;
`;
