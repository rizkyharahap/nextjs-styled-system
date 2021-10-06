// Typography types
export type FontVariants = 'heading' | 'body';
export type FontWeightVariants = 'regular' | 'medium' | 'bold';
export type LineHeightVariants = 'heading' | 'paragraph' | 'caption' | 'menu';

// Color types
export type ColorBaseVariants =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'dark'
  | 'muted'
  | 'success'
  | 'error';

export type ColorBackgroundsVariants = 'base' | 'light' | 'white';
export type ColorTextVariants = 'normal' | 'disabled' | 'inverse';
export type ColorsVariants = { [key in ColorBaseVariants]: string } & {
  bg: { [key in ColorBackgroundsVariants]: string };
  text: { [key in ColorTextVariants]: string };
  lighten: { [key in ColorBaseVariants]: string };
  darken: { [key in ColorBaseVariants]: string };
};

export type ThemesProps = {
  space: number[];
  sizes: number[];
  fonts: { [key in FontVariants]: string };
  fontSizes: string[];
  fontWeights: { [key in FontWeightVariants]: number };
  lineHeights: { [key in LineHeightVariants]: string };
  breakpoints: string[];
  colors: ColorsVariants;
};
