import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Theme, ThemeProvider } from '@emotion/react'
import { motion } from 'framer-motion'

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
	appearance: 'accent' | 'neutral' | 'system'
	/**
  버튼의 중요도에 따른 위계 지정 (Primary -> Secondary -> Tertiary)
  */
	hierarchy: 'primary' | 'secondary'
	/**
  같은 위계 내에서의 세부 위계 지정 (Filled -> Outlined)
  */
	shape: 'filled' | 'outlined'
	/**
  버튼 크기 지정
  */
	size: 'md' | 'sm'
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
	appearance: 'accent' | 'neutral' | 'system'
	hierarchy: 'primary' | 'secondary'
	shape: 'filled' | 'outlined'
	size: 'md' | 'sm'
	width?: 'auto' | '100%'
}

//
//================================================================...
// Set component style with styled-components
//================================================================...
//
export const Container = styled(motion.button)<stylePropsType>`
	-webkit-appearance: none;
	-webkit-tap-highlight-color: transparent;
	-moz-appearance: none;
	appearance: none;

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	margin: 0;

	display: flex;
	justify-content: center;
	padding: ${(props) =>
		(props.size === 'md' &&
			css`
				${props.theme.layoutSystem.padding.components.md.x2}
				${props.theme.layoutSystem.padding.components.md.x3}
			`) ||
		(props.size === 'sm' &&
			css`
				${props.theme.layoutSystem.padding.components.sm.x2}
				${props.theme.layoutSystem.padding.components.sm.x3}
			`)};
	width: ${(props) => props.width};

	outline: none;
	border: none;
	border-radius: ${(props) =>
		(props.size === 'md' && props.theme.layoutSystem.radius.x_sm.x3) ||
		(props.size === 'sm' && props.theme.layoutSystem.radius.x_sm.x2)};

	${(props) =>
		(props.appearance === 'accent' &&
			css`
				${props.shape === 'filled'
					? `background-color: ${
							props.theme.colourSystem.accent[props.hierarchy].main.active
					  };
            color: ${
							props.theme.colourSystem.accent[props.hierarchy].onMain.active
						};
            box-shadow: none;`
					: `background-color: ${
							props.theme.colourSystem.accent[props.hierarchy].onMain.active
					  };
            color: ${
							props.theme.colourSystem.accent[props.hierarchy].main.active
						};
            box-shadow: ${props.theme.stylingSystem.outline.sm} ${
							props.theme.colourSystem.accent[props.hierarchy].main.active
					  }`}
			`) ||
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
			font-size: ${(props.size === 'md' &&
				props.theme.typoSystem.button.md.size.desktop) ||
			(props.size === 'sm' && props.theme.typoSystem.button.sm.size.desktop)};
		}
		@media ${props.theme.breakPoint.tablet} {
			font-size: ${(props.size === 'md' &&
				props.theme.typoSystem.button.md.size.tablet) ||
			(props.size === 'sm' && props.theme.typoSystem.button.sm.size.tablet)};
		}
		@media ${props.theme.breakPoint.mobile} {
			font-size: ${(props.size === 'md' &&
				props.theme.typoSystem.button.md.size.mobile) ||
			(props.size === 'sm' && props.theme.typoSystem.button.sm.size.mobile)};
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
- CTA, 페이지/컴포넌트 간 내비게이션, 각종 화면 내 인터랙션 작동 및 이벤트 실행
- Props를 통해 디자인 시스템 위계 구조 전달 및 지정
**/
//================================================================..
//
function Button(props: propsType) {
	const {
		designSystem,
		appearance,
		hierarchy,
		shape,
		size,
		text,
		width,
		disabled,
		onClick,
	} = props

	//================================================================...
	// Set component animation with framer-motion
	//================================================================...
	const animationValue = (
		appearance: 'accent' | 'neutral' | 'system',
		shape: 'filled' | 'outlined',
		state: 'active' | 'hover' | 'pressed' | 'inActive',
	): object => {
		if (appearance === 'accent') {
			return {
				...(shape === 'filled'
					? {
							backgroundColor:
								designSystem?.colourSystem.accent[hierarchy].main[state],
							color: designSystem?.colourSystem.accent[hierarchy].onMain[state],
							boxShadow: 'none',
					  }
					: {
							backgroundColor:
								designSystem?.colourSystem.accent[hierarchy].onMain[state],
							color: designSystem?.colourSystem.accent[hierarchy].main[state],
							boxShadow: `${designSystem?.stylingSystem.outline.sm} ${designSystem?.colourSystem.accent[hierarchy].main[state]}`,
					  }),
			}
		} else if (appearance === 'neutral') {
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
			{/* <Global styles={GlobalFont} /> */}
			<Container
				appearance={appearance}
				hierarchy={hierarchy}
				shape={shape}
				size={size}
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
	size: 'md',
	width: 'auto',
	text: '버튼 텍스트',
	disabled: false,
}

export default Button
