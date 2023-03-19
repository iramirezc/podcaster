import { FC } from 'react';
import { PodcastCard } from '../PodcastCard/PodcastCard';
import { GridContainer } from './PodcastGrid.styles';

interface PodcastProps {
  podcasts: React.ComponentProps<typeof PodcastCard>[];
}

export const PodcastGrid: FC<PodcastProps> = ({ podcasts }) => (
  <GridContainer>
    {podcasts.map(({ podcastId, coverUrl, title, author }) => (
      <PodcastCard
        key={podcastId}
        podcastId={podcastId}
        coverUrl={coverUrl}
        title={title}
        author={author}
      />
    ))}
  </GridContainer>
);
