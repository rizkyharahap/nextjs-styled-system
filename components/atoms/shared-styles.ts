import { css } from 'styled-components';

export const focusOutline = css`
  :focus {
    outline: 3px solid ${({ theme }) => theme.colors.lighten.accent}DD;
  }
`;
