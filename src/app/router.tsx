import { createBrowserRouter } from 'react-router-dom';
import { HomePageRoute, PodcastDetailsPageRoute } from 'routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePageRoute />,
  },
  {
    path: '/podcast/:podcastId',
    element: <PodcastDetailsPageRoute />,
  },
]);
