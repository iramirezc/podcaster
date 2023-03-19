import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { AppHeader } from 'components';
import {
  fetchPodcasts,
  selectAllPosts,
  selectLastFetch,
} from 'features/podcasts';
import { HomePage } from 'pages';

function App() {
  const podcasts = useAppSelector(selectAllPosts);
  const lastFetch = useAppSelector(selectLastFetch);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!lastFetch) {
      dispatch(fetchPodcasts());
    }
  }, [lastFetch, dispatch]);

  return (
    <>
      <AppHeader />
      <HomePage podcasts={podcasts} />
    </>
  );
}

export default App;
