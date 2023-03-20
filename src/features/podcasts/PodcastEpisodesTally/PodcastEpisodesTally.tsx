import { FC } from 'react';
import { Container } from './PodcastEpisodesTally.styles';

interface PodcastEpisodesTallyProps {
  className?: string;
  tally?: number;
}

export const PodcastEpisodesTally: FC<PodcastEpisodesTallyProps> = ({
  className,
  tally = 0,
}) => {
  return (
    <Container className={className}>
      <h3>Episodes: {tally}</h3>
    </Container>
  );
};
