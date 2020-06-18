import React from "react";
import SideModal, { SideModalProps } from "../modal.tsx/SideModal";

const CartSideModal: React.FC<SideModalProps> = (props) => {
  return (
    <SideModal {...props}>
      <SideModal.Header onClose={props.onClose}>Cart</SideModal.Header>
      <SideModal.Body>yo</SideModal.Body>
    </SideModal>
  );
};

export default CartSideModal;
