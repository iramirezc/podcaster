import { Circle } from './LoadingSpinner.styles';

export const LoadingSpinner = ({ className }: { className?: string }) => (
  <Circle className={className}>
    <div className="spinner" />
  </Circle>
);
