import {
  faHeart,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const HeaderActions = () => {
  return (
    <Container>
      <Action>
        <FontAwesomeIcon icon={faHeart} size="lg" />
      </Action>
      <Action>
        <FontAwesomeIcon icon={faUser} size="lg" />
      </Action>
      <Action>
        <FontAwesomeIcon icon={faShoppingBag} size="lg" />
      </Action>
    </Container>
  );
};

export default HeaderActions;

const Container = styled.div`
  margin-left: 2rem;
`;

const Action = styled.button`
  padding: 0.75rem;
`;
