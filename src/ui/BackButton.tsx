import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";
import { lightGrayOutline } from "../style/helpers";

const BackButton = () => {
  const router = useRouter();

  return <Container onClick={router.back}>&larr;</Container>;
};

export default BackButton;

const Container = styled.button`
  background: ${({ theme }) => theme.colors.white};
  ${lightGrayOutline};
  font-size: 1.5rem;
  padding: 0 3rem;
  transition: 0.3s;
  height: 100%;
  min-height: 65px;

  :hover {
    background: ${({ theme }) => theme.colors.lightGray};
  }
`;
