import {
  ColorsVariants,
  FontVariants,
  FontWeightVariants,
  LineHeightVariants,
  ThemesProps,
} from './themes.types';
import { lighten, darken } from 'polished';

export const fonts: { [key in FontVariants]: string } = {
  heading: "'Montserrat', sans-serif",
  body: "'Roboto', sans-serif",
};
export const fontSizes: string[] = [
  '0.75rem',
  '0.875rem',
  '1rem',
  '2rem',
  '2.625rem',
  '4rem',
  '4.5rem',
];
export const fontWeights: { [key in FontWeightVariants]: number } = {
  regular: 400,
  medium: 500,
  bold: 700,
};
export const lineHeights: { [key in LineHeightVariants]: string } = {
  heading: '96px',
  paragraph: '21px',
  caption: '18px',
  menu: '24px',
};
export const space: number[] = [0, 4, 8, 12, 16, 24, 32, 64, 128, 256, 512];
export const sizes: number[] = [8, 16, 32, 64, 128, 256, 512, 768, 1024, 1536];
export const breakpoints: string[] = ['40em', '56em', '64em'];
export const colors: ColorsVariants = {
  primary: '#045150',
  secondary: '#FF5811',
  dark: '#333333',
  accent: '#FDA19B',
  muted: '#CCCCCC',
  success: '#43CC74',
  error: '#FA5147',
  bg: {
    base: '#F2F2F2',
    light: '#F7F6FE',
    white: '#FFFFFF',
  },
  text: {
    normal: '#666666',
    disabled: '#CCCCCC',
    inverse: '#FFFFFF',
  },
  lighten: {
    primary: lighten(0.1, '#045150'),
    secondary: lighten(0.1, '#FF5811'),
    dark: lighten(0.1, '#333333'),
    accent: lighten(0.1, '#FDA19B'),
    muted: lighten(0.1, '#CCCCCC'),
    success: lighten(0.1, '#43CC74'),
    error: lighten(0.1, '#FA5147'),
  },
  darken: {
    primary: darken(0.1, '#045150'),
    secondary: darken(0.1, '#FF5811'),
    dark: darken(0.1, '#333333'),
    accent: darken(0.1, '#FDA19B'),
    muted: darken(0.1, '#CCCCCC'),
    success: darken(0.1, '#43CC74'),
    error: darken(0.1, '#FA5147'),
  },
};

const themes: ThemesProps = {
  space,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints,
  colors,
};

export default themes;
