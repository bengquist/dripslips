import React, { ComponentPropsWithoutRef } from "react";
import { css } from "styled-components";

const inputStyle = css`
  font-size: 1rem;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  transition: 0.3s;
  outline: none;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  :hover,
  :focus {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

const Input: React.FC<ComponentPropsWithoutRef<"input">> = (props) => {
  return <input css={inputStyle} type="text" {...props} />;
};

export default Input;
