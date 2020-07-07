import React, { ComponentPropsWithRef, forwardRef, Ref } from "react";
import styled from "styled-components";
import { gap } from "../style/helpers";
import ErrorMessage from "./ErrorMessage";

type Props = ComponentPropsWithRef<"input"> & {
  label?: string;
  error?: string | false;
};

const Input = (
  { label, error, ...props }: Props,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <Container error={error}>
      {label && <p>{label}</p>}
      <InputCustom ref={ref} type="text" error={error} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default forwardRef(Input);

const Container = styled.label<{ error?: string | false }>`
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.black};
  display: inline-block;
  width: 100%;
  ${gap({ bottom: 0.5 })}

  > p {
    font-size: 0.8rem;
  }
`;

const InputCustom = styled.input<{ error?: string | false }>`
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.lightGray)};
  outline: none;
  transition: 0.3s;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  :hover,
  :focus {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
  :disabled {
    background: ${({ theme }) => theme.colors.shadedWhite};
  }
`;
