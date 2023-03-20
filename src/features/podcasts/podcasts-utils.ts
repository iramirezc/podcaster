import { Podcast, PodcastEpisode } from './podcasts-slice';

export const adaptPodcastFromResponse = (podcastData: any) =>
  ({
    author: String(podcastData['im:artist'].label),
    coverUrl: String(podcastData['im:image'][2].label),
    description: String(podcastData.summary.label),
    podcastId: String(podcastData.id.attributes['im:id']),
    title: String(podcastData['im:name'].label),
    episodes: [],
  } as Podcast);

export const contains = (target: string, value: string = '') =>
  target.toLowerCase().includes(value.toLowerCase());

// Borrowed from: https://stackoverflow.com/questions/29816872/how-can-i-convert-milliseconds-to-hhmmss-format-using-javascript
export const formatDuration = (time: number) =>
  new Date(time).toISOString().slice(11, 19);

export const formatDate = (isoDate: string) =>
  new Date(isoDate).toISOString().split('T')[0];

export const adaptPodcastEpisodesFromResponse = (
  podcastEpisodes: any[]
): PodcastEpisode[] => {
  if (Array.isArray(podcastEpisodes)) {
    return podcastEpisodes
      .filter((result) => result.wrapperType === 'podcastEpisode')
      .map((episode) => ({
        episodeId: String(episode.trackId),
        title: String(episode.trackName),
        duration: formatDuration(episode.trackTimeMillis as number),
        date: formatDate(episode.releaseDate as string),
      }));
  }

  return [];
};
