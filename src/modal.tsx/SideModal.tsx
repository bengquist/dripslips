import React, { ReactNode } from "react";
import styled from "styled-components";
import { stopPropagation } from "../common/eventHelpers";
import { flexAlignCenter, lightGrayOutline } from "../style/helpers";
import Portal from "./Portal";

export type SideModalProps = {
  children?: ReactNode;
  isVisible?: boolean;
  onClose: () => void;
};

const SideModal = ({ children, isVisible, onClose }: SideModalProps) => {
  return (
    <Portal>
      <Overlay onClick={onClose} visible={isVisible}>
        <Modal onClick={stopPropagation} visible={isVisible}>
          {children}
        </Modal>
      </Overlay>
    </Portal>
  );
};

export default SideModal;

SideModal.Header = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  return (
    <ModalHeader>
      <ModalTitle>{children}</ModalTitle>
      <CloseButton onClick={onClose}>&#215;</CloseButton>
    </ModalHeader>
  );
};

SideModal.Body = ({ children }: { children: ReactNode }) => {
  return <ModalBody>{children}</ModalBody>;
};

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

const ModalHeader = styled.div`
  ${flexAlignCenter};
  ${lightGrayOutline};
  padding-left: 1.5rem;
`;

const ModalTitle = styled.h2`
  flex: 1;
`;

const ModalBody = styled.div`
  height: 100%;
  padding: 1.5rem;
  ${lightGrayOutline};
`;

const CloseButton = styled.button`
  font-size: 1.75rem;
  padding: 0.75rem 1.5rem;
  ${lightGrayOutline}
`;
