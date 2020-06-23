import React from "react";
import styled from "styled-components";

const LinkButton: React.FC = ({ children }) => {
  return <Button>{children}</Button>;
};

export default LinkButton;

const Button = styled.button`
  :hover {
    text-decoration: underline;
  }
`;
