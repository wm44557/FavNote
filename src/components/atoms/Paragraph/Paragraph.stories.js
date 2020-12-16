import React from 'react';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,

};

const Template = (args) => <Paragraph {...args}>{args.label}</Paragraph>;
export const Normal = Template.bind({});

Normal.args = {
  label: 'hej marcin',
};
