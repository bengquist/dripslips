import React from "react";
import styled from "styled-components";

const ItemListFilterSection = () => {
  return (
    <Container>
      <Title>Categories</Title>
    </Container>
  );
};

export default ItemListFilterSection;

const Container = styled.div`
  outline: 1px solid ${(props) => props.theme.colors.lightGray};
  padding: 1.5rem 3rem;
`;

const Title = styled.h4`
  text-transform: uppercase;
`;
