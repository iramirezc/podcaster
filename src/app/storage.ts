import podcastReducer from 'features/podcasts';

type PodcastState = ReturnType<typeof podcastReducer>;

export const getStoredPodcasts = () => {
  const podcastsInitialState = {
    entities: {},
    filter: '',
    ids: [],
    lastFetch: null,
    status: 'idle',
  } as PodcastState;

  const data = window.localStorage.getItem('podcasts');

  try {
    if (data) {
      return JSON.parse(data) as PodcastState;
    }
  } catch (err) {
    console.error('Could not retrieved stored data.');
  }

  return podcastsInitialState;
};

export const setStoredPodcasts = (podcasts: PodcastState) => {
  window.localStorage.setItem('podcasts', JSON.stringify(podcasts));
};
