import React from 'react'
import styled from 'styled-components'
import '../../fonts/font.css'
import { breakPoint, colourSystem, typoSystem } from '../../styles/Tokens'

// Set compoonent props type
export interface propsType {
  appearance: string
  text: string
  size?: string
  onClick?: any
}

// Set styled tag props type
export interface stylePropsType {
  readonly screenRes?: any
  appearance: string
  size?: string
  onClick: any
}

// Set component style with styled-components
export const Container = styled.button<stylePropsType>`
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  -moz-appearance: none;
  appearance: none;

  margin: 0;

  display: flex;
  justify-content: center;
  padding: 1rem 1.5rem;
  width: ${(props) => props.size};

  outline: none;
  border: none;

  background-color: ${(props) =>
    props.appearance === 'transparent'
      ? props.appearance
      : props.appearance === 'dark'
      ? colourSystem.neutral.primary.onSurface.active
      : colourSystem.neutral.primary.surface.active};

  ${typoSystem.button.md.typeface};
  line-height: ${typoSystem.button.md.height};
  letter-spacing: ${typoSystem.button.md.spacing};

  @media ${breakPoint.desktop} {
    font-size: ${typoSystem.button.md.size.desktop};
  }
  @media ${breakPoint.tablet} {
    font-size: ${typoSystem.button.md.size.tablet};
  }
  @media ${breakPoint.mobile} {
    font-size: ${typoSystem.button.md.size.mobile};
  }
  color: ${(props) =>
    props.appearance === 'dark'
      ? colourSystem.neutral.primary.surface.active
      : colourSystem.neutral.primary.onSurface.active};
  white-space: nowrap;
  cursor: pointer;
`

// Set component interaction on click event
const handleClick = () => {
  console.log('Button Clicked')
}

// Component
function Button(props: propsType) {
  const { appearance, text, size, onClick } = props

  return (
    <Container
      screenRes={breakPoint}
      appearance={appearance}
      size={size}
      onClick={onClick ? onclick : handleClick}
    >
      {text}
    </Container>
  )
}

Button.defaultProps = {
  appearance: 'dark',
  size: 'auto',
  text: 'Button Text',
}

export default Button
