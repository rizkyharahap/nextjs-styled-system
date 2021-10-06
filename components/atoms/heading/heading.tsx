import styled from 'styled-components';
import { variant } from 'styled-system';
import { typographyConfig, TypographyConfigProps } from '../utils';

export type HeadingVariants = 'h1' | 'h2' | 'h3' | 'h4';
export type HeadingProps = {
  variant?: HeadingVariants;
} & TypographyConfigProps;

const defaultHeadingStyles = {
  fontFamily: 'heading',
  fontWeight: 'bold',
  color: 'text.normal',
  lineHeight: 'heading',
  mt: 0,
  mb: 0,
};

const headingVariant = variant({
  variants: {
    h1: {
      ...defaultHeadingStyles,
      fontSize: 6,
    },
    h2: {
      ...defaultHeadingStyles,
      fontSize: 5,
    },
    h3: {
      ...defaultHeadingStyles,
      fontSize: 4,
    },
    h4: {
      ...defaultHeadingStyles,
      fontSize: 3,
    },
  },
});

const Heading = styled.h1<HeadingProps>`
  ${headingVariant}
  ${typographyConfig}
`;

export default Heading;

Heading.defaultProps = {
  variant: 'h1',
};
