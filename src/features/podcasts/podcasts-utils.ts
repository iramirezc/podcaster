export const adaptPodcastFromResponse = (podcastData: any) => ({
  author: podcastData['im:artist'].label as string,
  coverUrl: podcastData['im:image'][2].label as string,
  description: podcastData.summary.label as string,
  podcastId: podcastData.id.attributes['im:id'] as string,
  title: podcastData['im:name'].label as string,
});

export const contains = (target: string, value: string = '') =>
  target.toLowerCase().includes(value.toLowerCase());

export const adaptPodcastDetailsFromResponse = (podcastDetailsData: any) => ({
  author: podcastDetailsData.artistName as string,
  coverUrl: podcastDetailsData.artworkUrl600 as string,
  description: 'Lorem ipsum',
  episodes: [],
  podcastId: podcastDetailsData.collectionId as string,
  title: podcastDetailsData.collectionName as string,
});
