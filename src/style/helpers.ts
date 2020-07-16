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

export const flexColumn = css`
  display: flex;
  flex-direction: column;
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

/**
 * Use this to apply an accessible click handler to something other than a link or button.
 * makes some things easier sometimes
 */
export function accessibleClickProps(
  onClick?: (event: React.KeyboardEvent | React.MouseEvent) => void
) {
  return {
    onClick,
    onKeyPress: (event: React.KeyboardEvent) => {
      if (event.key === "Enter" && onClick) onClick(event);
    },
    tabIndex: 0,
    style: { cursor: "pointer" },
  };
}
