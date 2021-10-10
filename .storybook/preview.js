import { ThemeProvider } from 'styled-components';
import themes from '../themes/themes.ts';
import Box from '../components/atoms/box';
import GlobalStyles from '../themes/global-styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <ThemeProvider theme={themes}>
        <Box p={4}>
          <Story />
        </Box>
      </ThemeProvider>
    </>
  ),
];
