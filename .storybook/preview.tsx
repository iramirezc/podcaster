import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../src/app/providers';

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
    <ThemeProvider>
      <BrowserRouter>{Story()}</BrowserRouter>
    </ThemeProvider>
  ),
];
