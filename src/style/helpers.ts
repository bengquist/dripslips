import { css } from "styled-components";

export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const flexAlignStart = css`
  display: flex;
  align-items: flex-start;
`;

export const flexAlignEnd = css`
  display: flex;
  align-items: flex-end;
`;

export const flexSpaceBetweenAlignStart = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const flexSpaceBetweenAlignCenter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexAlignSelfRight = css`
  align-self: flex-end;
`;

export const fluidGrid = ({ maxWidth = 200, gap = 0 }) => css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${maxWidth}px, 1fr));
  grid-gap: ${gap};
`;

export const gap = ({ bottom = 0, right = 0 }) => css`
  > * {
    margin-bottom: ${bottom}rem;
    margin-right: ${right}rem;
  }

  *:last-child {
    margin: 0;
  }
`;

export const lightGrayOutline = css`
  outline: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
