/** @type {import('tailwindcss').Config} */

const colors = {
  primary: {
    light: "#CBF1EF",
    DEFAULT: "#4ECDC4",
    dark: "#006A63",
  },
  secondary: {
    light: "#C9A0FF",
    DEFAULT: "#6E13E4",
    dark: "#30006D",
  },
  grey: {
    light: "#D3D3D3",
    DEFAULT: "#6F6F6F",
    dark: "#3D3D3D",
    xdark: "#1A1A1A",
  },
  warning: {
    light: "#FFF7CE",
    DEFAULT: "#FCD925",
    dark: "#D99C00",
  },
  info: {
    light: "#D1DEFF",
    DEFAULT: "#87A9FF",
    dark: "#1154FF",
  },
  success: {
    light: "#D6F6BD",
    DEFAULT: "#6AC522",
    dark: "#377D00",
  },
  error: {
    light: "#FFD1D1",
    DEFAULT: "#FF3131",
    dark: "#A00000",
  },
  white: "#fff",
  black: "#000",
};
const theme = () => {}



const remCalc = (pxSize, suffix = true) => {
  const rems = pxSize / 16
  if (suffix) {
    return `${rems}rem`
  }
  return rems
}

const config = {
  content: ["./../../stories/*.tsx"],
  theme: {
    fontFamily: {
      sans: "'Work Sans', sans-serif",
      serif: "'Playfair Display', serif",
      mono: "'IBM Plex Mono', monospace",
    },
    colors: {
      ...colors,
    },
    fontSize: ({theme}) => ({
      xs: [remCalc(12), remCalc(16)],
      sm: [remCalc(14), remCalc(20)],
      DEFAULT: [remCalc(16), remCalc(24)],
      base: [remCalc(16), remCalc(24)],
      lg: [remCalc(18), remCalc(28)],
      xl: [remCalc(20), remCalc(28)],
      "2xl": [remCalc(24), remCalc(32)],
      "3xl": [remCalc(30), remCalc(36)],
      "4xl": [remCalc(36), remCalc(40)],
      "5xl": [remCalc(48), remCalc(48)],
      "6xl": [remCalc(60), remCalc(60)],
      "7xl": [remCalc(72), remCalc(72)],
      "8xl": [remCalc(96), remCalc(96)],
      "9xl": [remCalc(128), remCalc(128)]
    }),
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
          
          "primary-hollow": {
            paper: {
              DEFAULT: theme("colors.white"),
              hover: theme("colors.primary.light")
            },
            ink: {
              DEFAULT: theme("colors.primary.dark"),
              hover: theme("colors.primary.dark")
            },
            accent: {
              DEFAULT: theme("colors.primary.dark"),
              hover: theme("colors.primary.dark")
            }
          },
          secondary: {
            paper: {
              DEFAULT: theme("colors.secondary.DEFAULT"),
              hover: theme("colors.secondary.dark")
            },
            ink: {
              DEFAULT: theme("colors.white"),
              hover: theme("colors.white")
            },
            accent: {
              DEFAULT: "transparent",
              hover: "transparent"
            },
          },
          "secondary-hollow": {
            paper: {
              DEFAULT: theme("colors.white"),
              hover: theme("colors.secondary.light")
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
        styles: {
          _: {
            borderRadius: theme("borderRadius.lg")
          },
          DEFAULT: {
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
    extend: {
      padding: ({ theme }) => ({}),
    },
  },
  plugins: [
    require("../../snowball/snowball"),
    require("@tailwindcss/typography")
  ],
};

module.exports = config;
