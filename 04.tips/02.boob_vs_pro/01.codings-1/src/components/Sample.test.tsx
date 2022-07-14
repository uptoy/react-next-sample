import React from 'react'
import { render, screen } from '@testing-library/react'
import Sample from './Sample'

test('renders learn react link', () => {
  render(<Sample />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
