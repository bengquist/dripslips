import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { gap } from "../style/helpers";

type Props = {
  label?: string;
  options: string[];
};

const Select: React.FC<Props> = ({ options, label }) => {
  return (
    <Container>
      {label && <p>{label}</p>}
      <SelectCustom>
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
  bottom: 1.25rem;
  right: 0.8rem;
`;
