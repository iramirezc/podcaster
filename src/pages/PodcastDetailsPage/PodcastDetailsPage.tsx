import { FC } from 'react';
import { PodcastDetailsCard } from 'features/podcasts';
import {
  LeftSection,
  PageContainer,
  RightSection,
  StyledPodcastDetails,
  StyledPodcastEpisodesTable,
  StyledPodcastEpisodesTally,
} from './PodcastDetailsPage.styles';

interface PodcastDetailsPageProps
  extends React.ComponentProps<typeof PodcastDetailsCard> {
  episodes: {
    episodeId: string;
    date: string;
    duration: string;
    title: string;
  }[];
}

export const PodcastDetailsPage: FC<PodcastDetailsPageProps> = ({
  author,
  coverUrl,
  description,
  episodes,
  podcastId,
  title,
}) => (
  <PageContainer>
    <LeftSection>
      <StyledPodcastDetails
        author={author}
        coverUrl={coverUrl}
        description={description}
        title={title}
        podcastId={podcastId}
      />
    </LeftSection>
    <RightSection>
      <StyledPodcastEpisodesTally tally={episodes.length} />
      <StyledPodcastEpisodesTable>
        {episodes.map((episode) => (
          <StyledPodcastEpisodesTable.Row
            date={episode.date}
            duration={episode.duration}
            episodeId={episode.episodeId}
            key={episode.episodeId}
            podcastId={podcastId}
            title={episode.title}
          />
        ))}
      </StyledPodcastEpisodesTable>
    </RightSection>
  </PageContainer>
);
