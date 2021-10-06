import { Meta, Story } from '@storybook/react';
import { Description, Props, Title } from '@storybook/addon-docs';
import Spinner, { SpinnerProps } from '.';
import Stack from '../stack';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Spinning SVG loading indicator</Description>
          <Props of={Spinner} />
        </>
      ),
    },
  },
} as Meta;

const Basic: Story<SpinnerProps> = (args: any) => <Spinner {...args} />;

export const Normal = Basic.bind({});

export const Sizing = (): JSX.Element => (
  <Stack>
    <Spinner size={0} />
    <Spinner size={1} />
    <Spinner size={2} />
    <Spinner size={3} />
    <Spinner size={4} />
    <Spinner size={5} />
    <Spinner size={6} />
  </Stack>
);
