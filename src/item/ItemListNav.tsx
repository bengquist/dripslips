import React, { useState } from "react";
import styled from "styled-components";
import { headerHeight } from "../header/Header";
import ItemListNavButton from "./ItemListNavButton";

const ItemListNav = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <Container>
      <p>
        The Essentials <ItemCount>(79 looks)</ItemCount>
      </p>

      <ItemListNavButton onClick={() => setShowFilter(!showFilter)}>
        Filter
      </ItemListNavButton>

      {showFilter && <FilterContainer>yo</FilterContainer>}
    </Container>
  );
};

export default ItemListNav;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: white;
  padding-left: 3rem;
  border-top: 1px solid ${(props) => props.theme.colors.lightGray};
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};

  position: sticky;
  top: ${headerHeight};
`;

const ItemCount = styled.span`
  font-weight: normal;
`;

const FilterContainer = styled.div``;
