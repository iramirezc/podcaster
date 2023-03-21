import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from 'components';

export const StyledSpinner = styled(LoadingSpinner)`
  align-self: flex-end;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
