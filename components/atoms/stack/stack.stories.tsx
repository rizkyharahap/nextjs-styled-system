import { Meta } from '@storybook/react';
import { Description, Props, Title } from '@storybook/addon-docs';
import Stack from '.';
import Box from '../box';

export default {
  title: 'Components/Stack',
  component: Stack,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            An extension of the `Flex` component, that controls spacing between
            its children. For more context, see [Margin considered
            harmful](https://mxstbr.com/thoughts/margin)
          </Description>
          <Props of={Stack} />
        </>
      ),
    },
  },
} as Meta;

export const Horizontal = (): JSX.Element => (
  <Stack bg='bg.base'>
    <Box bg='primary' width={3} height={3} />
    <Box bg='primary' width={3} height={3} />
    <Box bg='primary' width={3} height={3} />
    <Box bg='primary' width={3} height={3} />
  </Stack>
);

export const Vertical = (): JSX.Element => (
  <Stack bg='bg.base' axis='vertical'>
    <Box bg='primary' width={3} height={3} />
    <Box bg='primary' width={3} height={3} />
    <Box bg='primary' width={3} height={3} />
    <Box bg='primary' width={3} height={3} />
  </Stack>
);

export const Spacing = (): JSX.Element => (
  <Stack bg='bg.base' space={[4, 5, 6]}>
    <Box bg='primary' width={3} height={3} />
    <Box bg='primary' width={3} height={3} />
    <Box bg='primary' width={3} height={3} />
    <Box bg='primary' width={3} height={3} />
  </Stack>
);

export const Alignment = (): JSX.Element => (
  <Stack axis='vertical'>
    <Stack bg='bg.base' alignment='start'>
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
    </Stack>
    <Stack bg='bg.base' alignment='center'>
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
    </Stack>
    <Stack bg='bg.base' alignment='end'>
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
    </Stack>
  </Stack>
);

export const Distribution = (): JSX.Element => (
  <Stack axis='vertical'>
    <Stack bg='bg.base' distribution='start' height={3}>
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
    </Stack>
    <Stack bg='bg.base' distribution='center' height={3}>
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
    </Stack>
    <Stack bg='bg.base' distribution='end' height={3}>
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
      <Box bg='primary' width={2} height={2} />
    </Stack>
  </Stack>
);
