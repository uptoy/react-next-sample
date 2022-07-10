import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Cart from './features/cart/Cart';
import CartLink from './features/cart/CartLink';
import Products from './features/products/Products';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div>
        <header className='p-4 h-14 bg-gradient-to-r from-teal-800 to-orange-300'>
          <nav className='flex'>
            <Link className='pr-4 font-bold text-white no-underline' to='/'>
              Home
            </Link>
            <Link className='font-bold text-white no-underline ' to='/products'>
              Products
            </Link>
            <CartLink />
          </nav>
        </header>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
