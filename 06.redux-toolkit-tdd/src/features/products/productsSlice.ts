import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../app/api';

export interface ProductsState {
  products: { [id: string]: Product };
}

const initialState: ProductsState = {
  products: {}
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsReceived(state, action: PayloadAction<Product[]>) {
      action.payload.forEach(product => {
        state.products[product.id] = product;
      });
    }
  }
});

export const { productsReceived } = productsSlice.actions;
export default productsSlice.reducer;
