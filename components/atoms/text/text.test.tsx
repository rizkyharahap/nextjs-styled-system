import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as stories from './text.stories';

const { Normal } = composeStories(stories);

describe('Text', () => {
  it('renderes Normal text', () => {
    const rendered = render(<Normal />);

    rendered.getAllByText('Normal Text Example');
  });
});
