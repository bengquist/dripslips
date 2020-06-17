import React from "react";
import styled from "styled-components";
import { headerHeight } from "../header/Header";
import ItemListFilter from "./ItemListFilter";

const ItemListNav = () => {
  return (
    <Container>
      <p>
        The Essentials <ItemCount>(79 looks)</ItemCount>
      </p>

      <ItemListFilter />
    </Container>
  );
};

export default ItemListNav;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${headerHeight};
  background: white;
  padding-left: 3rem;
  outline: 1px solid ${(props) => props.theme.colors.lightGray};

  position: sticky;
  top: ${headerHeight};
`;

const ItemCount = styled.span`
  font-weight: normal;
`;
