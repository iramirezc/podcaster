import { FC } from 'react';
import {
  Podcast,
  PodcastEpisode,
  PodcastDetailsCard,
  PodcastEpisodePlayer,
} from 'features/podcasts';
import {
  LeftSection,
  PageContainer,
  RightSection,
} from './PodcastEpisodePage.styles';

interface PodcastDetailsPageProps {
  podcast: Podcast;
  episode: PodcastEpisode;
}

export const PodcastEpisodePage: FC<PodcastDetailsPageProps> = ({
  podcast,
  episode,
}) => (
  <PageContainer>
    <LeftSection>
      <PodcastDetailsCard
        author={podcast.author}
        coverUrl={podcast.coverUrl}
        description={podcast.description}
        podcastId={podcast.podcastId}
        title={podcast.title}
      />
    </LeftSection>
    <RightSection>
      <PodcastEpisodePlayer
        audioUrl={episode.audioUrl}
        description={episode.description}
        title={episode.title}
      />
    </RightSection>
  </PageContainer>
);
