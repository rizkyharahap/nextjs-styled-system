import { render } from '@testing-library/react';
import Heading from '.';

describe('Heading', () => {
  it('renders heading with variant', () => {
    const title = 'Hello There';
    const rendered = render(<Heading variant='h1'>{title}</Heading>);

    rendered.getAllByText(title);
  });
});
