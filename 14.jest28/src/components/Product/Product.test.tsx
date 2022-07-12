import { render, screen } from '@testing-library/react'

import { Product } from './Product'

describe('<Product />', () => {
  it('must display a title', () => {
    render(<Product />)
    //! hタグ
    expect(screen.queryByText(/product page/i)).toBeInTheDocument()
    const actual = 1
    const expected = 1
    expect(actual).toEqual(expected)
  })
})
