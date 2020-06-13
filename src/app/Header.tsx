import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <HeaderSection>
        <Logo>dripslips</Logo>
        <OptionContainer>
          <Option>Men</Option>
          <Option>Women</Option>
        </OptionContainer>
      </HeaderSection>

      <HeaderSection>
        <OptionContainer>
          <Option>Men</Option>
          <Option>Women</Option>
        </OptionContainer>
      </HeaderSection>
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

const HeaderSection = styled.div`
  display: flex;
`;

const OptionContainer = styled.div`
  display: flex;
`;

const Option = styled.button``;
