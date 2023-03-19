import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { client } from 'api/client';
import { setStoredPodcasts } from 'app/storage';
import { adaptPodcastFromResponse } from './podcasts-utils';

export interface Podcast {
  podcastId: string;
  coverUrl: string;
  title: string;
  author: string;
}

export const podcastsAdapter = createEntityAdapter<Podcast>({
  selectId: (podcast) => podcast.podcastId,
});

export const fetchPodcasts = createAsyncThunk(
  'podcasts/fetchPodcasts',
  async () => {
    const response = await client.fetchPosts();

    return response.data.map(adaptPodcastFromResponse) as ReturnType<
      typeof adaptPodcastFromResponse
    >[];
  }
);

export const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState: podcastsAdapter.getInitialState<{
    lastFetch: number | null;
    status: 'idle' | 'loading' | 'success' | 'error';
  }>({
    lastFetch: null,
    status: 'idle',
  }),
  reducers: {},
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

const { reducer } = podcastsSlice;

export default reducer;
