import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "./Button"

export default{
    title: "Cloz UI/Button",
    component: Button,
    argTypes: {
        appearance: {
            control: {
                type: 'radio'
            },
            options: ['dark', 'light', 'transparent']
        },
        hierarchy: {
            control: {
                type: 'radio'
            },
            options: ['primary', 'secondary']
        },
        size: {
            control: {
                type: 'radio'
            },
            options: ['auto', '100%']
        }
    },
    parameters: {
        componentSubtitle: 'Default styled button for general purpose',
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>

export const Default = Template.bind({})
Default.args = {
    appearance: "dark",
    hierarchy: "primary",
    text: "버튼 텍스트",
    size: "auto"
}

export const Test = Template.bind({})
Test.args = {
    appearance: "dark",
    hierarchy: "primary",
    text: "Button Text",
    size: "auto"
}