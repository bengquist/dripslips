import React from "react";
import styled from "styled-components";
import { headerStyles } from "../app/Header";

const ProfileHeader = () => {
  return (
    <Container>
      <Button>My Profile</Button>
      <Button>My Orders</Button>
      <Button>My Wishlist</Button>
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
