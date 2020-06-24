import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { gap } from "../style/helpers";

type Props = ComponentPropsWithoutRef<"select"> & {
  label?: string;
  options: string[];
};

const Select: React.FC<Props> = ({ options, label, ...props }) => {
  return (
    <Container>
      {label && <p>{label}</p>}
      <SelectCustom {...props}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </SelectCustom>
      <Arrow>
        <FontAwesomeIcon icon={faChevronDown} />
      </Arrow>
    </Container>
  );
};

export default Select;

const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 100%;
  ${gap({ bottom: 0.5 })}

  > p {
    font-size: 0.8rem;
  }
`;

const SelectCustom = styled.select`
  width: 100%;
  font-size: 1rem;
  margin: 0;
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
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
`;
