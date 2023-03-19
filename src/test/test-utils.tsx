import { PropsWithChildren } from 'react';
import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions, screen } from '@testing-library/react';
import { ThemeProvider, StoreProvider } from '../app/providers';
import { RootState, AppStore, setupStore } from '../app/store';

export { screen };

export const renderWithTheme = (component: JSX.Element) =>
  render(<ThemeProvider>{component}</ThemeProvider>);

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  component: JSX.Element,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren) => (
    <StoreProvider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </StoreProvider>
  );

  return {
    store,
    ...render(component, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
  };
};
