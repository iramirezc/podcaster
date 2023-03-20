import styled from 'styled-components';

export const MainContainer = styled.aside`
  border-radius: 0.3rem;
  box-shadow: ${({ theme }) => theme.palette.shadow};
  color: ${({ theme }) => theme.palette.text.primary};
  display: flex;
  flex-direction: column;
  padding: 0 0.8rem;
`;

export const CoverContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 2rem;
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
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
  height: 170px;
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
