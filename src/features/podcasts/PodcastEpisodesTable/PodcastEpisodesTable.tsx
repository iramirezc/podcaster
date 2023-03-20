import { PropsWithChildren } from 'react';
import {
  Table,
  TableCell,
  TableColumnHeader,
  TableRow,
  TableRowGroup,
} from './PodcastEpisodesTable.styles';

export const PodcastEpisodesTable = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <Table className={className}>
      <TableRow>
        <TableColumnHeader>Title</TableColumnHeader>
        <TableColumnHeader align="center">Date</TableColumnHeader>
        <TableColumnHeader align="center">Duration</TableColumnHeader>
      </TableRow>
      <TableRowGroup>{children}</TableRowGroup>
    </Table>
  );
};

PodcastEpisodesTable.Row = ({
  date,
  duration,
  episodeId,
  title,
}: {
  date: string;
  duration: string;
  episodeId: string;
  title: string;
}) => (
  <TableRow id={`episode-${episodeId}`}>
    <TableCell noWrap>{title}</TableCell>
    <TableCell align="center">{date}</TableCell>
    <TableCell align="center">{duration}</TableCell>
  </TableRow>
);
