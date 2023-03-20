import styled from 'styled-components';

export const PlayerContainer = styled.section`
  border-radius: 0.3rem;
  box-shadow: ${({ theme }) => theme.palette.shadow};
  padding: 2rem;
`;

export const EpisodeTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const EpisodeDescription = styled.p`
  border-bottom: 1px solid lightgray;
  font-style: italic;
  padding-bottom: 2rem;
`;

export const AudioPlayer = styled.audio`
  padding-top: 2rem;
  width: 100%;
`;
