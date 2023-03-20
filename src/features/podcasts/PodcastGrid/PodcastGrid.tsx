import { FC } from 'react';

import { PodcastCard } from '../PodcastCard/PodcastCard';
import { GridContainer, StyledLink } from './PodcastGrid.styles';

interface PodcastProps {
  podcasts: React.ComponentProps<typeof PodcastCard>[];
}

export const PodcastGrid: FC<PodcastProps> = ({ podcasts }) => (
  <GridContainer>
    {podcasts.map(({ podcastId, coverUrl, title, author }) => (
      <StyledLink to={`/podcast/${podcastId}`} key={podcastId}>
        <PodcastCard
          podcastId={podcastId}
          coverUrl={coverUrl}
          title={title}
          author={author}
        />
      </StyledLink>
    ))}
  </GridContainer>
);
