import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const HeaderActions = () => {
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
      <Link href="/cart">
        <Action>
          <FontAwesomeIcon icon={faShoppingBasket} size="lg" />
        </Action>
      </Link>
    </Container>
  );
};

export default HeaderActions;

const Container = styled.div`
  margin-left: 1rem;
`;

const Action = styled.button`
  padding: 0.75rem;
`;
