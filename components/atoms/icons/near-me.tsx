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
        <path d='M16.5609 3.66938L11.8481 16.3994C11.5504 17.2037 10.693 17.617 9.93384 17.3217C9.74583 17.2472 9.57527 17.1346 9.4329 16.991C9.29052 16.8474 9.17941 16.6759 9.10655 16.4873L7.61267 12.711C7.33194 11.9861 6.77542 11.402 6.06496 11.0865L2.46921 9.51821C1.72109 9.19125 1.38067 8.28479 1.70763 7.49313C1.78497 7.30197 1.89944 7.12805 2.04444 6.98142C2.18943 6.8348 2.36206 6.71839 2.55234 6.63892L14.6775 1.691C15.443 1.37829 16.2925 1.77096 16.5735 2.56896C16.6978 2.92204 16.6931 3.31313 16.5617 3.66938H16.5609Z' />
      </svg>
    );
  },
);

const NearMe = styled(SVGComponent)<IconStyleProps>`
  ${IconCSS}
`;

export default NearMe;

NearMe.defaultProps = {
  size: 24,
};
