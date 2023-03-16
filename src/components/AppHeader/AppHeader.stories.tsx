import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppHeader } from './AppHeader';

export default {
  title: 'Components/AppHeader',
  component: AppHeader,
  decorators: [(Story) => <div style={{ height: '150vh' }}>{Story()}</div>],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AppHeader>;

const AppHeaderTemplate: ComponentStory<typeof AppHeader> = (props) => (
  <AppHeader {...props} />
);

export const Default = AppHeaderTemplate.bind({});

Default.args = {};
