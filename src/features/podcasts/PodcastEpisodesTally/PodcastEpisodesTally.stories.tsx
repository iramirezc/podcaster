import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PodcastEpisodesTally } from './PodcastEpisodesTally';

export default {
  title: 'Features/Podcasts/PodcastEpisodesTally',
  component: PodcastEpisodesTally,
} as ComponentMeta<typeof PodcastEpisodesTally>;

const PodcastEpisodesTallyTemplate: ComponentStory<
  typeof PodcastEpisodesTally
> = (props) => <PodcastEpisodesTally {...props} />;

export const Default = PodcastEpisodesTallyTemplate.bind({});

Default.args = {
  tally: 49,
};
