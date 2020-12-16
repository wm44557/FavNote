import React from 'react';
import styled from 'styled-components';

import BulbIcon from 'assets/bulb.svg';
import PenIcon from 'assets/pen.svg';
import PlusIcon from 'assets/plus.svg';
import TwitterIcon from 'assets/twitter.svg';
import LogoutIcon from 'assets/logout.svg';

import ButtonIco from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.note};
`;

export default {
  title: 'Atoms/ButtonIcon',
  component: ButtonIco,
  decorators: [(Story) => <YellowBackground><Story /></YellowBackground>],
  args: {
    active: false,
  },
};

const Template = (args) => (
  <ButtonIco {...args} />
);
export const Bulb = Template.bind({});

Bulb.args = {
  icon: BulbIcon,
};
export const Logout = Template.bind({});

Logout.args = {
  icon: LogoutIcon,
};
export const Pen = Template.bind({});

Pen.args = {
  icon: PenIcon,
};
export const Plus = Template.bind({});

Plus.args = {
  icon: PlusIcon,
};
export const Twitter = Template.bind({});

Twitter.args = {
  icon: TwitterIcon,
};
