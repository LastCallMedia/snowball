import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Lipsum } from './helpers/text';
import { Bio } from './Bio';
const placeholderText = new Lipsum();

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'User/Bio',
  component: Bio,
  decorators: [
    (Story, context) => (
      <div style={{ maxWidth: context.args.layout === 'horizontal' ? '1000px' : '400px' }} >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Bio>;



const Template: ComponentStory<typeof Bio> = (args) => <Bio {...args} />;


export const Horizontal = Template.bind({});
Horizontal.args = {
  palette: "default",
  name: "Fname Lname",
  title: "Job title",
  company: "Company Name",
  bio: placeholderText.getSentences(2),
  layout: "horizontal"
};

export const Vertical = Template.bind({});
Vertical.args = {
  palette: "default",
  name: "Fname Lname",
  title: "Job title",
  company: "Company Name",
  bio: placeholderText.getSentences(2),
  layout: "vertical"
};

