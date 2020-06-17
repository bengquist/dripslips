import React from "react";
import styled from "styled-components";
import { lightGrayOutline } from "../style/helpers";

type Props = {
  title: string;
  listItems?: { text: string; active?: boolean }[];
  boxItems?: { text?: string; color?: string; active?: boolean }[];
};

const ItemListFilterSection: React.FC<Props> = ({
  title,
  listItems = [],
  boxItems = [],
}) => {
  const renderListItems = listItems.map((item) => (
    <ListItem active={item.active}>{item.text}</ListItem>
  ));

  const renderBoxItems = boxItems.map((item) => (
    <BoxItem backgroundColor={item.color}>{item.text}</BoxItem>
  ));

  return (
    <Container>
      <Title>{title}</Title>
      <ListContainer>{renderListItems}</ListContainer>
      {renderBoxItems}
    </Container>
  );
};

export default ItemListFilterSection;

const Container = styled.div`
  ${lightGrayOutline};
  padding: 1.5rem 3rem;
`;

const Title = styled.h5`
  text-transform: uppercase;
  padding: 1rem 0;
`;

const ListContainer = styled.div``;

const ListItem = styled.button<{ active?: boolean }>`
  font-weight: normal;
  padding: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background: ${({ active, theme }) =>
    active ? theme.colors.black : theme.colors.lightGray};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.black};
  transition: 0.3s;
`;

const BoxItem = styled.button<{
  backgroundColor?: string;
}>`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  outline: 1px solid black;
  background: ${({ backgroundColor }) => backgroundColor};
  font-weight: normal;
`;
