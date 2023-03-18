import React, { FC } from 'react';
import { PodcastGrid } from 'features/podcasts';
import { PageContainer } from './HomePage.styles';
import { AppHeader } from 'components';

interface HomePageProps extends React.ComponentProps<typeof PodcastGrid> {}

export const HomePage: FC<HomePageProps> = ({ podcasts }) => (
  <PageContainer>
    <AppHeader />
    <PodcastGrid podcasts={podcasts} />
  </PageContainer>
);
