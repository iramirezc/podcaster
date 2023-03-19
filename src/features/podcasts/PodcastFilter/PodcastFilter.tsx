import { FC } from 'react';
import { Input, Container, ResultsBadge } from './PodcastFilter.styles';

interface PodcastFilterProps {
  className?: string;
  value?: string;
  results?: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const PodcastFilter: FC<PodcastFilterProps> = ({
  className,
  value = '',
  results = 0,
  onChange,
}) => {
  return (
    <Container className={className}>
      <ResultsBadge>{results}</ResultsBadge>
      <Input
        placeholder="Filter podcasts..."
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};
