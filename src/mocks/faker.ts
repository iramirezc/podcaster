import { nanoid } from '@reduxjs/toolkit';

export const createFakePodcastData = (podcastId = nanoid()) => ({
  id: {
    attributes: {
      'im:id': podcastId,
    },
  },
  'im:artist': {
    label: `Artist of podcast ${podcastId}`,
  },
  'im:image': [
    { label: 'https://via.placeholder.com/55x55' },
    { label: 'https://via.placeholder.com/60x60' },
    {
      label: 'https://via.placeholder.com/170x170',
    },
  ],
  'im:name': {
    label: `Podcast title${podcastId}`,
  },
  summary: {
    label: `Podcast summary ${podcastId}`,
  },
});

export const createFakePodcastsResponse = (nPodcasts: number) => {
  const fakePodcasts: ReturnType<typeof createFakePodcastData>[] = [];

  for (let i = 0; i < nPodcasts; i++) {
    fakePodcasts.push(createFakePodcastData());
  }

  return {
    contents: JSON.stringify({
      feed: {
        entry: fakePodcasts,
      },
    }),
  };
};
