import css from '@styled-system/css';
import styled from 'styled-components';
import { system } from 'styled-system';
import Flex, { FlexProps } from '../flex';

type AlignType = 'start' | 'end' | 'center';
type AxisType = 'horizontal' | 'vertical';
export type StackProps = {
  axis?: AxisType;
  space?: number | number[];
  alignment?: AlignType;
  distribution?: AlignType;
} & FlexProps;

const getAlignment = (value: AlignType) =>
  value === 'start' || value === 'end' ? 'flex-' + value : value;

const stackSystem = system({
  axis: {
    property: 'flexDirection',
    transform: (value: AxisType) => (value === 'horizontal' ? 'row' : 'column'),
  },
  alignment: {
    property: 'justifyContent',
    transform: getAlignment,
  },
  distribution: {
    property: 'alignItems',
    transform: getAlignment,
  },
});

const Stack = styled(Flex)<StackProps>`
  ${stackSystem}

  > * {
    ${(props) =>
      css({
        [props.axis === 'horizontal' ? 'marginRight' : 'marginBottom']:
          props.space,
      })(props)}
  }

  > *:last-child {
    ${(props) =>
      css({
        [props.axis === 'horizontal' ? 'marginRight' : 'marginBottom']: 0,
      })(props)}
  }
`;

export default Stack;

Stack.defaultProps = {
  axis: 'horizontal',
  space: 3,
};
