import React from 'react';
import Input from 'components/atoms/Input/Input';

export default {
  title: 'Atoms/Input',
  component: Input,

};

const Template = (args) => <Input {...args} placeholder={args.label} />;
export const Normal = Template.bind({});

Normal.args = {
  label: 'Login',
};
export const Search = Template.bind({});

Search.args = {
  label: 'Search',
  search: true,
};
