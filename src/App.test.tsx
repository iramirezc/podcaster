import React from 'react';
import { renderWithProviders, screen } from 'test/test-utils';
import App from './App';

describe('<App/>', () => {
  test('fetches the podcasts', async () => {
    renderWithProviders(<App />);

    expect(await screen.findAllByRole('article')).toHaveLength(3);
  });
});
