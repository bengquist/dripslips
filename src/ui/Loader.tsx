import React from "react";
import styled from "styled-components";
import { fadeIn } from "../style/keyframes";
import Spinner from "./Spinner";

type Props = {
  isLoading?: boolean;
};

const Loader: React.FC<Props> = ({ children, isLoading }) => {
  return <Container>{isLoading ? <Spinner /> : children}</Container>;
};

export default Loader;

const Container = styled.div`
  animation: 0.5s ${fadeIn};
`;
