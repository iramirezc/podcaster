import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PodcastEpisodePage } from './PodcastEpisodePage';

export default {
  title: 'Pages/PodcastEpisodePage',
  component: PodcastEpisodePage,
} as ComponentMeta<typeof PodcastEpisodePage>;

const PodcastEpisodePageTemplate: ComponentStory<typeof PodcastEpisodePage> = (
  props
) => <PodcastEpisodePage {...props} />;

export const Default = PodcastEpisodePageTemplate.bind({});

Default.args = {
  podcast: {
    author: 'Song Exploder',
    coverUrl: 'https://via.placeholder.com/170x170',
    description:
      'A podcast where musicians take apart their songs, and piece by piece, tell the story of how they were made.',
    episodes: [],
    podcastId: '788236947',
    title: 'Song Exploder',
  },
  episode: {
    episodeId: '123456789',
    title: 'Wilco - Magnetized',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    audioUrl:
      'https://dts.podtrac.com/redirect.mp3/dovetail.prxu.org/_/93/a4222399-cbff-43d3-bb91-c9e3ca3b7060/SongExploder133_Kimbra_Reissue.mp3',
    date: '21/03/2024',
    duration: '00:15:45',
  },
};
