import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { checkout, getTotalPrice, removeFromCart, updateQuantity } from './cartSlice';

const Cart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.cart.items);
  const products = useAppSelector(state => state.products.products);
  const totalPrice = useAppSelector(getTotalPrice);
  const checkoutState = useAppSelector(state => state.cart.checkoutState);
  const errorMessage = useAppSelector(state => state.cart.errorMessage);
  const successMessage = useAppSelector(state => state.cart.successMessage);

  const onQuantityChanged = (e: React.FocusEvent<HTMLInputElement>, id: string) => {
    const quantity = Number(e.target.value) || 0;
    dispatch(updateQuantity({ id, quantity }));
  };

  const onCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent the form from submitting
    dispatch(checkout());
  };

  const checkoutStateClass = (state: string) =>
    ({
      READY: 'border border-slate-600',
      ERROR: 'border-2 border-solid border-red-600 border-w',
      LOADING: 'opacity-20',
      SUCCESS: 'border-2 border-solid border-green-600 border-w'
    }[state || '']);

  return (
    <main className='w-100'>
      <h1 className='mx-auto my-6 text-lg font-bold text-center'>Shopping Cart</h1>
      <table
        className={`w-60% mx-auto my-0 p-20 bg-slate-50 rounded-sm border-spacing-01  ${
          checkoutState ? checkoutStateClass(checkoutState) : null
        } `}
      >
        <thead>
          <tr>
            <th className='p-4 border border-slate-600'>Product</th>
            <th className='p-4 border border-slate-600'>Quantity</th>
            <th className='p-4 border border-slate-600'>Total</th>
            <th className='p-4 border border-slate-600'>Remove</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(items).map(([id, quantity]) => (
            <tr className='p-2' key={id}>
              <td className='p-4 border border-slate-600'>{products[id].name}</td>
              <td className='p-4 border border-slate-600'>
                <input
                  type='text'
                  className='text-md w-100'
                  defaultValue={quantity}
                  aria-label={`Update ${products[id].name} quantity`}
                  onBlur={e => onQuantityChanged(e, id)}
                />
              </td>
              <td className='p-4 border border-slate-600'>${products[id].price}</td>
              <td className='flex p-4 border border-slate-600'>
                <button
                  className='p-1 mx-auto text-white border rounded-sm cursor-pointer bg-slate-400'
                  title={`Remove ${products[id].name} from Shopping Cart`}
                  onClick={() => dispatch(removeFromCart(id))}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className='p-4 font-bold border border-slate-600'>Total</td>
            <td className='p-4 border border-slate-600'></td>
            <td className='p-4 font-bold text-teal-600 border border-slate-600 total'>${totalPrice}</td>
            <td className='p-4 border border-slate-600'></td>
          </tr>
        </tfoot>
      </table>
      <form className='flex flex-col w-100' onSubmit={onCheckout}>
        {checkoutState === 'ERROR' ? <p className='py-4 text-lg font-bold text-center text-red-600 errorBox'>{errorMessage}</p> : null}
        {checkoutState === 'SUCCESS' ? <p className='py-4 text-lg font-bold text-center text-green-600'>{successMessage}</p> : null}
        <button className='p-4 mx-auto my-10 text-lg rounded-sm shadow-md cursor-pointer bg-slate-200' type='submit'>
          Checkout
        </button>
      </form>
    </main>
  );
};

export default Cart;
