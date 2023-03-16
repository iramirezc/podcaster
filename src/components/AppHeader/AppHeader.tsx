import React, { FC } from 'react';
import { StyledAppHeader } from './AppHeader.styles';

interface AppHeaderProps {}

export const AppHeader: FC<AppHeaderProps> = () => {
  return <StyledAppHeader>Podcaster</StyledAppHeader>;
};
