import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
const description = `
A button component
<details>
<summary><strong>See snowball configuration example</strong></summary>
\`\`\`
// tailwind.config.js
module.exports = {
  //...
  snowball: ({ theme }) => ({
    button: {
      color: {
        "primary": {
          paper: {
            DEFAULT: theme("colors.primary.DEFAULT"),
            hover: theme("colors.primary.dark")
          },
          ink: {
            DEFAULT: theme("colors.grey.dark"),
            hover: theme("colors.white")
          },
          accent: {
            DEFAULT: "transparent",
            hover: "transparent"
          }
        },
        // Additional palettes here.
      },
      utility: {
        spacing: {
          "sm-x": theme("spacing.4"),
          "sm-y": theme("spacing.2"),
          "lg-x": theme("spacing.6"),
          "lg-y": theme("spacing.4")
        }
      },
    }
  })
}
\`\`\`
</details>
`
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: description
      },
    },
  },
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

Object.assign(HollowPrimary, {
  args: {
    palette: "primary-hollow",
    label: 'Button',
    size: "small"
  },
})

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
