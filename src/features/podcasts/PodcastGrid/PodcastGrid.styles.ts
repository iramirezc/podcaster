import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GridContainer = styled.section`
  column-gap: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
