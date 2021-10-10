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
        viewBox='0 0 18 18'
        fill='currentColor'
        ref={svgRef}
        aria-labelledby={titleId}
        {...props}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path d='M8.99992 0C4.04557 0 0 4.0456 0 9C0 13.9544 4.04557 18 8.99992 18C13.9543 18 17.9998 13.9544 17.9998 9C18.0292 4.0456 13.9836 0 8.99992 0ZM16.8272 8.70684H14.9217C14.8924 7.12378 14.5699 5.62866 14.0422 4.33876C14.2767 4.13355 14.5406 3.92834 14.7751 3.69381C16.0064 5.04235 16.7686 6.8013 16.8272 8.70684ZM11.2279 16.5342C10.6123 16.7101 9.96734 16.8274 9.32239 16.8567V12.7524C11.14 12.7818 12.3126 13.1629 13.3386 13.8958C12.7816 15.0098 12.0781 15.9186 11.2279 16.5342ZM13.8077 14.2182C13.9836 14.3648 14.1888 14.5407 14.3647 14.7166C13.8663 15.1857 13.3093 15.5961 12.6937 15.9186C13.1334 15.4202 13.4852 14.8632 13.8077 14.2182ZM4.69051 13.8664C5.74588 13.1335 6.88919 12.7818 8.70676 12.7231V16.8274C8.0325 16.798 7.38756 16.6808 6.80124 16.5049C5.95109 15.9186 5.21819 15.0098 4.69051 13.8664ZM5.30614 15.9186C4.69051 15.5961 4.13351 15.1857 3.63515 14.7166C3.84036 14.5407 4.01625 14.3648 4.19215 14.2182C4.54393 14.8632 4.89572 15.4202 5.30614 15.9186ZM6.80124 1.49511C7.41687 1.31922 8.06182 1.20195 8.70676 1.17264V5.27687C6.88919 5.24756 5.71656 4.86645 4.69051 4.13355C5.21819 3.01954 5.95109 2.08143 6.80124 1.49511ZM4.22146 3.81107C4.04557 3.66449 3.84036 3.4886 3.66446 3.3127C4.16283 2.84365 4.71983 2.43322 5.33546 2.11075C4.89572 2.60912 4.51462 3.16612 4.22146 3.81107ZM13.3386 4.16287C12.2833 4.89577 11.14 5.24756 9.32239 5.30619V1.17264C9.99665 1.20195 10.6416 1.31922 11.2279 1.49511C12.0781 2.08143 12.7816 3.01954 13.3386 4.16287ZM12.723 2.11075C13.3386 2.43322 13.8956 2.84365 14.394 3.3127C14.1888 3.4886 14.0129 3.66449 13.837 3.81107C13.4852 3.16612 13.1334 2.60912 12.723 2.11075ZM8.70676 5.86319V8.70684H3.66446C3.69378 7.24104 3.98694 5.86319 4.45599 4.69055C5.56998 5.45277 6.80124 5.83388 8.70676 5.86319ZM8.70676 9.29316V12.1368C6.80124 12.1661 5.54067 12.5765 4.42667 13.3094C3.95762 12.1368 3.66446 10.759 3.63515 9.29316H8.70676ZM9.29308 12.1368V9.29316H14.3354C14.3061 10.759 14.0129 12.1368 13.5439 13.3094C12.4592 12.5765 11.1986 12.1954 9.29308 12.1368ZM9.29308 8.70684V5.86319C11.1986 5.83388 12.4592 5.42345 13.5732 4.69055C14.0422 5.86319 14.3354 7.24104 14.3647 8.70684H9.29308ZM3.22473 3.72313C3.45925 3.95765 3.72309 4.16287 3.95762 4.36808C3.42994 5.65798 3.10746 7.12378 3.07815 8.73616H1.17263C1.26058 6.8013 2.02278 5.04235 3.22473 3.72313ZM1.17263 9.29316H3.07815C3.10746 10.8762 3.42994 12.3713 3.95762 13.6612C3.72309 13.8664 3.45925 14.0717 3.22473 14.3062C2.02278 12.9577 1.26058 11.228 1.17263 9.29316ZM14.7751 14.3062C14.5406 14.0717 14.2767 13.8664 14.0422 13.6612C14.5699 12.3713 14.8924 10.9055 14.9217 9.29316H16.8272C16.7686 11.228 16.0064 12.9577 14.7751 14.3062Z' />
      </svg>
    );
  },
);

const Atlas = styled(SVGComponent)<IconStyleProps>`
  ${IconCSS}
`;

export default Atlas;

Atlas.defaultProps = {
  size: 24,
};