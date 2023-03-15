import React from 'react';
import { AppHeader } from './AppHeader';
import { renderWithTheme, screen } from '../../test/test-utils';

describe('<AppHeader/>', () => {
  test('renders the app title', () => {
    renderWithTheme(<AppHeader />);

    expect(screen.getByText('Podcaster')).toBeInTheDocument();
  });
});
