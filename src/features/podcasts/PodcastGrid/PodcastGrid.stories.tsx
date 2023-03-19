import { nanoid } from '@reduxjs/toolkit';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PodcastGrid } from './PodcastGrid';

export default {
  title: 'Features/Podcasts/PodcastGrid',
  component: PodcastGrid,
} as ComponentMeta<typeof PodcastGrid>;

const PodcastGridTemplate: ComponentStory<typeof PodcastGrid> = (props) => (
  <PodcastGrid {...props} />
);

export const Default = PodcastGridTemplate.bind({});

Default.args = {
  podcasts: [
    {
      podcastId: nanoid(),
      coverUrl: 'https://via.placeholder.com/170x170',
      title: 'Podcast title',
      author: 'Podcast author',
    },
    {
      podcastId: nanoid(),
      coverUrl: 'https://via.placeholder.com/170x170',
      title: 'Podcast title',
      author: 'Podcast author',
    },
    {
      podcastId: nanoid(),
      coverUrl: 'https://via.placeholder.com/170x170',
      title: 'Podcast title',
      author: 'Podcast author',
    },
    {
      podcastId: nanoid(),
      coverUrl: 'https://via.placeholder.com/170x170',
      title: 'Podcast title',
      author: 'Podcast author',
    },
    {
      podcastId: nanoid(),
      coverUrl: 'https://via.placeholder.com/170x170',
      title: 'Podcast title',
      author: 'Podcast author',
    },
    {
      podcastId: nanoid(),
      coverUrl: 'https://via.placeholder.com/170x170',
      title: 'Podcast title',
      author: 'Podcast author',
    },
    {
      podcastId: nanoid(),
      coverUrl: 'https://via.placeholder.com/170x170',
      title: 'Podcast title',
      author: 'Podcast author',
    },
    {
      podcastId: nanoid(),
      coverUrl: 'https://via.placeholder.com/170x170',
      title: 'Podcast title',
      author: 'Podcast author',
    },
    {
      podcastId: nanoid(),
      coverUrl: 'https://via.placeholder.com/170x170',
      title: 'Podcast title',
      author: 'Podcast author',
    },
    {
      podcastId: nanoid(),
      coverUrl: 'https://via.placeholder.com/170x170',
      title: 'Podcast title',
      author: 'Podcast author',
    },
    {
      podcastId: nanoid(),
      coverUrl: 'https://via.placeholder.com/170x170',
      title: 'Podcast title',
      author: 'Podcast author',
    },
    {
      podcastId: nanoid(),
      coverUrl: 'https://via.placeholder.com/170x170',
      title: 'Podcast title',
      author: 'Podcast author',
    },
  ],
};
