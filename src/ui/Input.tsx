import React, { ComponentPropsWithoutRef } from "react";
import styled, { css } from "styled-components";
import { gap } from "../style/helpers";

type Props = ComponentPropsWithoutRef<"input"> & {
  label?: string;
};

const inputStyle = css`
  font-size: 1rem;
  padding: 0.8rem;
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

const Input: React.FC<Props> = ({ label, ...props }) => {
  return (
    <Container>
      {label && <p>{label}</p>}
      <input css={inputStyle} type="text" {...props} />
    </Container>
  );
};

export default Input;

const Container = styled.label`
  width: 100%;
  ${gap({ bottom: 0.5 })}

  > p {
    font-size: 0.8rem;
  }
`;
