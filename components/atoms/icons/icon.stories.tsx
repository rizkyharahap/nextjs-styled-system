import { Meta } from '@storybook/react';
import Icon from '.';

import Flex from '../flex';
import Stack from '../stack';
import Text from '../text';

const Icons: any = Icon;

export default {
  title: 'Components/Icons',
  component: Icons,
} as Meta;

export const Direactory = (): JSX.Element => (
  <Stack
    axis='horizontal'
    space={6}
    distribution='end'
    width='100%'
    flexWrap='wrap'
  >
    {Object.keys(Icons).map((name: string) => {
      const Component = Icons[name];

      return (
        <Flex
          key={name}
          alignItems='center'
          flexDirection='column'
          width='60px'
          mb={6}
        >
          <Component aria-hidden mb={2} color='secondary' />

          <Text variant='paragraph' fontSize={1} color='text.normal'>
            {name}
          </Text>
        </Flex>
      );
    })}
  </Stack>
);
