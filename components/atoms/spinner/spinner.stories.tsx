import { Meta, Story } from '@storybook/react';

import Spinner, { SpinnerProps } from '.';
import Stack from '../stack';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = (args: any) => <Spinner {...args} />;

export const Default = Template.bind({});

export const Sizing = (): JSX.Element => (
  <Stack>
    <Spinner size='40px' color='primary' />
    <Spinner size={50} color='secondary' />
    <Spinner size={60} color='accent' />
    <Spinner size={70} color='success' />
    <Spinner size={80} color='error' />
  </Stack>
);
