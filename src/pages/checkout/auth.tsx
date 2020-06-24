import Router from "next/router";
import React from "react";
import styled, { css } from "styled-components";
import SEO from "../../app/SEO";
import AuthBox from "../../auth/AuthBox";
import { flexAlignSelfRight, gap } from "../../style/helpers";
import Loader from "../../ui/Loader";
import SquareButton from "../../ui/SquareButton";

const CheckoutAuthPage = () => {
  const redirect = () => {
    Router.replace("/checkout/shipping");
  };

  return (
    <Loader>
      <SEO title="Identification" />
      <Container>
        <Left>
          <h1>I ALREADY HAVE AN ACCOUNT</h1>
          <AuthBox />
        </Left>
        <Right>
          <h1>CONTINUE WITHOUT AN ACCOUNT</h1>
          <p>
            Creating an account will enable you to track your online orders,
            access your purchase history, receipts, washlistt and more.
          </p>
          <div css={flexAlignSelfRight}>
            <SquareButton onClick={redirect}>
              Continue without an account
            </SquareButton>
          </div>
        </Right>
      </Container>
    </Loader>
  );
};

export default CheckoutAuthPage;

const baseSectionStyles = css`
  display: flex;
  flex-direction: column;

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
