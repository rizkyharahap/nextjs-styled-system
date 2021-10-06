import { forwardRef } from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import {
  border,
  compose,
  flexbox,
  layout,
  position,
  space,
  system,
  variant,
} from 'styled-system';
import { BoxProps } from '..';
import Flex from '../flex';
import { IconProps } from '../icons';
import { focusOutline } from '../shared-styles';
import Spinner from '../spinner';

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'error'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-accent'
  | 'outline-success'
  | 'outline-error';
export type ButtonSizeVariant = 'large' | 'small';
export type StyledButtonProps = BoxProps & {
  sizeVariant?: ButtonSizeVariant;
  leftIcon?: (props: IconProps) => JSX.Element;
  rightIcon?: (props: IconProps) => JSX.Element;
  isLoading?: boolean;
  variant?: ButtonVariants;
};
export type ButtonProps = StyledComponentProps<
  'button',
  any,
  StyledButtonProps,
  never
>;

const buttonSystem = system({
  sizeVariant: {
    property: 'padding',
    transform: (value: ButtonSizeVariant) =>
      value === 'large' ? '12px 16px' : '8px 12px',
  },
});

const defaultButtonStyles = {
  cursor: 'pointer',
  position: 'relative',
  fontSize: 1,
  fontWeight: 'medium',
  lineHeight: 'paragraph',
  borderRadius: 8,
  appearance: 'none',
};

const solidButtonStyles = {
  ...defaultButtonStyles,
  border: 'none',
  color: 'text.inverse',
  svg: {
    color: 'text.inverse',
  },
};

const outlineButtonStyles = {
  ...defaultButtonStyles,
  bg: 'white',
  borderWidth: '2px',
  borderStyle: 'solid',
  ':hover': {
    color: 'text.inverse',
  },
};

const buttonVaritants = variant({
  variants: {
    primary: {
      ...solidButtonStyles,
      bg: 'primary',
      borderColor: 'primary',
      '&:hover': {
        backgroundColor: 'lighten.primary',
      },
      '&:active': {
        backgroundColor: 'primary',
      },
    },
    'outline-primary': {
      ...outlineButtonStyles,
      color: 'primary',
      borderColor: 'primary',
      '&:hover': {
        backgroundColor: 'lighten.primary',
        borderColor: 'lighten.primary',
      },
      '&:active': {
        backgroundColor: 'primary',
      },
    },
    secondary: {
      ...solidButtonStyles,
      bg: 'secondary',
      borderColor: 'secondary',
      '&:hover': {
        backgroundColor: 'lighten.secondary',
      },
      '&:active': {
        backgroundColor: 'secondary',
      },
    },
    'outline-secondary': {
      ...outlineButtonStyles,
      color: 'secondary',
      borderColor: 'secondary',
      '&:hover': {
        backgroundColor: 'lighten.secondary',
        borderColor: 'lighten.secondary',
      },
      '&:active': {
        backgroundColor: 'secondary',
      },
    },
    accent: {
      ...solidButtonStyles,
      bg: 'accent',
      borderColor: 'accent',
      '&:hover': {
        backgroundColor: 'lighten.accent',
      },
      '&:active': {
        backgroundColor: 'accent',
      },
    },
    'outline-accent': {
      ...outlineButtonStyles,
      color: 'accent',
      borderColor: 'accent',
      '&:hover': {
        backgroundColor: 'lighten.accent',
        borderColor: 'lighten.accent',
      },
      '&:active': {
        backgroundColor: 'accent',
      },
    },
    success: {
      ...solidButtonStyles,
      bg: 'success',
      borderColor: 'success',
      '&:hover': {
        backgroundColor: 'lighten.success',
      },
      '&:active': {
        backgroundColor: 'success',
      },
    },
    'outline-success': {
      ...outlineButtonStyles,
      color: 'success',
      borderColor: 'success',
      '&:hover': {
        backgroundColor: 'lighten.success',
        borderColor: 'lighten.success',
      },
      '&:active': {
        backgroundColor: 'success',
      },
    },
    error: {
      ...solidButtonStyles,
      bg: 'error',
      borderColor: 'error',
      '&:hover': {
        backgroundColor: 'lighten.error',
      },
      '&:active': {
        backgroundColor: 'error',
      },
    },
    'outline-error': {
      ...outlineButtonStyles,
      color: 'error',
      borderColor: 'error',
      '&:hover': {
        backgroundColor: 'lighten.error',
        borderColor: 'lighten.error',
      },
      '&:active': {
        backgroundColor: 'error',
      },
    },
  },
});

const StyledButton = styled.button<ButtonProps>`
  ${buttonSystem}
  ${buttonVaritants}
  ${focusOutline}

  :disabled {
    color: ${({ theme }) => theme.colors.text.normal};
    background-color: ${({ theme }) => theme.colors.lighten.muted};
    cursor: not-allowed;
  }

  ${compose(space, layout, flexbox, border, position)}
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      isLoading,
      disabled,
      sizeVariant,
      children,
      ...props
    },
    ref,
  ) => (
    <StyledButton
      ref={ref}
      isLoading={isLoading}
      disabled={disabled}
      sizeVariant={sizeVariant}
      {...props}
    >
      {isLoading && (
        <Spinner
          display='flex'
          alignItems='center'
          justifyContent='center'
          position='absolute'
          top={0}
          bottom={0}
          left={0}
          right={0}
        />
      )}

      <Flex
        justifyContent='between'
        alignItems='center'
        opacity={isLoading ? 0 : 1}
      >
        {LeftIcon && <LeftIcon fontSize='24px' aria-hidden mr={2} />}
        {children}
        {RightIcon && <RightIcon fontSize='24px' aria-hidden ml={2} />}
      </Flex>
    </StyledButton>
  ),
);

export default Button;

Button.defaultProps = {
  variant: 'primary',
  sizeVariant: 'large',
};
