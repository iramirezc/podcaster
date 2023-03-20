import { FC } from 'react';

import {
  CoverContainer,
  DescriptionContainer,
  MainContainer,
  PodcastAuthor,
  PodcastCover,
  PodcastDescription,
  PodcastTitle,
  TitleContainer,
  StyledLink,
} from './PodcastDetailsCard.styles';

interface PodcastDetailsCardProps {
  author: string;
  className?: string;
  coverUrl: string;
  description: string;
  podcastId: string;
  title: string;
}

export const PodcastDetailsCard: FC<PodcastDetailsCardProps> = ({
  author,
  className,
  coverUrl,
  description,
  podcastId,
  title,
}) => {
  return (
    <MainContainer className={className} id={`podcast-${podcastId}`}>
      <CoverContainer>
        <StyledLink to={`/podcast/${podcastId}`}>
          <PodcastCover src={coverUrl} />
        </StyledLink>
      </CoverContainer>
      <TitleContainer>
        <StyledLink to={`/podcast/${podcastId}`}>
          <PodcastTitle>{title}</PodcastTitle>
          <PodcastAuthor>by&nbsp;{author}</PodcastAuthor>
        </StyledLink>
      </TitleContainer>
      <DescriptionContainer>
        <p>Description:</p>
        <PodcastDescription>{description}</PodcastDescription>
      </DescriptionContainer>
    </MainContainer>
  );
};
