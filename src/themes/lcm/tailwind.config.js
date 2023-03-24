/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const defaultTheme = require("tailwindcss/defaultTheme");
const _ = require("lodash")
const defaultSnowballConfig = require('./../default/tailwind.config')


const lcmConfig = {
  theme: {
    fontFamily: {
      sans: "'Ubuntu', sans-serif",
      serif: "'Source Serif Pro', serif",
      mono: "'Source Code Pro', monospace;",
    },
    colors: {
      primary: {
        DEFAULT: '#f00',
        dark: '#a60000',
      }
    },
    snowball: ({ theme }) => ({
        button: {
          color: {
            "primary-full": {
              paper: theme("colors.primary.DEFAULT"),
              ink: theme("colors.white"),
              accent: "transparent",
            },
            "primary-dark-full": {
              paper: theme("colors.primary.dark"),
              ink: theme("colors.white"),
              accent: "transparent",
            },
            "primary-hollow": {
              paper: theme("colors.white"),
              ink: theme("colors.primary.dark"),
              accent: theme("colors.primary.dark"),
            },
            "primary-dark-hollow": {
              paper: theme("colors.primary.light"),
              ink: theme("colors.primary.dark"),
              accent: theme("colors.primary.dark"),
            },
            "secondary-full": {
              paper: theme("colors.secondary.DEFAULT"),
              ink: theme("colors.white"),
              accent: "transparent",
            },
            "secondary-dark-full": {
              paper: theme("colors.secondary.dark"),
              ink: theme("colors.white"),
              accent: "transparent",
            },
            "secondary-hollow": {
              paper: theme("colors.white"),
              ink: theme("colors.secondary.dark"),
              accent: theme("colors.secondary.dark"),
            },
            "secondary-dark-hollow": {
              paper: theme("colors.secondary.light"),
              ink: theme("colors.secondary.dark"),
              accent: theme("colors.secondary.dark"),
            },
  
            "grey-light-full": {
              paper: theme("colors.grey.light"),
              ink: theme("colors.grey.dark"),
              accent: "transparent",
            },
          },
          styles: {
            _: {
              borderRadius: theme("borderRadius.lg")
            },
            sm: {
              paddingLeft: theme("spacing.4"),
              paddingRight: theme("spacing.4"),
              paddingTop: theme("spacing.2"),
              paddingBottom: theme("spacing.2"),
            },
            lg: {
              paddingLeft: theme("spacing.6"),
              paddingRight: theme("spacing.6"),
              paddingTop: theme("spacing.4"),
              paddingBottom: theme("spacing.4"),
            },
          },
        },
        bio: {
          color: {
            default: {
              surface: theme("colors.white"),
              "ink": theme("colors.black"),
              "accent": theme("colors.secondary.dark"),
            }
          },
          styles: {
            _: {
              img: {
                borderRadius: "9999px"
              }
            },
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
            vertical: {
            },
          },
        },
        alert: {
          color: {
            warning: {
              surface: theme("colors.warning.light"),
              ink: theme("colors.grey.dark"),
              accent: theme("colors.warning.dark"),
            },
            error: {
              surface: theme("colors.error.light"),
              ink: theme("colors.grey.dark"),
              accent: theme("colors.error.dark"),
            },
            info: {
              surface: theme("colors.info.light"),
              ink: theme("colors.grey.dark"),
              accent: theme("colors.info.dark"),
            },
            success: {
              surface: theme("colors.success.light"),
              ink: theme("colors.grey.dark"),
              accent: theme("colors.success.dark"),
            },
          },
          styles: {
            DEFAULT: {
              padding: theme("spacing.4"),
              borderLeft: theme("borderWidth.4"),
            },
          },
        },
      }),
  }
};


module.exports = _.merge(defaultSnowballConfig, lcmConfig);
