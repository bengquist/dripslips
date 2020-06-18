import React from "react";
import styled from "styled-components";
import SideModal, { SideModalProps } from "../modal.tsx/SideModal";

type Props = SideModalProps & {
  sizes: number[];
};

const ProductSizeModal: React.FC<Props> = ({ onClose, ...props }) => {
  return (
    <SideModal onClose={onClose} {...props}>
      <SideModal.Header onClose={onClose}>Size</SideModal.Header>
      <SideModal.Body>
        <SizeOptionContainer>
          {props.sizes.map((size) => (
            <SizeOption onClick={onClose}>{size}</SizeOption>
          ))}
        </SizeOptionContainer>
      </SideModal.Body>
    </SideModal>
  );
};

export default ProductSizeModal;

const SizeOptionContainer = styled.div``;

const SizeOption = styled.button`
  width: 100%;
  text-align: left;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  transition: 0.3s;

  :hover,
  :focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
