import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from '.';
import Icon from '../icons';
import Stack from '../stack';

export default {
  title: 'Components/Form/Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'string',
      },
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'Display muted style' },
        defaultValue: { summary: 'true | false' },
      },
    },
    error: {
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'Display error style' },
        defaultValue: { summary: 'true | false' },
      },
    },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Default Input Text Example',
  error: false,
  disabled: false,
};

export const InputWithIcon = (): JSX.Element => (
  <Stack>
    <Template defaultValue='Left Icon' leftIcon={Icon.Loader} />
    <Template defaultValue='Right Icon' rightIcon={Icon.Loader} />
    <Template
      defaultValue='Both Icon'
      leftIcon={Icon.Loader}
      rightIcon={Icon.Loader}
    />
  </Stack>
);
