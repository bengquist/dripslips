import React from "react";
import styled from "styled-components";

const LinkButton: React.FC = ({ children }) => {
  return <Button>{children}</Button>;
};

export default LinkButton;

const Button = styled.button`
  font-size: 1rem;

  :hover {
    text-decoration: underline;
  }
`;
