import {
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

import { default as Loader } from './loader';

export type IconProps = SpaceProps & ColorProps & LayoutProps & TypographyProps;

const Icon: any = { Loader };

export default Icon;
