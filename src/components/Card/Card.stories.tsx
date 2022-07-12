import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Card from "./Card"

export default{
    title: "ClozUIComponentLibrary/Card",
    component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}/>

export const HelloWorld = Template.bind({})
HelloWorld.args = {
    title: "Hello world!"
}

export const Test = Template.bind({})
Test.args = {
    title: "Card Test"
}