import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Cloz UI/Button',
  component: Button,
  argTypes: {
    designSystem: {
      table: {
        disable: true,
      },
    },
    appearance: {
      control: false,
    },
    hierarchy: {
      control: false,
    },
    shape: {
      control: {
        type: 'radio',
      },
      options: ['filled', 'outlined'],
    },
    width: {
      control: {
        type: 'radio',
      },
      options: ['auto', '100%'],
    },
    disabled: {
      constol: {
        type: 'boolean',
      },
      options: [true, false],
    },
    onClick: {
      control: false,
    },
  },
  parameters: {
    componentSubtitle: '컨테이너와 텍스트로 이루어진 기본형 버튼 컴포넌트',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const NeutralPrimary = Template.bind({})
NeutralPrimary.args = {
  appearance: 'neutral',
  hierarchy: 'primary',
  shape: 'filled',
  width: 'auto',
}

export const NeutralSecondary = Template.bind({})
NeutralSecondary.args = {
  appearance: 'neutral',
  hierarchy: 'secondary',
  shape: 'filled',
  width: 'auto',
}

export const SystemPrimary = Template.bind({})
SystemPrimary.args = {
  appearance: 'system',
  hierarchy: 'primary',
  shape: 'filled',
  width: 'auto',
}
