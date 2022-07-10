import products from '../../../public/products.json';
import productsReducer, { productsReceived } from './productsSlice';

describe('Products Reducer', () => {
  it('should return the initial state when passed an empty action', () => {
    const initialState = undefined;
    const action = { type: '' };
    const result = productsReducer(initialState, action);

    expect(result).toEqual({ products: {} });
  });

  it('should convert products received to an object', () => {
    const initialState = undefined;
    const action = productsReceived(products);
    const result = productsReducer(initialState, action);
    expect(Object.keys(result.products).length).toEqual(products.length);
    products.forEach(product => {
      expect(result.products[product.id]).toEqual(product);
    });
  });

  it('should not allow the same product to be added more than once', () => {
    const initialState = undefined;
    const action = productsReceived(products);
    let result = productsReducer(initialState, action);
    expect(Object.keys(result.products).length).toEqual(products.length);
    products.forEach(product => {
      expect(result.products[product.id]).toEqual(product);
    });
    // Add the same products again
    result = productsReducer(result, action);
    expect(Object.keys(result.products).length).toEqual(products.length);
  });

  it('should allow multiple products to be received at different times', () => {
    const initialState = undefined;
    const action = productsReceived(products.slice(0, 2));
    let result = productsReducer(initialState, action);
    expect(Object.keys(result.products).length).toEqual(2);
    const secondAction = productsReceived(products.slice(2, 4));
    result = productsReducer(result, secondAction);
    expect(Object.keys(result.products).length).toEqual(4);
  });
});
