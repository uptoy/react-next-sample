import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { getMemoizedTotal } from './cartSlice';

const CartLink = () => {
  const numItems = useAppSelector(getMemoizedTotal);

  return (
    <Link to='/cart' className='ml-auto no-underline cursor-pointer'>
      <span className='p-2 text-sm bg-white rounded-md text-slate-900'>🛒&nbsp;&nbsp;{numItems ? numItems : 'Cart'}</span>
    </Link>
  );
};

export default CartLink;
