import { Meta, Story } from '@storybook/react';
import Text from './text';
import { TextProps } from '.';
import Box from '../box';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps & { children: string }> = (args: any) => (
  <Text {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  children: 'Normal Text Example',
  variant: 'caption',
};

const Variant: React.FC<TextProps> = (props) => (
  <Text {...props} fontSize={2} color='primary' />
);

export const Variants = (): JSX.Element => (
  <Box>
    <Variant>Title</Variant>
    <Text variant='title'>You know nothing, Jon Snow</Text>

    <Variant>Paragraph</Variant>
    <Text variant='paragraph'>You know nothing, Jon Snow</Text>

    <Variant>Caption</Variant>
    <Text variant='caption'>You know nothing, Jon Snow</Text>

    <Variant>Menu</Variant>
    <Text variant='title'>You know nothing, Jon Snow</Text>
  </Box>
);
