import { Meta, Story } from '@storybook/react';
import { Description, Props, Title } from '@storybook/addon-docs';
import Button, { ButtonProps } from './button';
import Box from '../box';
import Flex from '../flex';
import Icon from '../icons';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Props of={Button} />
        </>
      ),
    },
  },
} as Meta;

export const Basic: Story<ButtonProps> = (args: any) => <Button {...args} />;
Basic.args = {
  children: 'Label',
  disabled: false,
  variant: 'outline-primary',
  sizeVariant: 'large',
  leftIcon: Icon.Loader,
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
