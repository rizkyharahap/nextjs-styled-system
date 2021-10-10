import {
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  position,
  PositionProps,
  SizeProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
} from 'styled-system';

import { css } from 'styled-components';

export type IconStyleProps = SpaceProps &
  ColorProps &
  LayoutProps &
  TypographyProps &
  PositionProps;
export type IconProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
};

export const IconCSS = css(
  system({
    size: {
      properties: ['width', 'height'],
      transform: (value: SizeProps) => value,
    },
  }),
  {
    flex: 'none',
    verticalAlign: 'middle',
  },
  compose(space, color, position, layout, typography),
);
