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
        date="19/03/2023"
        duration="15:45"
        episodeId="1"
        title="Podcast 1"
      />
      <PodcastEpisodesTable.Row
        date="19/03/2023"
        duration="15:45"
        episodeId="2"
        title="Podcast 2"
      />
      <PodcastEpisodesTable.Row
        date="19/03/2023"
        duration="15:45"
        episodeId="3"
        title="Podcast 3"
      />
    </>
  ),
};
