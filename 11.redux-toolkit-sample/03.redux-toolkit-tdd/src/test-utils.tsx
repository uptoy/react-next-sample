import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Product } from './app/api';
import { getStoreWithState, RootState } from './app/store';

export function renderWithContext(element: React.ReactElement, state?: RootState) {
  const store = getStoreWithState(state);
  const utils = render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  );
  return { store, ...utils };
}

export function getStateWithItems(items: Record<string, number>, products: Record<string, Product> = {}): RootState {
  const state: RootState = {
    products: { products },
    cart: { errorMessage: '', successMessage: '', checkoutState: 'READY', items }
  };
  return state;
}
