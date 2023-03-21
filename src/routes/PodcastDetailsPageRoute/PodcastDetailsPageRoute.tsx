import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { client } from 'api/client';
import {
  adaptPodcastEpisodesFromResponse,
  selectPodcastById,
  savePodcastEpisodes,
  updateStatus,
  selectStatus,
} from 'features/podcasts';
import { PodcastDetailsPage } from 'pages';

export const PodcastDetailsPageRoute = () => {
  const { podcastId } = useParams<{ podcastId: string }>();
  const podcast = useAppSelector((state) =>
    selectPodcastById(state, String(podcastId))
  );
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      if (podcast && podcast.episodes.length === 0 && status !== 'loading') {
        dispatch(updateStatus({ status: 'loading' }));

        try {
          const response = await client.fetchPodcastDetails(podcast.podcastId);

          dispatch(updateStatus({ status: 'success' }));

          const episodes = adaptPodcastEpisodesFromResponse(response.data);

          dispatch(
            savePodcastEpisodes({ podcastId: podcast.podcastId, episodes })
          );
        } catch (err) {
          console.error(err);
          dispatch(updateStatus({ status: 'error' }));
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
