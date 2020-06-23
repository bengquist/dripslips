import React from "react";
import styled from "styled-components";
import { flexAlignCenter, gap } from "../style/helpers";
import Input from "../ui/Input";
import LinkButton from "../ui/LinkButton";
import SquareButton from "../ui/SquareButton";

const AuthBox = () => {
  return (
    <>
      <Container>
        <AuthInput label="Login *" />
        <AuthInput label="Password *" />
        <LinkButton>Forgot your password?</LinkButton>
      </Container>

      <div css={[flexAlignCenter, gap({ right: 1 })]}>
        <SquareButton variant="secondary">Register</SquareButton>
        <SquareButton>Sign In</SquareButton>
      </div>
    </>
  );
};

export default AuthBox;

const Container = styled.div`
  width: 100%;
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
