export const adaptPodcastFromResponse = (podcastData: any) => ({
  author: podcastData['im:artist'].label,
  coverUrl: podcastData['im:image'][2].label,
  podcastId: podcastData.id.attributes['im:id'],
  title: podcastData.title.label,
});

export const contains = (target: string, value: string = '') =>
  target.toLowerCase().includes(value.toLowerCase());
