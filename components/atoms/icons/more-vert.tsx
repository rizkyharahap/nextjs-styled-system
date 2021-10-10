import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { IconCSS, IconProps, IconStyleProps } from './icon';
import { uuid } from './uuid';

const SVGComponent = forwardRef<SVGSVGElement, IconProps>(
  ({ title, ...props }, svgRef) => {
    const [titleId] = useState(() => (title ? uuid(title) : undefined));

    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        viewBox='0 0 24 24'
        fill='currentColor'
        ref={svgRef}
        aria-labelledby={titleId}
        {...props}
      >
        {title ? <title id={titleId}>{title}</title> : null}

        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' />
      </svg>
    );
  },
);

const MoreVert = styled(SVGComponent)<IconStyleProps>`
  ${IconCSS}
`;

export default MoreVert;

MoreVert.defaultProps = {
  size: 24,
};
