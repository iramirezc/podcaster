import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PodcastEpisodesTable } from './PodcastEpisodesTable';

export default {
  title: 'Features/Podcasts/PodcastEpisodesTable',
  component: PodcastEpisodesTable,
} as ComponentMeta<typeof PodcastEpisodesTable>;

const PodcastEpisodesTableTemplate: ComponentStory<
  typeof PodcastEpisodesTable
> = (props) => <PodcastEpisodesTable {...props} />;

export const Default = PodcastEpisodesTableTemplate.bind({});

Default.args = {
  children: (
    <>
      <PodcastEpisodesTable.Row
        title="Podcast 1"
        date="19/03/2023"
        duration="15:45"
      />
      <PodcastEpisodesTable.Row
        title="Podcast 2"
        date="19/03/2023"
        duration="15:45"
      />
      <PodcastEpisodesTable.Row
        title="Podcast 3"
        date="19/03/2023"
        duration="15:45"
      />
    </>
  ),
};
