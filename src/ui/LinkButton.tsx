import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

const LinkButton: React.FC<ComponentPropsWithoutRef<"button">> = ({
  children,
  ...props
}) => {
  return <Button {...props}>{children}</Button>;
};

export default LinkButton;

const Button = styled.button`
  font-size: 1rem;

  :hover {
    text-decoration: underline;
  }
`;
