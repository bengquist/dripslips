import React from "react";
import styled from "styled-components";
import SideModal, { SideModalProps } from "../modal/SideModal";

type Props = SideModalProps & {
  sizes: string[];
  onSelect: (value: string) => void;
};

const ProductOptionModal: React.FC<Props> = (props) => {
  const selectHandler = (value: string) => {
    props.onSelect(value);
    props.onClose();
  };

  return (
    <SideModal {...props}>
      <SideModal.Header onClose={props.onClose}>Size</SideModal.Header>
      <SideModal.Body>
        <SizeOptionContainer>
          {props.sizes.map((option) => (
            <SizeOption key={option} onClick={() => selectHandler(option)}>
              {option}
            </SizeOption>
          ))}
        </SizeOptionContainer>
      </SideModal.Body>
    </SideModal>
  );
};

export default ProductOptionModal;

const SizeOptionContainer = styled.div``;

const SizeOption = styled.button`
  font-weight: bold;
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
