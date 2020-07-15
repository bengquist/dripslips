import styled from "styled-components";

export default styled.h1`
  text-transform: uppercase;
  font-size: 2.25rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
