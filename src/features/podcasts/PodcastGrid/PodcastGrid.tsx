import { FC } from 'react';
import { Link } from 'react-router-dom';

import { PodcastCard } from '../PodcastCard/PodcastCard';
import { GridContainer } from './PodcastGrid.styles';

interface PodcastProps {
  podcasts: React.ComponentProps<typeof PodcastCard>[];
}

export const PodcastGrid: FC<PodcastProps> = ({ podcasts }) => (
  <GridContainer>
    {podcasts.map(({ podcastId, coverUrl, title, author }) => (
      <Link to={`/podcast/${podcastId}`} key={podcastId}>
        <PodcastCard
          podcastId={podcastId}
          coverUrl={coverUrl}
          title={title}
          author={author}
        />
      </Link>
    ))}
  </GridContainer>
);
