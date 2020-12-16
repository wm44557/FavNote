import React from 'react';

import { select, withKnobs } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  decorators: [withKnobs],
};
export const Primary = (args) => {
  const label = 'Colors';
  const options = {
    primary: 'hsl(49,100%,58%)',
    secondary: 'hsl(196,83%,75%)',
    tertiary: 'hsl(106,47%,64%)',
  };
  const defaultValue = 'hsl(49,100%,59%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return <Button color={value} {...args}>{args.label}</Button>;
};
Primary.args = {
  label: 'Button',
};
const Template = (args) => <Button {...args}>{args.label}</Button>;

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: 'ButS',
};
