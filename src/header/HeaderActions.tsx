import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import CartIcon from "../cart/CartIcon";
import CartSideModal from "../cart/CartSideModal";

const HeaderActions = () => {
  const [showCartModal, setShowCartModal] = useState(false);

  return (
    <Container>
      <Link href="/wishlist">
        <Action>
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </Action>
      </Link>
      <Link href="/profile">
        <Action>
          <FontAwesomeIcon icon={faUser} size="lg" />
        </Action>
      </Link>
      <Action onClick={() => setShowCartModal(true)}>
        <CartIcon />
      </Action>

      <CartSideModal
        isVisible={showCartModal}
        onClose={() => setShowCartModal(false)}
      />
    </Container>
  );
};

export default HeaderActions;

const Container = styled.div`
  margin-left: 1rem;
`;

const Action = styled.button`
  padding: 0.75rem 1rem;
`;
