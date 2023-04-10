import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Lipsum } from './helpers/text';
import { Bio } from './Bio';
const placeholderText = new Lipsum();

const description = `
A bio card with horizontal or vertical orientation
<details>
<summary><strong>See snowball configuration example</strong></summary>
\`\`\`
// tailwind.config.js
module.exports = {
  //...
  snowball: ({ theme }) => ({
    bio: {
      color: {
        default: {
          surface: theme("colors.white"),
          "ink": theme("colors.black"),
          "accent": theme("colors.secondary.dark"),
        }
        // Additional palettes here.
      },
      utility: {
        borderRadius: {
          outside: "0",
          inside: "9999999px"
        }
      },
      styles: {
        horizontal: {
          "img": {
            width: "180px",
            height: "180px",
            flex: "0 0 180px"
          },
          ".bio-text": {
            flexGrow: 1
          }
        },
      },
    }
  })
}
\`\`\`
</details>
`

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
  parameters: {
    docs: {
      description: {
        component: description
      },
    },
  },
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

