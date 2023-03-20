import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { podcastsAdapter } from './podcasts-slice';
import { contains } from './podcasts-utils';

const selectPodcasts = (state: RootState) => state.podcasts;

const selectors = podcastsAdapter.getSelectors(selectPodcasts);

export const { selectAll: selectAllPodcasts, selectById: selectPodcastById } =
  selectors;

export const selectLastFetch = (state: RootState) =>
  selectPodcasts(state).lastFetch;

export const selectStatus = (state: RootState) => selectPodcasts(state).status;

export const selectFilter = (state: RootState) => selectPodcasts(state).filter;

export const selectFilteredPodcasts = createSelector(
  [selectAllPodcasts, selectFilter],
  (podcasts, filter) =>
    podcasts.filter(
      (podcast) =>
        contains(podcast.title, filter) || contains(podcast.author, filter)
    )
);
