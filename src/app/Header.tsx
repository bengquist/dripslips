import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";
import routes from "../routing/routes";
import { flexAlignCenter, lightGrayOutline } from "../style/helpers";
import HeaderActions from "./HeaderActions";
import HeaderSearch from "./HeaderSearch";

export const headerHeight = "65px";

const Header = () => {
  return (
    <Container>
      <div css={flexAlignCenter}>
        <Link href={routes.HOME}>
          <Logo>dripslips</Logo>
        </Link>
        <OptionContainer>
          <Link href={routes.MEN}>
            <Option>Men</Option>
          </Link>
          <Link href={routes.WOMEN}>
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

export const headerStyles = css`
  z-index: 1;

  position: sticky;
  top: 0;

  background: white;
  height: ${headerHeight};
  ${lightGrayOutline}
`;

const Container = styled.header`
  ${headerStyles};
  z-index: 2;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.button`
  font-size: 1.5rem;
  margin-right: 2rem;
  height: 100%;
  font-weight: bold;
`;

const OptionContainer = styled.div`
  display: flex;
`;

const Option = styled.button`
  padding: 1.5rem;
  font-weight: normal;
`;
