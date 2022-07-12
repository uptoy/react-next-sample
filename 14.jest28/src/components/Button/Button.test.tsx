import { fireEvent, render, screen } from '@testing-library/react'

import { Button } from './Button'

test('handles onClick', () => {
  const onClick = jest.fn()
  render(<Button onClick={onClick} title="Add Item" />)
  const buttonElement = screen.getByText('Add Item')
  fireEvent.click(buttonElement)
  expect(onClick).toHaveBeenCalledTimes(1)
})
