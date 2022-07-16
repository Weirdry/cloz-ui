import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Theme, ThemeProvider } from '@emotion/react'
import { motion } from 'framer-motion'
import '../../fonts/font.css'
import DefaultDesignSystem from '../../styles/DesignSystem'

//
//================================================================//
// Set compoonent props type
//================================================================//
//
export interface propsType {
  /**
  Use the loading state to indicate that the data Avatar needs is still loading.
  */
  designSystem?: Theme
  /**
  Use the loading state to indicate that the data Avatar needs is still loading.
  */
  appearance: 'neutral' | 'system'
  /**
  Use the loading state to indicate that the data Avatar needs is still loading.
  */
  shape: 'filled' | 'outlined'
  /**
  Use the loading state to indicate that the data Avatar needs is still loading.
  */
  hierarchy: 'primary' | 'secondary'
  /**
  Use the loading state to indicate that the data Avatar needs is still loading.
  */
  text: string
  /**
  Use the loading state to indicate that the data Avatar needs is still loading.
  */
  width?: 'auto' | '100%'
  /**
  Use the loading state to indicate that the data Avatar needs is still loading.
  */
  disabled?: boolean
  /**
  Use the loading state to indicate that the data Avatar needs is still loading.
  */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

//
//================================================================...
// Set styled tag props type
//================================================================...
//
export interface stylePropsType {
  appearance: 'neutral' | 'system'
  shape: 'filled' | 'outlined'
  hierarchy: 'primary' | 'secondary'
  width?: 'auto' | '100%'
}

//
//================================================================...
// Set component style with styled-components
//================================================================...
//
export const Container = styled(motion.button)<stylePropsType>`
  -webkit-appearance: none;
  -webkit-tap-highoutlined-color: transparent;
  -moz-appearance: none;
  appearance: none;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  margin: 0;

  display: flex;
  justify-content: center;
  padding: 1rem 1.5rem;
  width: ${(props) => props.width};

  outline: none;
  border: none;

  ${(props) =>
    props.appearance === 'neutral'
      ? css`
          background-color: ${props.shape === 'filled'
            ? props.theme.colourSystem.neutral[props.hierarchy].onSurface.active
            : props.theme.colourSystem.neutral[props.hierarchy].surface.active};
        `
      : css`
          background-color: ${props.shape === 'filled'
            ? props.theme.colourSystem.system.primary.main.active
            : props.theme.colourSystem.system.primary.onMain.active};
        `}

  ${(props) => css`
    ${props.theme.typoSystem.button.md.typeface}
    line-height: ${props.theme.typoSystem.button.md.height};
    letter-spacing: ${props.theme.typoSystem.button.md.spacing};

    /* Set Media Query for Responsive Web */
    @media ${props.theme.breakPoint.desktop} {
      font-size: ${props.theme.typoSystem.button.md.size.desktop};
    }
    @media ${props.theme.breakPoint.tablet} {
      font-size: ${props.theme.typoSystem.button.md.size.tablet};
    }
    @media ${props.theme.breakPoint.mobile} {
      font-size: ${props.theme.typoSystem.button.md.size.mobile};
    }
  `}

  color: ${(props) =>
    props.shape === 'filled'
      ? props.theme.colourSystem.neutral[props.hierarchy].surface.active
      : props.theme.colourSystem.neutral[props.hierarchy].onSurface.active};
  white-space: nowrap;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`

//
//================================================================..
// Component
//================================================================..
/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
//================================================================..
//
function Button(props: propsType) {
  const {
    designSystem,
    appearance,
    shape,
    hierarchy,
    text,
    width,
    disabled,
    onClick,
  } = props

  //================================================================...
  // Set component animation with framer-motion
  //================================================================...
  const animationValue = (
    shape: 'filled' | 'outlined',
    state: 'active' | 'hover' | 'pressed',
  ): object => {
    return {
      ...(shape === 'filled'
        ? {
            backgroundColor:
              designSystem?.colourSystem.neutral[hierarchy].onSurface[state],
            color: designSystem?.colourSystem.neutral[hierarchy].surface[state],
          }
        : {
            backgroundColor:
              designSystem?.colourSystem.neutral[hierarchy].surface[state],
            color:
              designSystem?.colourSystem.neutral[hierarchy].onSurface[state],
          }),
    }
  }
  const animationState = {
    active: animationValue(shape, 'active'),
    hover: animationValue(shape, 'hover'),
    pressed: animationValue(shape, 'pressed'),
  }

  //================================================================..
  // Set component interaction on click event
  //================================================================..
  const handleClick = () => {
    console.log('Button Clicked')
  }

  //================================================================..
  // Return React component
  //================================================================..
  return (
    <ThemeProvider
      theme={
        typeof designSystem !== 'undefined' ? designSystem : DefaultDesignSystem
      }
    >
      <Container
        appearance={appearance}
        shape={shape}
        hierarchy={hierarchy}
        width={width}
        variants={animationState}
        transition={{ duration: 0.1 }}
        animate="active"
        whileHover="hover"
        whileTap="pressed"
        onClick={typeof onClick !== 'undefined' ? onClick : handleClick}
        disabled={disabled}
      >
        {text}
      </Container>
    </ThemeProvider>
  )
}

Button.defaultProps = {
  designSystem: DefaultDesignSystem,
  appearance: 'neutral',
  shape: 'filled',
  hierarchy: 'primary',
  width: 'auto',
  text: '버튼 텍스트',
  disabled: false,
}

export default Button
