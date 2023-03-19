import styled from 'styled-components';
import { PodcastFilter } from 'features/podcasts';

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledFilter = styled(PodcastFilter)`
  align-self: flex-end;
  margin-top: 1rem;
  margin-right: 1rem;
`;
