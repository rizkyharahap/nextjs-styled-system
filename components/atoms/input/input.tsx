import { forwardRef } from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import {
  system,
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
} from 'styled-system';
import Box, { BoxProps } from '../box';
import Flex from '../flex';
import { IconProps } from '../icons';
import { focusOutline } from '../shared-styles';
import Text from '../text';
import { TypographyConfigProps } from '../utils';

export type InputVariant =
  | 'normal'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success';
export type InputProps = StyledComponentProps<
  'input',
  any,
  {
    // Icon or interactive Icon to the left or right of content area
    leftIcon?: (props: IconProps) => JSX.Element;
    rightIcon?: (props: IconProps) => JSX.Element;
    error?: boolean;
  } & TypographyConfigProps,
  never
>;

const inputSystem = system({
  hasLeftIcon: {
    property: 'paddingLeft',
    transform: (value: boolean) => (value ? '32px' : '8px'),
  },
  hasRightIcon: {
    property: 'paddingRight',
    transform: (value: boolean) => (value ? '8px' : '32px'),
  },
});

const ContentAreaStyled = styled(Text)<
  {
    hasLeftIcon: boolean;
    hasRightIcon: boolean;
    error?: boolean;
  } & TypographyConfigProps
>`
  ${inputSystem}
  ${focusOutline}

  display: block;
  width: 100%;
  padding-top: ${(props) => props.theme.space[2]}px;
  padding-bottom: ${(props) => props.theme.space[2]}px;
  appearance: none;
  color: ${(props) =>
    props.error ? props.theme.colors.error : props.theme.colors.text.normal};
  border: 2px solid;
  border-color: ${(props) =>
    props.error ? props.theme.colors.error : props.theme.colors.dark};
  border-radius: 8px;

  &::placeholder {
    color: ${(props) => props.theme.colors.text.disabled};
  }

  &:hover {
    border-color: ${(props) =>
      props.error ? props.theme.colors.error : props.theme.colors.dark};
  }

  &:disabled {
    opacity: 1;
    color: ${(props) => props.theme.colors.text.normal};
    background-color: ${(props) => props.theme.colors.muted};
    border-color: ${(props) => props.theme.colors.text.disabled};

    &::placeholder {
      color: ${(props) => props.theme.colors.text.disabled};
      opacity: 1;
    }
  }

  ${compose(space, layout, flexbox, border, position, color)}
`;

const IconStyled = styled(Box)<BoxProps & { disabled?: boolean }>`
  position: absolute;

  svg {
    display: block;
    font-size: 20px;
    color: ${(props) =>
      props.disabled
        ? props.theme.colors.text.disabled
        : props.theme.colors.text.normal};
  }
`;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      error = false,
      type = 'text',
      disabled,
      mx,
      my,
      mb,
      mt,
      ml,
      mr,
      ...props
    },
    ref,
  ) => (
    <Flex
      alignItems='center'
      position='relative'
      mx={mx}
      my={my}
      mb={mb}
      mt={mt}
      ml={ml}
      mr={mr}
    >
      {LeftIcon && (
        <IconStyled left={2} disabled={disabled}>
          <LeftIcon aria-hidden />
        </IconStyled>
      )}

      <ContentAreaStyled
        as='input'
        ref={ref}
        type={type}
        variant='paragraph'
        hasLeftIcon={!!LeftIcon}
        hasRightIcon={!!RightIcon}
        error={error}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />

      {RightIcon && (
        <IconStyled right={2} disabled={disabled}>
          <RightIcon aria-hidden />
        </IconStyled>
      )}
    </Flex>
  ),
);

export default Input;
