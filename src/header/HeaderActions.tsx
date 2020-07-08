import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../auth/AuthContext";
import AuthSideModal from "../auth/AuthSideModal";
import CartIcon from "../cart/CartIcon";
import CartSideModal from "../cart/CartSideModal";

const HeaderActions = () => {
  const { user, clearUser } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const handleProfileRedirect = () => {
    if (!user) {
      setShowAuthModal(true);
    } else {
      clearUser();
    }
  };

  return (
    <Container>
      <Link href="/wishlist">
        <Action>
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </Action>
      </Link>
      <Action onClick={handleProfileRedirect}>
        <FontAwesomeIcon icon={faUser} size="lg" />
      </Action>
      <Action onClick={() => setShowCartModal(true)}>
        <CartIcon />
      </Action>

      <AuthSideModal
        isVisible={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
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
