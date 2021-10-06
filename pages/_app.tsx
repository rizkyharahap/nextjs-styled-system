import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import themes from 'themes';
import GlobalStyle from 'themes/global-styles';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themes}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
