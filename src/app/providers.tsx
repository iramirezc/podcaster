import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '../theme/default-theme';

export const ThemeProvider = ({ children }: React.PropsWithChildren) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
