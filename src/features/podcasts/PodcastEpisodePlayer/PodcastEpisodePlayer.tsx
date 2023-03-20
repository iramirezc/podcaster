import { FC } from 'react';
import {
  PlayerContainer,
  EpisodeTitle,
  EpisodeDescription,
  AudioPlayer,
} from './PodcastEpisodePlayer.styles';

interface PodcastEpisodePlayerProps {
  title: string;
  description: string;
  audioUrl: string;
}

export const PodcastEpisodePlayer: FC<PodcastEpisodePlayerProps> = ({
  title,
  description,
  audioUrl,
}) => {
  return (
    <PlayerContainer>
      <EpisodeTitle>{title}</EpisodeTitle>
      <EpisodeDescription>{description}</EpisodeDescription>
      <AudioPlayer controls src={audioUrl} />
    </PlayerContainer>
  );
};
