import { FC } from 'react';
import { PodcastGrid } from 'features/podcasts';
import { PageContainer, StyledFilter } from './HomePage.styles';

interface HomePageProps extends React.ComponentProps<typeof PodcastGrid> {
  filterResults: number;
  filterValue: string;
  onFilterChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const HomePage: FC<HomePageProps> = ({
  filterResults,
  filterValue,
  onFilterChange,
  podcasts,
}) => (
  <PageContainer>
    <StyledFilter
      onChange={onFilterChange}
      results={filterResults}
      value={filterValue}
    />
    <PodcastGrid podcasts={podcasts} />
  </PageContainer>
);
