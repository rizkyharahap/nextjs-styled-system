import styled, { keyframes } from 'styled-components';
import { BoxProps } from '..';
import Box from '../box';
import Icon, { IconProps } from '../icons';

export type SpinnerProps = BoxProps & {
  block: boolean;
  fontSize?: number | string;
  title: string;
};

const spin = keyframes`
    from {
        transform : rotate(0deg);
    }

    to {
        transform : rotate(360deg);
    }
`;

const AnimationLoader = styled(Icon.Loader)<IconProps>`
  animation: ${spin} 3s linear infinite;
`;

const Spinner = ({
  block,
  title,
  size,
  color,
  ...props
}: SpinnerProps): JSX.Element => (
  <Box display={block ? 'block' : 'inline-block'} {...props}>
    <AnimationLoader title={title} fontSize={size} color={color} />
  </Box>
);

export default Spinner;

Spinner.defaultProps = {
  block: true,
  title: 'Loading...',
};
