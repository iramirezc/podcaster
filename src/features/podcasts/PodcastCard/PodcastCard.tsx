import { FC } from 'react';
import {
  PodcastAuthor,
  PodcastContainer,
  PodcastCover,
  PodcastTitle,
} from './PodcastCard.styles';

interface PodcastCardProps {
  podcastId: string;
  coverUrl: string;
  title: string;
  author: string;
}

export const PodcastCard: FC<PodcastCardProps> = ({
  podcastId,
  coverUrl,
  title,
  author,
}) => (
  <PodcastContainer id={`podcast-${podcastId}`}>
    <PodcastCover src={coverUrl} />
    <PodcastTitle>{title}</PodcastTitle>
    <PodcastAuthor>Author:&nbsp;{author}</PodcastAuthor>
  </PodcastContainer>
);
