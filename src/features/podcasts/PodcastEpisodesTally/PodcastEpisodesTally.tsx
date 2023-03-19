import { FC } from 'react';
import { Container } from './PodcastEpisodesTally.styles';

interface PodcastEpisodesTallyProps {
  tally?: number;
}

export const PodcastEpisodesTally: FC<PodcastEpisodesTallyProps> = ({
  tally = 0,
}) => {
  return (
    <Container>
      <h3>Episodes: {tally}</h3>
    </Container>
  );
};
