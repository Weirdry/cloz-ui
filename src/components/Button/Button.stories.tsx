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
    componentSubtitle: 'Default styled button for general purpose',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  appearance: 'neutral',
  hierarchy: 'primary',
  shape: 'filled',
  width: 'auto',
}

export const Secondary = Template.bind({})
Secondary.args = {
  appearance: 'neutral',
  hierarchy: 'secondary',
  shape: 'filled',
  width: 'auto',
}
