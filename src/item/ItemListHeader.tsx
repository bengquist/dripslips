import React from "react";
import styled from "styled-components";
import ItemFilter from "./ItemFilter";

const ItemListHeader = () => {
  return (
    <Container>
      <p>
        The Essentials <ItemCount>(79 looks)</ItemCount>
      </p>

      <ItemFilter />
    </Container>
  );
};

export default ItemListHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3rem;
`;

const ItemCount = styled.span`
  font-weight: normal;
`;
