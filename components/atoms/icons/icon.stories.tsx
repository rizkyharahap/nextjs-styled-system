import { Meta } from '@storybook/react';
import { Description, Props, Title } from '@storybook/addon-docs';
import Icon from '.';

export default {
  title: 'Components/Icons',
  component: Icon,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Use 'Icons.`'icon-name'` to render icons</Description>
          <Props of={Icon} />
        </>
      ),
    },
  },
} as Meta;
