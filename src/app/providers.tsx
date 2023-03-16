import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '../theme/default-theme';
import { GlobalStyles } from './global-styles';

export const ThemeProvider = ({ children }: React.PropsWithChildren) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);
