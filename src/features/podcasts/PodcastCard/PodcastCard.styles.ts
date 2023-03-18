import styled from 'styled-components';

const COVER_HEIGHT = 170;

export const PodcastContainer = styled.article`
  box-shadow: ${({ theme }) => theme.palette.shadow};
  margin-top: calc(${COVER_HEIGHT}px / 2);
  padding: 16px;
  text-align: center;
  width: 230px;
`;

export const PodcastCover = styled.img`
  border-radius: 50%;
  height: ${COVER_HEIGHT}px;
  margin-bottom: 8px;
  margin-top: calc(${COVER_HEIGHT}px / 2 * -1);
`;

export const PodcastTitle = styled.h2`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 0.9rem;
  font-weight: 400;
  text-transform: uppercase;
`;

export const PodcastAuthor = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.9rem;
  margin-top: 8px;
`;
