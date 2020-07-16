import React, { ComponentPropsWithoutRef } from "react";
import styled, { css } from "styled-components";
import { lightGrayOutline } from "../style/helpers";

type Props = ComponentPropsWithoutRef<"button"> & {
  variant?: keyof typeof variants;
};

const SquareButton: React.FC<Props> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <Button css={variants[variant]} {...props}>
      {children}
    </Button>
  );
};

export default SquareButton;

const Button = styled.button``;

const baseStyle = css`
  text-align: center;
  font-weight: normal;
  width: 100%;
  min-width: 10rem;
  padding: 1rem 1.5rem;
  outline: 1px solid ${({ theme }) => theme.colors.black};
  transition: 0.3s;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.lightGray};
    ${lightGrayOutline}
  }
`;

const variants = {
  primary: css`
    ${baseStyle}
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.black};
  `,
  secondary: css`
    ${baseStyle}
  `,
};
