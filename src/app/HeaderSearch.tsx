import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const HeaderSearch = () => {
  return (
    <Container>
      <Icon icon={faSearch} />
      <Input placeholder="Search here" />
    </Container>
  );
};

export default HeaderSearch;

const Container = styled.div`
  background: ${(props) => props.theme.colors.shadedWhite};
  padding: 0 0.75rem;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.75rem;
`;

const Input = styled.input`
  width: 20rem;
  font-weight: normal;
  border: none;
  background: none;
  padding: 0.75rem 0;

  :focus {
    outline: none;
  }
`;
