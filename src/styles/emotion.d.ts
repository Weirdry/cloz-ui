import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
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
        tertiary?: {
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
    typoSystem: {
      title: {
        md: {
          typeface: string
          height?: string
          spacing?: string
          size?: {
            desktop?: string
            tablet?: string
            mobile?: string
          }
        }
        sm?: {
          typeface: string
          height?: string
          spacing?: string
          size?: {
            desktop?: string
            tablet?: string
            mobile?: string
          }
        }
      }
      subtitle: {
        md: {
          typeface: string
          height?: string
          spacing?: string
          size?: {
            desktop?: string
            tablet?: string
            mobile?: string
          }
        }
      }
      sectionTitle: {
        md: {
          typeface: string
          height?: string
          spacing?: string
          size?: {
            desktop?: string
            tablet?: string
            mobile?: string
          }
        }
      }
      body: {
        lg?: {
          typeface: string
          height?: string
          spacing?: string
          size?: {
            desktop?: string
            tablet?: string
            mobile?: string
          }
        }
        md: {
          typeface: string
          height?: string
          spacing?: string
          size?: {
            desktop?: string
            tablet?: string
            mobile?: string
          }
        }
      }
      button: {
        md: {
          typeface: string
          height?: string
          spacing?: string
          size?: {
            desktop?: string
            tablet?: string
            mobile?: string
          }
        }
        sm?: {
          typeface: string
          height?: string
          spacing?: string
          size?: {
            desktop?: string
            tablet?: string
            mobile?: string
          }
        }
      }
      caption: {
        md: {
          typeface: string
          height?: string
          spacing?: string
          size?: {
            desktop?: string
            tablet?: string
            mobile?: string
          }
        }
      }
    }
    breakPoint?: {
      desktop?: string
      tablet?: string
      mobile?: string
    }
  }
}
