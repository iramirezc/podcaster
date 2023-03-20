import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Table = styled.div.attrs({ role: 'grid' })`
  border-radius: 0.3rem;
  box-shadow: ${({ theme }) => theme.palette.shadow};
  padding: 1rem;
`;

export const TableColumnHeader = styled.div.attrs({ role: 'columnheader' })<{
  align?: string;
}>`
  font-weight: bold;
  text-align: ${({ align = 'left' }) => align};
`;

export const TableRowGroup = styled.div.attrs({ role: 'rowgroup' })`
  [role='row']:nth-child(odd) {
    background-color: #f8f8f8;
  }
`;

export const TableRow = styled.div.attrs({ role: 'row' })`
  border-bottom: 1px solid lightgray;
  display: grid;
  grid-template-columns: 60% 1fr 1fr;
  padding: 0.8rem 1rem;
  column-gap: 0.8rem;
`;

export const TableCell = styled.div.attrs({ role: 'gridcell' })<{
  align?: string;
  noWrap?: boolean;
}>`
  text-align: ${({ align = 'left' }) => align};

  ${({ noWrap }) =>
    noWrap &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary};
  text-decoration: none;
`;
