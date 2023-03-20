import { useParams, Link } from 'react-router-dom';
import { selectPodcastById } from 'features/podcasts';
import { useAppSelector } from 'app/hooks';
import { PodcastEpisodePage } from 'pages';

export const PodcastEpisodePageRoute = () => {
  const { podcastId, episodeId } =
    useParams<{ podcastId: string; episodeId: string }>();
  const podcast = useAppSelector((state) =>
    selectPodcastById(state, String(podcastId))
  );
  const episode = podcast?.episodes.find(
    (episode) => episode.episodeId === episodeId
  );

  if (!podcast) {
    return (
      <p>
        Podcast '{podcastId}' not found. Return to <Link to="/">home</Link>
      </p>
    );
  }

  if (!episode) {
    return (
      <p>
        Episode '{episodeId}' not found. Return to <Link to="/">home</Link>
      </p>
    );
  }

  return <PodcastEpisodePage podcast={podcast} episode={episode} />;
};
