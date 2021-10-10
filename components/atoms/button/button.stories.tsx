import { Meta, Story } from '@storybook/react';

import Button, { ButtonProps } from './button';
import Box from '../box';
import Flex from '../flex';
import Icon from '../icons';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      table: {
        action: { summary: 'Button Clicked' },
        type: { summary: 'Write children' },
        defaultValue: { summary: 'text | JSX.Element' },
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button Clicked',
};

export const Variants = (): JSX.Element => (
  <>
    <Box>
      <Flex mb={3}>
        <Button variant='primary' mr={3}>
          Primary
        </Button>
        <Button variant='primary' mr={3} disabled>
          Disabled
        </Button>
        <Button variant='primary' isLoading>
          Loading
        </Button>
      </Flex>
      <Flex mb={3}>
        <Button variant='secondary' mr={3}>
          Flexible Width
        </Button>
        <Button variant='secondary' width={200}>
          Fixed Width
        </Button>
      </Flex>
      <Flex mb={3}>
        <Button variant='accent' leftIcon={Icon.Loader} mr={3}>
          Left Icon
        </Button>
        <Button variant='accent' mr={3} rightIcon={Icon.Loader}>
          Right Icon
        </Button>
        <Button
          disabled
          variant='primary'
          leftIcon={Icon.Loader}
          rightIcon={Icon.Loader}
        >
          Both Icon
        </Button>
      </Flex>
    </Box>
  </>
);
