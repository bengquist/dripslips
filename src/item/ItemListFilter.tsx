import React, { useState } from "react";
import styled from "styled-components";
import { headerHeight } from "../header/Header";
import ItemListFilterSection from "./ItemListFilterSection";

const typeFilters = [
  { text: "Moccasins", active: true },
  { text: "Scuff" },
  { text: "Bootie" },
  { text: "Clog" },
  { text: "Slipper" },
];

const sizeFilters = [
  { text: "7", active: true },
  { text: "7.5", active: true },
  { text: "8", active: true, disabled: true },
  { text: "8.5", active: true },
  { text: "9", active: true },
  { text: "9.5", active: true, disabled: true },
  { text: "10", active: true },
  { text: "10.5", active: true },
  { text: "11", active: true },
];

const colorFilters = [
  { color: "black", active: true },
  { color: "white", active: true },
  { color: "red", active: true },
  { color: "blue", active: true },
  { color: "orange", active: true },
  { color: "yellow" },
  { color: "green" },
  { color: "purple" },
];

const ItemListFilter: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <Button onClick={() => setShowFilters(!showFilters)}>Filter</Button>
      <FilterList
        isVisible={showFilters}
        onClose={() => setShowFilters(false)}
      />
    </>
  );
};

export default ItemListFilter;

const Button = styled.button`
  z-index: 1;
  outline: none;
  height: 100%;
  padding: 0 4rem;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
  transition: 0.2s ease-out;

  :focus {
    box-shadow: 0px 2px 0px ${({ theme }) => theme.colors.black};
  }
`;

type FilterListProps = {
  isVisible?: boolean;
  onClose: () => void;
};

const FilterList: React.FC<FilterListProps> = ({
  isVisible = false,
  onClose,
}) => {
  return (
    <FiltersContainer isVisible={isVisible}>
      <SectionContainer>
        <ItemListFilterSection title="Type" listItems={typeFilters} />
        <ItemListFilterSection title="Size" boxItems={sizeFilters} />
        <ItemListFilterSection title="Color" boxItems={colorFilters} />
      </SectionContainer>
      <HideButton onClick={onClose}> Hide Filters</HideButton>
    </FiltersContainer>
  );
};

const FiltersContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: ${headerHeight};
  right: 0;

  display: flex;
  flex-direction: column;

  outline: 1px solid ${(props) => props.theme.colors.lightGray};
  margin-top: 1px;
  width: 100%;
  max-height: ${(props) => (props.isVisible ? 500 : 0)}px;
  overflow: hidden;
  background: white;

  transition: 0.3s;
`;

const SectionContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const HideButton = styled.button`
  outline: none;
  padding: 1rem 0;
  font-weight: normal;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;
