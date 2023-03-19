import React, { FC } from 'react';
import { PodcastGrid } from 'features/podcasts';
import { PageContainer } from './HomePage.styles';

interface HomePageProps extends React.ComponentProps<typeof PodcastGrid> {}

export const HomePage: FC<HomePageProps> = ({ podcasts }) => (
  <PageContainer>
    <PodcastGrid podcasts={podcasts} />
  </PageContainer>
);
