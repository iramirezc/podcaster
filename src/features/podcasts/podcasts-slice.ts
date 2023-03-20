import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';
import { client } from 'api/client';
import { setStoredPodcasts } from 'app/storage';
import { adaptPodcastFromResponse } from './podcasts-utils';

export interface PodcastEpisode {
  date: string;
  duration: string;
  episodeId: string;
  title: string;
}

export interface Podcast {
  author: string;
  coverUrl: string;
  description: string;
  podcastId: string;
  title: string;
  episodes: PodcastEpisode[];
}

export const podcastsAdapter = createEntityAdapter<Podcast>({
  selectId: (podcast) => podcast.podcastId,
});

export const fetchPodcasts = createAsyncThunk(
  'podcasts/fetchPodcasts',
  async () => {
    const response = await client.fetchPodcasts();

    return response.data.map(adaptPodcastFromResponse) as ReturnType<
      typeof adaptPodcastFromResponse
    >[];
  }
);

export const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState: podcastsAdapter.getInitialState<{
    filter: '';
    lastFetch: number | null;
    status: 'idle' | 'loading' | 'success' | 'error';
  }>({
    filter: '',
    lastFetch: null,
    status: 'idle',
  }),
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    },
    savePodcastEpisodes(
      state,
      action: PayloadAction<{ podcastId: string; episodes: PodcastEpisode[] }>
    ) {
      const { podcastId, episodes } = action.payload;

      const podcast = state.entities[podcastId];

      if (podcast) {
        podcast.episodes = episodes;
      }

      setStoredPodcasts(state);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPodcasts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchPodcasts.fulfilled, (state, action) => {
      state.status = 'success';
      state.lastFetch = Date.now();
      podcastsAdapter.addMany(state, action.payload);
      setStoredPodcasts(state);
    });
    builder.addCase(fetchPodcasts.rejected, (state) => {
      state.status = 'error';
    });
  },
});

const { reducer, actions } = podcastsSlice;

export const { updateFilter, savePodcastEpisodes } = actions;

export default reducer;
