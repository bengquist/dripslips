import React from "react";
import styled from "styled-components";
import { flexAlignCenter, gap } from "../style/helpers";
import Input from "../ui/Input";
import LinkButton from "../ui/LinkButton";
import SquareButton from "../ui/SquareButton";

type Props = {
  title?: string;
};

const AuthBox: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      {title && <h2>{title}</h2>}
      <AuthInput label="Login *" />
      <AuthInput label="Password *" />
      <LinkButton>Forgot your password?</LinkButton>
      <div style={{ width: "100%" }} css={[flexAlignCenter, gap({ right: 1 })]}>
        <SquareButton variant="secondary">Register</SquareButton>
        <SquareButton>Sign In</SquareButton>
      </div>
    </Container>
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
  padding: 2rem;

  > h2 {
    margin-bottom: 1rem;
  }
`;

const AuthInput = styled(Input)`
  width: 100%;
`;
