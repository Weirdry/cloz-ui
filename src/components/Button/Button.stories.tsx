import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "./Button"

export default{
    title: "ClozUIComponentLibrary/Button",
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>

export const Default = Template.bind({})
Default.args = {
    text: "Button Text",
    size: "auto"
}

export const Test = Template.bind({})
Test.args = {
    text: "Button Text",
    size: "auto"
}