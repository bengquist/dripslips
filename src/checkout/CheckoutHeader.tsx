import React from "react";
import styled from "styled-components";
import { headerStyles } from "../app/Header";
import ActiveLink from "../routing/ActiveLink";
import routes from "../routing/routes";
import {
  flexCenter,
  flexSpaceBetweenAlignCenter,
  lightGrayOutline,
} from "../style/helpers";
import BackButton from "../ui/BackButton";

const CheckoutHeader: React.FC = () => {
  return (
    <Container>
      <Left>
        <BackButton />

        <div style={{ height: "100%" }}>
          <ActiveLink href={routes.CHECKOUT_SHIPPING}>
            <Button>SHIPPING</Button>
          </ActiveLink>
          <ActiveLink href={routes.CHECKOUT_PAYMENT}>
            <Button>PAYMENT</Button>
          </ActiveLink>
        </div>
      </Left>
      <Right>
        <p>Don't worry, you won't be charged</p>
      </Right>
    </Container>
  );
};

export default CheckoutHeader;

const Container = styled.div`
  display: flex;

  ${headerStyles};
`;

const Left = styled.div`
  width: 65%;
  ${flexSpaceBetweenAlignCenter};
  ${lightGrayOutline};
`;

const Right = styled.div`
  ${flexCenter};
  width: 35%;
`;

const Button = styled.button`
  height: 100%;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 0 3rem;
`;
