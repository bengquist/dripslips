import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import {
  flexCenter,
  flexSpaceBetweenAlignCenter,
  lightGrayOutline,
} from "../style/helpers";
import BackButton from "../ui/BackButton";
import LinkButton from "../ui/LinkButton";

const CheckoutHeader: React.FC = () => {
  return (
    <Container>
      <Left>
        <BackButton />
        <LinkButton>
          <FontAwesomeIcon icon={faPencilAlt} /> Auto Fill
        </LinkButton>
      </Left>
      <Right>
        <p>You won't be charged</p>
      </Right>
    </Container>
  );
};

export default CheckoutHeader;

const Container = styled.div`
  display: flex;

  ${lightGrayOutline};
  background: ${({ theme }) => theme.colors.white};
`;

const Left = styled.div`
  padding-right: 3rem;
  width: 60%;
  ${flexSpaceBetweenAlignCenter};
  ${lightGrayOutline};
`;

const Right = styled.div`
  ${flexCenter};
  width: 40%;
`;
