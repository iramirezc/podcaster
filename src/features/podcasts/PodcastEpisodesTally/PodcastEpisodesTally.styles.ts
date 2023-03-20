import styled from 'styled-components';

export const Container = styled.header`
  border-radius: 0.3rem;
  box-shadow: ${({ theme }) => theme.palette.shadow};
  padding: 0.8rem;

  h3 {
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 1.5rem;
  }
`;
