import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PodcastFilter } from './PodcastFilter';

export default {
  title: 'Features/Podcasts/PodcastFilter',
  component: PodcastFilter,
} as ComponentMeta<typeof PodcastFilter>;

const PodcastFilterTemplate: ComponentStory<typeof PodcastFilter> = (props) => (
  <PodcastFilter {...props} />
);

export const Default = PodcastFilterTemplate.bind({});

Default.args = {
  value: 'Art',
  results: 2,
};

export const Empty = PodcastFilterTemplate.bind({});

Empty.args = {
  value: '',
  results: 0,
};
