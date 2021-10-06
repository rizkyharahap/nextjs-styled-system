import { Meta, Story } from '@storybook/react';
import { Description, Props, Title } from '@storybook/addon-docs';
import Grid, { GridProps } from '.';
import Box from '../box';
import Text from '../text';

export default {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            Grid creates a Grid container that exposes CSS Grid properties
          </Description>
          <Props of={Grid} />
        </>
      ),
    },
  },
} as Meta;

export const Normal: Story<GridProps> = (args: any) => (
  <Grid {...args} gridTemplateColumns='1fr 2fr' gridColumnGap={16}>
    <Box bg='primary' p={3} mb={4}>
      <Text color='text.inverse'>This is a grid box</Text>
    </Box>
    <Box bg='secondary' p={3} mb={4}>
      <Text color='text.inverse'>This is a grid box</Text>
    </Box>
  </Grid>
);
