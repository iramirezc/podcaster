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
} from './PodcastDetailsCard.styles';

interface PodcastDetailsCardProps {
  author: string;
  className?: string;
  coverUrl: string;
  description: string;
  title: string;
}

export const PodcastDetailsCard: FC<PodcastDetailsCardProps> = ({
  author,
  className,
  coverUrl,
  description,
  title,
}) => {
  return (
    <MainContainer className={className}>
      <CoverContainer>
        <PodcastCover src={coverUrl} />
      </CoverContainer>
      <TitleContainer>
        <PodcastTitle>{title}</PodcastTitle>
        <PodcastAuthor>by&nbsp;{author}</PodcastAuthor>
      </TitleContainer>
      <DescriptionContainer>
        <p>Description:</p>
        <PodcastDescription>{description}</PodcastDescription>
      </DescriptionContainer>
    </MainContainer>
  );
};
