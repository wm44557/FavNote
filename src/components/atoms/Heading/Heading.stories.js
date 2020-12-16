import React from 'react';
import Heading from './Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,

};

const Template = (args) => <Heading {...args}>{args.label}</Heading>;
export const Normal = Template.bind({});

Normal.args = {
  label: 'HEJ MARCIN',
};

export const big = Template.bind({});
big.args = {
  big: true,
  label: 'HEJ MARCIN',
};
