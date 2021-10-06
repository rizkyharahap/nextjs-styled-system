import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './box.stories';

const { Primary } = composeStories(stories);

describe('Box', () => {
  it('renders Box with Primary variant', () => {
    const rendered = render(<Primary />);
    rendered.getByText('This is a Box');
  });
});
