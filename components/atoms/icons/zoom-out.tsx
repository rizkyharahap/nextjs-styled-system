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
        viewBox='0 0 19 19'
        fill='currentColor'
        ref={svgRef}
        aria-labelledby={titleId}
        {...props}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.58334 8.70833C1.58347 7.57021 1.85623 6.44868 2.3788 5.43763C2.90138 4.42657 3.65855 3.55541 4.58694 2.89708C5.51533 2.23874 6.58792 1.81238 7.71493 1.6537C8.84193 1.49502 9.99055 1.60862 11.0646 1.985C12.1387 2.36139 13.107 2.9896 13.8884 3.81705C14.6699 4.6445 15.2417 5.6471 15.5561 6.74094C15.8705 7.83477 15.9183 8.98801 15.6954 10.1041C15.4726 11.2202 14.9857 12.2667 14.2753 13.1559L17.1847 16.0653C17.3289 16.2146 17.4087 16.4146 17.4069 16.6222C17.4051 16.8297 17.3219 17.0283 17.1751 17.1751C17.0283 17.3218 16.8297 17.4051 16.6222 17.4069C16.4146 17.4087 16.2146 17.3289 16.0653 17.1847L13.1559 14.2753C12.1077 15.1129 10.8442 15.6375 9.51091 15.7886C8.17766 15.9397 6.82882 15.7113 5.61965 15.1297C4.41049 14.548 3.39015 13.6367 2.67608 12.5007C1.962 11.3647 1.58323 10.0501 1.58334 8.70833ZM6.33334 7.91667C6.12338 7.91667 5.92202 8.00008 5.77355 8.14854C5.62508 8.29701 5.54168 8.49837 5.54168 8.70833C5.54168 8.9183 5.62508 9.11966 5.77355 9.26813C5.92202 9.41659 6.12338 9.5 6.33334 9.5H11.0833C11.2933 9.5 11.4947 9.41659 11.6431 9.26813C11.7916 9.11966 11.875 8.9183 11.875 8.70833C11.875 8.49837 11.7916 8.29701 11.6431 8.14854C11.4947 8.00008 11.2933 7.91667 11.0833 7.91667H6.33334Z'
        />
      </svg>
    );
  },
);

const ZoomOut = styled(SVGComponent)<IconStyleProps>`
  ${IconCSS}
`;

export default ZoomOut;

ZoomOut.defaultProps = {
  size: 24,
};
