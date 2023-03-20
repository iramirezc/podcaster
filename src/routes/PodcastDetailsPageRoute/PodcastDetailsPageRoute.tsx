import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';

import { client } from 'api/client';
import { adaptPodcastDetailsFromResponse } from 'features/podcasts';
import { PodcastDetailsPage } from 'pages';

type RequestStatus = 'idle' | 'loading' | 'success' | 'error';

type PodcastDetails = {
  author: string;
  coverUrl: string;
  description: string;
  episodes: {
    date: string;
    duration: string;
    episodeId: string;
    title: string;
  }[];
  podcastId: string;
  title: string;
};

export const PodcastDetailsPageRoute = () => {
  const [status, setStatus] = useState<RequestStatus>('idle');
  const [podcastDetails, setPodcastDetails] = useState<PodcastDetails>();
  const { podcastId } = useParams<{ podcastId: string }>();

  useEffect(() => {
    (async () => {
      if (podcastId && status === 'idle') {
        setStatus('loading');

        try {
          const response = await client.fetchPodcastDetails(podcastId);

          if (response.data) {
            setPodcastDetails(adaptPodcastDetailsFromResponse(response.data));
          }

          setStatus('success');
        } catch (err) {
          console.error(err);
          setStatus('error');
        }
      }
    })();
  }, [podcastId, status]);

  if (!podcastId) {
    return <Navigate to={'/'} />;
  }

  if (status === 'loading') {
    return <h2>Loading...</h2>;
  }

  return podcastDetails ? (
    <PodcastDetailsPage
      author={podcastDetails.author}
      coverUrl={podcastDetails.coverUrl}
      description={podcastDetails.description}
      episodes={podcastDetails.episodes}
      podcastId={podcastDetails.podcastId}
      title={podcastDetails.title}
    />
  ) : (
    <h2>Podcast '{podcastId}' not found.</h2>
  );
};
