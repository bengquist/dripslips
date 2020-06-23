import React from "react";
import SideModal, { SideModalProps } from "../modal/SideModal";
import AuthBox from "./AuthBox";

const AuthSideModal: React.FC<SideModalProps> = (props) => {
  return (
    <SideModal {...props}>
      <SideModal.Header onClose={props.onClose}>
        IDENTIFICATION
      </SideModal.Header>
      <AuthBox title="MEMBERS PLEASE SIGN IN" />
    </SideModal>
  );
};

export default AuthSideModal;
