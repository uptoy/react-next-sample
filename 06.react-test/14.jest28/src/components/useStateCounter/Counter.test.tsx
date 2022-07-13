import { render, screen, fireEvent } from '@testing-library/react'

import { Counter } from './Counter'

test('handle onClick', () => {
  render(<Counter />)
  const divElement = screen.getByRole('contentinfo')
  const buttonElement = screen.getByText('Add One')
  fireEvent.click(buttonElement)
  expect(divElement).toHaveTextContent('Counter is 1')
})
