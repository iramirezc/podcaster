import styled, { keyframes } from 'styled-components';

// A nice CSS loader borrowed from:
// https://loading.io/css/
const animation = keyframes`
    0%, 100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
`;

export const Circle = styled.div<{ size?: string }>`
  display: inline-block;
  transform: translateZ(1px);

  & > div {
    display: inline-block;
    width: ${({ size = '1rem' }) => size};
    height: ${({ size = '1rem' }) => size};
    border-radius: 50%;
    background: ${({ theme }) => theme.palette.primary};
    animation: ${animation} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
`;
