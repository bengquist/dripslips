import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { lightGrayOutline } from "../style/helpers";

const IconButton: React.FC<ComponentPropsWithoutRef<"button">> = ({
  children,
  ...props
}) => {
  return <Button {...props}>{children}</Button>;
};

export default IconButton;

const Button = styled.button`
  ${lightGrayOutline}
  padding: 1rem;
  transition: 0.3s;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.lightGray};
  }
`;
