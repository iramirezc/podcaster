import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { theme } from '../theme/default-theme';
import { GlobalStyles } from './global-styles';
import { store } from './store';

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);

export const StoreProvider = ({ children }: PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);
