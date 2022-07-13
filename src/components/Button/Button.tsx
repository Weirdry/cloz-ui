import React from 'react'
import styled from 'styled-components'
import '../../fonts/font.css'
import { breakPoint, colourSystem, typoSystem } from '../../styles/Tokens'

//
//================================================================//
// Set compoonent props type
//================================================================//
//
export interface propsType {
  /**
  Use the loading state to indicate that the data Avatar needs is still loading.
  */
  appearance: string
  /**
  Use the loading state to indicate that the data Avatar needs is still loading.
  */
  hierarchy: string
  /**
  Use the loading state to indicate that the data Avatar needs is still loading.
  */
  text: string
  /**
  Use the loading state to indicate that the data Avatar needs is still loading.
  */
  size?: string
  /**
  Use the loading state to indicate that the data Avatar needs is still loading.
  */
  onClick?: void
}

//
//================================================================...
// Set styled tag props type
//================================================================...
//
export interface stylePropsType {
  readonly screenRes?: any
  appearance: string
  hierarchy: string
  size?: string
  onClick: any
}

//
//================================================================...
// Set component style with styled-components
//================================================================...
//
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
      ? colourSystem.neutral[props.hierarchy].onSurface.active
      : colourSystem.neutral[props.hierarchy].surface.active};

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
      ? colourSystem.neutral[props.hierarchy].surface.active
      : colourSystem.neutral[props.hierarchy].onSurface.active};
  white-space: nowrap;
  cursor: pointer;
`

//
//================================================================..
// Set component interaction on click event
//================================================================..
//
const handleClick = () => {
  console.log('Button Clicked')
}

//
//================================================================..
// Component
/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
//================================================================..
//
function Button(props: propsType) {
  const { appearance, hierarchy, text, size, onClick } = props

  return (
    <Container
      screenRes={breakPoint}
      appearance={appearance}
      hierarchy={hierarchy}
      size={size}
      onClick={onClick ? onclick : handleClick}
    >
      {text}
    </Container>
  )
}

Button.defaultProps = {
  appearance: 'dark',
  hierarchy: 'primary',
  size: 'auto',
  text: '버튼 텍스트',
  onClick: handleClick
}

export default Button
