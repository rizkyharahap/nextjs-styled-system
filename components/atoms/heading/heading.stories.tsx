import { Meta, Story } from '@storybook/react';
import { Description, Props, Title } from '@storybook/addon-docs';
import Heading, { HeadingProps } from '.';
import Text from '../text';
import Box from '../box';
import Flex from '../flex';

export default {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            Primitive heading component, defaults to `h1`. Use the `as` prop to
            set the correct HTML element independent from styling.
          </Description>
          <Props of={Heading} />
        </>
      ),
    },
  },
} as Meta;

const Basic: Story<HeadingProps & { children?: string }> = (args: any) => (
  <Heading {...args} />
);

export const Normal = Basic.bind({});
Normal.args = { children: 'Heading' };

const VariantTitle = (props: any) => (
  <Text variant='title' color='text.normal' my={0} {...props} />
);

export const Variants = () => (
  <Box>
    <Flex alignItems='baseline' mb={3}>
      <VariantTitle>Heading 1</VariantTitle>{' '}
      <Heading variant='h1'>You know nothing, Jon Snow</Heading>
    </Flex>
    <Flex alignItems='baseline' mb={3}>
      <VariantTitle>Heading 2</VariantTitle>{' '}
      <Heading variant='h2'>You know nothing, Jon Snow</Heading>
    </Flex>
    <Flex alignItems='baseline' mb={3}>
      <VariantTitle>Heading 3</VariantTitle>{' '}
      <Heading variant='h3'>You know nothing, Jon Snow</Heading>
    </Flex>
    <Flex alignItems='baseline' mb={3}>
      <VariantTitle>Heading 4</VariantTitle>{' '}
      <Heading variant='h4'>You know nothing, Jon Snow</Heading>
    </Flex>
  </Box>
);
