import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  fetchPodcasts,
  selectFilteredPodcasts,
  selectFilter,
  selectLastFetch,
  selectStatus,
  updateFilter,
} from 'features/podcasts';
import { HomePage } from 'pages';
import { isWithin24Hours } from 'utils';

export const HomePageRoute = () => {
  const podcasts = useAppSelector(selectFilteredPodcasts);
  const lastFetch = useAppSelector(selectLastFetch);
  const podcastsStatus = useAppSelector(selectStatus);
  const filterValue = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (podcastsStatus !== 'loading') {
      if (!lastFetch || !isWithin24Hours(lastFetch)) {
        dispatch(fetchPodcasts());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFilterChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <HomePage
      podcasts={podcasts}
      filterResults={podcasts.length}
      filterValue={filterValue}
      onFilterChange={onFilterChange}
    />
  );
};
