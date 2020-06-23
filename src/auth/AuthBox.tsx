import React from "react";
import styled from "styled-components";
import { gap } from "../style/helpers";
import Input from "../ui/Input";
import LinkButton from "../ui/LinkButton";

const AuthBox = () => {
  return (
    <Container>
      <AuthInput label="Login *" />
      <AuthInput label="Password *" />
      <LinkButton>Forgot your password?</LinkButton>
    </Container>
  );
};

export default AuthBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.white};
  ${gap({ bottom: 2 })}
  padding: 3rem;
`;

const AuthInput = styled(Input)`
  width: 100%;
`;
