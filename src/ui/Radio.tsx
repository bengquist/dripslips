import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { flexAlignStart, gap } from "../style/helpers";

type Props = ComponentPropsWithoutRef<"input"> & {
  label: string;
  subLabel?: string;
};

const Radio: React.FC<Props> = ({ label, subLabel, ...props }) => {
  return (
    <Container>
      <input type="radio" {...props} />
      <div css={gap({ bottom: 0.5 })}>
        <p>{label}</p>
        {subLabel && <p style={{ fontSize: "0.8rem" }}>{subLabel}</p>}
      </div>
    </Container>
  );
};

export default Radio;

const Container = styled.label`
  ${gap({ right: 0.5 })}
  ${flexAlignStart}
`;
