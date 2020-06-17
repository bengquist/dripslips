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
};

const FilterList: React.FC<FilterListProps> = ({ isVisible = false }) => {
  return (
    <FiltersContainer isVisible={isVisible}>
      <div>
        <p>a</p>
      </div>
    </FiltersContainer>
  );
};

const FiltersContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: ${headerHeight};
  right: 0;

  display: flex;
  flex-direction: column;

  margin-top: 1px;
  width: 100%;
  height: ${(props) => (props.isVisible ? 500 : 0)}px;
  overflow: hidden;
  background: white;

  transition: 0.3s;
`;
