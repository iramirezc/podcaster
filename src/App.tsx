import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { AppHeader } from 'components';
import {
  fetchPodcasts,
  selectAllPosts,
  selectLastFetch,
  selectStatus,
} from 'features/podcasts';
import { HomePage } from 'pages';
import { isWithin24Hours } from 'utils';

function App() {
  const podcasts = useAppSelector(selectAllPosts);
  const lastFetch = useAppSelector(selectLastFetch);
  const podcastsStatus = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (podcastsStatus !== 'loading') {
      if (!lastFetch || !isWithin24Hours(lastFetch)) {
        dispatch(fetchPodcasts());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppHeader />
      <HomePage podcasts={podcasts} />
    </>
  );
}

export default App;
