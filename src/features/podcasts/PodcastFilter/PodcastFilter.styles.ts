import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
`;

export const ResultsBadge = styled.span`
  background-color: ${({ theme }) => theme.palette.primary};
  border-radius: 3px;
  color: white;
  margin-right: 0.5rem;
  padding: 0 0.5rem;
`;

export const Input = styled.input.attrs({ type: 'text' })`
  border-radius: 3px;
  border: 1px solid gray;
  padding: 0.5rem;
`;
