import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { renderWithTheme, screen } from 'test/test-utils';
import App from './App';

test.skip('renders learn react link', () => {
  renderWithTheme(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/learn/i)).toBeInTheDocument();
});
