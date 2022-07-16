import React from 'react'
import { render } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  test('renders the Button component', () => {
    render(
      <Button
        appearance="neutral"
        shape="filled"
        hierarchy="primary"
        text="Button Text"
        width="auto"
      />,
    )
  })
})
