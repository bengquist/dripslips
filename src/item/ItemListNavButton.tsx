import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

const ItemListNavButton: React.FC<ComponentPropsWithoutRef<"button">> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

export default ItemListNavButton;

const Container = styled.button`
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
