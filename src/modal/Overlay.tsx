import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

type Props = ComponentPropsWithoutRef<"div"> & {
  visible?: boolean;
};

const Overlay: React.FC<Props> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Overlay;

const Container = styled.div<{ visible?: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 5;
  transition: 0.3s background-color;
  background-color: rgba(0, 0, 0, ${({ visible }) => (visible ? 0.7 : 0)});
  pointer-events: ${({ visible }) => (visible ? "default" : "none")};
`;
