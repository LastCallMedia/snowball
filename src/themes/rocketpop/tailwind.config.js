/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const _ = require("lodash")
const defaultSnowballConfig = require('./../default/tailwind.config')
const defaultTheme = require('tailwindcss/defaultTheme')


const lcmConfig = {
  theme: {
    fontFamily: {
      sans: "'Ubuntu', sans-serif",
      serif: "'Source Serif Pro', serif",
      mono: "'Source Code Pro', monospace;",
    },
    colors: {
      primary: {
        light: "#e68c93",
        DEFAULT: "#E63946",
        dark: "#b50714"
      },
      secondary: {
        light: "#fff",
        DEFAULT: "#F1FAEE",
        dark: "#a2c497"
      },

    },
    extend: {
      borderRadius: ({theme}) =>({
        "interface-interactive-element": defaultTheme.borderRadius.sm
      }),
    },
    snowball: ({ theme }) => ({
      button: {
        color: {
          "primary": {
            paper: {
              DEFAULT: theme("colors.primary.DEFAULT"),
              hover: theme("colors.primary.dark")
            },
            ink: {
              DEFAULT: theme("colors.secondary.DEFAULT"),
              hover: theme("colors.white")
            },
            accent: {
              DEFAULT: "transparent",
              hover: "transparent"
            }
          },
          
          "primary-hollow": {
            paper: {
              DEFAULT: theme("colors.white"),
              hover: theme("colors.primary.light")
            },
            ink: {
              DEFAULT: theme("colors.primary.dark"),
              hover: theme("colors.white")
            },
            accent: {
              DEFAULT: theme("colors.primary.dark"),
              hover: theme("colors.primary.dark")
            }
          },
          secondary: {
            paper: {
              DEFAULT: theme("colors.secondary.dark"),
              hover: theme("colors.secondary.DEFAULT")
            },
            ink: {
              DEFAULT: theme("colors.white"),
              hover: theme("colors.secondary.dark"),
            },
            accent: {
              DEFAULT: "transparent",
              hover: theme("colors.secondary.dark")
            },
          },
          "secondary-hollow": {
            paper: {
              DEFAULT: theme("colors.white"),
              hover: theme("colors.secondary.DEFAULT")
            },
            ink: {
              DEFAULT: theme("colors.secondary.dark"),
              hover: theme("colors.secondary.dark")
            },
            accent: {
              DEFAULT: theme("colors.secondary.dark"),
              hover: theme("colors.secondary.dark")
            },
          },
          "grey-light": {
            paper: {
              DEFAULT: theme("colors.grey.light"),
              hover: theme("colors.grey.light")
            },
            ink: {
              DEFAULT: theme("colors.grey.dark"),
              hover: theme("colors.grey.dark")
            },
            accent: {
              DEFAULT: "transparent",
              hover: "transparent"
            }
          },
        },
        utility: {
          spacing: {
            "sm-x": theme("spacing.4"),
            "sm-y": theme("spacing.2"),
            "lg-x": theme("spacing.6"),
            "lg-y": theme("spacing.4")
          }
        },
        styles: {
          // DEFAULT: {
          //   paddingLeft: theme("spacing.4"),
          //   paddingRight: theme("spacing.4"),
          //   paddingTop: theme("spacing.2"),
          //   paddingBottom: theme("spacing.2"),
          // },
          // lg: {
          //   paddingLeft: theme("spacing.6"),
          //   paddingRight: theme("spacing.6"),
          //   paddingTop: theme("spacing.4"),
          //   paddingBottom: theme("spacing.4"),
          // },
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
        utility: {
          borderRadius: {
            outside: 0,
            inside: "50px"
          }
        },
        styles: {
          // _: {
          //   img: {
          //     borderRadius: "9999px"
          //   }
          // },
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
            surface: theme("colors.secondary"),
            ink: theme("colors.grey.dark"),
            accent: theme("colors.warning.dark"),
          },
          error: {
            surface: theme("colors.secondary"),
            ink: theme("colors.grey.dark"),
            accent: theme("colors.error.dark"),
          },
          
          info: {
            surface: theme("colors.secondary"),
            ink: theme("colors.grey.dark"),
            accent: theme("colors.info.dark"),
          },
          success: {
            surface: theme("colors.secondary"),
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
  },
};


module.exports = _.merge(defaultSnowballConfig, lcmConfig);
