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

        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M20.2803 6.21967C20.5732 6.51256 20.5732 6.98744 20.2803 7.28033L9.28033 18.2803C8.98744 18.5732 8.51256 18.5732 8.21967 18.2803L3.21967 13.2803C2.92678 12.9874 2.92678 12.5126 3.21967 12.2197C3.51256 11.9268 3.98744 11.9268 4.28033 12.2197L8.75 16.6893L19.2197 6.21967C19.5126 5.92678 19.9874 5.92678 20.2803 6.21967Z'
        />
      </svg>
    );
  },
);

const Check = styled(SVGComponent)<IconStyleProps>`
  ${IconCSS}
`;

export default Check;

Check.defaultProps = {
  size: 24,
};
