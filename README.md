# Last Call Media: Snowball

A storybook-based component library leveraging the [Tailwind-Snowball](https://github.com/LastCallMedia/tailwind-snowball) plugin. The intent is to create a component library similar to [TailwindUI](https://tailwindui.com/), but with the ability to change the color palette and appearance through TailwindCSS configuration files.

## Hosting
The built storybook is hosted on GitHub Pages at https://lastcallmedia.github.io/snowball.

Whenever a commit is pushed to the `main` branch, a new version of the storybook is published. This is handled through the commited [Build and Deploy](https://github.com/LastCallMedia/snowball/blob/main/.github/workflows/storybook.yml) GitHub Actions workflow.

## Local Development

### Install Dependencies

All dependencies come from NPM. Using the yarn package manager, run
```shell
yarn install
```

### Build themes
Currently, the different TailwindCSS themes get built separately form webpack which runs the storybook. Each theme gets built individually. This is not a convenient process, and would be a great place for a PR in order to streamline this process.

```shell
cd ./src/themes/{THEMENAME}
npx tailwindcss -i ./main.css -o ./../../../public/themes/{THEMENAME}/output.css --watch
```

### Run Storybook
Run storybook in the hot-reloading development mode that allows for easy component development
```shell
yarn storybook
```

### Build static storybook
Build a static storybook site (used for artifacts such as GitHub Pages)

```shell
yarn build-storybook
```

## Usage

### Change Themes

The theme switcher is in the top bar. Click the theme selector, and choose your theme from the dropdown.

![Theme switcher dropdown](https://github.com/lastcallmedia/snowball/blob/main/docs/img/theme_switcher.png?raw=true)

Only themes with built CSS will function.

## Custom Storybook Functionality

### Theme Switcher
The functionality for switching the theme lives in a custom decorator, located at `./.storybook/decorators/TailwindThemeProvider.js`, and used in `./storybook/preview.js`, where the decorator is used in `decorators`, and the themes and their CSS files are provided in `globalTypes`.

