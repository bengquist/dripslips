import React, { ReactNode } from "react";
import styled from "styled-components";
import { stopPropagation } from "../common/eventHelpers";
import { flexAlignCenter, lightGrayOutline } from "../style/helpers";
import CloseButton from "./CloseButton";
import Overlay from "./Overlay";
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
        <ModalContainer>
          <Modal onClick={stopPropagation()} visible={isVisible}>
            {children}
          </Modal>
        </ModalContainer>
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

const ModalContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
`;

const Modal = styled.div<{ visible?: boolean }>`
  background: ${({ theme }) => theme.colors.white};
  max-width: 30rem;
  width: 100%;
  height: 100%;
  transition: 0.3s;
  transform: translateX(${({ visible }) => (visible ? 0 : 30)}rem);
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
