import styled from 'styled-components';

export const StyledAppHeader = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background};
  border-bottom: 1px solid gray;
  color: ${({ theme }) => theme.palette.primary};
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.9rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
`;
