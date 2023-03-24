import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  palette: "primary",
  label: 'Button',
  size: "small"
};

export const HollowPrimary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HollowPrimary.args = {
  palette: "primary-hollow",
  label: 'Button',
  size: "small"
};

export const Secondary = Template.bind({});
Secondary.args = {
  palette: "secondary",
  label: "Button",
  size: "small"
};
export const HollowSecondary = Template.bind({});
HollowSecondary.args = {
  palette: "secondary-hollow",
  label: "Button",
  size: "small"
};

export const Large = Template.bind({});
Large.args = {
  palette: "primary",
  size: "large",
  label: "Button",
};
