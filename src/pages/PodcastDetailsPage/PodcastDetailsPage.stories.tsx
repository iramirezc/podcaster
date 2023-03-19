import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PodcastDetailsPage } from './PodcastDetailsPage';
import * as PodcastDetailsStories from 'features/podcasts/PodcastDetailsCard/PodcastDetailsCard.stories';

export default {
  title: 'Pages/PodcastDetailsPage',
  component: PodcastDetailsPage,
} as ComponentMeta<typeof PodcastDetailsPage>;

const PodcastDetailsPageTemplate: ComponentStory<typeof PodcastDetailsPage> = (
  props
) => <PodcastDetailsPage {...props} />;

export const Default = PodcastDetailsPageTemplate.bind({});

Default.args = {
  ...PodcastDetailsStories.Default.args,
  episodes: [
    {
      date: '19/03/2023',
      duration: '15:45',
      episodeId: '1',
      title: 'Episode 1',
    },
    {
      date: '19/03/2023',
      duration: '15:45',
      episodeId: '2',
      title: 'Episode 2',
    },
    {
      date: '19/03/2023',
      duration: '15:45',
      episodeId: '3',
      title: 'Episode 3',
    },
  ],
};
