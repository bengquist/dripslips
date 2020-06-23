import React from "react";
import styled, { css } from "styled-components";
import SEO from "../app/SEO";
import AuthBox from "../auth/AuthBox";
import { gap } from "../style/helpers";
import Loader from "../ui/Loader";

const checkout = () => {
  return (
    <Loader>
      <SEO title="Checkout" />
      <Container>
        <Left>
          <h1>I ALREADY HAVE AN ACCOUNT</h1>
          <AuthBox />
        </Left>
        <Right>
          <h1>CONTINUE WITHOUT AN ACCOUNT</h1>
        </Right>
      </Container>
    </Loader>
  );
};

export default checkout;

const baseSectionStyles = css`
  width: 100%;
  padding: 3rem;
  ${gap({ bottom: 2 })}
`;

const Container = styled.div`
  display: flex;
  min-height: 100%;
`;

const Left = styled.section`
  ${baseSectionStyles};
  background: ${({ theme }) => theme.colors.shadedWhite};
  border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

const Right = styled.section`
  ${baseSectionStyles};
`;
