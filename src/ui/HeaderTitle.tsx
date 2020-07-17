import React, { ReactNode } from "react";
import styled from "styled-components";
import { flexSpaceBetweenAlignCenter } from "../style/helpers";

type Props = {
  button?: ReactNode;
};

const HeaderTitle: React.FC<Props> = ({ children, button }) => {
  return (
    <Container>
      <Title>{children}</Title>
      <div>{button}</div>
    </Container>
  );
};

export default HeaderTitle;

const Container = styled.div`
  ${flexSpaceBetweenAlignCenter};
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 2.25rem;
`;
