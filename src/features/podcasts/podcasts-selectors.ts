import { RootState } from 'app/store';
import { podcastsAdapter } from './podcasts-slice';

const selectPodcasts = (state: RootState) => state.podcasts;

const selectors = podcastsAdapter.getSelectors(selectPodcasts);

export const { selectAll: selectAllPosts } = selectors;

export const selectLastFetch = (state: RootState) =>
  selectPodcasts(state).lastFetch;

export const selectStatus = (state: RootState) => selectPodcasts(state).status;
