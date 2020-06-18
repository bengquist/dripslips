import React, { useState } from "react";
import styled from "styled-components";
import { stopPropagation } from "../common/eventHelpers";
import { headerHeight } from "../header/Header";
import Overlay from "../modal.tsx/Overlay";
import { lightGrayOutline } from "../style/helpers";
import { colorFilters, sizeFilters, typeFilters } from "./filterData";
import ProductListFilterSection from "./ProductListFilterSection";

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

  :hover,
  :focus {
    box-shadow: 0px 1px 0px ${({ theme }) => theme.colors.black};
  }
`;

type FilterListProps = {
  isVisible?: boolean;
  onClose: () => void;
};

const FilterList: React.FC<FilterListProps> = ({ isVisible, onClose }) => {
  return (
    <Overlay onClick={onClose} visible={isVisible}>
      <FiltersContainer onClick={stopPropagation} visible={isVisible}>
        <SectionContainer>
          <ProductListFilterSection title="Type" listItems={typeFilters} />
          <ProductListFilterSection title="Size" boxItems={sizeFilters} />
          <ProductListFilterSection title="Color" boxItems={colorFilters} />
        </SectionContainer>
        <HideButton onClick={onClose}> Hide Filters</HideButton>
      </FiltersContainer>
    </Overlay>
  );
};

const FiltersContainer = styled.div<{ visible?: boolean }>`
  position: absolute;
  top: ${headerHeight};
  right: 0;

  display: flex;
  flex-direction: column;

  ${lightGrayOutline};
  margin-top: 1px;
  width: 100%;
  max-height: ${({ visible }) => (visible ? 500 : 0)}px;
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
