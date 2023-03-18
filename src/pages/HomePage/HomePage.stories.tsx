import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as PodcastGridStories from '../../features/podcasts/PodcastGrid/PodcastGrid.stories';
import { HomePage } from './HomePage';

export default {
  title: 'Pages/HomePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const HomePageTemplate: ComponentStory<typeof HomePage> = (props) => (
  <HomePage {...props} />
);

export const Default = HomePageTemplate.bind({});

Default.args = {
  podcasts: PodcastGridStories.Default.args?.podcasts,
};
