import { ComponentMeta } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner';

export default {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
} as ComponentMeta<typeof LoadingSpinner>;

export const Default = () => <LoadingSpinner />;
