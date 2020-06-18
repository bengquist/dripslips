import React from "react";
import SideModal, { SideModalProps } from "../modal.tsx/SideModal";

const ProductSizeModal: React.FC<SideModalProps> = (props) => {
  return (
    <SideModal {...props}>
      <SideModal.Header>Size</SideModal.Header>
      <SideModal.Body>
        <div>a</div>
      </SideModal.Body>
    </SideModal>
  );
};

export default ProductSizeModal;
