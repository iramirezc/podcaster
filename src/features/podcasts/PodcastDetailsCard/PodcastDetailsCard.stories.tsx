import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PodcastDetailsCard } from './PodcastDetailsCard';

export default {
  title: 'Features/Podcasts/PodcastDetailsCard',
  component: PodcastDetailsCard,
  decorators: [(Story) => <div style={{ maxWidth: '300px' }}>{Story()}</div>],
} as ComponentMeta<typeof PodcastDetailsCard>;

const PodcastDetailsCardTemplate: ComponentStory<typeof PodcastDetailsCard> = (
  props
) => <PodcastDetailsCard {...props} />;

export const Default = PodcastDetailsCardTemplate.bind({});

Default.args = {
  author: 'Song Exploder',
  coverUrl: 'https://via.placeholder.com/170x170',
  description:
    'A podcast where musicians take apart their songs, and piece by piece, tell the story of how they were made.',
  title: 'Song Exploder',
};
