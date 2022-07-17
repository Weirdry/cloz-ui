import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    breakPoint: {
      desktop: string
      tablet: string
      mobile: string
    }
    colourSystem: {
      accent: {
        primary: {
          main: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
          onMain: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
          container: {
            active: string
          }
          onContainer: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
        }
        secondary: {
          main: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
          onMain: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
          container: {
            active: string
          }
          onContainer: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
        }
        tertiary: {
          main: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
          onMain: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
          container: {
            active: string
          }
          onContainer: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
        }
      }
      neutral: {
        primary: {
          surface: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
          onSurface: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
          background: {
            active: string
          }
          onBackground: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
          outline: {
            active: string
          }
        }
        secondary: {
          surface: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
          onSurface: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
          background: {
            active: string
          }
          onBackground: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
          outline: {
            active: string
          }
        }
      }
      system: {
        primary: {
          main: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
          onMain: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
          container: {
            active: string
          }
          onContainer: {
            active: string
            inActive: string
            hover: string
            pressed: string
          }
        }
      }
    }
    typoSystem: {
      title: {
        md: {
          typeface: string
          height: string
          spacing: string
          size: {
            desktop: string
            tablet: string
            mobile: string
          }
        }
        sm: {
          typeface: string
          height: string
          spacing: string
          size: {
            desktop: string
            tablet: string
            mobile: string
          }
        }
      }
      subtitle: {
        md: {
          typeface: string
          height: string
          spacing: string
          size: {
            desktop: string
            tablet: string
            mobile: string
          }
        }
      }
      sectionTitle: {
        md: {
          typeface: string
          height: string
          spacing: string
          size: {
            desktop: string
            tablet: string
            mobile: string
          }
        }
      }
      body: {
        lg: {
          typeface: string
          height: string
          spacing: string
          size: {
            desktop: string
            tablet: string
            mobile: string
          }
        }
        md: {
          typeface: string
          height: string
          spacing: string
          size: {
            desktop: string
            tablet: string
            mobile: string
          }
        }
      }
      button: {
        md: {
          typeface: string
          height: string
          spacing: string
          size: {
            desktop: string
            tablet: string
            mobile: string
          }
        }
        sm: {
          typeface: string
          height: string
          spacing: string
          size: {
            desktop: string
            tablet: string
            mobile: string
          }
        }
      }
      caption: {
        md: {
          typeface: string
          height: string
          spacing: string
          size: {
            desktop: string
            tablet: string
            mobile: string
          }
        }
      }
    }
    layoutSystem: {
      grid: {
        margin: {
          desktop: {
            x_sm: string
            sm: string
            md: string
            lg: string
            x_lg: string
          }
          tablet: {
            x_sm: string
            sm: string
            md: string
            lg: string
            x_lg: string
          }
          mobile: {
            x_sm: string
            sm: string
            md: string
            lg: string
            x_lg: string
          }
        }
        gutter: {
          desktop: string
          tablet: string
          mobile: string
        }
        column: {
          desktop: number
          tablet: number
          mobile: number
        }
      }
      padding: {
        components: {
          sm: {
            x1: string
            x2: string
            x3: string
          }
          md: {
            x1: string
            x2: string
            x3: string
          }
          lg: {
            x1: string
            x2: string
            x3: string
          }
        }
        pages: {
          sm: {
            x1: string
            x2: string
            x3: string
          }
          md: {
            x1: string
            x2: string
            x3: string
          }
          lg: {
            x1: string
            x2: string
            x3: string
          }
        }
      }
      spacing: {
        components: {
          sm: {
            x1: string
            x2: string
            x3: string
          }
          md: {
            x1: string
            x2: string
            x3: string
          }
          lg: {
            x1: string
            x2: string
            x3: string
          }
        }
        pages: {
          sm: {
            x1: string
            x2: string
            x3: string
          }
          md: {
            x1: string
            x2: string
            x3: string
          }
          lg: {
            x1: string
            x2: string
            x3: string
          }
        }
      }
    }
  }

  // export interface Theme {
  //   breakPoint: {
  //     [key: string]: string
  //   }
  //   colourSystem: {
  //     [key: string]: {
  //       [key: string]: {
  //         [key: string]: {
  //           [key: string]: string
  //         }
  //       }
  //     }
  //   }
  //   typoSystem: {
  //     [key: string]: {
  //       [key: string]: {
  //         [key: string]: any
  //       }
  //     }
  //   }
  //   layoutSystem: {}
  // }
}
