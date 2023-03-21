import { Outlet } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';
import { AppHeader, AppName } from 'components';
import { selectStatus } from 'features/podcasts';
import { StyledLink, StyledSpinner } from './Layout.styles';

export const Layout = () => {
  const podcastsStatus = useAppSelector(selectStatus);

  return (
    <>
      <AppHeader>
        <StyledLink to={'/'}>
          <AppName />
        </StyledLink>
        {podcastsStatus === 'loading' && <StyledSpinner />}
      </AppHeader>
      <Outlet />
    </>
  );
};
