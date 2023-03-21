import { createBrowserRouter } from 'react-router-dom';
import {
  HomePageRoute,
  Layout,
  PodcastDetailsPageRoute,
  PodcastEpisodePageRoute,
} from 'routes';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
    ],
  },
]);
