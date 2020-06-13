import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { flexAlignCenter } from "../style/helpers";
import HeaderActions from "./HeaderActions";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <Container>
      <div css={flexAlignCenter}>
        <Logo>dripslips</Logo>
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

const Logo = styled.span`
  font-size: 2rem;
  margin-right: 2rem;
`;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  outline: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const OptionContainer = styled.div`
  display: flex;
`;

const Option = styled.button`
  padding: 1.5rem;
`;
