import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

export type TypographyConfigProps = TypographyProps &
  SpaceProps &
  ColorProps &
  LayoutProps &
  FlexProps &
  FlexProps &
  BorderProps &
  PositionProps;

export const typographyConfig = compose(
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  typography,
);
