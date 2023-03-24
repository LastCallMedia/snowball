import TailwindThemeProvider from "./decorators/TailwindThemeProvider";
// import fetch from "node-fetch"


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story, context) => (
    <TailwindThemeProvider cssPath={context.globals.theme}>
      <Story />
    </TailwindThemeProvider>
  ),
];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: "/themes/default/output.css",
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: `/themes/default/output.css`, title: 'Default'},
        { value: '/themes/lcm/output.css',title: 'LCM' }
        
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};