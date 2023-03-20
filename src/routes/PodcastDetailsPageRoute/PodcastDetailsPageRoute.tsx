import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { client } from 'api/client';
import {
  adaptPodcastEpisodesFromResponse,
  selectPodcastById,
  savePodcastEpisodes,
} from 'features/podcasts';
import { PodcastDetailsPage } from 'pages';
import { useAppDispatch, useAppSelector } from 'app/hooks';

type RequestStatus = 'idle' | 'loading' | 'success' | 'error';

export const PodcastDetailsPageRoute = () => {
  const { podcastId } = useParams<{ podcastId: string }>();
  const podcast = useAppSelector((state) =>
    selectPodcastById(state, String(podcastId))
  );
  const [status, setStatus] = useState<RequestStatus>('idle');
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      if (podcast && podcast.episodes.length === 0 && status === 'idle') {
        setStatus('loading');

        try {
          const response = await client.fetchPodcastDetails(podcast.podcastId);

          setStatus('success');

          const episodes = adaptPodcastEpisodesFromResponse(response.data);

          dispatch(
            savePodcastEpisodes({ podcastId: podcast.podcastId, episodes })
          );
        } catch (err) {
          console.error(err);
          setStatus('error');
        }
      }
    })();
  }, [podcast, status, dispatch]);

  if (!podcast) {
    return (
      <p>
        Podcast '{podcastId}' not found. Return to <Link to="/">home</Link>
      </p>
    );
  }

  return (
    <PodcastDetailsPage
      author={podcast.author}
      coverUrl={podcast.coverUrl}
      description={podcast.description}
      episodes={podcast.episodes}
      podcastId={podcast.podcastId}
      title={podcast.title}
    />
  );
};
