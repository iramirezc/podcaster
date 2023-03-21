import styled from 'styled-components';

export const StyledAppHeader = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background};
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  padding: 0.9rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
`;
