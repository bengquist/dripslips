import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { gap } from "../style/helpers";

type Props = ComponentPropsWithoutRef<"input"> & {
  label?: string;
};

const Input: React.FC<Props> = ({ label, ...props }) => {
  return (
    <Container>
      {label && <p>{label}</p>}
      <InputCustom type="text" {...props} />
    </Container>
  );
};

export default Input;

const Container = styled.label`
  display: inline-block;
  width: 100%;
  ${gap({ bottom: 0.5 })}

  > p {
    font-size: 0.8rem;
  }
`;

const InputCustom = styled.input`
  width: 100%;
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
