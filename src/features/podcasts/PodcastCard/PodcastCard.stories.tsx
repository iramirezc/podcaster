import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PodcastCard } from './PodcastCard';

export default {
  title: 'Features/Podcasts/PodcastCard',
  component: PodcastCard,
} as ComponentMeta<typeof PodcastCard>;

const PodcastCardTemplate: ComponentStory<typeof PodcastCard> = (props) => (
  <PodcastCard {...props} />
);

export const Default = PodcastCardTemplate.bind({});

Default.args = {
  podcastId: '1535809341',
  coverUrl:
    'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
  title: 'The Joe Budden Podcast - The Joe Budden Network',
  author: 'The Joe Budden Network',
};
