import { RouterProvider } from 'react-router-dom';
import { router } from 'app/router';
import { useAppSelector } from 'app/hooks';
import { AppHeader, AppName } from 'components';
import { selectStatus } from 'features/podcasts';
import { StyledSpinner } from './App.styles';

function App() {
  const podcastsStatus = useAppSelector(selectStatus);

  return (
    <>
      <AppHeader>
        <AppName />
        {podcastsStatus === 'loading' && <StyledSpinner />}
      </AppHeader>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
