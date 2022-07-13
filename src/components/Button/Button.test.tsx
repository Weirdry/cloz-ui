import React from "react"
import { render } from "@testing-library/react"

import Button from "./Button"

describe("Button", ()=>{
    test("renders the Button component", ()=>{
        render(<Button appearance="dark" hierarchy="primary" text="Button Text" size="auto"/>)
    })
})