import React, { useState } from "react";
import styled from "styled-components";
import { headerHeight } from "../header/Header";

const ItemListNavFilter: React.FC = ({ children }) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <Button onClick={() => setShowFilters(!showFilters)}>Filter</Button>
      <FilterList isVisible={showFilters} />
    </>
  );
};

export default ItemListNavFilter;

const Button = styled.button`
  outline: none;
  padding: 1.5rem 4rem;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom: 2px solid transparent;
  transition: 0.2s ease-out;

  :focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  }
`;

type FilterListProps = {
  isVisible?: boolean;
};

const FilterList: React.FC<FilterListProps> = ({ isVisible = false }) => {
  return <FiltersContainer isVisible={isVisible}>a</FiltersContainer>;
};

const FiltersContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: ${headerHeight};
  right: 0;

  width: 100%;
  height: ${(props) => (props.isVisible ? 500 : 0)}px;
  overflow: hidden;
  background: white;

  transition: 0.3s;
`;
