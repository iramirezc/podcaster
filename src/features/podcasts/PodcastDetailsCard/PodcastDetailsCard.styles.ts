import styled from 'styled-components';

export const MainContainer = styled.aside`
  box-shadow: ${({ theme }) => theme.palette.shadow};
  display: flex;
  flex-direction: column;
  padding: 0 0.8rem;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const CoverContainer = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 1.5rem 1rem;
`;

export const DescriptionContainer = styled.div`
  padding: 1.5rem 1rem;

  & > p:first-child {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

export const PodcastCover = styled.img`
  border-radius: 0.3rem;
`;

export const PodcastTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
`;

export const PodcastAuthor = styled.p`
  font-size: 1.15rem;
  font-style: italic;
`;

export const PodcastDescription = styled.p`
  font-style: italic;
`;
