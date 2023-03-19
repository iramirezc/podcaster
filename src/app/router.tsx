import { HomePageRoute } from 'routes';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePageRoute />,
  },
]);
