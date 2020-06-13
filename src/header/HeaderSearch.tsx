import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const HeaderSearch = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faSearch} />
      <Input placeholder="Search here" />
    </Container>
  );
};

export default HeaderSearch;

const Container = styled.div`
  background: ${(props) => props.theme.colors.shadedWhite};
  padding: 0.5rem;
`;

const Input = styled.input`
  width: 20rem;
  font-weight: normal;
  font-size: 1rem;
  border: none;
  background: none;

  :focus {
    outline: none;
  }
`;
