import { renderWithProviders, screen } from 'test/test-utils';
import { client } from 'api/client';
import { T24Hours } from 'utils';
import App from './App';

describe('<App/>', () => {
  beforeEach(() => {
    jest.spyOn(client, 'fetchPosts');
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  test('fetches and renders the podcasts when loading the first time', async () => {
    renderWithProviders(<App />, {
      preloadedState: {
        podcasts: {
          entities: {},
          ids: [],
          lastFetch: null,
          status: 'idle',
        },
      },
    });

    expect(client.fetchPosts).toHaveBeenCalledTimes(1);
    expect(await screen.findAllByRole('article')).toHaveLength(3);
  });

  test('does not fetch the podcasts if lastFetch is within 24 hours', () => {
    renderWithProviders(<App />, {
      preloadedState: {
        podcasts: {
          entities: {},
          ids: [],
          lastFetch: Date.now() + T24Hours,
          status: 'idle',
        },
      },
    });

    expect(client.fetchPosts).not.toHaveBeenCalled();
  });

  test('fetches the podcasts if lastFetch is past 24 hours', async () => {
    renderWithProviders(<App />, {
      preloadedState: {
        podcasts: {
          entities: {},
          ids: [],
          lastFetch: Date.now() + T24Hours + 1,
          status: 'idle',
        },
      },
    });

    expect(client.fetchPosts).toHaveBeenCalledTimes(1);
    expect(await screen.findAllByRole('article')).toHaveLength(3);
  });
});
