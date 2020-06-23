import React, { ReactNode } from "react";
import styled from "styled-components";
import { stopPropagation } from "../common/eventHelpers";
import {
  flexAlignCenter,
  flexCenter,
  gap,
  lightGrayOutline,
} from "../style/helpers";
import CloseButton from "./CloseButton";
import Overlay from "./Overlay";
import Portal from "./Portal";

export type CenterModalProps = {
  children?: ReactNode;
  isVisible?: boolean;
  onClose: () => void;
};

const CenterModal = ({ children, isVisible, onClose }: CenterModalProps) => {
  return (
    <Portal>
      <Overlay onClick={onClose} visible={isVisible}>
        <ModalContainer>
          <Modal onClick={stopPropagation} visible={isVisible}>
            {children}
          </Modal>
        </ModalContainer>
      </Overlay>
    </Portal>
  );
};

export default CenterModal;

CenterModal.Header = ({
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

CenterModal.Body = ({ children }: { children: ReactNode }) => {
  return <ModalBody>{children}</ModalBody>;
};

const ModalContainer = styled.div`
  ${flexCenter}
  height: 100%;
`;

const Modal = styled.div<{ visible?: boolean }>`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 30rem;
  transition: 0.3s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

const ModalHeader = styled.div`
  ${flexAlignCenter};
  ${lightGrayOutline};
  padding-left: 2rem;
`;

const ModalTitle = styled.h2`
  flex: 1;
`;

const ModalBody = styled.div`
  padding: 2rem;
  ${lightGrayOutline}
  ${gap({ bottom: 2 })}
`;
