import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as api from '../../app/api';
import { AppDispatch, RootState } from '../../app/store';

export type CartItems = { [id: string]: number };

export interface CartState {
  items: CartItems;
  checkoutState: 'LOADING' | 'READY' | 'SUCCESS' | 'ERROR';
  errorMessage: string;
  successMessage: string;
}

const initialState: CartState = {
  items: {},
  checkoutState: 'READY',
  errorMessage: '',
  successMessage: ''
};

// Dispatch actions over time with thunk
export const checkout = createAsyncThunk<api.CheckoutResponse, undefined, { state: RootState }>('cart/checkout', async (arg, thunkAPI) => {
  const state = thunkAPI.getState();
  const response = await api.checkout(state.cart.items);
  return response;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      if (state.items[action.payload]) {
        state.items[action.payload]++;
      } else {
        state.items[action.payload] = 1;
      }
      state.checkoutState = 'READY';
    },
    removeFromCart(state, action: PayloadAction<string>) {
      delete state.items[action.payload];
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const { id, quantity } = action.payload;
      state.items[id] = quantity;
    }
  },
  extraReducers: builder => {
    builder.addCase(checkout.pending, state => {
      state.checkoutState = 'LOADING';
    });
    builder.addCase(checkout.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.items = {};
        state.checkoutState = 'SUCCESS';
        state.successMessage = action.payload?.message || '';
      } else {
        state.checkoutState = 'ERROR';
      }
    });
    builder.addCase(checkout.rejected, (state, action) => {
      state.checkoutState = 'ERROR';
      console.log(action);
      state.errorMessage = action.error?.message || '';
    });
  }
});

export const getTotal = (state: RootState) => {
  let total = 0;
  for (let id in state.cart.items) {
    total += state.cart.items[id];
  }
  return total;
};

export const getMemoizedTotal = createSelector(
  (state: RootState) => state.cart.items,
  items => Object.values(items).reduce((acc, curr) => acc + curr, 0)
);

// Aggregate price info form two different slices
export const getTotalPrice = createSelector(
  (state: RootState) => state.cart.items,
  (state: RootState) => state.products.products,
  (items, products) => {
    let total = 0;
    for (let id in items) {
      total += products[id].price * items[id];
    }
    return total.toFixed(2);
  }
);

export const checkoutAction = () => checkoutThunk;
export async function checkoutThunk(dispatch: AppDispatch, getState: () => RootState): Promise<void> {
  dispatch({ type: 'cart/checkout/pending' });
  try {
    const state = getState();
    const payload = await api.checkout(state.cart.items);
    dispatch({ type: 'cart/checkout/fulfilled', payload });
  } catch (error) {
    dispatch({ type: 'cart/checkout/rejected', error });
  }
}

export const { updateQuantity, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
