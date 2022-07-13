import { screen, waitFor } from '@testing-library/react';
import { getStateWithItems, renderWithContext } from '../../test-utils';
import CartLink from './CartLink';
import { addToCart, removeFromCart, updateQuantity } from './cartSlice';

test('should contain a link', () => {
  renderWithContext(<CartLink />);
  expect(screen.getByRole('link')).toBeInTheDocument();
});

test('should show text when there are no items', () => {
  renderWithContext(<CartLink />);
  const link = screen.getByRole('link');
  expect(link).toHaveTextContent('Cart');
  expect(link).not.toHaveTextContent('0');
  expect(link).not.toHaveTextContent('1');
});

test('should show the correct number of items', async () => {
  const state = getStateWithItems({ testItem: 1 });
  const { store } = renderWithContext(<CartLink />, state);
  const link = screen.getByRole('link');
  expect(link).toHaveTextContent('1');

  store.dispatch(updateQuantity({ id: 'testItem', quantity: 5 }));
  await waitFor(() => {
    expect(link).toHaveTextContent('5');
  });

  store.dispatch(addToCart('anotherItem'));
  await waitFor(() => {
    expect(link).toHaveTextContent('6');
  });
  store.dispatch(removeFromCart('testItem'));
  store.dispatch(removeFromCart('anotherItem'));

  await waitFor(() => {
    expect(link).toHaveTextContent('Cart');
  });
});
