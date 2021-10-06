import { Meta, Story } from '@storybook/react';
import { Description, Props, Title } from '@storybook/addon-docs';
import Flex, { FlexProps } from '.';
import Box from '../box';
import Text from '../text';

export default {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            Flex component helps you create flexbox layouts.
          </Description>
          <Props of={Flex} />
        </>
      ),
    },
  },
} as Meta;

export const Normal: Story<FlexProps> = (args: any) => (
  <Flex {...args} flexDirection='column' pb={4} pt={4}>
    <Box bg='primary' p={3} mb={4}>
      <Text color='text.inverse'>This is a flex box item</Text>
    </Box>
    <Box bg='secondary' p={3}>
      <Text color='text.inverse'>This is a flex box item</Text>
    </Box>
  </Flex>
);
