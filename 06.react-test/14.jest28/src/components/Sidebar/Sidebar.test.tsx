import { render, screen } from '@testing-library/react'

import { Sidebar } from './Sidebar'

test('renders a name', () => {
  const items = [{ name: 'test', href: 'test' }]
  render(<Sidebar items={items} />)
  const anchorElements = screen.getAllByRole('navigation')
  expect(anchorElements[0]).toHaveTextContent(items[0].name)
  expect(anchorElements[0]).toHaveAttribute('href', items[0].href)
})
