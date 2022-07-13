import { render, screen } from '@testing-library/react'

import App from './App'
import { store } from '../app/store'
import { Provider } from 'react-redux'

describe('<App />', () => {
  it('should render the App', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(
      screen.getByRole('heading', {
        name: /welcome to/i,
        level: 2
      })
    ).toBeInTheDocument()

    expect(
      screen.getByText(/reactjs-vite-tailwindcss-boilerplate/i)
    ).toBeInTheDocument()

    expect(screen.getByText(/start building for free./i)).toBeInTheDocument()

    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(container.firstChild).toBeInTheDocument()
  })
})
