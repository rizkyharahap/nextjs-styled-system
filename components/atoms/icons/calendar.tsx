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
          d='M19 10.5V17.5C19 18.3284 18.3284 19 17.5 19H6.5C5.67157 19 5 18.3284 5 17.5V10.5C5 10.2239 5.22386 10 5.5 10H18.5C18.7761 10 19 10.2239 19 10.5ZM18 17H6V17.5C6 17.7761 6.22386 18 6.5 18H17.5C17.7761 18 18 17.7761 18 17.5V17ZM18 16V15H6V16H18ZM6 14H18V13H6V14ZM18 12V11H6V12H18ZM16 4H8V4.5C8 4.77614 7.77614 5 7.5 5C7.22386 5 7 4.77614 7 4.5V4H5.5C4.67157 4 4 4.67157 4 5.5V8H20V5.5C20 4.67157 19.3284 4 18.5 4H17V4.5C17 4.77614 16.7761 5 16.5 5C16.2239 5 16 4.77614 16 4.5V4ZM17 3H18.5C19.8807 3 21 4.11929 21 5.5V18.507C21 19.8877 19.8807 21.007 18.5 21.007H5.5C4.11929 21.007 3 19.8877 3 18.507V5.5C3 4.11929 4.11929 3 5.5 3H7V2.5C7 2.22386 7.22386 2 7.5 2C7.77614 2 8 2.22386 8 2.5V3H16V2.5C16 2.22386 16.2239 2 16.5 2C16.7761 2 17 2.22386 17 2.5V3ZM20 9H4V18.507C4 19.3354 4.67157 20.007 5.5 20.007H18.5C19.3284 20.007 20 19.3354 20 18.507V9Z'
        />
      </svg>
    );
  },
);

const Calendar = styled(SVGComponent)<IconStyleProps>`
  ${IconCSS}
`;

export default Calendar;

Calendar.defaultProps = {
  size: 24,
};
