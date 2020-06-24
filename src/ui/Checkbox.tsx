import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { flexAlignCenter, gap } from "../style/helpers";

type Props = ComponentPropsWithoutRef<"input"> & {
  label: string;
};

const Checkbox: React.FC<Props> = ({ label, ...props }) => {
  return (
    <Container>
      <input type="checkbox" {...props} />
      <p>{label}</p>
    </Container>
  );
};

export default Checkbox;

const Container = styled.label`
  ${gap({ right: 0.5 })}
  ${flexAlignCenter}
`;
