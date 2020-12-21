import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';

export default {
  title: 'organisms/Sidebar',
  component: Sidebar,
  decorators: [StoryRouter()],

};

const Template = (args) => <Sidebar {...args} />;
export const Note = Template.bind({});

Note.args = {
  pageType: 'note',
};
export const Twitter = Template.bind({});

Twitter.args = {
  pageType: 'twitter',
};
export const Article = Template.bind({});

Article.args = {
  pageType: 'article',
};
