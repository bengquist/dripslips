import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { flexAlignCenter } from "../style/helpers";
import HeaderActions from "./HeaderActions";
import HeaderSearch from "./HeaderSearch";

export const headerHeight = "65px";

const Header = () => {
  return (
    <Container>
      <div css={flexAlignCenter}>
        <Link href="/">
          <Logo>dripslips</Logo>
        </Link>
        <OptionContainer>
          <Link href="/men">
            <Option>Men</Option>
          </Link>
          <Link href="/women">
            <Option>Women</Option>
          </Link>
        </OptionContainer>
      </div>

      <div css={flexAlignCenter}>
        <HeaderSearch />
        <HeaderActions />
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  z-index: 1;
  display: flex;
  justify-content: space-between;

  position: sticky;
  top: 0;

  background: white;
  height: ${headerHeight};
  padding: 0 3rem;
  outline: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const Logo = styled.button`
  font-size: 2rem;
  margin-right: 2rem;
  height: 100%;
`;

const OptionContainer = styled.div`
  display: flex;
`;

const Option = styled.button`
  padding: 1.5rem;
`;
