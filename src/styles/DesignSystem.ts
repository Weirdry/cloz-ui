/**
 * +=================================================================+
 * |                                                                 |
 * |        +-----------------------------------------------+        |
 * |         ***[Default Design System and Design Tokens]***         |
 * |        +-----------------------------------------------+        |
 * |                                                                 |
 * |   Applied as default when custom design system is not defined   |
 * |                                                                 |
 * +=================================================================+
 *
 **/

import { Theme } from '@emotion/react'

export const useRgba = (hex: string, alpha: number = 1): string => {
  const matched = hex.match(/\w\w/g)
  if (matched) {
    const [r, g, b] = matched.map((x) => parseInt(x, 16))
    return `rgba(${r},${g},${b},${alpha})`
  }
  return hex
}

export const tokens = {
  screenSize: {
    max: {
      desktop: null,
      tablet: 1199,
      mobile: 809,
    },
    min: {
      desktop: 1200,
      tablet: 810,
      mobile: 320,
    },
  },
  colour: {
    grayscale: {
      0: '#ffffff', // key colour
      50: '#f3f3f3',
      100: '#e7e7e7',
      200: '#cfcfcf',
      300: '#b6b6b6',
      400: '#9e9e9e',
      500: '#868686',
      600: '#6e6e6e',
      700: '#555555',
      800: '#3d3d3d',
      900: '#252525',
      1000: '#0d0d0d', // key colour
    },
    systemRed: {
      50: '#FFEDED',
      100: '#FFDADA',
      200: '#FFB7B7',
      300: '#FF9090',
      400: '#FF6565',
      500: '#FF3636',
      600: '#FF0000', // key colour
      700: '#C20202',
      800: '#850101',
      900: '#470000',
    },
  },
  typography: {
    typeface: {
      x_lg: `font-family: "Pretendard"; font-weight: 800;`,
      lg: `font-family: "Pretendard"; font-weight: 700;`,
      md: `font-family: "Pretendard"; font-weight: 400;`,
      sm: `font-family: "Pretendard"; font-weight: 300;`,
    },
    height: {
      md: '150%',
      sm: '130%',
      xsm: '100%',
    },
    spacing: {
      md: '-0.2px',
    },
    size: {
      x6_lg: '2.5rem',
      x5_lg: '2.25rem',
      x4_lg: '2rem',
      x3_lg: '1.75rem',
      x2_lg: '1.5rem',
      x_lg: '1.25rem',
      lg: '1.125rem',
      md: '1rem',
      sm: '0.875rem',
      x_sm: '0.75rem',
    },
  },
  layout: {
    x4: '0.25rem', // 4px base
    x10: '0.625rem', // 10px base
  },
}

const DefaultDesignSystem: Theme = {
  /**
   *  +=================================================================+
   *  |                      *** Colour System ***                      |
   *  +=================================================================+
   */
  colourSystem: {
    accent: {
      primary: {
        main: {
          active: '#',
          inActive: '#',
          hover: '#',
          pressed: '#',
        },
        onMain: {
          active: '#',
          inActive: '#',
          hover: '#',
          pressed: '#',
        },
        container: {
          active: '#',
        },
        onContainer: {
          active: '#',
          inActive: '#',
          hover: '#',
          pressed: '#',
        },
      },
      secondary: {
        main: {
          active: '#',
          inActive: '#',
          hover: '#',
          pressed: '#',
        },
        onMain: {
          active: '#',
          inActive: '#',
          hover: '#',
          pressed: '#',
        },
        container: {
          active: '#',
        },
        onContainer: {
          active: '#',
          inActive: '#',
          hover: '#',
          pressed: '#',
        },
      },
      tertiary: {
        main: {
          active: '#',
          inActive: '#',
          hover: '#',
          pressed: '#',
        },
        onMain: {
          active: '#',
          inActive: '#',
          hover: '#',
          pressed: '#',
        },
        container: {
          active: '#',
        },
        onContainer: {
          active: '#',
          inActive: '#',
          hover: '#',
          pressed: '#',
        },
      },
    },
    neutral: {
      primary: {
        surface: {
          active: tokens.colour.grayscale[0],
          inActive: useRgba(tokens.colour.grayscale[0], 0.5),
          hover: tokens.colour.grayscale[0],
          pressed: tokens.colour.grayscale[50],
        },
        onSurface: {
          active: tokens.colour.grayscale[1000],
          inActive: useRgba(tokens.colour.grayscale[1000], 0.5),
          hover: tokens.colour.grayscale[800],
          pressed: tokens.colour.grayscale[1000],
        },
        background: {
          active: tokens.colour.grayscale[0],
        },
        onBackground: {
          active: tokens.colour.grayscale[600],
          inActive: useRgba(tokens.colour.grayscale[600], 0.5),
          hover: tokens.colour.grayscale[400],
          pressed: tokens.colour.grayscale[700],
        },
        outline: {
          active: tokens.colour.grayscale[700],
        },
      },
      secondary: {
        surface: {
          active: tokens.colour.grayscale[50],
          inActive: useRgba(tokens.colour.grayscale[50], 0.5),
          hover: tokens.colour.grayscale[50],
          pressed: tokens.colour.grayscale[100],
        },
        onSurface: {
          active: tokens.colour.grayscale[700],
          inActive: useRgba(tokens.colour.grayscale[700], 0.5),
          hover: tokens.colour.grayscale[600],
          pressed: tokens.colour.grayscale[800],
        },
        background: {
          active: tokens.colour.grayscale[50],
        },
        onBackground: {
          active: tokens.colour.grayscale[600],
          inActive: useRgba(tokens.colour.grayscale[600], 0.5),
          hover: tokens.colour.grayscale[400],
          pressed: tokens.colour.grayscale[700],
        },
        outline: {
          active: tokens.colour.grayscale[200],
        },
      },
    },
    system: {
      primary: {
        main: {
          active: tokens.colour.systemRed[600],
          inActive: useRgba(tokens.colour.systemRed[600], 0.5),
          hover: tokens.colour.systemRed[400],
          pressed: tokens.colour.systemRed[700],
        },
        onMain: {
          active: tokens.colour.grayscale[0],
          inActive: useRgba(tokens.colour.grayscale[0], 0.5),
          hover: tokens.colour.grayscale[0],
          pressed: tokens.colour.systemRed[200],
        },
        container: {
          active: tokens.colour.systemRed[100],
        },
        onContainer: {
          active: tokens.colour.systemRed[600],
          inActive: useRgba(tokens.colour.systemRed[600], 0.5),
          hover: tokens.colour.systemRed[400],
          pressed: tokens.colour.systemRed[700],
        },
      },
    },
  },
  /**
   *  +=================================================================+
   *  |                    *** Typography System ***                    |
   *  +=================================================================+
   */
  typoSystem: {
    title: {
      md: {
        typeface: tokens.typography.typeface.x_lg,
        height: tokens.typography.height.sm,
        spacing: tokens.typography.spacing.md,
        size: {
          desktop: tokens.typography.size.x6_lg,
          tablet: tokens.typography.size.x5_lg,
          mobile: tokens.typography.size.x4_lg,
        },
      },
      sm: {
        typeface: tokens.typography.typeface.x_lg,
        height: tokens.typography.height.sm,
        spacing: tokens.typography.spacing.md,
        size: {
          desktop: tokens.typography.size.x4_lg,
          tablet: tokens.typography.size.x3_lg,
          mobile: tokens.typography.size.x2_lg,
        },
      },
    },
    subtitle: {
      md: {
        typeface: tokens.typography.typeface.lg,
        height: tokens.typography.height.md,
        spacing: tokens.typography.spacing.md,
        size: {
          desktop: tokens.typography.size.x_lg,
          tablet: tokens.typography.size.x_lg,
          mobile: tokens.typography.size.lg,
        },
      },
    },
    sectionTitle: {
      md: {
        typeface: tokens.typography.typeface.lg,
        height: tokens.typography.height.md,
        spacing: tokens.typography.spacing.md,
        size: {
          desktop: tokens.typography.size.x3_lg,
          tablet: tokens.typography.size.x2_lg,
          mobile: tokens.typography.size.x_lg,
        },
      },
    },
    body: {
      lg: {
        typeface: tokens.typography.typeface.lg,
        height: tokens.typography.height.md,
        spacing: tokens.typography.spacing.md,
        size: {
          desktop: tokens.typography.size.md,
          tablet: tokens.typography.size.md,
          mobile: tokens.typography.size.md,
        },
      },
      md: {
        typeface: tokens.typography.typeface.md,
        height: tokens.typography.height.md,
        spacing: tokens.typography.spacing.md,
        size: {
          desktop: tokens.typography.size.md,
          tablet: tokens.typography.size.md,
          mobile: tokens.typography.size.md,
        },
      },
    },
    button: {
      md: {
        typeface: tokens.typography.typeface.lg,
        height: tokens.typography.height.xsm,
        spacing: tokens.typography.spacing.md,
        size: {
          desktop: tokens.typography.size.lg,
          tablet: tokens.typography.size.md,
          mobile: tokens.typography.size.md,
        },
      },
      sm: {
        typeface: tokens.typography.typeface.lg,
        height: tokens.typography.height.xsm,
        spacing: tokens.typography.spacing.md,
        size: {
          desktop: tokens.typography.size.md,
          tablet: tokens.typography.size.sm,
          mobile: tokens.typography.size.sm,
        },
      },
    },
    caption: {
      md: {
        typeface: tokens.typography.typeface.sm,
        height: tokens.typography.height.md,
        spacing: tokens.typography.spacing.md,
        size: {
          desktop: tokens.typography.size.sm,
          tablet: tokens.typography.size.sm,
          mobile: tokens.typography.size.x_sm,
        },
      },
    },
  },
  /**
   *  +=================================================================+
   *  |                   *** Break-Point System ***                    |
   *  +=================================================================+
   */
  breakPoint: {
    desktop: `(min-width: ${tokens.screenSize.min.desktop}px)`,
    tablet: `(max-width: ${tokens.screenSize.max.tablet}px) and (min-width: ${tokens.screenSize.min.tablet}px)`,
    mobile: `(max-width: ${tokens.screenSize.max.mobile}px)`,
  },
}

export default DefaultDesignSystem
