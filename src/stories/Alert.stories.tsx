import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Lipsum } from './helpers/text';
import { Alert } from './Alert';
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
    alert: {
      color: {
        warning: {
          surface: theme("colors.warning.light"),
          ink: theme("colors.grey.dark"),
          accent: theme("colors.warning.dark"),
        }
        // Additional palettes here.
      },
      utility: {
        fontFamily: {
          title: theme('fontFamily.sans'),
          body: theme('fontFamily.serif')
        },
      },
      styles: {
        DEFAULT: {
          padding: theme("spacing.4"),
          borderLeft: theme("borderWidth.4"),
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
  title: 'Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;



const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Info = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
  palette: "info",
  headline: "Info Text",
  text: placeholderText.getSentences(3),
  action: {
    href: "#",
    title: placeholderText.getWords(2, 5)
  }
};

export const Warning = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Warning.args = {
  palette: "warning",
  headline: "Warning Text",
  text: placeholderText.getSentences(3),
  action: {
    href: "#",
    title: placeholderText.getWords(2, 5)
  }
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  palette: "error",
  headline: "Error Text",
  text: placeholderText.getSentences(3),
  action: {
    href: "#",
    title: placeholderText.getWords(2, 5)
  }
};


export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  palette: "success",
  headline: "Success Text",
  text: placeholderText.getSentences(3),
  action: {
    href: "#",
    title: placeholderText.getWords(2, 5)
  }
};
