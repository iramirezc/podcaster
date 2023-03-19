import { PropsWithChildren } from 'react';
import {
  Table,
  TableCell,
  TableColumnHeader,
  TableRow,
  TableRowGroup,
} from './PodcastEpisodesTable.styles';

export const PodcastEpisodesTable = ({ children }: PropsWithChildren) => {
  return (
    <Table>
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
  title,
}: {
  date: string;
  duration: string;
  title: string;
}) => (
  <TableRow>
    <TableCell>{title}</TableCell>
    <TableCell align="center">{date}</TableCell>
    <TableCell align="center">{duration}</TableCell>
  </TableRow>
);
