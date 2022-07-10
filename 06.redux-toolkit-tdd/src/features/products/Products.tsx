import { useEffect } from 'react';
import { getProducts } from '../../app/api';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToCart } from '../cart/cartSlice';
import { productsReceived } from './productsSlice';

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products.products);
  useEffect(() => {
    getProducts().then(products => dispatch(productsReceived(products)));
  }, [dispatch]);

  return (
    <main className='page'>
      <ul className='grid grid-cols-2 gap-4 p-0 m-2 list-none'>
        {Object.values(products).map(product => (
          <li key={product.id} className='p-2 text-left border-2 border-orange-100 rounded-md'>
            <article className='flex flex-row gap-4 overflow-hidden'>
              <figure className='m-1'>
                <img src={product.imageURL} alt={product.imageAlt} className='w-100' />
                <figcaption className='text-xs'>{product.imageCredit}</figcaption>
              </figure>
              <div className='flex flex-col items-start justify-evenly h-60'>
                <h1 className='font-bold text-md'>{product.name}</h1>
                <p className='h-60'>{product.description}</p>
                <p className='font-bold text-md'>${product.price}</p>
                <button
                  className='p-2 my-4 rounded-md bg-slate-300 border-slate-400 w-max'
                  aria-label={`Add ${product.name} to cart`}
                  onClick={() => {
                    dispatch(addToCart(product.id));
                  }}
                >
                  Add to Cart 🛒
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;
