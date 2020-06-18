import React from "react";
import styled from "styled-components";
import Portal from "./Portal";

type Props = {
  isVisible?: boolean;
  onClose: () => void;
};

const SideModal: React.FC<Props> = ({ children, isVisible, onClose }) => {
  return (
    <Portal>
      <Overlay onClick={onClose} visible={isVisible}>
        <Modal onClick={(e) => e.stopPropagation()} visible={isVisible}>
          {children}
        </Modal>
      </Overlay>
    </Portal>
  );
};

export default SideModal;

const Overlay = styled.div<{ visible?: boolean }>`
  display: flex;
  flex-direction: row-reverse;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1;
  transition: 0.3s background-color;
  background-color: rgba(0, 0, 0, ${({ visible }) => (visible ? 0.7 : 0)});
  pointer-events: ${({ visible }) => (visible ? "default" : "none")};
`;

const Modal = styled.div<{ visible?: boolean }>`
  background: ${({ theme }) => theme.colors.white};
  max-width: ${({ visible }) => (visible ? 20 : 0)}rem;
  width: 100%;
  height: 100%;
  transition: 0.3s max-width;
`;
