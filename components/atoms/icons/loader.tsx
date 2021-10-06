import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { iconConfig } from '../utils';
import { IconProps } from './icon';
import { uuid } from './uuid';

const SVGComponent = forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement> & {
    title?: any;
  }
>(({ title, ...props }, svgRef) => {
  const [titleId] = useState(() => (title ? uuid() : undefined));
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d='M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83' />
    </svg>
  );
});

const SVGLoader = styled(SVGComponent)<IconProps>(
  {
    flex: 'none',
    verticalAlign: 'middle',
  },
  iconConfig,
);

export default SVGLoader;

SVGLoader.defaultProps = {
  fontSize: 3,
};
