import userEvent from '@testing-library/user-event';
import { renderWithProviders, screen } from 'test/test-utils';
import { client } from 'api/client';
import { T24Hours } from 'utils';
import App from './App';

describe('<App/>', () => {
  beforeEach(() => {
    jest.spyOn(client, 'fetchPodcasts');
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  test('fetches and renders the podcasts when loading the first time', async () => {
    renderWithProviders(<App />);

    expect(client.fetchPodcasts).toHaveBeenCalledTimes(1);
    expect(await screen.findAllByRole('article')).toHaveLength(3);
  });

  test('does not fetch the podcasts if lastFetch is within 24 hours', () => {
    renderWithProviders(<App />, {
      preloadedState: {
        podcasts: {
          entities: {},
          filter: '',
          ids: [],
          lastFetch: Date.now() + T24Hours,
          status: 'idle',
        },
      },
    });

    expect(client.fetchPodcasts).not.toHaveBeenCalled();
  });

  test('fetches the podcasts if lastFetch is past 24 hours', async () => {
    renderWithProviders(<App />, {
      preloadedState: {
        podcasts: {
          entities: {},
          filter: '',
          ids: [],
          lastFetch: Date.now() + T24Hours + 1,
          status: 'idle',
        },
      },
    });

    expect(client.fetchPodcasts).toHaveBeenCalledTimes(1);
    expect(await screen.findAllByRole('article')).toHaveLength(3);
  });

  test('podcast filter', async () => {
    const { store } = renderWithProviders(<App />);

    expect(await screen.findAllByRole('article')).toHaveLength(3);

    const podcastId = store.getState().podcasts.ids[1] as string;

    await userEvent.type(screen.getByRole('textbox'), podcastId);

    expect(await screen.findAllByRole('article')).toHaveLength(1);

    await userEvent.clear(screen.getByRole('textbox'));

    expect(await screen.findAllByRole('article')).toHaveLength(3);
  });
});
