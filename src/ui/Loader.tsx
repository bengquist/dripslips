import { ApolloError } from "apollo-boost";
import React from "react";
import styled from "styled-components";
import { fadeIn } from "../style/keyframes";
import Spinner from "./Spinner";

type Props = {
  isLoading?: boolean;
  error?: ApolloError;
};

const Loader: React.FC<Props> = ({ children, error, isLoading }) => {
  if (error) {
    return <Container>Something went wrong</Container>;
  }

  return <Container>{isLoading ? <Spinner /> : children}</Container>;
};

export default Loader;

const Container = styled.div`
  animation: 0.5s ${fadeIn};
`;
