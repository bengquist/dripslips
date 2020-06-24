import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { gap } from "../style/helpers";
import ErrorMessage from "./ErrorMessage";

type Props = ComponentPropsWithoutRef<"select"> & {
  error?: string | false;
  label?: string;
  options: string[];
};

const Select: React.FC<Props> = ({ options, label, error, ...props }) => {
  return (
    <div css={gap({ bottom: 0.5 })}>
      <Container error={error}>
        {label && <p>{label}</p>}
        <SelectCustom error={error} {...props}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectCustom>
        <Arrow>
          <FontAwesomeIcon icon={faChevronDown} />
        </Arrow>
      </Container>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default Select;

const Container = styled.label<{ error?: string | false }>`
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.black};
  position: relative;
  display: inline-block;
  width: 100%;
  ${gap({ bottom: 0.5 })}

  > p {
    font-size: 0.8rem;
  }
`;

const SelectCustom = styled.select<{ error?: string | false }>`
  width: 100%;
  font-size: 1rem;
  margin: 0;
  padding: 0.8rem;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.lightGray)};
  transition: 0.3s;
  outline: none;

  appearance: none;

  :hover,
  :focus {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 0.8rem;
  right: 0.8rem;
  pointer-events: none;
`;
