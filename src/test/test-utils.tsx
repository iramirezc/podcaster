import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../app/providers';

export const renderWithTheme = (component: JSX.Element) =>
  render(<ThemeProvider>{component}</ThemeProvider>);

export { screen };
