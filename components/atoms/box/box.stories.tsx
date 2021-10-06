import { Meta } from '@storybook/react';
import Box from './box';

export default {
  title: 'Components/Box',
  component: Box,
} as Meta;

export const Primary = (): JSX.Element => (
  <Box bg='bg.base' p={3} mb={4}>
    This is a Box
  </Box>
);

export const Sizing = (): JSX.Element => (
  <Box bg='bg.light' width='50px' height='50px'></Box>
);
