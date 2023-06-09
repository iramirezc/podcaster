import styled from 'styled-components';
import {
  PodcastDetailsCard,
  PodcastEpisodesTable,
  PodcastEpisodesTally,
} from 'features/podcasts';

export const PageContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 200px;
  max-width: 300px;
`;

export const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-self: flex-end;
  margin-left: 5%;
`;

export const StyledPodcastDetails = styled(PodcastDetailsCard)``;

export const StyledPodcastEpisodesTally = styled(PodcastEpisodesTally)`
  margin-bottom: 2rem;
`;

export const StyledPodcastEpisodesTable = styled(PodcastEpisodesTable)``;
