import styled, { keyframes } from 'styled-components';
import Box, { BoxProps } from '../box';
import Icon from '../icons';

export interface SpinnerProps extends BoxProps {
  title: string;
  color?: string;
}

const spin = keyframes`
    from {
        transform : rotate(0deg);
    }

    to {
        transform : rotate(360deg);
    }
`;

const AnimationLoader = styled(Icon.Loader)`
  animation: ${spin} 3s linear infinite;
`;

const Spinner = ({
  title,
  size,
  color,
  ...props
}: SpinnerProps): JSX.Element => (
  <Box color={color} {...props}>
    <AnimationLoader title={title} size={size} />
  </Box>
);

export default Spinner;

Spinner.defaultProps = {
  title: 'Loading...',
};
