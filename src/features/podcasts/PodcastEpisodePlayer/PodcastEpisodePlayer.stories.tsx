import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PodcastEpisodePlayer } from './PodcastEpisodePlayer';

export default {
  title: 'Features/Podcasts/PodcastEpisodePlayer',
  component: PodcastEpisodePlayer,
} as ComponentMeta<typeof PodcastEpisodePlayer>;

const PodcastEpisodePlayerTemplate: ComponentStory<
  typeof PodcastEpisodePlayer
> = (props) => <PodcastEpisodePlayer {...props} />;

export const Default = PodcastEpisodePlayerTemplate.bind({});

Default.args = {
  title: 'Wilco - Magnetized',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  audioUrl:
    'https://dts.podtrac.com/redirect.mp3/dovetail.prxu.org/_/93/a4222399-cbff-43d3-bb91-c9e3ca3b7060/SongExploder133_Kimbra_Reissue.mp3',
};
