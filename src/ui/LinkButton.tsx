import React from "react";
import styled from "styled-components";

const LinkButton: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default LinkButton;

const Container = styled.button``;
