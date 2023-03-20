import { createBrowserRouter } from 'react-router-dom';
import {
  HomePageRoute,
  PodcastDetailsPageRoute,
  PodcastEpisodePageRoute,
} from 'routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePageRoute />,
  },
  {
    path: '/podcast/:podcastId',
    element: <PodcastDetailsPageRoute />,
  },
  {
    path: '/podcast/:podcastId/episode/:episodeId',
    element: <PodcastEpisodePageRoute />,
  },
]);
