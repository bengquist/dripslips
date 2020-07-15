import React from "react";
import styled from "styled-components";
import HeaderTitle from "../ui/HeaderTitle";

const Profile = () => {
  return (
    <Container>
      <HeaderTitle>MY ADDRESS BOOK</HeaderTitle>
      <div></div>
    </Container>
  );
};

export default Profile;

const Container = styled.section`
  max-width: 50rem;
`;
