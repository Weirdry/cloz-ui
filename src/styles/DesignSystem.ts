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

/**
 * +===================== *** Design Tokens *** ========================+
 */
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
    pointYellow: {
      50: '',
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
    },
    pointGreen: {
      50: '',
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
    },
    sparePurple: {
      50: '',
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
    },
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
    sm: {
      x1: `${0.25 * 1}rem`,
      x2: `${0.25 * 2}rem`,
      x3: `${0.25 * 3}rem`,
      x4: `${0.25 * 4}rem`,
      x5: `${0.25 * 5}rem`,
      x6: `${0.25 * 6}rem`,
      x7: `${0.25 * 7}rem`,
      x8: `${0.25 * 8}rem`,
      x9: `${0.25 * 9}rem`,
      x10: `${0.25 * 10}rem`,
      x11: `${0.25 * 11}rem`,
      x12: `${0.25 * 12}rem`,
      x13: `${0.25 * 13}rem`,
      x14: `${0.25 * 14}rem`,
    },
    md: {
      x1: `${0.625 * 1}rem`,
      x2: `${0.625 * 2}rem`,
      x3: `${0.625 * 3}rem`,
      x4: `${0.625 * 4}rem`,
      x5: `${0.625 * 5}rem`,
      x6: `${0.625 * 6}rem`,
      x7: `${0.625 * 7}rem`,
      x8: `${0.625 * 8}rem`,
      x9: `${0.625 * 9}rem`,
      x10: `${0.625 * 10}rem`,
      x11: `${0.625 * 11}rem`,
      x12: `${0.625 * 12}rem`,
      x13: `${0.625 * 13}rem`,
      x14: `${0.625 * 14}rem`,
    },
    lg: {
      x1: `${1 * 1}rem`,
      x2: `${1 * 2}rem`,
      x3: `${1 * 3}rem`,
      x4: `${1 * 4}rem`,
      x5: `${1 * 5}rem`,
      x6: `${1 * 6}rem`,
      x7: `${1 * 7}rem`,
      x8: `${1 * 8}rem`,
      x9: `${1 * 9}rem`,
      x10: `${1 * 10}rem`,
      x11: `${1 * 11}rem`,
      x12: `${1 * 12}rem`,
      x13: `${1 * 13}rem`,
      x14: `${1 * 14}rem`,
    },
  },
}

/**
 * +===================== *** Design System *** ========================+
 */
const DefaultDesignSystem: Theme = {
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
   *  |                      *** Layout System ***                      |
   *  +=================================================================+
   */
  layoutSystem: {
    grid: {
      margin: {
        desktop: {
          x_sm: `${5 * 0.25}rem`,
          sm: `${5 * 0.5}rem`,
          md: `${5 * 1}rem`,
          lg: `${5 * 1.5}rem`,
          x_lg: `${5 * 2}rem`,
        },
        tablet: {
          x_sm: `${2.5 * 0.25}rem`,
          sm: `${2.5 * 0.5}rem`,
          md: `${2.5 * 1}rem`,
          lg: `${2.5 * 1.5}rem`,
          x_lg: `${2.5 * 2}rem`,
        },
        mobile: {
          x_sm: `${1.25 * 0.25}rem`,
          sm: `${1.25 * 0.5}rem`,
          md: `${1.25 * 1}rem`,
          lg: `${1.25 * 2}rem`,
          x_lg: `${1.25 * 3}rem`,
        },
      },
      gutter: {
        desktop: '1.25rem',
        tablet: '1.25rem',
        mobile: '1.25rem',
      },
      column: {
        desktop: 12,
        tablet: 8,
        mobile: 4,
      },
    },
    padding: {
      components: {
        sm: {
          x1: tokens.layout.sm.x1,
          x2: tokens.layout.sm.x2,
          x3: tokens.layout.sm.x3,
        },
        md: {
          x1: tokens.layout.sm.x3,
          x2: tokens.layout.sm.x4,
          x3: tokens.layout.sm.x5,
        },
        lg: {
          x1: tokens.layout.sm.x5,
          x2: tokens.layout.sm.x6,
          x3: tokens.layout.sm.x8,
        },
      },
      pages: {
        sm: {
          x1: tokens.layout.md.x1,
          x2: tokens.layout.md.x2,
          x3: tokens.layout.md.x3,
        },
        md: {
          x1: tokens.layout.md.x3,
          x2: tokens.layout.md.x4,
          x3: tokens.layout.md.x5,
        },
        lg: {
          x1: tokens.layout.md.x6,
          x2: tokens.layout.md.x8,
          x3: tokens.layout.md.x10,
        },
      },
    },
    spacing: {
      components: {
        sm: {
          x1: tokens.layout.sm.x1,
          x2: tokens.layout.sm.x2,
          x3: tokens.layout.sm.x3,
        },
        md: {
          x1: tokens.layout.sm.x4,
          x2: tokens.layout.sm.x5,
          x3: tokens.layout.sm.x6,
        },
        lg: {
          x1: tokens.layout.sm.x8,
          x2: tokens.layout.sm.x10,
          x3: tokens.layout.sm.x14,
        },
      },
      pages: {
        sm: {
          x1: tokens.layout.md.x1,
          x2: tokens.layout.md.x2,
          x3: tokens.layout.md.x3,
        },
        md: {
          x1: tokens.layout.md.x4,
          x2: tokens.layout.md.x6,
          x3: tokens.layout.md.x8,
        },
        lg: {
          x1: tokens.layout.md.x8,
          x2: tokens.layout.md.x10,
          x3: tokens.layout.md.x12,
        },
      },
    },
    radius: {
      x_sm: {
        x1: tokens.layout.sm.x1,
        x2: tokens.layout.sm.x2,
        x3: tokens.layout.sm.x3,
      },
      sm: {
        x1: tokens.layout.sm.x4,
        x2: tokens.layout.sm.x5,
        x3: tokens.layout.sm.x6,
      },
      md: {
        x1: tokens.layout.sm.x7,
        x2: tokens.layout.sm.x8,
        x3: tokens.layout.sm.x9,
      },
      lg: {
        x1: tokens.layout.sm.x10,
        x2: tokens.layout.sm.x12,
        x3: tokens.layout.sm.x14,
      },
      x_lg: {
        x1: tokens.layout.md.x6,
        x2: tokens.layout.md.x8,
        x3: tokens.layout.md.x10,
      },
    },
  },
  /**
   *  +=================================================================+
   *  |                     *** Styling System ***                      |
   *  +=================================================================+
   */
  stylingSystem: {
    outline: {
      x_sm: '0 0 0 black, 0 0 0 0.0625rem inset',
      sm: '0 0 0 black, 0 0 0 0.125rem inset',
      md: '0 0 0 black, 0 0 0 0.25rem inset',
      lg: '0 0 0 black, 0 0 0 0.5rem inset',
    },
    shadow: {
      x_sm: '0 0 0.25rem',
      sm: '0 0.125rem 0.75rem',
      md: '0 0.25rem 1.5rem',
      lg: '0 0.5rem 2rem',
    },
    glow: {
      x_sm: '0 0 0.25rem',
      sm: '0 0 0.5rem',
      md: '0 0 0.75rem',
      lg: '0 0 1.25rem',
    },
  },
}

export default DefaultDesignSystem
