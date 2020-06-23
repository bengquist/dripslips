import styled from "styled-components";
import { lightGrayOutline } from "../style/helpers";

export default styled.button`
  font-size: 1.75rem;
  padding: 1rem 1.5rem;
  ${lightGrayOutline}
  transition: .3s;

  :hover,
  :focus {
    background: ${({ theme }) => theme.colors.lightGray};
  }
`;
