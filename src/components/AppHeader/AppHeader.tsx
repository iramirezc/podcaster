import { PropsWithChildren } from 'react';
import { StyledAppHeader } from './AppHeader.styles';

export const AppHeader = ({ children }: PropsWithChildren) => {
  return <StyledAppHeader>{children}</StyledAppHeader>;
};
