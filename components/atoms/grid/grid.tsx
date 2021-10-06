import styled from 'styled-components';
import { grid, GridProps as _GridProps } from 'styled-system';
import { BoxProps } from '..';
import Box from '../box';

export type GridProps = BoxProps & _GridProps;

const Grid = styled(Box)<GridProps>(
  {
    display: 'grid',
  },
  grid,
);

export default Grid;
