import { css } from "styled-components";

export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const fluidGrid = ({ maxWidth = 200, gap = 0 }) => css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${maxWidth}px, 1fr));
  grid-gap: ${gap};
`;
