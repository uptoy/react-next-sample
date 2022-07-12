import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should render the App', () => {
    const { container } = render(<App />)
    //! hタグ
    expect(
      screen.getByRole('heading', {
        name: /welcome to/i,
        level: 2
      })
    ).toBeInTheDocument()

    //! pタグ
    expect(
      screen.getByText(/reactjs-vite-tailwindcss-boilerplate/i)
    ).toBeInTheDocument()

    //! pタグ
    expect(screen.getByText(/start building for free./i)).toBeInTheDocument()

    //! imgタグ
    expect(screen.getByRole('img')).toBeInTheDocument()

    //! 子Componentタグ
    expect(container.firstChild).toBeInTheDocument()
  })
})
