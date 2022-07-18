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
  emotion ThemeProvider를 통해 DesignSystem.ts의 설정값들 전달
  */
  designSystem?: Theme
  /**
  버튼의 기능, 사용처에 따른 외형 지정
  */
  appearance: 'neutral' | 'system'
  /**
  버튼의 중요도에 따른 위계 지정 (Primary -> Secondary -> Tertiary)
  */
  hierarchy: 'primary' | 'secondary'
  /**
  같은 위계 내에서의 세부 위계 지정 (Filled -> Outlined)
  */
  shape: 'filled' | 'outlined'
  /**
  버튼 텍스트 지정
  */
  text: string
  /**
  버튼의 가로 폭 넓이 지정
  */
  width?: 'auto' | '100%'
  /**
  버튼 활성화/비활성화 여부 지정
  */
  disabled?: boolean
  /**
  버튼 클릭(또는 탭) 시 발생하는 이벤트 지정
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
  border-radius: ${(props) => props.theme.layoutSystem.radius.x_sm.x3};

  ${(props) =>
    (props.appearance === 'neutral' &&
      css`
        ${props.shape === 'filled'
          ? `background-color: ${
              props.theme.colourSystem.neutral[props.hierarchy].onSurface.active
            };
            color: ${
              props.theme.colourSystem.neutral[props.hierarchy].surface.active
            };
            box-shadow: none;`
          : `background-color: ${
              props.theme.colourSystem.neutral[props.hierarchy].surface.active
            };
            color: ${
              props.theme.colourSystem.neutral[props.hierarchy].onSurface.active
            };
            box-shadow: ${props.theme.stylingSystem.outline.sm} ${
              props.theme.colourSystem.neutral[props.hierarchy].onSurface.active
            };`}
      `) ||
    (props.appearance === 'system' &&
      css`
        ${props.shape === 'filled'
          ? `background-color: ${props.theme.colourSystem.system.primary.main.active};
            color: ${props.theme.colourSystem.system.primary.onMain.active};
            box-shadow: none;`
          : `background-color: ${props.theme.colourSystem.system.primary.onMain.active};
            color: ${props.theme.colourSystem.system.primary.main.active};
            box-shadow: ${props.theme.stylingSystem.outline.sm} ${props.theme.colourSystem.system.primary.main.active};`}
      `)}

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
  white-space: nowrap;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`

//
//================================================================..
// Component
//================================================================..
/**
- CTA, 또는 페이지/컴포넌트 간 내비게이션, 각종 화면 내 인터랙션을 작동시키기 위한 컴포넌트
- 컴포넌트에 제공하는 Props를 통해 디자인 시스템 상의 위계 구조 설정
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
    appearance: 'neutral' | 'system',
    shape: 'filled' | 'outlined',
    state: 'active' | 'hover' | 'pressed' | 'inActive',
  ): object => {
    if (appearance === 'neutral') {
      return {
        ...(shape === 'filled'
          ? {
              backgroundColor:
                designSystem?.colourSystem.neutral[hierarchy].onSurface[state],
              color:
                designSystem?.colourSystem.neutral[hierarchy].surface[state],
              boxShadow: 'none',
            }
          : {
              backgroundColor:
                designSystem?.colourSystem.neutral[hierarchy].surface[state],
              color:
                designSystem?.colourSystem.neutral[hierarchy].onSurface[state],
              boxShadow: `${designSystem?.stylingSystem.outline.sm} ${designSystem?.colourSystem.neutral[hierarchy].onSurface[state]}`,
            }),
      }
    } else if (appearance === 'system') {
      return {
        ...(shape === 'filled'
          ? {
              backgroundColor:
                designSystem?.colourSystem.system.primary.main[state],
              color: designSystem?.colourSystem.system.primary.onMain[state],
              boxShadow: 'none',
            }
          : {
              backgroundColor:
                designSystem?.colourSystem.system.primary.onMain[state],
              color: designSystem?.colourSystem.system.primary.main[state],
              boxShadow: `${designSystem?.stylingSystem.outline.sm} ${designSystem?.colourSystem.system.primary.main[state]}`,
            }),
      }
    }
    return {}
  }
  const animationState = {
    active: animationValue(appearance, shape, 'active'),
    hover: animationValue(appearance, shape, 'hover'),
    pressed: animationValue(appearance, shape, 'pressed'),
    inActive: animationValue(appearance, shape, 'inActive'),
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
        animate={disabled ? 'inActive' : 'active'}
        whileHover={disabled ? 'inActive' : 'hover'}
        whileTap={disabled ? 'inActive' : 'pressed'}
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
  hierarchy: 'primary',
  shape: 'filled',
  width: 'auto',
  text: '버튼 텍스트',
  disabled: false,
}

export default Button
