import styled from 'styled-components';
import { variant } from 'styled-system';
import { typographyConfig, TypographyConfigProps } from '../utils';

export type TextVariantProps = 'title' | 'paragraph' | 'caption' | 'menu';
export type TextProps = {
  variant?: TextVariantProps;
} & TypographyConfigProps;

const defaultTextStyles = {
  fontFamily: 'body',
  fontWeight: 'regular',
  lineHeight: 'paragraph',
  color: 'text.normal',
  my: 0,
};

const textVariants = variant({
  variants: {
    title: {
      ...defaultTextStyles,
      fontSize: 2,
      fontWeight: 'bold',
    },
    paragraph: {
      ...defaultTextStyles,
      fontSize: 1,
    },
    caption: {
      ...defaultTextStyles,
      fontSize: 0,
      lineHeight: 'caption',
    },
    menu: {
      ...defaultTextStyles,
      fontSize: 3,
      lineHeight: 'menu',
      fontWeight: 'bold',
      fontFamily: 'heading',
    },
  },
});

const Text = styled.p<TextProps>`
  ${textVariants}
  ${typographyConfig}
`;

export default Text;

Text.defaultProps = {
  variant: 'paragraph',
};
